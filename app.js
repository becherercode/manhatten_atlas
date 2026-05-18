const neighborhoods = [
  {
    name: "Inwood",
    region: "uptown",
    area: "Nordspitze",
    imageTitle: "Inwood Hill Park",
    vibe: "Felsen, Parkland und ruhige Wohnstrassen",
    price: "$$",
    rent: "2.4k-3.4k",
    future: "stabil mit punktueller Aufwertung",
    history:
      "Inwood ist eines der aeltesten besiedelten Gebiete Manhattans. Der Lenape-Bezug ist hier besonders sichtbar, spaeter praegten irische und dominikanische Communities das Viertel.",
    prices:
      "Im Manhattan-Vergleich bleibt Inwood relativ erreichbar. Die Preisdynamik entsteht vor allem durch Parknaehe, A-Train-Anbindung und begrenztes Angebot.",
    outlook:
      "Die Zukunft liegt weniger in spektakulaeren Neubauten als in sanfter Verdichtung, Erhalt der Wohnsubstanz und besserer Verbindung zum Harlem River.",
    character: "Gut fuer Menschen, die Manhattan wollen, aber Luft, Huegel und Nachbarschaftsruhe brauchen."
  },
  {
    name: "Washington Heights",
    region: "uptown",
    area: "Upper Manhattan",
    imageTitle: "Washington Heights, Manhattan",
    vibe: "Dominikanische Kultur, Hudson-Blicke, starke Community",
    price: "$$",
    rent: "2.6k-3.8k",
    future: "nachgefragt, aber community-gepraegt",
    history:
      "Das Viertel wuchs stark mit der U-Bahn und wurde im 20. Jahrhundert ein Zentrum dominikanischer Kultur in New York.",
    prices:
      "Noch moderater als Downtown, aber beliebt bei Haushalten, die Platz, Express-Zuege und Parks suchen.",
    outlook:
      "Aufwertung wird weiterkommen, doch lokale Geschaefte und lange Wohnbindung bleiben ein starkes Gegengewicht.",
    character: "Lebendig, laut, familiaer und eines der kulturell klarsten Viertel Manhattans."
  },
  {
    name: "Hamilton Heights",
    region: "uptown",
    area: "West Harlem",
    imageTitle: "Hamilton Heights, Manhattan",
    vibe: "Brownstones, Campusnaehe und historische Strassen",
    price: "$$",
    rent: "2.8k-4.0k",
    future: "wachsendes Interesse",
    history:
      "Benannt nach Alexander Hamilton, spaeter Teil der Harlem Renaissance und heute bekannt fuer gut erhaltene Reihenhaeuser.",
    prices:
      "Preislich zwischen Washington Heights und dem zentralen Harlem. Brownstone-Bloecke treiben Kaufpreise deutlich nach oben.",
    outlook:
      "Die Mischung aus Columbia-Naehe, Substanz und U-Bahn macht das Viertel fuer langfristige Kaeufer interessant.",
    character: "Elegant, wohnlich und leiser als viele Downtown-Alternativen."
  },
  {
    name: "Harlem",
    region: "uptown",
    area: "Central Harlem",
    imageTitle: "Harlem",
    vibe: "Musikgeschichte, Brownstones und grosse Boulevards",
    price: "$$",
    rent: "2.9k-4.3k",
    future: "weiterer Druck, starke Identitaet",
    history:
      "Harlem wurde weltweit durch die Harlem Renaissance, Jazz, Literatur und Schwarze Kulturgeschichte bekannt.",
    prices:
      "Weiter unter vielen Downtown-Lagen, aber hochwertige Brownstones und neue Apartments haben die Spanne stark vergroessert.",
    outlook:
      "Die zentrale Frage bleibt Balance: Investitionen und neue Infrastruktur, ohne die kulturelle Basis zu verdraengen.",
    character: "Ein Viertel mit Gewicht, Rhythmus und einer Geschichte, die man im Strassenbild noch spuert."
  },
  {
    name: "East Harlem",
    region: "uptown",
    area: "El Barrio",
    imageTitle: "East Harlem",
    vibe: "Puerto-ricanische Wurzeln, Museen, bezahlbarere Kanten",
    price: "$$",
    rent: "2.7k-3.9k",
    future: "viel Entwicklungsspielraum",
    history:
      "El Barrio ist eng mit puerto-ricanischer Migration, Community-Organisation und Kulturinstitutionen wie El Museo del Barrio verbunden.",
    prices:
      "Im Osten und Norden vergleichsweise erreichbarer, waehrend neue Projekte nahe Park Avenue und Second Avenue Druck erzeugen.",
    outlook:
      "Neue Verkehrsanbindungen und Wohnprojekte koennen viel veraendern; Schutz vor Verdraengung bleibt entscheidend.",
    character: "Direkt, lokal und kulturell sehr eigenstaendig."
  },
  {
    name: "Morningside Heights",
    region: "uptown",
    area: "Academic Acropolis",
    imageTitle: "Morningside Heights",
    vibe: "Columbia, Kirchen, Buchlaeden, ruhige Dichte",
    price: "$$$",
    rent: "3.3k-4.8k",
    future: "stabil durch Institutionen",
    history:
      "Das Viertel wurde durch Columbia University, Barnard, Riverside Church und Cathedral of St. John the Divine gepraegt.",
    prices:
      "Die Nachfrage ist robust, weil Studierende, Forschende und Familien um wenige gut angebundene Blocks konkurrieren.",
    outlook:
      "Institutionelles Wachstum und begrenzte Flaechen halten den Markt stabil, mit wenig Raum fuer radikale Veraenderung.",
    character: "Intellektuell, gruen und etwas abgehoben vom hektischeren Manhattan."
  },
  {
    name: "Upper West Side",
    region: "uptown",
    area: "West Side",
    imageTitle: "Upper West Side",
    vibe: "Parks, Kultur, Familien und klassische Apartmenthaeuser",
    price: "$$$$",
    rent: "4.6k-6.5k",
    future: "dauerhaft knapp",
    history:
      "Vom Boulevard-Ausbau und der U-Bahn profitierend, wurde die Upper West Side zum Wohnquartier fuer Kultur, Bildung und Familien.",
    prices:
      "Sehr gefragt durch Central Park, Riverside Park, Schulen und stabile Gebaeudesubstanz.",
    outlook:
      "Grosse Preisspruenge sind weniger wahrscheinlich als konstante Knappheit und Premiums fuer gute Grundrisse.",
    character: "Zivilisiert, kultiviert und im besten Sinn alltagstauglich."
  },
  {
    name: "Upper East Side",
    region: "uptown",
    area: "East Side",
    imageTitle: "Upper East Side",
    vibe: "Museen, Townhouses, Parknaehe und alte Eleganz",
    price: "$$$$",
    rent: "4.0k-6.2k",
    future: "stabil, mit Second-Avenue-Effekt",
    history:
      "Die Upper East Side steht fuer Gilded-Age-Mansions, Museum Mile und eine der etabliertesten Wohnlagen der Stadt.",
    prices:
      "Hohe Kaufkraft, viele Co-ops und Central-Park-Naehe halten das Niveau hoch; weiter oestlich ist es etwas zugaenglicher.",
    outlook:
      "Die Second Avenue Subway staerkt Yorkville und den oestlichen Rand langfristig.",
    character: "Ruhig, gepflegt und teurer als es auf den ersten Blick manchmal wirkt."
  },
  {
    name: "Hell's Kitchen",
    region: "midtown",
    area: "West Midtown",
    imageTitle: "Hell's Kitchen, Manhattan",
    vibe: "Theaternaehe, Restaurants, rauere Westseite",
    price: "$$$",
    rent: "4.0k-5.8k",
    future: "profitiert von Hudson Yards",
    history:
      "Einst Arbeiter- und Hafenviertel, spaeter eng mit Broadway, Nachtleben und immigrantischen Communities verbunden.",
    prices:
      "Die Lage zwischen Midtown, Hudson River Park und Theater District sorgt fuer hohe Mietnachfrage.",
    outlook:
      "Mehr Bueros und Wohnhochhaeuser im Westen verschieben die Wahrnehmung Richtung Premium-Westside.",
    character: "Urban, praktisch und mit mehr Kanten als Midtowns glatte Fassaden."
  },
  {
    name: "Midtown",
    region: "midtown",
    area: "Core Manhattan",
    imageTitle: "Midtown Manhattan",
    vibe: "Buerotuerme, Hotels, Pendlerstroeme und Ikonen",
    price: "$$$$",
    rent: "4.3k-6.4k",
    future: "Umbau vom reinen Buerozentrum",
    history:
      "Midtown wurde im 20. Jahrhundert zum kommerziellen Herz Manhattans, mit Grand Central, Rockefeller Center und Empire State Building.",
    prices:
      "Wohnlagen sind teuer, aber stark von Mikro-Lage, Gebaeudealter und Laermprofil abhaengig.",
    outlook:
      "Office-to-residential-Umbauten, modernisierte Bueros und bessere oeffentliche Raeume praegen die naechste Phase.",
    character: "Nicht immer romantisch, aber unschlagbar vernetzt."
  },
  {
    name: "Murray Hill",
    region: "midtown",
    area: "East Midtown",
    imageTitle: "Murray Hill, Manhattan",
    vibe: "Townhouses, Bars, UN-Naehe und Pendlerkomfort",
    price: "$$$",
    rent: "3.9k-5.5k",
    future: "solide, wenig dramatisch",
    history:
      "Aus einer wohlhabenden Wohnlage entwickelte sich ein dichtes Quartier zwischen Diplomatie, Midtown-Arbeit und jungen Berufstaetigen.",
    prices:
      "Oft etwas erreichbarer als Flatiron oder West Village, aber klar im Manhattan-Premiumsegment.",
    outlook:
      "Die UN-Naehe und gute Verkehrsanbindung sichern Nachfrage, grosse Identitaetsspruenge sind weniger wahrscheinlich.",
    character: "Pragmatisch, zentral und komfortabel."
  },
  {
    name: "Kips Bay",
    region: "midtown",
    area: "East Side",
    imageTitle: "Kips Bay, Manhattan",
    vibe: "Medizin, Wohnblocks und East-River-Naehe",
    price: "$$$",
    rent: "3.8k-5.4k",
    future: "stetige Verdichtung",
    history:
      "Historisch ein Ostfluss-Landungsgebiet, heute gepraegt von Krankenhaeusern, NYU-Medizin und grossen Wohnanlagen.",
    prices:
      "Etwas weniger glamouroes, dadurch im Vergleich zu Gramercy oder Flatiron gelegentlich effizienter bepreist.",
    outlook:
      "Gesundheits- und Forschungscluster halten die Nachfrage stabil; Waterfront-Verbesserungen koennen helfen.",
    character: "Unaufgeregt, zentral und funktional."
  },
  {
    name: "Chelsea",
    region: "midtown",
    area: "West Side",
    imageTitle: "Chelsea, Manhattan",
    vibe: "Galerien, High Line, Design und Nachtleben",
    price: "$$$$",
    rent: "5.0k-7.0k",
    future: "weiter Premium-Westside",
    history:
      "Chelsea wandelte sich von Industrie und Arbeiterwohnen zu einem Zentrum fuer Kunst, Design und LGBTQ+-Geschichte.",
    prices:
      "High Line, Galerien und neue Luxusprojekte haben das Viertel klar ins obere Segment gehoben.",
    outlook:
      "Die Westside-Entwicklung bleibt stark; Altbau-Charme und Neubau-Luxus koexistieren weiter.",
    character: "Kreativ, polished und abends deutlich lebendiger als morgens."
  },
  {
    name: "Hudson Yards",
    region: "midtown",
    area: "Far West Side",
    imageTitle: "Hudson Yards, Manhattan",
    vibe: "Glas, Luxus, Bueros und neue Stadtplanung",
    price: "$$$$",
    rent: "5.5k-8.0k",
    future: "noch nicht fertig erzaehlt",
    history:
      "Auf ehemaligen Bahnflaechen entstand eines der groessten privaten Entwicklungsprojekte der USA.",
    prices:
      "Neubau, Amenities und Lage an High Line und 7-Train setzen sehr hohe Mieten.",
    outlook:
      "Die soziale und kulturelle Tiefe muss noch wachsen; baulich bleibt das Gebiet ein Zukunftslabor.",
    character: "Sehr neu, sehr vertikal, eher Produkt als gewachsenes Viertel."
  },
  {
    name: "Flatiron",
    region: "midtown",
    area: "Central",
    imageTitle: "Flatiron Building",
    vibe: "Architektur, Buero-Lofts und Madison Square",
    price: "$$$$",
    rent: "5.0k-7.2k",
    future: "hohe Resilienz",
    history:
      "Das Flatiron Building machte die Gegend ikonisch; ehemalige Handels- und Produktionsraeume wurden zu Bueros und Wohnungen.",
    prices:
      "Sehr zentral, sehr begrenztes Angebot und hoher Design-Faktor treiben Preise.",
    outlook:
      "Hybrid Work veraendert Bueroflaechen, aber Madison Square und die Lage bleiben magnetisch.",
    character: "Kompakt, elegant und fuer Manhattan-Verhaeltnisse erstaunlich lesbar."
  },
  {
    name: "Gramercy",
    region: "midtown",
    area: "East Central",
    imageTitle: "Gramercy Park",
    vibe: "Private Parklage, Townhouses und leise Exklusivitaet",
    price: "$$$$",
    rent: "4.8k-7.0k",
    future: "knapp und konservativ",
    history:
      "Gramercy Park ist einer der wenigen privaten Parks New Yorks und gab dem Viertel eine ruhige, exklusive Identitaet.",
    prices:
      "Kleine Verfuegbarkeit und historische Substanz machen das Viertel teuer, besonders rund um den Park.",
    outlook:
      "Aenderungen kommen langsam; der Wert liegt gerade in der Stabilitaet.",
    character: "Diskret, altstaedtisch und ein bisschen unnahbar."
  },
  {
    name: "Greenwich Village",
    region: "downtown",
    area: "Village",
    imageTitle: "Greenwich Village",
    vibe: "Boheme, Jazz, NYU und verwinkelte Strassen",
    price: "$$$$",
    rent: "5.0k-7.5k",
    future: "dauerhaft knapp",
    history:
      "Das Village war Zentrum fuer Kuenstler, Beat-Kultur, LGBTQ+-Geschichte und Gegenkultur.",
    prices:
      "Historischer Charme, geringe Hochhausdichte und globale Nachfrage halten Preise extrem hoch.",
    outlook:
      "Erhaltungsregeln begrenzen Neubau; die Spannung zwischen Campus, Tourismus und Nachbarschaft bleibt.",
    character: "Romantisch, dicht und fast immer teurer als man gehofft hat."
  },
  {
    name: "West Village",
    region: "downtown",
    area: "Village",
    imageTitle: "West Village",
    vibe: "Kopfsteinpflaster, kleine Haeuser, Restaurants",
    price: "$$$$$",
    rent: "5.8k-8.5k",
    future: "ultra-knapp",
    history:
      "Der West Village-Strassenplan folgt alten Wegen statt dem Manhattan Grid und bewahrte dadurch einen eigenen Massstab.",
    prices:
      "Eines der teuersten Wohnviertel der Stadt: viel Nachfrage, wenig Angebot, starker Charme-Aufschlag.",
    outlook:
      "Wenig Neubau bedeutet dauerhafte Knappheit; Restaurants und Luxusretail bleiben stark.",
    character: "Sehr schoen, sehr begehrt, sehr wenig zufaellig."
  },
  {
    name: "East Village",
    region: "downtown",
    area: "East Side",
    imageTitle: "East Village, Manhattan",
    vibe: "Musik, Bars, Tenements und studentische Energie",
    price: "$$$",
    rent: "4.0k-5.8k",
    future: "weiter beliebt, rauer Kern bleibt",
    history:
      "Von immigrantischen Tenements zu Punk, Kunst und Nachtleben: Das East Village traegt viele Gegenkultur-Schichten.",
    prices:
      "Teurer als sein raues Image vermuten laesst, besonders westlich und nahe Union Square.",
    outlook:
      "Die Nachfrage von jungen Berufstaetigen und NYU-Umfeld bleibt hoch; kleine Geschaefte kaempfen mit Mieten.",
    character: "Unberechenbar, lebendig und sehr New York."
  },
  {
    name: "Lower East Side",
    region: "downtown",
    area: "LES",
    imageTitle: "Lower East Side",
    vibe: "Einwanderungsgeschichte, Nachtleben, Galerien",
    price: "$$$",
    rent: "4.0k-5.9k",
    future: "starke Gentrifizierungsdynamik",
    history:
      "Die Lower East Side ist ein Kernort juedischer, italienischer, chinesischer und puerto-ricanischer Einwanderungsgeschichte.",
    prices:
      "Altbau-Tenements und neue Luxusbauten erzeugen eine grosse Spanne, aber die Richtung bleibt teuer.",
    outlook:
      "Neue Projekte am East River und Tourismusdruck veraendern den Rand; kulturelle Institutionen halten Erinnerung sichtbar.",
    character: "Geschichtet, laut und abends besonders intensiv."
  },
  {
    name: "SoHo",
    region: "downtown",
    area: "Cast-Iron District",
    imageTitle: "SoHo, Manhattan",
    vibe: "Gusseisenfassaden, Mode, Lofts und globaler Retail",
    price: "$$$$$",
    rent: "6.0k-9.0k",
    future: "Luxus bleibt, Nutzungsmix im Wandel",
    history:
      "Aus Industrie-Lofts wurde ein Kuenstlerquartier und dann eine der bekanntesten Shopping-Lagen New Yorks.",
    prices:
      "Sehr hohe Kauf- und Mietpreise, besonders fuer grosse Lofts und renovierte historische Gebaeude.",
    outlook:
      "Regeln fuer Wohnen und Retail werden weiter diskutiert; die Marke SoHo bleibt extrem stark.",
    character: "Schoen, teuer und tagsueber oft mehr Laufsteg als Wohnstrasse."
  },
  {
    name: "TriBeCa",
    region: "downtown",
    area: "Downtown West",
    imageTitle: "Tribeca",
    vibe: "Lagerhaus-Lofts, Prominenz, Schulen und Ruhe",
    price: "$$$$$",
    rent: "6.2k-9.5k",
    future: "Premium bleibt Premium",
    history:
      "TriBeCa wandelte sich von Lager- und Handelsgebiet zu einem der exklusivsten Wohnviertel Manhattans.",
    prices:
      "Sehr grosses Wohnflaechenformat, gute Schulen und Prominenz treiben Spitzenpreise.",
    outlook:
      "Kaum Flaechenreserven und starke Eigentumsbasis sprechen fuer anhaltende Knappheit.",
    character: "Luxus ohne viel Laerm, mit breiten Strassen und schwerem Backstein."
  },
  {
    name: "Chinatown",
    region: "downtown",
    area: "Lower Manhattan",
    imageTitle: "Chinatown, Manhattan",
    vibe: "Maerkte, Restaurants, Familienbetriebe und Dichte",
    price: "$$",
    rent: "3.2k-4.8k",
    future: "Druck durch Nachbarviertel",
    history:
      "Chinatown entstand im 19. Jahrhundert und ist bis heute ein wichtiges Zentrum chinesischer und asiatisch-amerikanischer Kultur.",
    prices:
      "Gegenueber SoHo und TriBeCa noch guenstiger, aber die Naehe zu Luxuslagen erhoeht den Druck.",
    outlook:
      "Die Zukunft haengt stark an Gewerbemieten, Tourismus und dem Schutz kleiner Familienbetriebe.",
    character: "Sinnlich, dicht und wirtschaftlich vielschichtig."
  },
  {
    name: "NoHo",
    region: "downtown",
    area: "North of Houston",
    imageTitle: "NoHo, Manhattan",
    vibe: "Landmark-Lofts, Theaternaehe und Boutique-Luxus",
    price: "$$$$$",
    rent: "5.8k-8.8k",
    future: "klein, knapp, begehrt",
    history:
      "NoHo liegt zwischen Village und East Village und bewahrt viele historische Loft- und Theatergebaeude.",
    prices:
      "Sehr kleines Angebot und architektonische Qualitaet sorgen fuer ein klares Premium.",
    outlook:
      "Neue Projekte bleiben selten; der Wert liegt in Lage, Substanz und Exklusivitaet.",
    character: "Klein, kultiviert und fuer Kenner."
  },
  {
    name: "Financial District",
    region: "downtown",
    area: "FiDi",
    imageTitle: "Financial District, Manhattan",
    vibe: "Wall Street, Hochhaeuser, Wassernaehe und neue Wohnungen",
    price: "$$$$",
    rent: "4.5k-6.6k",
    future: "mehr Wohnen, weniger reines Buero",
    history:
      "Hier begann New York als Handelsstadt; Wall Street machte das Viertel spaeter zum globalen Finanzsymbol.",
    prices:
      "Luxus-Tuerme und umgebaute Buerogebaeude dominieren, mit Premium fuer Aussicht und Amenities.",
    outlook:
      "Office-to-residential-Konversionen koennen FiDi noch staerker zum Wohnviertel machen.",
    character: "Tagsueber sehr geschaeftig, nachts ruhiger als viele erwarten."
  },
  {
    name: "Battery Park City",
    region: "downtown",
    area: "Hudson Waterfront",
    imageTitle: "Battery Park City",
    vibe: "Promenaden, Familien, Wasser und geplante Ruhe",
    price: "$$$$",
    rent: "4.8k-7.0k",
    future: "Klimaanpassung als Schluessel",
    history:
      "Battery Park City entstand auf aufgeschuettetem Land als geplantes Waterfront-Quartier.",
    prices:
      "Hohe Mieten durch Wasserblick, Schulen, Parks und grosse Apartmenthaeuser.",
    outlook:
      "Resilienz gegen Sturmfluten und steigende Wasserstaende wird zum zentralen Zukunftsthema.",
    character: "Gruen, kontrolliert und familienfreundlich."
  }
];

const grid = document.querySelector("#neighborhoodGrid");
const detailPanel = document.querySelector("#detailPanel");
const searchInput = document.querySelector("#searchInput");
const languageSelect = document.querySelector("#languageSelect");
const compareA = document.querySelector("#compareA");
const compareB = document.querySelector("#compareB");
const comparisonOutput = document.querySelector("#comparisonOutput");
const segmentButtons = document.querySelectorAll(".segment");

let selectedRegion = "all";
let selectedNeighborhood = null;

function getSavedLanguage() {
  try {
    return localStorage.getItem("manhattanAtlasLanguage") || "de";
  } catch {
    return "de";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("manhattanAtlasLanguage", language);
  } catch {
    // Direct file previews may block storage; the page should still work.
  }
}

let currentLanguage = getSavedLanguage();

const translations = {
  de: {
    navNeighborhoods: "Viertel",
    navCompare: "Vergleich",
    navSources: "Quellen",
    languageLabel: "Sprache",
    heroEyebrow: "Geschichte, Preise, Zukunft",
    heroTitle: "Nachbarschaften von Manhatten",
    heroCopy:
      "Kacheln fuer die wichtigsten Viertel, kurze Analysen und Bildmotive, die den Charakter jedes Ortes zeigen. Die Preisangaben sind bewusst als Marktspannen und Niveau eingeordnet.",
    searchLabel: "Suchen",
    searchPlaceholder: "z.B. Harlem, SoHo, Chelsea",
    regionAll: "Alle",
    statRentTitle: "Median-Miete Manhattan",
    statRentCopy:
      "Realtor.com meldete fuer Maerz 2026 eine mediane Angebotsmiete von etwa 5.100 Dollar pro Monat.",
    statIndexCopy:
      "NYCEDC zeigte im April 2026 einen StreetEasy Rent Index deutlich ueber Vor-Covid-Niveau.",
    statProfilesCopy:
      "Vom historischen Inwood bis zum Financial District: kompakte Kacheln fuer schnelle Vergleiche.",
    marketEyebrow: "Market snapshot",
    marketTitle: "Manhattan auf einen Blick",
    marketCopy: "Ein kurzer Marktimpuls, bevor du zwei Nachbarschaften direkt vergleichst.",
    statIndexTitle: "Rent Index",
    statProfilesTitle: "Profile",
    sourcesPrefix: "Preis- und Markthinweise basieren auf oeffentlichen Marktindikatoren von",
    sourcesSuffix: "und Nachbarschaftsdaten aus Wikipedia. Die Website ersetzt keine Immobilienberatung.",
    compareEyebrow: "Zwei Viertel",
    compareTitle: "Viertel vergleichen",
    compareFirst: "Erstes Viertel",
    compareSecond: "Zweites Viertel",
    comparePrice: "Preisniveau",
    compareRent: "Mietspanne",
    compareFuture: "Zukunft",
    compareCharacter: "Charakter",
    compareProjects: "Projekte",
    compareEvents: "Events",
    chooseEyebrow: "Viertel waehlen",
    neighborhoodsTitle: "Nachbarschaften",
    analysisEyebrow: "Analyse",
    emptyTitle: "Waehle eine Kachel aus.",
    emptyCopy:
      "Dann erscheinen hier Geschichte, Preisniveau, Zukunftsdynamik und ein kurzer Charaktercheck.",
    sourcesTitle: "Quellen & Einordnung",
    rentLabel: "Miete ca.",
    monthLabel: "Monat",
    priceLevel: "Preisniveau",
    rentFact: "Miete",
    futureFact: "Zukunft",
    noResults: "Keine passende Nachbarschaft gefunden.",
    analysisOverview: "Ausfuehrliche Einordnung",
    analysisHistory: "Geschichte",
    analysisPrices: "Preise",
    analysisFuture: "Zukunft",
    analysisProjects: "Gebaeude & Projekte",
    analysisEvents: "Events & Kultur",
    analysisExpectation: "Zukunftserwartung",
    analysisCharacter: "Charakter"
  },
  en: {
    navNeighborhoods: "Neighborhoods",
    navCompare: "Compare",
    navSources: "Sources",
    languageLabel: "Language",
    heroEyebrow: "History, prices, future",
    heroTitle: "Neighborhoods of Manhattan",
    heroCopy:
      "Clickable cards for the most important neighborhoods, concise analysis and images that show the character of each place. Prices are framed as market ranges and relative levels.",
    searchLabel: "Search",
    searchPlaceholder: "e.g. Harlem, SoHo, Chelsea",
    regionAll: "All",
    statRentTitle: "Median Manhattan rent",
    statRentCopy:
      "Realtor.com reported a median asking rent of about $5,100 per month for March 2026.",
    statIndexCopy:
      "In April 2026, NYCEDC showed a StreetEasy rent index clearly above its pre-Covid level.",
    statProfilesCopy:
      "From historic Inwood to the Financial District: compact cards for quick comparison.",
    marketEyebrow: "Market snapshot",
    marketTitle: "Manhattan at a glance",
    marketCopy: "A quick market pulse before comparing two neighborhoods directly.",
    statIndexTitle: "Rent Index",
    statProfilesTitle: "Profiles",
    sourcesPrefix: "Price and market notes are based on public indicators from",
    sourcesSuffix: "and neighborhood data from Wikipedia. This website does not replace real-estate advice.",
    compareEyebrow: "Two neighborhoods",
    compareTitle: "Compare neighborhoods",
    compareFirst: "First neighborhood",
    compareSecond: "Second neighborhood",
    comparePrice: "Price level",
    compareRent: "Rent range",
    compareFuture: "Future",
    compareCharacter: "Character",
    compareProjects: "Projects",
    compareEvents: "Events",
    chooseEyebrow: "Choose a neighborhood",
    neighborhoodsTitle: "Neighborhoods",
    analysisEyebrow: "Analysis",
    emptyTitle: "Select a card.",
    emptyCopy:
      "History, price level, future dynamics and a short character check will appear here.",
    sourcesTitle: "Sources & context",
    rentLabel: "Approx. rent",
    monthLabel: "month",
    priceLevel: "Price level",
    rentFact: "Rent",
    futureFact: "Future",
    noResults: "No matching neighborhood found.",
    analysisOverview: "Detailed context",
    analysisHistory: "History",
    analysisPrices: "Prices",
    analysisFuture: "Future",
    analysisProjects: "Buildings & projects",
    analysisEvents: "Events & culture",
    analysisExpectation: "Future outlook",
    analysisCharacter: "Character"
  },
  es: {
    navNeighborhoods: "Barrios",
    navCompare: "Comparar",
    navSources: "Fuentes",
    languageLabel: "Idioma",
    heroEyebrow: "Historia, precios, futuro",
    heroTitle: "Barrios de Manhattan",
    heroCopy:
      "Tarjetas clicables para los barrios mas importantes, analisis breve e imagenes que muestran el caracter de cada lugar. Los precios se presentan como rangos de mercado.",
    searchLabel: "Buscar",
    searchPlaceholder: "p. ej. Harlem, SoHo, Chelsea",
    regionAll: "Todos",
    statRentTitle: "Renta mediana en Manhattan",
    statRentCopy:
      "Realtor.com informo una renta mediana solicitada de unos 5.100 dolares al mes en marzo de 2026.",
    statIndexCopy:
      "En abril de 2026, NYCEDC mostro un indice de renta de StreetEasy claramente por encima del nivel previo al Covid.",
    statProfilesCopy:
      "Desde el historico Inwood hasta el Financial District: tarjetas compactas para comparar rapido.",
    marketEyebrow: "Resumen del mercado",
    marketTitle: "Manhattan de un vistazo",
    marketCopy: "Un pulso rapido del mercado antes de comparar dos barrios directamente.",
    statIndexTitle: "Indice de renta",
    statProfilesTitle: "Perfiles",
    sourcesPrefix: "Las notas de precios y mercado se basan en indicadores publicos de",
    sourcesSuffix: "y datos de barrios de Wikipedia. Esta web no sustituye el asesoramiento inmobiliario.",
    compareEyebrow: "Dos barrios",
    compareTitle: "Comparar barrios",
    compareFirst: "Primer barrio",
    compareSecond: "Segundo barrio",
    comparePrice: "Nivel de precios",
    compareRent: "Rango de renta",
    compareFuture: "Futuro",
    compareCharacter: "Caracter",
    compareProjects: "Proyectos",
    compareEvents: "Eventos",
    chooseEyebrow: "Elegir barrio",
    neighborhoodsTitle: "Barrios",
    analysisEyebrow: "Analisis",
    emptyTitle: "Elige una tarjeta.",
    emptyCopy:
      "Aqui apareceran historia, nivel de precios, dinamica futura y una breve lectura del caracter.",
    sourcesTitle: "Fuentes y contexto",
    rentLabel: "Renta aprox.",
    monthLabel: "mes",
    priceLevel: "Nivel de precios",
    rentFact: "Renta",
    futureFact: "Futuro",
    noResults: "No se encontro ningun barrio.",
    analysisOverview: "Contexto detallado",
    analysisHistory: "Historia",
    analysisPrices: "Precios",
    analysisFuture: "Futuro",
    analysisProjects: "Edificios y proyectos",
    analysisEvents: "Eventos y cultura",
    analysisExpectation: "Expectativa futura",
    analysisCharacter: "Caracter"
  },
  fr: {
    navNeighborhoods: "Quartiers",
    navCompare: "Comparer",
    navSources: "Sources",
    languageLabel: "Langue",
    heroEyebrow: "Histoire, prix, avenir",
    heroTitle: "Quartiers de Manhattan",
    heroCopy:
      "Des cartes cliquables pour les quartiers les plus importants, une analyse concise et des images qui montrent le caractere de chaque lieu. Les prix sont presentes comme des fourchettes de marche.",
    searchLabel: "Rechercher",
    searchPlaceholder: "ex. Harlem, SoHo, Chelsea",
    regionAll: "Tous",
    statRentTitle: "Loyer median a Manhattan",
    statRentCopy:
      "Realtor.com a signale un loyer median demande d'environ 5 100 dollars par mois en mars 2026.",
    statIndexCopy:
      "En avril 2026, NYCEDC montrait un indice de loyers StreetEasy nettement au-dessus du niveau pre-Covid.",
    statProfilesCopy:
      "De l'historique Inwood au Financial District : des cartes compactes pour comparer rapidement.",
    marketEyebrow: "Apercu du marche",
    marketTitle: "Manhattan en un coup d'oeil",
    marketCopy: "Un signal rapide du marche avant de comparer deux quartiers directement.",
    statIndexTitle: "Indice des loyers",
    statProfilesTitle: "Profils",
    sourcesPrefix: "Les indications de prix et de marche s'appuient sur des indicateurs publics de",
    sourcesSuffix: "et des donnees de quartier issues de Wikipedia. Ce site ne remplace pas un conseil immobilier.",
    compareEyebrow: "Deux quartiers",
    compareTitle: "Comparer les quartiers",
    compareFirst: "Premier quartier",
    compareSecond: "Deuxieme quartier",
    comparePrice: "Niveau de prix",
    compareRent: "Fourchette de loyer",
    compareFuture: "Avenir",
    compareCharacter: "Caractere",
    compareProjects: "Projets",
    compareEvents: "Evenements",
    chooseEyebrow: "Choisir un quartier",
    neighborhoodsTitle: "Quartiers",
    analysisEyebrow: "Analyse",
    emptyTitle: "Selectionnez une carte.",
    emptyCopy:
      "L'histoire, le niveau des prix, la dynamique future et un bref portrait du caractere apparaitront ici.",
    sourcesTitle: "Sources et contexte",
    rentLabel: "Loyer env.",
    monthLabel: "mois",
    priceLevel: "Niveau de prix",
    rentFact: "Loyer",
    futureFact: "Avenir",
    noResults: "Aucun quartier correspondant.",
    analysisOverview: "Contexte detaille",
    analysisHistory: "Histoire",
    analysisPrices: "Prix",
    analysisFuture: "Avenir",
    analysisProjects: "Batiments et projets",
    analysisEvents: "Evenements et culture",
    analysisExpectation: "Perspectives",
    analysisCharacter: "Caractere"
  },
  pt: {
    navNeighborhoods: "Bairros",
    navCompare: "Comparar",
    navSources: "Fontes",
    languageLabel: "Idioma",
    heroEyebrow: "Historia, precos, futuro",
    heroTitle: "Bairros de Manhattan",
    heroCopy:
      "Cartoes clicaveis para os bairros mais importantes, analises curtas e imagens que mostram o caracter de cada lugar. Os precos sao apresentados como faixas de mercado.",
    searchLabel: "Buscar",
    searchPlaceholder: "ex. Harlem, SoHo, Chelsea",
    regionAll: "Todos",
    statRentTitle: "Aluguel mediano em Manhattan",
    statRentCopy:
      "A Realtor.com informou um aluguel mediano pedido de cerca de US$ 5.100 por mes em marco de 2026.",
    statIndexCopy:
      "Em abril de 2026, a NYCEDC mostrou um indice de aluguel StreetEasy claramente acima do nivel pre-Covid.",
    statProfilesCopy:
      "Do historico Inwood ao Financial District: cartoes compactos para comparar rapidamente.",
    marketEyebrow: "Resumo do mercado",
    marketTitle: "Manhattan em um olhar",
    marketCopy: "Um pulso rapido do mercado antes de comparar dois bairros diretamente.",
    statIndexTitle: "Indice de aluguel",
    statProfilesTitle: "Perfis",
    sourcesPrefix: "As notas de preco e mercado se baseiam em indicadores publicos de",
    sourcesSuffix: "e dados de bairros da Wikipedia. Este site nao substitui consultoria imobiliaria.",
    compareEyebrow: "Dois bairros",
    compareTitle: "Comparar bairros",
    compareFirst: "Primeiro bairro",
    compareSecond: "Segundo bairro",
    comparePrice: "Nivel de preco",
    compareRent: "Faixa de aluguel",
    compareFuture: "Futuro",
    compareCharacter: "Caracter",
    compareProjects: "Projetos",
    compareEvents: "Eventos",
    chooseEyebrow: "Escolher bairro",
    neighborhoodsTitle: "Bairros",
    analysisEyebrow: "Analise",
    emptyTitle: "Escolha um cartao.",
    emptyCopy:
      "Aqui aparecem historia, nivel de preco, dinamica futura e uma breve leitura do caracter.",
    sourcesTitle: "Fontes e contexto",
    rentLabel: "Aluguel aprox.",
    monthLabel: "mes",
    priceLevel: "Nivel de preco",
    rentFact: "Aluguel",
    futureFact: "Futuro",
    noResults: "Nenhum bairro correspondente encontrado.",
    analysisOverview: "Contexto detalhado",
    analysisHistory: "Historia",
    analysisPrices: "Precos",
    analysisFuture: "Futuro",
    analysisProjects: "Edificios e projetos",
    analysisEvents: "Eventos e cultura",
    analysisExpectation: "Perspectiva futura",
    analysisCharacter: "Caracter"
  },
  zh: {
    navNeighborhoods: "街区",
    navCompare: "比较",
    navSources: "来源",
    languageLabel: "语言",
    heroEyebrow: "历史、价格、未来",
    heroTitle: "曼哈顿街区",
    heroCopy:
      "通过可点击的卡片浏览主要街区，查看简洁分析和展现每个地方气质的图片。价格以市场区间和相对水平呈现。",
    searchLabel: "搜索",
    searchPlaceholder: "例如 Harlem、SoHo、Chelsea",
    regionAll: "全部",
    statRentTitle: "曼哈顿租金中位数",
    statRentCopy:
      "Realtor.com 报告称，2026 年 3 月曼哈顿挂牌租金中位数约为每月 5,100 美元。",
    statIndexCopy:
      "NYCEDC 在 2026 年 4 月显示，StreetEasy 租金指数明显高于疫情前水平。",
    statProfilesCopy:
      "从历史悠久的 Inwood 到 Financial District：用紧凑卡片快速比较。",
    marketEyebrow: "市场概览",
    marketTitle: "曼哈顿一览",
    marketCopy: "在直接比较两个街区之前，先快速了解市场脉搏。",
    statIndexTitle: "租金指数",
    statProfilesTitle: "街区档案",
    sourcesPrefix: "价格和市场说明基于以下公开指标：",
    sourcesSuffix: "以及 Wikipedia 的街区资料。本网站不能替代房地产建议。",
    compareEyebrow: "两个街区",
    compareTitle: "比较街区",
    compareFirst: "第一个街区",
    compareSecond: "第二个街区",
    comparePrice: "价格水平",
    compareRent: "租金区间",
    compareFuture: "未来",
    compareCharacter: "气质",
    compareProjects: "项目",
    compareEvents: "活动",
    chooseEyebrow: "选择街区",
    neighborhoodsTitle: "街区",
    analysisEyebrow: "分析",
    emptyTitle: "选择一张卡片。",
    emptyCopy:
      "这里会显示历史、价格水平、未来动态和简短的街区气质分析。",
    sourcesTitle: "来源与背景",
    rentLabel: "约租金",
    monthLabel: "月",
    priceLevel: "价格水平",
    rentFact: "租金",
    futureFact: "未来",
    noResults: "没有找到匹配的街区。",
    analysisOverview: "详细背景",
    analysisHistory: "历史",
    analysisPrices: "价格",
    analysisFuture: "未来",
    analysisProjects: "建筑与项目",
    analysisEvents: "活动与文化",
    analysisExpectation: "未来展望",
    analysisCharacter: "气质"
  }
};

function t(key) {
  return translations[currentLanguage]?.[key] || translations.de[key] || key;
}

function fallbackGradient(index) {
  const gradients = [
    "linear-gradient(135deg, #214e4a, #d7a44a)",
    "linear-gradient(135deg, #7c3228, #c2b280)",
    "linear-gradient(135deg, #273d55, #b76b45)",
    "linear-gradient(135deg, #4f5d3d, #d9c28a)",
    "linear-gradient(135deg, #2e2a28, #a9563d)"
  ];
  return gradients[index % gradients.length];
}

function imageUrl(title) {
  return `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
}

function safeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

async function hydrateImages() {
  const cards = document.querySelectorAll("[data-image-title]");

  cards.forEach(async (card) => {
    try {
      const response = await fetch(imageUrl(card.dataset.imageTitle), { mode: "cors" });
      if (!response.ok) return;
      const data = await response.json();
      const source = data?.originalimage?.source || data?.thumbnail?.source;
      if (source) {
        card.style.setProperty("--image", `url("${source.replace(/"/g, "%22")}")`);
        card.style.setProperty("--detail-image", `url("${source.replace(/"/g, "%22")}")`);
        card.style.setProperty("--gallery-image", `url("${source.replace(/"/g, "%22")}")`);
      }
    } catch {
      card.classList.add("image-fallback");
    }
  });
}

function stars(price) {
  return price;
}

function renderCards() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = neighborhoods.filter((item) => {
    const matchesRegion = selectedRegion === "all" || item.region === selectedRegion;
    const searchable = `${item.name} ${item.area} ${item.vibe}`.toLowerCase();
    return matchesRegion && searchable.includes(query);
  });

  grid.innerHTML = filtered.length
    ? filtered
        .map((item) => {
          const originalIndex = neighborhoods.indexOf(item);
          const localized = localizedNeighborhood(item);
          return `
            <button class="card" type="button" data-name="${item.name}" data-image-title="${item.imageTitle}" style="--image: ${fallbackGradient(originalIndex)}">
              <span class="card-content">
                <span class="card-kicker"><span>${item.area}</span><span>${stars(item.price)}</span></span>
                <h3>${item.name}</h3>
                <p>${localized.vibe}</p>
                <span class="price-row"><span>${t("rentLabel")}</span><strong>$${item.rent}/${t("monthLabel")}</strong></span>
              </span>
            </button>
          `;
        })
        .join("")
    : `<div class="no-results">${t("noResults")}</div>`;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const match = neighborhoods.find((item) => item.name === card.dataset.name);
      if (match) {
        selectedNeighborhood = match;
        renderDetail(match);
        detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  hydrateImages();
}

function shortText(text, limit = 150) {
  if (text.length <= limit) return text;
  const clipped = text.slice(0, limit);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 80 ? lastSpace : limit).trim()}...`;
}

function paragraphs(items) {
  return items.map((text) => `<span class="analysis-paragraph">${text}</span>`).join("");
}

function localizedNeighborhood(item, extra = extendedProfiles[item.name] || {}) {
  if (currentLanguage === "de") {
    return {
      vibe: item.vibe,
      future: item.future,
      history: item.history,
      prices: item.prices,
      outlook: item.outlook,
      character: item.character,
      description: extra.description || item.character,
      developments: extra.developments || item.outlook,
      events: extra.events || "Lokale Parks, Restaurants, Kulturorte und saisonale Strassenprogramme praegen den Alltag.",
      expectation: extra.expectation || item.future
    };
  }

  const copy = {
    en: {
      vibe: `${item.name} combines architecture, street life and local identity in ${item.area}.`,
      future: "active long-term transformation",
      description: `${item.name} is best understood through its location, architecture and everyday rhythm. The neighborhood mixes housing, public life, cultural anchors and changing real-estate demand into a distinct Manhattan profile.`,
      history: `${item.name} developed through several layers of Manhattan history: transport corridors, housing growth, immigration, commerce, cultural institutions and later waves of reinvestment. Those layers are still visible in the street grid, building types and local businesses.`,
      prices: `The rent range of about $${item.rent} per month is a practical orientation point. Actual prices vary strongly by building age, light, elevator, amenities, subway access and proximity to parks or the waterfront. The relative price level here is ${item.price}.`,
      outlook: `${item.name} is likely to keep evolving through a mix of housing demand, public-space upgrades, climate resilience, transit access and commercial change. Its future depends on whether new investment supports everyday neighborhood life.`,
      developments: `Development pressure in and around ${item.name} is shaped by selective renovation, new housing where zoning allows it, upgraded public space and nearby institutional or infrastructure projects. The most visible change will probably appear along key corridors rather than on every block.`,
      events: `The cultural life of ${item.name} is carried by parks, restaurants, galleries, performance spaces, schools, markets and recurring neighborhood events. These moments show when the area becomes more than a residential market and turns into a public stage.`,
      expectation: `The likely outlook is continued demand with uneven change from block to block. ${item.name} should become more valuable when it combines mobility, identity, public space and stable local services.`,
      character: `${item.name} feels defined by ${item.vibe.toLowerCase()}. Its appeal comes from the way daily routines, architecture and public life meet at street level.`
    },
    es: {
      vibe: `${item.name} combina arquitectura, vida urbana e identidad local en ${item.area}.`,
      future: "transformacion activa a largo plazo",
      description: `${item.name} se entiende mejor por su ubicacion, su arquitectura y su ritmo cotidiano. El barrio mezcla vivienda, vida publica, cultura y demanda inmobiliaria en un perfil muy propio de Manhattan.`,
      history: `${item.name} se formo por capas de historia urbana: transporte, crecimiento residencial, inmigracion, comercio, instituciones culturales y nuevas olas de inversion. Esas capas todavia se leen en las calles, los edificios y los negocios locales.`,
      prices: `La renta estimada de unos $${item.rent} al mes sirve como orientacion. Los precios reales cambian mucho segun edificio, luz, ascensor, servicios, metro y cercania a parques o al agua. El nivel relativo de precios aqui es ${item.price}.`,
      outlook: `${item.name} seguira cambiando por la demanda de vivienda, mejoras del espacio publico, resiliencia climatica, transporte y transformacion comercial. Su futuro dependera de que la inversion mejore tambien la vida diaria del barrio.`,
      developments: `Los proyectos alrededor de ${item.name} se concentran en renovaciones, vivienda nueva donde la normativa lo permite, mejores espacios publicos e infraestructura cercana. El cambio sera mas visible en corredores clave que en cada manzana.`,
      events: `La vida cultural de ${item.name} se apoya en parques, restaurantes, galerias, espacios de espectaculo, escuelas, mercados y eventos recurrentes. Ahi se ve cuando el barrio es mas que un mercado residencial.`,
      expectation: `La expectativa es una demanda sostenida con cambios desiguales por manzana. ${item.name} ganara valor si combina movilidad, identidad, espacio publico y servicios locales estables.`,
      character: `${item.name} se define por ${item.vibe.toLowerCase()}. Su atractivo nace del encuentro entre rutinas diarias, arquitectura y vida en la calle.`
    },
    fr: {
      vibe: `${item.name} associe architecture, vie de rue et identite locale dans ${item.area}.`,
      future: "transformation active a long terme",
      description: `${item.name} se comprend par sa position, son architecture et son rythme quotidien. Le quartier combine logement, vie publique, lieux culturels et demande immobiliere dans un profil tres manhattanien.`,
      history: `${item.name} s'est construit par couches successives : transports, habitat, immigration, commerce, institutions culturelles puis reinvestissement. Ces traces restent visibles dans les rues, les immeubles et les commerces.`,
      prices: `La fourchette d'environ $${item.rent} par mois sert de repere. Les prix varient selon l'immeuble, la lumiere, l'ascenseur, les services, le metro et la proximite des parcs ou de l'eau. Le niveau relatif est ${item.price}.`,
      outlook: `${item.name} devrait continuer a evoluer avec la demande residentielle, les espaces publics, la resilience climatique, les transports et le commerce. Son avenir dependra de la qualite de cette transformation au quotidien.`,
      developments: `Les projets autour de ${item.name} passent par des renovations, du logement neuf lorsque le zonage le permet, des espaces publics ameliores et des infrastructures proches. Le changement sera surtout visible sur certains axes.`,
      events: `La vie culturelle de ${item.name} s'appuie sur parcs, restaurants, galeries, scenes, ecoles, marches et evenements recurrents. Ces moments montrent quand le quartier devient une scene publique.`,
      expectation: `La perspective la plus probable est une demande durable avec des changements inegaux selon les rues. ${item.name} prendra de la valeur s'il combine mobilite, identite et services locaux solides.`,
      character: `${item.name} est marque par ${item.vibe.toLowerCase()}. Son attrait vient de la rencontre entre usages quotidiens, architecture et vie de rue.`
    },
    pt: {
      vibe: `${item.name} combina arquitetura, vida de rua e identidade local em ${item.area}.`,
      future: "transformacao ativa de longo prazo",
      description: `${item.name} e melhor entendido pela localizacao, pela arquitetura e pelo ritmo cotidiano. O bairro mistura moradia, vida publica, cultura e demanda imobiliaria em um perfil tipico de Manhattan.`,
      history: `${item.name} cresceu em camadas: transporte, habitacao, imigracao, comercio, instituicoes culturais e novas ondas de investimento. Essas camadas ainda aparecem nas ruas, nos edificios e nos negocios locais.`,
      prices: `A faixa de aluguel de cerca de $${item.rent} por mes serve como orientacao. Os precos variam conforme predio, luz, elevador, servicos, acesso ao metro e proximidade de parques ou da agua. O nivel relativo aqui e ${item.price}.`,
      outlook: `${item.name} deve continuar mudando com demanda por moradia, melhorias urbanas, resiliencia climatica, transporte e comercio. O futuro depende de a nova valorizacao tambem fortalecer a vida diaria do bairro.`,
      developments: `Os projetos em torno de ${item.name} passam por reformas, novas moradias onde o zoneamento permite, espacos publicos melhores e infraestrutura proxima. A mudanca deve aparecer mais em corredores especificos.`,
      events: `A vida cultural de ${item.name} vem de parques, restaurantes, galerias, espacos de apresentacao, escolas, mercados e eventos recorrentes. Esses momentos mostram o bairro como palco publico.`,
      expectation: `A tendencia e demanda continua, com mudancas diferentes de rua para rua. ${item.name} ganha valor quando combina mobilidade, identidade, espaco publico e servicos locais estaveis.`,
      character: `${item.name} se define por ${item.vibe.toLowerCase()}. O apelo esta no encontro entre rotina diaria, arquitetura e vida nas ruas.`
    },
    zh: {
      vibe: `${item.name} 将建筑、街道生活和本地身份结合在 ${item.area}。`,
      future: "长期持续转型",
      description: `${item.name} 可以从位置、建筑和日常节奏来理解。这里把居住、公共生活、文化节点和房地产需求结合成一个具有曼哈顿特征的街区。`,
      history: `${item.name} 的形成经历了多层城市历史：交通发展、住宅增长、移民、商业、文化机构以及后来的再投资。这些层次仍然体现在街道、建筑类型和本地商铺中。`,
      prices: `约 $${item.rent} 每月的租金区间可作为参考。实际价格会因楼龄、采光、电梯、配套、地铁距离以及公园或水岸位置而变化。这里的相对价格水平是 ${item.price}。`,
      outlook: `${item.name} 未来会继续受到住房需求、公共空间改善、气候韧性、交通和商业变化的影响。关键在于新的投资能否同时提升日常街区生活。`,
      developments: `${item.name} 周边的发展主要来自翻新、允许范围内的新住宅、公共空间升级以及附近基础设施项目。变化通常会先出现在主要街道和走廊。`,
      events: `${item.name} 的文化生活来自公园、餐厅、画廊、表演空间、学校、市场和定期活动。这些活动让街区不只是居住市场，也成为公共舞台。`,
      expectation: `更可能的趋势是需求持续，但不同街段变化不均。若 ${item.name} 能结合交通、身份、公共空间和稳定的本地服务，它的价值会继续增强。`,
      character: `${item.name} 的气质来自${item.vibe}。它的吸引力在于日常生活、建筑和街道公共性之间的结合。`
    }
  };

  return copy[currentLanguage] || copy.en;
}

function expandedText(item, extra, type) {
  const localized = localizedNeighborhood(item, extra);
  if (currentLanguage !== "de") {
    const texts = {
      overview: [
        localized.description,
        localized.outlook,
        localized.expectation
      ],
      history: [
        localized.history,
        currentLanguage === "zh"
          ? `从街道尺度、建筑形式和公共空间可以读出 ${item.name} 的历史。新的项目不仅改变价格，也改变人群、商业和日常节奏。`
          : `${item.name} should be read through street scale, building types and public life. New projects do not only change prices; they also change who uses the area, how businesses work and how the neighborhood feels day to day.`,
        currentLanguage === "zh"
          ? `因此，历史不是附加信息，而是理解 ${item.name} 未来变化的基础。`
          : `For that reason, history is not background decoration. It is the foundation for understanding how ${item.name} may change in the coming years.`
      ],
      prices: [localized.prices, localized.expectation],
      outlook: [localized.outlook, localized.expectation],
      developments: [localized.developments, localized.outlook],
      events: [localized.events, localized.character],
      expectation: [localized.expectation, localized.outlook],
      character: [localized.character, localized.description]
    };
    return texts[type] || [localized.character];
  }

  const texts = {
    overview: [
      extra.description,
      `Fuer die Einordnung wichtig ist die Lage im Bereich ${item.area}: Das Viertel funktioniert nicht nur ueber seine Immobilienpreise, sondern ueber den Mix aus Verkehr, Strassenleben, Parks, Kulturorten und Alltagsversorgung. Wer ${item.name} analysiert, sollte deshalb immer fragen, ob die Nachfrage aus Wohnen, Arbeit, Tourismus, Institutionen oder lokaler Community entsteht.`,
      `Aktuell wirkt ${item.name} vor allem durch diesen Charakter: ${item.character} Die Zukunftserwartung ist ${item.future}; das bedeutet, dass Veraenderungen eher ueber mehrere Jahre sichtbar werden als durch eine einzelne Momentaufnahme.`
    ],
    history: [
      item.history,
      `${item.name} laesst sich historisch als Teil einer groesseren Manhattan-Bewegung lesen: Erst entstanden Verkehrsachsen, Parks, Hafen- oder Gewerbeflaechen, danach folgten Wohnhaeuser, Laeden, Schulen, Kirchen und kulturelle Orte. Diese Schichten sind wichtig, weil Manhattan nicht gleichmaessig gewachsen ist. Manche Viertel wurden durch Industrie und Handel gross, andere durch Universitaeten, Theater, Einwanderung, Wohlstand oder U-Bahn-Linien.`,
      `Im Strassenbild sieht man diese Geschichte bis heute. Gebaeudehoehen, Blockgroessen, Ladenfronten und Parks verraten, ob ein Viertel eher aus alten Wohnbloecken, ehemaligen Lagerhaeusern, Brownstones, Buerotuermen oder geplanten Neubauten besteht. Bei ${item.name} zeigt sich das besonders in der Mischung aus ${item.vibe.toLowerCase()}. Dadurch entsteht ein eigener Massstab, der den Immobilienmarkt genauso praegt wie die kulturelle Identitaet.`,
      `Soziale Geschichte spielt ebenfalls eine grosse Rolle. Viele Manhattan-Viertel wurden von Einwanderung, Community-Organisation, Kunst, Musik, Religion oder politischem Aktivismus geformt. Diese lokalen Netzwerke entscheiden oft darueber, ob Veraenderung als Aufwertung, Verlust oder neue Chance wahrgenommen wird. Bei ${item.name} ist deshalb nicht nur interessant, was gebaut wird, sondern auch, wer schon lange dort lebt und welche Institutionen das Viertel zusammenhalten.`,
      `Fuer die Zukunft bedeutet diese historische Tiefe: Neue Projekte muessen sich an einer vorhandenen Identitaet messen lassen. Wenn neue Wohnungen, Hotels, Bueros oder Infrastruktur entstehen, veraendern sie nicht nur Preise, sondern auch Rhythmus, Publikum und Alltag. Genau deshalb ist Geschichte hier kein Rueckblick am Rand, sondern der Schluessel, um die naechsten Jahre von ${item.name} zu verstehen.`
    ],
    prices: [
      item.prices,
      `Die angegebene Mietspanne von etwa $${item.rent} pro Monat ist als Orientierung zu lesen. In Manhattan unterscheiden sich Preise stark nach Gebaeudealter, Etage, Licht, Aufzug, Doorman, Grundriss, U-Bahn-Naehe und Park- oder Wasserblick. Zwei Wohnungen im selben Viertel koennen deshalb voellig verschiedene Maerkte bedienen.`,
      `Bei ${item.name} ist das Preisniveau ${item.price}. Besonders wichtig ist, ob neue Nachfrage durch Jobs, Kultur, Schulen, Tourismus oder bessere Verkehrsanbindung entsteht. Solche Faktoren wirken oft zuerst auf Mieten und spaeter auf Kaufpreise.`
    ],
    outlook: [
      item.outlook,
      extra.expectation,
      `Die Zukunft sollte man als Zusammenspiel aus Bauprojekten, Klimaresilienz, Verkehr, Gewerbemieten und Nachbarschaftsschutz lesen. Ein Viertel kann teurer werden und gleichzeitig kulturell fragiler wirken, oder baulich dichter werden und dadurch bessere Alltagsangebote gewinnen.`
    ],
    developments: [
      extra.developments,
      `Diese Projekte sind wichtig, weil sie nicht nur neue Flaechen schaffen. Sie veraendern Wege, Blickachsen, Erdgeschosse, Ladedruck, Arbeitsplaetze und manchmal auch das Image eines Viertels. Besonders in Manhattan reicht schon ein neues Transitprojekt oder ein grosser Campus, um mehrere benachbarte Blocks neu zu bewerten.`,
      `Fuer ${item.name} heisst das: Die gebaute Zukunft wird wahrscheinlich selektiv sichtbar. Manche Strassen bleiben fast unveraendert, waehrend einzelne Korridore durch neue Nutzungen, Sanierungen oder bessere oeffentliche Raeume deutlich moderner wirken.`
    ],
    events: [
      extra.events,
      `Events sind fuer die Analyse wichtig, weil sie zeigen, wann ein Viertel nur Wohnort ist und wann es zur Buehne fuer Besucher, Kultur und Gastronomie wird. Wiederkehrende Festivals, Museumsprogramme, Parkevents oder Strassenfeste schaffen Aufmerksamkeit und koennen lokale Geschaefte staerken.`,
      `Bei ${item.name} liegt der Wert deshalb nicht nur in Architektur oder Lage. Entscheidend ist auch, ob es Orte gibt, an denen Menschen regelmaessig zusammenkommen: Parks, Theater, Maerkte, Musikorte, Kirchen, Schulen oder Community-Zentren.`
    ],
    expectation: [
      extra.expectation,
      `Kurzfristig werden Mieten und Verfuegbarkeit weiter stark vom gesamtstaedtischen Markt abhaengen. Mittel- bis langfristig zaehlen vor allem neue Infrastruktur, Klimaschutz, Arbeitsplaetze und die Frage, ob lokale Identitaet erhalten bleibt.`,
      `Die wahrscheinlichste Entwicklung fuer ${item.name}: keine komplette Neuerfindung, sondern eine Verdichtung vorhandener Tendenzen. Das Viertel wird staerker nachgefragt, wenn es gute Mobilitaet, klare Identitaet und stabile Alltagsangebote verbinden kann.`
    ],
    character: [
      item.character,
      `Der Charakter eines Viertels entsteht aus kleinen Signalen: Wie laut sind die Strassen abends? Gibt es eher Familien, Studierende, Touristen, Bueroangestellte oder langjaehrige Bewohner? Sind die Erdgeschosse lokal oder global? Fuehlt sich der oeffentliche Raum offen, exklusiv, improvisiert oder geplant an?`,
      `${item.name} wirkt besonders durch ${item.vibe.toLowerCase()}. Genau diese Atmosphaere entscheidet oft, ob Menschen das Viertel nur besuchen, dort arbeiten oder wirklich dort wohnen wollen.`
    ]
  };

  return texts[type] || [item.character];
}

function galleryTitles(item) {
  const galleries = {
    "Inwood": ["Inwood Hill Park", "Fort Tryon Park", "The Cloisters", "Dyckman Street"],
    "Washington Heights": [
      "Washington Heights, Manhattan",
      "George Washington Bridge",
      "United Palace",
      "Fort Tryon Park"
    ],
    "Hamilton Heights": [
      "Hamilton Heights, Manhattan",
      "Hamilton Grange National Memorial",
      "City College of New York",
      "Riverbank State Park"
    ],
    "Harlem": ["Harlem", "Apollo Theater", "125th Street (Manhattan)", "Strivers' Row"],
    "East Harlem": ["East Harlem", "El Museo del Barrio", "Museum of the City of New York", "La Marqueta"],
    "Morningside Heights": [
      "Morningside Heights",
      "Columbia University",
      "Riverside Church",
      "Cathedral of Saint John the Divine"
    ],
    "Upper West Side": [
      "Upper West Side",
      "American Museum of Natural History",
      "Lincoln Center",
      "Riverside Park (Manhattan)"
    ],
    "Upper East Side": [
      "Upper East Side",
      "Metropolitan Museum of Art",
      "Guggenheim Museum",
      "Park Avenue"
    ],
    "Hell's Kitchen": ["Hell's Kitchen, Manhattan", "Restaurant Row (New York City)", "Hudson River Park", "Theater District, Manhattan"],
    "Midtown": ["Midtown Manhattan", "Grand Central Terminal", "Rockefeller Center", "Empire State Building"],
    "Murray Hill": ["Murray Hill, Manhattan", "The Morgan Library & Museum", "United Nations Headquarters", "Park Avenue"],
    "Kips Bay": ["Kips Bay, Manhattan", "Bellevue Hospital", "NYU Langone Health", "East River"],
    "Chelsea": ["Chelsea, Manhattan", "High Line", "Chelsea Market", "Chelsea Piers"],
    "Hudson Yards": ["Hudson Yards, Manhattan", "30 Hudson Yards", "The Shed (Hudson Yards)", "Vessel (structure)"],
    "Flatiron": ["Flatiron Building", "Flatiron District", "Madison Square", "Metropolitan Life Insurance Company Tower"],
    "Gramercy": ["Gramercy Park", "Gramercy Park Historic District", "The Players (New York City)", "Irving Plaza"],
    "Greenwich Village": ["Greenwich Village", "Washington Square Park", "Stonewall Inn", "Village Vanguard"],
    "West Village": ["West Village", "Bleecker Street", "Stonewall Inn", "Hudson River Park"],
    "East Village": ["East Village, Manhattan", "Tompkins Square Park", "St. Mark's Place", "Cooper Union"],
    "Lower East Side": ["Lower East Side", "Tenement Museum", "Essex Market", "Katz's Delicatessen"],
    "SoHo": ["SoHo, Manhattan", "Cast-iron architecture", "Greene Street", "Haughwout Building"],
    "TriBeCa": ["Tribeca", "Tribeca Festival", "Hudson River Park", "New York Mercantile Exchange"],
    "Chinatown": ["Chinatown, Manhattan", "Doyers Street", "Canal Street (Manhattan)", "Mahayana Buddhist Temple"],
    "NoHo": ["NoHo, Manhattan", "Astor Place", "The Public Theater", "Cooper Union"],
    "Financial District": ["Financial District, Manhattan", "Wall Street", "New York Stock Exchange", "South Street Seaport"],
    "Battery Park City": ["Battery Park City", "Brookfield Place (New York City)", "Wagner Park", "Hudson River Park"]
  };

  return [...new Set(galleries[item.name] || [item.imageTitle, item.name, `${item.name}, Manhattan`])].slice(0, 4);
}

function galleryMarkup(item, index) {
  const titles = galleryTitles(item);
  return `
    <div class="detail-image gallery-shell" aria-label="Bildgalerie ${safeAttr(item.name)}">
      <div class="gallery-track" data-gallery-track>
        ${titles
          .map(
            (title, imageIndex) => `
              <div class="gallery-slide" data-image-title="${safeAttr(title)}" style="--gallery-image: ${fallbackGradient(index + imageIndex)}">
              </div>
            `
          )
          .join("")}
      </div>
      <div class="gallery-dots" aria-hidden="true">
        ${titles.map((_, dotIndex) => `<span class="gallery-dot${dotIndex === 0 ? " active" : ""}"></span>`).join("")}
      </div>
    </div>
  `;
}

function bindGalleries() {
  document.querySelectorAll("[data-gallery-track]").forEach((track) => {
    const shell = track.closest(".gallery-shell");
    const dots = shell?.querySelectorAll(".gallery-dot") || [];
    if (!dots.length) return;

    const updateDots = () => {
      const index = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
    };

    track.addEventListener("scroll", updateDots, { passive: true });
    updateDots();
  });
}

function analysisCard(title, summary, fullParagraphs, options = {}) {
  const featured = options.featured ? " featured" : "";
  return `
    <button class="analysis-block expandable${featured}" type="button" aria-expanded="false">
      <span class="analysis-head">
        <span class="analysis-title">${title}</span>
        <span class="analysis-icon" aria-hidden="true"></span>
      </span>
      <span class="analysis-summary">${shortText(summary)}</span>
      <span class="analysis-full">${paragraphs(fullParagraphs)}</span>
    </button>
  `;
}

function bindAnalysisCards() {
  document.querySelectorAll(".analysis-block.expandable").forEach((card) => {
    card.addEventListener("click", () => {
      const isOpen = card.classList.contains("expanded");
      document.querySelectorAll(".analysis-block.expandable.expanded").forEach((openCard) => {
        openCard.classList.remove("expanded");
        openCard.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        card.classList.add("expanded");
        card.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function renderCompareSelectors() {
  if (!compareA || !compareB) return;

  const currentA = compareA.value || "Harlem";
  const currentB = compareB.value || "TriBeCa";
  const options = neighborhoods
    .map((item) => `<option value="${item.name}">${item.name}</option>`)
    .join("");

  compareA.innerHTML = options;
  compareB.innerHTML = options;
  compareA.value = neighborhoods.some((item) => item.name === currentA) ? currentA : neighborhoods[0].name;
  compareB.value = neighborhoods.some((item) => item.name === currentB) ? currentB : neighborhoods[1].name;
}

function compareRow(label, left, right) {
  return `
    <div class="comparison-row">
      <div class="comparison-label">${label}</div>
      <div>${left}</div>
      <div>${right}</div>
    </div>
  `;
}

function renderComparison() {
  if (!compareA || !compareB || !comparisonOutput) return;

  let first = neighborhoods.find((item) => item.name === compareA.value) || neighborhoods[0];
  let second = neighborhoods.find((item) => item.name === compareB.value) || neighborhoods[1];

  if (first.name === second.name) {
    second = neighborhoods.find((item) => item.name !== first.name) || second;
    compareB.value = second.name;
  }

  const firstExtra = extendedProfiles[first.name];
  const secondExtra = extendedProfiles[second.name];
  const firstLocalized = localizedNeighborhood(first, firstExtra);
  const secondLocalized = localizedNeighborhood(second, secondExtra);

  comparisonOutput.innerHTML = `
    <div class="comparison-grid">
      <article class="comparison-card">
        <span>${first.area}</span>
        <h3>${first.name}</h3>
        <p>${shortText(firstLocalized.description, 210)}</p>
      </article>
      <article class="comparison-card">
        <span>${second.area}</span>
        <h3>${second.name}</h3>
        <p>${shortText(secondLocalized.description, 210)}</p>
      </article>
    </div>
    <div class="comparison-table">
      ${compareRow(t("comparePrice"), first.price, second.price)}
      ${compareRow(t("compareRent"), `$${first.rent}/${t("monthLabel")}`, `$${second.rent}/${t("monthLabel")}`)}
      ${compareRow(t("compareFuture"), firstLocalized.future, secondLocalized.future)}
      ${compareRow(t("compareCharacter"), firstLocalized.character, secondLocalized.character)}
      ${compareRow(t("compareProjects"), firstLocalized.developments, secondLocalized.developments)}
      ${compareRow(t("compareEvents"), firstLocalized.events, secondLocalized.events)}
    </div>
  `;
}

const extendedProfiles = {
  "Inwood": {
    description:
      "Inwood ist Manhattans landschaftlich ungewoehnlichstes Viertel: schroffe Felsen, alte Waldstuecke, Sportplaetze, kleinere Apartmenthaeuser und eine sehr lokale Restaurant- und Ladenstruktur. Es fuehlt sich weniger wie Downtown-Manhattan an und eher wie ein eigenstaendiger noerdlicher Stadtteil mit direktem Zugang zu Natur.",
    developments:
      "Wichtig ist die Inwood NYC Neighborhood Plan-Zone rund um Broadway, Dyckman Street und die Harlem-River-Kante. Erwartet werden mehr Wohnraum, neue Gewerbeflaechen und eine staerkere Orientierung zum Wasser. Der sensible Punkt bleibt, ob neue Investitionen bezahlbaren Wohnraum sichern oder bestehende Mieter verdraengen.",
    events:
      "Inwood Hill Park, Fort Tryon Park und The Met Cloisters praegen den Kulturkalender. Typisch sind Sommerkonzerte, Parkprogramme, Community-Feste und kleinere Food-Events rund um Dyckman Street.",
    expectation:
      "Die Zukunft ist wahrscheinlich ein langsamer Aufwertungsprozess: bessere Waterfront, mehr Neubau an einzelnen Korridoren, aber weiter ein ruhigeres Profil als Harlem oder Washington Heights."
  },
  "Washington Heights": {
    description:
      "Washington Heights ist dicht, musikalisch, dominikanisch gepraegt und topografisch dramatisch. Die Nachbarschaft verbindet Hudson River, George Washington Bridge, laute Einkaufsstrassen und intime Wohnblocks mit erstaunlich viel Hoehenlage.",
    developments:
      "Die groessten Veraenderungen entstehen eher durch Sanierung, kleinere Neubauten und neue Gastronomie als durch einen einzelnen Megaprojekt-Boom. Die Naehe zu Columbia Medical Center und die gute A-Train-Anbindung stuetzen Nachfrage.",
    events:
      "United Palace, Little Dominican Republic, Fort Tryon Park und die Dyckman-Corridors sorgen fuer Konzerte, Kulturprogramme, Strassenleben und dominikanische Community-Events.",
    expectation:
      "Washington Heights wird teurer bleiben, aber seine Identitaet wird stark von langjaehrigen Communities, lokalen Geschaeften und Mieterschutzdebatten gepraegt bleiben."
  },
  "Hamilton Heights": {
    description:
      "Hamilton Heights wirkt wie eine ruhigere, architektonisch feinere Schwester von Harlem: Brownstones, breite Treppen, historische Districts und die Naehe zu City College und Columbia Manhattanville.",
    developments:
      "Die staerkste Dynamik kommt von der Broadway- und Amsterdam-Avenue-Achse, von sanierten Brownstones und von der Ausstrahlung der Columbia-Manhattanville-Entwicklung im Sueden.",
    events:
      "City College, Riverbank State Park, lokale Open-Studio-Formate und kleinere Jazz- und Literaturprogramme geben dem Viertel akademische und kulturelle Energie.",
    expectation:
      "Langfristig duerfte Hamilton Heights weiter hochwertiger werden, ohne seine reine Wohnfunktion zu verlieren. Besonders historische Haeuser bleiben knapp und gefragt."
  },
  "Harlem": {
    description:
      "Harlem ist kein einheitlicher Markt, sondern ein kultureller Stadtteil mit mehreren Schichten: 125th Street, Brownstone-Bloecke, Gospel, Jazz, Restaurants, Kirchen, Theater und eine lange Geschichte Schwarzer Selbstorganisation.",
    developments:
      "Relevant sind die weitere Staerkung von 125th Street, neue Wohn- und Hotelprojekte, Kulturinstitutionen wie das Apollo und die Rueckkehr beziehungsweise Erneuerung grosser Kunstorte. Auch die Subway-Entwicklung in East Harlem strahlt auf Central Harlem aus.",
    events:
      "Harlem Week, Apollo-Programme, Jazz in lokalen Clubs, Gospel-Angebote, Strassenfeste und Kulturprogramme rund um 125th Street sind zentrale Besuchsgruende.",
    expectation:
      "Harlem wird weiter investieren und zugleich um kulturelle Kontinuitaet ringen. Die Zukunft haengt stark daran, ob neue Projekte lokale Unternehmen und Bewohner einbeziehen."
  },
  "East Harlem": {
    description:
      "East Harlem, El Barrio, ist rauer, lokaler und weniger poliert als die Upper East Side direkt suedlich davon. Puerto-ricanische Geschichte, Sozialwohnungsbauten, Museen, Schulen und alte Gewerbestrassen liegen hier eng zusammen.",
    developments:
      "Das wichtigste Zukunftsprojekt ist die Second Avenue Subway Phase 2. Die Q-Linie soll von 96th Street bis 125th Street verlaengert werden, mit neuen Stationen bei 106th, 116th und 125th Street. Das kann Erreichbarkeit, Ladenlagen und Immobilienwerte stark veraendern.",
    events:
      "El Museo del Barrio, Museum of the City of New York, La Marqueta und Community-Feste geben dem Viertel ein klares kulturelles Profil.",
    expectation:
      "Die Transitverbesserung duerfte Nachfrage und Preise heben. Entscheidend wird sein, ob erschwinglicher Wohnraum und lokale Kultur parallel gesichert werden."
  },
  "Morningside Heights": {
    description:
      "Morningside Heights ist ein Hochschulplateau zwischen Riverside Park und Morningside Park. Es wirkt ruhiger als Midtown, aber dichter und institutioneller als klassische Wohnviertel.",
    developments:
      "Columbia, Barnard und benachbarte Manhattanville-Projekte stabilisieren Nachfrage. Die bauliche Zukunft ist weniger spektakulaer, aber kontinuierlich: Modernisierung von Campusflaechen, Wohnheimen, Laboren und Erdgeschossnutzungen.",
    events:
      "Universitaetsvortraege, Cathedral-Konzerte, Book Culture, Riverside-Kulturprogramme und akademische Festivals sind typisch.",
    expectation:
      "Das Viertel bleibt ein stabiler Wissens- und Wohnstandort. Preislich begrenzt vor allem das knappe Angebot die Entspannung."
  },
  "Upper West Side": {
    description:
      "Die Upper West Side ist eines der ausbalanciertesten Wohnviertel Manhattans: zwei grosse Parks, Kultur, Schulen, Nachbarschaftslaeden und klassische Prewar-Apartmenthaeuser.",
    developments:
      "Grosse Neubauflaechen sind selten. Veraenderungen entstehen durch Sanierungen, einzelne Luxusprojekte an Broadway/Amsterdam und Investitionen in Parks, Kulturhaeuser und Verkehr.",
    events:
      "Lincoln Center, Beacon Theatre, American Museum of Natural History, SummerStage-nahe Programme und Wochenmaerkte machen das Viertel ganzjaehrig aktiv.",
    expectation:
      "Die Zukunft ist weniger Boom als Dauerknappheit. Gute Grundrisse, Parknaehe und Familieninfrastruktur bleiben die Preistreiber."
  },
  "Upper East Side": {
    description:
      "Die Upper East Side verbindet alte Vermoegensgeschichte, Museum Mile, Townhouses, Co-ops und eine zunehmend wichtigere oestliche Achse Richtung Yorkville.",
    developments:
      "Der Effekt der Second Avenue Subway wirkt weiter, besonders in Yorkville und weiter oestlich. Klinik- und Forschungsstandorte entlang First Avenue sorgen ebenfalls fuer stabile Nachfrage.",
    events:
      "Museum Mile Festival, Met-Ausstellungen, Frick-Programme, Park Avenue Armory und Central-Park-Events sind die kulturellen Schwergewichte.",
    expectation:
      "Das Viertel bleibt hochpreisig und stabil. Wachstum kommt eher aus besserer Erreichbarkeit im Osten als aus radikalem Neubau."
  },
  "Hell's Kitchen": {
    description:
      "Hell's Kitchen ist die praktische, restaurantstarke Westseite von Midtown: Theaternaehe, Bars, kleine Wohnhaeuser, neue Tuerme und ein direkter Bezug zum Hudson River.",
    developments:
      "Wichtig sind die Westside-Entwicklung, Hudson-Yards-Ausstrahlung, der Umbau rund um Port Authority und Pier 94. Sunset Pier 94 Studios bringt moderne Film- und TV-Produktion an die Hudson-Kante.",
    events:
      "Broadway, Off-Broadway, Restaurant Row, Pride-nahe Ausgehkultur, Hudson River Park und Pier-Programme treiben Besuch und Nachtleben.",
    expectation:
      "Hell's Kitchen wird weiter zwischen altem Wohnviertel und neuer Westside-Premiumlage pendeln. Gastronomie und Mediennutzung duerften zulegen."
  },
  "Midtown": {
    description:
      "Midtown ist Manhattans Arbeitsmaschine: Grand Central, Times Square, Buerotuerme, Hotels, Einzelhandel, Tourismus und sehr unterschiedliche Mikrolagen.",
    developments:
      "Midtown East ist der wichtigste Bau-Schwerpunkt: 270 Park Avenue ist als neue JPMorgan-Zentrale ein Symbol des Rezoning-Zyklus; 175 Park Avenue am Grand-Central-Umfeld ist ein weiteres grosses Mixed-Use-Projekt. Dazu kommen Broadway Public Realm-Verbesserungen und Buero-Modernisierungen.",
    events:
      "Broadway-Premieren, Bryant-Park-Programme, Rockefeller-Center-Saison, Weihnachtsfenster, Paraden und Business-Events sorgen fuer staendige Frequenz.",
    expectation:
      "Midtown wird nicht verschwinden, sondern sich vom reinen Buerozentrum zum gemischteren Arbeits-, Hotel- und Wohnstandort umbauen."
  },
  "Murray Hill": {
    description:
      "Murray Hill liegt bequem zwischen Grand Central, Kips Bay und NoMad. Es ist zentral, aber wohnlicher als Midtown und weniger modisch als Flatiron.",
    developments:
      "Die Zukunft haengt an Midtown-East-Investitionen, Grand-Central-Naehe und dem medizinisch-akademischen Wachstum suedlich in Kips Bay. Einzelne Wohnsanierungen und neue Gastronomie veraendern die Erdgeschosse.",
    events:
      "Morgan Library, UN-nahe Veranstaltungen, Rooftop- und Bar-Szene sowie kleine Nachbarschaftsmaerkte praegen den Kalender.",
    expectation:
      "Murray Hill bleibt ein solider Nutzwert-Markt: zentral, gut vermietbar, aber weniger ikonisch als seine Nachbarn."
  },
  "Kips Bay": {
    description:
      "Kips Bay ist funktional, medizinisch und zunehmend strategisch. Krankenhaeuser, NYU Langone, Bellevue, Wohnblocks und East-River-Naehe bestimmen das Bild.",
    developments:
      "SPARC Kips Bay ist das Schluesselprojekt: ein geplanter Life-Sciences-, Gesundheits- und Bildungs-Campus mit oeffentlichen Einrichtungen und neuer wirtschaftlicher Rolle fuer den Ostkorridor.",
    events:
      "Medizinische Konferenzen, NYU- und Bellevue-Umfeld, East-River-Promenaden und lokale Food-Spots sorgen fuer Alltagsfrequenz statt klassischem Tourismus.",
    expectation:
      "Wenn SPARC wie geplant vorankommt, kann Kips Bay deutlich profilierter werden: mehr Forschung, mehr Jobs, mehr Nachfrage nach Wohnungen nahe dem Campus."
  },
  "Chelsea": {
    description:
      "Chelsea ist eine Mischung aus Kunstmarkt, LGBTQ+-Geschichte, Industrie-Lofts, High Line, Nightlife und neuen Luxuswohnhaeusern.",
    developments:
      "Die High-Line- und West-Chelsea-Zone bleibt der staerkste Entwicklungsraum. Neue Wohnprojekte, Galerien, Hotels und Office-Umnutzungen entstehen besonders westlich von Tenth Avenue.",
    events:
      "Gallery Openings am Donnerstagabend, High-Line-Programme, Chelsea Market, Pride-Events und Kunstmessen machen Chelsea zu einem dauernden Kulturkorridor.",
    expectation:
      "Chelsea bleibt teuer und begehrt. Der Wettbewerb zwischen Galerien, Luxuswohnen, Hotels und Nachtleben wird die Nutzungsmischung weiter verschieben."
  },
  "Hudson Yards": {
    description:
      "Hudson Yards ist Manhattans neuestes Grossquartier: vertikal, geplant, hochpreisig und noch immer im Aufbau seiner sozialen Identitaet.",
    developments:
      "Der Western Rail Yard ist das grosse naechste Kapitel. Der Plan sieht tausende neue Wohnungen, dauerhaft erschwingliche Einheiten, oeffentliche Flaechen, Schule, Kita und weitere Mixed-Use-Bauten ueber aktiven Bahnanlagen vor.",
    events:
      "The Shed, Edge, High Line, Public-Space-Programme, Retail-Events und Corporate-Veranstaltungen bestimmen die Frequenz.",
    expectation:
      "Hudson Yards wird baulich dichter und wohnlicher. Ob es sich wie ein echtes Viertel anfuehlt, haengt an Erdgeschossleben, Schulen, Parks und Alltagspreisen."
  },
  "Flatiron": {
    description:
      "Flatiron ist eines der am besten lesbaren Stadtbilder Manhattans: ikonisches Dreiecksgebaeude, Madison Square, Designbueros, Fitness, Restaurants und kurze Wege.",
    developments:
      "Die Zukunft liegt in Buero-Modernisierung, Broadway- und Fifth-Avenue-Public-Realm-Projekten sowie in der weiteren Aktivierung rund um Madison Square. Das Flatiron Building bleibt ein identitaetsstiftender Anker.",
    events:
      "Madison Square Park Conservancy, Design- und Food-Events, Eataly, saisonale Installationen und Tech-/Design-Treffen praegen den Alltag.",
    expectation:
      "Flatiron bleibt resilient: selbst wenn Bueronutzung flexibler wird, tragen Lage, Architektur und Gastronomie den Markt."
  },
  "Gramercy": {
    description:
      "Gramercy ist leise, knapp und institutionell alt: private Parklage, Townhouses, kleine Blocks und ein Wohngefuehl, das bewusst nicht nach Spektakel sucht.",
    developments:
      "Grosse Neubauten sind wegen Denkmalschutz und kleiner Parzellen selten. Veraenderung entsteht eher an den Raendern Richtung Union Square, Kips Bay und Flatiron.",
    events:
      "Gramercy Park Hotel-Geschichte, Players Club, Irving Plaza, Union-Square-Naehe und saisonale Parktraditionen bilden die kulturelle Umgebung.",
    expectation:
      "Die Exklusivitaet bleibt stabil. Gramercy wird sich langsam entwickeln und gerade deshalb wertvoll bleiben."
  },
  "Greenwich Village": {
    description:
      "Greenwich Village ist ein historisch dichter Kulturraum: unregelmaessige Strassen, Jazz, Cafes, NYU, Aktivismus, Theater und eine starke Erinnerung an Gegenkultur.",
    developments:
      "NYU, kleinere Umnutzungen und Sanierungen sind die staerksten Kraefte. Grosser Neubau ist durch historische Schutzgebiete begrenzt, was das Angebot knapp haelt.",
    events:
      "Washington Square Park, Village Vanguard, Comedy Cellar, Halloween-Parade-nahe Routen, NYU-Events und kleine Theater machen das Village dauerhaft aktiv.",
    expectation:
      "Die Zukunft ist ein Balanceakt zwischen Campusdruck, Tourismus, Denkmalschutz und Nachbarschaftsleben. Knappheit bleibt der zentrale Preistreiber."
  },
  "West Village": {
    description:
      "West Village ist Manhattans romantischstes Wohnbild: schmale Strassen, niedrige Haeuser, Restaurants, intime Bars und ein Massstab, der fast europaeisch wirkt.",
    developments:
      "Durch Denkmalschutz und kleine Grundstuecke entstehen wenige Grossprojekte. Veraenderungen liegen eher in Retail, Restaurantmieten, Hudson-River-Park-Anbindung und Luxus-Sanierungen.",
    events:
      "Pride-Geschichte rund um Stonewall, Jazzclubs, Bleecker Street, Hudson River Park, Little Island und Whitney-Naehe schaffen einen dichten Kulturkalender.",
    expectation:
      "West Village bleibt ultra-knapp. Die groesste Veraenderung ist nicht Bauhoehe, sondern wer sich die Erdgeschosse und Wohnungen leisten kann."
  },
  "East Village": {
    description:
      "East Village ist jung, laut, historisch immigrantisch und kulturell widerstaendig. Punk, ukrainische und puerto-ricanische Geschichte, Bars, Tenements und kleine Restaurants liegen eng zusammen.",
    developments:
      "Der East Side Coastal Resiliency-Bau veraendert die East-River-Kante: Hochwasserschutz, erneuerte Parkflaechen und neue Zugangswege sollen das Viertel langfristig klimaresilienter machen.",
    events:
      "Tompkins Square Park, kleine Musikorte, Fringe-Theater, Community-Gardens, ukrainische Feste und Restaurantkultur praegen die Szene.",
    expectation:
      "Die Nachfrage bleibt stark. Entscheidend sind die Rueckkehr erneuerter Parkflaechen, Schutz kleiner Geschaefte und der Umgang mit Nachtleben."
  },
  "Lower East Side": {
    description:
      "Die Lower East Side ist eine der dichtesten Geschichtsschichten New Yorks: Einwanderung, Tenements, juedische, chinesische, lateinamerikanische und kuenstlerische Spuren, heute gemischt mit Bars und Galerien.",
    developments:
      "ESCR und East River Park sind die groessten Zukunftsthemen. Dazu wirken Essex Crossing, neue Hotels und Luxuswohnungen am Rand auf Preise und Laufkundschaft.",
    events:
      "Tenement Museum, Essex Market, Club- und Barszene, Galerien, Pickle- und Food-Traditionen sowie San-Gennaro-nahe Besucherfluesse praegen das Jahr.",
    expectation:
      "Die LES wird weiter gentrifizieren, aber gerade ihre Geschichte bleibt ihr wichtigstes Kapital. Klimaresilienz und bezahlbarer Gewerberaum werden entscheidend."
  },
  "SoHo": {
    description:
      "SoHo ist Architekturmarke und Shopping-Magnet zugleich: Gusseisenfassaden, alte Lofts, Luxusretail, Designlaeden und ein Strassenbild mit internationaler Anziehung.",
    developments:
      "Der SoHo/NoHo Neighborhood Plan ermoeglicht mehr Wohnnutzung und dauerhaft erschwingliche Wohnungen in passenden Baukoerpern. Gleichzeitig bleibt Denkmalschutz ein starker Rahmen.",
    events:
      "Design Week, Pop-up-Retail, Galerien, Mode-Events und Produktlaunches machen SoHo zu einem staendigen Schaufenster.",
    expectation:
      "SoHo wird Luxus behalten, aber mehr Wohnraum und neue Nutzungsmischungen koennen einzelne Korridore alltaglicher machen."
  },
  "TriBeCa": {
    description:
      "TriBeCa ist grosszuegiger als viele Downtown-Viertel: Lagerhaus-Lofts, breite Strassen, Prominenz, Schulen, Restaurants und eine hohe Eigentumsquote.",
    developments:
      "Die Zukunft dreht sich um hochwertige Umnutzungen, Schul- und Familieninfrastruktur und Lower-Manhattan-Resilienz. Neue Flaechen sind knapp, daher bleibt Sanierung wichtiger als Massenneubau.",
    events:
      "Tribeca Festival, Hudson River Park, Rooftop-Events, Film- und Food-Szene geben dem Viertel seine oeffentliche Seite.",
    expectation:
      "TriBeCa bleibt ein Spitzenmarkt. Die groessten Risiken liegen weniger in Nachfrage als in Klimaanpassung und extremen Einstiegspreisen."
  },
  "Chinatown": {
    description:
      "Chinatown ist Markt, Wohnviertel, Erinnerungsraum und Wirtschaftssystem zugleich. Restaurants, Fisch- und Gemueselaeden, Familienbetriebe und enge Tenement-Strukturen bilden eine seltene urbane Dichte.",
    developments:
      "Grosse Eingriffe sind politisch sensibel. Themen sind die Zukunft kleiner Gewerbe, Tourismusdruck, benachbarte Luxusentwicklung und das Justiz-/Civic-Center-Umfeld rund um White Street.",
    events:
      "Lunar New Year Parade, Mid-Autumn-Angebote, Doyers Street, Mahayana Temple, Food-Touren und lokale Kulturvereine sorgen fuer hohe Besucherfrequenz.",
    expectation:
      "Die Zukunft haengt stark davon ab, ob Familienbetriebe bezahlbare Mieten finden. Chinatown kann wachsen, darf aber nicht nur Kulisse werden."
  },
  "NoHo": {
    description:
      "NoHo ist klein, architektonisch hochwertig und strategisch gelegen zwischen Broadway, Bowery, Village und East Village. Es wirkt exklusiver und leiser als SoHo.",
    developments:
      "Wie SoHo ist NoHo vom Neighborhood Plan betroffen: mehr Wohnnutzung, neue Regeln fuer Erdgeschosse und die Frage, wie historische Gebaeude mit mehr Wohnraum vereinbar bleiben.",
    events:
      "Public Theater, Astor Place, kleine Galerien, Designstores, NYU-nahe Kultur und Restaurants geben NoHo sein konzentriertes Profil.",
    expectation:
      "NoHo bleibt knapp und teuer. Neue Wohnoptionen werden eher punktuell als flaechig sichtbar."
  },
  "Financial District": {
    description:
      "FiDi ist historischer Ursprung, Finanzsymbol und zunehmend Wohnviertel. Enge koloniale Strassen treffen auf Hochhaeuser, Faehrterminals, Hotels und neue Apartmenttuerme.",
    developments:
      "Lower Manhattan Coastal Resiliency ist zentral. Dazu kommen grosse Office-to-Residential-Konversionen, etwa in frueheren Buerogebaeuden, und die Weiterentwicklung des Seaport- und Water-Street-Korridors.",
    events:
      "Stone Street, Seaport, Governors-Island-Faehren, 9/11 Memorial, Wall-Street-Tourismus und Sommerprogramme am Wasser bringen Besucher.",
    expectation:
      "FiDi wird wohnlicher und weniger reines Bueroviertel. Klimaschutz und Umnutzung alter Bueroflaechen entscheiden ueber die naechste Phase."
  },
  "Battery Park City": {
    description:
      "Battery Park City ist geplant, gruen und wasserorientiert. Promenaden, Schulen, Parks, Brookfield Place und Familienwohnungen geben dem Viertel eine fast campusartige Ordnung.",
    developments:
      "North/West und South Battery Park City Resiliency Projects sind die grossen Zukunftsthemen. Ziel ist Hochwasserschutz an der Hudson-Kante, ohne den Park- und Promenadencharakter zu verlieren.",
    events:
      "Brookfield Place, Rockefeller Park, Wagner Park, Hudson River Park, Outdoor-Filmreihen und Familienprogramme bestimmen den Kalender.",
    expectation:
      "Die Lage bleibt stark, aber der Wert haengt zunehmend daran, wie elegant Resilienzbau, Wasserzugang und Alltagsqualitaet verbunden werden."
  }
};

function renderDetail(item) {
  const index = neighborhoods.indexOf(item);
  const extra = extendedProfiles[item.name] || {
    description: item.character,
    developments: item.outlook,
    events: "Lokale Parks, Restaurants, Kulturorte und saisonale Strassenprogramme praegen den Alltag.",
    expectation: item.future
  };
  const localized = localizedNeighborhood(item, extra);
  detailPanel.innerHTML = `
    <article class="detail">
      ${galleryMarkup(item, index)}
      <div class="detail-copy">
        <p class="eyebrow">${item.area}</p>
        <h2>${item.name}</h2>
        <p class="summary">${localized.description}</p>
        <div class="facts" aria-label="Kurzwerte">
          <div class="fact"><span>${t("priceLevel")}</span><strong>${item.price}</strong></div>
          <div class="fact"><span>${t("rentFact")}</span><strong>$${item.rent}</strong></div>
          <div class="fact"><span>${t("futureFact")}</span><strong>${localized.future}</strong></div>
        </div>
      </div>
      <div class="analysis-grid">
        ${analysisCard(t("analysisOverview"), localized.description, expandedText(item, extra, "overview"), { featured: true })}
        ${analysisCard(t("analysisHistory"), localized.history, expandedText(item, extra, "history"))}
        ${analysisCard(t("analysisPrices"), localized.prices, expandedText(item, extra, "prices"))}
        ${analysisCard(t("analysisFuture"), localized.outlook, expandedText(item, extra, "outlook"))}
        ${analysisCard(t("analysisProjects"), localized.developments, expandedText(item, extra, "developments"))}
        ${analysisCard(t("analysisEvents"), localized.events, expandedText(item, extra, "events"))}
        ${analysisCard(t("analysisCharacter"), localized.character, expandedText(item, extra, "character"))}
        ${analysisCard(t("analysisExpectation"), localized.expectation, expandedText(item, extra, "expectation"), { featured: true })}
      </div>
    </article>
  `;
  hydrateImages();
  bindAnalysisCards();
  bindGalleries();
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "de";
  saveLanguage(currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = t("heroTitle");
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  renderCards();
  renderCompareSelectors();
  renderComparison();
  if (selectedNeighborhood) {
    renderDetail(selectedNeighborhood);
  }
}

segmentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    segmentButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedRegion = button.dataset.region;
    renderCards();
  });
});

searchInput.addEventListener("input", renderCards);
languageSelect?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});
compareA?.addEventListener("change", renderComparison);
compareB?.addEventListener("change", renderComparison);

selectedNeighborhood = neighborhoods[16];
applyLanguage(currentLanguage);
renderDetail(selectedNeighborhood);
