// Euro Trip 2026 Interactive App Data and Logic

const tripData = {
  cities: {
    prague: {
      name: "Prague",
      country: "Czech Republic",
      dates: "Sept 29 - Oct 1 (2 Nights)",
      accommodation: [
        {
          name: "Sophie's Hostel (New Town)",
          type: "Boutique Hostel (Private Rooms Available)",
          price: "€120 - €160/night for 4",
          desc: "Chic, clean, and highly rated. Located in a quiet spot of New Town, easy walking distance to Wenceslas Square and public transport.",
          link: "https://www.hostelworld.com/p/hosteldetails.php/Sophie-s-Hostel/Prague/14825"
        },
        {
          name: "Vinohrady Apartments (Airbnb)",
          type: "Entire Rental Apartment",
          price: "€140 - €180/night for 4",
          desc: "Located in Prague's coolest residential neighborhood. Packed with cafes, local pubs, and beautiful parks. 10 mins by tram to Old Town.",
          link: "https://www.airbnb.com"
        }
      ],
      attractions: [
        {
          name: "Beer Spa Prague (New Town)",
          type: "Wellness & Fun",
          cost: "€70 - €90 PP",
          desc: "Relax in hand-carved oak tubs filled with beer ingredients while enjoying unlimited self-serve Pilsner Urquell draft beer. Book at least 2-3 months early!",
          link: "https://www.beerspa-beerland.com/en/prague-new-town/",
          map: "https://maps.google.com/?q=Beer+Spa+Beerland+Prague"
        },
        {
          name: "Kutná Hora & Sedlec Ossuary",
          type: "Excursion (Day Trip)",
          cost: "€15 - €20 PP (Train + Tickets)",
          desc: "Famous 13th-century 'Bone Church' decorated with the bones of 40,000+ people. Only 55 minutes by train from Prague Main Station.",
          link: "https://www.sedlec.info/en/ossuary/",
          map: "https://maps.google.com/?q=Sedlec+Ossuary+Kutna+Hora"
        },
        {
          name: "Cross Club (Holešovice)",
          type: "Nightlife / Clubbing",
          cost: "€5 - €10 entry",
          desc: "A legendary multi-level steampunk/industrial club built from scrap metal, moving gears, and glowing lights. Inexpensive drinks and great vibes.",
          link: "https://www.crossclub.cz/en/",
          map: "https://maps.google.com/?q=Cross+Club+Prague"
        },
        {
          name: "Charles Bridge & Prague Castle",
          type: "Historic Sights",
          cost: "Free (Castle grounds) / €16 (Full tour)",
          desc: "Cross the historic Gothic bridge early in the morning to beat the crowds, then hike up to the largest ancient castle complex in the world.",
          link: "https://www.hrad.cz/en/prague-castle-for-visitors",
          map: "https://maps.google.com/?q=Prague+Castle"
        }
      ],
      food: [
        {
          name: "Lokál Dlouhááá",
          specialty: "Fresh Pilsner Urquell & Classic Czech Pub Food",
          price: "€10 - €15 PP",
          desc: "A massive local hall serving tank beer directly from the cellar and traditional dishes like fried cheese, beef goulash, and dumplings.",
          map: "https://maps.google.com/?q=Lokal+Dlouhaaa+Prague"
        },
        {
          name: "Kantýna",
          specialty: "Butcher-to-Table Meats & Czech Beers",
          price: "€15 - €25 PP",
          desc: "An upscale but casual butcher shop located in a former bank hall. Order your cuts of beef, pork, or bone marrow directly from the counter.",
          map: "https://maps.google.com/?q=Kantyna+Prague"
        },
        {
          name: "Trdelník Stalls",
          specialty: "Chimney Cake",
          price: "€3 - €5",
          desc: "Sweet spit cake topped with cinnamon sugar and walnuts, optionally filled with ice cream. Found all over Prague Old Town.",
          map: "https://maps.google.com/?q=Old+Town+Square+Prague"
        }
      ],
      transit: "Arrive at Prague Airport (PRG) on Sept 29 at 1:15 PM. Take the Airport Express (AE) bus to Main Station (Praha hl.n.) for ~€4 PP (40 mins), or an Uber for ~€20 total. Internal travel: 3-day transit pass for €14 PP covers all trams and metro."
    },
    dresden: {
      name: "Dresden",
      country: "Germany",
      dates: "Oct 1 - Oct 2 (1 Night)",
      accommodation: [
        {
          name: "Lollis Homestay (Neustadt)",
          type: "Vibrant Indie Hostel/Guesthouse",
          price: "€80 - €120/night for 4",
          desc: "An eco-friendly, highly social hostel in the heart of Dresden's artsy Neustadt. Very budget-friendly with kitchen facilities.",
          link: "https://www.lollis-homestay.de/en/"
        },
        {
          name: "Outer Neustadt Airbnb",
          type: "Entire Apartment",
          price: "€100 - €140/night for 4",
          desc: "Modern apartments in the colorful Neustadt neighborhood, giving you easy access to both historic sights and cool night spots.",
          link: "https://www.airbnb.com"
        }
      ],
      attractions: [
        {
          name: "Frauenkirche & Zwinger Palace",
          type: "Historic Sights",
          cost: "Free (Zwinger courtyards) / €10 (Church dome climb)",
          desc: "The rebuilt Baroque Church of Our Lady is a masterpiece. The nearby Zwinger palace complex features gorgeous gardens and fountains.",
          link: "https://www.frauenkirche-dresden.de/en/",
          map: "https://maps.google.com/?q=Frauenkirche+Dresden"
        },
        {
          name: "Kunsthofpassage (Neustadt)",
          type: "Artistic Alleyways",
          cost: "Free",
          desc: "An artistic courtyard network containing buildings with whimsical facades, including the famous 'Courtyard of Elements' that plays music when it rains.",
          link: "https://dresden.de",
          map: "https://maps.google.com/?q=Kunsthofpassage+Dresden"
        },
        {
          name: "Katy's Garage (Neustadt)",
          type: "Nightlife / Beer Garden",
          cost: "Free - €5",
          desc: "A cool outdoor beer garden and rock pub built in an old auto shop. Frequented by locals, cheap drinks, and great classic rock vibes.",
          link: "https://www.katysgarage.de/",
          map: "https://maps.google.com/?q=Katys+Garage+Dresden"
        }
      ],
      food: [
        {
          name: "Watzke am Goldenen Reiter",
          specialty: "Sächsische Kartoffelsuppe (Saxon Potato Soup) & Hausbräu",
          price: "€12 - €18 PP",
          desc: "Traditional microbrewery pub serving hearty Saxon specialties and home-brewed unfiltered Pilsner.",
          map: "https://maps.google.com/?q=Watzke+am+Goldenen+Reiter+Dresden"
        },
        {
          name: "Curry 24",
          specialty: "Currywurst & Fries",
          price: "€5 - €8 PP",
          desc: "Arguably the best fast-casual Currywurst in Dresden. Perfect for a quick, cheap lunch during sightseeing.",
          map: "https://maps.google.com/?q=Curry+24+Dresden"
        }
      ],
      transit: "Prague to Dresden: Direct EuroCity (EC) train takes 2h 15m. Cost is about €15-€25 PP if booked early. Internal travel: Dresden is extremely walkable, but a group day ticket for trams is €11 total for the whole group."
    },
    munich: {
      name: "Munich",
      country: "Germany",
      dates: "Oct 2 - Oct 4 (2 Nights)",
      accommodation: [
        {
          name: "Hotel Central Dachau",
          type: "Oktoberfest Smart Budget Base",
          price: "€160 - €220/night for 4",
          desc: "Oktoberfest rates in central Munich are €500+. Stay in historic Dachau, just a 25-minute S-Bahn S2 ride directly to Munich Hackerbrücke (Oktoberfest gates). Saves €600+ over 2 nights!",
          link: "https://www.booking.com"
        },
        {
          name: "A&O Hostel München Laim",
          type: "Budget Hostel (Quad Private Room)",
          price: "€250 - €320/night for 4 (Oktoberfest rates)",
          desc: "A budget option located west of central Munich. Quad private rooms with private bath are much cheaper than downtown hotels.",
          link: "https://www.aohostels.com/en/munich/muenchen-laim/"
        }
      ],
      attractions: [
        {
          name: "Oktoberfest (Theresienwiese)",
          type: "Festival & Culture",
          cost: "Free entry (Beers are €14-€16 per Stein)",
          desc: "The largest beer festival in the world. Oct 2-4 is the closing weekend! Skip expensive reservation tents; go early in the morning (by 9 AM) or late afternoon to sit in the free general areas.",
          link: "https://www.oktoberfest.de/en",
          map: "https://maps.google.com/?q=Theresienwiese+Munich"
        },
        {
          name: "Neuschwanstein Castle Day Trip",
          type: "Excursion (Füssen)",
          cost: "€24 PP (Castle entry) + €15 PP (Transit)",
          desc: "The fairytale castle that inspired Disney. Use the DB Bayern-Ticket (Bavarian Regional Pass) for 4 people (€59 total) which covers the round-trip train to Füssen and the local bus to the castle.",
          link: "https://www.neuschwanstein.de/englisch/tourist/",
          map: "https://maps.google.com/?q=Neuschwanstein+Castle"
        },
        {
          name: "Bahnwärter Thiel",
          type: "Nightlife / Techno Club",
          cost: "€10 - €20 entry",
          desc: "A spectacular, alternative cultural site built out of shipping containers, old subway cars, and carnival tents. Fire pits, DJ booths, and incredible visuals.",
          link: "https://www.bahnwaerterthiel.de/",
          map: "https://maps.google.com/?q=Bahnwarter+Thiel+Munich"
        },
        {
          name: "English Garden & Eisbachwelle",
          type: "Scenic / Free Sight",
          cost: "Free",
          desc: "A massive public park, larger than Central Park. Watch local river surfers ride a standing wave (Eisbachwelle) at the southern edge of the garden.",
          link: "https://www.muenchen.de/int/en/sights/parks/english-garden.html",
          map: "https://maps.google.com/?q=Eisbachwelle+Munich"
        }
      ],
      food: [
        {
          name: "Augustiner-Keller Beer Hall",
          specialty: "Schweinsbraten (Pork Roast) & Edelstoff Beer",
          price: "€15 - €25 PP",
          desc: "Munich's oldest beer garden and hall. Highly popular with locals, featuring beer poured from traditional wooden barrels.",
          map: "https://maps.google.com/?q=Augustiner-Keller+Munich"
        },
        {
          name: "Viktualienmarkt Stalls",
          specialty: "Weißwurst, Pretzels & Local Cheeses",
          price: "€5 - €12 PP",
          desc: "A bustling open-air market in the center of Munich. Perfect for grab-and-go gourmet sausages, pretzels, and cheap draft beers at the central beer garden.",
          map: "https://maps.google.com/?q=Viktualienmarkt+Munich"
        }
      ],
      transit: "Dresden to Munich: ICE train takes ~4h 30m with a transfer in Leipzig. Cost €30-€50 PP. Munich to Salzburg: Use the Bayern-Ticket (€59 for 4 people total - only €14.75 PP!) to ride the BRB regional train (1h 45m)."
    },
    salzburg: {
      name: "Salzburg",
      country: "Austria",
      dates: "Oct 4 - Oct 6 (2 Nights)",
      accommodation: [
        {
          name: "Yoho International Youth Hostel",
          type: "Modern Youth Hostel (Private Quad Rooms)",
          price: "€140 - €180/night for 4",
          desc: "Located near Salzburg Main Station. Offers cheap quad private rooms, an on-site bar, and daily screenings of the Sound of Music.",
          link: "https://www.yoho.at/en/"
        },
        {
          name: "Salzburg Old Town Apartment (Airbnb)",
          type: "Entire Rental Apartment",
          price: "€160 - €220/night for 4",
          desc: "Cosy apartments situated in the historical district, within walking distance of Salzburg Cathedral and Mozart's birth house.",
          link: "https://www.airbnb.com"
        }
      ],
      attractions: [
        {
          name: "Eisriesenwelt (Werfen) Ice Caves",
          type: "Excursion (Alpine Cave)",
          cost: "€45 PP (Includes Cable Car & Tour)",
          desc: "The largest ice cave system in the world. Deep inside a mountain with stunning natural ice sculptures. Take a 45-min train to Werfen, shuttle bus, and scenic cable car.",
          link: "https://www.eisriesenwelt.at/en.html",
          map: "https://maps.google.com/?q=Eisriesenwelt+Werfen"
        },
        {
          name: "Hohensalzburg Fortress",
          type: "Historic Castle",
          cost: "€10 (Walk up) / €14 (With Funicular)",
          desc: "One of the largest medieval castles in Europe. Perched high on a hill overlooking the entire city and the surrounding Alps.",
          link: "https://www.salzburg-burgen.at/en/hohensalzburg-castle/",
          map: "https://maps.google.com/?q=Hohensalzburg+Fortress"
        },
        {
          name: "Mirabell Palace & Gardens",
          type: "Scenic Gardens",
          cost: "Free",
          desc: "Geometric grand gardens famously featured in the Sound of Music. Incredible views of the fortress framed by flowers.",
          link: "https://www.salzburg.info/en/sights/top10/mirabell-palace-gardens",
          map: "https://maps.google.com/?q=Mirabell+Palace"
        }
      ],
      food: [
        {
          name: "Balkan Grill Walter",
          specialty: "Original Salzburger Bosna (Spicy Sausage)",
          price: "€4 - €6 PP",
          desc: "A tiny take-away window in an alleyway serving Salzburg's iconic street food since 1950. Grilled pork sausage, onions, parsley, and secret curry spices.",
          map: "https://maps.google.com/?q=Balkan+Grill+Walter+Salzburg"
        },
        {
          name: "Bärenwirt",
          specialty: "Austrian Fried Chicken & Wiener Schnitzel",
          price: "€15 - €22 PP",
          desc: "Est. 1663. Known for serving the best traditional Salzburger Backhendl (fried chicken) and potato salad in the city.",
          map: "https://maps.google.com/?q=Barenwirt+Salzburg"
        },
        {
          name: "Café Tomaselli",
          specialty: "Einspänner Coffee & Apple Strudel",
          price: "€6 - €10 PP",
          desc: "The oldest operating cafe in Austria (since 1700). Order coffee and select pastries from the strolling cake servers.",
          map: "https://maps.google.com/?q=Cafe+Tomaselli+Salzburg"
        }
      ],
      transit: "Munich to Salzburg: Regional train takes 1.5 - 2 hrs using the Bayern-Ticket. Salzburg to Vienna: High-speed Westbahn or ÖBB Railjet takes 2.5 hours. Tickets cost €19-€29 PP if booked in advance."
    },
    vienna: {
      name: "Vienna",
      country: "Austria",
      dates: "Oct 6 - Oct 10 (4 Nights)",
      accommodation: [
        {
          name: "Casa de Kelton Koch",
          type: "Trevor's Cousin's Apartment (Host)",
          price: "€0 (Budget Saver!)",
          desc: "Your primary base in Vienna. Safe, cozy, and completely free lodging for the group. The absolute anchor of your $3,000 budget plan.",
          link: "#"
        }
      ],
      attractions: [
        {
          name: "Schönbrunn Palace",
          type: "Imperial Palace & Gardens",
          cost: "Free (Gardens) / €22 (Grand Tour)",
          desc: "The summer residence of the Habsburg monarchs. Stunning baroque gardens, a hedge maze, and beautiful grand rooms.",
          link: "https://www.schoenbrunn.at/en/",
          map: "https://maps.google.com/?q=Schonbrunn+Palace+Vienna"
        },
        {
          name: "Prater & Riesenrad (Giant Ferris Wheel)",
          type: "Amusement Park & Scenic View",
          cost: "Free park entry / €13.50 for Ferris Wheel",
          desc: "A massive historic amusement park. Ride the 1897 Giant Ferris Wheel for panoramic views of Vienna, or try crazy rollercoasters.",
          link: "https://www.wienerprater.at/en/",
          map: "https://maps.google.com/?q=Wiener+Prater"
        },
        {
          name: "Pratersauna & Flex",
          type: "Nightlife / Clubbing",
          cost: "€10 - €15 entry",
          desc: "Pratersauna is a high-energy club built in a 1960s sauna with an outdoor pool. Flex is a legendary underground club situated inside a subway tunnel along the Danube Canal, famous for drum & bass and techno.",
          link: "https://pratersauna.tv/",
          map: "https://maps.google.com/?q=Pratersauna+Vienna"
        },
        {
          name: "St. Stephen's Cathedral",
          type: "Gothic Cathedral",
          cost: "Free (Main Nave) / €6 (South Tower Climb)",
          desc: "The iconic symbol of Vienna with its colorful tiled roof. Climb the 343 steps of the South Tower for the best central city view.",
          link: "https://www.stephansdom.at/",
          map: "https://maps.google.com/?q=St+Stephens+Cathedral+Vienna"
        }
      ],
      food: [
        {
          name: "Schnitzelwirt",
          specialty: "Giant Wiener Schnitzel (Pork or Turkey)",
          price: "€10 - €15 PP",
          desc: "Locally famous, rustic tavern known for serving dinner-plate sized, perfectly golden Schnitzels. Incredibly budget-friendly.",
          map: "https://maps.google.com/?q=Schnitzelwirt+Vienna"
        },
        {
          name: "Café Central",
          specialty: "Classic Melange Coffee & Kaiserschmarrn",
          price: "€8 - €15 PP",
          desc: "A legendary Viennese café once frequented by Trotsky, Freud, and Peter Altenberg. Gorgeous vaulted architecture and classical piano music.",
          map: "https://maps.google.com/?q=Cafe+Central+Vienna"
        },
        {
          name: "Naschmarkt Food Stalls",
          specialty: "Falafel, Austrian Cheeses & Wine",
          price: "€5 - €15 PP",
          desc: "A 120-stall open-air food market. Walk around, taste free samples, and sit down for a cheap glass of local Grüner Veltliner wine.",
          map: "https://maps.google.com/?q=Naschmarkt+Vienna"
        }
      ],
      transit: "Salzburg to Vienna: Westbahn or ÖBB Railjet (2.5 hrs, ~€25 PP). Vienna has a highly efficient U-Bahn (Metro) system. Buy a 72-hour transit ticket for €17.10 PP to get unlimited travel. Vienna Airport (VIE) is 15-25 mins away via the S-Bahn S7 train (€4.40 PP) for departure on Oct 10 at 11:45 AM."
    }
  },
  
  itinerary: [
    {
      day: "Day 1 (Sept 29)",
      title: "Prague Arrival & Bohemian Welcome",
      events: [
        { time: "13:15", act: "Land in Prague (PRG)", detail: "Grab luggage, take AE bus or Uber to accommodation. Check in, unpack, refresh." },
        { time: "15:00 - 18:00", act: "FREE TIME (3 Hours)", detail: "Wander around Old Town Square, see the Astronomical Clock, get a hot Trdelník chimney cake." },
        { time: "18:30", act: "Dinner at Lokál Dlouhááá", detail: "Classic cheap Czech food and fresh draft tank beer. Try the fried cheese or beef goulash." },
        { time: "21:00", act: "Evening Walk & Drinks", detail: "Walk across the Charles Bridge at night for incredible lit-up views of Prague Castle. Stop by a local pub." }
      ],
      alternatives: ["Sunset at Riegrovy Sady beer garden (beautiful views of the castle)", "Visit the Illusion Art Museum Prague"]
    },
    {
      day: "Day 2 (Sept 30)",
      title: "Beer Spas & Bone Churches",
      events: [
        { time: "09:00 - 13:30", act: "Excursion: Kutná Hora Day Trip", detail: "Take 9:57 train to Kutná Hora hl.n. Visit the Sedlec Ossuary (Bone Church). Return around 1:30 PM." },
        { time: "13:30 - 15:30", act: "FREE TIME & Lunch (2 Hours)", detail: "Get lunch at Kantýna (butcher deli) near Prague Main Station." },
        { time: "16:00 - 17:30", act: "Beer Spa Prague Experience", detail: "Unlimited self-serve beer while soaking in an oak hot tub. Relaxing and fun!" },
        { time: "18:00 - 21:00", act: "FREE TIME (3 Hours)", detail: "Rest, shower, get dinner in the cool Vinohrady neighborhood." },
        { time: "22:00", act: "Nightlife at Cross Club", detail: "Dance the night away in Prague's iconic industrial steampunk venue." }
      ],
      alternatives: ["Prague Castle Inside Tour", "Prague National Museum", "Alternative: Clubbing at Roxy Prague or Epic (for EDM)"]
    },
    {
      day: "Day 3 (Oct 1)",
      title: "Scenic Train to Dresden's Baroque",
      events: [
        { time: "08:30 - 11:00", act: "Train Prague to Dresden", detail: "Catch the direct EuroCity (EC) train (2h 15m) through the beautiful Elbe River Valley. Check into Neustadt hostel/Airbnb." },
        { time: "11:30 - 13:00", act: "Lunch & Walk Neustadt", detail: "Artsy district exploration. Grab a fast Currywurst at Curry 24." },
        { time: "13:00 - 17:00", act: "FREE TIME (4 Hours)", detail: "Explore the historic Altstadt: Frauenkirche and Zwinger Palace gardens. Walk along Brühl's Terrace." },
        { time: "18:30", act: "Dinner at Watzke am Goldenen Reiter", detail: "Saxon potato soup, roasted meats, and home-brewed unfiltered beers." },
        { time: "21:00", act: "Bar Crawl in Neustadt", detail: "Visit Kunsthofpassage bars, then head to Katy's Garage for beers in an old auto shop." }
      ],
      alternatives: ["Dresden Royal Palace & Green Vault Museum", "Walk through Great Garden (Großer Garten)", "Climb Frauenkirche Dome for city views"]
    },
    {
      day: "Day 4 (Oct 2)",
      title: "Munich & Oktoberfest Kickoff",
      events: [
        { time: "08:00 - 13:00", act: "Train Dresden to Munich", detail: "ICE train connection. Check into base (Dachau hotel or Munich hostel)." },
        { time: "13:30 - 15:30", act: "Lunch & Rest (2 Hours)", detail: "Grab quick bites, prep outfits (Dirndl/Lederhosen highly recommended but not required!)" },
        { time: "16:00 - 22:00", act: "Oktoberfest! (Theresienwiese)", detail: "Head straight to the festival grounds. Friday afternoon general tents have great energy. Grab a Stein and enjoy the music." },
        { time: "22:30", act: "Late Snack", detail: "Get roasted almonds, pretzels, or schnitzel rolls from street stalls. S-Bahn back to Dachau/Hostel." }
      ],
      alternatives: ["Explore Marienplatz and Munich Town Hall", "Dinner at Hofbräuhaus instead of festival tents", "Relax in the English Garden"]
    },
    {
      day: "Day 5 (Oct 3)",
      title: "Fairytale Castles & Alpine Scenery",
      events: [
        { time: "08:00 - 14:00", act: "Excursion: Neuschwanstein Castle", detail: "Take regional train to Füssen using the Bayern-Ticket, then local bus to the castle. Tour the majestic interior and view it from Marienbrücke bridge." },
        { time: "14:30 - 17:00", act: "Explore Füssen & Lunch", detail: "Wander this colorful medieval Bavarian town before catching the train back to Munich." },
        { time: "17:00 - 20:00", act: "FREE TIME / Rest (3 Hours)", detail: "Nap and refresh from the busy day." },
        { time: "20:30", act: "Dinner at Augustiner-Keller", detail: "Enjoy traditional Schweinsbraten pork roast and Bavarian beer in a classic wood-paneled hall." },
        { time: "23:00", act: "Alternative Clubbing: Bahnwärter Thiel", detail: "Explore this unique electronic/techno club built from shipping containers." }
      ],
      alternatives: ["Spend the entire day at Oktoberfest", "Visit BMW Welt and Olympic Park", "Nymphenburg Palace tour"]
    },
    {
      day: "Day 6 (Oct 4)",
      title: "Salzburg, River Surfers & Mirabell",
      events: [
        { time: "09:00 - 10:30", act: "River Surfing & English Garden", detail: "Watch the river surfers at Eisbachwelle. Stroll the English Garden." },
        { time: "11:00 - 13:00", act: "Train Munich to Salzburg", detail: "BRB regional train using Bayern-Ticket (1.5 hrs). Check into Yoho hostel/Airbnb." },
        { time: "13:30 - 15:00", act: "Lunch & Mirabell Gardens", detail: "Wander the beautiful manicured gardens where Do-Re-Mi was filmed." },
        { time: "15:00 - 19:00", act: "FREE TIME (4 Hours)", detail: "Explore Salzburg's Old Town, walk Getreidegasse, see Mozart's Birthplace." },
        { time: "19:30", act: "Dinner at Bärenwirt", detail: "Try the best traditional Austrian fried chicken or beef schnitzel." }
      ],
      alternatives: ["Hike up Kapuzinerberg hill for sunset views", "Salzburg Cathedral tour", "Classic Mozart concert in the fortress"]
    },
    {
      day: "Day 7 (Oct 5)",
      title: "Deep into the World's Largest Ice Caves",
      events: [
        { time: "08:30 - 14:00", act: "Excursion: Eisriesenwelt Ice Caves", detail: "Train to Werfen, shuttle bus, and scenic cable car up the mountain. Walk through massive caves carved of solid ice. Return by 2 PM." },
        { time: "14:30 - 18:30", act: "FREE TIME (4 Hours)", detail: "Explore the Hohensalzburg Fortress. Sip coffee at Café Tomaselli." },
        { time: "19:00", act: "Quick Street Dinner: Balkan Grill Walter", specialty: "Famous Bosna sausage", detail: "Grab local street sausage in the arcade." },
        { time: "20:30", act: "Pubs & Drinks", detail: "Head to Shamrock Irish Pub or a local brewery for relaxed beers." }
      ],
      alternatives: ["Salzburg Salt Mines Day Trip", "Sound of Music guided bike tour", "St. Peter's Abbey catacombs"]
    },
    {
      day: "Day 8 (Oct 6)",
      title: "Vienna & Cousin Kelton's Place",
      events: [
        { time: "09:00 - 11:30", act: "Train Salzburg to Vienna", detail: "Comfortable high-speed Westbahn or Railjet train. Arrive in Vienna." },
        { time: "12:00 - 14:00", act: "Check in Casa de Kelton Koch", detail: "Get settled, unpack, catch up with cousin Kelton." },
        { time: "14:00 - 18:00", act: "FREE TIME (4 Hours)", detail: "Walk the Ringstraße, see St. Stephen's Cathedral, get a slice of Sachertorte." },
        { time: "18:30", act: "Dinner at Schnitzelwirt", detail: "Massive, delicious, and budget-friendly Austrian schnitzels." }
      ],
      alternatives: ["Hofburg Palace gardens walk", "Visit the Museumsquartier (MQ)", "Alternative dinner at a local Heuriger wine tavern"]
    },
    {
      day: "Day 9 (Oct 7)",
      title: "Imperial Vienna & Amusement Parks",
      events: [
        { time: "09:00 - 13:00", act: "Schönbrunn Palace & Gardens", detail: "Walk the massive baroque grounds, hike up to the Gloriette monument for views of the city." },
        { time: "13:00 - 14:30", act: "Lunch at Naschmarkt", detail: "Enjoy falafel plates, cheese samples, and cheap local Grüner Veltliner wine." },
        { time: "14:30 - 18:30", act: "FREE TIME (4 Hours)", detail: "Visit the Kunsthistorisches Museum or shop on Mariahilfer Straße." },
        { time: "19:00 - 22:00", act: "Prater Amusement Park", detail: "Ride the Giant Ferris Wheel, eat local pork knuckles at Schweizerhaus, try crazy rollercoasters." }
      ],
      alternatives: ["Belvedere Palace (see Gustav Klimt's 'The Kiss')", "Albertina Museum", "Vienna Zoo (oldest zoo in the world)"]
    },
    {
      day: "Day 10 (Oct 8)",
      title: "Viennese Cafés & Underground Clubbing",
      events: [
        { time: "10:00 - 12:00", act: "Brunch at Café Central", detail: "Enjoy Viennese Melange coffee and Kaiserschmarrn (shredded pancake) in an iconic historic setting." },
        { time: "12:00 - 18:00", act: "FREE TIME (6 Hours)", detail: "Explore Hundertwasserhaus, chill by the Danube Canal graffiti walks, or do some souvenir shopping." },
        { time: "19:00", act: "Dinner with Kelton", detail: "Get recommendations from Kelton, cook at the apartment, or go to a local neighborhood restaurant." },
        { time: "22:00", act: "Vienna Nightlife", detail: "Check out Flex club (underground techno/D&B on the canal) or Pratersauna." }
      ],
      alternatives: ["Take a day trip to Bratislava (only 1 hour by train, very cheap!)", "Visit the Austrian National Library state hall"]
    },
    {
      day: "Day 11 (Oct 9)",
      title: "Alternative Excursion & Farewell Dinner",
      events: [
        { time: "10:00 - 16:00", act: "Bratislava Day Trip / FREE TIME", detail: "Option to take the 1-hr train to Bratislava, Slovakia for cheap eats and castles, or stay in Vienna for last-minute sights." },
        { time: "16:00 - 19:00", act: "Pack & Chill (3 Hours)", detail: "Get bags ready for departure tomorrow." },
        { time: "19:30", act: "Farewell Dinner", detail: "Celebration dinner at a traditional Viennese Heuriger (wine tavern) in Grinzing with local wine." }
      ],
      alternatives: ["Visit the Leopold Museum", "Climb St. Stephen's South Tower", "See an opera at Vienna State Opera (standing room tickets are only €10-€15!)"]
    },
    {
      day: "Day 12 (Oct 10)",
      title: "Vienna Departure",
      events: [
        { time: "08:30", act: "Breakfast & S-Bahn S7 to Airport", detail: "Catch the S-Bahn train from central Vienna to VIE airport. Cost €4.40 PP (25 mins)." },
        { time: "09:30", act: "Arrive at Vienna Airport (VIE)", detail: "Check in 2 hours early. Flight leaves at 11:45 AM." }
      ],
      alternatives: []
    }
  ]
};

// Budget calculator logic
function updateBudgetCalculator() {
  const flightCost = parseFloat(document.getElementById('calc-flight').value) || 0;
  const lodgingCost = parseFloat(document.getElementById('calc-lodging').value) || 0;
  const foodCost = parseFloat(document.getElementById('calc-food').value) || 0;
  const activitiesCost = parseFloat(document.getElementById('calc-activities').value) || 0;
  const transportCost = parseFloat(document.getElementById('calc-transport').value) || 0;
  
  const totalPerPerson = flightCost + lodgingCost + foodCost + activitiesCost + transportCost;
  const totalGroup = totalPerPerson * 4;
  
  document.getElementById('total-per-person').textContent = `$${totalPerPerson.toFixed(2)}`;
  document.getElementById('total-group').textContent = `$${totalGroup.toFixed(2)}`;
  
  const statusEl = document.getElementById('budget-status');
  if (totalPerPerson <= 3000) {
    statusEl.textContent = "Under Budget! 🎉 Ready to live it up!";
    statusEl.className = "status-tag success";
  } else {
    statusEl.textContent = "Over Budget! ⚠️ Consider adjusting lodging or activities.";
    statusEl.className = "status-tag warning";
  }
}
