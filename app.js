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
      "Downtown Brooklyn ist der funktionale Kern des Bezirks: Gerichte, Hochschulen, Subway-Knoten, Bürotürme, Apartmenthochhäuser und schnelle Wege in alle Richtungen.",
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
      "Great Kills steht für Staten-Island-Wohnqualität am Wasser: Marina, Parks, Häuser, Schulen und ein Alltag, der deutlich langsamer wirkt als in den inneren Bezirken.",
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
    rentCopy: "Staten Island ist stärker haus-, küsten- und fährorientiert und bleibt meist günstiger als die inneren Bezirke.",
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
const tripUpdateButton = document.querySelector("#tripUpdateButton");
const tripUpdateHint = document.querySelector("#tripUpdateHint");
const customNeighborhoodSelect = document.querySelector("#customNeighborhoodSelect");

let selectedRegion = "all";
let selectedNeighborhood = null;
let tripHasPendingChanges = false;

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

const supportedLanguages = ["de", "en", "es", "fr", "pt", "it", "ja", "zh"];
const languageStorageKey = "manhattanAtlasLanguage";
const manualLanguageStorageKey = "manhattanAtlasLanguageManual";

function normalizeLanguage(language) {
  const normalized = String(language || "")
    .toLowerCase()
    .replace("_", "-");
  const base = normalized.split("-")[0];
  if (supportedLanguages.includes(base)) return base;
  if (normalized.startsWith("zh")) return "zh";
  return "";
}

function detectedBrowserLanguage() {
  const candidates = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
    navigator.userLanguage
  ];
  return candidates.map(normalizeLanguage).find(Boolean) || "en";
}

function getSavedLanguage() {
  try {
    const savedLanguage = normalizeLanguage(localStorage.getItem(languageStorageKey));
    const wasManualChoice = localStorage.getItem(manualLanguageStorageKey) === "true";
    if (wasManualChoice && savedLanguage) return savedLanguage;
    if (savedLanguage && savedLanguage !== "de") return savedLanguage;
  } catch {
    return detectedBrowserLanguage();
  }
  return detectedBrowserLanguage();
}

function saveLanguage(language, manual = false) {
  try {
    localStorage.setItem(languageStorageKey, language);
    if (manual) {
      localStorage.setItem(manualLanguageStorageKey, "true");
    }
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
    navTrip: "Urlaub",
    navLegal: "Rechtliches",
    languageLabel: "Sprache",
    navAria: "Hauptnavigation",
    languageSelectAria: "Sprache auswählen",
    boroughSelectAria: "Bezirk auswählen",
    regionFilterAria: "Region filtern",
    boroughsLabel: "Bezirke",
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
    analysisCharacter: "Charakter",
    tripPageTitle: "New York Trip Planner",
    tripNavContext: "Trip Planner",
    tripHeroTitle: "Finde dein passendes New-York-Viertel",
    tripHeroCopy: "Plane deinen Aufenthalt nach Budget, Lage, Nachtleben, Sehenswürdigkeiten und Restaurants. Der Atlas schlägt passende Viertel vor und verlinkt zu passenden Hotel-Suchen bei Booking.com.",
    tripSectionAria: "New York Urlaub planen",
    tripEyebrow: "Reiseprofil",
    tripQuestion: "Was ist dir wichtig?",
    tripPrioritiesTitle: "Deine Prioritäten",
    tripPrioritiesCopy: "Wähle aus, worauf es bei deinem New-York-Urlaub ankommt. Die Empfehlungen passen sich automatisch an den gewählten Bezirk und deine Reiseart an.",
    tripPrioritiesAria: "Reiseprioritäten",
    tripAttractionsTitle: "Was möchtest du unbedingt sehen?",
    tripAttractionsAria: "Gewünschte Sehenswürdigkeiten",
    tripBoroughLabel: "Bezirk",
    tripBoroughAll: "Alle Bezirke",
    tripBudgetLabel: "Budget",
    tripBudgetBalanced: "Ausgewogen",
    tripBudgetBudget: "Preisbewusst",
    tripBudgetPremium: "Premium",
    tripStyleLabel: "Reisestil",
    tripStyleFirst: "Erster New-York-Trip",
    tripStyleCulture: "Kultur & Architektur",
    tripStyleLocal: "Lokal & entspannt",
    tripStyleFood: "Food-Fokus",
    tripUpdateButton: "Empfehlungen aktualisieren",
    tripUpdateHint: "Ändere deine Auswahl und aktualisiere danach die Ergebnisse.",
    tripUpdatePending: "Auswahl geändert. Klicke auf „Empfehlungen aktualisieren“.",
    tripUpdateFresh: "Empfehlungen sind aktuell.",
    customNeighborhoodLabel: "Eigenes Viertel prüfen",
    customNeighborhoodNone: "Kein eigenes Viertel ausgewählt",
    customNeighborhoodCopy: "Du hast bereits ein Viertel im Blick? Prüfe, wie gut es zu deinem Budget, deinem Reisestil und deinen wichtigsten New-York-Zielen passt.",
    customResultEyebrow: "Dein Viertel-Check",
    customResultTitle: "So passt dieses Viertel zu dir",
    customDistanceTitle: "Entfernung zu deinen Zielen",
    customDistanceEmpty: "Wähle Sehenswürdigkeiten aus, um die Entfernung vom Viertel zu sehen.",
    customBudgetTitle: "Budget-Fit",
    customStyleTitle: "Reisestil-Fit",
    customPriorityTitle: "Prioritäten-Fit",
    hotelNightlyLabel: "Hotel/Nacht ca.",
    recommendationSectionEyebrow: "Auch interessant",
    recommendationSectionTitle: "Weitere Viertel, die zu dir passen",
    recommendationSectionCopy: "Diese Empfehlungen ergänzen deinen persönlichen Viertel-Check und zeigen dir stilvolle Alternativen mit ähnlichem Reiseprofil.",
    customApproxDistance: "ca.",
    customStrongFit: "Stark passend",
    customGoodFit: "Gut passend",
    customLimitedFit: "Eingeschränkt passend",
    customBudgetGood: "Das Preisniveau passt gut zu deinem Budget.",
    customBudgetMedium: "Das Preisniveau ist möglich, aber nicht ideal.",
    customBudgetWeak: "Das Preisniveau passt eher schwach zu deinem Budget.",
    customStyleGood: "Der Reisestil passt gut zum Charakter des Viertels.",
    customStyleMedium: "Der Reisestil passt teilweise zum Viertel.",
    customStyleWeak: "Der Reisestil passt nur eingeschränkt zum Viertel.",
    prefPrice: "Preis",
    prefLocation: "Lage",
    prefSights: "Sehenswürdigkeiten",
    prefNightlife: "Nachtleben",
    prefFood: "Restaurants",
    prefQuiet: "Ruhiger Aufenthalt",
    hotelBooking: "Booking.com",
    hotelTitle: "Passende Hotels suchen",
    hotelNote: "Die Links führen zu passenden Booking.com-Suchen mit mindestens 7/10 Bewertung. Verfügbarkeit und Preise werden dort aktuell geprüft.",
    hotelTypeLabel: "Hoteltyp",
    hotelLocationLabel: "Lage",
    hotelComfortLabel: "Komfort",
    hotelAuto: "automatisch passend",
    hotelFlexible: "Flexibel",
    hotelBestMatch: "Beste Mischung",
    hotelBudget: "Preiswert",
    hotelBoutique: "Boutique",
    hotelLuxury: "Luxus",
    hotelFamily: "Familienfreundlich",
    hotelApartment: "Apartment / Suite",
    hotelNearSights: "nahe Sehenswürdigkeiten",
    hotelNearSubway: "nahe U-Bahn",
    hotelNearNightlife: "nahe Nachtleben",
    hotelNearRestaurants: "nahe Restaurants",
    hotelQuiet: "ruhige Lage",
    hotelBreakfast: "Frühstück",
    hotelRating: "sehr gut bewertet",
    hotelView: "schöne Aussicht",
    hotelDesign: "modernes Design",
    hotelBestIn: "beste Hotels in",
    hotelGoodLocation: "passender Lage",
    hotelGoodComfort: "guter Ausstattung",
    sightsHeader: "Highlights",
    sightsTitle: "Unbedingt sehen",
    sightsCopy: "Kuratierte Stopps, die gut zu diesem Viertel und deinen ausgewählten Interessen passen.",
    foodHeader: "Food",
    foodTitle: "Restaurants",
    foodCopy: "Konkrete Adressen und Food-Zonen, die zum Viertel passen.",
    mapAria: "Lagekarte für",
    mapControls: "Karte zoomen",
    mapZoomIn: "Karte näher an das Viertel zoomen",
    mapZoomOut: "Karte herauszoomen",
    tripPreviewEyebrow: "Trip Planner",
    tripPreviewTitle: "Finde dein passendes New-York-Viertel",
    tripPreviewCopy: "Wähle Budget, Lage, Nachtleben, Sehenswürdigkeiten oder Food-Fokus und erhalte passende Viertel, Hotels über Booking.com, Highlights und Restaurantideen.",
    tripPreviewAction: "Planner öffnen",
    tripPreviewHotels: "passend zum Viertel",
    tripPreviewFood: "& Sehenswürdigkeiten",
    adAria: "Anzeige",
    adLabel: "Anzeige",
    adCopy: "Hier erscheint später eine dezente Google-Anzeige.",
    legalAria: "Rechtliche Informationen",
    legalEyebrow: "Rechtliches",
    legalTitle: "Impressum, Datenschutz & Cookies",
    imprintTitle: "Impressum",
    imprintProvider: "Anbieterkennzeichnung gemäß § 5 DDG",
    imprintResponsible: "Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2 MStV:",
    imprintDisclaimer: "Diese Website ist ein redaktionelles Informationsangebot über New Yorker Nachbarschaften. Die Inhalte stellen keine Immobilien-, Rechts- oder Finanzberatung dar.",
    privacyTitle: "Datenschutzerklärung",
    privacyShort: "Datenschutz",
    privacyCopyOne: "Verantwortlich für die Datenverarbeitung ist die im Impressum genannte Person oder Stelle. Beim Besuch dieser Website können durch den Hostinganbieter technische Zugriffsdaten verarbeitet werden, zum Beispiel IP-Adresse, Zeitpunkt des Abrufs, Browsertyp und aufgerufene Datei. Diese Daten dienen der sicheren und stabilen Bereitstellung der Website.",
    privacyCopyTwo: "Die Website verwendet derzeit keine Analyse-Tools, keine Newsletter-Anmeldung und keine personalisierte Werbung. Es werden lediglich lokale Einstellungen im Browser gespeichert, etwa die gewählte Sprache, der ausgewählte Bezirk und die Cookie-Auswahl.",
    privacyCopyThree: "Auf der Website sind externe Links und Bilder aus öffentlichen Quellen eingebunden. Beim Aufruf externer Inhalte können die jeweiligen Anbieter eigene Zugriffsdaten verarbeiten. Für die Anzeigenprüfung ist Google AdSense eingebunden. Dabei können Google und verbundene Anbieter technische Daten verarbeiten, sobald die veröffentlichte Website aufgerufen wird. Wenn später personalisierte Anzeigen oder Affiliate-Tracking genutzt werden, muss diese Datenschutzerklärung entsprechend erweitert werden.",
    privacyCopyFour: "Betroffene Personen haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit.",
    cookiesTitle: "Cookies",
    cookiesCopyOne: "Diese Website speichert für die Bedienung lokale Browser-Einstellungen, damit Sprache, Bezirksauswahl und Cookie-Hinweis beim nächsten Besuch erhalten bleiben. Zusätzlich ist Google AdSense für die Anzeigenprüfung eingebunden. Solange keine personalisierten Anzeigen aktiviert sind, sollte die Werbeeinbindung bewusst zurückhaltend bleiben.",
    cookiesCopyTwo: "Wenn künftig personalisierte Werbung, Analyse-Tools oder weitere Drittanbieter-Dienste genutzt werden, sollte ein erweitertes Cookie-Banner mit echter Auswahlmöglichkeit ergänzt werden.",
    cookiesReset: "Cookie-Auswahl zurücksetzen",
    cookieAria: "Cookie-Hinweis",
    cookieTitle: "Cookie-Hinweis",
    cookieCopy: "Diese Website speichert nur notwendige lokale Einstellungen wie Sprache, Bezirksauswahl und diese Cookie-Entscheidung. Für Anzeigen ist Google AdSense eingebunden; personalisierte Werbung sollte erst nach passender Zustimmung aktiviert werden.",
    cookieEssential: "Nur notwendige",
    cookieAccept: "OK"
  },
  en: {
    navNeighborhoods: "Neighborhoods",
    navCompare: "Compare",
    navSources: "Sources",
    navTrip: "Trip planner",
    navLegal: "Legal",
    languageLabel: "Language",
    navAria: "Main navigation",
    languageSelectAria: "Select language",
    boroughSelectAria: "Select borough",
    regionFilterAria: "Filter region",
    boroughsLabel: "Boroughs",
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
    analysisCharacter: "Character",
    tripPageTitle: "New York Trip Planner",
    tripNavContext: "Trip Planner",
    tripHeroTitle: "Find your ideal New York neighborhood",
    tripHeroCopy: "Plan your stay around budget, location, nightlife, sights and restaurants. The atlas suggests suitable neighborhoods and links to matching hotel searches on Booking.com.",
    tripSectionAria: "Plan a New York trip",
    tripEyebrow: "Travel profile",
    tripQuestion: "What matters to you?",
    tripPrioritiesTitle: "Your priorities",
    tripPrioritiesCopy: "Choose what matters for your New York trip. Recommendations adapt automatically to the selected borough and travel style.",
    tripPrioritiesAria: "Travel priorities",
    tripAttractionsTitle: "What do you definitely want to see?",
    tripAttractionsAria: "Selected sights",
    tripBoroughLabel: "Borough",
    tripBoroughAll: "All boroughs",
    tripBudgetLabel: "Budget",
    tripBudgetBalanced: "Balanced",
    tripBudgetBudget: "Budget-conscious",
    tripBudgetPremium: "Premium",
    tripStyleLabel: "Travel style",
    tripStyleFirst: "First New York trip",
    tripStyleCulture: "Culture & architecture",
    tripStyleLocal: "Local & relaxed",
    tripStyleFood: "Food focus",
    tripUpdateButton: "Update recommendations",
    tripUpdateHint: "Change your selection, then update the results.",
    tripUpdatePending: "Selection changed. Click “Update recommendations”.",
    tripUpdateFresh: "Recommendations are up to date.",
    customNeighborhoodLabel: "Check your own neighborhood",
    customNeighborhoodNone: "No custom neighborhood selected",
    customNeighborhoodCopy: "Already have a neighborhood in mind? Check how well it fits your budget, travel style and must-see New York plans.",
    customResultEyebrow: "Your neighborhood check",
    customResultTitle: "How this neighborhood fits you",
    customDistanceTitle: "Distance to your targets",
    customDistanceEmpty: "Select sights to see their distance from the neighborhood.",
    customBudgetTitle: "Budget fit",
    customStyleTitle: "Travel style fit",
    customPriorityTitle: "Priority fit",
    hotelNightlyLabel: "Hotel/night approx.",
    recommendationSectionEyebrow: "Also worth exploring",
    recommendationSectionTitle: "More neighborhoods that fit your trip",
    recommendationSectionCopy: "These recommendations complement your personal neighborhood check and show polished alternatives with a similar travel profile.",
    customApproxDistance: "approx.",
    customStrongFit: "Strong fit",
    customGoodFit: "Good fit",
    customLimitedFit: "Limited fit",
    customBudgetGood: "The price level fits your budget well.",
    customBudgetMedium: "The price level is possible, but not ideal.",
    customBudgetWeak: "The price level is a weak fit for your budget.",
    customStyleGood: "The travel style fits the neighborhood's character well.",
    customStyleMedium: "The travel style partly fits the neighborhood.",
    customStyleWeak: "The travel style only fits the neighborhood to a limited degree.",
    prefPrice: "Price",
    prefLocation: "Location",
    prefSights: "Sights",
    prefNightlife: "Nightlife",
    prefFood: "Restaurants",
    prefQuiet: "Quiet stay",
    hotelBooking: "Booking.com",
    hotelTitle: "Search suitable hotels",
    hotelNote: "Links open matching Booking.com searches with at least a 7/10 rating. Availability and prices are checked there in real time.",
    hotelTypeLabel: "Hotel type",
    hotelLocationLabel: "Location",
    hotelComfortLabel: "Comfort",
    hotelAuto: "automatic match",
    hotelFlexible: "Flexible",
    hotelBestMatch: "Best mix",
    hotelBudget: "Affordable",
    hotelBoutique: "Boutique",
    hotelLuxury: "Luxury",
    hotelFamily: "Family-friendly",
    hotelApartment: "Apartment / suite",
    hotelNearSights: "near sights",
    hotelNearSubway: "near subway",
    hotelNearNightlife: "near nightlife",
    hotelNearRestaurants: "near restaurants",
    hotelQuiet: "quiet location",
    hotelBreakfast: "breakfast",
    hotelRating: "highly rated",
    hotelView: "great view",
    hotelDesign: "modern design",
    hotelBestIn: "best hotels in",
    hotelGoodLocation: "suitable location",
    hotelGoodComfort: "good comfort",
    sightsHeader: "Highlights",
    sightsTitle: "Must-see",
    sightsCopy: "Curated stops that fit this neighborhood and your selected interests.",
    foodHeader: "Food",
    foodTitle: "Restaurants",
    foodCopy: "Specific addresses and food zones that match the neighborhood.",
    mapAria: "Location map for",
    mapControls: "Map zoom",
    mapZoomIn: "Zoom closer to the neighborhood",
    mapZoomOut: "Zoom out",
    tripPreviewEyebrow: "Trip Planner",
    tripPreviewTitle: "Find your ideal New York neighborhood",
    tripPreviewCopy: "Choose budget, location, nightlife, sights or food focus and get suitable neighborhoods, Booking.com hotel searches, highlights and restaurant ideas.",
    tripPreviewAction: "Open planner",
    tripPreviewHotels: "matched to the neighborhood",
    tripPreviewFood: "& sights",
    adAria: "Advertisement",
    adLabel: "Advertisement",
    adCopy: "A discreet Google ad will appear here later.",
    legalAria: "Legal information",
    legalEyebrow: "Legal",
    legalTitle: "Imprint, privacy & cookies",
    imprintTitle: "Imprint",
    imprintProvider: "Provider identification according to § 5 DDG",
    imprintResponsible: "Responsible for journalistic-editorial content according to § 18 para. 2 MStV:",
    imprintDisclaimer: "This website is an editorial information service about New York neighborhoods. The content is not real-estate, legal or financial advice.",
    privacyTitle: "Privacy policy",
    privacyShort: "Privacy",
    privacyCopyOne: "The person or entity named in the imprint is responsible for data processing. When visiting this website, the hosting provider may process technical access data, for example IP address, access time, browser type and requested file. This data is used to provide the website securely and reliably.",
    privacyCopyTwo: "The website currently uses no analytics tools, no newsletter signup and no personalized advertising. Only local browser settings are stored, such as selected language, selected borough and cookie choice.",
    privacyCopyThree: "External links and images from public sources are embedded on the website. When external content is opened, the respective providers may process their own access data. Google AdSense is included for ad review. Google and connected providers may process technical data once the published website is accessed. If personalized ads or affiliate tracking are used later, this privacy policy must be expanded accordingly.",
    privacyCopyFour: "Data subjects have rights to access, correction, deletion, restriction of processing, objection and data portability within the legal requirements.",
    cookiesTitle: "Cookies",
    cookiesCopyOne: "This website stores local browser settings so language, borough selection and cookie notice remain available on the next visit. Google AdSense is also embedded for ad review. As long as personalized ads are not enabled, advertising should remain deliberately restrained.",
    cookiesCopyTwo: "If personalized advertising, analytics tools or additional third-party services are used in the future, an expanded cookie banner with a real choice should be added.",
    cookiesReset: "Reset cookie choice",
    cookieAria: "Cookie notice",
    cookieTitle: "Cookie notice",
    cookieCopy: "This website stores only necessary local settings such as language, borough selection and this cookie decision. Google AdSense is embedded for ads; personalized advertising should only be enabled after appropriate consent.",
    cookieEssential: "Necessary only",
    cookieAccept: "OK"
  },
  es: {
    navNeighborhoods: "Barrios",
    navCompare: "Comparar",
    navSources: "Fuentes",
    navTrip: "Planificador",
    navLegal: "Legal",
    languageLabel: "Idioma",
    navAria: "Navegación principal",
    languageSelectAria: "Seleccionar idioma",
    boroughSelectAria: "Seleccionar borough",
    regionFilterAria: "Filtrar región",
    boroughsLabel: "Boroughs",
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
    analysisCharacter: "Carácter",
    tripPageTitle: "Planificador de viaje a Nueva York",
    tripNavContext: "Planificador",
    tripHeroTitle: "Encuentra tu barrio ideal en Nueva York",
    tripHeroCopy: "Planifica tu estancia según presupuesto, ubicación, vida nocturna, lugares de interés y restaurantes. El atlas propone barrios adecuados y enlaza con búsquedas de hotel en Booking.com.",
    tripSectionAria: "Planificar un viaje a Nueva York",
    tripEyebrow: "Perfil de viaje",
    tripQuestion: "¿Qué es importante para ti?",
    tripPrioritiesTitle: "Tus prioridades",
    tripPrioritiesCopy: "Elige lo que importa para tu viaje a Nueva York. Las recomendaciones se adaptan automáticamente al borough y al estilo de viaje elegidos.",
    tripPrioritiesAria: "Prioridades de viaje",
    tripAttractionsTitle: "¿Qué quieres ver sí o sí?",
    tripAttractionsAria: "Lugares seleccionados",
    tripBoroughLabel: "Borough",
    tripBoroughAll: "Todos los boroughs",
    tripBudgetLabel: "Presupuesto",
    tripBudgetBalanced: "Equilibrado",
    tripBudgetBudget: "Económico",
    tripBudgetPremium: "Premium",
    tripStyleLabel: "Estilo de viaje",
    tripStyleFirst: "Primer viaje a Nueva York",
    tripStyleCulture: "Cultura y arquitectura",
    tripStyleLocal: "Local y relajado",
    tripStyleFood: "Enfoque gastronómico",
    tripUpdateButton: "Actualizar recomendaciones",
    tripUpdateHint: "Cambia tu selección y luego actualiza los resultados.",
    tripUpdatePending: "Selección modificada. Haz clic en “Actualizar recomendaciones”.",
    tripUpdateFresh: "Las recomendaciones están actualizadas.",
    customNeighborhoodLabel: "Comprobar un barrio propio",
    customNeighborhoodNone: "Ningún barrio propio seleccionado",
    customNeighborhoodCopy: "¿Ya tienes un barrio en mente? Comprueba qué tan bien encaja con tu presupuesto, tu estilo de viaje y tus planes imprescindibles en Nueva York.",
    customResultEyebrow: "Tu análisis de barrio",
    customResultTitle: "Cómo encaja este barrio contigo",
    customDistanceTitle: "Distancia a tus objetivos",
    customDistanceEmpty: "Selecciona lugares de interés para ver la distancia desde el barrio.",
    customBudgetTitle: "Ajuste de presupuesto",
    customStyleTitle: "Ajuste de estilo",
    customPriorityTitle: "Ajuste de prioridades",
    hotelNightlyLabel: "Hotel/noche aprox.",
    recommendationSectionEyebrow: "También interesante",
    recommendationSectionTitle: "Más barrios que encajan con tu viaje",
    recommendationSectionCopy: "Estas recomendaciones complementan tu análisis personal y muestran alternativas elegantes con un perfil de viaje similar.",
    customApproxDistance: "aprox.",
    customStrongFit: "Muy adecuado",
    customGoodFit: "Adecuado",
    customLimitedFit: "Ajuste limitado",
    customBudgetGood: "El nivel de precios encaja bien con tu presupuesto.",
    customBudgetMedium: "El nivel de precios es posible, pero no ideal.",
    customBudgetWeak: "El nivel de precios encaja poco con tu presupuesto.",
    customStyleGood: "El estilo de viaje encaja bien con el carácter del barrio.",
    customStyleMedium: "El estilo de viaje encaja parcialmente con el barrio.",
    customStyleWeak: "El estilo de viaje solo encaja de forma limitada.",
    prefPrice: "Precio",
    prefLocation: "Ubicación",
    prefSights: "Lugares de interés",
    prefNightlife: "Vida nocturna",
    prefFood: "Restaurantes",
    prefQuiet: "Estancia tranquila",
    hotelBooking: "Booking.com",
    hotelTitle: "Buscar hoteles adecuados",
    hotelNote: "Los enlaces abren búsquedas de Booking.com con al menos 7/10 de valoración. Disponibilidad y precios se comprueban allí en tiempo real.",
    hotelTypeLabel: "Tipo de hotel",
    hotelLocationLabel: "Ubicación",
    hotelComfortLabel: "Comodidad",
    hotelAuto: "automático",
    hotelFlexible: "Flexible",
    hotelBestMatch: "Mejor combinación",
    hotelBudget: "Económico",
    hotelBoutique: "Boutique",
    hotelLuxury: "Lujo",
    hotelFamily: "Familiar",
    hotelApartment: "Apartamento / suite",
    hotelNearSights: "cerca de lugares de interés",
    hotelNearSubway: "cerca del metro",
    hotelNearNightlife: "cerca de vida nocturna",
    hotelNearRestaurants: "cerca de restaurantes",
    hotelQuiet: "zona tranquila",
    hotelBreakfast: "desayuno",
    hotelRating: "muy bien valorado",
    hotelView: "buena vista",
    hotelDesign: "diseño moderno",
    hotelBestIn: "mejores hoteles en",
    hotelGoodLocation: "ubicación adecuada",
    hotelGoodComfort: "buena comodidad",
    sightsHeader: "Highlights",
    sightsTitle: "Imprescindibles",
    sightsCopy: "Paradas seleccionadas que encajan con este barrio y tus intereses.",
    foodHeader: "Food",
    foodTitle: "Restaurantes",
    foodCopy: "Direcciones concretas y zonas gastronómicas que encajan con el barrio.",
    mapAria: "Mapa de ubicación de",
    mapControls: "Zoom del mapa",
    mapZoomIn: "Acercar al barrio",
    mapZoomOut: "Alejar",
    tripPreviewEyebrow: "Planificador",
    tripPreviewTitle: "Encuentra tu barrio ideal en Nueva York",
    tripPreviewCopy: "Elige presupuesto, ubicación, vida nocturna, lugares de interés o gastronomía y recibe barrios adecuados, hoteles en Booking.com, highlights e ideas de restaurantes.",
    tripPreviewAction: "Abrir planificador",
    tripPreviewHotels: "adecuados al barrio",
    tripPreviewFood: "y lugares de interés",
    adAria: "Anuncio",
    adLabel: "Anuncio",
    adCopy: "Más adelante aparecerá aquí un anuncio discreto de Google.",
    legalAria: "Información legal",
    legalEyebrow: "Legal",
    legalTitle: "Aviso legal, privacidad y cookies",
    imprintTitle: "Aviso legal",
    imprintProvider: "Identificación del proveedor según § 5 DDG",
    imprintResponsible: "Responsable del contenido periodístico-editorial según § 18 párr. 2 MStV:",
    imprintDisclaimer: "Esta web es una oferta editorial informativa sobre los barrios de Nueva York. El contenido no constituye asesoramiento inmobiliario, legal ni financiero.",
    privacyTitle: "Política de privacidad",
    privacyShort: "Privacidad",
    privacyCopyOne: "La persona o entidad indicada en el aviso legal es responsable del tratamiento de datos. Al visitar esta web, el proveedor de alojamiento puede procesar datos técnicos de acceso, por ejemplo dirección IP, hora de acceso, tipo de navegador y archivo solicitado. Estos datos sirven para ofrecer la web de forma segura y estable.",
    privacyCopyTwo: "La web no utiliza actualmente herramientas de análisis, registro a newsletter ni publicidad personalizada. Solo se guardan ajustes locales del navegador, como idioma elegido, borough seleccionado y elección de cookies.",
    privacyCopyThree: "La web incluye enlaces externos e imágenes de fuentes públicas. Al abrir contenidos externos, los respectivos proveedores pueden procesar sus propios datos de acceso. Google AdSense está integrado para la revisión de anuncios. Google y proveedores relacionados pueden procesar datos técnicos cuando se accede a la web publicada. Si más adelante se utilizan anuncios personalizados o seguimiento de afiliados, esta política deberá ampliarse.",
    privacyCopyFour: "Las personas afectadas tienen, dentro de los requisitos legales, derechos de acceso, rectificación, supresión, limitación del tratamiento, oposición y portabilidad.",
    cookiesTitle: "Cookies",
    cookiesCopyOne: "Esta web guarda ajustes locales del navegador para que idioma, borough y aviso de cookies se conserven en la próxima visita. Además, Google AdSense está integrado para la revisión de anuncios. Mientras no se activen anuncios personalizados, la publicidad debe seguir siendo discreta.",
    cookiesCopyTwo: "Si en el futuro se usan publicidad personalizada, herramientas de análisis u otros servicios de terceros, debería añadirse un banner de cookies ampliado con opción real de elección.",
    cookiesReset: "Restablecer elección de cookies",
    cookieAria: "Aviso de cookies",
    cookieTitle: "Aviso de cookies",
    cookieCopy: "Esta web solo guarda ajustes locales necesarios como idioma, borough y esta decisión de cookies. Google AdSense está integrado para anuncios; la publicidad personalizada solo debería activarse con el consentimiento adecuado.",
    cookieEssential: "Solo necesarias",
    cookieAccept: "OK"
  },
  fr: {
    navNeighborhoods: "Quartiers",
    navCompare: "Comparer",
    navSources: "Sources",
    navTrip: "Planificateur",
    navLegal: "Mentions",
    languageLabel: "Langue",
    navAria: "Navigation principale",
    languageSelectAria: "Choisir la langue",
    boroughSelectAria: "Choisir le borough",
    regionFilterAria: "Filtrer la région",
    boroughsLabel: "Boroughs",
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
    analysisCharacter: "Caractère",
    tripPageTitle: "Planificateur de voyage à New York",
    tripNavContext: "Planificateur",
    tripHeroTitle: "Trouvez votre quartier idéal à New York",
    tripHeroCopy: "Planifiez votre séjour selon le budget, l'emplacement, la vie nocturne, les sites à voir et les restaurants. L'atlas propose des quartiers adaptés et renvoie vers des recherches d'hôtels sur Booking.com.",
    tripSectionAria: "Planifier un voyage à New York",
    tripEyebrow: "Profil de voyage",
    tripQuestion: "Qu'est-ce qui compte pour vous ?",
    tripPrioritiesTitle: "Vos priorités",
    tripPrioritiesCopy: "Choisissez ce qui compte pour votre voyage à New York. Les recommandations s'adaptent automatiquement au borough et au style de voyage sélectionnés.",
    tripPrioritiesAria: "Priorités de voyage",
    tripAttractionsTitle: "Que voulez-vous absolument voir ?",
    tripAttractionsAria: "Sites sélectionnés",
    tripBoroughLabel: "Borough",
    tripBoroughAll: "Tous les boroughs",
    tripBudgetLabel: "Budget",
    tripBudgetBalanced: "Équilibré",
    tripBudgetBudget: "Économique",
    tripBudgetPremium: "Premium",
    tripStyleLabel: "Style de voyage",
    tripStyleFirst: "Premier voyage à New York",
    tripStyleCulture: "Culture et architecture",
    tripStyleLocal: "Local et détendu",
    tripStyleFood: "Focus gastronomie",
    tripUpdateButton: "Actualiser les recommandations",
    tripUpdateHint: "Modifiez votre sélection, puis actualisez les résultats.",
    tripUpdatePending: "Sélection modifiée. Cliquez sur « Actualiser les recommandations ».",
    tripUpdateFresh: "Les recommandations sont à jour.",
    customNeighborhoodLabel: "Vérifier un quartier choisi",
    customNeighborhoodNone: "Aucun quartier choisi",
    customNeighborhoodCopy: "Vous avez déjà un quartier en tête ? Vérifiez s’il correspond à votre budget, à votre style de voyage et à vos incontournables à New York.",
    customResultEyebrow: "Votre analyse de quartier",
    customResultTitle: "Comment ce quartier vous correspond",
    customDistanceTitle: "Distance vers vos objectifs",
    customDistanceEmpty: "Sélectionnez des sites pour voir leur distance depuis le quartier.",
    customBudgetTitle: "Adéquation budget",
    customStyleTitle: "Adéquation style",
    customPriorityTitle: "Adéquation priorités",
    hotelNightlyLabel: "Hôtel/nuit env.",
    recommendationSectionEyebrow: "À explorer aussi",
    recommendationSectionTitle: "D’autres quartiers adaptés à votre voyage",
    recommendationSectionCopy: "Ces recommandations complètent votre analyse personnelle et proposent des alternatives soignées au profil de voyage similaire.",
    customApproxDistance: "env.",
    customStrongFit: "Très adapté",
    customGoodFit: "Adapté",
    customLimitedFit: "Adéquation limitée",
    customBudgetGood: "Le niveau de prix correspond bien à votre budget.",
    customBudgetMedium: "Le niveau de prix est possible, mais pas idéal.",
    customBudgetWeak: "Le niveau de prix correspond plutôt peu à votre budget.",
    customStyleGood: "Le style de voyage correspond bien au caractère du quartier.",
    customStyleMedium: "Le style de voyage correspond partiellement au quartier.",
    customStyleWeak: "Le style de voyage ne correspond que de façon limitée.",
    prefPrice: "Prix",
    prefLocation: "Emplacement",
    prefSights: "Sites à voir",
    prefNightlife: "Vie nocturne",
    prefFood: "Restaurants",
    prefQuiet: "Séjour calme",
    hotelBooking: "Booking.com",
    hotelTitle: "Chercher des hôtels adaptés",
    hotelNote: "Les liens ouvrent des recherches Booking.com avec une note d'au moins 7/10. Les disponibilités et prix y sont vérifiés en direct.",
    hotelTypeLabel: "Type d'hôtel",
    hotelLocationLabel: "Emplacement",
    hotelComfortLabel: "Confort",
    hotelAuto: "automatique",
    hotelFlexible: "Flexible",
    hotelBestMatch: "Meilleur équilibre",
    hotelBudget: "Abordable",
    hotelBoutique: "Boutique",
    hotelLuxury: "Luxe",
    hotelFamily: "Familial",
    hotelApartment: "Appartement / suite",
    hotelNearSights: "près des sites",
    hotelNearSubway: "près du métro",
    hotelNearNightlife: "près de la vie nocturne",
    hotelNearRestaurants: "près des restaurants",
    hotelQuiet: "emplacement calme",
    hotelBreakfast: "petit-déjeuner",
    hotelRating: "très bien noté",
    hotelView: "belle vue",
    hotelDesign: "design moderne",
    hotelBestIn: "meilleurs hôtels à",
    hotelGoodLocation: "emplacement adapté",
    hotelGoodComfort: "bon confort",
    sightsHeader: "Highlights",
    sightsTitle: "À voir absolument",
    sightsCopy: "Des arrêts sélectionnés qui correspondent à ce quartier et à vos centres d'intérêt.",
    foodHeader: "Food",
    foodTitle: "Restaurants",
    foodCopy: "Adresses concrètes et zones gastronomiques adaptées au quartier.",
    mapAria: "Carte de localisation pour",
    mapControls: "Zoom de la carte",
    mapZoomIn: "Zoomer sur le quartier",
    mapZoomOut: "Dézoomer",
    tripPreviewEyebrow: "Planificateur",
    tripPreviewTitle: "Trouvez votre quartier idéal à New York",
    tripPreviewCopy: "Choisissez budget, emplacement, vie nocturne, sites à voir ou gastronomie et obtenez des quartiers adaptés, des recherches d'hôtels Booking.com, des highlights et des idées de restaurants.",
    tripPreviewAction: "Ouvrir le planificateur",
    tripPreviewHotels: "adaptés au quartier",
    tripPreviewFood: "et sites à voir",
    adAria: "Publicité",
    adLabel: "Publicité",
    adCopy: "Une publicité Google discrète apparaîtra ici plus tard.",
    legalAria: "Informations légales",
    legalEyebrow: "Mentions",
    legalTitle: "Mentions légales, confidentialité et cookies",
    imprintTitle: "Mentions légales",
    imprintProvider: "Identification du fournisseur selon § 5 DDG",
    imprintResponsible: "Responsable des contenus journalistiques et éditoriaux selon § 18 al. 2 MStV :",
    imprintDisclaimer: "Ce site est une offre éditoriale d'information sur les quartiers de New York. Les contenus ne constituent pas un conseil immobilier, juridique ou financier.",
    privacyTitle: "Politique de confidentialité",
    privacyShort: "Confidentialité",
    privacyCopyOne: "La personne ou entité indiquée dans les mentions légales est responsable du traitement des données. Lors de la visite du site, l'hébergeur peut traiter des données techniques d'accès, par exemple adresse IP, heure de consultation, type de navigateur et fichier demandé. Ces données servent à fournir le site de manière sûre et stable.",
    privacyCopyTwo: "Le site n'utilise actuellement aucun outil d'analyse, aucune inscription à une newsletter et aucune publicité personnalisée. Seuls des réglages locaux du navigateur sont enregistrés, comme la langue choisie, le borough sélectionné et le choix de cookies.",
    privacyCopyThree: "Le site intègre des liens externes et des images provenant de sources publiques. Lors de l'ouverture de contenus externes, les fournisseurs concernés peuvent traiter leurs propres données d'accès. Google AdSense est intégré pour la vérification publicitaire. Google et des fournisseurs associés peuvent traiter des données techniques lorsque le site publié est consulté. Si des publicités personnalisées ou un suivi d'affiliation sont utilisés plus tard, cette politique devra être complétée.",
    privacyCopyFour: "Les personnes concernées disposent, dans le cadre légal, de droits d'accès, de rectification, d'effacement, de limitation du traitement, d'opposition et de portabilité.",
    cookiesTitle: "Cookies",
    cookiesCopyOne: "Ce site enregistre des réglages locaux du navigateur afin que la langue, le choix du borough et l'avis cookies soient conservés lors de la prochaine visite. Google AdSense est également intégré pour la vérification publicitaire. Tant que les annonces personnalisées ne sont pas activées, la publicité doit rester volontairement discrète.",
    cookiesCopyTwo: "Si une publicité personnalisée, des outils d'analyse ou d'autres services tiers sont utilisés à l'avenir, une bannière cookies plus complète avec un vrai choix devra être ajoutée.",
    cookiesReset: "Réinitialiser le choix des cookies",
    cookieAria: "Avis cookies",
    cookieTitle: "Avis cookies",
    cookieCopy: "Ce site enregistre uniquement les réglages locaux nécessaires comme la langue, le borough et cette décision cookies. Google AdSense est intégré pour les annonces ; la publicité personnalisée ne devrait être activée qu'après consentement approprié.",
    cookieEssential: "Nécessaires seulement",
    cookieAccept: "OK"
  },
  pt: {
    navNeighborhoods: "Bairros",
    navCompare: "Comparar",
    navSources: "Fontes",
    navTrip: "Planejador",
    navLegal: "Legal",
    languageLabel: "Idioma",
    navAria: "Navegação principal",
    languageSelectAria: "Selecionar idioma",
    boroughSelectAria: "Selecionar borough",
    regionFilterAria: "Filtrar região",
    boroughsLabel: "Boroughs",
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
    analysisCharacter: "Caráter",
    tripPageTitle: "Planejador de viagem para Nova York",
    tripNavContext: "Planejador",
    tripHeroTitle: "Encontre seu bairro ideal em Nova York",
    tripHeroCopy: "Planeje a estadia por orçamento, localização, vida noturna, atrações e restaurantes. O atlas sugere bairros adequados e leva a buscas de hotéis no Booking.com.",
    tripSectionAria: "Planejar uma viagem a Nova York",
    tripEyebrow: "Perfil de viagem",
    tripQuestion: "O que é importante para você?",
    tripPrioritiesTitle: "Suas prioridades",
    tripPrioritiesCopy: "Escolha o que importa na sua viagem a Nova York. As recomendações se ajustam automaticamente ao borough e ao estilo de viagem escolhidos.",
    tripPrioritiesAria: "Prioridades de viagem",
    tripAttractionsTitle: "O que você quer ver de qualquer jeito?",
    tripAttractionsAria: "Atrações selecionadas",
    tripBoroughLabel: "Borough",
    tripBoroughAll: "Todos os boroughs",
    tripBudgetLabel: "Orçamento",
    tripBudgetBalanced: "Equilibrado",
    tripBudgetBudget: "Econômico",
    tripBudgetPremium: "Premium",
    tripStyleLabel: "Estilo de viagem",
    tripStyleFirst: "Primeira viagem a Nova York",
    tripStyleCulture: "Cultura e arquitetura",
    tripStyleLocal: "Local e tranquilo",
    tripStyleFood: "Foco em gastronomia",
    tripUpdateButton: "Atualizar recomendações",
    tripUpdateHint: "Altere sua seleção e depois atualize os resultados.",
    tripUpdatePending: "Seleção alterada. Clique em “Atualizar recomendações”.",
    tripUpdateFresh: "As recomendações estão atualizadas.",
    customNeighborhoodLabel: "Verificar um bairro próprio",
    customNeighborhoodNone: "Nenhum bairro próprio selecionado",
    customNeighborhoodCopy: "Já tem um bairro em mente? Veja se ele combina com seu orçamento, seu estilo de viagem e seus planos essenciais em Nova York.",
    customResultEyebrow: "Seu check de bairro",
    customResultTitle: "Como este bairro combina com você",
    customDistanceTitle: "Distância até seus pontos",
    customDistanceEmpty: "Selecione atrações para ver a distância a partir do bairro.",
    customBudgetTitle: "Ajuste ao orçamento",
    customStyleTitle: "Ajuste ao estilo",
    customPriorityTitle: "Ajuste às prioridades",
    hotelNightlyLabel: "Hotel/noite aprox.",
    recommendationSectionEyebrow: "Também vale explorar",
    recommendationSectionTitle: "Outros bairros que combinam com sua viagem",
    recommendationSectionCopy: "Estas recomendações complementam sua análise pessoal e mostram alternativas elegantes com um perfil de viagem semelhante.",
    customApproxDistance: "aprox.",
    customStrongFit: "Combina muito",
    customGoodFit: "Combina bem",
    customLimitedFit: "Combina pouco",
    customBudgetGood: "O nível de preço combina bem com seu orçamento.",
    customBudgetMedium: "O nível de preço é possível, mas não ideal.",
    customBudgetWeak: "O nível de preço combina pouco com seu orçamento.",
    customStyleGood: "O estilo de viagem combina bem com o caráter do bairro.",
    customStyleMedium: "O estilo de viagem combina parcialmente com o bairro.",
    customStyleWeak: "O estilo de viagem combina apenas de forma limitada.",
    prefPrice: "Preço",
    prefLocation: "Localização",
    prefSights: "Atrações",
    prefNightlife: "Vida noturna",
    prefFood: "Restaurantes",
    prefQuiet: "Estadia tranquila",
    hotelBooking: "Booking.com",
    hotelTitle: "Buscar hotéis adequados",
    hotelNote: "Os links abrem buscas do Booking.com com avaliação mínima de 7/10. Disponibilidade e preços são verificados lá em tempo real.",
    hotelTypeLabel: "Tipo de hotel",
    hotelLocationLabel: "Localização",
    hotelComfortLabel: "Conforto",
    hotelAuto: "automático",
    hotelFlexible: "Flexível",
    hotelBestMatch: "Melhor combinação",
    hotelBudget: "Econômico",
    hotelBoutique: "Boutique",
    hotelLuxury: "Luxo",
    hotelFamily: "Familiar",
    hotelApartment: "Apartamento / suíte",
    hotelNearSights: "perto das atrações",
    hotelNearSubway: "perto do metrô",
    hotelNearNightlife: "perto da vida noturna",
    hotelNearRestaurants: "perto de restaurantes",
    hotelQuiet: "local tranquilo",
    hotelBreakfast: "café da manhã",
    hotelRating: "muito bem avaliado",
    hotelView: "boa vista",
    hotelDesign: "design moderno",
    hotelBestIn: "melhores hotéis em",
    hotelGoodLocation: "localização adequada",
    hotelGoodComfort: "bom conforto",
    sightsHeader: "Destaques",
    sightsTitle: "Imperdível",
    sightsCopy: "Paradas selecionadas que combinam com este bairro e seus interesses.",
    foodHeader: "Food",
    foodTitle: "Restaurantes",
    foodCopy: "Endereços concretos e zonas gastronômicas que combinam com o bairro.",
    mapAria: "Mapa de localização de",
    mapControls: "Zoom do mapa",
    mapZoomIn: "Aproximar do bairro",
    mapZoomOut: "Afastar",
    tripPreviewEyebrow: "Planejador",
    tripPreviewTitle: "Encontre seu bairro ideal em Nova York",
    tripPreviewCopy: "Escolha orçamento, localização, vida noturna, atrações ou gastronomia e receba bairros adequados, buscas de hotéis no Booking.com, destaques e ideias de restaurantes.",
    tripPreviewAction: "Abrir planejador",
    tripPreviewHotels: "adequados ao bairro",
    tripPreviewFood: "e atrações",
    adAria: "Anúncio",
    adLabel: "Anúncio",
    adCopy: "Um anúncio discreto do Google aparecerá aqui mais tarde.",
    legalAria: "Informações legais",
    legalEyebrow: "Legal",
    legalTitle: "Impressum, privacidade e cookies",
    imprintTitle: "Impressum",
    imprintProvider: "Identificação do provedor conforme § 5 DDG",
    imprintResponsible: "Responsável por conteúdo jornalístico-editorial conforme § 18, par. 2 MStV:",
    imprintDisclaimer: "Este site é uma oferta editorial de informação sobre bairros de Nova York. O conteúdo não constitui consultoria imobiliária, jurídica ou financeira.",
    privacyTitle: "Política de privacidade",
    privacyShort: "Privacidade",
    privacyCopyOne: "A pessoa ou entidade indicada no impressum é responsável pelo processamento de dados. Ao visitar este site, o provedor de hospedagem pode processar dados técnicos de acesso, como endereço IP, horário de acesso, tipo de navegador e arquivo solicitado. Esses dados servem para disponibilizar o site com segurança e estabilidade.",
    privacyCopyTwo: "O site atualmente não usa ferramentas de análise, inscrição em newsletter nem publicidade personalizada. Apenas configurações locais do navegador são salvas, como idioma escolhido, borough selecionado e escolha de cookies.",
    privacyCopyThree: "O site inclui links externos e imagens de fontes públicas. Ao abrir conteúdos externos, os respectivos provedores podem processar seus próprios dados de acesso. Google AdSense está integrado para revisão de anúncios. Google e provedores vinculados podem processar dados técnicos quando o site publicado é acessado. Se anúncios personalizados ou rastreamento de afiliados forem usados no futuro, esta política deverá ser ampliada.",
    privacyCopyFour: "As pessoas afetadas têm, dentro dos requisitos legais, direitos de acesso, correção, exclusão, limitação do processamento, oposição e portabilidade.",
    cookiesTitle: "Cookies",
    cookiesCopyOne: "Este site salva configurações locais do navegador para que idioma, escolha de borough e aviso de cookies permaneçam no próximo acesso. Google AdSense também está integrado para revisão de anúncios. Enquanto anúncios personalizados não estiverem ativados, a publicidade deve permanecer discreta.",
    cookiesCopyTwo: "Se publicidade personalizada, ferramentas de análise ou outros serviços de terceiros forem usados futuramente, deve ser adicionado um banner de cookies ampliado com escolha real.",
    cookiesReset: "Redefinir escolha de cookies",
    cookieAria: "Aviso de cookies",
    cookieTitle: "Aviso de cookies",
    cookieCopy: "Este site salva apenas configurações locais necessárias, como idioma, borough e esta decisão sobre cookies. Google AdSense está integrado para anúncios; publicidade personalizada só deve ser ativada após consentimento adequado.",
    cookieEssential: "Apenas necessários",
    cookieAccept: "OK"
  },
  zh: {
    navNeighborhoods: "街区",
    navCompare: "比较",
    navSources: "来源",
    navTrip: "旅行规划",
    navLegal: "法律信息",
    languageLabel: "语言",
    navAria: "主导航",
    languageSelectAria: "选择语言",
    boroughSelectAria: "选择行政区",
    regionFilterAria: "筛选区域",
    boroughsLabel: "行政区",
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
    analysisCharacter: "气质",
    tripPageTitle: "纽约旅行规划",
    tripNavContext: "旅行规划",
    tripHeroTitle: "找到适合你的纽约街区",
    tripHeroCopy: "按照预算、位置、夜生活、景点和餐厅规划行程。图鉴会推荐合适的街区，并链接到 Booking.com 的酒店搜索。",
    tripSectionAria: "规划纽约旅行",
    tripEyebrow: "旅行画像",
    tripQuestion: "你最看重什么？",
    tripPrioritiesTitle: "你的优先项",
    tripPrioritiesCopy: "选择纽约旅行中最重要的因素。推荐会根据所选行政区和旅行风格自动调整。",
    tripPrioritiesAria: "旅行优先项",
    tripAttractionsTitle: "你一定想看什么？",
    tripAttractionsAria: "已选景点",
    tripBoroughLabel: "行政区",
    tripBoroughAll: "全部行政区",
    tripBudgetLabel: "预算",
    tripBudgetBalanced: "均衡",
    tripBudgetBudget: "注重价格",
    tripBudgetPremium: "高端",
    tripStyleLabel: "旅行风格",
    tripStyleFirst: "第一次纽约旅行",
    tripStyleCulture: "文化与建筑",
    tripStyleLocal: "本地且放松",
    tripStyleFood: "美食重点",
    tripUpdateButton: "更新推荐",
    tripUpdateHint: "更改选择后再更新结果。",
    tripUpdatePending: "选择已更改。点击“更新推荐”。",
    tripUpdateFresh: "推荐已是最新。",
    customNeighborhoodLabel: "检查自选街区",
    customNeighborhoodNone: "未选择自选街区",
    customNeighborhoodCopy: "已经有心仪的街区了吗？看看它与你的预算、旅行风格和纽约必看计划是否匹配。",
    customResultEyebrow: "你的街区检查",
    customResultTitle: "这个街区与你的匹配度",
    customDistanceTitle: "到目标景点的距离",
    customDistanceEmpty: "选择景点后即可查看它们与街区的距离。",
    customBudgetTitle: "预算匹配",
    customStyleTitle: "旅行风格匹配",
    customPriorityTitle: "优先项匹配",
    hotelNightlyLabel: "酒店/晚约",
    recommendationSectionEyebrow: "也值得看看",
    recommendationSectionTitle: "更多适合你行程的街区",
    recommendationSectionCopy: "这些推荐补充你的个人街区检查，并展示旅行风格相近的优雅替代选择。",
    customApproxDistance: "约",
    customStrongFit: "非常匹配",
    customGoodFit: "比较匹配",
    customLimitedFit: "匹配有限",
    customBudgetGood: "价格水平与你的预算很匹配。",
    customBudgetMedium: "价格水平可以接受，但不是最理想。",
    customBudgetWeak: "价格水平与你的预算匹配较弱。",
    customStyleGood: "旅行风格与街区气质很匹配。",
    customStyleMedium: "旅行风格与街区部分匹配。",
    customStyleWeak: "旅行风格与街区匹配有限。",
    prefPrice: "价格",
    prefLocation: "位置",
    prefSights: "景点",
    prefNightlife: "夜生活",
    prefFood: "餐厅",
    prefQuiet: "安静住宿",
    hotelBooking: "Booking.com",
    hotelTitle: "搜索合适酒店",
    hotelNote: "链接会打开 Booking.com 搜索，并筛选至少 7/10 评分。实时房态和价格在那里确认。",
    hotelTypeLabel: "酒店类型",
    hotelLocationLabel: "位置",
    hotelComfortLabel: "舒适度",
    hotelAuto: "自动匹配",
    hotelFlexible: "灵活",
    hotelBestMatch: "最佳组合",
    hotelBudget: "经济型",
    hotelBoutique: "精品酒店",
    hotelLuxury: "豪华",
    hotelFamily: "适合家庭",
    hotelApartment: "公寓 / 套房",
    hotelNearSights: "靠近景点",
    hotelNearSubway: "靠近地铁",
    hotelNearNightlife: "靠近夜生活",
    hotelNearRestaurants: "靠近餐厅",
    hotelQuiet: "安静位置",
    hotelBreakfast: "含早餐",
    hotelRating: "评分很高",
    hotelView: "景观好",
    hotelDesign: "现代设计",
    hotelBestIn: "最佳酒店：",
    hotelGoodLocation: "合适位置",
    hotelGoodComfort: "舒适配置",
    sightsHeader: "亮点",
    sightsTitle: "必看",
    sightsCopy: "根据这个街区和你选择的兴趣精选的停留点。",
    foodHeader: "美食",
    foodTitle: "餐厅",
    foodCopy: "与街区匹配的具体餐厅和美食区域。",
    mapAria: "位置地图：",
    mapControls: "地图缩放",
    mapZoomIn: "放大到街区",
    mapZoomOut: "缩小",
    tripPreviewEyebrow: "旅行规划",
    tripPreviewTitle: "找到适合你的纽约街区",
    tripPreviewCopy: "选择预算、位置、夜生活、景点或美食重点，获取合适街区、Booking.com 酒店搜索、亮点和餐厅建议。",
    tripPreviewAction: "打开规划器",
    tripPreviewHotels: "匹配街区",
    tripPreviewFood: "与景点",
    adAria: "广告",
    adLabel: "广告",
    adCopy: "这里之后会显示一条低调的 Google 广告。",
    legalAria: "法律信息",
    legalEyebrow: "法律信息",
    legalTitle: "网站信息、隐私与 Cookies",
    imprintTitle: "网站信息",
    imprintProvider: "根据 § 5 DDG 的提供者信息",
    imprintResponsible: "根据 § 18 第 2 款 MStV 对新闻编辑内容负责：",
    imprintDisclaimer: "本网站是关于纽约街区的编辑类信息服务。内容不构成房地产、法律或金融建议。",
    privacyTitle: "隐私政策",
    privacyShort: "隐私",
    privacyCopyOne: "网站信息中列明的个人或机构负责数据处理。访问本网站时，托管服务商可能处理技术访问数据，例如 IP 地址、访问时间、浏览器类型和请求文件。这些数据用于安全、稳定地提供网站。",
    privacyCopyTwo: "本网站目前不使用分析工具、不提供新闻邮件注册，也不使用个性化广告。只会在浏览器本地保存设置，例如所选语言、行政区和 Cookie 选择。",
    privacyCopyThree: "网站包含外部链接和来自公开来源的图片。打开外部内容时，相应提供者可能处理自己的访问数据。Google AdSense 已用于广告审核。发布后访问网站时，Google 及相关提供者可能处理技术数据。如果以后使用个性化广告或联盟跟踪，本隐私政策需要相应扩展。",
    privacyCopyFour: "在法律规定范围内，相关人员拥有查询、更正、删除、限制处理、反对和数据可携带等权利。",
    cookiesTitle: "Cookies",
    cookiesCopyOne: "本网站会保存本地浏览器设置，以便下次访问时保留语言、行政区选择和 Cookie 提示。Google AdSense 也用于广告审核。在未启用个性化广告前，广告应保持克制。",
    cookiesCopyTwo: "如果未来使用个性化广告、分析工具或其他第三方服务，应增加带有真实选择功能的扩展 Cookie 横幅。",
    cookiesReset: "重置 Cookie 选择",
    cookieAria: "Cookie 提示",
    cookieTitle: "Cookie 提示",
    cookieCopy: "本网站只保存必要的本地设置，例如语言、行政区和这次 Cookie 决定。Google AdSense 用于广告；个性化广告只应在适当同意后启用。",
    cookieEssential: "仅必要项",
    cookieAccept: "OK"
  }
};

translations.it = {
  ...translations.en,
  navNeighborhoods: "Quartieri",
  navCompare: "Confronto",
  navSources: "Fonti",
  navTrip: "Viaggio",
  navLegal: "Informazioni legali",
  languageLabel: "Lingua",
  navAria: "Navigazione principale",
  languageSelectAria: "Seleziona lingua",
  boroughSelectAria: "Seleziona distretto",
  regionFilterAria: "Filtra regione",
  boroughsLabel: "Distretti",
  heroEyebrow: "Storia, prezzi, futuro",
  heroTitle: "Quartieri di New York",
  heroCopy: "Un atlante curato dei quartieri più importanti di New York, con analisi sintetiche su mercato, storia e futuro e immagini di alta qualità che rendono visibile il carattere di ogni luogo.",
  searchLabel: "Cerca",
  searchPlaceholder: "es. Harlem, Williamsburg, Astoria",
  regionAll: "Tutti",
  statRentTitle: "Affitto mediano",
  statRentCopy: "Realtor.com ha indicato per marzo 2026 un affitto mediano richiesto di circa 5.100 dollari al mese.",
  statIndexCopy: "Ad aprile 2026 NYCEDC mostrava un indice degli affitti StreetEasy nettamente sopra il livello pre-Covid.",
  statProfilesCopy: "Profili compatti per confronti rapidi all'interno del distretto selezionato.",
  marketEyebrow: "Quadro di mercato",
  marketTitle: "Distretto in sintesi",
  marketCopy: "Un breve impulso di mercato prima di confrontare direttamente due quartieri.",
  statIndexTitle: "Indice affitti",
  statProfilesTitle: "Profili",
  sourcesPrefix: "Le note su prezzi e mercato si basano su indicatori pubblici di",
  sourcesSuffix: "e su dati di quartiere da Wikipedia. Il sito non sostituisce una consulenza immobiliare.",
  compareEyebrow: "Due quartieri",
  compareTitle: "Confronta quartieri",
  compareFirst: "Primo quartiere",
  compareSecond: "Secondo quartiere",
  comparePrice: "Livello prezzi",
  compareRent: "Fascia affitti",
  compareFuture: "Futuro",
  compareCharacter: "Carattere",
  compareProjects: "Progetti",
  compareEvents: "Eventi",
  chooseEyebrow: "Scegli un quartiere",
  neighborhoodsTitle: "Quartieri",
  analysisEyebrow: "Analisi",
  emptyTitle: "Seleziona una scheda.",
  emptyCopy: "Qui appariranno storia, livello dei prezzi, dinamiche future e un breve controllo del carattere.",
  sourcesTitle: "Fonti e contesto",
  rentLabel: "Affitto ca.",
  monthLabel: "mese",
  priceLevel: "Livello prezzi",
  rentFact: "Affitto",
  futureFact: "Futuro",
  noResults: "Nessun quartiere corrispondente trovato.",
  analysisOverview: "Contesto dettagliato",
  analysisHistory: "Storia",
  analysisPrices: "Prezzi",
  analysisFuture: "Futuro",
  analysisProjects: "Edifici e progetti",
  analysisEvents: "Eventi e cultura",
  analysisExpectation: "Prospettiva futura",
  analysisCharacter: "Carattere",
  tripPageTitle: "Trip Planner New York",
  tripNavContext: "Trip Planner",
  tripHeroTitle: "Trova il quartiere di New York più adatto a te",
  tripHeroCopy: "Pianifica il soggiorno in base a budget, posizione, vita notturna, attrazioni e ristoranti. L'atlante suggerisce quartieri adatti e collega a ricerche hotel pertinenti su Booking.com.",
  tripSectionAria: "Pianificare un viaggio a New York",
  tripEyebrow: "Profilo di viaggio",
  tripQuestion: "Cosa è importante per te?",
  tripPrioritiesTitle: "Le tue priorità",
  tripPrioritiesCopy: "Scegli cosa conta per il tuo viaggio a New York. Le raccomandazioni si adattano al distretto selezionato e al tuo stile di viaggio.",
  tripPrioritiesAria: "Priorità di viaggio",
  tripAttractionsTitle: "Cosa vuoi assolutamente vedere?",
  tripAttractionsAria: "Attrazioni desiderate",
  tripBoroughLabel: "Distretto",
  tripBoroughAll: "Tutti i distretti",
  tripBudgetLabel: "Budget",
  tripBudgetBalanced: "Equilibrato",
  tripBudgetBudget: "Attento al prezzo",
  tripBudgetPremium: "Premium",
  tripStyleLabel: "Stile di viaggio",
  tripStyleFirst: "Primo viaggio a New York",
  tripStyleCulture: "Cultura e architettura",
  tripStyleLocal: "Locale e rilassato",
  tripStyleFood: "Focus gastronomia",
  tripUpdateButton: "Aggiorna raccomandazioni",
  tripUpdateHint: "Modifica la selezione e poi aggiorna i risultati.",
  tripUpdatePending: "Selezione modificata. Clicca su “Aggiorna raccomandazioni”.",
  tripUpdateFresh: "Le raccomandazioni sono aggiornate.",
  customNeighborhoodLabel: "Verifica un quartiere specifico",
  customNeighborhoodNone: "Nessun quartiere selezionato",
  customNeighborhoodCopy: "Hai già un quartiere in mente? Verifica quanto si adatta al tuo budget, al tuo stile di viaggio e ai tuoi obiettivi principali a New York.",
  customResultEyebrow: "Controllo del quartiere",
  customResultTitle: "Quanto questo quartiere fa per te",
  customDistanceTitle: "Distanza dai tuoi obiettivi",
  customDistanceEmpty: "Seleziona attrazioni per vedere la distanza dal quartiere.",
  customBudgetTitle: "Compatibilità budget",
  customStyleTitle: "Compatibilità stile",
  customPriorityTitle: "Compatibilità priorità",
  hotelNightlyLabel: "Hotel/notte ca.",
  recommendationSectionEyebrow: "Da esplorare",
  recommendationSectionTitle: "Altri quartieri adatti al tuo viaggio",
  recommendationSectionCopy: "Queste raccomandazioni completano il tuo controllo personale e mostrano alternative curate con un profilo di viaggio simile.",
  customApproxDistance: "ca.",
  customStrongFit: "Molto adatto",
  customGoodFit: "Adatto",
  customLimitedFit: "Compatibilità limitata",
  customBudgetGood: "Il livello dei prezzi si adatta bene al tuo budget.",
  customBudgetMedium: "Il livello dei prezzi è possibile, ma non ideale.",
  customBudgetWeak: "Il livello dei prezzi si adatta poco al tuo budget.",
  customStyleGood: "Lo stile di viaggio si adatta bene al carattere del quartiere.",
  customStyleMedium: "Lo stile di viaggio si adatta in parte al quartiere.",
  customStyleWeak: "Lo stile di viaggio si adatta solo in modo limitato.",
  prefPrice: "Prezzo",
  prefLocation: "Posizione",
  prefSights: "Attrazioni",
  prefNightlife: "Vita notturna",
  prefFood: "Ristoranti",
  prefQuiet: "Soggiorno tranquillo",
  hotelBooking: "Booking.com",
  hotelTitle: "Cerca hotel adatti",
  hotelNote: "I link aprono ricerche Booking.com con valutazione minima di 7/10. Disponibilità e prezzi vengono verificati lì in tempo reale.",
  hotelTypeLabel: "Tipo di hotel",
  hotelLocationLabel: "Posizione",
  hotelComfortLabel: "Comfort",
  hotelAuto: "automatico",
  hotelFlexible: "Flessibile",
  hotelBestMatch: "Miglior equilibrio",
  hotelBudget: "Conveniente",
  hotelBoutique: "Boutique",
  hotelLuxury: "Lusso",
  hotelFamily: "Per famiglie",
  hotelApartment: "Appartamento / suite",
  hotelNearSights: "vicino alle attrazioni",
  hotelNearSubway: "vicino alla metro",
  hotelNearNightlife: "vicino alla vita notturna",
  hotelNearRestaurants: "vicino ai ristoranti",
  hotelQuiet: "posizione tranquilla",
  hotelBreakfast: "colazione",
  hotelRating: "molto ben valutato",
  hotelView: "bella vista",
  hotelDesign: "design moderno",
  hotelBestIn: "migliori hotel a",
  hotelGoodLocation: "posizione adatta",
  hotelGoodComfort: "buon comfort",
  sightsHeader: "Highlight",
  sightsTitle: "Da non perdere",
  sightsCopy: "Tappe curate che si adattano a questo quartiere e ai tuoi interessi selezionati.",
  foodHeader: "Food",
  foodTitle: "Ristoranti",
  foodCopy: "Indirizzi concreti e zone gastronomiche adatte al quartiere.",
  mapAria: "Mappa della posizione per",
  mapControls: "Zoom mappa",
  mapZoomIn: "Avvicina la mappa al quartiere",
  mapZoomOut: "Allontana la mappa",
  tripPreviewEyebrow: "Trip Planner",
  tripPreviewTitle: "Trova il quartiere di New York più adatto a te",
  tripPreviewCopy: "Scegli budget, posizione, vita notturna, attrazioni o focus gastronomico e ricevi quartieri adatti, ricerche hotel su Booking.com, highlight e idee ristorante.",
  tripPreviewAction: "Apri planner",
  tripPreviewHotels: "adatti al quartiere",
  tripPreviewFood: "e attrazioni",
  adAria: "Annuncio",
  adLabel: "Annuncio",
  adCopy: "Qui apparirà più avanti un annuncio Google discreto.",
  legalAria: "Informazioni legali",
  legalEyebrow: "Legale",
  legalTitle: "Impressum, privacy e cookie",
  imprintTitle: "Impressum",
  imprintProvider: "Identificazione del fornitore ai sensi del § 5 DDG",
  imprintResponsible: "Responsabile dei contenuti giornalistico-editoriali ai sensi del § 18 comma 2 MStV:",
  imprintDisclaimer: "Questo sito è un'offerta editoriale informativa sui quartieri di New York. I contenuti non costituiscono consulenza immobiliare, legale o finanziaria.",
  privacyTitle: "Informativa privacy",
  privacyShort: "Privacy",
  privacyCopyOne: "La persona o l'ente indicato nell'impressum è responsabile del trattamento dei dati. Durante la visita del sito, il provider di hosting può trattare dati tecnici di accesso, ad esempio indirizzo IP, ora di accesso, tipo di browser e file richiesto.",
  privacyCopyTwo: "Il sito attualmente non usa strumenti di analisi, iscrizioni newsletter o pubblicità personalizzata. Vengono salvate solo impostazioni locali del browser, come lingua, distretto selezionato e scelta cookie.",
  privacyCopyThree: "Il sito include link esterni e immagini da fonti pubbliche. Aprendo contenuti esterni, i rispettivi fornitori possono trattare propri dati di accesso. Google AdSense è integrato per la verifica degli annunci. Se in futuro saranno usati annunci personalizzati o tracking affiliato, questa informativa dovrà essere aggiornata.",
  privacyCopyFour: "Le persone interessate hanno, nei limiti di legge, diritti di accesso, rettifica, cancellazione, limitazione del trattamento, opposizione e portabilità.",
  cookiesTitle: "Cookie",
  cookiesCopyOne: "Questo sito salva impostazioni locali del browser affinché lingua, scelta del distretto e avviso cookie rimangano disponibili alla visita successiva. Google AdSense è integrato per la verifica degli annunci.",
  cookiesCopyTwo: "Se in futuro verranno usati pubblicità personalizzata, strumenti di analisi o altri servizi di terzi, dovrà essere aggiunto un banner cookie ampliato con una vera possibilità di scelta.",
  cookiesReset: "Reimposta scelta cookie",
  cookieAria: "Avviso cookie",
  cookieTitle: "Avviso cookie",
  cookieCopy: "Questo sito salva solo impostazioni locali necessarie come lingua, distretto e questa decisione sui cookie. Google AdSense è integrato per gli annunci; la pubblicità personalizzata dovrebbe essere attivata solo dopo consenso adeguato.",
  cookieEssential: "Solo necessari",
  cookieAccept: "OK"
};

translations.ja = {
  ...translations.en,
  navNeighborhoods: "地区",
  navCompare: "比較",
  navSources: "出典",
  navTrip: "旅行",
  navLegal: "法的情報",
  languageLabel: "言語",
  navAria: "メインナビゲーション",
  languageSelectAria: "言語を選択",
  boroughSelectAria: "行政区を選択",
  regionFilterAria: "地域を絞り込む",
  boroughsLabel: "行政区",
  heroEyebrow: "歴史、価格、未来",
  heroTitle: "ニューヨークの地区",
  heroCopy: "ニューヨークの主要地区を厳選したアトラス。市場、歴史、将来性を簡潔に分析し、高品質な写真で各エリアの個性を伝えます。",
  searchLabel: "検索",
  searchPlaceholder: "例: Harlem, Williamsburg, Astoria",
  regionAll: "すべて",
  statRentTitle: "家賃中央値",
  statRentCopy: "Realtor.com は、2026年3月の募集家賃中央値を月約5,100ドルと報告しました。",
  statIndexCopy: "NYCEDC は2026年4月、StreetEasy の家賃指数がコロナ前水準を明確に上回っていることを示しました。",
  statProfilesCopy: "選択した行政区内で素早く比較できるコンパクトなプロフィール。",
  marketEyebrow: "市場スナップショット",
  marketTitle: "行政区の概要",
  marketCopy: "2つの地区を直接比較する前に、短く市場感をつかめます。",
  statIndexTitle: "家賃指数",
  statProfilesTitle: "プロフィール",
  sourcesPrefix: "価格と市場に関する注記は、以下の公開指標に基づいています:",
  sourcesSuffix: "および Wikipedia の地区データ。本サイトは不動産助言の代替ではありません。",
  compareEyebrow: "2つの地区",
  compareTitle: "地区を比較",
  compareFirst: "1つ目の地区",
  compareSecond: "2つ目の地区",
  comparePrice: "価格水準",
  compareRent: "家賃帯",
  compareFuture: "将来性",
  compareCharacter: "雰囲気",
  compareProjects: "プロジェクト",
  compareEvents: "イベント",
  chooseEyebrow: "地区を選ぶ",
  neighborhoodsTitle: "地区",
  analysisEyebrow: "分析",
  emptyTitle: "カードを選択してください。",
  emptyCopy: "ここに歴史、価格水準、将来動向、短い雰囲気チェックが表示されます。",
  sourcesTitle: "出典と背景",
  rentLabel: "家賃目安",
  monthLabel: "月",
  priceLevel: "価格水準",
  rentFact: "家賃",
  futureFact: "将来性",
  noResults: "一致する地区が見つかりません。",
  analysisOverview: "詳細な背景",
  analysisHistory: "歴史",
  analysisPrices: "価格",
  analysisFuture: "未来",
  analysisProjects: "建物とプロジェクト",
  analysisEvents: "イベントと文化",
  analysisExpectation: "将来見通し",
  analysisCharacter: "雰囲気",
  tripPageTitle: "ニューヨーク Trip Planner",
  tripNavContext: "Trip Planner",
  tripHeroTitle: "あなたに合うニューヨークの地区を見つける",
  tripHeroCopy: "予算、立地、ナイトライフ、観光名所、レストランに合わせて滞在を計画。アトラスが適した地区を提案し、Booking.com のホテル検索へ案内します。",
  tripSectionAria: "ニューヨーク旅行を計画",
  tripEyebrow: "旅行プロフィール",
  tripQuestion: "何を重視しますか？",
  tripPrioritiesTitle: "あなたの優先条件",
  tripPrioritiesCopy: "ニューヨーク旅行で重視することを選んでください。おすすめは選択した行政区と旅行スタイルに合わせて調整されます。",
  tripPrioritiesAria: "旅行の優先条件",
  tripAttractionsTitle: "必ず見たいものは？",
  tripAttractionsAria: "選択した観光名所",
  tripBoroughLabel: "行政区",
  tripBoroughAll: "すべての行政区",
  tripBudgetLabel: "予算",
  tripBudgetBalanced: "バランス重視",
  tripBudgetBudget: "価格重視",
  tripBudgetPremium: "プレミアム",
  tripStyleLabel: "旅行スタイル",
  tripStyleFirst: "初めてのニューヨーク",
  tripStyleCulture: "文化と建築",
  tripStyleLocal: "ローカルで落ち着いた旅",
  tripStyleFood: "グルメ重視",
  tripUpdateButton: "おすすめを更新",
  tripUpdateHint: "選択を変更したら、結果を更新してください。",
  tripUpdatePending: "選択が変更されました。「おすすめを更新」をクリックしてください。",
  tripUpdateFresh: "おすすめは最新です。",
  customNeighborhoodLabel: "気になる地区を確認",
  customNeighborhoodNone: "地区が選択されていません",
  customNeighborhoodCopy: "すでに気になる地区がありますか？予算、旅行スタイル、ニューヨークで必ず行きたい場所に合うか確認できます。",
  customResultEyebrow: "地区チェック",
  customResultTitle: "この地区があなたに合うか",
  customDistanceTitle: "目的地までの距離",
  customDistanceEmpty: "観光名所を選ぶと、地区からの距離が表示されます。",
  customBudgetTitle: "予算との相性",
  customStyleTitle: "旅行スタイルとの相性",
  customPriorityTitle: "優先条件との相性",
  hotelNightlyLabel: "ホテル/泊 約",
  recommendationSectionEyebrow: "こちらもおすすめ",
  recommendationSectionTitle: "あなたの旅に合う他の地区",
  recommendationSectionCopy: "これらのおすすめは、あなたの地区チェックを補完し、似た旅行プロフィールに合う洗練された選択肢を示します。",
  customApproxDistance: "約",
  customStrongFit: "とても合う",
  customGoodFit: "合う",
  customLimitedFit: "やや限定的",
  customBudgetGood: "価格水準はあなたの予算に合っています。",
  customBudgetMedium: "価格水準は許容範囲ですが、理想的ではありません。",
  customBudgetWeak: "価格水準は予算との相性が弱めです。",
  customStyleGood: "旅行スタイルは地区の雰囲気に合っています。",
  customStyleMedium: "旅行スタイルは地区に部分的に合っています。",
  customStyleWeak: "旅行スタイルとの相性は限定的です。",
  prefPrice: "価格",
  prefLocation: "立地",
  prefSights: "観光名所",
  prefNightlife: "ナイトライフ",
  prefFood: "レストラン",
  prefQuiet: "静かな滞在",
  hotelBooking: "Booking.com",
  hotelTitle: "合うホテルを検索",
  hotelNote: "リンクは Booking.com の検索を開き、7/10以上の評価を目安にします。空室と価格はそこで最新情報を確認できます。",
  hotelTypeLabel: "ホテルタイプ",
  hotelLocationLabel: "立地",
  hotelComfortLabel: "快適さ",
  hotelAuto: "自動で調整",
  hotelFlexible: "柔軟",
  hotelBestMatch: "最適なバランス",
  hotelBudget: "手頃",
  hotelBoutique: "ブティック",
  hotelLuxury: "ラグジュアリー",
  hotelFamily: "家族向け",
  hotelApartment: "アパート / スイート",
  hotelNearSights: "観光名所に近い",
  hotelNearSubway: "地下鉄に近い",
  hotelNearNightlife: "ナイトライフに近い",
  hotelNearRestaurants: "レストランに近い",
  hotelQuiet: "静かな立地",
  hotelBreakfast: "朝食",
  hotelRating: "高評価",
  hotelView: "眺めがよい",
  hotelDesign: "モダンなデザイン",
  hotelBestIn: "おすすめホテル",
  hotelGoodLocation: "適した立地",
  hotelGoodComfort: "快適な設備",
  sightsHeader: "ハイライト",
  sightsTitle: "必見",
  sightsCopy: "この地区と選択した興味に合う、厳選された立ち寄り先。",
  foodHeader: "グルメ",
  foodTitle: "レストラン",
  foodCopy: "地区に合う具体的な店名やグルメエリア。",
  mapAria: "位置マップ:",
  mapControls: "地図ズーム",
  mapZoomIn: "地区に近づける",
  mapZoomOut: "ズームアウト",
  tripPreviewEyebrow: "Trip Planner",
  tripPreviewTitle: "あなたに合うニューヨークの地区を見つける",
  tripPreviewCopy: "予算、立地、ナイトライフ、観光名所、グルメ重視を選び、合う地区、Booking.com ホテル検索、ハイライト、レストラン案を受け取れます。",
  tripPreviewAction: "Plannerを開く",
  tripPreviewHotels: "地区に合うホテル",
  tripPreviewFood: "と観光名所",
  adAria: "広告",
  adLabel: "広告",
  adCopy: "ここに後で控えめな Google 広告が表示されます。",
  legalAria: "法的情報",
  legalEyebrow: "法的情報",
  legalTitle: "インプリント、プライバシー、Cookie",
  imprintTitle: "インプリント",
  imprintProvider: "§ 5 DDG に基づく提供者情報",
  imprintResponsible: "§ 18 第2項 MStV に基づく編集責任者:",
  imprintDisclaimer: "本サイトはニューヨークの地区に関する編集型情報サービスです。内容は不動産、法律、金融の助言ではありません。",
  privacyTitle: "プライバシーポリシー",
  privacyShort: "プライバシー",
  privacyCopyOne: "インプリントに記載された個人または団体がデータ処理の責任者です。サイト訪問時、ホスティング事業者はIPアドレス、アクセス時刻、ブラウザ種別、要求ファイルなどの技術的アクセスデータを処理する場合があります。",
  privacyCopyTwo: "本サイトは現在、分析ツール、ニュースレター登録、パーソナライズ広告を使用していません。選択言語、行政区、Cookie選択などのローカル設定のみをブラウザに保存します。",
  privacyCopyThree: "本サイトには外部リンクと公開ソースの画像が含まれます。外部コンテンツを開くと、各提供者が独自のアクセスデータを処理する場合があります。広告審査のため Google AdSense を組み込んでいます。将来パーソナライズ広告やアフィリエイト追跡を使用する場合、このポリシーを更新する必要があります。",
  privacyCopyFour: "対象者は法令の範囲内で、アクセス、訂正、削除、処理制限、異議申し立て、データポータビリティの権利を有します。",
  cookiesTitle: "Cookie",
  cookiesCopyOne: "本サイトは、次回訪問時にも言語、行政区選択、Cookie通知を保持するため、ブラウザのローカル設定を保存します。広告審査のため Google AdSense も組み込まれています。",
  cookiesCopyTwo: "将来、パーソナライズ広告、分析ツール、その他の第三者サービスを使用する場合は、実際に選択できる拡張Cookieバナーを追加する必要があります。",
  cookiesReset: "Cookie選択をリセット",
  cookieAria: "Cookie通知",
  cookieTitle: "Cookie通知",
  cookieCopy: "本サイトは、言語、行政区、このCookie決定など必要なローカル設定のみを保存します。Google AdSense は広告用に組み込まれており、パーソナライズ広告は適切な同意後にのみ有効化すべきです。",
  cookieEssential: "必要なもののみ",
  cookieAccept: "OK"
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
    it: `Quartieri di ${currentBorough().name}`,
    ja: `${currentBorough().name}の地区`,
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
    it: `Un atlante curato dei quartieri principali di ${name}, con analisi sintetiche su mercato, storia e futuro e immagini di alta qualità che rivelano il carattere di ogni luogo.`,
    ja: `${name}の主要地区を厳選したアトラス。市場、歴史、将来性を簡潔に分析し、高品質な写真で各エリアの個性を伝えます。`,
    zh: `一份精心策划的 ${name} 重点街区图鉴，结合市场、历史与未来分析，并通过高质量图片呈现每个地方的独特气质。`
  };
  return copy[currentLanguage] || copy.de;
}

function boroughMarketText(borough) {
  const market = {
    Manhattan: {
      de: {
        rentTitle: "Median-Miete Manhattan",
        rentCopy: "Realtor.com meldete für März 2026 eine mediane Angebotsmiete von etwa 5.100 Dollar pro Monat.",
        indexCopy: "NYCEDC zeigte im April 2026 einen StreetEasy Rent Index deutlich über Vor-Covid-Niveau."
      },
      en: {
        rentTitle: "Median rent Manhattan",
        rentCopy: "Realtor.com reported a median asking rent of about $5,100 per month for March 2026.",
        indexCopy: "In April 2026, NYCEDC showed a StreetEasy rent index clearly above its pre-Covid level."
      },
      es: {
        rentTitle: "Renta mediana Manhattan",
        rentCopy: "Realtor.com informó una renta mediana solicitada de unos 5.100 dólares al mes en marzo de 2026.",
        indexCopy: "En abril de 2026, NYCEDC mostró un índice de renta de StreetEasy claramente por encima del nivel previo al Covid."
      },
      fr: {
        rentTitle: "Loyer médian Manhattan",
        rentCopy: "Realtor.com a signalé un loyer médian demandé d'environ 5 100 dollars par mois en mars 2026.",
        indexCopy: "En avril 2026, NYCEDC montrait un indice de loyers StreetEasy nettement au-dessus du niveau pré-Covid."
      },
      pt: {
        rentTitle: "Aluguel mediano Manhattan",
        rentCopy: "A Realtor.com informou um aluguel mediano pedido de cerca de US$ 5.100 por mês em março de 2026.",
        indexCopy: "Em abril de 2026, a NYCEDC mostrou um índice de aluguel StreetEasy claramente acima do nível pré-Covid."
      },
      it: {
        rentTitle: "Affitto mediano Manhattan",
        rentCopy: "Realtor.com ha indicato per marzo 2026 un affitto mediano richiesto di circa 5.100 dollari al mese.",
        indexCopy: "Ad aprile 2026 NYCEDC mostrava un indice degli affitti StreetEasy nettamente sopra il livello pre-Covid."
      },
      ja: {
        rentTitle: "マンハッタンの家賃中央値",
        rentCopy: "Realtor.com は、2026年3月の募集家賃中央値を月約5,100ドルと報告しました。",
        indexCopy: "NYCEDC は2026年4月、StreetEasy の家賃指数がコロナ前水準を明確に上回っていることを示しました。"
      },
      zh: {
        rentTitle: "曼哈顿租金中位数",
        rentCopy: "Realtor.com 报告称，2026 年 3 月挂牌租金中位数约为每月 5,100 美元。",
        indexCopy: "NYCEDC 在 2026 年 4 月显示，StreetEasy 租金指数明显高于疫情前水平。"
      }
    },
    Brooklyn: {
      de: {
        rentTitle: "Median-Miete Brooklyn",
        rentCopy: "Brooklyn zeigt große Spannen: Premiumlagen am Wasser liegen deutlich über vielen südlichen und östlichen Wohnlagen.",
        indexCopy: "Der Mietdruck bleibt besonders in North Brooklyn, Brownstone Brooklyn und gut angebundenen Transitlagen hoch."
      },
      en: {
        rentTitle: "Median rent Brooklyn",
        rentCopy: "Brooklyn has wide ranges: premium waterfront areas sit far above many southern and eastern residential neighborhoods.",
        indexCopy: "Rent pressure remains especially high in North Brooklyn, Brownstone Brooklyn and well-connected transit locations."
      },
      es: {
        rentTitle: "Renta mediana Brooklyn",
        rentCopy: "Brooklyn muestra grandes diferencias: las zonas premium junto al agua superan claramente a muchos barrios residenciales del sur y este.",
        indexCopy: "La presión de renta sigue alta en North Brooklyn, Brownstone Brooklyn y zonas bien conectadas por transporte."
      },
      fr: {
        rentTitle: "Loyer médian Brooklyn",
        rentCopy: "Brooklyn présente de grands écarts : les secteurs premium au bord de l'eau dépassent largement de nombreux quartiers résidentiels du sud et de l'est.",
        indexCopy: "La pression locative reste forte à North Brooklyn, Brownstone Brooklyn et dans les secteurs bien reliés aux transports."
      },
      pt: {
        rentTitle: "Aluguel mediano Brooklyn",
        rentCopy: "Brooklyn tem grandes diferenças: áreas premium à beira d'água ficam bem acima de muitos bairros residenciais ao sul e leste.",
        indexCopy: "A pressão de aluguel segue alta em North Brooklyn, Brownstone Brooklyn e áreas bem conectadas por transporte."
      },
      it: {
        rentTitle: "Affitto mediano Brooklyn",
        rentCopy: "Brooklyn mostra ampie differenze: le aree premium sul waterfront superano molti quartieri residenziali a sud e a est.",
        indexCopy: "La pressione sugli affitti resta alta soprattutto a North Brooklyn, Brownstone Brooklyn e nelle zone ben collegate."
      },
      ja: {
        rentTitle: "ブルックリンの家賃中央値",
        rentCopy: "ブルックリンは幅が大きく、ウォーターフロントの高級エリアは南部・東部の住宅地区を大きく上回ります。",
        indexCopy: "北ブルックリン、Brownstone Brooklyn、交通アクセスの良い場所では家賃圧力が特に高い状態です。"
      },
      zh: {
        rentTitle: "布鲁克林租金中位数",
        rentCopy: "布鲁克林差异很大：高端水岸区域明显高于南部和东部许多住宅街区。",
        indexCopy: "北布鲁克林、Brownstone Brooklyn 以及交通便利区域的租金压力仍然很高。"
      }
    },
    Queens: {
      de: {
        rentTitle: "Median-Miete Queens",
        rentCopy: "Queens reicht von LIC-Premiumlagen bis zu deutlich ruhigeren, familienorientierten Märkten im Osten und Süden.",
        indexCopy: "Transit, Flughafennähe, internationale Handelszentren und neue Waterfront-Projekte treiben die Entwicklung."
      },
      en: {
        rentTitle: "Median rent Queens",
        rentCopy: "Queens ranges from LIC premium locations to much quieter, family-oriented markets in the east and south.",
        indexCopy: "Transit, airport proximity, international commercial centers and new waterfront projects drive development."
      },
      es: {
        rentTitle: "Renta mediana Queens",
        rentCopy: "Queens va desde zonas premium en LIC hasta mercados mucho más tranquilos y familiares en el este y sur.",
        indexCopy: "El transporte, la cercanía a aeropuertos, centros comerciales internacionales y nuevos proyectos waterfront impulsan el desarrollo."
      },
      fr: {
        rentTitle: "Loyer médian Queens",
        rentCopy: "Queens va des emplacements premium de LIC à des marchés bien plus calmes et familiaux à l'est et au sud.",
        indexCopy: "Les transports, la proximité des aéroports, les pôles commerciaux internationaux et les nouveaux projets au bord de l'eau stimulent l'évolution."
      },
      pt: {
        rentTitle: "Aluguel mediano Queens",
        rentCopy: "Queens vai das áreas premium de LIC a mercados muito mais tranquilos e familiares no leste e sul.",
        indexCopy: "Transporte, proximidade dos aeroportos, centros comerciais internacionais e novos projetos à beira d'água impulsionam o desenvolvimento."
      },
      it: {
        rentTitle: "Affitto mediano Queens",
        rentCopy: "Queens va dalle aree premium di LIC a mercati molto più tranquilli e familiari a est e a sud.",
        indexCopy: "Trasporti, vicinanza agli aeroporti, centri commerciali internazionali e nuovi progetti sul waterfront guidano lo sviluppo."
      },
      ja: {
        rentTitle: "クイーンズの家賃中央値",
        rentCopy: "クイーンズはLICの高級立地から、東部・南部のより静かで家族向けの市場まで幅があります。",
        indexCopy: "交通、空港への近さ、国際的な商業拠点、新しいウォーターフロント開発が成長を支えています。"
      },
      zh: {
        rentTitle: "皇后区租金中位数",
        rentCopy: "皇后区从 LIC 的高端地段到东部、南部更安静且适合家庭的市场都有。",
        indexCopy: "交通、机场距离、国际商业中心和新的水岸项目推动发展。"
      }
    },
    Bronx: {
      de: {
        rentTitle: "Median-Miete Bronx",
        rentCopy: "Die Bronx bleibt im Vergleich erreichbar, zeigt aber starke Unterschiede zwischen Waterfront-Wachstum und ruhigen Wohnlagen.",
        indexCopy: "Große Hebel sind Transit, bezahlbarer Wohnungsbau, Kulturinvestitionen und einzelne Schlüsselprojekte wie Kingsbridge Armory."
      },
      en: {
        rentTitle: "Median rent Bronx",
        rentCopy: "The Bronx remains comparatively accessible, but shows strong differences between waterfront growth and quieter residential areas.",
        indexCopy: "Key levers are transit, affordable housing, cultural investment and individual anchor projects such as Kingsbridge Armory."
      },
      es: {
        rentTitle: "Renta mediana Bronx",
        rentCopy: "El Bronx sigue siendo relativamente accesible, pero muestra fuertes diferencias entre crecimiento waterfront y zonas residenciales tranquilas.",
        indexCopy: "Los grandes motores son transporte, vivienda asequible, inversión cultural y proyectos clave como Kingsbridge Armory."
      },
      fr: {
        rentTitle: "Loyer médian Bronx",
        rentCopy: "Le Bronx reste relativement accessible, mais montre de forts écarts entre croissance au bord de l'eau et quartiers résidentiels plus calmes.",
        indexCopy: "Les grands leviers sont les transports, le logement abordable, l'investissement culturel et des projets clés comme Kingsbridge Armory."
      },
      pt: {
        rentTitle: "Aluguel mediano Bronx",
        rentCopy: "O Bronx continua relativamente acessível, mas mostra fortes diferenças entre crescimento waterfront e áreas residenciais tranquilas.",
        indexCopy: "Os grandes motores são transporte, moradia acessível, investimento cultural e projetos-chave como Kingsbridge Armory."
      },
      it: {
        rentTitle: "Affitto mediano Bronx",
        rentCopy: "Il Bronx resta relativamente accessibile, ma mostra forti differenze tra crescita del waterfront e zone residenziali tranquille.",
        indexCopy: "Le leve principali sono trasporti, edilizia accessibile, investimenti culturali e progetti chiave come Kingsbridge Armory."
      },
      ja: {
        rentTitle: "ブロンクスの家賃中央値",
        rentCopy: "ブロンクスは比較的手が届きやすい一方、ウォーターフロントの成長地域と静かな住宅地で差があります。",
        indexCopy: "交通、手頃な住宅、文化投資、Kingsbridge Armory のような重要プロジェクトが主な要因です。"
      },
      zh: {
        rentTitle: "布朗克斯租金中位数",
        rentCopy: "布朗克斯整体仍较易负担，但水岸增长区与安静住宅区之间差异明显。",
        indexCopy: "主要驱动力包括交通、可负担住房、文化投资以及 Kingsbridge Armory 等关键项目。"
      }
    },
    "Staten Island": {
      de: {
        rentTitle: "Median-Miete Staten Island",
        rentCopy: "Staten Island ist stärker haus-, küsten- und fährorientiert und bleibt meist günstiger als die inneren Bezirke.",
        indexCopy: "North-Shore-Entwicklung, Küstenresilienz und Fährnähe sind die wichtigsten Zukunftsfaktoren."
      },
      en: {
        rentTitle: "Median rent Staten Island",
        rentCopy: "Staten Island is more house-, coast- and ferry-oriented and usually remains cheaper than the inner boroughs.",
        indexCopy: "North Shore development, coastal resilience and ferry access are the most important future factors."
      },
      es: {
        rentTitle: "Renta mediana Staten Island",
        rentCopy: "Staten Island se orienta más a casas, costa y ferry, y suele seguir siendo más barata que los boroughs interiores.",
        indexCopy: "El desarrollo de North Shore, la resiliencia costera y la cercanía al ferry son los principales factores futuros."
      },
      fr: {
        rentTitle: "Loyer médian Staten Island",
        rentCopy: "Staten Island est davantage orienté maisons, côte et ferry, et reste généralement moins cher que les boroughs centraux.",
        indexCopy: "Le développement de North Shore, la résilience côtière et l'accès au ferry sont les principaux facteurs d'avenir."
      },
      pt: {
        rentTitle: "Aluguel mediano Staten Island",
        rentCopy: "Staten Island é mais orientada a casas, costa e ferry, e geralmente fica mais barata que os boroughs internos.",
        indexCopy: "Desenvolvimento da North Shore, resiliência costeira e acesso ao ferry são os principais fatores futuros."
      },
      it: {
        rentTitle: "Affitto mediano Staten Island",
        rentCopy: "Staten Island è più orientata a case, costa e traghetti e di solito rimane più economica dei distretti centrali.",
        indexCopy: "Sviluppo della North Shore, resilienza costiera e accesso ai traghetti sono i fattori futuri più importanti."
      },
      ja: {
        rentTitle: "スタテンアイランドの家賃中央値",
        rentCopy: "スタテンアイランドは戸建て、海岸、フェリー志向が強く、中心部の行政区より比較的安い傾向があります。",
        indexCopy: "North Shore 開発、沿岸レジリエンス、フェリーアクセスが今後の重要要素です。"
      },
      zh: {
        rentTitle: "史泰登岛租金中位数",
        rentCopy: "史泰登岛更偏向独栋住宅、海岸和渡轮生活，通常比核心行政区更便宜。",
        indexCopy: "North Shore 发展、海岸韧性和渡轮可达性是最重要的未来因素。"
      }
    }
  };
  return market[borough.name]?.[currentLanguage] || market[borough.name]?.de || {
    rentTitle: borough.rentTitle,
    rentCopy: borough.rentCopy,
    indexCopy: borough.indexCopy
  };
}

function updateBoroughInterface() {
  const borough = currentBorough();
  const marketText = boroughMarketText(borough);
  const glance = {
    de: `${borough.name} auf einen Blick`,
    en: `${borough.name} at a glance`,
    es: `${borough.name} de un vistazo`,
    fr: `${borough.name} en un coup d'oeil`,
    pt: `${borough.name} em um olhar`,
    it: `${borough.name} in sintesi`,
    ja: `${borough.name}の概要`,
    zh: `${borough.name} 概览`
  };
  const profileCopy = {
    de: `${borough.neighborhoods.length} ausgewählte Profile in ${borough.name}: kompakt genug zum Vergleichen, ausführlich genug für eine echte Einschätzung.`,
    en: `${borough.neighborhoods.length} selected profiles in ${borough.name}: compact enough to compare, detailed enough for a real first read.`,
    es: `${borough.neighborhoods.length} perfiles seleccionados en ${borough.name}: compactos para comparar y lo bastante detallados para una primera lectura real.`,
    fr: `${borough.neighborhoods.length} profils sélectionnés dans ${borough.name} : assez compacts pour comparer, assez détaillés pour une vraie première lecture.`,
    pt: `${borough.neighborhoods.length} perfis selecionados em ${borough.name}: compactos para comparar e detalhados o bastante para uma primeira leitura real.`,
    it: `${borough.neighborhoods.length} profili selezionati in ${borough.name}: abbastanza compatti per confrontare, abbastanza dettagliati per una prima valutazione reale.`,
    ja: `${borough.name}の厳選プロフィール${borough.neighborhoods.length}件。比較しやすく、最初の判断に十分な詳しさです。`,
    zh: `${borough.name} 的 ${borough.neighborhoods.length} 个精选街区档案：便于比较，也足够深入。`
  };
  document.documentElement.style.setProperty("--hero-image", `url("${borough.heroImage}")`);
  document.title = document.body.classList.contains("trip-page")
    ? t("tripPageTitle")
    : boroughHeroTitle();
  document.querySelectorAll(".nav-context").forEach((element) => {
    element.textContent = t("tripNavContext");
  });
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
    element.textContent = marketText.rentTitle;
  });
  document.querySelectorAll("[data-i18n='statRentCopy']").forEach((element) => {
    element.textContent = marketText.rentCopy;
  });
  document.querySelectorAll("[data-i18n='statIndexCopy']").forEach((element) => {
    element.textContent = marketText.indexCopy;
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
    it: {
      vibe: `${item.name} combina architettura, vita di strada e identità locale in ${item.area}.`,
      future: "trasformazione attiva di lungo periodo",
      description: `${item.name} si comprende meglio attraverso posizione, architettura e ritmo quotidiano. Il quartiere unisce residenza, vita pubblica, riferimenti culturali e domanda immobiliare in un profilo newyorkese distinto.`,
      history: `${item.name} si è sviluppato attraverso diversi strati della storia di New York: assi di trasporto, crescita residenziale, immigrazione, commercio, istituzioni culturali e successive ondate di reinvestimento. Questi strati restano visibili nella griglia stradale, nei tipi edilizi e nelle attività locali.`,
      prices: `La fascia di affitto di circa $${item.rent} al mese è un punto di orientamento pratico. I prezzi reali variano molto in base a edificio, luce, ascensore, servizi, accesso alla metro e vicinanza a parchi o waterfront. Il livello relativo dei prezzi qui è ${item.price}.`,
      outlook: `${item.name} probabilmente continuerà a evolversi grazie a domanda abitativa, miglioramenti dello spazio pubblico, resilienza climatica, accesso ai trasporti e cambiamento commerciale. Il futuro dipende da investimenti che sostengano anche la vita quotidiana del quartiere.`,
      developments: `La pressione di sviluppo intorno a ${item.name} è determinata da ristrutturazioni selettive, nuove abitazioni dove la zonizzazione lo permette, spazi pubblici migliorati e progetti istituzionali o infrastrutturali vicini. Il cambiamento sarà più visibile lungo i corridoi principali.`,
      events: `La vita culturale di ${item.name} vive di parchi, ristoranti, gallerie, spazi performativi, scuole, mercati ed eventi ricorrenti. Sono questi momenti a trasformare il quartiere in una scena pubblica.`,
      expectation: `La prospettiva più probabile è una domanda continua con cambiamenti disomogenei da isolato a isolato. ${item.name} diventa più forte quando combina mobilità, identità, spazio pubblico e servizi locali stabili.`,
      character: `${item.name} è definito da ${item.vibe.toLowerCase()}. Il suo fascino nasce dall'incontro tra routine quotidiane, architettura e vita a livello strada.`
    },
    ja: {
      vibe: `${item.name}は、${item.area}における建築、通りの活気、地域の個性が重なる地区です。`,
      future: "長期的に変化が続くエリア",
      description: `${item.name}は、立地、建築、日常のリズムを通して理解すると分かりやすい地区です。住宅、公共生活、文化的な拠点、変化する不動産需要が混ざり、ニューヨークらしい独自のプロフィールをつくっています。`,
      history: `${item.name}は、交通軸、住宅の成長、移民、商業、文化施設、その後の再投資という複数の歴史層を通じて発展しました。その層は今も街路、建物のタイプ、地元の店に表れています。`,
      prices: `月約$${item.rent}の家賃帯は実用的な目安です。実際の価格は、建物の築年数、採光、エレベーター、設備、地下鉄へのアクセス、公園や水辺への近さによって大きく変わります。この地区の相対的な価格水準は ${item.price} です。`,
      outlook: `${item.name}は、住宅需要、公共空間の改善、気候レジリエンス、交通アクセス、商業の変化によって今後も進化していく可能性があります。新しい投資が日常の地域生活を支えられるかが重要です。`,
      developments: `${item.name}周辺の開発圧力は、選択的な改修、ゾーニングが許す新住宅、公共空間の改善、近隣のインフラや機関プロジェクトによって形づくられます。変化はすべてのブロックではなく、主要な通り沿いに現れやすいでしょう。`,
      events: `${item.name}の文化的な生活は、公園、レストラン、ギャラリー、パフォーマンススペース、学校、市場、定期的な地域イベントによって支えられています。こうした瞬間に、地区は単なる住宅市場を超えて公共の舞台になります。`,
      expectation: `見通しとしては、需要が続く一方でブロックごとに変化の差が出るでしょう。${item.name}は、移動しやすさ、個性、公共空間、安定した地域サービスを組み合わせるほど価値を高めます。`,
      character: `${item.name}は、${item.vibe.toLowerCase()}という印象で特徴づけられます。日常の動き、建築、通りの生活が交わるところに魅力があります。`
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
      `Die angegebene Mietspanne von etwa $${item.rent} pro Monat ist als Orientierung zu lesen. In New York unterscheiden sich Preise stark nach Gebäudealter, Etage, Licht, Aufzug, Grundriss, U-Bahn-Nähe, Park- oder Wasserblick und Bezirkslage. Zwei Wohnungen im selben Viertel können deshalb völlig verschiedene Märkte bedienen.`,
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
  return Array.from(tripPreferenceButtons)
    .filter((button) => button.classList.contains("active"))
    .map((button) => button.dataset.preference);
}

function selectedAttractions() {
  return Array.from(attractionButtons)
    .filter((button) => button.classList.contains("active"))
    .map((button) => button.dataset.attraction);
}

function setTripPending(isPending) {
  tripHasPendingChanges = isPending;
  tripUpdateButton?.classList.toggle("pending", isPending);
  if (tripUpdateHint) {
    tripUpdateHint.textContent = isPending ? t("tripUpdatePending") : t("tripUpdateFresh");
  }
}

function allTripNeighborhoodEntries() {
  return Object.entries(boroughs).flatMap(([boroughKey, borough]) =>
    borough.neighborhoods.map((item) => ({ boroughKey, boroughName: borough.name, item }))
  );
}

function renderCustomNeighborhoodOptions() {
  if (!customNeighborhoodSelect) return;
  const currentValue = customNeighborhoodSelect.value;
  customNeighborhoodSelect.innerHTML = `
    <option value="">${t("customNeighborhoodNone")}</option>
    ${Object.entries(boroughs)
      .map(
        ([boroughKey, borough]) => `
          <optgroup label="${borough.name}">
            ${borough.neighborhoods
              .map((item) => `<option value="${boroughKey}|${safeAttr(item.name)}">${item.name}</option>`)
              .join("")}
          </optgroup>
        `
      )
      .join("")}
  `;
  if ([...customNeighborhoodSelect.options].some((option) => option.value === currentValue)) {
    customNeighborhoodSelect.value = currentValue;
  }
}

function selectedCustomNeighborhood() {
  const value = customNeighborhoodSelect?.value || "";
  if (!value) return null;
  const [boroughKey, ...nameParts] = value.split("|");
  const name = nameParts.join("|");
  const borough = boroughs[boroughKey];
  const item = borough?.neighborhoods.find((neighborhood) => neighborhood.name === name);
  return item && borough ? { item, boroughName: borough.name } : null;
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
  "rockefeller-center": {
    label: "Rockefeller Center",
    lat: 40.7587,
    lng: -73.9787,
    boroughs: ["Manhattan"],
    neighborhoods: ["Midtown"],
    tags: ["sights", "transit"]
  },
  "grand-central": {
    label: "Grand Central Terminal",
    lat: 40.7527,
    lng: -73.9772,
    boroughs: ["Manhattan"],
    neighborhoods: ["Midtown", "Murray Hill"],
    tags: ["sights", "transit"]
  },
  "nine-eleven": {
    label: "9/11 Memorial",
    lat: 40.7115,
    lng: -74.0134,
    boroughs: ["Manhattan"],
    neighborhoods: ["Financial District", "Battery Park City", "TriBeCa"],
    tags: ["sights", "transit"]
  },
  "bryant-library": {
    label: "Bryant Park & NY Public Library",
    lat: 40.7532,
    lng: -73.9822,
    boroughs: ["Manhattan"],
    neighborhoods: ["Midtown", "Murray Hill"],
    tags: ["sights", "quiet", "transit"]
  },
  "summit-one": {
    label: "SUMMIT One Vanderbilt",
    lat: 40.753,
    lng: -73.9787,
    boroughs: ["Manhattan"],
    neighborhoods: ["Midtown", "Murray Hill"],
    tags: ["sights", "transit"]
  },
  "chelsea-market": {
    label: "Chelsea Market",
    lat: 40.7424,
    lng: -74.0061,
    boroughs: ["Manhattan"],
    neighborhoods: ["Chelsea", "West Village"],
    tags: ["food", "sights"]
  },
  dumbo: {
    label: "DUMBO",
    lat: 40.7033,
    lng: -73.9881,
    boroughs: ["Brooklyn"],
    neighborhoods: ["DUMBO", "Brooklyn Heights", "Williamsburg"],
    tags: ["waterfront", "sights", "food"]
  },
  "brooklyn-bridge-park": {
    label: "Brooklyn Bridge Park",
    lat: 40.7003,
    lng: -73.9967,
    boroughs: ["Brooklyn"],
    neighborhoods: ["DUMBO", "Downtown Brooklyn", "Brooklyn Heights"],
    tags: ["waterfront", "sights", "quiet"]
  },
  "prospect-park": {
    label: "Prospect Park",
    lat: 40.6602,
    lng: -73.969,
    boroughs: ["Brooklyn"],
    neighborhoods: ["Park Slope", "Prospect Heights", "Crown Heights"],
    tags: ["quiet", "sights"]
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
  "moma-ps1": {
    label: "MoMA PS1",
    lat: 40.7455,
    lng: -73.9472,
    boroughs: ["Queens"],
    neighborhoods: ["Long Island City", "Astoria"],
    tags: ["sights", "food"]
  },
  "astoria-park": {
    label: "Astoria Park",
    lat: 40.7794,
    lng: -73.9227,
    boroughs: ["Queens"],
    neighborhoods: ["Astoria", "Long Island City"],
    tags: ["quiet", "waterfront", "sights"]
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
  "botanical-garden": {
    label: "New York Botanical Garden",
    lat: 40.8624,
    lng: -73.8772,
    boroughs: ["Bronx"],
    neighborhoods: ["Fordham", "Belmont", "Riverdale"],
    tags: ["quiet", "sights"]
  },
  "arthur-avenue": {
    label: "Arthur Avenue",
    lat: 40.8544,
    lng: -73.8885,
    boroughs: ["Bronx"],
    neighborhoods: ["Belmont", "Fordham"],
    tags: ["food", "sights"]
  },
  "staten-island-ferry": {
    label: "Staten Island Ferry",
    lat: 40.6437,
    lng: -74.0736,
    boroughs: ["Staten Island", "Manhattan"],
    neighborhoods: ["St. George", "Financial District"],
    tags: ["ferry", "waterfront", "sights"]
  },
  "snug-harbor": {
    label: "Snug Harbor",
    lat: 40.6426,
    lng: -74.1027,
    boroughs: ["Staten Island"],
    neighborhoods: ["Snug Harbor", "St. George", "West Brighton"],
    tags: ["quiet", "sights"]
  },
  "historic-richmond-town": {
    label: "Historic Richmond Town",
    lat: 40.5701,
    lng: -74.1451,
    boroughs: ["Staten Island"],
    neighborhoods: ["New Dorp", "Tottenville", "Great Kills"],
    tags: ["quiet", "sights"]
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
    group_children: "0",
    nflt: "review_score=70"
  });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

const localSightRecommendations = {
  Inwood: ["Inwood Hill Park", "The Cloisters", "Dyckman Farmhouse Museum"],
  "Washington Heights": ["Fort Tryon Park", "United Palace", "George Washington Bridge"],
  "Hamilton Heights": ["Hamilton Grange National Memorial", "City College Campus", "Riverbank State Park"],
  Harlem: ["Apollo Theater", "125th Street", "Strivers' Row"],
  "East Harlem": ["El Museo del Barrio", "Museum of the City of New York", "La Marqueta"],
  "Morningside Heights": ["Columbia University", "Cathedral of St. John the Divine", "Riverside Church"],
  "Upper West Side": ["American Museum of Natural History", "Lincoln Center", "Riverside Park"],
  "Upper East Side": ["The Met", "Guggenheim Museum", "Madison Avenue"],
  "Hell's Kitchen": ["Restaurant Row", "Theater District", "Hudson River Park"],
  Midtown: ["Grand Central Terminal", "Rockefeller Center", "Empire State Building"],
  "Murray Hill": ["The Morgan Library & Museum", "United Nations Headquarters", "Park Avenue"],
  "Kips Bay": ["East River Esplanade", "Bellevue Historic Campus", "NYU Langone Area"],
  Chelsea: ["High Line", "Chelsea Market", "Chelsea Gallery District"],
  "Hudson Yards": ["Edge Observation Deck", "The Shed", "Hudson Yards Public Square"],
  Flatiron: ["Flatiron Building", "Madison Square Park", "Eataly NYC Flatiron"],
  Gramercy: ["Gramercy Park", "The Players", "Irving Plaza"],
  "Greenwich Village": ["Washington Square Park", "Stonewall Inn", "Village Vanguard"],
  "West Village": ["Bleecker Street", "Hudson River Park", "West 4th Street"],
  "East Village": ["St. Mark's Place", "Tompkins Square Park", "Cooper Union"],
  "Lower East Side": ["Tenement Museum", "Essex Market", "Katz's Delicatessen"],
  SoHo: ["Greene Street", "Cast-Iron Historic District", "Haughwout Building"],
  TriBeCa: ["Hudson River Park", "Staple Street Skybridge", "Washington Market Park"],
  Chinatown: ["Doyers Street", "Mott Street", "Columbus Park"],
  NoHo: ["Astor Place", "The Public Theater", "Cooper Union"],
  "Financial District": ["Wall Street", "New York Stock Exchange", "South Street Seaport"],
  "Battery Park City": ["Battery Park", "Brookfield Place", "Wagner Park"],
  Williamsburg: ["Domino Park", "Bedford Avenue", "Brooklyn Brewery"],
  DUMBO: ["Brooklyn Bridge Park", "Washington Street Viewpoint", "Jane's Carousel"],
  "Park Slope": ["Prospect Park", "Brooklyn Museum", "5th Avenue"],
  "Bed-Stuy": ["Stuyvesant Heights Historic District", "Tompkins Avenue", "Herbert Von King Park"],
  Bushwick: ["Bushwick Collective", "House of Yes", "Maria Hernandez Park"],
  "Downtown Brooklyn": ["Brooklyn Borough Hall", "Brooklyn Academy of Music", "DeKalb Market Hall"],
  Greenpoint: ["Transmitter Park", "Manhattan Avenue", "WNYC Transmitter Park Pier"],
  "Coney Island": ["Coney Island Boardwalk", "Luna Park", "New York Aquarium"],
  "Long Island City": ["Gantry Plaza State Park", "MoMA PS1", "Pepsi-Cola Sign"],
  Astoria: ["Museum of the Moving Image", "Astoria Park", "Steinway Street"],
  Flushing: ["Flushing Meadows Corona Park", "Queens Botanical Garden", "New World Mall Food Court"],
  "Jackson Heights": ["Diversity Plaza", "Roosevelt Avenue Food Corridor", "Travers Park"],
  "Forest Hills": ["Forest Hills Stadium", "Austin Street", "Forest Hills Gardens"],
  Jamaica: ["King Manor Museum", "Rufus King Park", "Jamaica Center"],
  "Rockaway Beach": ["Rockaway Beach Boardwalk", "Jacob Riis Park", "Beach 97th Street"],
  Sunnyside: ["Sunnyside Gardens", "Skillman Avenue", "Lou Lodati Park"],
  "Mott Haven": ["Bronx Documentary Center", "Piano District", "Port Morris Waterfront"],
  Concourse: ["Bronx Museum of the Arts", "Grand Concourse", "Yankee Stadium"],
  Fordham: ["Fordham University", "New York Botanical Garden", "Arthur Avenue"],
  Belmont: ["Arthur Avenue Market", "Bronx Zoo", "Our Lady of Mount Carmel Church"],
  Riverdale: ["Wave Hill", "Van Cortlandt Park", "Riverdale Park"],
  Kingsbridge: ["Van Cortlandt Park", "Kingsbridge Armory", "Broadway Retail Corridor"],
  "Throgs Neck": ["Throgs Neck Bridge View", "Ferry Point Park", "Maritime College Waterfront"],
  "City Island": ["City Island Avenue", "Orchard Beach", "City Island Nautical Museum"],
  "St. George": ["Staten Island Ferry", "Empire Outlets", "St. George Theatre"],
  Tompkinsville: ["Sri Lankan Restaurant Row", "Tompkinsville Park", "Staten Island Ferry Terminal"],
  Stapleton: ["Stapleton Waterfront", "Tappen Park", "MakerSpace NYC"],
  "Snug Harbor": ["Snug Harbor Cultural Center", "Chinese Scholar's Garden", "Staten Island Museum"],
  "New Dorp": ["New Dorp Lane", "Miller Field", "Gateway National Recreation Area"],
  Tottenville: ["Conference House Park", "Tottenville Beach", "Historic Richmond Town"],
  "Great Kills": ["Great Kills Park", "Great Kills Harbor", "Gateway National Recreation Area"],
  "West Brighton": ["Staten Island Zoo", "Silver Lake Park", "Forest Avenue"]
};

function isGenericSightTitle(title, item) {
  const cleanTitle = title.toLowerCase();
  const cleanName = item.name.toLowerCase();
  return (
    cleanTitle === cleanName ||
    cleanTitle === `${cleanName}, manhattan` ||
    cleanTitle === `${cleanName}, brooklyn` ||
    cleanTitle === `${cleanName}, queens` ||
    cleanTitle === `${cleanName}, bronx` ||
    cleanTitle === `${cleanName}, staten island` ||
    cleanTitle.includes("district") && cleanTitle.includes(cleanName)
  );
}

function travelSights(item) {
  const named = localSightRecommendations[item.name] || [];
  const gallery = galleryTitles(item).filter((title) => !isGenericSightTitle(title, item));
  const combined = [...named, ...gallery].filter((sight, index, list) => list.indexOf(sight) === index);
  if (combined.length >= 3) return combined.slice(0, 3);
  const fallback = {
    de: [`${item.name} zu Fuß erkunden`, `Lokale Parks und Straßen rund um ${item.area}`, `Architektur, Cafés und öffentliche Räume im Viertel`],
    en: [`Explore ${item.name} on foot`, `Local parks and streets around ${item.area}`, `Architecture, cafes and public spaces in the neighborhood`],
    es: [`Explorar ${item.name} a pie`, `Parques y calles locales alrededor de ${item.area}`, `Arquitectura, cafés y espacios públicos del barrio`],
    fr: [`Explorer ${item.name} à pied`, `Parcs et rues locales autour de ${item.area}`, `Architecture, cafés et espaces publics du quartier`],
    pt: [`Explorar ${item.name} a pé`, `Parques e ruas locais em torno de ${item.area}`, `Arquitetura, cafés e espaços públicos do bairro`],
    it: [`Esplorare ${item.name} a piedi`, `Parchi e strade locali intorno a ${item.area}`, `Architettura, caffè e spazi pubblici del quartiere`],
    ja: [`${item.name}を徒歩で散策`, `${item.area}周辺の公園と通り`, `地区内の建築、カフェ、公共空間`],
    zh: [`步行探索 ${item.name}`, `${item.area} 周边的本地公园和街道`, `街区里的建筑、咖啡馆和公共空间`]
  };
  return (fallback[currentLanguage] || fallback.de).slice(0, 3);
}

function tripContextLine(key, item) {
  const lines = {
    park: {
      de: "Ideal für Spaziergänge, Pausen und einen ruhigeren Moment zwischen den Stadtblöcken.",
      en: "Ideal for walks, breaks and a calmer moment between city blocks.",
      es: "Ideal para paseos, pausas y un momento más tranquilo entre bloques urbanos.",
      fr: "Idéal pour marcher, faire une pause et trouver un moment plus calme entre les rues.",
      pt: "Ideal para caminhadas, pausas e um momento mais tranquilo entre os quarteirões.",
      it: "Ideale per passeggiate, pause e un momento più tranquillo tra gli isolati.",
      ja: "散歩や休憩、街区の間で少し落ち着いた時間を取るのに向いています。",
      zh: "适合散步、短暂停留，在城市街区之间找到更安静的时刻。"
    },
    atmosphere: {
      de: "Am besten mit etwas Zeit einplanen, weil hier besonders viel Atmosphäre und Bewegung entsteht.",
      en: "Best planned with a little time, because this is where atmosphere and movement build up.",
      es: "Conviene planearlo con algo de tiempo, porque aquí se concentra mucha atmósfera y movimiento.",
      fr: "À prévoir avec un peu de temps, car l'atmosphère et le mouvement y sont particulièrement présents.",
      pt: "Vale planejar com um pouco de tempo, porque aqui há muita atmosfera e movimento.",
      it: "Meglio prevedere un po' di tempo, perché qui si concentrano atmosfera e movimento.",
      ja: "雰囲気と人の動きが強く出る場所なので、少し時間を取って訪れるのがおすすめです。",
      zh: "最好预留一些时间，因为这里的氛围和人流最能体现城市感。"
    },
    culture: {
      de: "Gut für Kultur, Architektur und einen hochwertigen Programmpunkt abseits reiner Fotostopps.",
      en: "Good for culture, architecture and a richer stop beyond quick photos.",
      es: "Bueno para cultura, arquitectura y una parada de más calidad que una simple foto.",
      fr: "Intéressant pour la culture, l'architecture et une visite plus riche qu'un simple arrêt photo.",
      pt: "Bom para cultura, arquitetura e uma parada mais rica que apenas uma foto.",
      it: "Adatto a cultura, architettura e a una tappa più ricca di un semplice scatto.",
      ja: "文化や建築を楽しみ、写真だけで終わらない充実した立ち寄り先になります。",
      zh: "适合文化、建筑和比简单拍照更深入的行程点。"
    },
    view: {
      de: "Stark für Ausblicke, Wasserlage und klassische New-York-Fotos.",
      en: "Strong for views, waterfront atmosphere and classic New York photos.",
      es: "Muy bueno para vistas, ambiente junto al agua y fotos clásicas de Nueva York.",
      fr: "Très fort pour les vues, l'ambiance au bord de l'eau et les photos new-yorkaises classiques.",
      pt: "Ótimo para vistas, clima à beira d'água e fotos clássicas de Nova York.",
      it: "Ottimo per viste, atmosfera sul waterfront e foto classiche di New York.",
      ja: "眺望、水辺の雰囲気、ニューヨークらしい写真に強い場所です。",
      zh: "适合看景、水岸氛围和经典纽约照片。"
    },
    food: {
      de: "Passt gut zu einem langsamen Nachmittag mit Essen, Cafés und lokalen Straßen.",
      en: "Works well for a slower afternoon with food, cafes and local streets.",
      es: "Encaja bien con una tarde tranquila de comida, cafés y calles locales.",
      fr: "Convient bien à un après-midi plus lent entre restaurants, cafés et rues locales.",
      pt: "Combina com uma tarde mais lenta com comida, cafés e ruas locais.",
      it: "Si adatta bene a un pomeriggio lento tra cibo, caffè e strade locali.",
      ja: "食事、カフェ、ローカルな通りをゆっくり楽しむ午後に合います。",
      zh: "适合用一个慢下午体验美食、咖啡馆和本地街道。"
    },
    intro: {
      de: `Ein guter Einstieg, um ${item.name} nicht nur als Hotelstandort, sondern als Viertel zu erleben.`,
      en: `A good entry point for experiencing ${item.name} as a neighborhood, not just a hotel base.`,
      es: `Una buena entrada para vivir ${item.name} como barrio, no solo como base de hotel.`,
      fr: `Une bonne entrée pour découvrir ${item.name} comme quartier, pas seulement comme lieu d'hôtel.`,
      pt: `Uma boa porta de entrada para viver ${item.name} como bairro, não apenas como base de hotel.`,
      it: `Un buon punto di partenza per vivere ${item.name} come quartiere, non solo come base per l'hotel.`,
      ja: `${item.name}をホテルの拠点としてだけでなく、地区として体験するための良い入口です。`,
      zh: `这是把 ${item.name} 当作街区而不只是酒店位置来体验的好入口。`
    }
  };
  return lines[key]?.[currentLanguage] || lines[key]?.de || "";
}

function sightContext(sight, item) {
  const lower = sight.toLowerCase();
  if (/central park|prospect park|flushing meadows|park/.test(lower)) {
    return tripContextLine("park", item);
  }
  if (/times square|broadway|yankee|coney/.test(lower)) {
    return tripContextLine("atmosphere", item);
  }
  if (/museum|met|moma|gallery|galerie/.test(lower)) {
    return tripContextLine("culture", item);
  }
  if (/bridge|brücke|dumbo|waterfront|ferry|statue|one world|skyline|seaport/.test(lower)) {
    return tripContextLine("view", item);
  }
  if (/restaurant|food|market|markt|café|cafe|bakery|bäckerei/.test(lower)) {
    return tripContextLine("food", item);
  }
  return tripContextLine("intro", item);
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

const restaurantRecommendations = {
  Inwood: ["Indian Road Cafe", "Dyckman Street Restaurants", "Garden Cafe"],
  "Washington Heights": ["Malecon", "Tung Thong Thai", "Fort Washington Avenue Cafes"],
  "Hamilton Heights": ["The Grange", "Harlem Public", "Fumo Harlem"],
  Harlem: ["Red Rooster Harlem", "Sylvia's", "Melba's"],
  "East Harlem": ["Patsy's Pizzeria", "Cascalote Latin Bistro", "La Marqueta Food Stalls"],
  "Morningside Heights": ["Community Food & Juice", "Hungarian Pastry Shop", "Pisticci"],
  "Upper West Side": ["Zabar's", "Jacob's Pickles", "Cafe Luxembourg"],
  "Upper East Side": ["Sant Ambroeus", "Lexington Candy Shop", "The Penrose"],
  "Hell's Kitchen": ["Restaurant Row", "Pure Thai Cookhouse", "Empanada Mama", "Becco", "Gotham West Market"],
  Midtown: ["Keens Steakhouse", "Bryant Park Grill", "Koreatown BBQ Spots"],
  "Murray Hill": ["Curry Hill Restaurants", "Sarge's Deli", "The Morgan Cafe"],
  "Kips Bay": ["Thai Villa Area", "Second Avenue Casual Dining", "East River Cafes"],
  Chelsea: ["Chelsea Market", "Los Tacos No. 1", "Cookshop"],
  "Hudson Yards": ["Mercado Little Spain", "Electric Lemon", "Hudson Yards Dining"],
  Flatiron: ["Eataly NYC Flatiron", "Shake Shack Madison Square Park", "ABC Kitchen"],
  Gramercy: ["Gramercy Tavern", "Union Square Cafe", "Daily Provisions"],
  "Greenwich Village": ["Carbone", "Minetta Tavern", "Mamoun's Falafel"],
  "West Village": ["Bleecker Street Pizza", "Via Carota", "Don Angie"],
  "East Village": ["Veselka", "St. Mark's Place Ramen", "Superiority Burger"],
  "Lower East Side": ["Katz's Delicatessen", "Russ & Daughters", "Essex Market"],
  SoHo: ["Balthazar", "Dominique Ansel Bakery", "Fanelli Cafe"],
  TriBeCa: ["Locanda Verde", "Bubby's", "Frenchette"],
  Chinatown: ["Nom Wah Tea Parlor", "Doyers Street Dim Sum", "Mott Street Noodle Shops"],
  NoHo: ["Lafayette", "Il Buco", "Atla"],
  "Financial District": ["Stone Street", "Eataly Downtown", "Fraunces Tavern"],
  "Battery Park City": ["Hudson Eats", "El Vez", "Brookfield Place Dining"],
  Williamsburg: ["Lilia", "Sunday in Brooklyn", "Peter Luger"],
  DUMBO: ["Time Out Market New York", "Juliana's Pizza", "Celestine"],
  "Park Slope": ["Al Di La Trattoria", "5th Avenue Restaurants", "Pasta Louise"],
  "Bed-Stuy": ["Saraghina", "Peaches", "Tompkins Avenue Cafes"],
  Bushwick: ["Roberta's", "Bunna Cafe", "Tortilleria Mexicana Los Hermanos"],
  "Downtown Brooklyn": ["DeKalb Market Hall", "Junior's", "BAM Area Restaurants"],
  Greenpoint: ["Paulie Gee's", "Karczma", "Manhattan Avenue Bakeries"],
  "Coney Island": ["Nathan's Famous", "Totonno's Pizzeria", "Boardwalk Seafood Spots"],
  "Long Island City": ["Casa Enrique", "Gantry Plaza Cafes", "Jackson Avenue Dining"],
  Astoria: ["Taverna Kyclades", "Steinway Street Eats", "Astoria Seafood"],
  Flushing: ["New World Mall Food Court", "White Bear", "Nan Xiang Xiao Long Bao"],
  "Jackson Heights": ["Jackson Diner", "Arepa Lady", "Roosevelt Avenue Momos"],
  "Forest Hills": ["Nick's Bistro", "Austin Street Restaurants", "Forest Hills Bagels"],
  Jamaica: ["Sybil's Bakery", "The Door", "Jamaica Avenue Caribbean Spots"],
  "Rockaway Beach": ["Rippers", "Uma's", "Boardwalk Tacos"],
  Sunnyside: ["Sotto Le Stelle", "Skillman Avenue Cafes", "Sunnyside Pizza Spots"],
  "Mott Haven": ["Beatstro", "Mottley Kitchen", "Charlie's Bar & Kitchen"],
  Concourse: ["Yankee Tavern", "Feeding Tree", "Grand Concourse Cafes"],
  Fordham: ["Arthur Avenue Nearby", "Fordham Road Eats", "Bronx Little Italy Cafes"],
  Belmont: ["Arthur Avenue Retail Market", "Zero Otto Nove", "Madonia Bakery"],
  Riverdale: ["Jake's Steakhouse", "Liebman's Deli", "Riverdale Avenue Cafes"],
  Kingsbridge: ["Broadway Diner Spots", "Kingsbridge Social Club", "Van Cortlandt Cafes"],
  "Throgs Neck": ["Ice House Cafe", "Patricia's of Tremont", "Waterfront Seafood Spots"],
  "City Island": ["Johnny's Reef", "Sammy's Fish Box", "City Island Lobster House"],
  "St. George": ["Beso", "Enoteca Maria", "Empire Outlets Dining"],
  Tompkinsville: ["Lakruwana", "Lanka Grocery", "Sri Lankan Restaurant Row"],
  Stapleton: ["Seppe Pizza Bar", "Stapleton Waterfront Dining", "Tappen Park Cafes"],
  "Snug Harbor": ["Snug Harbor Cafe", "Randall Manor Restaurants", "Forest Avenue Spots"],
  "New Dorp": ["New Dorp Lane Restaurants", "Lee's Tavern", "Staten Island Mall Area Dining"],
  Tottenville: ["Angelina's Ristorante", "Conference House Park Cafes", "Tottenville Main Street Eats"],
  "Great Kills": ["Marina Cafe", "Great Kills Harbor Restaurants", "Hylan Boulevard Spots"],
  "West Brighton": ["Denino's Pizzeria", "Forest Avenue Restaurants", "Staten Island Zoo Area Cafes"]
};

function restaurantContext(place, item) {
  const foodLines = {
    market: {
      de: "Gut, wenn du mehrere Küchen an einem Ort vergleichen möchtest.",
      en: "Good when you want to compare several cuisines in one place.",
      es: "Bueno si quieres comparar varias cocinas en un solo lugar.",
      fr: "Bien si vous voulez comparer plusieurs cuisines au même endroit.",
      pt: "Bom para comparar várias cozinhas em um só lugar.",
      it: "Utile se vuoi confrontare più cucine in un unico posto.",
      ja: "一か所で複数の料理を比べたいときに向いています。",
      zh: "适合在一个地方比较多种菜系。"
    },
    casual: {
      de: "Perfekt für einen unkomplizierten, typischen New-York-Stopp.",
      en: "Perfect for an easy, classic New York stop.",
      es: "Perfecto para una parada neoyorquina sencilla y típica.",
      fr: "Parfait pour un arrêt new-yorkais simple et typique.",
      pt: "Perfeito para uma parada simples e típica de Nova York.",
      it: "Perfetto per una tappa newyorkese semplice e classica.",
      ja: "気軽でニューヨークらしい定番の立ち寄りにぴったりです。",
      zh: "适合轻松、典型的纽约停留。"
    },
    planned: {
      de: "Eher für ein geplantes Essen mit etwas mehr Zeit und Atmosphäre.",
      en: "Better for a planned meal with a little more time and atmosphere.",
      es: "Mejor para una comida planificada con algo más de tiempo y ambiente.",
      fr: "Plutôt pour un repas prévu avec un peu plus de temps et d'atmosphère.",
      pt: "Melhor para uma refeição planejada com mais tempo e atmosfera.",
      it: "Meglio per un pasto programmato con un po' più di tempo e atmosfera.",
      ja: "少し時間を取り、雰囲気も楽しむ食事に向いています。",
      zh: "更适合预留时间、带一点氛围感的用餐。"
    },
    wander: {
      de: "Eine gute Gegend zum Schlendern und spontan Auswählen.",
      en: "A good area for strolling and choosing spontaneously.",
      es: "Una buena zona para pasear y elegir espontáneamente.",
      fr: "Un bon secteur pour se promener et choisir spontanément.",
      pt: "Uma boa área para passear e escolher espontaneamente.",
      it: "Una buona zona per passeggiare e scegliere spontaneamente.",
      ja: "歩きながらその場で選ぶのに良いエリアです。",
      zh: "适合边逛边临时选择。"
    },
    default: {
      de: `Eine passende Food-Adresse, um den Charakter von ${item.name} auch kulinarisch zu erleben.`,
      en: `A fitting food address for experiencing the character of ${item.name} through dining.`,
      es: `Una dirección gastronómica adecuada para vivir el carácter de ${item.name} también a través de la comida.`,
      fr: `Une adresse gastronomique adaptée pour découvrir aussi le caractère de ${item.name} par la cuisine.`,
      pt: `Um endereço gastronômico adequado para sentir o caráter de ${item.name} também pela comida.`,
      it: `Un indirizzo gastronomico adatto per vivere il carattere di ${item.name} anche attraverso il cibo.`,
      ja: `食を通して${item.name}の個性を感じるのに合うグルメスポットです。`,
      zh: `一个适合通过美食感受 ${item.name} 气质的地点。`
    }
  };
  const foodLine = (key) => foodLines[key]?.[currentLanguage] || foodLines[key]?.de;
  const lower = place.toLowerCase();
  if (/market|food court|hall|eataly|hudson eats|dekalb/.test(lower)) {
    return foodLine("market");
  }
  if (/pizza|pizzeria|tacos|falafel|burger|deli|bakery|bagel|noodle|ramen|dim sum|momos/.test(lower)) {
    return foodLine("casual");
  }
  if (/steak|tavern|trattoria|bistro|ristorante|cafe|café|kitchen/.test(lower)) {
    return foodLine("planned");
  }
  if (/row|avenue|street|spots|restaurants|dining|cafes|eats/.test(lower)) {
    return foodLine("wander");
  }
  return foodLine("default");
}

function restaurantsMarkup(restaurants, item) {
  return `
    <div class="food-list">
      ${restaurants
        .map(
          (restaurant, index) => `
            <article class="food-item">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>${restaurant}</strong>
                <p>${restaurantContext(restaurant, item)}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function normalizeRecommendationName(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function restaurantIdeas(item, excluded = []) {
  const blocked = new Set(excluded.map(normalizeRecommendationName));
  if (restaurantRecommendations[item.name]) {
    return restaurantRecommendations[item.name]
      .filter((restaurant) => !blocked.has(normalizeRecommendationName(restaurant)))
      .slice(0, 3);
  }
  const tags = travelTags(item);
  if (item.name === "Chinatown" || item.name === "Flushing") {
    const ideas = {
      de: ["Dim Sum und Noodle-Spots", "Food-Courts und Bäckereien", "Abendessen entlang der Hauptstraßen"],
      en: ["Dim sum and noodle spots", "Food courts and bakeries", "Dinner along the main streets"],
      es: ["Dim sum y locales de noodles", "Food courts y panaderías", "Cena en las calles principales"],
      fr: ["Dim sum et adresses de nouilles", "Food courts et boulangeries", "Dîner le long des rues principales"],
      pt: ["Dim sum e casas de noodles", "Food courts e padarias", "Jantar nas ruas principais"],
      it: ["Dim sum e noodle bar", "Food court e panetterie", "Cena lungo le strade principali"],
      ja: ["点心と麺料理の店", "フードコートとベーカリー", "メイン通り沿いのディナー"],
      zh: ["点心和面馆", "美食广场和烘焙店", "主街沿线晚餐"]
    };
    return (ideas[currentLanguage] || ideas.de)
      .filter((restaurant) => !blocked.has(normalizeRecommendationName(restaurant)));
  }
  if (item.name === "Belmont") {
    const ideas = {
      de: ["Arthur-Avenue-Italiener", "Bäckereien und Feinkostläden", "Klassische Familienrestaurants"],
      en: ["Arthur Avenue Italian restaurants", "Bakeries and specialty food shops", "Classic family restaurants"],
      es: ["Italianos de Arthur Avenue", "Panaderías y tiendas gourmet", "Restaurantes familiares clásicos"],
      fr: ["Restaurants italiens d'Arthur Avenue", "Boulangeries et épiceries fines", "Restaurants familiaux classiques"],
      pt: ["Italianos da Arthur Avenue", "Padarias e delicatessens", "Restaurantes familiares clássicos"],
      it: ["Ristoranti italiani di Arthur Avenue", "Panetterie e gastronomie", "Classici ristoranti familiari"],
      ja: ["Arthur Avenueのイタリアン", "ベーカリーとデリ", "昔ながらの家族経営レストラン"],
      zh: ["Arthur Avenue 意大利餐厅", "烘焙店和熟食店", "经典家庭餐厅"]
    };
    return (ideas[currentLanguage] || ideas.de)
      .filter((restaurant) => !blocked.has(normalizeRecommendationName(restaurant)));
  }
  if (tags.has("nightlife")) {
    const ideas = {
      de: ["Dinner vor dem Ausgehen", "Cocktailbars und späte Küche", "Brunch-Spots am nächsten Morgen"],
      en: ["Dinner before going out", "Cocktail bars and late-night food", "Brunch spots the next morning"],
      es: ["Cena antes de salir", "Coctelerías y comida tarde", "Brunch al día siguiente"],
      fr: ["Dîner avant de sortir", "Bars à cocktails et cuisine tardive", "Brunch le lendemain"],
      pt: ["Jantar antes de sair", "Bares de coquetéis e comida tarde", "Brunch no dia seguinte"],
      it: ["Cena prima di uscire", "Cocktail bar e cucina fino a tardi", "Brunch la mattina dopo"],
      ja: ["出かける前のディナー", "カクテルバーと深夜の食事", "翌朝のブランチ"],
      zh: ["出门前晚餐", "鸡尾酒吧和深夜餐食", "第二天早午餐"]
    };
    return (ideas[currentLanguage] || ideas.de)
      .filter((restaurant) => !blocked.has(normalizeRecommendationName(restaurant)));
  }
  if (tags.has("food")) {
    const ideas = {
      de: ["Lokale Restaurants statt Hotelrestaurant", "Cafés für Frühstück", "Food-Märkte und kleine Spezialitätenläden"],
      en: ["Local restaurants instead of hotel dining", "Breakfast cafes", "Food markets and small specialty shops"],
      es: ["Restaurantes locales en lugar del hotel", "Cafés para desayunar", "Mercados gastronómicos y tiendas pequeñas"],
      fr: ["Restaurants locaux plutôt que l'hôtel", "Cafés pour le petit-déjeuner", "Marchés alimentaires et petites boutiques"],
      pt: ["Restaurantes locais em vez do hotel", "Cafés para café da manhã", "Mercados de comida e pequenas lojas"],
      it: ["Ristoranti locali invece dell'hotel", "Caffè per la colazione", "Mercati gastronomici e piccole specialità"],
      ja: ["ホテルではなく地元のレストラン", "朝食向けカフェ", "フードマーケットと小さな専門店"],
      zh: ["本地餐厅而不是酒店餐厅", "早餐咖啡馆", "美食市场和小型特色店"]
    };
    return (ideas[currentLanguage] || ideas.de)
      .filter((restaurant) => !blocked.has(normalizeRecommendationName(restaurant)));
  }
  const ideas = {
    de: ["Nachbarschaftscafés", "Casual Dinner in Laufnähe", "Bäckereien, Delis und einfache Lunch-Spots"],
    en: ["Neighborhood cafes", "Casual dinner within walking distance", "Bakeries, delis and easy lunch spots"],
    es: ["Cafés de barrio", "Cena informal a pie", "Panaderías, delis y lugares sencillos para comer"],
    fr: ["Cafés de quartier", "Dîner simple à distance de marche", "Boulangeries, delis et adresses faciles pour déjeuner"],
    pt: ["Cafés de bairro", "Jantar casual a pé", "Padarias, delis e lugares simples para almoço"],
    it: ["Caffè di quartiere", "Cena casual raggiungibile a piedi", "Panetterie, deli e pranzi semplici"],
    ja: ["地区のカフェ", "徒歩圏内のカジュアルディナー", "ベーカリー、デリ、気軽なランチスポット"],
    zh: ["街区咖啡馆", "步行可达的轻松晚餐", "烘焙店、熟食店和简餐地点"]
  };
  return (ideas[currentLanguage] || ideas.de)
    .filter((restaurant) => !blocked.has(normalizeRecommendationName(restaurant)));
}

const hotelFilterOptions = {
  type: {
    "best-match": { labelKey: "hotelBestMatch", query: "best hotels" },
    budget: { labelKey: "hotelBudget", query: "budget hotels" },
    boutique: { labelKey: "hotelBoutique", query: "boutique hotels" },
    luxury: { labelKey: "hotelLuxury", query: "luxury hotels" },
    family: { labelKey: "hotelFamily", query: "family friendly hotels" },
    apartment: { labelKey: "hotelApartment", query: "apartment suites" }
  },
  location: {
    auto: null,
    sights: { labelKey: "hotelNearSights", query: "near attractions" },
    subway: { labelKey: "hotelNearSubway", query: "near subway station" },
    nightlife: { labelKey: "hotelNearNightlife", query: "near nightlife" },
    restaurants: { labelKey: "hotelNearRestaurants", query: "near restaurants" },
    quiet: { labelKey: "hotelQuiet", query: "quiet area" }
  },
  comfort: {
    flexible: null,
    breakfast: { labelKey: "hotelBreakfast", query: "breakfast included" },
    rating: { labelKey: "hotelRating", query: "highly rated" },
    view: { labelKey: "hotelView", query: "city view" },
    design: { labelKey: "hotelDesign", query: "modern design hotel" }
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
  const typeLabel = profile.type?.labelKey ? t(profile.type.labelKey) : t("hotelBestMatch");
  const locationLabel = profile.location?.labelKey ? t(profile.location.labelKey) : t("hotelGoodLocation");
  const comfortLabel = profile.comfort?.labelKey ? t(profile.comfort.labelKey) : t("hotelGoodComfort");
  return [
    {
      label: ["zh", "ja"].includes(currentLanguage) ? `${t("hotelBestIn")} ${item.name}` : `${typeLabel} ${t("hotelBestIn")} ${item.name}`,
      query: base,
      primary: true
    },
    {
      label: locationLabel,
      query: `${base} ${profile.location?.query || "central location"}`,
      primary: false
    },
    {
      label: comfortLabel,
      query: `${base} ${profile.comfort?.query || "highly rated hotel"}`,
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
    <div class="hotel-filter-grid" aria-label="${t("hotelTitle")}">
      ${hotelSelectMarkup("type", t("hotelTypeLabel"), [
        { value: "best-match", label: t("hotelBestMatch") },
        { value: "budget", label: t("hotelBudget") },
        { value: "boutique", label: t("hotelBoutique") },
        { value: "luxury", label: t("hotelLuxury") },
        { value: "family", label: t("hotelFamily") },
        { value: "apartment", label: t("hotelApartment") }
      ])}
      ${hotelSelectMarkup("location", t("hotelLocationLabel"), [
        { value: "auto", label: t("hotelAuto") },
        { value: "sights", label: t("hotelNearSights") },
        { value: "subway", label: t("hotelNearSubway") },
        { value: "nightlife", label: t("hotelNearNightlife") },
        { value: "restaurants", label: t("hotelNearRestaurants") },
        { value: "quiet", label: t("hotelQuiet") }
      ])}
      ${hotelSelectMarkup("comfort", t("hotelComfortLabel"), [
        { value: "flexible", label: t("hotelFlexible") },
        { value: "breakfast", label: t("hotelBreakfast") },
        { value: "rating", label: t("hotelRating") },
        { value: "view", label: t("hotelView") },
        { value: "design", label: t("hotelDesign") }
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
    <div class="trip-map" data-map-level="0" data-center-lat="${coords[0]}" data-center-lng="${coords[1]}" aria-label="${t("mapAria")} ${item.name}">
      <div class="trip-map-tiles" aria-hidden="true">${tripMapTiles(viewport)}</div>
      <div class="trip-map-overlay" aria-hidden="true"></div>
      ${attractionMarkers}
      <span class="trip-map-marker neighborhood" data-lat="${coords[0]}" data-lng="${coords[1]}" style="--x: ${neighborhood.x}%; --y: ${neighborhood.y}%;">
        <span>${item.name}</span>
      </span>
      <div class="trip-map-controls" aria-label="${t("mapControls")}">
        <button type="button" data-map-zoom="in" aria-label="${t("mapZoomIn")}">+</button>
        <button type="button" data-map-zoom="out" aria-label="${t("mapZoomOut")}">-</button>
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

function distanceKm(from, to) {
  const radius = 6371;
  const toRad = (value) => (value * Math.PI) / 180;
  const dLat = toRad(to[0] - from[0]);
  const dLng = toRad(to[1] - from[1]);
  const lat1 = toRad(from[0]);
  const lat2 = toRad(to[0]);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function fitLabel(score) {
  if (score >= 105) return t("customStrongFit");
  if (score >= 74) return t("customGoodFit");
  return t("customLimitedFit");
}

function budgetFitText(item, budget) {
  const level = item.price.length;
  const strong =
    budget === "budget" ? level <= 2 :
    budget === "premium" ? level >= 4 :
    level === 3;
  const medium =
    budget === "budget" ? level === 3 :
    budget === "premium" ? level === 3 :
    level === 2 || level === 4;
  return strong ? t("customBudgetGood") : medium ? t("customBudgetMedium") : t("customBudgetWeak");
}

function styleFitText(item, style) {
  const tags = travelTags(item);
  const strong =
    style === "first-time" ? tags.has("sights") || tags.has("transit") :
    style === "culture" ? tags.has("sights") :
    style === "local" ? tags.has("quiet") || tags.has("food") :
    style === "food" ? tags.has("food") :
    false;
  const medium = tags.has("sights") || tags.has("transit") || tags.has("food") || tags.has("quiet");
  return strong ? t("customStyleGood") : medium ? t("customStyleMedium") : t("customStyleWeak");
}

function priorityFitMarkup(item, boroughName, preferences) {
  const labels = {
    price: t("prefPrice"),
    location: t("prefLocation"),
    sights: t("prefSights"),
    nightlife: t("prefNightlife"),
    food: t("prefFood"),
    quiet: t("prefQuiet")
  };
  const checks = preferences.length ? preferences : ["location", "sights"];
  return checks
    .map((preference) => {
      const score = tripScore(item, [preference], "balanced", "first-time", boroughName, []);
      const good = score >= 72;
      return `<span class="custom-fit-pill${good ? " good" : ""}">${labels[preference] || preference}: ${good ? t("customGoodFit") : t("customLimitedFit")}</span>`;
    })
    .join("");
}

function attractionDistanceMarkup(item, attractions) {
  const coords = neighborhoodCoords[item.name];
  const selected = attractions
    .map((key) => attractionMap[key])
    .filter((attraction) => attraction?.lat && attraction?.lng);
  if (!coords || !selected.length) {
    return `<p class="custom-empty">${t("customDistanceEmpty")}</p>`;
  }
  return `
    <div class="custom-distance-list">
      ${selected
        .map((attraction) => ({
          attraction,
          distance: distanceKm(coords, [attraction.lat, attraction.lng])
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 8)
        .map(
          ({ attraction, distance }) => `
            <div>
              <span>${attraction.label}</span>
              <strong>${t("customApproxDistance")} ${distance.toFixed(distance < 10 ? 1 : 0)} km</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function estimatedHotelNightlyPrice(item, boroughName) {
  const priceByLevel = {
    1: 150,
    2: 210,
    3: 285,
    4: 390,
    5: 560
  };
  const boroughFactor = {
    Manhattan: 1.24,
    Brooklyn: 1,
    Queens: 0.86,
    Bronx: 0.76,
    "Staten Island": 0.72
  };
  const base = priceByLevel[item.price.length] || 285;
  const adjusted = base * (boroughFactor[boroughName] || 1);
  return Math.round(adjusted / 10) * 10;
}

function customNeighborhoodMarkup(selection, preferences, attractions, budget, style) {
  if (!selection) return "";
  const { item, boroughName } = selection;
  const localized = localizedNeighborhood(item, extendedProfiles[item.name]);
  const score = tripScore(item, preferences, budget, style, boroughName, attractions);
  const hotelPrice = estimatedHotelNightlyPrice(item, boroughName);
  const mapAttractions = attractions.length ? attractions : [];
  return `
    <article class="trip-result-card custom-neighborhood-card">
      <div class="trip-result-hero">
        <div>
          <p class="eyebrow">${t("customResultEyebrow")} · ${boroughName}</p>
          <h3>${item.name}</h3>
          <p>${shortText(localized.description, 230)}</p>
          <div class="trip-pill-row">
            <span class="trip-pill">${fitLabel(score)}</span>
            <span class="trip-pill">${t("customBudgetTitle")}: ${item.price}</span>
            <span class="trip-pill">${t("hotelNightlyLabel")} $${hotelPrice}</span>
          </div>
        </div>
      </div>
      ${tripMapMarkup(item, boroughName, mapAttractions)}
      <div class="custom-check-grid">
        <section>
          <span>${t("customBudgetTitle")}</span>
          <p>${budgetFitText(item, budget)}</p>
        </section>
        <section>
          <span>${t("customStyleTitle")}</span>
          <p>${styleFitText(item, style)}</p>
        </section>
        <section>
          <span>${t("customPriorityTitle")}</span>
          <div class="custom-fit-row">${priorityFitMarkup(item, boroughName, preferences)}</div>
        </section>
        <section class="custom-distance-section">
          <span>${t("customDistanceTitle")}</span>
          ${attractionDistanceMarkup(item, attractions)}
        </section>
      </div>
    </article>
  `;
}

function recommendationSectionIntroMarkup(hasCustomSelection) {
  if (!hasCustomSelection) return "";
  return `
    <div class="recommendation-section-intro">
      <span>${t("recommendationSectionEyebrow")}</span>
      <div>
        <h3>${t("recommendationSectionTitle")}</h3>
        <p>${t("recommendationSectionCopy")}</p>
      </div>
    </div>
  `;
}

function renderTripPlanner() {
  if (!tripOutput) return;

  const preferences = selectedTripPreferences();
  const attractions = selectedAttractions();
  const budget = tripBudget?.value || "balanced";
  const style = tripStyle?.value || "first-time";
  const customSelection = selectedCustomNeighborhood();
  const scored = variedTripResults(
    tripRecommendationItems()
      .filter(
        ({ item, boroughName }) =>
          !customSelection ||
          item.name !== customSelection.item.name ||
          boroughName !== customSelection.boroughName
      )
      .map(({ item, boroughName }) => ({
        item,
        boroughName,
        score: tripScore(item, preferences, budget, style, boroughName, attractions)
      }))
      .sort((a, b) => b.score - a.score)
  );

  const preferenceLabels = {
    price: t("prefPrice"),
    location: t("prefLocation"),
    sights: t("prefSights"),
    nightlife: t("prefNightlife"),
    food: t("prefFood"),
    quiet: t("prefQuiet")
  };

  const recommendationMarkup = scored
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
                <span>${t("hotelBooking")}</span>
                <h4>${t("hotelTitle")}</h4>
              </div>
              ${hotelControlsMarkup()}
              <div class="hotel-links">${hotelLinksMarkup(links)}</div>
              <div class="trip-note">${t("hotelNote")}</div>
            </div>
            <div class="trip-column sights-column">
              <div class="sights-column-header">
                <span>${t("sightsHeader")}</span>
                <h4>${t("sightsTitle")}</h4>
                <p>${t("sightsCopy")}</p>
              </div>
              ${sightsMarkup(sights, item)}
            </div>
            <div class="trip-column food-column">
              <div class="food-column-header">
                <span>${t("foodHeader")}</span>
                <h4>${t("foodTitle")}</h4>
                <p>${t("foodCopy")}</p>
              </div>
              ${restaurantsMarkup(restaurantIdeas(item, sights), item)}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  const customMarkup = customNeighborhoodMarkup(customSelection, preferences, attractions, budget, style);
  const sectionIntroMarkup = recommendationSectionIntroMarkup(Boolean(customSelection));
  tripOutput.innerHTML = `${customMarkup}${sectionIntroMarkup}${recommendationMarkup}`;
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

function applyLanguage(language, options = {}) {
  currentLanguage = translations[language] ? language : "en";
  if (options.persist) {
    saveLanguage(currentLanguage, Boolean(options.manual));
  }
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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  if (tripUpdateHint) {
    tripUpdateHint.textContent = tripHasPendingChanges ? t("tripUpdatePending") : t("tripUpdateFresh");
  }

  updateBoroughInterface();
  renderRegionSegments();
  renderCards();
  renderCompareSelectors(true);
  renderComparison();
  renderCustomNeighborhoodOptions();
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
  applyLanguage(event.target.value, { persist: true, manual: true });
});
boroughSelect?.addEventListener("change", (event) => {
  selectBorough(event.target.value);
});
compareA?.addEventListener("change", renderComparison);
compareB?.addEventListener("change", renderComparison);
tripPreferenceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    setTripPending(true);
  });
});
attractionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    setTripPending(true);
  });
});
tripBudget?.addEventListener("change", () => setTripPending(true));
tripStyle?.addEventListener("change", () => setTripPending(true));
tripBorough?.addEventListener("change", () => setTripPending(true));
customNeighborhoodSelect?.addEventListener("change", () => setTripPending(true));
tripUpdateButton?.addEventListener("click", () => {
  renderTripPlanner();
  setTripPending(false);
});
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
