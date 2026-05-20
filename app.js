const neighborhoods = [
  {
    name: "Inwood",
    region: "uptown",
    area: "Nordspitze",
    imageTitle: "Inwood Hill Park",
    vibe: "Felsen, Parkland und ruhige Wohnstraßen",
    price: "$$",
    rent: "2.4k-3.4k",
    future: "stabil mit punktueller Aufwertung",
    history:
      "Inwood ist eines der ältesten besiedelten Gebiete Manhattans. Der Lenape-Bezug ist hier besonders sichtbar, später prägten irische und dominikanische Communities das Viertel.",
    prices:
      "Im Manhattan-Vergleich bleibt Inwood relativ erreichbar. Die Preisdynamik entsteht vor allem durch Parknähe, A-Train-Anbindung und begrenztes Angebot.",
    outlook:
      "Die Zukunft liegt weniger in spektakulaeren Neubauten als in sanfter Verdichtung, Erhalt der Wohnsubstanz und besserer Verbindung zum Harlem River.",
    character: "Gut für Menschen, die Manhattan wollen, aber Luft, Hügel und Nachbarschaftsruhe brauchen."
  },
  {
    name: "Washington Heights",
    region: "uptown",
    area: "Upper Manhattan",
    imageTitle: "Washington Heights, Manhattan",
    vibe: "Dominikanische Kultur, Hudson-Blicke, starke Community",
    price: "$$",
    rent: "2.6k-3.8k",
    future: "nachgefragt, aber community-geprägt",
    history:
      "Das Viertel wuchs stark mit der U-Bahn und wurde im 20. Jahrhundert ein Zentrum dominikanischer Kultur in New York.",
    prices:
      "Noch moderater als Downtown, aber beliebt bei Haushalten, die Platz, Express-Zuege und Parks suchen.",
    outlook:
      "Aufwertung wird weiterkommen, doch lokale Geschäfte und lange Wohnbindung bleiben ein starkes Gegengewicht.",
    character: "Lebendig, laut, familiär und eines der kulturell klarsten Viertel Manhattans."
  },
  {
    name: "Hamilton Heights",
    region: "uptown",
    area: "West Harlem",
    imageTitle: "Hamilton Heights, Manhattan",
    vibe: "Brownstones, Campusnähe und historische Straßen",
    price: "$$",
    rent: "2.8k-4.0k",
    future: "wachsendes Interesse",
    history:
      "Benannt nach Alexander Hamilton, später Teil der Harlem Renaissance und heute bekannt für gut erhaltene Reihenhäuser.",
    prices:
      "Preislich zwischen Washington Heights und dem zentralen Harlem. Brownstone-Bloecke treiben Kaufpreise deutlich nach oben.",
    outlook:
      "Die Mischung aus Columbia-Nähe, Substanz und U-Bahn macht das Viertel für langfristige Käufer interessant.",
    character: "Elegant, wohnlich und leiser als viele Downtown-Alternativen."
  },
  {
    name: "Harlem",
    region: "uptown",
    area: "Central Harlem",
    imageTitle: "Harlem",
    vibe: "Musikgeschichte, Brownstones und große Boulevards",
    price: "$$",
    rent: "2.9k-4.3k",
    future: "weiterer Druck, starke Identität",
    history:
      "Harlem wurde weltweit durch die Harlem Renaissance, Jazz, Literatur und Schwarze Kulturgeschichte bekannt.",
    prices:
      "Weiter unter vielen Downtown-Lagen, aber hochwertige Brownstones und neue Apartments haben die Spanne stark vergrößert.",
    outlook:
      "Die zentrale Frage bleibt Balance: Investitionen und neue Infrastruktur, ohne die kulturelle Basis zu verdrängen.",
    character: "Ein Viertel mit Gewicht, Rhythmus und einer Geschichte, die man im Straßenbild noch spuert."
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
      "Im Osten und Norden vergleichsweise erreichbarer, während neue Projekte nahe Park Avenue und Second Avenue Druck erzeugen.",
    outlook:
      "Neue Verkehrsanbindungen und Wohnprojekte können viel verändern; Schutz vor Verdrängung bleibt entscheidend.",
    character: "Direkt, lokal und kulturell sehr eigenständig."
  },
  {
    name: "Morningside Heights",
    region: "uptown",
    area: "Academic Acropolis",
    imageTitle: "Morningside Heights",
    vibe: "Columbia, Kirchen, Buchläden, ruhige Dichte",
    price: "$$$",
    rent: "3.3k-4.8k",
    future: "stabil durch Institutionen",
    history:
      "Das Viertel wurde durch Columbia University, Barnard, Riverside Church und Cathedral of St. John the Divine geprägt.",
    prices:
      "Die Nachfrage ist robust, weil Studierende, Forschende und Familien um wenige gut angebundene Blocks konkurrieren.",
    outlook:
      "Institutionelles Wachstum und begrenzte Flächen halten den Markt stabil, mit wenig Raum für radikale Veränderung.",
    character: "Intellektuell, grün und etwas abgehoben vom hektischeren Manhattan."
  },
  {
    name: "Upper West Side",
    region: "uptown",
    area: "West Side",
    imageTitle: "Upper West Side",
    vibe: "Parks, Kultur, Familien und klassische Apartmenthäuser",
    price: "$$$$",
    rent: "4.6k-6.5k",
    future: "dauerhaft knapp",
    history:
      "Vom Boulevard-Ausbau und der U-Bahn profitierend, wurde die Upper West Side zum Wohnquartier für Kultur, Bildung und Familien.",
    prices:
      "Sehr gefragt durch Central Park, Riverside Park, Schulen und stabile Gebäudesubstanz.",
    outlook:
      "Große Preisspruenge sind weniger wahrscheinlich als konstante Knappheit und Premiums für gute Grundrisse.",
    character: "Zivilisiert, kultiviert und im besten Sinn alltagstauglich."
  },
  {
    name: "Upper East Side",
    region: "uptown",
    area: "East Side",
    imageTitle: "Upper East Side",
    vibe: "Museen, Townhouses, Parknähe und alte Eleganz",
    price: "$$$$",
    rent: "4.0k-6.2k",
    future: "stabil, mit Second-Avenue-Effekt",
    history:
      "Die Upper East Side steht für Gilded-Age-Mansions, Museum Mile und eine der etabliertesten Wohnlagen der Stadt.",
    prices:
      "Hohe Kaufkraft, viele Co-ops und Central-Park-Nähe halten das Niveau hoch; weiter östlich ist es etwas zugänglicher.",
    outlook:
      "Die Second Avenue Subway stärkt Yorkville und den östlichen Rand langfristig.",
    character: "Ruhig, gepflegt und teurer als es auf den ersten Blick manchmal wirkt."
  },
  {
    name: "Hell's Kitchen",
    region: "midtown",
    area: "West Midtown",
    imageTitle: "Hell's Kitchen, Manhattan",
    vibe: "Theaternähe, Restaurants, rauere Westseite",
    price: "$$$",
    rent: "4.0k-5.8k",
    future: "profitiert von Hudson Yards",
    history:
      "Einst Arbeiter- und Hafenviertel, später eng mit Broadway, Nachtleben und immigrantischen Communities verbunden.",
    prices:
      "Die Lage zwischen Midtown, Hudson River Park und Theater District sorgt für hohe Mietnachfrage.",
    outlook:
      "Mehr Büros und Wohnhochhäuser im Westen verschieben die Wahrnehmung Richtung Premium-Westside.",
    character: "Urban, praktisch und mit mehr Kanten als Midtowns glatte Fassaden."
  },
  {
    name: "Midtown",
    region: "midtown",
    area: "Core Manhattan",
    imageTitle: "Midtown Manhattan",
    vibe: "Bürotürme, Hotels, Pendlerstroeme und Ikonen",
    price: "$$$$",
    rent: "4.3k-6.4k",
    future: "Umbau vom reinen Bürozentrum",
    history:
      "Midtown wurde im 20. Jahrhundert zum kommerziellen Herz Manhattans, mit Grand Central, Rockefeller Center und Empire State Building.",
    prices:
      "Wohnlagen sind teuer, aber stark von Mikro-Lage, Gebäudealter und Lärmprofil abhängig.",
    outlook:
      "Office-to-residential-Umbauten, modernisierte Büros und bessere öffentliche Räume prägen die naechste Phase.",
    character: "Nicht immer romantisch, aber unschlagbar vernetzt."
  },
  {
    name: "Murray Hill",
    region: "midtown",
    area: "East Midtown",
    imageTitle: "Murray Hill, Manhattan",
    vibe: "Townhouses, Bars, UN-Nähe und Pendlerkomfort",
    price: "$$$",
    rent: "3.9k-5.5k",
    future: "solide, wenig dramatisch",
    history:
      "Aus einer wohlhabenden Wohnlage entwickelte sich ein dichtes Quartier zwischen Diplomatie, Midtown-Arbeit und jungen Berufstaetigen.",
    prices:
      "Oft etwas erreichbarer als Flatiron oder West Village, aber klar im Manhattan-Premiumsegment.",
    outlook:
      "Die UN-Nähe und gute Verkehrsanbindung sichern Nachfrage, große Identitätsspruenge sind weniger wahrscheinlich.",
    character: "Pragmatisch, zentral und komfortabel."
  },
  {
    name: "Kips Bay",
    region: "midtown",
    area: "East Side",
    imageTitle: "Kips Bay, Manhattan",
    vibe: "Medizin, Wohnblocks und East-River-Nähe",
    price: "$$$",
    rent: "3.8k-5.4k",
    future: "stetige Verdichtung",
    history:
      "Historisch ein Ostfluss-Landungsgebiet, heute geprägt von Krankenhäusern, NYU-Medizin und großen Wohnanlagen.",
    prices:
      "Etwas weniger glamourös, dadurch im Vergleich zu Gramercy oder Flatiron gelegentlich effizienter bepreist.",
    outlook:
      "Gesundheits- und Forschungscluster halten die Nachfrage stabil; Waterfront-Verbesserungen können helfen.",
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
      "Chelsea wandelte sich von Industrie und Arbeiterwohnen zu einem Zentrum für Kunst, Design und LGBTQ+-Geschichte.",
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
    vibe: "Glas, Luxus, Büros und neue Stadtplanung",
    price: "$$$$",
    rent: "5.5k-8.0k",
    future: "noch nicht fertig erzählt",
    history:
      "Auf ehemaligen Bahnflächen entstand eines der größten privaten Entwicklungsprojekte der USA.",
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
    vibe: "Architektur, Büro-Lofts und Madison Square",
    price: "$$$$",
    rent: "5.0k-7.2k",
    future: "hohe Resilienz",
    history:
      "Das Flatiron Building machte die Gegend ikonisch; ehemalige Handels- und Produktionsräume wurden zu Büros und Wohnungen.",
    prices:
      "Sehr zentral, sehr begrenztes Angebot und hoher Design-Faktor treiben Preise.",
    outlook:
      "Hybrid Work verändert Büroflächen, aber Madison Square und die Lage bleiben magnetisch.",
    character: "Kompakt, elegant und für Manhattan-Verhältnisse erstaunlich lesbar."
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
      "Gramercy Park ist einer der wenigen privaten Parks New Yorks und gab dem Viertel eine ruhige, exklusive Identität.",
    prices:
      "Kleine Verfuegbarkeit und historische Substanz machen das Viertel teuer, besonders rund um den Park.",
    outlook:
      "Aenderungen kommen langsam; der Wert liegt gerade in der Stabilitaet.",
    character: "Diskret, altstädtisch und ein bisschen unnahbar."
  },
  {
    name: "Greenwich Village",
    region: "downtown",
    area: "Village",
    imageTitle: "Greenwich Village",
    vibe: "Boheme, Jazz, NYU und verwinkelte Straßen",
    price: "$$$$",
    rent: "5.0k-7.5k",
    future: "dauerhaft knapp",
    history:
      "Das Village war Zentrum für Künstler, Beat-Kultur, LGBTQ+-Geschichte und Gegenkultur.",
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
    vibe: "Kopfsteinpflaster, kleine Häuser, Restaurants",
    price: "$$$$$",
    rent: "5.8k-8.5k",
    future: "ultra-knapp",
    history:
      "Der West Village-Straßenplan folgt alten Wegen statt dem Manhattan Grid und bewahrte dadurch einen eigenen Maßstab.",
    prices:
      "Eines der teuersten Wohnviertel der Stadt: viel Nachfrage, wenig Angebot, starker Charme-Aufschlag.",
    outlook:
      "Wenig Neubau bedeutet dauerhafte Knappheit; Restaurants und Luxusretail bleiben stark.",
    character: "Sehr schön, sehr begehrt, sehr wenig zufaellig."
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
      "Von immigrantischen Tenements zu Punk, Kunst und Nachtleben: Das East Village trägt viele Gegenkultur-Schichten.",
    prices:
      "Teurer als sein raues Image vermuten laesst, besonders westlich und nahe Union Square.",
    outlook:
      "Die Nachfrage von jungen Berufstaetigen und NYU-Umfeld bleibt hoch; kleine Geschäfte kaempfen mit Mieten.",
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
      "Die Lower East Side ist ein Kernort jüdischer, italienischer, chinesischer und puerto-ricanischer Einwanderungsgeschichte.",
    prices:
      "Altbau-Tenements und neue Luxusbauten erzeugen eine große Spanne, aber die Richtung bleibt teuer.",
    outlook:
      "Neue Projekte am East River und Tourismusdruck verändern den Rand; kulturelle Institutionen halten Erinnerung sichtbar.",
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
      "Aus Industrie-Lofts wurde ein Künstlerquartier und dann eine der bekanntesten Shopping-Lagen New Yorks.",
    prices:
      "Sehr hohe Kauf- und Mietpreise, besonders für große Lofts und renovierte historische Gebäude.",
    outlook:
      "Regeln für Wohnen und Retail werden weiter diskutiert; die Marke SoHo bleibt extrem stark.",
    character: "Schön, teuer und tagsüber oft mehr Laufsteg als Wohnstrasse."
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
      "Sehr großes Wohnflächenformat, gute Schulen und Prominenz treiben Spitzenpreise.",
    outlook:
      "Kaum Flächenreserven und starke Eigentumsbasis sprechen für anhaltende Knappheit.",
    character: "Luxus ohne viel Lärm, mit breiten Straßen und schwerem Backstein."
  },
  {
    name: "Chinatown",
    region: "downtown",
    area: "Lower Manhattan",
    imageTitle: "Doyers Street",
    vibe: "Märkte, Restaurants, Familienbetriebe und Dichte",
    price: "$$",
    rent: "3.2k-4.8k",
    future: "Druck durch Nachbarviertel",
    history:
      "Chinatown entstand im 19. Jahrhundert und ist bis heute ein wichtiges Zentrum chinesischer und asiatisch-amerikanischer Kultur.",
    prices:
      "Gegenüber SoHo und TriBeCa noch guenstiger, aber die Nähe zu Luxuslagen erhöht den Druck.",
    outlook:
      "Die Zukunft hängt stark an Gewerbemieten, Tourismus und dem Schutz kleiner Familienbetriebe.",
    character: "Sinnlich, dicht und wirtschaftlich vielschichtig."
  },
  {
    name: "NoHo",
    region: "downtown",
    area: "North of Houston",
    imageTitle: "NoHo, Manhattan",
    vibe: "Landmark-Lofts, Theaternähe und Boutique-Luxus",
    price: "$$$$$",
    rent: "5.8k-8.8k",
    future: "klein, knapp, begehrt",
    history:
      "NoHo liegt zwischen Village und East Village und bewahrt viele historische Loft- und Theatergebäude.",
    prices:
      "Sehr kleines Angebot und architektonische Qualität sorgen für ein klares Premium.",
    outlook:
      "Neue Projekte bleiben selten; der Wert liegt in Lage, Substanz und Exklusivitaet.",
    character: "Klein, kultiviert und für Kenner."
  },
  {
    name: "Financial District",
    region: "downtown",
    area: "FiDi",
    imageTitle: "Financial District, Manhattan",
    vibe: "Wall Street, Hochhäuser, Wassernähe und neue Wohnungen",
    price: "$$$$",
    rent: "4.5k-6.6k",
    future: "mehr Wohnen, weniger reines Büro",
    history:
      "Hier begann New York als Handelsstadt; Wall Street machte das Viertel später zum globalen Finanzsymbol.",
    prices:
      "Luxus-Türme und umgebaute Bürogebäude dominieren, mit Premium für Aussicht und Amenities.",
    outlook:
      "Office-to-residential-Konversionen können FiDi noch stärker zum Wohnviertel machen.",
    character: "Tagsüber sehr geschäftig, nachts ruhiger als viele erwarten."
  },
  {
    name: "Battery Park City",
    region: "downtown",
    area: "Hudson Waterfront",
    imageTitle: "Battery Park City",
    vibe: "Promenaden, Familien, Wasser und geplante Ruhe",
    price: "$$$$",
    rent: "4.8k-7.0k",
    future: "Klimaanpassung als Schlüssel",
    history:
      "Battery Park City entstand auf aufgeschüttetem Land als geplantes Waterfront-Quartier.",
    prices:
      "Hohe Mieten durch Wasserblick, Schulen, Parks und große Apartmenthäuser.",
    outlook:
      "Resilienz gegen Sturmfluten und steigende Wasserstände wird zum zentralen Zukunftsthema.",
    character: "Gruen, kontrolliert und familienfreundlich."
  }
];

const brooklynNeighborhoods = [
  {
    name: "Williamsburg",
    region: "north",
    area: "North Brooklyn",
    imageTitle: "Williamsburg, Brooklyn",
    vibe: "Waterfront, Kreativszene, Restaurants und neue Türme",
    price: "$$$$",
    rent: "4.0k-6.2k",
    future: "weiterer Premiumdruck am Wasser",
    history:
      "Williamsburg war lange ein Industrie-, Hafen- und Einwanderungsquartier. Seit den 1990er-Jahren wurde es zu einem Zentrum für Musik, Kunst, Gastronomie und später Luxuswohnen.",
    prices:
      "Die teuersten Lagen liegen nahe der East-River-Waterfront und der L-Train-Achse. Weiter östlich und südlich wird der Markt kleinteiliger, aber ebenfalls stark nachgefragt.",
    outlook:
      "Neue Waterfront-Projekte, öffentliche Räume und anhaltende Nachfrage werden Williamsburg weiter im oberen Brooklyn-Segment halten.",
    character: "Kreativ, teuer, jung und gleichzeitig deutlich polierter als früher.",
    description:
      "Williamsburg ist Brooklyn als globale Marke: alte Industrie, neue Hochhäuser, Musikorte, Restaurants, Boutiquen und eine Waterfront mit direktem Manhattan-Blick. Der Reiz liegt im Kontrast zwischen Lagerhausgeschichte und sehr sichtbarer Gegenwart.",
    developments:
      "Die weitere Entwicklung konzentriert sich auf Waterfront-Parzellen, Umnutzung alter Gewerbebauten, neue Wohnhochhäuser und bessere öffentliche Räume entlang des East River.",
    events:
      "Smorgasburg, Brooklyn Brewery-Umfeld, Domino Park, Musikclubs, Street-Food-Formate und Designmärkte geben Williamsburg eine dauerhafte Besuchsfrequenz.",
    expectation:
      "Williamsburg bleibt hochpreisig. Die wichtigste Frage ist weniger Nachfrage, sondern wie viel lokale Eigenständigkeit zwischen Luxuswohnen, Tourismus und Nachtleben erhalten bleibt."
  },
  {
    name: "DUMBO",
    region: "north",
    area: "Brooklyn Waterfront",
    imageTitle: "DUMBO, Brooklyn",
    vibe: "Kopfsteinpflaster, Brücken, Lofts und Design",
    price: "$$$$$",
    rent: "5.0k-7.5k",
    future: "knapp und dauerhaft begehrt",
    history:
      "DUMBO entstand aus Lagerhäusern und Industriebauten zwischen Manhattan Bridge und Brooklyn Bridge. Künstlerlofts und Tech-Firmen machten daraus eine der sichtbarsten Brooklyn-Adressen.",
    prices:
      "Sehr kleine Fläche, ikonische Aussicht und hochwertige Lofts sorgen für ein klares Premium.",
    outlook:
      "Die Zukunft ist durch Knappheit geprägt: Sanierung, hochwertige Erdgeschosse und Waterfront-Pflege statt großer Flächenausweitung.",
    character: "Fotogen, hochwertig und fast museal urban.",
    description:
      "DUMBO ist einer der kompaktesten Premiumräume New Yorks. Backstein, Brückenbögen, Kopfsteinpflaster, Galerien, Tech-Büros und Brooklyn Bridge Park bilden ein dichtes, sehr visuelles Stadtbild.",
    developments:
      "Die wichtigsten Veränderungen liegen in der Pflege des öffentlichen Raums, in hochwertigen Gewerbe- und Büroflächen sowie in der Verbindung zum Brooklyn Bridge Park.",
    events:
      "Photoville, Kunstprogramme, Waterfront-Events, Märkte und Brooklyn Bridge Park-Aktivitäten machen DUMBO ganzjährig sichtbar.",
    expectation:
      "DUMBO bleibt teuer und knapp. Wachstum entsteht vor allem über Wertsteigerung, nicht über viele neue Gebäude."
  },
  {
    name: "Park Slope",
    region: "central",
    area: "Brownstone Brooklyn",
    imageTitle: "Park Slope",
    vibe: "Brownstones, Familien, Prospect Park und Schulen",
    price: "$$$$",
    rent: "3.8k-5.8k",
    future: "stabiler Familienmarkt",
    history:
      "Park Slope wuchs im 19. Jahrhundert als wohlhabendes Brownstone-Viertel nahe Prospect Park und wurde später zum Synonym für familienorientiertes Brooklyn.",
    prices:
      "Historische Häuser, Schulqualität und Parknähe halten das Preisniveau hoch.",
    outlook:
      "Größere Umbrüche sind unwahrscheinlich; Wert entsteht durch Knappheit, Altbausubstanz und stabile Nachfrage.",
    character: "Ruhig, wohlhabend, grün und sehr nachbarschaftlich.",
    description:
      "Park Slope ist Brooklyn im klassischen Wohnsinn: Baumstraßen, Brownstones, Kinderwagen, Cafés, Buchläden und Prospect Park. Es ist weniger Bühne als Alltag in sehr hoher Qualität.",
    developments:
      "Die Zukunft besteht eher aus behutsamer Sanierung, kleineren Neubauten an Korridoren und Investitionen in Schulen, Parks und Verkehrsberuhigung.",
    events:
      "Prospect Park, Celebrate Brooklyn!, Wochenmärkte, lokale Straßenfeste und Kulturorte an Fifth und Seventh Avenue prägen den Kalender.",
    expectation:
      "Park Slope wird stabil teuer bleiben. Der Markt ist weniger spekulativ als an der Waterfront, aber besonders resilient."
  },
  {
    name: "Bed-Stuy",
    region: "central",
    area: "Central Brooklyn",
    imageTitle: "Bedford-Stuyvesant, Brooklyn",
    vibe: "Brownstones, Black history, lokale Geschäfte und Wandel",
    price: "$$$",
    rent: "3.0k-4.6k",
    future: "Aufwertung mit Identitätsdebatte",
    history:
      "Bedford-Stuyvesant ist ein bedeutender Ort Schwarzer Kultur-, Wohn- und Bürgerrechtsgeschichte in Brooklyn.",
    prices:
      "Renovierte Brownstones und gute Subway-Korridore treiben Preise, während einzelne Lagen noch zugänglicher bleiben.",
    outlook:
      "Neue Wohnprojekte und Sanierungen werden weiterkommen; entscheidend bleibt, ob langjährige Communities profitieren.",
    character: "Stolz, architektonisch stark und sozial im Wandel.",
    description:
      "Bed-Stuy ist eines der charaktervollsten Brownstone-Gebiete New Yorks. Die Straßen wirken groß, rhythmisch und lokal; gleichzeitig verändert Sanierung den Markt Block für Block.",
    developments:
      "Wichtig sind neue bezahlbare Wohnprojekte, Sanierungen historischer Häuser und Korridore wie Fulton Street, Broadway und Myrtle Avenue.",
    events:
      "Restoration Plaza, Herbert Von King Park, lokale Kunstformate, Blockpartys, Food-Spots und Community-Events tragen die öffentliche Kultur.",
    expectation:
      "Bed-Stuy wird weiter nachgefragt. Die Qualität der Zukunft hängt stark an bezahlbarem Wohnraum, lokaler Gewerbemischung und kultureller Kontinuität."
  },
  {
    name: "Bushwick",
    region: "east",
    area: "North-East Brooklyn",
    imageTitle: "Bushwick, Brooklyn",
    vibe: "Street Art, Lagerhäuser, Musik und Nachtleben",
    price: "$$$",
    rent: "3.1k-4.7k",
    future: "kreativ, dichter, teurer",
    history:
      "Bushwick war ein Arbeiter-, Industrie- und Einwanderungsquartier. Kunst, Musik und Loftnutzung machten es im 21. Jahrhundert stark sichtbar.",
    prices:
      "Noch unter Williamsburg, aber deutlich gestiegen, besonders nahe L- und M-Train.",
    outlook:
      "Der Druck auf Gewerbe- und Wohnflächen bleibt hoch; neue Dichte wird politisch stark diskutiert.",
    character: "Roh, kreativ, laut und schnelllebig.",
    description:
      "Bushwick ist ein Labor aus Street Art, Clubs, Ateliers, alten Gewerbebauten, neuen Apartments und lateinamerikanischer Nachbarschaftskultur. Es ist lebendig, aber nicht glatt.",
    developments:
      "Die Zukunft liegt in möglichen Rezoning-Fragen, Umnutzung alter Industrieflächen, neuer Wohnbebauung und dem Schutz kleinteiliger Kreativräume.",
    events:
      "Bushwick Open Studios, House-of-Yes-Umfeld, Street-Art-Walls, Musiknächte und Food-Korridore machen den Stadtteil kulturell stark.",
    expectation:
      "Bushwick wird teurer und dichter. Ob es spannend bleibt, hängt daran, ob kreative und lokale Räume bezahlbar bleiben."
  },
  {
    name: "Downtown Brooklyn",
    region: "central",
    area: "Civic & Transit Core",
    imageTitle: "Downtown Brooklyn",
    vibe: "Hochhäuser, Hochschulen, Behörden und Transit",
    price: "$$$$",
    rent: "4.0k-6.0k",
    future: "mehr Wohnen und gemischte Nutzung",
    history:
      "Downtown Brooklyn war lange Verwaltungs-, Handels- und Verkehrszentrum. Rezoning und Hochschulwachstum machten es zu einem Hochhaus-Wohnstandort.",
    prices:
      "Neue Türme mit Amenities bestimmen den Mietmarkt, während ältere Blöcke deutlich anders funktionieren.",
    outlook:
      "Mehr Wohnen, Campusflächen, Einzelhandel und öffentliche Räume werden Downtown Brooklyn weiter urbanisieren.",
    character: "Dicht, praktisch, vertikal und weniger romantisch als Brownstone Brooklyn.",
    description:
      "Downtown Brooklyn ist der funktionale Kern des Boroughs: Gerichte, Hochschulen, Subway-Knoten, Bürotürme, Apartmenthochhäuser und schnelle Wege in alle Richtungen.",
    developments:
      "Relevant sind neue Wohnhochhäuser, Campusentwicklung, der Brooklyn-Borough-Based-Jail-Bau und Verbesserungen rund um Fulton Mall und öffentliche Räume.",
    events:
      "BAM, Barclays Center in der Nähe, MetroTech, Hochschulprogramme und Fulton-Street-Frequenz prägen die öffentliche Nutzung.",
    expectation:
      "Downtown Brooklyn wird weiter zu einem gemischten Hochhausquartier. Die Aufgabe ist, Erdgeschosse und öffentliche Räume hochwertiger zu machen."
  },
  {
    name: "Greenpoint",
    region: "north",
    area: "North Brooklyn Waterfront",
    imageTitle: "Greenpoint, Brooklyn",
    vibe: "Polnische Geschichte, Industrie, Waterfront und ruhige Straßen",
    price: "$$$$",
    rent: "3.8k-5.8k",
    future: "Waterfront-Wachstum mit Umweltfragen",
    history:
      "Greenpoint war ein polnisch geprägtes Industrie- und Arbeiterquartier mit Schiffbau, Lagerflächen und einer langen Umweltgeschichte.",
    prices:
      "Waterfront-Neubauten und Nähe zu Williamsburg treiben Preise, während kleinere Seitenstraßen lokaler bleiben.",
    outlook:
      "Die Waterfront wird dichter; Umweltreinigung, Verkehr und lokale Infrastruktur bleiben zentrale Themen.",
    character: "Leiser als Williamsburg, aber längst im Premium-Sog.",
    description:
      "Greenpoint verbindet alte polnische Läden, kleine Wohnstraßen, Industrieerbe und neue Waterfront-Türme. Es wirkt entspannter als Williamsburg, aber der Entwicklungsdruck ist deutlich sichtbar.",
    developments:
      "Neue Mischprojekte am Wasser, Parkflächen, Brownfield-Reinigung und bessere Verbindungen nach Queens und Manhattan prägen die nächste Phase.",
    events:
      "Polnische Restaurants, Transmitter Park, lokale Designmärkte, Musikorte und Food-Events schaffen eine eigenständige Szene.",
    expectation:
      "Greenpoint dürfte weiter steigen. Entscheidend werden Verkehrsanbindung, Klimarisiken und die Qualität der neuen Waterfront."
  },
  {
    name: "Coney Island",
    region: "south",
    area: "South Brooklyn Coast",
    imageTitle: "Coney Island",
    vibe: "Strand, Vergnügungspark, Sozialwohnungen und Nostalgie",
    price: "$$",
    rent: "2.4k-3.6k",
    future: "Küstenresilienz und punktueller Neubau",
    history:
      "Coney Island wurde als Bade- und Vergnügungsziel weltbekannt, mit Achterbahnen, Boardwalk, Hotdogs und einer starken Arbeiterklassen-Geschichte.",
    prices:
      "Im Vergleich zu Brownstone- und North-Brooklyn-Lagen günstiger, aber stark abhängig von Strandnähe, Neubau und Transit.",
    outlook:
      "Küstenresilienz, neue Wohnungen und Tourismusangebote werden die Zukunft bestimmen.",
    character: "Spektakulär, rau, saisonal und sehr eigen.",
    description:
      "Coney Island ist New Yorks maritime Popkultur: Strand, Boardwalk, Luna Park, Aquarium, große Wohnanlagen und ein rauer Charme, der nicht mit Downtown-Brooklyn verwechselt werden kann.",
    developments:
      "Zentrale Themen sind Hochwasserschutz, Boardwalk-Pflege, neue Wohnprojekte und die Zukunft der Freizeit- und Tourismusflächen.",
    events:
      "Mermaid Parade, Nathan's Hot Dog Eating Contest, Sommerfeuerwerk, Luna Park und Strandtage sorgen für starke Saisonalität.",
    expectation:
      "Coney Island kann profitieren, wenn Resilienz, Alltag und Tourismus besser verbunden werden. Der Markt bleibt aber stärker saisonal und infrastrukturell abhängig."
  }
];

const queensNeighborhoods = [
  {
    name: "Long Island City",
    region: "west",
    area: "Western Queens",
    imageTitle: "Long Island City",
    vibe: "Skyline, Waterfront, Kultur und neue Türme",
    price: "$$$$",
    rent: "3.8k-5.8k",
    future: "weiter vertikal und waterfrontnah",
    history:
      "Long Island City war ein Industrie- und Produktionsstandort, bevor es durch Transit, Rezoning und Waterfront-Entwicklung zu einem Hochhaus-Wohn- und Kulturquartier wurde.",
    prices:
      "Neue Türme, Manhattan-Blick und kurze Wege nach Midtown halten die Mieten hoch.",
    outlook:
      "Weitere Entwicklung hängt an Queens-West-Flächen, Infrastruktur, Schulen und öffentlichem Raum.",
    character: "Modern, schnell, urban und stark vom Skyline-Blick geprägt.",
    description:
      "Long Island City ist Queens' sichtbarster Wachstumsraum: ehemalige Industrie, neue Wohntürme, MoMA PS1, Uferparks und eine direkte Beziehung zur Manhattan-Skyline.",
    developments:
      "Queens West, Anable Basin, neue Wohnungen, Uferparks, Schulen und öffentliche Infrastruktur bleiben die großen Themen.",
    events:
      "MoMA PS1 Warm Up, LIC Arts Open, Gantry Plaza State Park, Food- und Kulturformate bringen viel Öffentlichkeit.",
    expectation:
      "LIC wird weiter wachsen. Die Qualität entscheidet sich daran, ob es neben Türmen auch gute Erdgeschosse, Schulen und Nachbarschaftsräume bekommt."
  },
  {
    name: "Astoria",
    region: "west",
    area: "Northwest Queens",
    imageTitle: "Astoria, Queens",
    vibe: "Griechische Geschichte, Restaurants, Kaufman Arts und Uferparks",
    price: "$$$",
    rent: "2.9k-4.3k",
    future: "stabil beliebt",
    history:
      "Astoria wurde von griechischen, arabischen, südasiatischen, lateinamerikanischen und vielen weiteren Communities geprägt.",
    prices:
      "Im Vergleich zu LIC oft erreichbarer, aber wegen Transit, Restaurants und Wohnqualität stark nachgefragt.",
    outlook:
      "Sanierung, kleinere Neubauten und die Nähe zu Kaufman Arts District halten die Nachfrage robust.",
    character: "Lebendig, essensorientiert, lokal und sehr wohnlich.",
    description:
      "Astoria ist eines der alltagstauglichsten Queens-Viertel: Restaurants, Cafés, Mietshäuser, kleine Häuser, Parks und eine kulturelle Mischung, die nicht inszeniert wirkt.",
    developments:
      "Wichtige Themen sind kleine Neubauten, Kaufman Arts District, Waterfront-Zugänge, Straßenraum und Transitkapazität.",
    events:
      "Museum of the Moving Image, Kaufman Astoria Studios, Astoria Park, griechische Festivals und Food-Korridore machen Astoria ganzjährig aktiv.",
    expectation:
      "Astoria wird beliebt bleiben, ohne so vertikal zu werden wie LIC. Der Druck auf Mieten wird weiter steigen."
  },
  {
    name: "Flushing",
    region: "east",
    area: "Northeast Queens",
    imageTitle: "Flushing, Queens",
    vibe: "Asiatische Metropole, Food, Handel und Transit",
    price: "$$$",
    rent: "2.8k-4.2k",
    future: "dicht, kommerziell, international",
    history:
      "Flushing ist eines der wichtigsten asiatisch-amerikanischen Zentren der USA und hat sich zu einem extrem dichten Handels- und Wohnknoten entwickelt.",
    prices:
      "Transitnähe, Eigentumsnachfrage und starke Geschäftsstraßen halten den Markt dynamisch.",
    outlook:
      "Neue Mixed-Use-Projekte, Hotels und Handel werden Flushing weiter verdichten.",
    character: "Intensiv, international, essenskulturell herausragend und laut.",
    description:
      "Flushing wirkt fast wie eine eigene asiatische Innenstadt: Food-Courts, Supermärkte, Arztpraxen, Büroflächen, Wohnungen und 7-Train-Endpunkt erzeugen enorme Frequenz.",
    developments:
      "Downtown-Flushing-Mixed-Use-Projekte, Willets-Point-Nähe, bessere Fußwege und Verkehrskapazität sind zentrale Zukunftsthemen.",
    events:
      "Lunar New Year, Queens Night Market in der Nähe, Food-Touren, Flushing Meadows-Corona Park und Kulturprogramme prägen den Kalender.",
    expectation:
      "Flushing bleibt ein Wachstumskern. Die Herausforderung liegt in Verkehr, Dichte und bezahlbarem Raum für kleine Betriebe."
  },
  {
    name: "Jackson Heights",
    region: "west",
    area: "Central Queens",
    imageTitle: "Jackson Heights, Queens",
    vibe: "Gartenblocks, südasiatische und lateinamerikanische Kultur",
    price: "$$",
    rent: "2.4k-3.6k",
    future: "stabil, kulturell stark",
    history:
      "Jackson Heights entstand als geplantes Gartenapartment-Viertel und wurde später zu einem der diversesten Stadtteile New Yorks.",
    prices:
      "Co-ops und Mietwohnungen sind im NYC-Vergleich oft relativ erreichbar, aber gute Transitlagen sind stark gefragt.",
    outlook:
      "Öffentlicher Raum, kleine Geschäfte und Erhalt der Gartenanlagen prägen die Zukunft mehr als Hochhausentwicklung.",
    character: "Vielsprachig, dicht, kulinarisch stark und erstaunlich grün.",
    description:
      "Jackson Heights ist ein urbanes Mosaik: kolumbianische, südasiatische, tibetische, nepalesische und viele weitere Communities teilen sich Straßen, Plätze, Läden und Restaurants.",
    developments:
      "Open-Streets-Konzepte, Erhalt historischer Garden Apartments und kleinteiliger Gewerbeschutz sind zentrale Zukunftsthemen.",
    events:
      "Queens Pride, Diversity Plaza, Diwali- und südasiatische Kulturangebote, Food-Touren und lokale Straßenfeste prägen den Alltag.",
    expectation:
      "Jackson Heights wird weiter als kultureller Anker wachsen. Der Wert liegt weniger in Neubau, mehr in Dichte, Transit und sozialer Vielfalt."
  },
  {
    name: "Forest Hills",
    region: "central",
    area: "Central Queens",
    imageTitle: "Forest Hills, Queens",
    vibe: "Gartenstadt, Tudor-Häuser, Queens Boulevard und Familien",
    price: "$$$",
    rent: "2.7k-4.0k",
    future: "ruhig und nachfragefest",
    history:
      "Forest Hills Gardens wurde als geplante Gartenstadt entwickelt und prägt bis heute den eleganten, grünen Charakter des Viertels.",
    prices:
      "Gute Schulen, LIRR, Subway und Wohnqualität halten das Viertel stabil im mittleren bis gehobenen Segment.",
    outlook:
      "Sanierung, punktuelle Verdichtung an Queens Boulevard und stabile Familiennachfrage bestimmen die Zukunft.",
    character: "Ruhig, bürgerlich, grün und sehr wohnorientiert.",
    description:
      "Forest Hills verbindet städtische Erreichbarkeit mit fast vorstädtischer Ruhe: Tudor-Architektur, Apartmenthäuser, Einkaufsstraßen, Schulen und gute Anbindung.",
    developments:
      "Queens-Boulevard-Sicherheit, punktuelle neue Wohngebäude, LIRR-Nähe und lokale Geschäftsstraßen stehen im Fokus.",
    events:
      "Forest Hills Stadium, Austin Street, Parks und saisonale Nachbarschaftsprogramme sorgen für Kultur ohne Downtown-Hektik.",
    expectation:
      "Forest Hills bleibt ein stabiler Queens-Wohnmarkt. Der größte Vorteil ist Balance: Stadtzugang ohne permanente Überhitzung."
  },
  {
    name: "Jamaica",
    region: "east",
    area: "Southeast Queens",
    imageTitle: "Jamaica, Queens",
    vibe: "Transitknoten, Handel, Kultur und Entwicklungsflächen",
    price: "$$",
    rent: "2.3k-3.5k",
    future: "wachsender regionaler Hub",
    history:
      "Jamaica war lange Handelszentrum und Verkehrsknoten in Queens, mit LIRR, AirTrain und Subway-Anbindungen.",
    prices:
      "Noch günstiger als westliches Queens, aber Transitnähe und neue Projekte erhöhen die Nachfrage.",
    outlook:
      "Hotel-, Wohn- und Gewerbeentwicklung rund um Jamaica Station wird die Rolle als Hub stärken.",
    character: "Praktisch, vielfältig, transitstark und im Wandel.",
    description:
      "Jamaica ist ein Queens-Zentrum mit enormer Erreichbarkeit: LIRR, AirTrain zum JFK, Subway, Busse, Einkaufsstraßen und viel Entwicklungspotenzial.",
    developments:
      "Jamaica Now, neue Wohn- und Hotelprojekte, öffentliche Plätze und bezahlbarer Wohnungsbau prägen die nächste Phase.",
    events:
      "King Manor Museum, Rufus King Park, Jamaica Center for Arts & Learning und lokale Musik- und Food-Angebote bilden die Kulturschicht.",
    expectation:
      "Jamaica kann deutlich an Bedeutung gewinnen, wenn Transit, Sicherheit, Erdgeschosse und Wohnqualität zusammen verbessert werden."
  },
  {
    name: "Rockaway Beach",
    region: "south",
    area: "Queens Coast",
    imageTitle: "Rockaway Beach, Queens",
    vibe: "Surf, Strand, Bungalows und Küstenresilienz",
    price: "$$",
    rent: "2.2k-3.4k",
    future: "Küste als Chance und Risiko",
    history:
      "Die Rockaways waren Badeort, Arbeiterküste, Bungalowlandschaft und nach Hurricane Sandy ein Schwerpunkt für Wiederaufbau und Resilienz.",
    prices:
      "Strandnähe und neue Nachfrage treiben einzelne Lagen, während Erreichbarkeit und Klimarisiken den Markt bremsen.",
    outlook:
      "Küstenschutz, Boardwalk, neue Wohnungen und Fähren bestimmen die Zukunft.",
    character: "Entspannt, salzig, eigenständig und saisonal.",
    description:
      "Rockaway Beach ist New Yorks Surfkante: Strand, Boardwalk, Bungalows, neue Apartments, Food-Spots und eine Community, die stark mit dem Meer lebt.",
    developments:
      "Resilienzmaßnahmen, Dünen, öffentliche Infrastruktur, Fähren und punktuelle Neubauten sind die zentralen Zukunftsfaktoren.",
    events:
      "Surf-Events, Sommerkonzerte, Food-Stände, Beach-Programme und Boardwalk-Saison machen Rockaway stark wetter- und jahreszeitabhängig.",
    expectation:
      "Rockaway wird als Wohn- und Freizeitort begehrter, aber Klimarisiken und Transit bleiben entscheidend."
  },
  {
    name: "Sunnyside",
    region: "west",
    area: "Western Queens",
    imageTitle: "Sunnyside, Queens",
    vibe: "Garden Apartments, Pendlerkomfort und lokale Läden",
    price: "$$",
    rent: "2.5k-3.7k",
    future: "ruhige Aufwertung",
    history:
      "Sunnyside ist bekannt für Sunnyside Gardens, eines der wichtigsten Garden-City-Wohnexperimente New Yorks.",
    prices:
      "Noch zugänglicher als LIC und Astoria, aber Nähe zu Midtown und gute 7-Train-Anbindung halten Nachfrage hoch.",
    outlook:
      "Sanfte Verdichtung, Erhalt historischer Wohnanlagen und bessere Straßenräume prägen die Zukunft.",
    character: "Unaufgeregt, freundlich, nah an Manhattan und trotzdem lokal.",
    description:
      "Sunnyside ist Queens im Alltag: kurze Wege, Mietshäuser, Garden Apartments, irische und lateinamerikanische Spuren, lokale Restaurants und erstaunlich schnelle Midtown-Anbindung.",
    developments:
      "Die wichtigsten Themen sind Wohnraumerhalt, punktuelle Neubauten, Queens Boulevard und bessere Fuß- und Radwege.",
    events:
      "Sunnyside Gardens Park, lokale Paraden, Restaurants und Nachbarschaftsprogramme schaffen eine ruhige, aber stabile Öffentlichkeit.",
    expectation:
      "Sunnyside wird vermutlich langsam teurer, ohne seine ruhige Wohnidentität vollständig zu verlieren."
  }
];

const bronxNeighborhoods = [
  {
    name: "Mott Haven",
    region: "south",
    area: "South Bronx",
    imageTitle: "Mott Haven, Bronx",
    vibe: "Industrieerbe, neue Türme, Kunst und Harlem-River-Nähe",
    price: "$$",
    rent: "2.4k-3.6k",
    future: "starker Entwicklungsdruck",
    history:
      "Mott Haven entwickelte sich als Industrie- und Arbeiterquartier am Harlem River und wurde später zum Symbol für South-Bronx-Wandel.",
    prices:
      "Neue Waterfront- und Luxusprojekte heben die Preise, aber der Markt bleibt unter Manhattan und North Brooklyn.",
    outlook:
      "Harlem-River-Waterfront, neue Wohnungen und Kulturorte werden Mott Haven stark verändern.",
    character: "Roh, kreativ, politisch und sichtbar im Umbruch.",
    description:
      "Mott Haven ist einer der dynamischsten Räume der Bronx: alte Industrie, neue Apartmenttürme, Kunstorte, lokale Restaurants und Debatten über Verdrängung liegen dicht zusammen.",
    developments:
      "Bronx Point, Harlem-River-Waterfront, neue Mixed-Use-Bauten und Verbesserungen im öffentlichen Raum sind prägend.",
    events:
      "Bronx Documentary Center, lokale Galerien, Hip-Hop-Bezüge, Food-Spots und Waterfront-Programme geben dem Viertel kulturelle Energie.",
    expectation:
      "Mott Haven wird weiter wachsen. Entscheidend bleibt, ob neue Investitionen bezahlbares Wohnen und lokale Unternehmen stärken."
  },
  {
    name: "Concourse",
    region: "south",
    area: "Grand Concourse",
    imageTitle: "Grand Concourse (Bronx)",
    vibe: "Art Deco, Yankee Stadium, breite Boulevards",
    price: "$$",
    rent: "2.2k-3.3k",
    future: "Kultur- und Wohnkorridor",
    history:
      "Der Grand Concourse wurde als Prachtboulevard der Bronx entwickelt und ist berühmt für Art-Deco-Wohnhäuser.",
    prices:
      "Im NYC-Vergleich moderater, mit Premiums für sanierte Gebäude und gute Subway-Nähe.",
    outlook:
      "Museums-, Stadion- und Wohninvestitionen können die Achse weiter stärken.",
    character: "Monumental, historisch und unterschätzt.",
    description:
      "Concourse zeigt die urbane Würde der Bronx: breite Straßen, Art-Deco-Fassaden, große Wohnhäuser, Yankee Stadium und kurze Wege nach Manhattan.",
    developments:
      "Renovierungen, Bronx Museum, Stadionnutzung, bezahlbarer Wohnungsbau und Straßenraumverbesserungen prägen den Korridor.",
    events:
      "Yankee-Spiele, Bronx Museum, Joyce-Kilmer-Park-Programme und lokale Paraden sorgen für starke Ereignisdichte.",
    expectation:
      "Concourse kann profitieren, wenn Architektur, Kultur und Wohnqualität stärker zusammengedacht werden."
  },
  {
    name: "Fordham",
    region: "central",
    area: "Central Bronx",
    imageTitle: "Fordham, Bronx",
    vibe: "Universität, Shopping, Transit und Little Italy-Nähe",
    price: "$",
    rent: "1.9k-3.0k",
    future: "stabiler Alltagsknoten",
    history:
      "Fordham entwickelte sich rund um Fordham University, Fordham Road und starke Transit- und Einkaufsfunktionen.",
    prices:
      "Relativ erreichbar, aber Universitäts- und Transitnähe stützen Nachfrage.",
    outlook:
      "Einzelhandel, Campus, Bus- und Metro-North-Anbindung halten Fordham als Knoten relevant.",
    character: "Dicht, praktisch, studentisch und kommerziell.",
    description:
      "Fordham ist ein Bronx-Knoten mit Universität, Einkaufsstraße, Transit und Nähe zu Belmont. Es ist weniger poliert, aber sehr funktional.",
    developments:
      "Wichtige Themen sind Fordham Road, Metro-North, Campus-Investitionen, bezahlbarer Wohnraum und bessere Fußgängerbereiche.",
    events:
      "Fordham University, Bronx Zoo in der Nähe, New York Botanical Garden und Arthur Avenue schaffen einen starken Kultur- und Besuchsraum.",
    expectation:
      "Fordham bleibt stabil nachgefragt. Große Sprünge hängen an Infrastruktur und Erdgeschossqualität."
  },
  {
    name: "Belmont",
    region: "central",
    area: "Little Italy Bronx",
    imageTitle: "Arthur Avenue",
    vibe: "Arthur Avenue, italienische Märkte und Esskultur",
    price: "$$",
    rent: "2.0k-3.1k",
    future: "kulinarische Marke bleibt stark",
    history:
      "Belmont wurde durch italienische Einwanderung, Märkte, Bäckereien und Restaurants rund um Arthur Avenue geprägt.",
    prices:
      "Moderater als viele Brooklyn- und Queens-Lagen, aber Markenwert und Nähe zu Fordham/Botanical Garden helfen.",
    outlook:
      "Die Zukunft hängt an Erhalt der kleinen Lebensmittelbetriebe und besserer Aufenthaltsqualität.",
    character: "Warm, kulinarisch, traditionell und sehr besuchbar.",
    description:
      "Belmont ist eine der klarsten Food-Adressen New Yorks. Arthur Avenue, Bäckereien, Metzgereien, Restaurants und Märkte geben dem Viertel eine starke Identität.",
    developments:
      "Sanierung, kleinteilige Gewerbeförderung, Fordham-Nähe und Tourismusmanagement sind wichtiger als große Hochhausentwicklung.",
    events:
      "Ferragosto, Arthur Avenue Retail Market, Food-Touren, Bronx Zoo und Botanical Garden in der Nähe sorgen für Besucher.",
    expectation:
      "Belmont bleibt besonders, wenn Familienbetriebe und kulinarische Authentizität erhalten bleiben."
  },
  {
    name: "Riverdale",
    region: "north",
    area: "Northwest Bronx",
    imageTitle: "Riverdale, Bronx",
    vibe: "Hudson-Hänge, große Wohnungen, Schulen und Ruhe",
    price: "$$$",
    rent: "2.8k-4.3k",
    future: "stabiler gehobener Wohnmarkt",
    history:
      "Riverdale entwickelte sich als grünes, höher gelegenes Wohngebiet mit Villen, Apartmenthäusern und Hudson-Bezug.",
    prices:
      "Größere Wohnungen, Schulen und Ruhe erzeugen ein anderes Preisprofil als der südliche Bronx-Markt.",
    outlook:
      "Sanierung, Schulnachfrage und Metro-North-Anbindung halten Riverdale stabil.",
    character: "Grün, ruhig, wohlhabend und fast vorstädtisch.",
    description:
      "Riverdale fühlt sich weniger dicht an als viele NYC-Viertel: Hügel, Bäume, größere Grundstücke, Co-ops, Schulen und Blicke Richtung Hudson.",
    developments:
      "Punktuelle Wohnsanierungen, Klimaanpassung an Hanglagen, Schulen und Verkehrsverbindungen sind die zentralen Themen.",
    events:
      "Wave Hill, Van Cortlandt Park, Schulen, Synagogen, lokale Kultur und Hudson-nahe Programme prägen den Kalender.",
    expectation:
      "Riverdale bleibt ein ruhiger Premiumstandort der Bronx, getragen von Raum, Grün und Schulen."
  },
  {
    name: "Kingsbridge",
    region: "north",
    area: "Northwest Bronx",
    imageTitle: "Kingsbridge, Bronx",
    vibe: "Transit, Handel, Familien und Armory-Zukunft",
    price: "$$",
    rent: "2.1k-3.3k",
    future: "Armory als Schlüssel",
    history:
      "Kingsbridge liegt an alten Verkehrswegen und wuchs als Wohn- und Einkaufsgebiet zwischen Riverdale, Fordham und Van Cortlandt Park.",
    prices:
      "Moderater Markt mit Stabilität durch Transit, Schulen und Nähe zu Parkflächen.",
    outlook:
      "Die Zukunft hängt stark an der Revitalisierung der Kingsbridge Armory.",
    character: "Praktisch, dicht, familienorientiert und noch unterschätzt.",
    description:
      "Kingsbridge ist ein Alltagsviertel mit Subway, Buslinien, Geschäften, Parks und einer großen Zukunftsfrage: Was aus der Kingsbridge Armory wird.",
    developments:
      "Die Kingsbridge Armory ist das große Transformationsprojekt. Geplante Nutzungen sollen Jobs, Kultur, Sport, Community-Flächen und neue Frequenz bringen.",
    events:
      "Van Cortlandt Park, lokale Sportprogramme, Schulen und künftige Armory-Nutzungen können das öffentliche Profil stärken.",
    expectation:
      "Wenn die Armory gut umgesetzt wird, kann Kingsbridge deutlich sichtbarer und wirtschaftlich stärker werden."
  },
  {
    name: "Throgs Neck",
    region: "east",
    area: "East Bronx",
    imageTitle: "Throggs Neck",
    vibe: "Wasser, Einfamilienhäuser, Brücken und Ruhe",
    price: "$$",
    rent: "2.2k-3.4k",
    future: "resiliente Küstenlage",
    history:
      "Throgs Neck wuchs als wasserorientiertes Wohngebiet mit maritimer Lage, Brückenbezug und niedrigerer Bebauung.",
    prices:
      "Stärker eigentums- und hausgeprägt als viele Bronx-Lagen; Wasser und Ruhe erzeugen Aufpreise.",
    outlook:
      "Küstenresilienz, Verkehr und Erhalt der niedrigen Wohnstruktur sind zentrale Zukunftsthemen.",
    character: "Ruhig, lokal, maritim und weniger großstädtisch.",
    description:
      "Throgs Neck zeigt eine andere Bronx: Wasserblicke, niedrige Häuser, Yachthäfen, Brücken und eine fast kleinstädtische Wohnruhe.",
    developments:
      "Straßen, Küstenschutz, kleine Wohnprojekte und Mobilität Richtung Subway/Bus bleiben wichtiger als Großprojekte.",
    events:
      "Waterfront-Restaurants, lokale Paraden, Parks und maritime Freizeit prägen das Viertel.",
    expectation:
      "Throgs Neck bleibt stabil, wenn Küstenrisiken gut gemanagt und die lokale Wohnqualität erhalten werden."
  },
  {
    name: "City Island",
    region: "east",
    area: "East Bronx Waterfront",
    imageTitle: "City Island, Bronx",
    vibe: "Fischrestaurants, Boote und Dorfgefühl",
    price: "$$",
    rent: "2.2k-3.4k",
    future: "Nischenmarkt mit Küstenthemen",
    history:
      "City Island ist eng mit Bootsbau, Fischerei, Restaurants und maritimer Bronx-Geschichte verbunden.",
    prices:
      "Kleine Fläche und Wasserlage schaffen Knappheit, aber Erreichbarkeit begrenzt den Markt.",
    outlook:
      "Küstenresilienz, Tourismus und Erhalt des Dorfcharakters bestimmen die Zukunft.",
    character: "Eigenständig, maritim, langsam und sehr untypisch für NYC.",
    description:
      "City Island fühlt sich wie ein Hafendorf innerhalb New Yorks an: Boote, Seafood, kleine Häuser, Wasserblicke und eine klare Abgrenzung vom restlichen Stadtraum.",
    developments:
      "Wichtige Themen sind Uferresilienz, Verkehr an Wochenenden, kleine Wohnprojekte und Schutz des maritimen Charakters.",
    events:
      "Seafood-Restaurants, Bootsleben, lokale Kunst, Sommerbesuche und Orchard-Beach-Nähe prägen den Rhythmus.",
    expectation:
      "City Island bleibt ein Spezialmarkt. Sein Wert liegt gerade darin, nicht wie der Rest der Stadt zu wirken."
  }
];

const statenIslandNeighborhoods = [
  {
    name: "St. George",
    region: "north",
    area: "North Shore",
    imageTitle: "St. George, Staten Island",
    vibe: "Fähre, Hafenblick, Kultur und Civic Center",
    price: "$$",
    rent: "2.1k-3.3k",
    future: "North-Shore-Schlüsselraum",
    history:
      "St. George wurde durch Fährverkehr, Verwaltung, Theater und die Beziehung zu Lower Manhattan geprägt.",
    prices:
      "Im NYC-Vergleich erreichbar, mit Aufpreisen für Wasserblick und Fährnähe.",
    outlook:
      "North-Shore-Investitionen, öffentliche Räume und gemischte Nutzung können St. George stärken.",
    character: "Aussichtsreich, ruhig urban und stark vom Fährterminal geprägt.",
    description:
      "St. George ist das urbane Eingangstor Staten Islands: Fähre, Borough Hall, Theater, Hafenblick, historische Häuser und neue Wohnprojekte treffen direkt am Wasser zusammen.",
    developments:
      "North Shore Action Plan, Waterfront-Nutzung, Lighthouse-Point-Umfeld, neue Wohnungen und öffentliche Räume sind zentrale Zukunftsthemen.",
    events:
      "Staten Island FerryHawks, St. George Theatre, Kulturprogramme, Fähren und Waterfront-Events schaffen Öffentlichkeit.",
    expectation:
      "St. George kann stärker werden, wenn Fährnähe, Kultur und Wohnen zu einem echten gemischten Zentrum verbunden werden."
  },
  {
    name: "Tompkinsville",
    region: "north",
    area: "North Shore",
    imageTitle: "Tompkinsville, Staten Island",
    vibe: "Sri-lankische Restaurants, Fährenähe und Wohnstraßen",
    price: "$$",
    rent: "2.0k-3.1k",
    future: "kleinteilige Aufwertung",
    history:
      "Tompkinsville ist eines der älteren Staten-Island-Viertel und heute besonders durch sri-lankische und südasiatische Gastronomie sichtbar.",
    prices:
      "Günstiger als viele Lagen nahe Manhattan, aber Fährnähe und Food-Profil erhöhen Interesse.",
    outlook:
      "Kleine Sanierungen, Gastronomie und bessere North-Shore-Verbindungen prägen die Zukunft.",
    character: "Lokal, kulinarisch, gemischt und unterschätzt.",
    description:
      "Tompkinsville liegt nah an St. George, wirkt aber kleinteiliger: Wohnhäuser, lokale Geschäfte, sri-lankische Restaurants und kurze Wege zur Fähre.",
    developments:
      "North-Shore-Verkehr, kleine Wohnprojekte, Retail-Stabilisierung und bessere Fußwege sind die wichtigsten Themen.",
    events:
      "Sri-lankische Restaurants, lokale Food-Szene, Community-Events und Kulturangebote im nahen St. George prägen den Alltag.",
    expectation:
      "Tompkinsville dürfte langsam sichtbarer werden, ohne seinen lokalen Charakter sofort zu verlieren."
  },
  {
    name: "Stapleton",
    region: "north",
    area: "North Shore Waterfront",
    imageTitle: "Stapleton, Staten Island",
    vibe: "Waterfront, alte Hafenflächen und neues Wohnen",
    price: "$$",
    rent: "2.0k-3.2k",
    future: "Waterfront-Reaktivierung",
    history:
      "Stapleton war Hafen- und Marine-Standort und ist heute ein wichtiger Baustein der North-Shore-Erneuerung.",
    prices:
      "Noch vergleichsweise erreichbar, mit Aufwertungspotenzial durch neue Waterfront-Wohnungen.",
    outlook:
      "Ehemalige Homeport-Flächen, neue Wohnungen und Uferzugang bestimmen die nächste Phase.",
    character: "Im Übergang, wasserorientiert und weniger etabliert als St. George.",
    description:
      "Stapleton ist ein Transformationsraum: alte Hafen- und Gewerbespuren, neue Wohnbauten, Uferflächen und Nähe zur Staten Island Railway.",
    developments:
      "Staten Island Homeport, North-Shore-Waterfront, neue Wohn- und Gewerbeflächen sowie öffentliche Uferzugänge sind die Kernprojekte.",
    events:
      "Lokale Restaurants, Waterfront-Programme, kleine Kulturorte und Verbindungen nach St. George geben Stapleton sein öffentliches Leben.",
    expectation:
      "Stapleton kann deutlich gewinnen, wenn der Waterfront-Umbau echte Alltagsqualität und nicht nur neue Gebäude bringt."
  },
  {
    name: "Snug Harbor",
    region: "north",
    area: "Cultural North Shore",
    imageTitle: "Sailors' Snug Harbor",
    vibe: "Kulturcampus, Gärten, Museen und alte Architektur",
    price: "$$",
    rent: "2.0k-3.1k",
    future: "Kultur als Standortanker",
    history:
      "Sailors' Snug Harbor war eine historische Heimstätte für Seeleute und ist heute einer der wichtigsten Kulturorte Staten Islands.",
    prices:
      "Wohnlagen in der Umgebung profitieren von Grün, Kultur und North-Shore-Nähe, bleiben aber moderater als Brooklyn-Pendants.",
    outlook:
      "Kulturinvestitionen und bessere Verbindungen können den Standort sichtbarer machen.",
    character: "Grün, historisch, ruhig und kulturell überraschend.",
    description:
      "Snug Harbor ist kein klassisches dichtes Viertel, sondern ein kultureller Anker: historische Gebäude, botanische Gärten, Museen und offene Flächen prägen das Umfeld.",
    developments:
      "Wichtig sind Pflege der historischen Anlagen, Kulturprogramme, North-Shore-Transit und bessere Wege zu umliegenden Wohngebieten.",
    events:
      "Snug Harbor Cultural Center, Chinese Scholar's Garden, Newhouse Center und saisonale Festivals sind zentrale Ereignisse.",
    expectation:
      "Der Bereich bleibt attraktiv, wenn Kultur, Grün und Erreichbarkeit stärker zusammenspielen."
  },
  {
    name: "New Dorp",
    region: "east",
    area: "East Shore",
    imageTitle: "New Dorp, Staten Island",
    vibe: "Einkaufsstraßen, Familien, Bahn und Strandnähe",
    price: "$$",
    rent: "2.0k-3.1k",
    future: "stabiler Alltagsstandort",
    history:
      "New Dorp ist eines der älteren Siedlungsgebiete Staten Islands und entwickelte sich zu einem wichtigen lokalen Einkaufs- und Wohnzentrum.",
    prices:
      "Moderates Niveau, geprägt von Einfamilienhäusern, kleineren Apartments und Nähe zur Staten Island Railway.",
    outlook:
      "Lokaler Handel, Küstenresilienz und Wohnraumerneuerung bestimmen die Zukunft.",
    character: "Praktisch, familiennah, autogeprägt und lokal.",
    description:
      "New Dorp ist ein Alltagszentrum der East Shore: Einkaufsstraßen, Bahnanschluss, Schulen, Restaurants, Häuser und Nähe zu Parks und Strandbereichen.",
    developments:
      "Straßenraum, Küstenschutz, kleine Wohnprojekte und Stabilisierung lokaler Geschäftsachsen sind die wichtigsten Themen.",
    events:
      "Lokale Paraden, Restaurants, Miller Field, Strandnähe und Gemeindeveranstaltungen prägen den Kalender.",
    expectation:
      "New Dorp bleibt stabil, wenn Handel, Mobilität und Küstenschutz schrittweise verbessert werden."
  },
  {
    name: "Tottenville",
    region: "south",
    area: "South Shore",
    imageTitle: "Tottenville, Staten Island",
    vibe: "Historische Häuser, Wasser, Ruhe und Südspitze",
    price: "$$",
    rent: "2.1k-3.3k",
    future: "ruhig, resilient, eigentumsstark",
    history:
      "Tottenville war ein maritimer Ort mit Austern-, Boots- und Handelsgeschichte an der Südspitze Staten Islands.",
    prices:
      "Stärker haus- und eigentumsgeprägt, mit Preisen abhängig von Wasserlage, Grundstück und Zustand.",
    outlook:
      "Küstenschutz und Erhalt des historischen Maßstabs bleiben entscheidend.",
    character: "Langsam, wasserorientiert, historisch und weit weg vom NYC-Klischee.",
    description:
      "Tottenville wirkt fast kleinstädtisch: niedrige Häuser, alte Straßenzüge, Wasserbezug, Parks und eine Distanz zum dichten New-York-Rhythmus.",
    developments:
      "Küstenresilienz, kleine Wohnsanierungen, Parks und Verkehrsanbindung zur Staten Island Railway sind zentrale Themen.",
    events:
      "Conference House Park, lokale Geschichtsfeste, maritime Freizeit und South-Shore-Veranstaltungen prägen den Charakter.",
    expectation:
      "Tottenville bleibt ein Nischenmarkt für Ruhe, Häuser und Wasser. Große Verdichtung ist weniger wahrscheinlich."
  },
  {
    name: "Great Kills",
    region: "east",
    area: "South-East Shore",
    imageTitle: "Great Kills, Staten Island",
    vibe: "Marina, Parks, Familien und Küstenlage",
    price: "$$",
    rent: "2.1k-3.3k",
    future: "Küstenqualität mit Resilienzbedarf",
    history:
      "Great Kills entwickelte sich als Wohn- und Freizeitgebiet mit starker Beziehung zu Marina, Parks und Küste.",
    prices:
      "Haus- und familienorientierter Markt mit Aufpreisen für ruhige Straßen und Wassernähe.",
    outlook:
      "Küstenschutz, Parkpflege und Verkehrsverbindungen bestimmen die Zukunft.",
    character: "Ruhig, grün, familiennah und maritim.",
    description:
      "Great Kills steht für Staten-Island-Wohnqualität am Wasser: Marina, Parks, Häuser, Schulen und ein Alltag, der deutlich langsamer wirkt als in den inneren Boroughs.",
    developments:
      "Resilienz, Great Kills Park, Straßeninfrastruktur und lokale Geschäftsachsen bleiben die wichtigsten Zukunftsfelder.",
    events:
      "Marina-Leben, Parkprogramme, lokale Sport- und Familienevents geben dem Viertel seinen Rhythmus.",
    expectation:
      "Great Kills bleibt stabil, solange Küstenrisiken gut gemanagt und die ruhige Wohnqualität erhalten wird."
  },
  {
    name: "West Brighton",
    region: "north",
    area: "North Shore",
    imageTitle: "West New Brighton, Staten Island",
    vibe: "Zoo, alte Häuser, lokale Läden und North-Shore-Nähe",
    price: "$$",
    rent: "2.0k-3.1k",
    future: "solide und nachbarschaftlich",
    history:
      "West Brighton entwickelte sich als älteres Wohngebiet der North Shore mit lokalen Einkaufsstraßen und Nähe zu Parks und Institutionen.",
    prices:
      "Moderate Preise, getragen von Häusern, Mietwohnungen und guter North-Shore-Lage.",
    outlook:
      "Stabilität entsteht durch lokale Infrastruktur, Schulen, Parks und Verbindung zu St. George.",
    character: "Wohnlich, lokal, bodenständig und familiennah.",
    description:
      "West Brighton ist ein ruhiges North-Shore-Wohnviertel mit alten Häusern, Läden, Staten Island Zoo, Schulen und Nähe zu den Kulturorten im Norden.",
    developments:
      "Lokale Straßen, kleine Wohnsanierungen, North-Shore-Verbindungen und öffentliche Einrichtungen prägen die Zukunft.",
    events:
      "Staten Island Zoo, lokale Märkte, Parks, Schulen und Gemeindefeste sorgen für Alltagsleben.",
    expectation:
      "West Brighton dürfte ruhig stabil bleiben und von einer stärkeren North Shore profitieren."
  }
];

const boroughs = {
  manhattan: {
    name: "Manhattan",
    neighborhoods,
    heroImage:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=2200&q=80",
    regions: [
      ["all", "Alle"],
      ["uptown", "Uptown"],
      ["midtown", "Midtown"],
      ["downtown", "Downtown"]
    ],
    defaultPair: ["Harlem", "TriBeCa"],
    defaultSelected: "Greenwich Village",
    rentStat: "$5.1k",
    rentTitle: "Median-Miete Manhattan",
    rentCopy: "Realtor.com meldete für März 2026 eine mediane Angebotsmiete von etwa 5.100 Dollar pro Monat.",
    indexStat: "+6.8",
    indexCopy: "NYCEDC zeigte im April 2026 einen StreetEasy Rent Index deutlich über Vor-Covid-Niveau."
  },
  brooklyn: {
    name: "Brooklyn",
    neighborhoods: brooklynNeighborhoods,
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Brooklyn_Bridge_and_Skyline.jpg?width=2400",
    regions: [
      ["all", "Alle"],
      ["north", "North Brooklyn"],
      ["central", "Central"],
      ["east", "East"],
      ["south", "South"]
    ],
    defaultPair: ["Williamsburg", "Park Slope"],
    defaultSelected: "Williamsburg",
    rentStat: "$3.7k",
    rentTitle: "Median-Miete Brooklyn",
    rentCopy: "Brooklyn zeigt große Spannen: Premiumlagen am Wasser liegen deutlich über vielen südlichen und östlichen Wohnlagen.",
    indexStat: "+4.9",
    indexCopy: "Der Mietdruck bleibt besonders in North Brooklyn, Brownstone Brooklyn und gut angebundenen Transitlagen hoch."
  },
  queens: {
    name: "Queens",
    neighborhoods: queensNeighborhoods,
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pepsi-Cola_sign_in_Gantry_Plaza_State_Park%2C_Long_Island_City%2C_New_York.jpg?width=2400",
    regions: [
      ["all", "Alle"],
      ["west", "West Queens"],
      ["central", "Central"],
      ["east", "East"],
      ["south", "South"]
    ],
    defaultPair: ["Long Island City", "Jackson Heights"],
    defaultSelected: "Long Island City",
    rentStat: "$3.0k",
    rentTitle: "Median-Miete Queens",
    rentCopy: "Queens reicht von LIC-Premiumlagen bis zu deutlich ruhigeren, familienorientierten Märkten im Osten und Süden.",
    indexStat: "+3.8",
    indexCopy: "Transit, Flughafennähe, internationale Handelszentren und neue Waterfront-Projekte treiben die Entwicklung."
  },
  bronx: {
    name: "Bronx",
    neighborhoods: bronxNeighborhoods,
    heroImage:
      "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&w=2200&q=80",
    regions: [
      ["all", "Alle"],
      ["south", "South Bronx"],
      ["central", "Central"],
      ["north", "North"],
      ["east", "East"]
    ],
    defaultPair: ["Mott Haven", "Riverdale"],
    defaultSelected: "Mott Haven",
    rentStat: "$2.5k",
    rentTitle: "Median-Miete Bronx",
    rentCopy: "Die Bronx bleibt im Vergleich erreichbar, zeigt aber starke Unterschiede zwischen Waterfront-Wachstum und ruhigen Wohnlagen.",
    indexStat: "+3.2",
    indexCopy: "Große Hebel sind Transit, bezahlbarer Wohnungsbau, Kulturinvestitionen und einzelne Schlüsselprojekte wie Kingsbridge Armory."
  },
  "staten-island": {
    name: "Staten Island",
    neighborhoods: statenIslandNeighborhoods,
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/St_George_Full_Skyline_2023.png?width=2400",
    regions: [
      ["all", "Alle"],
      ["north", "North Shore"],
      ["east", "East Shore"],
      ["south", "South Shore"]
    ],
    defaultPair: ["St. George", "Tottenville"],
    defaultSelected: "St. George",
    rentStat: "$2.4k",
    rentTitle: "Median-Miete Staten Island",
    rentCopy: "Staten Island ist stärker haus-, küsten- und fährorientiert und bleibt meist günstiger als die inneren Boroughs.",
    indexStat: "+2.4",
    indexCopy: "North-Shore-Entwicklung, Küstenresilienz und Fährnähe sind die wichtigsten Zukunftsfaktoren."
  }
};

const grid = document.querySelector("#neighborhoodGrid");
const detailPanel = document.querySelector("#detailPanel");
const searchInput = document.querySelector("#searchInput");
const languageSelect = document.querySelector("#languageSelect");
const boroughSelect = document.querySelector("#boroughSelect");
const compareA = document.querySelector("#compareA");
const compareB = document.querySelector("#compareB");
const comparisonOutput = document.querySelector("#comparisonOutput");
const segmentGroup = document.querySelector(".segments");
const profileCount = document.querySelector("#profileCount");
const cookieBanner = document.querySelector("#cookieBanner");
const cookieAccept = document.querySelector("#cookieAccept");
const cookieEssential = document.querySelector("#cookieEssential");
const resetCookieChoice = document.querySelector("#resetCookieChoice");
const legalToggles = document.querySelectorAll(".legal-toggle");
const tripPreferenceButtons = document.querySelectorAll(".trip-chip");
const attractionButtons = document.querySelectorAll(".attraction-chip");
const tripBorough = document.querySelector("#tripBorough");
const tripBudget = document.querySelector("#tripBudget");
const tripStyle = document.querySelector("#tripStyle");
const tripOutput = document.querySelector("#tripOutput");

let selectedRegion = "all";
let selectedNeighborhood = null;

function getSavedBorough() {
  try {
    return localStorage.getItem("nycAtlasBorough") || "manhattan";
  } catch {
    return "manhattan";
  }
}

function saveBorough(borough) {
  try {
    localStorage.setItem("nycAtlasBorough", borough);
  } catch {
    // Direct file previews may block storage; the page should still work.
  }
}

let activeBoroughKey = boroughs[getSavedBorough()] ? getSavedBorough() : "manhattan";

function getCookieChoice() {
  try {
    return localStorage.getItem("nycAtlasCookieChoice");
  } catch {
    return null;
  }
}

function saveCookieChoice(choice) {
  try {
    localStorage.setItem("nycAtlasCookieChoice", choice);
  } catch {
    // Direct file previews may block storage; the banner can still be dismissed visually.
  }
}

function showCookieBanner() {
  if (!cookieBanner) return;
  cookieBanner.classList.toggle("visible", !getCookieChoice());
}

function hideCookieBanner(choice) {
  saveCookieChoice(choice);
  cookieBanner?.classList.remove("visible");
}

function currentBorough() {
  return boroughs[activeBoroughKey] || boroughs.manhattan;
}

function activeNeighborhoods() {
  return currentBorough().neighborhoods;
}

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
    heroTitle: "Nachbarschaften von New York",
    heroCopy:
      "Ein kuratierter Atlas der wichtigsten New-York-Viertel mit prägnanten Markt-, Geschichts- und Zukunftsanalysen sowie hochwertigen Bildern, die den Charakter jedes Ortes sichtbar machen.",
    searchLabel: "Suchen",
    searchPlaceholder: "z.B. Harlem, Williamsburg, Astoria",
    regionAll: "Alle",
    statRentTitle: "Median-Miete",
    statRentCopy:
      "Realtor.com meldete für März 2026 eine mediane Angebotsmiete von etwa 5.100 Dollar pro Monat.",
    statIndexCopy:
      "NYCEDC zeigte im April 2026 einen StreetEasy Rent Index deutlich über Vor-Covid-Niveau.",
    statProfilesCopy:
      "Kompakte Profile für schnelle Vergleiche innerhalb des ausgewählten Bezirks.",
    marketEyebrow: "Market snapshot",
    marketTitle: "Bezirk auf einen Blick",
    marketCopy: "Ein kurzer Marktimpuls, bevor du zwei Nachbarschaften direkt vergleichst.",
    statIndexTitle: "Rent Index",
    statProfilesTitle: "Profile",
    sourcesPrefix: "Preis- und Markthinweise basieren auf öffentlichen Marktindikatoren von",
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
    chooseEyebrow: "Viertel wählen",
    neighborhoodsTitle: "Nachbarschaften",
    analysisEyebrow: "Analyse",
    emptyTitle: "Wähle eine Kachel aus.",
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
    analysisProjects: "Gebäude & Projekte",
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
    heroTitle: "Neighborhoods of New York",
    heroCopy:
      "A curated atlas of New York's key neighborhoods, combining concise market, history and future analysis with high-quality imagery that reveals each place's character.",
    searchLabel: "Search",
    searchPlaceholder: "e.g. Harlem, SoHo, Chelsea",
    regionAll: "All",
    statRentTitle: "Median rent",
    statRentCopy:
      "Realtor.com reported a median asking rent of about $5,100 per month for March 2026.",
    statIndexCopy:
      "In April 2026, NYCEDC showed a StreetEasy rent index clearly above its pre-Covid level.",
    statProfilesCopy:
      "Compact profiles for quick comparison inside the selected borough.",
    marketEyebrow: "Market snapshot",
    marketTitle: "Borough at a glance",
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
    heroTitle: "Barrios de Nueva York",
    heroCopy:
      "Un atlas curado de los barrios clave de Nueva York, con análisis de mercado, historia y futuro, además de imágenes de alta calidad que revelan el carácter de cada lugar.",
    searchLabel: "Buscar",
    searchPlaceholder: "p. ej. Harlem, Williamsburg, Astoria",
    regionAll: "Todos",
    statRentTitle: "Renta mediana",
    statRentCopy:
      "Realtor.com informo una renta mediana solicitada de unos 5.100 dolares al mes en marzo de 2026.",
    statIndexCopy:
      "En abril de 2026, NYCEDC mostro un indice de renta de StreetEasy claramente por encima del nivel previo al Covid.",
    statProfilesCopy:
      "Perfiles compactos para comparar rapidamente dentro del distrito seleccionado.",
    marketEyebrow: "Resumen del mercado",
    marketTitle: "Distrito de un vistazo",
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
    heroTitle: "Quartiers de New York",
    heroCopy:
      "Un atlas éditorial des quartiers clés de New York, avec des analyses de marché, d'histoire et d'avenir, ainsi que des images de haute qualité révélant le caractère de chaque lieu.",
    searchLabel: "Rechercher",
    searchPlaceholder: "ex. Harlem, Williamsburg, Astoria",
    regionAll: "Tous",
    statRentTitle: "Loyer median",
    statRentCopy:
      "Realtor.com a signale un loyer median demande d'environ 5 100 dollars par mois en mars 2026.",
    statIndexCopy:
      "En avril 2026, NYCEDC montrait un indice de loyers StreetEasy nettement au-dessus du niveau pre-Covid.",
    statProfilesCopy:
      "Des profils compacts pour comparer rapidement dans l'arrondissement choisi.",
    marketEyebrow: "Apercu du marche",
    marketTitle: "Arrondissement en un coup d'oeil",
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
    heroTitle: "Bairros de Nova York",
    heroCopy:
      "Um atlas curado dos principais bairros de Nova York, com análises de mercado, história e futuro, além de imagens de alta qualidade que revelam o caráter de cada lugar.",
    searchLabel: "Buscar",
    searchPlaceholder: "ex. Harlem, Williamsburg, Astoria",
    regionAll: "Todos",
    statRentTitle: "Aluguel mediano",
    statRentCopy:
      "A Realtor.com informou um aluguel mediano pedido de cerca de US$ 5.100 por mes em marco de 2026.",
    statIndexCopy:
      "Em abril de 2026, a NYCEDC mostrou um indice de aluguel StreetEasy claramente acima do nivel pre-Covid.",
    statProfilesCopy:
      "Perfis compactos para comparar rapidamente dentro do distrito selecionado.",
    marketEyebrow: "Resumo do mercado",
    marketTitle: "Distrito em um olhar",
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
    heroTitle: "纽约街区",
    heroCopy:
      "一份精心策划的纽约重点街区图鉴，结合市场、历史与未来分析，并通过高质量图片呈现每个地方的独特气质。",
    searchLabel: "搜索",
    searchPlaceholder: "例如 Harlem、Williamsburg、Astoria",
    regionAll: "全部",
    statRentTitle: "租金中位数",
    statRentCopy:
      "Realtor.com 报告称，2026 年 3 月曼哈顿挂牌租金中位数约为每月 5,100 美元。",
    statIndexCopy:
      "NYCEDC 在 2026 年 4 月显示，StreetEasy 租金指数明显高于疫情前水平。",
    statProfilesCopy:
      "在所选行政区内，用紧凑档案快速比较不同街区。",
    marketEyebrow: "市场概览",
    marketTitle: "行政区概览",
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

function boroughTitle() {
  return `${currentBorough().name} Atlas`;
}

function boroughHeroTitle() {
  const germanNames = {
    manhattan: "Nachbarschaften in Manhattan",
    brooklyn: "Nachbarschaften in Brooklyn",
    queens: "Nachbarschaften in Queens",
    bronx: "Nachbarschaften in der Bronx",
    "staten-island": "Nachbarschaften auf Staten Island"
  };
  const names = {
    de: germanNames[activeBoroughKey] || `Nachbarschaften in ${currentBorough().name}`,
    en: `${currentBorough().name} neighborhoods`,
    es: `Barrios de ${currentBorough().name}`,
    fr: `Quartiers de ${currentBorough().name}`,
    pt: `Bairros de ${currentBorough().name}`,
    zh: `${currentBorough().name} 街区`
  };
  return names[currentLanguage] || names.de;
}

function boroughHeroCopy() {
  const name = currentBorough().name;
  const copy = {
    de: `Ein kuratierter Atlas der wichtigsten Viertel in ${name} mit prägnanten Markt-, Geschichts- und Zukunftsanalysen sowie hochwertigen Bildern, die den Charakter jedes Ortes sichtbar machen.`,
    en: `A curated atlas of ${name}'s key neighborhoods, combining concise market, history and future analysis with high-quality imagery that reveals each place's character.`,
    es: `Un atlas curado de los barrios clave de ${name}, con análisis de mercado, historia y futuro, además de imágenes de alta calidad que revelan el carácter de cada lugar.`,
    fr: `Un atlas éditorial des quartiers clés de ${name}, avec des analyses de marché, d'histoire et d'avenir, ainsi que des images de haute qualité révélant le caractère de chaque lieu.`,
    pt: `Um atlas curado dos principais bairros de ${name}, com análises de mercado, história e futuro, além de imagens de alta qualidade que revelam o caráter de cada lugar.`,
    zh: `一份精心策划的 ${name} 重点街区图鉴，结合市场、历史与未来分析，并通过高质量图片呈现每个地方的独特气质。`
  };
  return copy[currentLanguage] || copy.de;
}

function updateBoroughInterface() {
  const borough = currentBorough();
  const glance = {
    de: `${borough.name} auf einen Blick`,
    en: `${borough.name} at a glance`,
    es: `${borough.name} de un vistazo`,
    fr: `${borough.name} en un coup d'oeil`,
    pt: `${borough.name} em um olhar`,
    zh: `${borough.name} 概览`
  };
  const profileCopy = {
    de: `${borough.neighborhoods.length} ausgewählte Profile in ${borough.name}: kompakt genug zum Vergleichen, ausführlich genug für eine echte Einschätzung.`,
    en: `${borough.neighborhoods.length} selected profiles in ${borough.name}: compact enough to compare, detailed enough for a real first read.`,
    es: `${borough.neighborhoods.length} perfiles seleccionados en ${borough.name}: compactos para comparar y lo bastante detallados para una primera lectura real.`,
    fr: `${borough.neighborhoods.length} profils sélectionnés dans ${borough.name} : assez compacts pour comparer, assez détaillés pour une vraie première lecture.`,
    pt: `${borough.neighborhoods.length} perfis selecionados em ${borough.name}: compactos para comparar e detalhados o bastante para uma primeira leitura real.`,
    zh: `${borough.name} 的 ${borough.neighborhoods.length} 个精选街区档案：便于比较，也足够深入。`
  };
  document.documentElement.style.setProperty("--hero-image", `url("${borough.heroImage}")`);
  document.title = document.body.classList.contains("trip-page")
    ? "New York Trip Planner"
    : boroughHeroTitle();
  document.querySelectorAll("[data-i18n='heroTitle']").forEach((element) => {
    element.textContent = boroughHeroTitle();
  });
  document.querySelectorAll("[data-i18n='heroCopy']").forEach((element) => {
    element.textContent = boroughHeroCopy();
  });
  document.querySelectorAll("[data-i18n='marketTitle']").forEach((element) => {
    element.textContent = glance[currentLanguage] || glance.de;
  });
  document.querySelectorAll("[data-i18n='statRentTitle']").forEach((element) => {
    element.textContent = borough.rentTitle;
  });
  document.querySelectorAll("[data-i18n='statRentCopy']").forEach((element) => {
    element.textContent = borough.rentCopy;
  });
  document.querySelectorAll("[data-i18n='statIndexCopy']").forEach((element) => {
    element.textContent = borough.indexCopy;
  });
  document.querySelectorAll("[data-i18n='statProfilesCopy']").forEach((element) => {
    element.textContent = profileCopy[currentLanguage] || profileCopy.de;
  });
  document.querySelectorAll(".intro-grid article:first-child .stat").forEach((element) => {
    element.textContent = borough.rentStat;
  });
  document.querySelectorAll(".intro-grid article:nth-child(2) .stat").forEach((element) => {
    element.textContent = borough.indexStat;
  });
  if (profileCount) {
    profileCount.textContent = String(borough.neighborhoods.length);
  }
  if (boroughSelect) {
    boroughSelect.value = activeBoroughKey;
  }
}

function renderRegionSegments() {
  if (!segmentGroup) return;
  const regions = currentBorough().regions;
  if (!regions.some(([region]) => region === selectedRegion)) {
    selectedRegion = "all";
  }
  segmentGroup.innerHTML = regions
    .map(
      ([region, label]) =>
        `<button class="segment${region === selectedRegion ? " active" : ""}" type="button" data-region="${region}">${region === "all" ? t("regionAll") : label}</button>`
    )
    .join("");
  segmentGroup.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      segmentGroup.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      selectedRegion = button.dataset.region;
      renderCards();
    });
  });
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

const customImageSources = {
  "Doyers Street":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Doyers_Street_Chinatown.jpg?width=2400",
  "Church of the Transfiguration, Mott Street":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Church_of_the_Transfiguration%2C_Mott_Street%2C_Chinatown%2C_Manhattan%2C_New_York_%287237360222%29.jpg?width=2400",
  "Mott Street":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mott_Street%2C_Chinatown%2C_Manhattan%2C_New_York_%287237361180%29.jpg?width=2400",
  "Canal Street (Manhattan)":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Canal_Street%2C_Chinatown%2C_Manhattan%2C_New_York_%287237368412%29.jpg?width=2400"
};

function safeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function setElementImage(element, source) {
  const cleanSource = source.replace(/"/g, "%22");
  element.style.setProperty("--image", `url("${cleanSource}")`);
  element.style.setProperty("--detail-image", `url("${cleanSource}")`);
  element.style.setProperty("--gallery-image", `url("${cleanSource}")`);
}

async function hydrateImages() {
  const cards = document.querySelectorAll("[data-image-title]");

  cards.forEach(async (card) => {
    try {
      const customSource = customImageSources[card.dataset.imageTitle];
      if (customSource) {
        setElementImage(card, customSource);
        return;
      }

      const response = await fetch(imageUrl(card.dataset.imageTitle), { mode: "cors" });
      if (!response.ok) return;
      const data = await response.json();
      const source = data?.originalimage?.source || data?.thumbnail?.source;
      if (source) {
        setElementImage(card, source);
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
  if (!grid || !searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  const currentItems = activeNeighborhoods();
  const filtered = currentItems.filter((item) => {
    const matchesRegion = selectedRegion === "all" || item.region === selectedRegion;
    const searchable = `${item.name} ${item.area} ${item.vibe}`.toLowerCase();
    return matchesRegion && searchable.includes(query);
  });

  grid.innerHTML = filtered.length
    ? filtered
        .map((item) => {
          const originalIndex = currentItems.indexOf(item);
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
      const match = activeNeighborhoods().find((item) => item.name === card.dataset.name);
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
      description: extra.description || item.description || item.character,
      developments: extra.developments || item.developments || item.outlook,
      events:
        extra.events ||
        item.events ||
        "Lokale Parks, Restaurants, Kulturorte und saisonale Straßenprogramme prägen den Alltag.",
      expectation: extra.expectation || item.expectation || item.future
    };
  }

  const copy = {
    en: {
      vibe: `${item.name} combines architecture, street life and local identity in ${item.area}.`,
      future: "active long-term transformation",
      description: `${item.name} is best understood through its location, architecture and everyday rhythm. The neighborhood mixes housing, public life, cultural anchors and changing real-estate demand into a distinct New York profile.`,
      history: `${item.name} developed through several layers of New York history: transport corridors, housing growth, immigration, commerce, cultural institutions and later waves of reinvestment. Those layers are still visible in the street grid, building types and local businesses.`,
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
      description: `${item.name} se entiende mejor por su ubicacion, su arquitectura y su ritmo cotidiano. El barrio mezcla vivienda, vida publica, cultura y demanda inmobiliaria en un perfil muy propio de Nueva York.`,
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
      description: `${item.name} se comprend par sa position, son architecture et son rythme quotidien. Le quartier combine logement, vie publique, lieux culturels et demande immobiliere dans un profil tres new-yorkais.`,
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
      description: `${item.name} e melhor entendido pela localizacao, pela arquitetura e pelo ritmo cotidiano. O bairro mistura moradia, vida publica, cultura e demanda imobiliaria em um perfil tipico de Nova York.`,
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
      description: `${item.name} 可以从位置、建筑和日常节奏来理解。这里把居住、公共生活、文化节点和房地产需求结合成一个具有纽约特征的街区。`,
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
  const boroughName = currentBorough().name;
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
      localized.description,
      `Für die Einordnung wichtig ist die Lage im Bereich ${item.area}: Das Viertel funktioniert nicht nur über seine Immobilienpreise, sondern über den Mix aus Verkehr, Straßenleben, Parks, Kulturorten und Alltagsversorgung. Wer ${item.name} analysiert, sollte deshalb immer fragen, ob die Nachfrage aus Wohnen, Arbeit, Tourismus, Institutionen oder lokaler Community entsteht.`,
      `Aktuell wirkt ${item.name} vor allem durch diesen Charakter: ${item.character} Die Zukunftserwartung ist ${item.future}; das bedeutet, dass Veränderungen eher über mehrere Jahre sichtbar werden als durch eine einzelne Momentaufnahme.`
    ],
    history: [
      item.history,
      `${item.name} lässt sich historisch als Teil einer größeren ${boroughName}- und New-York-Bewegung lesen: Erst entstanden Verkehrsachsen, Parks, Hafen- oder Gewerbeflächen, danach folgten Wohnhäuser, Läden, Schulen, Kirchen und kulturelle Orte. Diese Schichten sind wichtig, weil New York nicht gleichmäßig gewachsen ist. Manche Viertel wurden durch Industrie und Handel groß, andere durch Universitäten, Theater, Einwanderung, Wohlstand, Häfen oder Bahnlinien.`,
      `Im Straßenbild sieht man diese Geschichte bis heute. Gebäudehöhen, Blockgrößen, Ladenfronten und Parks verraten, ob ein Viertel eher aus alten Wohnblöcken, ehemaligen Lagerhäusern, Brownstones, Bürotürmen oder geplanten Neubauten besteht. Bei ${item.name} zeigt sich das besonders in der Mischung aus ${item.vibe.toLowerCase()}. Dadurch entsteht ein eigener Maßstab, der den Immobilienmarkt genauso prägt wie die kulturelle Identität.`,
      `Soziale Geschichte spielt ebenfalls eine große Rolle. Viele Manhattan-Viertel wurden von Einwanderung, Community-Organisation, Kunst, Musik, Religion oder politischem Aktivismus geformt. Diese lokalen Netzwerke entscheiden oft darüber, ob Veränderung als Aufwertung, Verlust oder neue Chance wahrgenommen wird. Bei ${item.name} ist deshalb nicht nur interessant, was gebaut wird, sondern auch, wer schon lange dort lebt und welche Institutionen das Viertel zusammenhalten.`,
      `Für die Zukunft bedeutet diese historische Tiefe: Neue Projekte müssen sich an einer vorhandenen Identität messen lassen. Wenn neue Wohnungen, Hotels, Büros oder Infrastruktur entstehen, verändern sie nicht nur Preise, sondern auch Rhythmus, Publikum und Alltag. Genau deshalb ist Geschichte hier kein Rückblick am Rand, sondern der Schlüssel, um die naechsten Jahre von ${item.name} zu verstehen.`
    ],
    prices: [
      item.prices,
      `Die angegebene Mietspanne von etwa $${item.rent} pro Monat ist als Orientierung zu lesen. In New York unterscheiden sich Preise stark nach Gebäudealter, Etage, Licht, Aufzug, Grundriss, U-Bahn-Nähe, Park- oder Wasserblick und Borough-Lage. Zwei Wohnungen im selben Viertel können deshalb völlig verschiedene Märkte bedienen.`,
      `Bei ${item.name} ist das Preisniveau ${item.price}. Besonders wichtig ist, ob neue Nachfrage durch Jobs, Kultur, Schulen, Tourismus oder bessere Verkehrsanbindung entsteht. Solche Faktoren wirken oft zuerst auf Mieten und später auf Kaufpreise.`
    ],
    outlook: [
      item.outlook,
      extra.expectation,
      `Die Zukunft sollte man als Zusammenspiel aus Bauprojekten, Klimaresilienz, Verkehr, Gewerbemieten und Nachbarschaftsschutz lesen. Ein Viertel kann teurer werden und gleichzeitig kulturell fragiler wirken, oder baulich dichter werden und dadurch bessere Alltagsangebote gewinnen.`
    ],
    developments: [
      extra.developments,
      `Diese Projekte sind wichtig, weil sie nicht nur neue Flächen schaffen. Sie verändern Wege, Blickachsen, Erdgeschosse, Ladedruck, Arbeitsplätze und manchmal auch das Image eines Viertels. In New York reicht oft schon ein neues Transitprojekt, ein Waterfront-Park, ein Campus oder ein Kulturanker, um mehrere benachbarte Blocks neu zu bewerten.`,
      `Für ${item.name} heißt das: Die gebaute Zukunft wird wahrscheinlich selektiv sichtbar. Manche Straßen bleiben fast unverändert, während einzelne Korridore durch neue Nutzungen, Sanierungen oder bessere öffentliche Räume deutlich moderner wirken.`
    ],
    events: [
      extra.events,
      `Events sind für die Analyse wichtig, weil sie zeigen, wann ein Viertel nur Wohnort ist und wann es zur Buehne für Besucher, Kultur und Gastronomie wird. Wiederkehrende Festivals, Museumsprogramme, Parkevents oder Straßenfeste schaffen Aufmerksamkeit und können lokale Geschäfte stärken.`,
      `Bei ${item.name} liegt der Wert deshalb nicht nur in Architektur oder Lage. Entscheidend ist auch, ob es Orte gibt, an denen Menschen regelmäßig zusammenkommen: Parks, Theater, Märkte, Musikorte, Kirchen, Schulen oder Community-Zentren.`
    ],
    expectation: [
      extra.expectation,
      `Kurzfristig werden Mieten und Verfügbarkeit weiter stark vom gesamtstädtischen Markt abhängen. Mittel- bis langfristig zählen vor allem neue Infrastruktur, Klimaschutz, Arbeitsplätze und die Frage, ob lokale Identität erhalten bleibt.`,
      `Die wahrscheinlichste Entwicklung für ${item.name}: keine komplette Neuerfindung, sondern eine Verdichtung vorhandener Tendenzen. Das Viertel wird stärker nachgefragt, wenn es gute Mobilitaet, klare Identität und stabile Alltagsangebote verbinden kann.`
    ],
    character: [
      item.character,
      `Der Charakter eines Viertels entsteht aus kleinen Signalen: Wie laut sind die Straßen abends? Gibt es eher Familien, Studierende, Touristen, Büroangestellte oder langjaehrige Bewohner? Sind die Erdgeschosse lokal oder global? Fühlt sich der öffentliche Raum offen, exklusiv, improvisiert oder geplant an?`,
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
    "Chinatown": [
      "Doyers Street",
      "Church of the Transfiguration, Mott Street",
      "Mott Street",
      "Canal Street (Manhattan)"
    ],
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

function renderCompareSelectors(forceDefault = false) {
  if (!compareA || !compareB) return;

  const currentItems = activeNeighborhoods();
  const [defaultA, defaultB] = currentBorough().defaultPair;
  const currentA = forceDefault ? defaultA : compareA.value || defaultA;
  const currentB = forceDefault ? defaultB : compareB.value || defaultB;
  const options = currentItems
    .map((item) => `<option value="${item.name}">${item.name}</option>`)
    .join("");

  compareA.innerHTML = options;
  compareB.innerHTML = options;
  compareA.value = currentItems.some((item) => item.name === currentA) ? currentA : currentItems[0].name;
  compareB.value = currentItems.some((item) => item.name === currentB) ? currentB : currentItems[1].name;
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

  const currentItems = activeNeighborhoods();
  let first = currentItems.find((item) => item.name === compareA.value) || currentItems[0];
  let second = currentItems.find((item) => item.name === compareB.value) || currentItems[1];

  if (first.name === second.name) {
    second = currentItems.find((item) => item.name !== first.name) || second;
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

function selectedTripPreferences() {
  const preferences = Array.from(tripPreferenceButtons)
    .filter((button) => button.classList.contains("active"))
    .map((button) => button.dataset.preference);
  return preferences.length ? preferences : ["location", "sights"];
}

function selectedAttractions() {
  return Array.from(attractionButtons)
    .filter((button) => button.classList.contains("active"))
    .map((button) => button.dataset.attraction);
}

const attractionMap = {
  "times-square": {
    label: "Times Square",
    lat: 40.758,
    lng: -73.9855,
    boroughs: ["Manhattan"],
    neighborhoods: ["Midtown", "Hell's Kitchen"],
    tags: ["nightlife", "transit", "sights"]
  },
  "central-park": {
    label: "Central Park",
    lat: 40.7829,
    lng: -73.9654,
    boroughs: ["Manhattan"],
    neighborhoods: ["Upper West Side", "Upper East Side", "Harlem"],
    tags: ["quiet", "sights"]
  },
  "empire-state": {
    label: "Empire State Building",
    lat: 40.7484,
    lng: -73.9857,
    boroughs: ["Manhattan"],
    neighborhoods: ["Midtown", "Flatiron"],
    tags: ["sights", "transit"]
  },
  "statue-liberty": {
    label: "Statue of Liberty",
    lat: 40.6892,
    lng: -74.0445,
    boroughs: ["Manhattan", "Staten Island"],
    neighborhoods: ["Financial District", "St. George"],
    tags: ["waterfront", "sights", "ferry"]
  },
  "brooklyn-bridge": {
    label: "Brooklyn Bridge",
    lat: 40.7061,
    lng: -73.9969,
    boroughs: ["Manhattan", "Brooklyn"],
    neighborhoods: ["Financial District", "DUMBO", "Brooklyn Heights"],
    tags: ["waterfront", "sights"]
  },
  "high-line": {
    label: "High Line",
    lat: 40.748,
    lng: -74.0048,
    boroughs: ["Manhattan"],
    neighborhoods: ["Chelsea", "Meatpacking District", "Hudson Yards"],
    tags: ["sights", "food"]
  },
  "one-world": {
    label: "One World Trade Center",
    lat: 40.7127,
    lng: -74.0134,
    boroughs: ["Manhattan"],
    neighborhoods: ["Financial District", "Tribeca"],
    tags: ["sights", "transit"]
  },
  broadway: {
    label: "Broadway",
    lat: 40.759,
    lng: -73.9845,
    boroughs: ["Manhattan"],
    neighborhoods: ["Midtown", "Hell's Kitchen", "Upper West Side"],
    tags: ["nightlife", "sights"]
  },
  "met-museum": {
    label: "The Met",
    lat: 40.7794,
    lng: -73.9632,
    boroughs: ["Manhattan"],
    neighborhoods: ["Upper East Side", "Upper West Side"],
    tags: ["sights", "quiet"]
  },
  moma: {
    label: "MoMA",
    lat: 40.7614,
    lng: -73.9776,
    boroughs: ["Manhattan"],
    neighborhoods: ["Midtown", "Upper East Side"],
    tags: ["sights"]
  },
  dumbo: {
    label: "DUMBO",
    lat: 40.7033,
    lng: -73.9881,
    boroughs: ["Brooklyn"],
    neighborhoods: ["DUMBO", "Brooklyn Heights", "Williamsburg"],
    tags: ["waterfront", "sights", "food"]
  },
  "coney-island": {
    label: "Coney Island",
    lat: 40.5749,
    lng: -73.985,
    boroughs: ["Brooklyn"],
    neighborhoods: ["Coney Island", "Brighton Beach"],
    tags: ["sights", "food"]
  },
  "flushing-meadows": {
    label: "Flushing Meadows Corona Park",
    lat: 40.7401,
    lng: -73.8408,
    boroughs: ["Queens"],
    neighborhoods: ["Flushing", "Jackson Heights", "Long Island City"],
    tags: ["sights", "food", "quiet"]
  },
  "bronx-zoo": {
    label: "Bronx Zoo",
    lat: 40.8506,
    lng: -73.8769,
    boroughs: ["Bronx"],
    neighborhoods: ["Belmont", "Riverdale", "South Bronx"],
    tags: ["sights", "quiet"]
  },
  "yankee-stadium": {
    label: "Yankee Stadium",
    lat: 40.8296,
    lng: -73.9262,
    boroughs: ["Bronx"],
    neighborhoods: ["South Bronx", "Harlem"],
    tags: ["sights", "transit"]
  },
  "staten-island-ferry": {
    label: "Staten Island Ferry",
    lat: 40.6437,
    lng: -74.0736,
    boroughs: ["Staten Island", "Manhattan"],
    neighborhoods: ["St. George", "Financial District"],
    tags: ["ferry", "waterfront", "sights"]
  }
};

const neighborhoodCoords = {
  Inwood: [40.8677, -73.9212],
  "Washington Heights": [40.8417, -73.9394],
  "Hamilton Heights": [40.8249, -73.9497],
  Harlem: [40.8116, -73.9465],
  "East Harlem": [40.7957, -73.9389],
  "Morningside Heights": [40.808, -73.9639],
  "Upper West Side": [40.787, -73.9754],
  "Upper East Side": [40.7736, -73.9566],
  "Hell's Kitchen": [40.7638, -73.9918],
  Midtown: [40.7549, -73.984],
  "Murray Hill": [40.7479, -73.9781],
  "Kips Bay": [40.7423, -73.9801],
  Chelsea: [40.7465, -74.0014],
  "Hudson Yards": [40.754, -74.0015],
  Flatiron: [40.7411, -73.9897],
  Gramercy: [40.7376, -73.9847],
  "Greenwich Village": [40.7336, -74.0027],
  "West Village": [40.7358, -74.006],
  "East Village": [40.7265, -73.9815],
  "Lower East Side": [40.715, -73.9843],
  SoHo: [40.7233, -74.003],
  TriBeCa: [40.7163, -74.0086],
  Chinatown: [40.7158, -73.997],
  NoHo: [40.7287, -73.9926],
  "Financial District": [40.7075, -74.0113],
  "Battery Park City": [40.7115, -74.0169],
  Williamsburg: [40.7081, -73.9571],
  DUMBO: [40.7033, -73.9881],
  "Park Slope": [40.6721, -73.9778],
  "Bed-Stuy": [40.6872, -73.9418],
  Bushwick: [40.6958, -73.9171],
  "Downtown Brooklyn": [40.6932, -73.985],
  Greenpoint: [40.7305, -73.9515],
  "Coney Island": [40.5749, -73.985],
  "Long Island City": [40.7447, -73.9485],
  Astoria: [40.7644, -73.9235],
  Flushing: [40.759, -73.829],
  "Jackson Heights": [40.7557, -73.8831],
  "Forest Hills": [40.7181, -73.8448],
  Jamaica: [40.7027, -73.789],
  "Rockaway Beach": [40.5868, -73.8115],
  Sunnyside: [40.7433, -73.9196],
  "Mott Haven": [40.8091, -73.9229],
  Concourse: [40.8315, -73.9226],
  Fordham: [40.862, -73.891],
  Belmont: [40.854, -73.887],
  Riverdale: [40.8976, -73.9065],
  Kingsbridge: [40.8798, -73.906],
  "Throgs Neck": [40.8156, -73.8162],
  "City Island": [40.8473, -73.7868],
  "St. George": [40.6437, -74.0736],
  Tompkinsville: [40.6365, -74.075],
  Stapleton: [40.6265, -74.0776],
  "Snug Harbor": [40.6423, -74.1018],
  "New Dorp": [40.5738, -74.1168],
  Tottenville: [40.5128, -74.2519],
  "Great Kills": [40.5543, -74.1515],
  "West Brighton": [40.6312, -74.1143]
};

const preferenceProfiles = {
  centralLocation: {
    strong: [
      "Midtown",
      "Flatiron",
      "Chelsea",
      "Greenwich Village",
      "SoHo",
      "TriBeCa",
      "Financial District",
      "Downtown Brooklyn",
      "DUMBO",
      "Williamsburg"
    ],
    good: [
      "Hell's Kitchen",
      "Hudson Yards",
      "Murray Hill",
      "Kips Bay",
      "Gramercy",
      "West Village",
      "NoHo",
      "Lower East Side",
      "Long Island City",
      "Park Slope"
    ]
  },
  touristSights: {
    strong: [
      "Midtown",
      "Hell's Kitchen",
      "Upper West Side",
      "Upper East Side",
      "Chelsea",
      "Flatiron",
      "Financial District",
      "Battery Park City",
      "DUMBO"
    ],
    good: [
      "Greenwich Village",
      "West Village",
      "SoHo",
      "TriBeCa",
      "Chinatown",
      "Hudson Yards",
      "Downtown Brooklyn",
      "Coney Island",
      "Flushing",
      "Belmont",
      "St. George"
    ]
  },
  nightlife: {
    strong: [
      "East Village",
      "Lower East Side",
      "Hell's Kitchen",
      "Williamsburg",
      "Bushwick",
      "Greenwich Village",
      "West Village",
      "Midtown"
    ],
    good: ["Chelsea", "SoHo", "Harlem", "DUMBO", "Downtown Brooklyn", "Astoria", "Long Island City"]
  },
  restaurants: {
    strong: [
      "Chinatown",
      "Lower East Side",
      "East Village",
      "West Village",
      "SoHo",
      "Williamsburg",
      "Astoria",
      "Flushing",
      "Jackson Heights",
      "Belmont"
    ],
    good: [
      "Greenwich Village",
      "Chelsea",
      "Flatiron",
      "DUMBO",
      "Park Slope",
      "Greenpoint",
      "Long Island City",
      "Harlem"
    ]
  },
  quietStay: {
    strong: [
      "Inwood",
      "Hamilton Heights",
      "Morningside Heights",
      "Upper West Side",
      "Upper East Side",
      "Park Slope",
      "Forest Hills",
      "Riverdale",
      "Snug Harbor",
      "Great Kills"
    ],
    good: [
      "Washington Heights",
      "Battery Park City",
      "Greenpoint",
      "Sunnyside",
      "City Island",
      "Tottenville",
      "West Brighton"
    ]
  }
};

const defaultTouristAttractions = [
  "times-square",
  "central-park",
  "empire-state",
  "statue-liberty",
  "brooklyn-bridge",
  "high-line",
  "one-world",
  "broadway",
  "met-museum",
  "moma"
];

function profileScore(item, profile, strongScore = 28, goodScore = 16) {
  if (profile.strong.includes(item.name)) return strongScore;
  if (profile.good.includes(item.name)) return goodScore;
  return 0;
}

function pricePreferenceScore(item, boroughName) {
  let score = item.price.length <= 2 ? 36 : item.price.length === 3 ? 18 : -18;
  if (["Queens", "Bronx", "Staten Island"].includes(boroughName)) score += 10;
  if (boroughName === "Brooklyn" && item.price.length <= 3) score += 4;
  if (boroughName === "Manhattan" && item.price.length >= 4) score -= 10;
  return score;
}

function defaultTouristScore(item, boroughName) {
  return Math.min(34, attractionScore(item, boroughName, defaultTouristAttractions) * 0.55);
}

function travelTags(item) {
  const text = `${item.name} ${item.area} ${item.vibe} ${item.character} ${item.history} ${item.events || ""}`.toLowerCase();
  const tags = new Set(["location"]);
  const priceLevel = item.price.length;

  if (priceLevel <= 2) tags.add("price");
  if (priceLevel >= 4) tags.add("premium");
  if (/restaurant|food|markt|market|chinatown|arthur|flushing|essen|bäckerei|café|gastronomie/.test(text)) tags.add("food");
  if (/nachtleben|bar|club|musik|theater|broadway|jazz|nightlife|festival|venue/.test(text)) tags.add("nightlife");
  if (/museum|park|bridge|brücke|skyline|waterfront|strand|beach|ferry|fähre|historic|history|gallery|galerie|botanical|zoo|seaport|central park|prospect park/.test(text)) tags.add("sights");
  if (/waterfront|strand|beach|ferry|fähre|promenade|seaport|harbor|hafen|küste|coast/.test(text)) tags.add("waterfront");
  if (/ferry|fähre|st. george|financial district|battery/.test(text)) tags.add("ferry");
  if (/ruhig|famil|grün|park|brownstone|garden|residential|wohn|schule|promenade/.test(text)) tags.add("quiet");
  if (/midtown|downtown|central|transit|subway|station|ferry|grand central|jamaica|long island city|downtown brooklyn|st. george/.test(text)) tags.add("transit");

  return tags;
}

function attractionScore(item, boroughName, attractions) {
  if (!attractions.length) return 0;

  const tags = travelTags(item);
  return attractions.reduce((total, attractionKey) => {
    const attraction = attractionMap[attractionKey];
    if (!attraction) return total;

    let score = 0;
    if (attraction.neighborhoods.includes(item.name)) score += 30;
    else if (attraction.boroughs.includes(boroughName)) score += 14;

    attraction.tags.forEach((tag) => {
      if (tags.has(tag)) score += 5;
    });

    return total + score;
  }, 0);
}

function tripScore(item, preferences, budget, style, boroughName = currentBorough().name, attractions = []) {
  const tags = travelTags(item);
  let score = 34;

  preferences.forEach((preference) => {
    if (preference === "price") {
      score += pricePreferenceScore(item, boroughName);
    } else if (preference === "location") {
      score += profileScore(item, preferenceProfiles.centralLocation, 34, 18);
      score += tags.has("transit") ? 8 : 0;
    } else if (preference === "sights") {
      score += profileScore(item, preferenceProfiles.touristSights, 30, 16);
      score += defaultTouristScore(item, boroughName);
    } else if (preference === "nightlife") {
      score += profileScore(item, preferenceProfiles.nightlife, 34, 18);
    } else if (preference === "food") {
      score += profileScore(item, preferenceProfiles.restaurants, 34, 18);
    } else if (preference === "quiet") {
      score += profileScore(item, preferenceProfiles.quietStay, 34, 18);
    } else if (tags.has(preference)) {
      score += 14;
    }
  });

  if (budget === "budget") score += item.price.length <= 2 ? 24 : item.price.length === 3 ? 10 : -12;
  if (budget === "premium") score += item.price.length >= 4 ? 22 : item.price.length === 3 ? 8 : -4;
  if (budget === "balanced") score += item.price.length === 3 ? 16 : 7;

  if (style === "first-time") score += tags.has("sights") || tags.has("transit") ? 18 : 4;
  if (style === "culture") score += tags.has("sights") ? 20 : 6;
  if (style === "local") score += tags.has("quiet") || tags.has("food") ? 18 : 4;
  if (style === "food") score += tags.has("food") ? 22 : 5;

  score += attractionScore(item, boroughName, attractions);

  return Math.max(0, score);
}

function bookingUrl(query) {
  const params = new URLSearchParams({
    ss: query,
    group_adults: "2",
    no_rooms: "1",
    group_children: "0"
  });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

function travelSights(item) {
  const gallery = galleryTitles(item).filter((title) => title !== item.name).slice(0, 3);
  if (gallery.length >= 3) return gallery;
  return [
    `${item.name} zu Fuß erkunden`,
    `Lokale Parks und Straßen rund um ${item.area}`,
    `Architektur, Cafés und öffentliche Räume im Viertel`
  ].slice(0, 3);
}

function sightContext(sight, item) {
  const lower = sight.toLowerCase();
  if (/central park|prospect park|flushing meadows|park/.test(lower)) {
    return "Ideal für Spaziergänge, Pausen und einen ruhigeren Moment zwischen den Stadtblöcken.";
  }
  if (/times square|broadway|yankee|coney/.test(lower)) {
    return "Am besten mit etwas Zeit einplanen, weil hier besonders viel Atmosphäre und Bewegung entsteht.";
  }
  if (/museum|met|moma|gallery|galerie/.test(lower)) {
    return "Gut für Kultur, Architektur und einen hochwertigen Programmpunkt abseits reiner Fotostopps.";
  }
  if (/bridge|brücke|dumbo|waterfront|ferry|statue|one world|skyline|seaport/.test(lower)) {
    return "Stark für Ausblicke, Wasserlage und klassische New-York-Fotos.";
  }
  if (/restaurant|food|market|markt|café|cafe|bakery|bäckerei/.test(lower)) {
    return "Passt gut zu einem langsamen Nachmittag mit Essen, Cafés und lokalen Straßen.";
  }
  return `Ein guter Einstieg, um ${item.name} nicht nur als Hotelstandort, sondern als Viertel zu erleben.`;
}

function sightsMarkup(sights, item) {
  return `
    <div class="sights-list">
      ${sights
        .map(
          (sight, index) => `
            <article class="sight-item">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>${sight}</strong>
                <p>${sightContext(sight, item)}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function restaurantIdeas(item) {
  const tags = travelTags(item);
  if (item.name === "Chinatown" || item.name === "Flushing") {
    return ["Dim Sum und Noodle-Spots", "Food-Courts und Bäckereien", "Abendessen entlang der Hauptstraßen"];
  }
  if (item.name === "Belmont") {
    return ["Arthur-Avenue-Italiener", "Bäckereien und Feinkostläden", "Klassische Familienrestaurants"];
  }
  if (tags.has("nightlife")) {
    return ["Dinner vor dem Ausgehen", "Cocktailbars und späte Küche", "Brunch-Spots am nächsten Morgen"];
  }
  if (tags.has("food")) {
    return ["Lokale Restaurants statt Hotelrestaurant", "Cafés für Frühstück", "Food-Märkte und kleine Spezialitätenläden"];
  }
  return ["Nachbarschaftscafés", "Casual Dinner in Laufnähe", "Bäckereien, Delis und einfache Lunch-Spots"];
}

const hotelFilterOptions = {
  type: {
    "best-match": { label: "beste Hotels", query: "best hotels" },
    budget: { label: "preiswerte Hotels", query: "budget hotels" },
    boutique: { label: "Boutique-Hotels", query: "boutique hotels" },
    luxury: { label: "Luxushotels", query: "luxury hotels" },
    family: { label: "familienfreundliche Hotels", query: "family friendly hotels" },
    apartment: { label: "Apartment-Hotels", query: "apartment suites" }
  },
  location: {
    auto: null,
    sights: { label: "nahe Sehenswürdigkeiten", query: "near attractions" },
    subway: { label: "nahe U-Bahn", query: "near subway station" },
    nightlife: { label: "nahe Nachtleben", query: "near nightlife" },
    restaurants: { label: "nahe Restaurants", query: "near restaurants" },
    quiet: { label: "in ruhiger Lage", query: "quiet area" }
  },
  comfort: {
    flexible: null,
    breakfast: { label: "mit Frühstück", query: "breakfast included" },
    rating: { label: "sehr gut bewertet", query: "highly rated" },
    view: { label: "mit schöner Aussicht", query: "city view" },
    design: { label: "modernes Design", query: "modern design hotel" }
  }
};

function hotelSearchProfile(preferences, attractions, options = {}) {
  const hotelType = options.type || "best-match";
  const hotelLocation = options.location || "auto";
  const hotelComfort = options.comfort || "flexible";

  const autoLocation =
    preferences.includes("nightlife") ? hotelFilterOptions.location.nightlife :
    preferences.includes("food") ? hotelFilterOptions.location.restaurants :
    preferences.includes("quiet") ? hotelFilterOptions.location.quiet :
    preferences.includes("sights") || attractions.length ? hotelFilterOptions.location.sights :
    hotelFilterOptions.location.subway;

  return {
    comfort: hotelFilterOptions.comfort[hotelComfort],
    location: hotelFilterOptions.location[hotelLocation] || autoLocation,
    type: hotelFilterOptions.type[hotelType] || hotelFilterOptions.type["best-match"]
  };
}

function attractionHotelQuery(attractions) {
  return attractions
    .map((key) => attractionMap[key]?.label)
    .filter(Boolean)
    .slice(0, 2)
    .join(" ");
}

function hotelLinks(item, budget, boroughName = currentBorough().name, preferences = [], attractions = [], options = {}) {
  const base = `${item.name}, ${boroughName}, New York`;
  const profile = hotelSearchProfile(preferences, attractions, options);
  const attractionQuery = attractionHotelQuery(attractions);
  const budgetQuery = budget === "premium" ? "4 star 5 star" : budget === "budget" ? "affordable budget" : "best value";
  const mainParts = [
    profile.type.query,
    profile.location?.query,
    profile.comfort?.query,
    budgetQuery,
    attractionQuery && `near ${attractionQuery}`,
    base
  ].filter(Boolean);
  const locationLabel = profile.location?.label || "passender Lage";
  const comfortLabel = profile.comfort?.label || "guter Ausstattung";
  return [
    {
      label: `${profile.type.label} in ${item.name}`,
      query: mainParts.join(" "),
      primary: true
    },
    {
      label: locationLabel,
      query: `${profile.type.query} ${profile.location?.query || "central location"} ${base}`,
      primary: false
    },
    {
      label: comfortLabel,
      query: `${profile.type.query} ${profile.comfort?.query || "highly rated"} ${base}`,
      primary: false
    }
  ];
}

function hotelLinksMarkup(links) {
  return links
    .map(
      (link) =>
        `<a class="${link.primary ? "primary" : ""}" href="${bookingUrl(link.query)}" target="_blank" rel="sponsored noopener noreferrer">${link.label}</a>`
    )
    .join("");
}

function hotelSelectMarkup(name, label, options) {
  return `
    <label>
      <span>${label}</span>
      <select data-hotel-control="${name}">
        ${options
          .map((option) => `<option value="${option.value}">${option.label}</option>`)
          .join("")}
      </select>
    </label>
  `;
}

function hotelControlsMarkup() {
  return `
    <div class="hotel-filter-grid" aria-label="Hotelpräferenzen">
      ${hotelSelectMarkup("type", "Hoteltyp", [
        { value: "best-match", label: "Beste Mischung" },
        { value: "budget", label: "Preiswert" },
        { value: "boutique", label: "Boutique" },
        { value: "luxury", label: "Luxus" },
        { value: "family", label: "Familienfreundlich" },
        { value: "apartment", label: "Apartment / Suite" }
      ])}
      ${hotelSelectMarkup("location", "Lage", [
        { value: "auto", label: "automatisch passend" },
        { value: "sights", label: "nahe Sehenswürdigkeiten" },
        { value: "subway", label: "nahe U-Bahn" },
        { value: "nightlife", label: "nahe Nachtleben" },
        { value: "restaurants", label: "nahe Restaurants" },
        { value: "quiet", label: "ruhige Lage" }
      ])}
      ${hotelSelectMarkup("comfort", "Komfort", [
        { value: "flexible", label: "Flexibel" },
        { value: "breakfast", label: "Frühstück" },
        { value: "rating", label: "sehr gut bewertet" },
        { value: "view", label: "schöne Aussicht" },
        { value: "design", label: "modernes Design" }
      ])}
    </div>
  `;
}

function findTripHotelItem(name, boroughName) {
  return Object.values(boroughs)
    .flatMap((borough) => borough.neighborhoods.map((item) => ({ item, boroughName: borough.name })))
    .find((entry) => entry.item.name === name && entry.boroughName === boroughName);
}

function updateHotelCardLinks(card) {
  const match = findTripHotelItem(card.dataset.neighborhood, card.dataset.borough);
  const linksContainer = card.querySelector(".hotel-links");
  if (!match || !linksContainer) return;

  const preferences = card.dataset.preferences ? card.dataset.preferences.split("|").filter(Boolean) : [];
  const attractions = card.dataset.attractions ? card.dataset.attractions.split("|").filter(Boolean) : [];
  const options = {
    comfort: card.querySelector('[data-hotel-control="comfort"]')?.value || "flexible",
    location: card.querySelector('[data-hotel-control="location"]')?.value || "auto",
    type: card.querySelector('[data-hotel-control="type"]')?.value || "best-match"
  };
  const links = hotelLinks(
    match.item,
    card.dataset.budget || "balanced",
    match.boroughName,
    preferences,
    attractions,
    options
  );
  linksContainer.innerHTML = hotelLinksMarkup(links);
}

function bindHotelCards() {
  document.querySelectorAll(".hotel-column").forEach((card) => {
    card.querySelectorAll("[data-hotel-control]").forEach((select) => {
      select.addEventListener("change", () => updateHotelCardLinks(card));
    });
  });
}

function tripRecommendationItems() {
  const selectedBorough = tripBorough?.value || activeBoroughKey;
  if (selectedBorough === "all") {
    return Object.values(boroughs).flatMap((borough) =>
      borough.neighborhoods.map((item) => ({ item, boroughName: borough.name }))
    );
  }

  const borough = boroughs[selectedBorough] || currentBorough();
  return borough.neighborhoods.map((item) => ({ item, boroughName: borough.name }));
}

function variedTripResults(scored) {
  const selectedBorough = tripBorough?.value || activeBoroughKey;
  if (selectedBorough !== "all") {
    return scored.slice(0, 3);
  }

  const chosen = scored.length ? [scored[0]] : [];
  const usedBoroughs = new Set();
  if (chosen[0]) {
    usedBoroughs.add(chosen[0].boroughName);
  }
  const topScore = chosen[0]?.score || 0;
  const diversityTolerance = 10;

  scored.forEach((result) => {
    if (chosen.length >= 3) return;
    if (!usedBoroughs.has(result.boroughName) && result.score >= topScore - diversityTolerance) {
      chosen.push(result);
      usedBoroughs.add(result.boroughName);
    }
  });

  scored.forEach((result) => {
    if (chosen.length >= 3) return;
    if (!chosen.some((entry) => entry.item.name === result.item.name && entry.boroughName === result.boroughName)) {
      chosen.push(result);
    }
  });

  return chosen;
}

function matchedAttractionLabels(item, boroughName, selected) {
  const tags = travelTags(item);
  return selected
    .map((key) => attractionMap[key])
    .filter(Boolean)
    .filter(
      (attraction) =>
        attraction.neighborhoods.includes(item.name) ||
        attraction.boroughs.includes(boroughName) ||
        attraction.tags.some((tag) => tags.has(tag))
    )
    .map((attraction) => attraction.label)
    .slice(0, 3);
}

const tripMapBounds = {
  north: 40.92,
  south: 40.49,
  west: -74.519,
  east: -73.511,
  zoom: 11
};
const maxTripMapZoomLevel = 3;

function mapWorldPoint(lat, lng, zoom = tripMapBounds.zoom) {
  const scale = 256 * 2 ** zoom;
  const sinLat = Math.sin((lat * Math.PI) / 180);
  return {
    x: ((lng + 180) / 360) * scale,
    y: (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * scale
  };
}

function tripMapBaseViewport() {
  const northwest = mapWorldPoint(tripMapBounds.north, tripMapBounds.west);
  const southeast = mapWorldPoint(tripMapBounds.south, tripMapBounds.east);
  return {
    height: southeast.y - northwest.y,
    northwest,
    southeast,
    width: southeast.x - northwest.x,
    zoom: tripMapBounds.zoom
  };
}

function tripMapViewport(centerLat, centerLng, zoomLevel = 0) {
  const base = tripMapBaseViewport();
  if (zoomLevel <= 0) return base;

  const zoom = tripMapBounds.zoom + zoomLevel;
  const center = mapWorldPoint(centerLat, centerLng, zoom);
  const halfWidth = base.width / 2;
  const halfHeight = base.height / 2;
  const northwest = {
    x: center.x - halfWidth,
    y: center.y - halfHeight
  };
  const southeast = {
    x: center.x + halfWidth,
    y: center.y + halfHeight
  };
  return {
    height: base.height,
    northwest,
    southeast,
    width: base.width,
    zoom
  };
}

function mapPosition(lat, lng, viewport = tripMapViewport(40.7128, -74.006, 0)) {
  const point = mapWorldPoint(lat, lng);
  const scaledPoint =
    viewport.zoom === tripMapBounds.zoom ? point : mapWorldPoint(lat, lng, viewport.zoom);
  const x = ((scaledPoint.x - viewport.northwest.x) / viewport.width) * 100;
  const y = ((scaledPoint.y - viewport.northwest.y) / viewport.height) * 100;
  return {
    x: Math.max(4, Math.min(96, x)),
    y: Math.max(4, Math.min(96, y))
  };
}

function tripMapTiles(viewport) {
  const minTileX = Math.floor(viewport.northwest.x / 256);
  const maxTileX = Math.floor(viewport.southeast.x / 256);
  const minTileY = Math.floor(viewport.northwest.y / 256);
  const maxTileY = Math.floor(viewport.southeast.y / 256);
  const tiles = [];

  for (let tileX = minTileX; tileX <= maxTileX; tileX += 1) {
    for (let tileY = minTileY; tileY <= maxTileY; tileY += 1) {
      tiles.push(`
        <img
          alt=""
          class="trip-map-tile"
          loading="lazy"
          src="https://tile.openstreetmap.org/${viewport.zoom}/${tileX}/${tileY}.png"
          style="--tile-left: ${((tileX * 256 - viewport.northwest.x) / viewport.width) * 100}%; --tile-top: ${((tileY * 256 - viewport.northwest.y) / viewport.height) * 100}%; --tile-width: ${(256 / viewport.width) * 100}%; --tile-height: ${(256 / viewport.height) * 100}%;">
      `);
    }
  }

  return tiles.join("");
}

function tripMapMarkup(item, boroughName, selected) {
  const coords = neighborhoodCoords[item.name];
  if (!coords) return "";

  const viewport = tripMapViewport(coords[0], coords[1], 0);
  const neighborhood = mapPosition(coords[0], coords[1], viewport);
  const attractionMarkers = selected
    .map((key) => attractionMap[key])
    .filter((attraction) => attraction?.lat && attraction?.lng)
    .slice(0, 8)
    .map((attraction) => {
      const position = mapPosition(attraction.lat, attraction.lng, viewport);
      return `
        <span class="trip-map-marker attraction" data-lat="${attraction.lat}" data-lng="${attraction.lng}" style="--x: ${position.x}%; --y: ${position.y}%;">
          <span>${safeAttr(attraction.label)}</span>
        </span>
      `;
    })
    .join("");

  return `
    <div class="trip-map" data-map-level="0" data-center-lat="${coords[0]}" data-center-lng="${coords[1]}" aria-label="Lagekarte für ${item.name}">
      <div class="trip-map-tiles" aria-hidden="true">${tripMapTiles(viewport)}</div>
      <div class="trip-map-overlay" aria-hidden="true"></div>
      ${attractionMarkers}
      <span class="trip-map-marker neighborhood" data-lat="${coords[0]}" data-lng="${coords[1]}" style="--x: ${neighborhood.x}%; --y: ${neighborhood.y}%;">
        <span>${item.name}</span>
      </span>
      <div class="trip-map-controls" aria-label="Karte zoomen">
        <button type="button" data-map-zoom="in" aria-label="Karte näher an das Viertel zoomen">+</button>
        <button type="button" data-map-zoom="out" aria-label="Karte herauszoomen">-</button>
      </div>
      <div class="trip-map-caption">
        <strong>${item.name}</strong>
        <span>${boroughName}</span>
      </div>
      <a class="trip-map-attribution" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a>
    </div>
  `;
}

function renderTripMapLevel(map, level) {
  const centerLat = Number(map.dataset.centerLat);
  const centerLng = Number(map.dataset.centerLng);
  const zoomLevel = Math.max(0, Math.min(maxTripMapZoomLevel, level));
  const viewport = tripMapViewport(centerLat, centerLng, zoomLevel);
  const tiles = map.querySelector(".trip-map-tiles");
  if (tiles) {
    tiles.innerHTML = tripMapTiles(viewport);
  }

  map.dataset.mapLevel = String(zoomLevel);
  map.querySelectorAll(".trip-map-marker").forEach((marker) => {
    const lat = Number(marker.dataset.lat);
    const lng = Number(marker.dataset.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    const position = mapPosition(lat, lng, viewport);
    marker.style.setProperty("--x", `${position.x}%`);
    marker.style.setProperty("--y", `${position.y}%`);
    marker.classList.toggle(
      "edge",
      position.x <= 4 || position.x >= 96 || position.y <= 4 || position.y >= 96
    );
  });

  map.querySelector('[data-map-zoom="out"]')?.toggleAttribute("disabled", zoomLevel === 0);
  map.querySelector('[data-map-zoom="in"]')?.toggleAttribute("disabled", zoomLevel === maxTripMapZoomLevel);
}

function bindTripMaps() {
  document.querySelectorAll(".trip-map").forEach((map) => {
    renderTripMapLevel(map, Number(map.dataset.mapLevel) || 0);
    map.querySelectorAll("[data-map-zoom]").forEach((button) => {
      button.addEventListener("click", () => {
        const current = Number(map.dataset.mapLevel) || 0;
        const direction = button.dataset.mapZoom === "in" ? 1 : -1;
        renderTripMapLevel(map, current + direction);
      });
    });
  });
}

function renderTripPlanner() {
  if (!tripOutput) return;

  const preferences = selectedTripPreferences();
  const attractions = selectedAttractions();
  const budget = tripBudget?.value || "balanced";
  const style = tripStyle?.value || "first-time";
  const scored = variedTripResults(
    tripRecommendationItems()
      .map(({ item, boroughName }) => ({
        item,
        boroughName,
        score: tripScore(item, preferences, budget, style, boroughName, attractions)
      }))
      .sort((a, b) => b.score - a.score)
  );

  const preferenceLabels = {
    price: "Preis",
    location: "Lage",
    sights: "Sehenswürdigkeiten",
    nightlife: "Nachtleben",
    food: "Restaurants",
    quiet: "ruhiger Aufenthalt"
  };

  tripOutput.innerHTML = scored
    .map(({ item, boroughName }) => {
      const localized = localizedNeighborhood(item, extendedProfiles[item.name]);
      const links = hotelLinks(item, budget, boroughName, preferences, attractions);
      const selectedSights = matchedAttractionLabels(item, boroughName, attractions);
      const sights = [...selectedSights, ...travelSights(item)]
        .filter((sight, index, list) => list.indexOf(sight) === index)
        .slice(0, 3);
      return `
        <article class="trip-result-card">
          <div class="trip-result-hero">
            <div>
              <p class="eyebrow">${boroughName} · ${item.area}</p>
              <h3>${item.name}</h3>
              <p>${shortText(localized.description, 220)}</p>
              <div class="trip-pill-row">
                ${preferences.map((preference) => `<span class="trip-pill">${preferenceLabels[preference]}</span>`).join("")}
              </div>
            </div>
          </div>
          ${tripMapMarkup(item, boroughName, attractions)}
          <div class="trip-columns">
            <div class="trip-column hotel-column" data-neighborhood="${safeAttr(item.name)}" data-borough="${safeAttr(boroughName)}" data-budget="${safeAttr(budget)}" data-preferences="${safeAttr(preferences.join("|"))}" data-attractions="${safeAttr(attractions.join("|"))}">
              <div class="hotel-column-header">
                <span>Booking.com</span>
                <h4>Passende Hotels suchen</h4>
              </div>
              ${hotelControlsMarkup()}
              <div class="hotel-links">${hotelLinksMarkup(links)}</div>
              <div class="trip-note">Die Links führen zu passenden Booking.com-Suchen. Verfügbarkeit und Preise werden dort aktuell geprüft.</div>
            </div>
            <div class="trip-column sights-column">
              <div class="sights-column-header">
                <span>Highlights</span>
                <h4>Unbedingt sehen</h4>
                <p>Kuratierte Stopps, die gut zu diesem Viertel und deinen ausgewählten Interessen passen.</p>
              </div>
              ${sightsMarkup(sights, item)}
            </div>
            <div class="trip-column">
              <h4>Restaurants</h4>
              <ul>${restaurantIdeas(item).map((idea) => `<li>${idea}</li>`).join("")}</ul>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  bindTripMaps();
  bindHotelCards();
}

const extendedProfiles = {
  "Inwood": {
    description:
      "Inwood ist Manhattans landschaftlich ungewöhnlichstes Viertel: schroffe Felsen, alte Waldstücke, Sportplätze, kleinere Apartmenthäuser und eine sehr lokale Restaurant- und Ladenstruktur. Es fühlt sich weniger wie Downtown-Manhattan an und eher wie ein eigenständiger nördlicher Stadtteil mit direktem Zugang zu Natur.",
    developments:
      "Wichtig ist die Inwood NYC Neighborhood Plan-Zone rund um Broadway, Dyckman Street und die Harlem-River-Kante. Erwartet werden mehr Wohnraum, neue Gewerbeflächen und eine stärkere Orientierung zum Wasser. Der sensible Punkt bleibt, ob neue Investitionen bezahlbaren Wohnraum sichern oder bestehende Mieter verdrängen.",
    events:
      "Inwood Hill Park, Fort Tryon Park und The Met Cloisters prägen den Kulturkalender. Typisch sind Sommerkonzerte, Parkprogramme, Community-Feste und kleinere Food-Events rund um Dyckman Street.",
    expectation:
      "Die Zukunft ist wahrscheinlich ein langsamer Aufwertungsprozess: bessere Waterfront, mehr Neubau an einzelnen Korridoren, aber weiter ein ruhigeres Profil als Harlem oder Washington Heights."
  },
  "Washington Heights": {
    description:
      "Washington Heights ist dicht, musikalisch, dominikanisch geprägt und topografisch dramatisch. Die Nachbarschaft verbindet Hudson River, George Washington Bridge, laute Einkaufsstraßen und intime Wohnblocks mit erstaunlich viel Höhenlage.",
    developments:
      "Die größten Veränderungen entstehen eher durch Sanierung, kleinere Neubauten und neue Gastronomie als durch einen einzelnen Megaprojekt-Boom. Die Nähe zu Columbia Medical Center und die gute A-Train-Anbindung stuetzen Nachfrage.",
    events:
      "United Palace, Little Dominican Republic, Fort Tryon Park und die Dyckman-Corridors sorgen für Konzerte, Kulturprogramme, Straßenleben und dominikanische Community-Events.",
    expectation:
      "Washington Heights wird teurer bleiben, aber seine Identität wird stark von langjährigen Communities, lokalen Geschäften und Mieterschutzdebatten geprägt bleiben."
  },
  "Hamilton Heights": {
    description:
      "Hamilton Heights wirkt wie eine ruhigere, architektonisch feinere Schwester von Harlem: Brownstones, breite Treppen, historische Districts und die Nähe zu City College und Columbia Manhattanville.",
    developments:
      "Die staerkste Dynamik kommt von der Broadway- und Amsterdam-Avenue-Achse, von sanierten Brownstones und von der Ausstrahlung der Columbia-Manhattanville-Entwicklung im Süden.",
    events:
      "City College, Riverbank State Park, lokale Open-Studio-Formate und kleinere Jazz- und Literaturprogramme geben dem Viertel akademische und kulturelle Energie.",
    expectation:
      "Langfristig dürfte Hamilton Heights weiter hochwertiger werden, ohne seine reine Wohnfunktion zu verlieren. Besonders historische Häuser bleiben knapp und gefragt."
  },
  "Harlem": {
    description:
      "Harlem ist kein einheitlicher Markt, sondern ein kultureller Stadtteil mit mehreren Schichten: 125th Street, Brownstone-Bloecke, Gospel, Jazz, Restaurants, Kirchen, Theater und eine lange Geschichte Schwarzer Selbstorganisation.",
    developments:
      "Relevant sind die weitere Staerkung von 125th Street, neue Wohn- und Hotelprojekte, Kulturinstitutionen wie das Apollo und die Rückkehr beziehungsweise Erneuerung großer Kunstorte. Auch die Subway-Entwicklung in East Harlem strahlt auf Central Harlem aus.",
    events:
      "Harlem Week, Apollo-Programme, Jazz in lokalen Clubs, Gospel-Angebote, Straßenfeste und Kulturprogramme rund um 125th Street sind zentrale Besuchsgründe.",
    expectation:
      "Harlem wird weiter investieren und zugleich um kulturelle Kontinuitaet ringen. Die Zukunft hängt stark daran, ob neue Projekte lokale Unternehmen und Bewohner einbeziehen."
  },
  "East Harlem": {
    description:
      "East Harlem, El Barrio, ist rauer, lokaler und weniger poliert als die Upper East Side direkt südlich davon. Puerto-ricanische Geschichte, Sozialwohnungsbauten, Museen, Schulen und alte Gewerbestraßen liegen hier eng zusammen.",
    developments:
      "Das wichtigste Zukunftsprojekt ist die Second Avenue Subway Phase 2. Die Q-Linie soll von 96th Street bis 125th Street verlaengert werden, mit neuen Stationen bei 106th, 116th und 125th Street. Das kann Erreichbarkeit, Ladenlagen und Immobilienwerte stark verändern.",
    events:
      "El Museo del Barrio, Museum of the City of New York, La Marqueta und Community-Feste geben dem Viertel ein klares kulturelles Profil.",
    expectation:
      "Die Transitverbesserung dürfte Nachfrage und Preise heben. Entscheidend wird sein, ob erschwinglicher Wohnraum und lokale Kultur parallel gesichert werden."
  },
  "Morningside Heights": {
    description:
      "Morningside Heights ist ein Hochschulplateau zwischen Riverside Park und Morningside Park. Es wirkt ruhiger als Midtown, aber dichter und institutioneller als klassische Wohnviertel.",
    developments:
      "Columbia, Barnard und benachbarte Manhattanville-Projekte stabilisieren Nachfrage. Die bauliche Zukunft ist weniger spektakulaer, aber kontinuierlich: Modernisierung von Campusflächen, Wohnheimen, Laboren und Erdgeschossnutzungen.",
    events:
      "Universitaetsvortraege, Cathedral-Konzerte, Book Culture, Riverside-Kulturprogramme und akademische Festivals sind typisch.",
    expectation:
      "Das Viertel bleibt ein stabiler Wissens- und Wohnstandort. Preislich begrenzt vor allem das knappe Angebot die Entspannung."
  },
  "Upper West Side": {
    description:
      "Die Upper West Side ist eines der ausbalanciertesten Wohnviertel Manhattans: zwei große Parks, Kultur, Schulen, Nachbarschaftsläden und klassische Prewar-Apartmenthäuser.",
    developments:
      "Große Neubauflächen sind selten. Veränderungen entstehen durch Sanierungen, einzelne Luxusprojekte an Broadway/Amsterdam und Investitionen in Parks, Kulturhäuser und Verkehr.",
    events:
      "Lincoln Center, Beacon Theatre, American Museum of Natural History, SummerStage-nahe Programme und Wochenmaerkte machen das Viertel ganzjaehrig aktiv.",
    expectation:
      "Die Zukunft ist weniger Boom als Dauerknappheit. Gute Grundrisse, Parknähe und Familieninfrastruktur bleiben die Preistreiber."
  },
  "Upper East Side": {
    description:
      "Die Upper East Side verbindet alte Vermögensgeschichte, Museum Mile, Townhouses, Co-ops und eine zunehmend wichtigere östliche Achse Richtung Yorkville.",
    developments:
      "Der Effekt der Second Avenue Subway wirkt weiter, besonders in Yorkville und weiter östlich. Klinik- und Forschungsstandorte entlang First Avenue sorgen ebenfalls für stabile Nachfrage.",
    events:
      "Museum Mile Festival, Met-Ausstellungen, Frick-Programme, Park Avenue Armory und Central-Park-Events sind die kulturellen Schwergewichte.",
    expectation:
      "Das Viertel bleibt hochpreisig und stabil. Wachstum kommt eher aus besserer Erreichbarkeit im Osten als aus radikalem Neubau."
  },
  "Hell's Kitchen": {
    description:
      "Hell's Kitchen ist die praktische, restaurantstarke Westseite von Midtown: Theaternähe, Bars, kleine Wohnhäuser, neue Türme und ein direkter Bezug zum Hudson River.",
    developments:
      "Wichtig sind die Westside-Entwicklung, Hudson-Yards-Ausstrahlung, der Umbau rund um Port Authority und Pier 94. Sunset Pier 94 Studios bringt moderne Film- und TV-Produktion an die Hudson-Kante.",
    events:
      "Broadway, Off-Broadway, Restaurant Row, Pride-nahe Ausgehkultur, Hudson River Park und Pier-Programme treiben Besuch und Nachtleben.",
    expectation:
      "Hell's Kitchen wird weiter zwischen altem Wohnviertel und neuer Westside-Premiumlage pendeln. Gastronomie und Mediennutzung dürften zulegen."
  },
  "Midtown": {
    description:
      "Midtown ist Manhattans Arbeitsmaschine: Grand Central, Times Square, Bürotürme, Hotels, Einzelhandel, Tourismus und sehr unterschiedliche Mikrolagen.",
    developments:
      "Midtown East ist der wichtigste Bau-Schwerpunkt: 270 Park Avenue ist als neue JPMorgan-Zentrale ein Symbol des Rezoning-Zyklus; 175 Park Avenue am Grand-Central-Umfeld ist ein weiteres großes Mixed-Use-Projekt. Dazu kommen Broadway Public Realm-Verbesserungen und Büro-Modernisierungen.",
    events:
      "Broadway-Premieren, Bryant-Park-Programme, Rockefeller-Center-Saison, Weihnachtsfenster, Paraden und Business-Events sorgen für ständige Frequenz.",
    expectation:
      "Midtown wird nicht verschwinden, sondern sich vom reinen Bürozentrum zum gemischteren Arbeits-, Hotel- und Wohnstandort umbauen."
  },
  "Murray Hill": {
    description:
      "Murray Hill liegt bequem zwischen Grand Central, Kips Bay und NoMad. Es ist zentral, aber wohnlicher als Midtown und weniger modisch als Flatiron.",
    developments:
      "Die Zukunft hängt an Midtown-East-Investitionen, Grand-Central-Nähe und dem medizinisch-akademischen Wachstum südlich in Kips Bay. Einzelne Wohnsanierungen und neue Gastronomie verändern die Erdgeschosse.",
    events:
      "Morgan Library, UN-nahe Veranstaltungen, Rooftop- und Bar-Szene sowie kleine Nachbarschaftsmaerkte prägen den Kalender.",
    expectation:
      "Murray Hill bleibt ein solider Nutzwert-Markt: zentral, gut vermietbar, aber weniger ikonisch als seine Nachbarn."
  },
  "Kips Bay": {
    description:
      "Kips Bay ist funktional, medizinisch und zunehmend strategisch. Krankenhäuser, NYU Langone, Bellevue, Wohnblocks und East-River-Nähe bestimmen das Bild.",
    developments:
      "SPARC Kips Bay ist das Schlüsselprojekt: ein geplanter Life-Sciences-, Gesundheits- und Bildungs-Campus mit öffentlichen Einrichtungen und neuer wirtschaftlicher Rolle für den Ostkorridor.",
    events:
      "Medizinische Konferenzen, NYU- und Bellevue-Umfeld, East-River-Promenaden und lokale Food-Spots sorgen für Alltagsfrequenz statt klassischem Tourismus.",
    expectation:
      "Wenn SPARC wie geplant vorankommt, kann Kips Bay deutlich profilierter werden: mehr Forschung, mehr Jobs, mehr Nachfrage nach Wohnungen nahe dem Campus."
  },
  "Chelsea": {
    description:
      "Chelsea ist eine Mischung aus Kunstmarkt, LGBTQ+-Geschichte, Industrie-Lofts, High Line, Nightlife und neuen Luxuswohnhäusern.",
    developments:
      "Die High-Line- und West-Chelsea-Zone bleibt der staerkste Entwicklungsraum. Neue Wohnprojekte, Galerien, Hotels und Office-Umnutzungen entstehen besonders westlich von Tenth Avenue.",
    events:
      "Gallery Openings am Donnerstagabend, High-Line-Programme, Chelsea Market, Pride-Events und Kunstmessen machen Chelsea zu einem dauernden Kulturkorridor.",
    expectation:
      "Chelsea bleibt teuer und begehrt. Der Wettbewerb zwischen Galerien, Luxuswohnen, Hotels und Nachtleben wird die Nutzungsmischung weiter verschieben."
  },
  "Hudson Yards": {
    description:
      "Hudson Yards ist Manhattans neuestes Grossquartier: vertikal, geplant, hochpreisig und noch immer im Aufbau seiner sozialen Identität.",
    developments:
      "Der Western Rail Yard ist das große naechste Kapitel. Der Plan sieht tausende neue Wohnungen, dauerhaft erschwingliche Einheiten, öffentliche Flächen, Schule, Kita und weitere Mixed-Use-Bauten über aktiven Bahnanlagen vor.",
    events:
      "The Shed, Edge, High Line, Public-Space-Programme, Retail-Events und Corporate-Veranstaltungen bestimmen die Frequenz.",
    expectation:
      "Hudson Yards wird baulich dichter und wohnlicher. Ob es sich wie ein echtes Viertel anfühlt, hängt an Erdgeschossleben, Schulen, Parks und Alltagspreisen."
  },
  "Flatiron": {
    description:
      "Flatiron ist eines der am besten lesbaren Stadtbilder Manhattans: ikonisches Dreiecksgebäude, Madison Square, Designbueros, Fitness, Restaurants und kurze Wege.",
    developments:
      "Die Zukunft liegt in Büro-Modernisierung, Broadway- und Fifth-Avenue-Public-Realm-Projekten sowie in der weiteren Aktivierung rund um Madison Square. Das Flatiron Building bleibt ein identitaetsstiftender Anker.",
    events:
      "Madison Square Park Conservancy, Design- und Food-Events, Eataly, saisonale Installationen und Tech-/Design-Treffen prägen den Alltag.",
    expectation:
      "Flatiron bleibt resilient: selbst wenn Büronutzung flexibler wird, tragen Lage, Architektur und Gastronomie den Markt."
  },
  "Gramercy": {
    description:
      "Gramercy ist leise, knapp und institutionell alt: private Parklage, Townhouses, kleine Blocks und ein Wohngefuehl, das bewusst nicht nach Spektakel sucht.",
    developments:
      "Große Neubauten sind wegen Denkmalschutz und kleiner Parzellen selten. Veränderung entsteht eher an den Rändern Richtung Union Square, Kips Bay und Flatiron.",
    events:
      "Gramercy Park Hotel-Geschichte, Players Club, Irving Plaza, Union-Square-Nähe und saisonale Parktraditionen bilden die kulturelle Umgebung.",
    expectation:
      "Die Exklusivitaet bleibt stabil. Gramercy wird sich langsam entwickeln und gerade deshalb wertvoll bleiben."
  },
  "Greenwich Village": {
    description:
      "Greenwich Village ist ein historisch dichter Kulturraum: unregelmäßige Straßen, Jazz, Cafes, NYU, Aktivismus, Theater und eine starke Erinnerung an Gegenkultur.",
    developments:
      "NYU, kleinere Umnutzungen und Sanierungen sind die stärksten Kraefte. Großer Neubau ist durch historische Schutzgebiete begrenzt, was das Angebot knapp hält.",
    events:
      "Washington Square Park, Village Vanguard, Comedy Cellar, Halloween-Parade-nahe Routen, NYU-Events und kleine Theater machen das Village dauerhaft aktiv.",
    expectation:
      "Die Zukunft ist ein Balanceakt zwischen Campusdruck, Tourismus, Denkmalschutz und Nachbarschaftsleben. Knappheit bleibt der zentrale Preistreiber."
  },
  "West Village": {
    description:
      "West Village ist Manhattans romantischstes Wohnbild: schmale Straßen, niedrige Häuser, Restaurants, intime Bars und ein Maßstab, der fast europaeisch wirkt.",
    developments:
      "Durch Denkmalschutz und kleine Grundstuecke entstehen wenige Grossprojekte. Veränderungen liegen eher in Retail, Restaurantmieten, Hudson-River-Park-Anbindung und Luxus-Sanierungen.",
    events:
      "Pride-Geschichte rund um Stonewall, Jazzclubs, Bleecker Street, Hudson River Park, Little Island und Whitney-Nähe schaffen einen dichten Kulturkalender.",
    expectation:
      "West Village bleibt ultra-knapp. Die größte Veränderung ist nicht Bauhöhe, sondern wer sich die Erdgeschosse und Wohnungen leisten kann."
  },
  "East Village": {
    description:
      "East Village ist jung, laut, historisch immigrantisch und kulturell widerständig. Punk, ukrainische und puerto-ricanische Geschichte, Bars, Tenements und kleine Restaurants liegen eng zusammen.",
    developments:
      "Der East Side Coastal Resiliency-Bau verändert die East-River-Kante: Hochwasserschutz, erneuerte Parkflächen und neue Zugangswege sollen das Viertel langfristig klimaresilienter machen.",
    events:
      "Tompkins Square Park, kleine Musikorte, Fringe-Theater, Community-Gardens, ukrainische Feste und Restaurantkultur prägen die Szene.",
    expectation:
      "Die Nachfrage bleibt stark. Entscheidend sind die Rückkehr erneuerter Parkflächen, Schutz kleiner Geschäfte und der Umgang mit Nachtleben."
  },
  "Lower East Side": {
    description:
      "Die Lower East Side ist eine der dichtesten Geschichtsschichten New Yorks: Einwanderung, Tenements, jüdische, chinesische, lateinamerikanische und kuenstlerische Spuren, heute gemischt mit Bars und Galerien.",
    developments:
      "ESCR und East River Park sind die größten Zukunftsthemen. Dazu wirken Essex Crossing, neue Hotels und Luxuswohnungen am Rand auf Preise und Laufkundschaft.",
    events:
      "Tenement Museum, Essex Market, Club- und Barszene, Galerien, Pickle- und Food-Traditionen sowie San-Gennaro-nahe Besucherfluesse prägen das Jahr.",
    expectation:
      "Die LES wird weiter gentrifizieren, aber gerade ihre Geschichte bleibt ihr wichtigstes Kapital. Klimaresilienz und bezahlbarer Gewerberaum werden entscheidend."
  },
  "SoHo": {
    description:
      "SoHo ist Architekturmarke und Shopping-Magnet zugleich: Gusseisenfassaden, alte Lofts, Luxusretail, Designläden und ein Straßenbild mit internationaler Anziehung.",
    developments:
      "Der SoHo/NoHo Neighborhood Plan ermöglicht mehr Wohnnutzung und dauerhaft erschwingliche Wohnungen in passenden Baukoerpern. Gleichzeitig bleibt Denkmalschutz ein starker Rahmen.",
    events:
      "Design Week, Pop-up-Retail, Galerien, Mode-Events und Produktlaunches machen SoHo zu einem ständigen Schaufenster.",
    expectation:
      "SoHo wird Luxus behalten, aber mehr Wohnraum und neue Nutzungsmischungen können einzelne Korridore alltaglicher machen."
  },
  "TriBeCa": {
    description:
      "TriBeCa ist großzuegiger als viele Downtown-Viertel: Lagerhaus-Lofts, breite Straßen, Prominenz, Schulen, Restaurants und eine hohe Eigentumsquote.",
    developments:
      "Die Zukunft dreht sich um hochwertige Umnutzungen, Schul- und Familieninfrastruktur und Lower-Manhattan-Resilienz. Neue Flächen sind knapp, daher bleibt Sanierung wichtiger als Massenneubau.",
    events:
      "Tribeca Festival, Hudson River Park, Rooftop-Events, Film- und Food-Szene geben dem Viertel seine öffentliche Seite.",
    expectation:
      "TriBeCa bleibt ein Spitzenmarkt. Die größten Risiken liegen weniger in Nachfrage als in Klimaanpassung und extremen Einstiegspreisen."
  },
  "Chinatown": {
    description:
      "Chinatown ist Markt, Wohnviertel, Erinnerungsraum und Wirtschaftssystem zugleich. Restaurants, Fisch- und Gemueseläden, Familienbetriebe und enge Tenement-Strukturen bilden eine seltene urbane Dichte.",
    developments:
      "Große Eingriffe sind politisch sensibel. Themen sind die Zukunft kleiner Gewerbe, Tourismusdruck, benachbarte Luxusentwicklung und das Justiz-/Civic-Center-Umfeld rund um White Street.",
    events:
      "Lunar New Year Parade, Mid-Autumn-Angebote, Doyers Street, Mahayana Temple, Food-Touren und lokale Kulturvereine sorgen für hohe Besucherfrequenz.",
    expectation:
      "Die Zukunft hängt stark davon ab, ob Familienbetriebe bezahlbare Mieten finden. Chinatown kann wachsen, darf aber nicht nur Kulisse werden."
  },
  "NoHo": {
    description:
      "NoHo ist klein, architektonisch hochwertig und strategisch gelegen zwischen Broadway, Bowery, Village und East Village. Es wirkt exklusiver und leiser als SoHo.",
    developments:
      "Wie SoHo ist NoHo vom Neighborhood Plan betroffen: mehr Wohnnutzung, neue Regeln für Erdgeschosse und die Frage, wie historische Gebäude mit mehr Wohnraum vereinbar bleiben.",
    events:
      "Public Theater, Astor Place, kleine Galerien, Designstores, NYU-nahe Kultur und Restaurants geben NoHo sein konzentriertes Profil.",
    expectation:
      "NoHo bleibt knapp und teuer. Neue Wohnoptionen werden eher punktuell als flaechig sichtbar."
  },
  "Financial District": {
    description:
      "FiDi ist historischer Ursprung, Finanzsymbol und zunehmend Wohnviertel. Enge koloniale Straßen treffen auf Hochhäuser, Fährterminals, Hotels und neue Apartmenttürme.",
    developments:
      "Lower Manhattan Coastal Resiliency ist zentral. Dazu kommen große Office-to-Residential-Konversionen, etwa in frueheren Bürogebäuden, und die Weiterentwicklung des Seaport- und Water-Street-Korridors.",
    events:
      "Stone Street, Seaport, Governors-Island-Faehren, 9/11 Memorial, Wall-Street-Tourismus und Sommerprogramme am Wasser bringen Besucher.",
    expectation:
      "FiDi wird wohnlicher und weniger reines Büroviertel. Klimaschutz und Umnutzung alter Büroflächen entscheiden über die naechste Phase."
  },
  "Battery Park City": {
    description:
      "Battery Park City ist geplant, grün und wasserorientiert. Promenaden, Schulen, Parks, Brookfield Place und Familienwohnungen geben dem Viertel eine fast campusartige Ordnung.",
    developments:
      "North/West und South Battery Park City Resiliency Projects sind die großen Zukunftsthemen. Ziel ist Hochwasserschutz an der Hudson-Kante, ohne den Park- und Promenadencharakter zu verlieren.",
    events:
      "Brookfield Place, Rockefeller Park, Wagner Park, Hudson River Park, Outdoor-Filmreihen und Familienprogramme bestimmen den Kalender.",
    expectation:
      "Die Lage bleibt stark, aber der Wert hängt zunehmend daran, wie elegant Resilienzbau, Wasserzugang und Alltagsqualität verbunden werden."
  }
};

function renderDetail(item) {
  if (!detailPanel || !item) return;

  const index = activeNeighborhoods().indexOf(item);
  const extra = extendedProfiles[item.name] || {
    description: item.description || item.character,
    developments: item.developments || item.outlook,
    events:
      item.events || "Lokale Parks, Restaurants, Kulturorte und saisonale Straßenprogramme prägen den Alltag.",
    expectation: item.expectation || item.future
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
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  updateBoroughInterface();
  renderRegionSegments();
  renderCards();
  renderCompareSelectors(true);
  renderComparison();
  renderTripPlanner();
  if (selectedNeighborhood) {
    renderDetail(selectedNeighborhood);
  }
}

function selectBorough(boroughKey) {
  activeBoroughKey = boroughs[boroughKey] ? boroughKey : "manhattan";
  saveBorough(activeBoroughKey);
  selectedRegion = "all";
  const items = activeNeighborhoods();
  selectedNeighborhood =
    items.find((item) => item.name === currentBorough().defaultSelected) || items[0];
  if (searchInput) {
    searchInput.value = "";
  }
  updateBoroughInterface();
  renderRegionSegments();
  renderCards();
  renderCompareSelectors(true);
  renderComparison();
  renderTripPlanner();
  renderDetail(selectedNeighborhood);
}

searchInput?.addEventListener("input", renderCards);
languageSelect?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});
boroughSelect?.addEventListener("change", (event) => {
  selectBorough(event.target.value);
});
compareA?.addEventListener("change", renderComparison);
compareB?.addEventListener("change", renderComparison);
tripPreferenceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    renderTripPlanner();
  });
});
attractionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    renderTripPlanner();
  });
});
tripBudget?.addEventListener("change", renderTripPlanner);
tripStyle?.addEventListener("change", renderTripPlanner);
tripBorough?.addEventListener("change", renderTripPlanner);
legalToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const allCards = document.querySelectorAll(".legal-card");
    const shouldOpenAll = !Array.from(allCards).every((card) => card.classList.contains("open"));

    allCards.forEach((card) => {
      card.classList.toggle("open", shouldOpenAll);
      card.querySelector(".legal-toggle")?.setAttribute("aria-expanded", String(shouldOpenAll));
      const content = card.querySelector(".legal-content");
      if (shouldOpenAll) {
        content?.removeAttribute("hidden");
      } else {
        content?.setAttribute("hidden", "");
      }
    });
  });
});
cookieAccept?.addEventListener("click", () => hideCookieBanner("accepted"));
cookieEssential?.addEventListener("click", () => hideCookieBanner("essential"));
resetCookieChoice?.addEventListener("click", () => {
  try {
    localStorage.removeItem("nycAtlasCookieChoice");
  } catch {
    // Ignore storage errors in direct file previews.
  }
  showCookieBanner();
});

selectedNeighborhood =
  activeNeighborhoods().find((item) => item.name === currentBorough().defaultSelected) ||
  activeNeighborhoods()[0];
applyLanguage(currentLanguage);
renderDetail(selectedNeighborhood);
renderTripPlanner();
showCookieBanner();
