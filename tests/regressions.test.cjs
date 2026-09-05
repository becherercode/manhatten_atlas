const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');

function element() {
  const classes = new Set();
  return {
    value: '', textContent: '', innerHTML: '', dataset: {}, isConnected: true,
    handlers: {}, properties: {},
    style: { setProperty(key, value) { this.owner.properties[key] = value; } },
    classList: {
      contains: key => classes.has(key),
      add: key => classes.add(key), remove: key => classes.delete(key),
      toggle(key, enabled) { if (enabled) classes.add(key); else classes.delete(key); }
    },
    addEventListener(event, handler) { this.handlers[event] = handler; },
    setAttribute() {}, removeAttribute() {}
  };
}

function harness({ page = '', pathname = '/', saved = {}, fetch } = {}) {
  const storage = new Map(Object.entries(saved));
  const nodes = new Map();
  const groups = new Map();
  const scripts = new Map();
  let reloads = 0;
  const reset = element();
  nodes.set('#resetCookieChoice', reset);
  nodes.set('#cookieBanner', element());
  const label = element();
  const rent = element();
  groups.set('.nav-context', [label]);
  groups.set('.intro-grid article:first-child .stat', [rent]);
  const document = {
    title: '', body: { classList: { contains: name => name === page } },
    documentElement: { style: { setProperty() {} } },
    querySelector(selector) {
      if (selector.includes(',')) return [...scripts.values()][0] || null;
      return nodes.get(selector) || scripts.get(selector) || null;
    },
    querySelectorAll: selector => groups.get(selector) || [],
    getElementById: () => null,
    createElement: () => ({ dataset: {} }),
    head: { appendChild: script => scripts.set(`#${script.id}`, script) }
  };
  const ctx = vm.createContext({
    document, navigator: { languages: ['de'], language: 'de' },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key)
    },
    location: { protocol: 'https:', hostname: 'nyc-atlas.com' },
    window: {
      location: { pathname, search: '', hash: '', reload: () => reloads++ },
      addEventListener() {}
    },
    URLSearchParams, setTimeout, console,
    fetch: fetch || (() => { throw new Error('Unexpected network request'); })
  });
  vm.runInContext(source, ctx);
  return { ctx, nodes, groups, scripts, storage, reset, label, rent,
    run: code => vm.runInContext(code, ctx), reloads: () => reloads };
}

test('all borough URLs override a conflicting saved borough', () => {
  for (const key of ['manhattan', 'brooklyn', 'queens', 'bronx', 'staten-island']) {
    const h = harness({ page: 'borough-page', pathname: `/bezirke/${key}/`,
      saved: { nycAtlasBorough: key === 'manhattan' ? 'brooklyn' : 'manhattan' } });
    assert.equal(h.run('activeBoroughKey'), key);
    assert.equal(h.label.textContent, h.run('currentBorough().name'));
    assert.equal(h.rent.textContent, h.run('currentBorough().rentStat'));
    assert.match(h.ctx.document.title, new RegExp(h.label.textContent));
  }
});

test('home retains saved borough and rejects invalid storage values', () => {
  assert.equal(harness({ saved: { nycAtlasBorough: 'queens' } }).run('activeBoroughKey'), 'queens');
  assert.equal(harness({ saved: { nycAtlasBorough: '__proto__' } }).run('activeBoroughKey'), 'manhattan');
});

test('marketing revocation persists rejection before reloading', () => {
  const h = harness();
  h.run('hideCookieBanner("marketing")');
  assert.equal(h.scripts.size, 2);
  h.run('hideCookieBanner("essential")');
  assert.equal(h.storage.get('nycAtlasCookieChoice'), 'essential');
  assert.equal(h.reloads(), 1);
  const next = harness({ saved: Object.fromEntries(h.storage) });
  next.run('showCookieBanner()');
  assert.equal(next.scripts.size, 0);
});

test('reset reloads when marketing ran, and ordinary rejection does not reload', () => {
  const h = harness();
  h.run('hideCookieBanner("essential")');
  assert.equal(h.reloads(), 0);
  h.run('hideCookieBanner("accepted")');
  h.reset.handlers.click();
  assert.equal(h.storage.has('nycAtlasCookieChoice'), false);
  assert.equal(h.reloads(), 1);
});

test('language switch preserves comparison while borough switch resets it', () => {
  const h = harness();
  const a = element(), b = element();
  // Reinitialize with select controls available to the top-level DOM bindings.
  h.nodes.set('#compareA', a); h.nodes.set('#compareB', b);
  const ctx = vm.createContext({ ...h.ctx });
  vm.runInContext(source, ctx);
  a.value = 'Harlem'; b.value = 'Inwood';
  vm.runInContext('applyLanguage("en")', ctx);
  assert.equal(a.value, 'Harlem'); assert.equal(b.value, 'Inwood');
  vm.runInContext('selectBorough("brooklyn")', ctx);
  assert.equal(a.value, vm.runInContext('boroughs.brooklyn.defaultPair[0]', ctx));
  assert.equal(b.value, vm.runInContext('boroughs.brooklyn.defaultPair[1]', ctx));
});

function imageCard(title) {
  const card = element();
  card.style.owner = card;
  card.dataset.imageTitle = title;
  return card;
}

test('concurrent and repeated image hydration share one request and prefer original resolution', async () => {
  let calls = 0;
  const h = harness({ fetch: async () => {
    calls++;
    return { ok: true, json: async () => ({ thumbnail: { source: 'small.jpg' }, originalimage: { source: 'large.jpg' } }) };
  } });
  const a = imageCard('Harlem'), b = imageCard('Harlem');
  h.groups.set('[data-image-title]', [a, b]);
  await Promise.all([h.run('hydrateImages()'), h.run('hydrateImages()')]);
  assert.equal(calls, 1);
  assert.equal(a.properties['--image'], 'url("large.jpg")');
  const replacement = imageCard('Harlem');
  h.groups.set('[data-image-title]', [replacement]);
  await h.run('hydrateImages()');
  assert.equal(calls, 1);
  assert.equal(replacement.properties['--image'], 'url("large.jpg")');
});

test('failed image requests show fallback and are not repeated on rerender', async () => {
  let calls = 0;
  const h = harness({ fetch: async () => { calls++; return { ok: false, status: 503 }; } });
  for (let i = 0; i < 2; i++) {
    const card = imageCard('Harlem');
    h.groups.set('[data-image-title]', [card]);
    await h.run('hydrateImages()');
    assert.equal(card.classList.contains('image-fallback'), true);
  }
  assert.equal(calls, 1);
});

test('late image response cannot overwrite a changed image title', async () => {
  const resolve = {};
  const h = harness({ fetch: url => new Promise(done => { resolve[url.split('/').pop()] = done; }) });
  const card = imageCard('Harlem');
  h.groups.set('[data-image-title]', [card]);
  const first = h.run('hydrateImages()');
  card.dataset.imageTitle = 'Inwood';
  const second = h.run('hydrateImages()');
  resolve.Inwood({ ok: true, json: async () => ({ thumbnail: { source: 'inwood.jpg' } }) });
  await second;
  resolve.Harlem({ ok: true, json: async () => ({ thumbnail: { source: 'harlem.jpg' } }) });
  await first;
  assert.equal(card.properties['--image'], 'url("inwood.jpg")');
});
