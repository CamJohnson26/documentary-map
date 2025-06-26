export interface Location {
    lat: number;
    lng: number;
}

export interface EventData {
    title: string;
    description: string;
    location: Location;
    event_start: number; // year
    event_end: number;   // year
}

export const sampleEvents: EventData[] = [
    {
        "title": "Van Gogh by Vincent",
        "description": "Doc weaving Van Gogh’s portraits into a biographical look at his art & struggles over a decade.",
        "location": {
            "lat": 52.1326,
            "lng": 5.2913
        },
        "event_start": 1880,
        "event_end": 1890
    },
    {
        "title": "Titan: The OceanGate Submersible Disaster",
        "description": "Follows the Titan sub implosion, search ops, and safety fallout post-2023 tragedy.",
        "location": {
            "lat": 41.7344,
            "lng": -49.9424
        },
        "event_start": 2023,
        "event_end": 2025
    },
    {
        "title": "Grenfell: Uncovered",
        "description": "Forensic look at Grenfell fire, systemic failures, survivor voices, and inquiry findings.",
        "location": {
            "lat": 51.52,
            "lng": -0.226
        },
        "event_start": 2017,
        "event_end": 2024
    },
    {
        "title": "Africa Addio",
        "description": "Doc of African decolonization, violence & wildlife decline post-empire.",
        "location": {
            "lat": -1.2921,
            "lng": 36.8219
        },
        "event_start": 1960,
        "event_end": 1965
    },
    {
        "title": "Squid Game: Making Season 2",
        "description": "Behind-the-scenes of Squid Game S2 production in Korea with creators, cast and design team.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "Making Squid Game: The Challenge",
        "description": "Behind-the-scenes of reality show “Squid Game: The Challenge” production.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Surviving Ohio State",
        "description": "Investigates abuse at Ohio State by Dr. Strauss & victims’ fight for justice.",
        "location": {
            "lat": 39.9612,
            "lng": -82.9988
        },
        "event_start": 1979,
        "event_end": 2025
    },
    {
        "title": "Trainwreck: Poop Cruise",
        "description": "Doc on Carnival cruise that lost power & plumbing in 2013, stranding 4,000+ amid filth.",
        "location": {
            "lat": 25.7617,
            "lng": -80.1918
        },
        "event_start": 2013,
        "event_end": 2013
    },
    {
        "title": "Trainwreck: The Astroworld Tragedy",
        "description": "Doc of 2021 Astroworld disaster and legal aftermath in Houston.",
        "location": {
            "lat": 29.7604,
            "lng": -95.3698
        },
        "event_start": 2021,
        "event_end": 2025
    },
    {
        "title": "Ocean with David Attenborough",
        "description": "Attenborough explores marine biomes & global conservation efforts leading into UN Ocean Conference.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2023,
        "event_end": 2025
    },
    {
        "title": "Sally",
        "description": "Chronicles Sally Ride’s space missions & personal life posthumously revealed.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1983,
        "event_end": 2012
    },
    {
        "title": "Karol G: Tomorrow Was Beautiful",
        "description": "Karol G's intimate global tour doc, mixing live shows, recording, and reflection.",
        "location": {
            "lat": 4.711,
            "lng": -74.0721
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "Trainwreck: Mayor of Mayhem",
        "description": "Chronicles Rob Ford’s controversial Toronto mayoralty and personal downfall.",
        "location": {
            "lat": 43.6532,
            "lng": -79.3832
        },
        "event_start": 2010,
        "event_end": 2014
    },
    {
        "title": "A Deadly American Marriage",
        "description": "Investigates Jason Corbett’s death & trial of his American wife and her father in Ireland.",
        "location": {
            "lat": 53.6056,
            "lng": -6.6514
        },
        "event_start": 2015,
        "event_end": 2020
    },
    {
        "title": "Implosion: The Titanic Sub Disaster",
        "description": "Detailed doc on Titan sub tragedy, search and regulation fallout after 2023.",
        "location": {
            "lat": 41.7344,
            "lng": -49.9424
        },
        "event_start": 2023,
        "event_end": 2025
    },
    {
        "title": "Air Force Elite: Thunderbirds",
        "description": "Inside look at USAF Thunderbirds' airshow & training season across America.",
        "location": {
            "lat": 33.897,
            "lng": -117.281
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "The Twister: Caught in the Storm",
        "description": "Was the Titan implosion more than an accident? Survivors & experts dig into what really happened.",
        "location": {
            "lat": 41.7344,
            "lng": -49.9424
        },
        "event_start": 2023,
        "event_end": 2025
    },
    {
        "title": "Jurassic Greatest Moments: Jurassic Park to Jurassic World",
        "description": "“Jurassic” cast reflects on saga from Park to World with behind-scenes insights & impact.",
        "location": {
            "lat": 34.0928,
            "lng": -118.3287
        },
        "event_start": 1993,
        "event_end": 2022
    },
    {
        "title": "Stormy",
        "description": "Daniels recounts scandal aftermath, threats, reinvention & advocacy in intimate Peacock doc.",
        "location": {
            "lat": 32.7767,
            "lng": -96.797
        },
        "event_start": 2018,
        "event_end": 2024
    },
    {
        "title": "Becoming Led Zeppelin",
        "description": "Official doc on Zeppelin’s early years, ’60s scene, and breakthrough after 1968 formation.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1960,
        "event_end": 1970
    },
    {
        "title": "The Walking Dead: The Return",
        "description": "Cast returns to Walking Dead sites in Georgia for reflections and behind-scenes memories.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2010,
        "event_end": 2022
    },
    {
        "title": "Money Shot: The Pornhub Story",
        "description": "Investigative doc tracing Pornhub’s rise, legal scrutiny, and activist outcry.",
        "location": {
            "lat": 45.5017,
            "lng": -73.5673
        },
        "event_start": 2007,
        "event_end": 2023
    },
    {
        "title": "Daughters",
        "description": "Follows four girls preparing for prison father-daughter dance in D.C., exploring bonds & emotion.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Jackass Number Two",
        "description": "Outrageous sequel with escalating stunts and pranks by the original Jackass crew.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2005,
        "event_end": 2006
    },
    {
        "title": "1",
        "description": "Explores F1’s deadliest era through driver stories and push for safety in 1950s–60s.",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1950,
        "event_end": 1970
    },
    {
        "title": "Chaos: The Manson Murders",
        "description": "Investigates Manson cult’s 1969 killings and links to conspiracy theories and mind control.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1969,
        "event_end": 1969
    },
    {
        "title": "Encanto at the Hollywood Bowl",
        "description": "Cast of Encanto reunites live at Hollywood Bowl for music & celebration.",
        "location": {
            "lat": 34.1122,
            "lng": -118.3391
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Bono: Stories of Surrender",
        "description": "Bono reflects on music, activism, family and soul in this revealing doc.",
        "location": {
            "lat": 53.3498,
            "lng": -6.2603
        },
        "event_start": 1976,
        "event_end": 2025
    },
    {
        "title": "Paris Is Burning",
        "description": "Groundbreaking look at Harlem’s drag-ball scene and LGBTQ+ subculture in the 1980s.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1983,
        "event_end": 1990
    },
    {
        "title": "Super/Man: The Christopher Reeve Story",
        "description": "Covers Christopher Reeve’s life, paralysis, and legacy as a disability advocate.",
        "location": {
            "lat": 40.7608,
            "lng": -111.891
        },
        "event_start": 1995,
        "event_end": 2004
    },
    {
        "title": "Piece by Piece",
        "description": "Animated doc tells Pharrell’s story from youth to global icon using LEGO & interviews.",
        "location": {
            "lat": 36.8529,
            "lng": -75.978
        },
        "event_start": 1969,
        "event_end": 2024
    },
    {
        "title": "The Social Dilemma",
        "description": "Examines social media’s psychological and social toll through expert insights and dramatizations.",
        "location": {
            "lat": 37.3875,
            "lng": -122.0575
        },
        "event_start": 2005,
        "event_end": 2020
    },
    {
        "title": "Making of The Last of Us",
        "description": "Behind-the-scenes of HBO’s TLOU show, with cast, crew, and effects creation.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Power of Grayskull: The Definitive History of He‑Man...",
        "description": "Covers origins, popularity, and legacy of He-Man franchise.",
        "location": {
            "lat": 43.6532,
            "lng": -79.3832
        },
        "event_start": 1981,
        "event_end": 2017
    },
    {
        "title": "Selena Gomez: My Mind & Me",
        "description": "Tracks Selena Gomez’s mental health journey and career across six challenging years.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2016,
        "event_end": 2022
    },
    {
        "title": "BTS: Yet to Come in Cinemas",
        "description": "BTS concert doc featuring hits and intimate stage moments from Busan show.",
        "location": {
            "lat": 35.1796,
            "lng": 129.0756
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Jackie Chan: My Story",
        "description": "Explores Jackie Chan’s stunt legacy, career philosophy, and global rise.",
        "location": {
            "lat": 22.3193,
            "lng": 114.1694
        },
        "event_start": 1971,
        "event_end": 1998
    },
    {
        "title": "The Game Changers",
        "description": "Athletes & scientists explore plant-based diets’ effects on strength, recovery, and health.",
        "location": {
            "lat": 36.1699,
            "lng": -115.1398
        },
        "event_start": 2010,
        "event_end": 2019
    },
    {
        "title": "Billie Eilish: The World's a Little Blurry",
        "description": "Tracks Billie Eilish’s debut album journey and rise from teen artist to global sensation.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Kevin Hart: What Now?",
        "description": "Kevin Hart’s massive 2015 stadium stand-up show, filmed at Lincoln Financial Field.",
        "location": {
            "lat": 39.9009,
            "lng": -75.1681
        },
        "event_start": 2015,
        "event_end": 2016
    },
    {
        "title": "Behind the Curtain: Stranger Things: The First Shadow",
        "description": "Follows the creative process behind Stranger Things stage play in London and Broadway.",
        "location": {
            "lat": 51.5133,
            "lng": -0.1337
        },
        "event_start": 2023,
        "event_end": 2025
    },
    {
        "title": "The Remarkable Life of Ibelin",
        "description": "Tells a late gamer’s story through WoW friends and family, revealing his virtual and personal worlds.",
        "location": {
            "lat": 59.9139,
            "lng": 10.7522
        },
        "event_start": 2000,
        "event_end": 2020
    },
    {
        "title": "Senna",
        "description": "Charts Ayrton Senna’s racing legacy and spiritual journey until his fatal 1994 crash.",
        "location": {
            "lat": -23.5505,
            "lng": -46.6333
        },
        "event_start": 1984,
        "event_end": 1994
    },
    {
        "title": "Deaf President Now!",
        "description": "Chronicles the historic Deaf rights protest for university leadership equality.",
        "location": {
            "lat": 38.9081,
            "lng": -76.9944
        },
        "event_start": 1988,
        "event_end": 1988
    },
    {
        "title": "Unacknowledged",
        "description": "UFO doc by Dr. Greer presenting testimonies, footage, and theories of secrecy.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2017
    },
    {
        "title": "Fat Fiction",
        "description": "Questions decades of anti-fat dietary advice through interviews with doctors and researchers.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 1950,
        "event_end": 2020
    },
    {
        "title": "The Bloody Hundredth",
        "description": "WWII airmen recount missions with 100th Bomb Group and legacy that inspired “Masters of the Air.”",
        "location": {
            "lat": 52.4246,
            "lng": 1.1583
        },
        "event_start": 1942,
        "event_end": 1945
    },
    {
        "title": "Fiddler: A Miracle of Miracles",
        "description": "Explores Fiddler’s cultural roots, global reach, and decades-long popularity since its 1964 debut.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1964,
        "event_end": 2019
    },
    {
        "title": "Pangolin: Kulu's Journey",
        "description": "A baby pangolin’s rescue, rehab, and release, showing hope for endangered species.",
        "location": {
            "lat": -22.5597,
            "lng": 17.0832
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "Love Thy Nature",
        "description": "Nature doc showing human disconnection and a call to reconnect with Earth.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2000,
        "event_end": 2016
    },
    {
        "title": "Blink",
        "description": "Follows family racing to see the world before children lose their sight from genetic condition.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "The Pigeon Tunnel",
        "description": "David Cornwell (le Carré) reflects on MI6 past and spy fiction legacy in final interviews.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1931,
        "event_end": 2023
    },
    {
        "title": "Freedom From Choice",
        "description": "Reveals how lobbyists and policy-makers limited Americans' choices via regulation.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2014
    },
    {
        "title": "In Broad Daylight: The Narvarte Case",
        "description": "Investigates unsolved murders and institutional cover-ups in Mexico City’s Narvarte case.",
        "location": {
            "lat": 19.3907,
            "lng": -99.1455
        },
        "event_start": 2015,
        "event_end": 2022
    },
    {
        "title": "We Are X",
        "description": "Chronicles X Japan’s rise, heartbreaks, and reinvention into global rock legends.",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 1982,
        "event_end": 2016
    },
    {
        "title": "Waltz with Bashir",
        "description": "Animated doc exploring memory and trauma from 1982 Lebanon War through Israeli veterans.",
        "location": {
            "lat": 32.0853,
            "lng": 34.7818
        },
        "event_start": 1982,
        "event_end": 2008
    },
    {
        "title": "Grand Theft Hamlet",
        "description": "Comedy-doc about staging Hamlet entirely in Grand Theft Auto with real-world stakes.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2020,
        "event_end": 2024
    },
    {
        "title": "After Porn Ends",
        "description": "Former adult stars reflect on leaving porn and rebuilding life outside the industry.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1990,
        "event_end": 2012
    },
    {
        "title": "Girls State",
        "description": "Teen girls form government and debate democracy at Missouri’s 2023 Girls State.",
        "location": {
            "lat": 38.5767,
            "lng": -92.1735
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Tawai: A Voice from the Forest",
        "description": "Bruce Parry explores nomadic tribes, examining human-nature disconnection and deep listening.",
        "location": {
            "lat": -1.4691,
            "lng": 114.2524
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Jackass: The Movie",
        "description": "Wild, irreverent stunts by the Jackass crew filmed in LA and Japan.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2001,
        "event_end": 2002
    },
    {
        "title": "Tokyo Olympiad",
        "description": "Montage doc of 1964 Tokyo Olympics, focusing on the athletes’ physical and emotional effort.",
        "location": {
            "lat": 35.6762,
            "lng": 139.6503
        },
        "event_start": 1964,
        "event_end": 1964
    },
    {
        "title": "Messi",
        "description": "Biopic-style doc recounting Messi’s life, career, and key turning points through cinematic vignettes.",
        "location": {
            "lat": -32.9587,
            "lng": -60.693
        },
        "event_start": 1987,
        "event_end": 2014
    },
    {
        "title": "The Lost Children",
        "description": "Four Indigenous children survive jungle crash, guided by ancestral knowledge, sparking global search.",
        "location": {
            "lat": -1.5667,
            "lng": -72.6667
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Harry Potter: A History Of Magic",
        "description": "Behind the scenes of British Library’s magical exhibition, linking Rowling’s world to folklore.",
        "location": {
            "lat": 51.5299,
            "lng": -0.127
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "Don't Die: The Man Who Wants to Live Forever",
        "description": "Bryan Johnson’s biotech experiments in anti-aging and immortality pursuits push science’s limits.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "Avatar: The Deep Dive - A Special Edition of 20/20",
        "description": "Behind-the-scenes Avatar sequel prep with cast, VFX teams, and James Cameron.",
        "location": {
            "lat": -41.2865,
            "lng": 174.7762
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Sugarcane",
        "description": "Documents Indigenous school abuses near the Sugarcane Reserve and intergenerational trauma.",
        "location": {
            "lat": 52.1216,
            "lng": -122.1425
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Porcelain War",
        "description": "Ukrainian artists continue making amid missiles and war, blending beauty and defiance.",
        "location": {
            "lat": 50.4501,
            "lng": 30.5234
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Inside Job",
        "description": "Examines causes of 2008 crash: deregulation, greed, and complicity of financial & political elites.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2005,
        "event_end": 2008
    },
    {
        "title": "Kung Fu Stuntmen",
        "description": "Honors kung fu stuntmen’s history, risks, and artistry in Hong Kong cinema.",
        "location": {
            "lat": 22.3193,
            "lng": 114.1694
        },
        "event_start": 1960,
        "event_end": 1989
    },
    {
        "title": "Avicii - I'm Tim",
        "description": "Reveals the private life behind Tim Bergling’s DJ persona and tragic mental health battle.",
        "location": {
            "lat": 59.3293,
            "lng": 18.0686
        },
        "event_start": 1989,
        "event_end": 2018
    },
    {
        "title": "Sly",
        "description": "Stallone looks back on a life of grit, creativity, and defining underdog roles like Rocky and Rambo.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1946,
        "event_end": 2023
    },
    {
        "title": "STILL: A Michael J. Fox Movie",
        "description": "Chronicles Fox’s life, fame, Parkinson’s battle, and decades of public advocacy.",
        "location": {
            "lat": 43.6532,
            "lng": -79.3832
        },
        "event_start": 1980,
        "event_end": 2023
    },
    {
        "title": "X-Men: The Mutant Watch",
        "description": "Commentary on X-Men film themes of difference, prejudice, and heroism, released with the movie.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1999,
        "event_end": 2000
    },
    {
        "title": "My Octopus Teacher",
        "description": "Diver forms unlikely bond with an octopus, discovering resilience, curiosity, and wild intelligence.",
        "location": {
            "lat": -34.1928,
            "lng": 18.4567
        },
        "event_start": 2010,
        "event_end": 2019
    },
    {
        "title": "Ginny & Georgia - The Afterparty",
        "description": "Cast & creators talk trauma, identity, and story arcs in this post-season Netflix discussion.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "David Attenborough: A Life on Our Planet",
        "description": "Attenborough reflects on the planet’s decline and shares a vision for conservation-driven recovery.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1926,
        "event_end": 2020
    },
    {
        "title": "Hotel Brothers",
        "description": "Follows two brothers from $1,000 startup to building Nicaragua's first action-sports resort.",
        "location": {
            "lat": 11.251,
            "lng": -85.8708
        },
        "event_start": 2008,
        "event_end": 2020
    },
    {
        "title": "Obi-Wan Kenobi: A Jedi's Return",
        "description": "Behind the scenes of “Obi-Wan Kenobi” series, cast and creators revisit legendary Star Wars roles.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "BLACKPINK: Light Up the Sky",
        "description": "BLACKPINK’s journey from trainees to global stars, with interviews and stage footage.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2016,
        "event_end": 2020
    },
    {
        "title": "The Last of the Sea Women",
        "description": "Haenyeo divers battle ecological change and extinction of their matriarchal diving tradition.",
        "location": {
            "lat": 33.4996,
            "lng": 126.5312
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Friends: The Reunion",
        "description": "Cast reunites on original set, reflects on show’s creation, legacy, and lasting cultural impact.",
        "location": {
            "lat": 34.155,
            "lng": -118.34
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Stephen Curry: Underrated",
        "description": "Tracks Curry’s unlikely rise from college underdog to generational NBA champion.",
        "location": {
            "lat": 35.2271,
            "lng": -80.8431
        },
        "event_start": 2008,
        "event_end": 2022
    },
    {
        "title": "The Road to El Camino: Behind the Scenes …",
        "description": "Behind-the-scenes look at transitioning Breaking Bad to movie form with cast & crew insights.",
        "location": {
            "lat": 35.0844,
            "lng": -106.6504
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Endurance",
        "description": "1915 shipwreck story revived as crew discovers Shackleton’s Endurance wreck in 2022.",
        "location": {
            "lat": -73.5,
            "lng": -45
        },
        "event_start": 1915,
        "event_end": 2023
    },
    {
        "title": "On Any Sunday",
        "description": "Motorcycle culture and racers of the late ’60s through McQueen’s eye and epic riding footage.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1969,
        "event_end": 1970
    },
    {
        "title": "American Animals",
        "description": "Real-life 2004 library heist retold through dramatization and direct interviews with perpetrators.",
        "location": {
            "lat": 38.0406,
            "lng": -84.5037
        },
        "event_start": 2004,
        "event_end": 2004
    },
    {
        "title": "Theory of Obscurity: … The Residents",
        "description": "Examines The Residents’ cryptic, mask-wearing, audio-visual art career from 1970s to present.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1971,
        "event_end": 2015
    },
    {
        "title": "Is Mindfulness Right for You?",
        "description": "Explores how diverse people apply mindfulness and its therapeutic effects across life contexts.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Con Mum",
        "description": "A chef’s life upended by an impostor claiming to be his mother in this investigative doc.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Faces of Death",
        "description": "Controversial mix of real and fake death footage that shocked, disturbed, and defined an era.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1974,
        "event_end": 1978
    },
    {
        "title": "Power",
        "description": "Traces American policing history, evolution, and cultural implications from militias to modern forces.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 1700,
        "event_end": 2024
    },
    {
        "title": "Unknown: The Lost Pyramid",
        "description": "Egyptian dig reveals previously unknown pyramid, shedding light on new royal lineage.",
        "location": {
            "lat": 29.8717,
            "lng": 31.2165
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Einstein and the Bomb",
        "description": "Examines Einstein’s escape from fascism and ethical conflict over nuclear weapons until 1955.",
        "location": {
            "lat": 52.52,
            "lng": 13.405
        },
        "event_start": 1938,
        "event_end": 1955
    },
    {
        "title": "The Menendez Brothers",
        "description": "Revisits infamous Menendez case with interviews, trial footage, and a reexamination of public perception.",
        "location": {
            "lat": 34.0736,
            "lng": -118.4004
        },
        "event_start": 1989,
        "event_end": 2024
    },
    {
        "title": "Capturing Avatar",
        "description": "Behind the scenes of Avatar’s creation from concept in ’95 through 2010, with interviews & VFX work.",
        "location": {
            "lat": -41.2865,
            "lng": 174.7762
        },
        "event_start": 1995,
        "event_end": 2010
    },
    {
        "title": "A Hero's Journey: The Making of Percy Jackson…",
        "description": "Tracks production of Disney’s Percy Jackson series with cast, creatures, stunts and epic sets.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Hurley",
        "description": "Doc explores Hurley Haywood’s racing triumphs and quiet personal battles from the ’60s to 2019.",
        "location": {
            "lat": 29.2108,
            "lng": -81.0228
        },
        "event_start": 1960,
        "event_end": 2019
    },
    {
        "title": "Diddy: Monster's Fall",
        "description": "Tracks Combs’s 2024 indictment and aftermath using news, legal records and industry reflections.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "Defying Gravity: The Curtain Rises on Wicked",
        "description": "Explores filming of Wicked movie parts 1 & 2, including set, costume, cast, and production challenges.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Amy",
        "description": "Amy Winehouse’s career and tragic downfall shown through personal footage and interviews.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1998,
        "event_end": 2011
    },
    {
        "title": "Frida",
        "description": "Animated doc narrates Kahlo’s life through her own words and art, from trauma to legacy.",
        "location": {
            "lat": 19.4326,
            "lng": -99.1332
        },
        "event_start": 1907,
        "event_end": 1954
    },
    {
        "title": "The House in Between",
        "description": "Paranormal investigators document unexplained activity in a haunted Southern U.S. home.",
        "location": {
            "lat": 32.3547,
            "lng": -89.3985
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Blackfish",
        "description": "Investigates SeaWorld's orca captivity, Tilikum’s story, and trainer deaths sparking public backlash.",
        "location": {
            "lat": 28.3852,
            "lng": -81.5639
        },
        "event_start": 1983,
        "event_end": 2012
    },
    {
        "title": "Stop Making Sense",
        "description": "Groundbreaking concert film of Talking Heads’ theatrical, high-energy 1983 performances.",
        "location": {
            "lat": 34.1015,
            "lng": -118.3269
        },
        "event_start": 1983,
        "event_end": 1983
    },
    {
        "title": "Unicorn Town",
        "description": "American expats and locals build a football dynasty in small-town Germany on heart, not budget.",
        "location": {
            "lat": 49.1125,
            "lng": 9.7392
        },
        "event_start": 2017,
        "event_end": 2021
    },
    {
        "title": "The Red Pill",
        "description": "A feminist filmmaker explores men's rights movement, encountering bias, backlash, and reflection.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2014,
        "event_end": 2016
    },
    {
        "title": "Beastie Boys Story",
        "description": "Mike D and Ad-Rock perform live retrospective with humor and heart about the Beastie Boys’ legacy.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1980,
        "event_end": 2020
    },
    {
        "title": "American Murder: The Family Next Door",
        "description": "Shanann Watts’ own videos form the core of this chilling true-crime look at a family’s sudden end.",
        "location": {
            "lat": 40.1028,
            "lng": -104.9394
        },
        "event_start": 2018,
        "event_end": 2018
    },
    {
        "title": "Misha and the Wolves",
        "description": "Dissects a memoir scandal—Misha’s story of wolves and escape from Nazis that unravels on close review.",
        "location": {
            "lat": 50.8503,
            "lng": 4.3517
        },
        "event_start": 1997,
        "event_end": 2008
    },
    {
        "title": "Fire of Love",
        "description": "Katia and Maurice Krafft filmed volcanic eruptions until dying in one; their love shown in images.",
        "location": {
            "lat": 45.8326,
            "lng": -0.5804
        },
        "event_start": 1970,
        "event_end": 1991
    },
    {
        "title": "Fuck",
        "description": "Tracks the history and power of the f-word across censorship, media, linguistics, and law.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 1930,
        "event_end": 2006
    },
    {
        "title": "Val",
        "description": "Kilmer’s intimate journey told through his own home videos and reflective voiceover.",
        "location": {
            "lat": 34.0928,
            "lng": -118.3287
        },
        "event_start": 1970,
        "event_end": 2020
    },
    {
        "title": "Baraka",
        "description": "A nonverbal, visually meditative look at culture, nature, ritual, and technology around the world.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1990,
        "event_end": 1992
    },
    {
        "title": "Somm III",
        "description": "Blind tastings test legendary sommeliers on Pinot Noir—Old World vs New.",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 2017,
        "event_end": 2018
    },
    {
        "title": "The Beatles: Eight Days a Week – The Touring Years",
        "description": "Ron Howard follows Beatles’ touring years and how they changed pop culture before their live retirement.",
        "location": {
            "lat": 53.4084,
            "lng": -2.9916
        },
        "event_start": 1962,
        "event_end": 1966
    },
    {
        "title": "Dads",
        "description": "Dads around the world reflect on parenting, laughter, and identity in Bryce Dallas Howard’s doc.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Flee",
        "description": "Animated doc reveals refugee Amin’s hidden story, escape from Kabul, and life in exile.",
        "location": {
            "lat": 34.5553,
            "lng": 69.2075
        },
        "event_start": 1990,
        "event_end": 2020
    },
    {
        "title": "The Velvet Underground",
        "description": "A creative dive into the band’s artistry, influence, and rebellious spirit via rare media and voices.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1960,
        "event_end": 1970
    },
    {
        "title": "Bring the Soul: The Movie",
        "description": "BTS share behind-the-scenes moments and personal struggles during their 2018–19 tour.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Honeyland",
        "description": "A beekeeper’s quiet life collides with ecological and social change in this stunning rural portrait.",
        "location": {
            "lat": 41.6086,
            "lng": 21.7453
        },
        "event_start": 2015,
        "event_end": 2018
    },
    {
        "title": "Koyaanisqatsi",
        "description": "Visual poem showing contrast of natural and industrialized worlds, with Glass’s score.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 1975,
        "event_end": 1982
    },
    {
        "title": "Superior Firepower: Making 'Aliens'",
        "description": "Behind-the-scenes look at Cameron’s 1986 sequel with practical effects, tension, and cast insights.",
        "location": {
            "lat": 51.5485,
            "lng": -0.5033
        },
        "event_start": 1985,
        "event_end": 1986
    },
    {
        "title": "Michael Jackson: The Life of an Icon",
        "description": "Tribute doc reflecting on Jackson’s art, struggles, and cultural footprint with family and stars.",
        "location": {
            "lat": 41.5934,
            "lng": -87.3464
        },
        "event_start": 1958,
        "event_end": 2009
    },
    {
        "title": "Microcosmos",
        "description": "Immersive view of insect lives using macro lenses, slow-motion and time-lapse in rural France.",
        "location": {
            "lat": 46.6034,
            "lng": 1.8883
        },
        "event_start": 1990,
        "event_end": 1995
    },
    {
        "title": "The Greatest Night in Pop",
        "description": "Recounts the January 1985 “We Are the World” session and how music legends united for charity.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1985,
        "event_end": 1985
    },
    {
        "title": "The Deepest Breath",
        "description": "Emotional story of a freediver and her safety diver striving for records in life-risking depths.",
        "location": {
            "lat": 43.7384,
            "lng": 7.4246
        },
        "event_start": 2018,
        "event_end": 2022
    },
    {
        "title": "24 City",
        "description": "Workers and residents reflect on factory closure and city redevelopment in poetic interviews.",
        "location": {
            "lat": 30.5728,
            "lng": 104.0668
        },
        "event_start": 2004,
        "event_end": 2007
    },
    {
        "title": "A Carpool Karaoke Christmas",
        "description": "Zane Lowe drives with stars singing holiday tunes in Tokyo, Missouri, and L.A.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Oceans",
        "description": "Stunning marine documentary with a conservation message and breathtaking undersea imagery.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2005,
        "event_end": 2009
    },
    {
        "title": "Ennio",
        "description": "Explores Morricone’s prolific music career through interviews and rare behind-the-scenes stories.",
        "location": {
            "lat": 41.9028,
            "lng": 12.4964
        },
        "event_start": 1950,
        "event_end": 2020
    },
    {
        "title": "Post Malone: On His Terms",
        "description": "Chronicles Post Malone’s artistic evolution, fame, music, and personal growth across nine years.",
        "location": {
            "lat": 32.9343,
            "lng": -97.0781
        },
        "event_start": 2016,
        "event_end": 2025
    },
    {
        "title": "Bread & Roses",
        "description": "Documents Afghan women’s underground resistance against Taliban oppression after U.S. withdrawal.",
        "location": {
            "lat": 34.5553,
            "lng": 69.2075
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "The Kingdom of Dreams and Madness",
        "description": "Ghibli leaders reveal creative process and tensions during 2010–13 production of two major films.",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2010,
        "event_end": 2013
    },
    {
        "title": "Jackass 3D",
        "description": "3D mayhem with Knoxville and crew unleashing their most extreme and ridiculous stunts ever.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2009,
        "event_end": 2010
    },
    {
        "title": "The Devil on Trial",
        "description": "Examines 1981 murder trial where “demonic possession” was used as a failed legal defense.",
        "location": {
            "lat": 41.4829,
            "lng": -73.4098
        },
        "event_start": 1981,
        "event_end": 1981
    },
    {
        "title": "The Sparks Brothers",
        "description": "Follows five decades of Sparks’ music, creativity, and cult stardom with deep archival access.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1970,
        "event_end": 2021
    },
    {
        "title": "One Direction: This Is Us",
        "description": "Behind-the-scenes of 1D's meteoric rise from X-Factor roots to global arena stardom.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2010,
        "event_end": 2013
    },
    {
        "title": "Cryptopia: ... Future of the Internet",
        "description": "Investigates the promise, problems, and potential of blockchain and Web3’s decentralized dreams.",
        "location": {
            "lat": 37.3875,
            "lng": -122.0575
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Ordinary Men: The \"Forgotten Holocaust\"",
        "description": "Reexamines Nazi atrocities by German police battalions targeting Jews in Eastern Europe.",
        "location": {
            "lat": 52.2297,
            "lng": 21.0122
        },
        "event_start": 1941,
        "event_end": 1943
    },
    {
        "title": "RRR: Behind & Beyond",
        "description": "Behind-the-scenes of India’s epic blockbuster RRR: VFX, stunts, direction, and scale.",
        "location": {
            "lat": 17.385,
            "lng": 78.4867
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Hearts of Darkness: ... Apocalypse Now",
        "description": "Behind Apocalypse Now’s chaotic production including Coppola’s breakdowns and warlike set.",
        "location": {
            "lat": 13.4104,
            "lng": 122.5605
        },
        "event_start": 1976,
        "event_end": 1979
    },
    {
        "title": "The Beach Boys",
        "description": "Charts Beach Boys’ legacy from SoCal surf beginnings to enduring pop innovation and tension.",
        "location": {
            "lat": 33.9164,
            "lng": -118.351
        },
        "event_start": 1961,
        "event_end": 2024
    },
    {
        "title": "Marvel Studios Assembled: Hawkeye",
        "description": "Hawkeye cast and crew share insights on filming, stunts, and legacy of the series’ heroes.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "The Last of the Winthrops",
        "description": "DNA revelation leads a woman to embrace a new identity and ancestry after family secrets unravel.",
        "location": {
            "lat": 45.4215,
            "lng": -75.699
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Avicii - My Last Show",
        "description": "Captures emotional final concert by Avicii before retirement and his tragic 2018 passing.",
        "location": {
            "lat": 38.9067,
            "lng": 1.4206
        },
        "event_start": 2016,
        "event_end": 2016
    },
    {
        "title": "Soaring to Life: ... Dragon",
        "description": "Follows live-action “How to Train Your Dragon” creation from visual R&D to performance magic.",
        "location": {
            "lat": 54.5973,
            "lng": -5.9301
        },
        "event_start": 2023,
        "event_end": 2025
    },
    {
        "title": "Jiro Dreams of Sushi",
        "description": "Portrait of sushi master Jiro and his son, showing devotion, technique, and legacy at their Michelin shop.",
        "location": {
            "lat": 35.6733,
            "lng": 139.7631
        },
        "event_start": 1950,
        "event_end": 2010
    },
    {
        "title": "Grizzly Man",
        "description": "Explores Timothy Treadwell’s passionate but fatal quest to live among wild grizzly bears.",
        "location": {
            "lat": 58.4438,
            "lng": -155.0645
        },
        "event_start": 1990,
        "event_end": 2003
    },
    {
        "title": "Marvel Studios Assembled: Moon Knight",
        "description": "Cast and crew reveal the visual, narrative, and cultural threads shaping Marvel’s Moon Knight series.",
        "location": {
            "lat": 47.4979,
            "lng": 19.0402
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "The Cove",
        "description": "Filmmakers expose dolphin killings in Taiji, sparking global animal rights awareness.",
        "location": {
            "lat": 33.6022,
            "lng": 135.944
        },
        "event_start": 2007,
        "event_end": 2009
    },
    {
        "title": "How to Rob a Bank",
        "description": "Chronicles a real-life modern Robin Hood’s crime spree, psychology, and fall from grace.",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 1997,
        "event_end": 2000
    },
    {
        "title": "Marvel Studios: Assembling a Universe",
        "description": "Explores MCU's cinematic rise via cast/crew reflections across Iron Man to Agents of S.H.I.E.L.D.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2008,
        "event_end": 2014
    },
    {
        "title": "Making Senna",
        "description": "Inside look at Senna docuseries production, recreating the legend with real F1 archives and dramatizations.",
        "location": {
            "lat": -23.5505,
            "lng": -46.6333
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Moonage Daydream",
        "description": "Mesmerizing David Bowie portrait through rare concert, interview, and studio footage.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1969,
        "event_end": 2016
    },
    {
        "title": "Shiny_Flakes: The Teenage Drug Lord",
        "description": "German teen builds massive darknet drug empire from bedroom before police track and arrest him.",
        "location": {
            "lat": 51.4556,
            "lng": 7.0116
        },
        "event_start": 2012,
        "event_end": 2018
    },
    {
        "title": "We Are Legion: The Story of the Hacktivists",
        "description": "Documents rise of hacktivism and Anonymous, with voices from within the movement and observers.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2000,
        "event_end": 2012
    },
    {
        "title": "Exit Through the Gift Shop",
        "description": "Banksy’s meta-street art doc flips narrative on Thierry Guetta’s art film aspirations.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2006,
        "event_end": 2009
    },
    {
        "title": "SNL50: The Homecoming Concert",
        "description": "Celebrates 50 years of SNL with live performances, iconic cameos, and musical tributes.",
        "location": {
            "lat": 40.759,
            "lng": -73.9795
        },
        "event_start": 2025,
        "event_end": 2025
    },
    {
        "title": "Marvel Studios Assembled: Making of Thor: Love and Thunder",
        "description": "Behind-the-scenes of Thor 4 with cast/crew discussing stunts, costumes, visual effects and more.",
        "location": {
            "lat": -33.8688,
            "lng": 151.2093
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "The Fog of War",
        "description": "Explores Robert McNamara’s reflections on war and power using archival footage and interviews.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1940,
        "event_end": 1995
    },
    {
        "title": "The Decline of Western Civilization II: Metal Years",
        "description": "Chronicles excess and ambition in LA’s 1980s metal scene with iconic interviews and performances.",
        "location": {
            "lat": 34.095,
            "lng": -118.376
        },
        "event_start": 1987,
        "event_end": 1988
    },
    {
        "title": "The Tonight Show...10th Anniversary Special",
        "description": "Celebrates Fallon’s decade at the Tonight Show with guests, sketches, and highlights.",
        "location": {
            "lat": 40.758,
            "lng": -73.9855
        },
        "event_start": 2014,
        "event_end": 2024
    },
    {
        "title": "Jackass 3.5",
        "description": "Outtakes, unused pranks and behind-the-scenes antics from the filming of Jackass 3D.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2009,
        "event_end": 2010
    },
    {
        "title": "To End All War: Oppenheimer & the Atomic Bomb",
        "description": "Oppenheimer’s rise, nuclear bomb creation, and consequences of the Manhattan Project examined.",
        "location": {
            "lat": 35.8823,
            "lng": -106.3031
        },
        "event_start": 1942,
        "event_end": 1967
    },
    {
        "title": "I Am: Celine Dion",
        "description": "Celine Dion’s journey through health struggles and resilience following 2022 diagnosis.",
        "location": {
            "lat": 36.1699,
            "lng": -115.1398
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Naked Ambition: …X Rated Industry",
        "description": "Behind-the-scenes look at adult entertainment’s AVN Awards through lens of celebrity photographer.",
        "location": {
            "lat": 36.1147,
            "lng": -115.1728
        },
        "event_start": 2009,
        "event_end": 2009
    },
    {
        "title": "Audrey",
        "description": "Explores Audrey Hepburn’s elegance, acting legacy, and humanitarian passions through rare footage.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1930,
        "event_end": 1993
    },
    {
        "title": "The Salt of the Earth",
        "description": "Sebastião Salgado’s photographic legacy documented by son across humanitarian and nature themes.",
        "location": {
            "lat": -14.235,
            "lng": -51.9253
        },
        "event_start": 1970,
        "event_end": 2013
    },
    {
        "title": "Free Solo",
        "description": "Follows Alex Honnold’s mentally and physically daring free solo climb of El Capitan.",
        "location": {
            "lat": 37.7335,
            "lng": -119.6376
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "Apollo 11",
        "description": "Archival NASA footage presents full Apollo 11 mission from liftoff to lunar landing and splashdown.",
        "location": {
            "lat": 28.5729,
            "lng": -80.648
        },
        "event_start": 1969,
        "event_end": 1969
    },
    {
        "title": "Faye",
        "description": "Candid look at Faye Dunaway’s life, career highs, and personal struggles across decades.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 2024
    },
    {
        "title": "Back to the Titanic",
        "description": "Titanic dive teams reveal changes in wreck’s structure with advanced imaging and sonar.",
        "location": {
            "lat": 41.7325,
            "lng": -49.9469
        },
        "event_start": 2000,
        "event_end": 2019
    },
    {
        "title": "Samsara",
        "description": "Nonverbal visual meditation on life, death, ritual, industry, and spiritual imagery.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2006,
        "event_end": 2011
    },
    {
        "title": "Back in Time",
        "description": "Doc reunites Back to the Future cast and fans to reflect on 30 years of time-travel nostalgia.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1985,
        "event_end": 2015
    },
    {
        "title": "Elephant",
        "description": "Chronicles an elephant family's arduous migration, led by matriarch Gaia through harsh terrain.",
        "location": {
            "lat": -21.5,
            "lng": 25.5
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Mysteries of the Terracotta Warriors",
        "description": "Investigates how China's Terracotta Army was constructed and preserved, using new archaeological tools.",
        "location": {
            "lat": 34.3416,
            "lng": 108.9398
        },
        "event_start": 1974,
        "event_end": 2024
    },
    {
        "title": "9/11: Inside the President's War Room",
        "description": "Chronicles President Bush’s response and decisions during 9/11 through key interviews and archive.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2001,
        "event_end": 2001
    },
    {
        "title": "Marvel Studios Assembled: ... Quantumania",
        "description": "Crew and cast share production secrets and VFX techniques behind Ant-Man and the Wasp: Quantumania.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Super Size Me",
        "description": "Spurlock’s 30-day McDonald’s binge becomes a critique of fast food and corporate responsibility.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2003,
        "event_end": 2003
    },
    {
        "title": "Untold: Deal with the Devil",
        "description": "Christie Martin’s boxing stardom and near-death experience unfold in this raw sports doc.",
        "location": {
            "lat": 27.9944,
            "lng": -81.7603
        },
        "event_start": 1990,
        "event_end": 2021
    },
    {
        "title": "Buena Vista Social Club",
        "description": "Cuban musicians reunite to revive classic sounds and earn global acclaim in Ry Cooder-led sessions.",
        "location": {
            "lat": 23.1136,
            "lng": -82.3666
        },
        "event_start": 1996,
        "event_end": 1998
    },
    {
        "title": "Bowling for Columbine",
        "description": "Moore investigates U.S. gun culture and its tragic effects, from schools to political speeches.",
        "location": {
            "lat": 39.7392,
            "lng": -104.9903
        },
        "event_start": 1999,
        "event_end": 2002
    },
    {
        "title": "FTA",
        "description": "Anti-war revue featuring Jane Fonda brings satire and solidarity to troops abroad.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1971,
        "event_end": 1972
    },
    {
        "title": "SEVENTEEN TOUR 'FOLLOW' AGAIN ...",
        "description": "Immersive film captures SEVENTEEN’s stadium encore tour with fan energy, sets, and dance artistry.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Fly Like a Girl",
        "description": "Inspiring girls to pursue aviation careers through stories of pilots, engineers, and astronauts.",
        "location": {
            "lat": 38.8833,
            "lng": -77.0164
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Chimpanzee",
        "description": "Follows orphan chimp Oscar as he survives jungle threats and finds family in unexpected ways.",
        "location": {
            "lat": 5.8667,
            "lng": -7.3333
        },
        "event_start": 2009,
        "event_end": 2011
    },
    {
        "title": "Earth",
        "description": "Epic wildlife doc follows animals across continents facing climate and migration challenges.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2005,
        "event_end": 2007
    },
    {
        "title": "One to One: John & Yoko",
        "description": "Documents Lennon & Ono’s life in NYC—their music, art, activism, and personal evolution.",
        "location": {
            "lat": 40.7336,
            "lng": -73.9995
        },
        "event_start": 1971,
        "event_end": 1972
    },
    {
        "title": "Real Haunts: Ghost Towns",
        "description": "Paranormal teams explore abandoned ghost towns and gather chilling interviews and recordings.",
        "location": {
            "lat": 36.1716,
            "lng": -115.1391
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "NCT NATION: To the World in Cinemas",
        "description": "Energetic concert film captures NCT’s global launch with fan chants, pyros, and performances.",
        "location": {
            "lat": 37.4563,
            "lng": 126.7052
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Dahomey",
        "description": "Repatriation of royal Dahomey artifacts dramatized as cultural healing and identity reclamation.",
        "location": {
            "lat": 6.4986,
            "lng": 2.6036
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Pets",
        "description": "Explores deep emotional bonds and life changes brought on by our furry, feathered, and scaled companions.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "Look Into My Eyes",
        "description": "NYC psychics share emotional readings that bridge grief, memory, and spiritual needs.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "An Inconvenient Truth",
        "description": "Al Gore’s urgent message on climate change shown through slides, science, and stark projections.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2006
    },
    {
        "title": "Hayao Miyazaki and the Heron",
        "description": "A seven-year look inside Studio Ghibli’s production of The Boy and the Heron.",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2017,
        "event_end": 2024
    },
    {
        "title": "Never Surrender: A Galaxy Quest Documentary",
        "description": "Retrospective on Galaxy Quest, its fandom & legacy around its 20th anniversary.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1999,
        "event_end": 2019
    },
    {
        "title": "Ray Harryhausen: Special Effects Titan",
        "description": "In-depth look at Harryhausen’s legacy through archival material & expert interviews.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1955,
        "event_end": 2012
    },
    {
        "title": "Untold: Shooting Guards",
        "description": "Explores Arenas–Crittenton dispute, culminating with locker-room gun incident.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2007,
        "event_end": 2025
    },
    {
        "title": "Yellow Door: '90s Lo‑fi Film Club",
        "description": "South Korean cinephiles revive 1990s film culture with nostalgic screenings & conversations.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 1990,
        "event_end": 2023
    },
    {
        "title": "The 11th Hour",
        "description": "Global environmental issues highlighted via expert interviews & solutions.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2005,
        "event_end": 2007
    },
    {
        "title": "Justin Bieber: Our World",
        "description": "Bieber’s intimate rooftop performance, including prep, livestream and safety.",
        "location": {
            "lat": 34.0779,
            "lng": -118.4132
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "Assembled: Making of Deadpool & Wolverine",
        "description": "Reynolds, Jackman and Levy unpack the making of Deadpool & Wolverine.",
        "location": {
            "lat": 49.2827,
            "lng": -123.1207
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Before the Flood",
        "description": "Leo DiCaprio travels the world to spotlight climate change threats & solutions.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2015,
        "event_end": 2016
    },
    {
        "title": "American Factory",
        "description": "Culture clash at a Chinese-owned auto glass plant in post-industrial America.",
        "location": {
            "lat": 39.7589,
            "lng": -84.1916
        },
        "event_start": 2016,
        "event_end": 2019
    },
    {
        "title": "The Alpinist",
        "description": "Solo climber Marc‑André Leclerc pushes boundaries on ice cliffs in Canada.",
        "location": {
            "lat": 49.2827,
            "lng": -123.1207
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Assembled: Making of Eternals",
        "description": "Marvel’s director Zhao opens up about Eternals’ scale, cast and global shoot.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Buy Now! The Shopping Conspiracy",
        "description": "Exposes manipulative marketing tactics and their costs to individuals & planet.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Woodstock",
        "description": "Iconic footage of 1969 counterculture festival’s highs and mud-drenched chaos.",
        "location": {
            "lat": 41.701,
            "lng": -74.88
        },
        "event_start": 1969,
        "event_end": 1969
    },
    {
        "title": "Albert Brooks: Defending My Life",
        "description": "Rob Reiner profiles Brooks’ comedic history with candid interviews and clips.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Bob Ross: Happy Accidents…",
        "description": "A deeper look at Bob Ross’ art empire and controversies behind the joy.",
        "location": {
            "lat": 28.3852,
            "lng": -81.5639
        },
        "event_start": 1983,
        "event_end": 2021
    },
    {
        "title": "WHAM!",
        "description": "George Michael and Andrew Ridgeley revisit their rise and pop phenomenon.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1981,
        "event_end": 1986
    },
    {
        "title": "The Blue Angels",
        "description": "Inside US Navy’s flight squadron during their rigorous training and performances.",
        "location": {
            "lat": 30.4213,
            "lng": -87.2169
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "You Cannot Kill David Arquette",
        "description": "Arquette confronts his controversial WWE title and seeks redemption in the ring.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1995,
        "event_end": 2020
    },
    {
        "title": "Sicko",
        "description": "Moore targets the failures of the American healthcare system with zeal and humor.",
        "location": {
            "lat": 25.7617,
            "lng": -80.1918
        },
        "event_start": 2006,
        "event_end": 2007
    },
    {
        "title": "Fantastic Beasts: A Natural History",
        "description": "Stephen Fry explores myths behind beasts inspiring folklore and fantasy film creatures.",
        "location": {
            "lat": 51.5098,
            "lng": -0.118
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "This Is It",
        "description": "Behind-the-scenes rehearsal footage of Michael Jackson's final planned concert series.",
        "location": {
            "lat": 51.503,
            "lng": -0.0032
        },
        "event_start": 2009,
        "event_end": 2009
    },
    {
        "title": "Becoming Cousteau",
        "description": "Liz Garbus traces Cousteau’s ocean adventures, activism and invention across decades.",
        "location": {
            "lat": 43.294,
            "lng": 5.37
        },
        "event_start": 1950,
        "event_end": 1996
    },
    {
        "title": "Katy Perry: Will You Be My Witness?",
        "description": "Intimate 24/7 doc following Katy Perry's four-day live-streaming creative process.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "Poisoned: The Dirty Truth About Your Food",
        "description": "Investigative look at deadly foodborne illnesses through cases, victims and expert insight.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2020,
        "event_end": 2023
    },
    {
        "title": "The Words That Built America",
        "description": "Celebrities and politicians read America’s founding documents in remembrance.",
        "location": {
            "lat": 38.8899,
            "lng": -77.0091
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "The Musicians' Green Book: An Enduring Legacy",
        "description": "Black artists recall traveling safely using the Green Book during segregation.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "In Search of Bass Reeves",
        "description": "Deputy Reeves’ legendary lawman career explored through archive and landscape.",
        "location": {
            "lat": 36.6015,
            "lng": -93.8228
        },
        "event_start": 1870,
        "event_end": 1902
    },
    {
        "title": "The Endless Summer",
        "description": "Surf’s global spirit captured in this groundbreaking beach-culture travelogue.",
        "location": {
            "lat": -34.9285,
            "lng": 138.6007
        },
        "event_start": 1964,
        "event_end": 1965
    },
    {
        "title": "Will & Harper",
        "description": "Road trip between Will Ferrell and his friend Harper exploring trans identity and friendship.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Pumping Iron",
        "description": "Schwarzenegger and Ferrigno prepare for Olympia in this bodybuilding pioneer film.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1975,
        "event_end": 1975
    },
    {
        "title": "Grounded: Making The Last of Us",
        "description": "Behind-the-scenes on game creation, testing, and developer passion.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2011,
        "event_end": 2013
    },
    {
        "title": "Bitconned",
        "description": "Documentary on crypto scammers and their schemes using interviews & evidence.",
        "location": {
            "lat": 37.3875,
            "lng": -122.0575
        },
        "event_start": 2021,
        "event_end": 2024
    },
    {
        "title": "Three Identical Strangers",
        "description": "Reunion of long-lost triplets uncovers chilling psychological experiment.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1980,
        "event_end": 1981
    },
    {
        "title": "Flight/Risk",
        "description": "Investigative documentary into Boeing 737 Max crashes and whistleblower perspectives.",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "The Crimson Wing: Mystery of the Flamingos",
        "description": "Poetic wildlife portrait of flamingos breeding on Africa’s alkaline lake.",
        "location": {
            "lat": -2.37,
            "lng": 35.17
        },
        "event_start": 2006,
        "event_end": 2007
    },
    {
        "title": "Burn the Stage: The Movie",
        "description": "BTS’ tour story captured with live footage and intimate interviews.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "Coraline: The Making of 'Coraline'",
        "description": "Behind-the-scenes view of stop-motion animation in Coraline.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2008,
        "event_end": 2009
    },
    {
        "title": "Guardians of the Galaxy Vol. 3 (Assembled)",
        "description": "Gunn and cast reflect on emotional production and farewell to the Guardians.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Ronaldo",
        "description": "Candid lifetime documentary capturing Cristiano Ronaldo at career peak.",
        "location": {
            "lat": 40.4168,
            "lng": -3.7038
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "Pink Floyd: Live at Pompeii",
        "description": "Pink Floyd perform without audience in ancient Pompeii, cinematic concert experience.",
        "location": {
            "lat": 40.7496,
            "lng": 14.4989
        },
        "event_start": 1971,
        "event_end": 1971
    },
    {
        "title": "Katy Perry: Part of Me",
        "description": "All-access on-stage/off-stage look at Katy Perry’s rise and personal moments.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2011,
        "event_end": 2012
    },
    {
        "title": "The Lost Century: And How to Reclaim It",
        "description": "Dr. Greer explores UFO secrecy’s societal costs and its spiritual/tech impacts.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Pelé",
        "description": "Chronicles Pelé’s rise from rural Brazil to global football icon.",
        "location": {
            "lat": -23.5505,
            "lng": -46.6333
        },
        "event_start": 1958,
        "event_end": 1977
    },
    {
        "title": "When We Were Kings",
        "description": "Legendary fight Ali vs. Foreman with cultural festival backdrop in Zaire.",
        "location": {
            "lat": -4.4419,
            "lng": 15.2663
        },
        "event_start": 1974,
        "event_end": 1974
    },
    {
        "title": "We Are X (duplicate)",
        "description": "X Japan’s rebirth, culture clash, and artistic persistence in rock history.",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 1988,
        "event_end": 2016
    },
    {
        "title": "Enron: The Smartest Guys in the Room",
        "description": "Exposé of Enron’s rise, deceit, and downfall through exec interviews and docs.",
        "location": {
            "lat": 29.7604,
            "lng": -95.3698
        },
        "event_start": 1997,
        "event_end": 2001
    },
    {
        "title": "Dirty Daddy: The Bob Saget Tribute",
        "description": "Comedians unite to remember Bob Saget with humor and heartfelt stories.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Ghosts of the Abyss",
        "description": "James Cameron leads a Titanic dive with marine experts and Paxton.",
        "location": {
            "lat": 41.7325,
            "lng": -49.9469
        },
        "event_start": 2001,
        "event_end": 2003
    },
    {
        "title": "Touching the Void",
        "description": "Harrowing survival mountain climb retold in gripping documentary style.",
        "location": {
            "lat": -9.0141,
            "lng": -76.1667
        },
        "event_start": 1985,
        "event_end": 1985
    },
    {
        "title": "ATEEZ WORLD TOUR [...]",
        "description": "Concert film capturing ATEEZ’s stadium shows in immersive formats.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "Untold: The Fall of Favre",
        "description": "Investigation into Brett Favre’s scandal-plagued legacy and controversies.",
        "location": {
            "lat": 32.2988,
            "lng": -90.1848
        },
        "event_start": 1991,
        "event_end": 2025
    },
    {
        "title": "Bears",
        "description": "Year-in-life story of Alaskan bear mom and her cubs through the seasons.",
        "location": {
            "lat": 64.2008,
            "lng": -149.4937
        },
        "event_start": 2012,
        "event_end": 2013
    },
    {
        "title": "Society of the Snow: Who Were We on the Mountain?",
        "description": "Behind-the-scenes of survival drama with survivors and director Bayona.",
        "location": {
            "lat": -33.4489,
            "lng": -70.6693
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Unknown: Cosmic Time Machine",
        "description": "NASA team share the birth of JWST and the science behind it.",
        "location": {
            "lat": 28.5729,
            "lng": -80.648
        },
        "event_start": 2017,
        "event_end": 2021
    },
    {
        "title": "Money Electric: The Bitcoin Mystery",
        "description": "Investigates Satoshi Nakamoto’s identity and Bitcoin’s origins.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2009,
        "event_end": 2024
    },
    {
        "title": "Brother, Can You Spare a Dime?",
        "description": "Cultural montage of Depression-era America through arts and news.",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 1929,
        "event_end": 1939
    },
    {
        "title": "Born in China",
        "description": "Disneynature animals showcase life in China’s wilds across seasons.",
        "location": {
            "lat": 30.9756,
            "lng": 102.7065
        },
        "event_start": 2012,
        "event_end": 2016
    },
    {
        "title": "Faces Places",
        "description": "Varda and JR travel, connect communities, and create murals.",
        "location": {
            "lat": 46.2276,
            "lng": 2.2137
        },
        "event_start": 2015,
        "event_end": 2016
    },
    {
        "title": "March of the Penguins",
        "description": "Emperors march to breeding ground in brutal Antarctic trek.",
        "location": {
            "lat": -75.2509,
            "lng": -0.0714
        },
        "event_start": 2004,
        "event_end": 2005
    },
    {
        "title": "Carbon: The Unauthorised Biography",
        "description": "Sarah Snook narrates the cosmic and earthly journey of carbon, the element of life and death.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Biggie: I Got a Story to Tell",
        "description": "Rare footage and testimonials celebrate The Notorious B.I.G.’s legacy and lyrical genius.",
        "location": {
            "lat": 40.6782,
            "lng": -73.9442
        },
        "event_start": 1992,
        "event_end": 1997
    },
    {
        "title": "DC Films Presents Dawn of the Justice League",
        "description": "Kevin Smith hosts a behind-the-scenes journey into Batman v Superman and the DC slate.",
        "location": {
            "lat": 34.1808,
            "lng": -118.3089
        },
        "event_start": 2014,
        "event_end": 2016
    },
    {
        "title": "Beyond Infinity: Buzz and the Journey to Lightyear",
        "description": "Pixar uncovers the evolution from toy Buzz to cinematic hero in Lightyear.",
        "location": {
            "lat": 37.8313,
            "lng": -122.2863
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "The Volcano: Rescue from Whakaari",
        "description": "First responders recount the Whakaari eruption and rescue amid chaos and grief.",
        "location": {
            "lat": -37.5221,
            "lng": 177.179
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Jodorowsky's Dune",
        "description": "Chronicles Alejandro Jodorowsky’s epic but unrealized vision for Dune and its legacy.",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1973,
        "event_end": 1974
    },
    {
        "title": "Rita Moreno: Just a Girl Who Decided to Go for It",
        "description": "A compelling chronicle of Rita’s seven-decade career and barrier-breaking achievements.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1950,
        "event_end": 2021
    },
    {
        "title": "Secrets of the Neanderthals",
        "description": "Explores fossil sites and genetic research to illuminate Neanderthal life and extinction.",
        "location": {
            "lat": 46.2276,
            "lng": 2.2137
        },
        "event_start": 1856,
        "event_end": 2024
    },
    {
        "title": "Miss Americana",
        "description": "Intimate portrayal of Taylor Swift’s growth from pop star to cultural advocate.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Surveilled",
        "description": "Ronan Farrow investigates surveillance tech and authoritarian threats worldwide.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Unknown: Killer Robots",
        "description": "A sobering look at lethal autonomous weapons and AI judgment in war.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2020,
        "event_end": 2023
    },
    {
        "title": "Oppenheimer: The Real Story",
        "description": "J. Robert Oppenheimer’s personal and scientific journey from bomb-making to control.",
        "location": {
            "lat": 35.687,
            "lng": -105.9378
        },
        "event_start": 1904,
        "event_end": 1967
    },
    {
        "title": "Searching for Sugar Man",
        "description": "Fans rediscover a forgotten singer and reveal the mysteries behind his disappearance.",
        "location": {
            "lat": -33.9249,
            "lng": 18.4241
        },
        "event_start": 1970,
        "event_end": 2012
    },
    {
        "title": "Downfall: The Case Against Boeing",
        "description": "Investigative coverage of Boeing’s failures behind the Max crashes and corporate decisions.",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 2018,
        "event_end": 2021
    },
    {
        "title": "Sons of Ecstasy",
        "description": "Rivalry in AZ ecstasy trade explores mob, stock and rave culture amid deadly stakes.",
        "location": {
            "lat": 33.4484,
            "lng": -112.074
        },
        "event_start": 1990,
        "event_end": 1999
    },
    {
        "title": "Dear Jinri",
        "description": "Sulli’s private interview trauma is explored posthumously in this emotional doc.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2019,
        "event_end": 2019
    },
    {
        "title": "Dolly Parton: A MusiCares Tribute",
        "description": "Performers and friends honor Dolly’s legacy in a heartfelt MusiCares evening.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Hocus Pocus 25th Anniversary Halloween Bash",
        "description": "Fans and celebs reunite for a nostalgic spooky night celebrating Hocus Pocus.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2018,
        "event_end": 2018
    },
    {
        "title": "Apollo 13: Survival",
        "description": "Strong archival perspective on Apollo 13’s crisis and mission success.",
        "location": {
            "lat": 29.7604,
            "lng": -95.3698
        },
        "event_start": 1970,
        "event_end": 1970
    },
    {
        "title": "Music by John Williams",
        "description": "Maestro Williams reflects on half-century of iconic film scores through rare access.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1958,
        "event_end": 2024
    },
    {
        "title": "The Roast of Tom Brady",
        "description": "Kevin Hart leads a no-holds-barred roast of NFL legend Tom Brady.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Black Panther: Wakanda Forever (Assembled)",
        "description": "Behind-the-scenes of ‘Wakanda Forever’ navigating grief, legacy, and Namor’s challenge.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Elizabeth Taylor: The Lost Tapes",
        "description": "Unpublished interviews and personal archives reveal Taylor’s inner world.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1970,
        "event_end": 2024
    },
    {
        "title": "Penguins",
        "description": "Steve the Adélie searches for love and survival in icy Antarctic landscape.",
        "location": {
            "lat": -75.2509,
            "lng": -0.0714
        },
        "event_start": 2017,
        "event_end": 2018
    },
    {
        "title": "Sidney",
        "description": "Poitier’s trailblazing screen roles and civil rights impact celebrated.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1950,
        "event_end": 2022
    },
    {
        "title": "An American Bombing: The Road to April 19th",
        "description": "Contextualizes the 1995 bombing within anti-government movement history.",
        "location": {
            "lat": 35.4676,
            "lng": -97.5164
        },
        "event_start": 1995,
        "event_end": 1995
    },
    {
        "title": "The Year Earth Changed",
        "description": "How the COVID slowdown allowed nature to reclaim parts of human-dominated spaces.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2020,
        "event_end": 2020
    },
    {
        "title": "The Celluloid Closet",
        "description": "Chronological exploration of LGBT representation in American cinema.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1890,
        "event_end": 1996
    },
    {
        "title": "Sexology",
        "description": "Female orgasm and sexual empowerment examined through expert and personal stories.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2014,
        "event_end": 2016
    },
    {
        "title": "The Story of PlayStation",
        "description": "Chronicles Sony’s rise from start-up to gaming industry titan.",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 1994,
        "event_end": 2023
    },
    {
        "title": "Food, Inc.",
        "description": "Exposé on big agribusiness and industrial food production practices.",
        "location": {
            "lat": 41.878,
            "lng": -93.0977
        },
        "event_start": 2006,
        "event_end": 2008
    },
    {
        "title": "Titanic: 20 Years Later",
        "description": "Cameron revisits Titanic legacy and undersea technology advancements.",
        "location": {
            "lat": 41.7325,
            "lng": -49.9469
        },
        "event_start": 1997,
        "event_end": 2017
    },
    {
        "title": "Return of the King: The Fall and Rise of Elvis Presley",
        "description": "Chronicles Elvis’s triumphant 1968 comeback special and revived career.",
        "location": {
            "lat": 35.1495,
            "lng": -90.049
        },
        "event_start": 1968,
        "event_end": 1968
    },
    {
        "title": "Earth: One Amazing Day",
        "description": "Captures extraordinary stories of animal life over one sunrise-to-sunset day.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Crumb",
        "description": "Deep dive into underground cartoonist R. Crumb’s psyche and art.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1970,
        "event_end": 1994
    },
    {
        "title": "Sea Lions of the Galapagos",
        "description": "Follows sea lion pup Leo learning survival with his mother in Galápagos.",
        "location": {
            "lat": -0.9538,
            "lng": -90.9656
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "The Greatest Love Story Never Told",
        "description": "J‑Lo’s journey as an independent artist and self-love advocate.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Deep Web",
        "description": "Inside the Silk Road saga, darknet economics, and the Fall of DPR.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2011,
        "event_end": 2015
    },
    {
        "title": "The Evils Surrounding Elvis",
        "description": "Explores both the triumphs and darker machinations in Elvis’s life.",
        "location": {
            "lat": 35.1495,
            "lng": -90.049
        },
        "event_start": 1956,
        "event_end": 2023
    },
    {
        "title": "Federer: Twelve Final Days",
        "description": "Inside Federer’s last tournaments and intimate family moments during his final season.",
        "location": {
            "lat": 51.434,
            "lng": -0.214
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Hack Your Health: The Secrets of Your Gut",
        "description": "A lighthearted dive into how our gut impacts health, microbes, and happiness.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Fireball: Visitors from Darker Worlds",
        "description": "A journey exploring meteor impacts and the cosmic sparks that inspire wonder.",
        "location": {
            "lat": 46.2276,
            "lng": 2.2137
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Breaking the Silence: The Maria Soledad Case",
        "description": "Family and community fight for justice after the murder of a teen sparks protest.",
        "location": {
            "lat": -32.9436,
            "lng": -60.6505
        },
        "event_start": 1998,
        "event_end": 2024
    },
    {
        "title": "Behind the Curve",
        "description": "Insight into the flat-earth community mixing humor, conviction, and skepticism.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2016,
        "event_end": 2018
    },
    {
        "title": "Creating a Universe - The Making of Rebel Moon",
        "description": "Zack Snyder unleashes his sci-fi epic with behind-the-scenes universe building.",
        "location": {
            "lat": 30.2672,
            "lng": -97.7431
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "A Farewell to Ozark",
        "description": "Cast and crew share emotional reflections as Ozark draws to a close.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "The Real Haunted Mansion 2",
        "description": "Paranormal team investigates historic mansion’s ghostly legends and history.",
        "location": {
            "lat": 41.878,
            "lng": -93.0977
        },
        "event_start": 0,
        "event_end": 2023
    },
    {
        "title": "Thomas Müller - One of a Kind",
        "description": "A season with Müller at home and features the man behind the football legend.",
        "location": {
            "lat": 48.1351,
            "lng": 11.582
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "Bombshell: The Hedy Lamarr Story",
        "description": "Hollywood star & inventor—her life behind the cameras and behind the war-tech.",
        "location": {
            "lat": 48.2082,
            "lng": 16.3738
        },
        "event_start": 1930,
        "event_end": 1950
    },
    {
        "title": "Madonna: Truth or Dare",
        "description": "The raw, risque journey of Madonna’s Blond Ambition tour captured on film.",
        "location": {
            "lat": 34.6937,
            "lng": 135.5023
        },
        "event_start": 1990,
        "event_end": 1991
    },
    {
        "title": "Jim Henson Idea Man",
        "description": "A deep dive into Henson’s creative genius using private archives and family insight.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1955,
        "event_end": 1990
    },
    {
        "title": "Doctor Strange in the Multiverse of Madness (Assembled)",
        "description": "Raimi and cast unpack the MCU’s reality-bending masterpiece’s design and chaos.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "The Legacy of J Dilla",
        "description": "Tribute to hip-hop producer J Dilla and slow recognition of his influence.",
        "location": {
            "lat": 42.3314,
            "lng": -83.0458
        },
        "event_start": 1994,
        "event_end": 2006
    },
    {
        "title": "HOMECOMING: A film by Beyoncé",
        "description": "Cultural landmark capturing Beyoncé making history at Coachella.",
        "location": {
            "lat": 33.6839,
            "lng": -116.2372
        },
        "event_start": 2018,
        "event_end": 2018
    },
    {
        "title": "It's All Over: The Kiss That Changed Spanish Football",
        "description": "Players revisit iconic World Cup moment that transcended sport.",
        "location": {
            "lat": -37.8136,
            "lng": 144.9631
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Untold: The Liver King",
        "description": "Exploration of a raw-meat influencer’s rise, supplement brand, and cultural impact.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2020,
        "event_end": 2025
    },
    {
        "title": "Feels Good Man",
        "description": "Pepe creator fights to reclaim his cartoon from symbol of hate.",
        "location": {
            "lat": 45.5051,
            "lng": -122.675
        },
        "event_start": 2015,
        "event_end": 2020
    },
    {
        "title": "The Rescue",
        "description": "Thai cave rescue unfolds in gripping detail from perspectives of all involved.",
        "location": {
            "lat": 19.8469,
            "lng": 99.8837
        },
        "event_start": 2018,
        "event_end": 2018
    },
    {
        "title": "Deep Sea 3D",
        "description": "Immersive deep-sea exploration showed in breathtaking 3D IMAX.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2004,
        "event_end": 2005
    },
    {
        "title": "David Holmes: The Boy Who Lived",
        "description": "Paralyzed stuntman overcomes challenges, embracing life after accident.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2001,
        "event_end": 2023
    },
    {
        "title": "Navalny",
        "description": "Poisoned Putin critic returns to Russia, fights for justice and democracy.",
        "location": {
            "lat": 52.52,
            "lng": 13.405
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Steven Universe: The Movie: Behind the Curtain",
        "description": "Cast and crew explore creation of Steven Universe movie with behind-the-scenes insight.",
        "location": {
            "lat": 34.1808,
            "lng": -118.3089
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "RBG",
        "description": "Iconic Supreme Court Justice fights for equality and reveals her personal life.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2015,
        "event_end": 2018
    },
    {
        "title": "A Trip to Infinity",
        "description": "Animated exploration questioning the very nature of infinity with top scientists.",
        "location": {
            "lat": 43.6511,
            "lng": -79.347
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Turn Every Page – The Adventures of Robert Caro and Robert Gottlieb",
        "description": "A behind-the-scenes look at New York’s famed author-editor collaboration.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2016,
        "event_end": 2022
    },
    {
        "title": "Is That Black Enough for You?!?",
        "description": "A look at 1970s Black cinema movement, crew interviews, film clips, and social context.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1970,
        "event_end": 2022
    },
    {
        "title": "Zoofobia",
        "description": "Lawyer explores granting orangutan legal personhood after polar bear’s death closure.",
        "location": {
            "lat": -34.6037,
            "lng": -58.3816
        },
        "event_start": 2019,
        "event_end": 2022
    },
    {
        "title": "Stories We Tell",
        "description": "Filmmaker Polley traces her family’s hidden history through shifting memories.",
        "location": {
            "lat": 43.6532,
            "lng": -79.3832
        },
        "event_start": 1970,
        "event_end": 2012
    },
    {
        "title": "Pope Francis: A Man of His Word",
        "description": "The Pope discusses faith, inequality, ecology, and justice in his own words.",
        "location": {
            "lat": 41.9029,
            "lng": 12.4534
        },
        "event_start": 2013,
        "event_end": 2018
    },
    {
        "title": "More Tomcat Tales",
        "description": "F-14 pilots and officers reflect on elite naval aviation and carrier life.",
        "location": {
            "lat": 36.8508,
            "lng": -76.2859
        },
        "event_start": 2020,
        "event_end": 2023
    },
    {
        "title": "Explorer",
        "description": "Sir Ranulph “Ran” Fiennes on epic expeditions and polar exploration.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1970,
        "event_end": 2022
    },
    {
        "title": "Keep Rolling",
        "description": "Hong Kong New Wave icon Ann Hui opens up about filmmaking and cultural identity.",
        "location": {
            "lat": 22.3193,
            "lng": 114.1694
        },
        "event_start": 1980,
        "event_end": 2020
    },
    {
        "title": "Race to the Summit",
        "description": "Ueli Steck vs. Dani Arnold compete for fastest north face ascent in Swiss Alps.",
        "location": {
            "lat": 46.8182,
            "lng": 8.2275
        },
        "event_start": 2015,
        "event_end": 2023
    },
    {
        "title": "The Unbreakable Tatiana Suarez",
        "description": "MMA fighter Suarez prepares comeback, inspiring Latinas everywhere.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2020,
        "event_end": 2024
    },
    {
        "title": "What Jennifer Did",
        "description": "A real crime doc揭秘Jennifer Pan’s involvement in her parents' shooting.",
        "location": {
            "lat": 43.589,
            "lng": -79.6441
        },
        "event_start": 2020,
        "event_end": 2024
    },
    {
        "title": "Andor: A Disney+ Day Special Look",
        "description": "A peek at behind-the-scenes of Andor ahead of Disney+ Day.",
        "location": {
            "lat": 51.5326,
            "lng": -0.6226
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Derek DelGaudio's In & of Itself",
        "description": "Magician DelGaudio interrogates identity and self through stage performance.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Louis Armstrong's Black & Blues",
        "description": "Unheard home recordings and footage reveal Armstrong’s personal and artistic journey.",
        "location": {
            "lat": 29.9511,
            "lng": -90.0715
        },
        "event_start": 1920,
        "event_end": 1971
    },
    {
        "title": "They Shall Not Grow Old",
        "description": "WWI veterans’ testimonies animated and colorized into gripping lived memory.",
        "location": {
            "lat": 50.9375,
            "lng": 6.9603
        },
        "event_start": 1914,
        "event_end": 1918
    },
    {
        "title": "Operation Varsity Blues: The College Admissions Scandal",
        "description": "Inside the scandal orchestrated by Rick Singer and wealthy parents cheating.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Hoop Dreams",
        "description": "Inner-city teens chase NBA dreams through suburban high school hoops.",
        "location": {
            "lat": 41.8781,
            "lng": -87.6392
        },
        "event_start": 1989,
        "event_end": 1994
    },
    {
        "title": "Becoming Warren Buffett",
        "description": "Rare home videos chronicle Buffett’s journey from boy to investment legend.",
        "location": {
            "lat": 41.2565,
            "lng": -95.9345
        },
        "event_start": 1930,
        "event_end": 2016
    },
    {
        "title": "Justin Bieber: Never Say Never",
        "description": "Bieber’s rise from viral kid to worldwide pop sensation on tour.",
        "location": {
            "lat": 43.3747,
            "lng": -80.345
        },
        "event_start": 2009,
        "event_end": 2010
    },
    {
        "title": "She-Hulk (Assembled)",
        "description": "Behind the scenes of Marvel’s comedic She-Hulk series tone and breaking the fourth wall.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Fathom",
        "description": "Biologists study whale communication across hemispheres to learn social culture.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2018,
        "event_end": 2021
    },
    {
        "title": "That Sugar Film",
        "description": "One man’s sugar diet exposes hidden sugars in so-called healthy foods.",
        "location": {
            "lat": -37.8136,
            "lng": 144.9631
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "Boys State",
        "description": "Texan teens build mock government in a window into the future of democracy.",
        "location": {
            "lat": 30.2672,
            "lng": -97.7431
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "Diego Maradona",
        "description": "Archival footage reveals Maradona’s peak years with Napoli and Argentina.",
        "location": {
            "lat": -34.6037,
            "lng": -58.3816
        },
        "event_start": 1976,
        "event_end": 1987
    },
    {
        "title": "Shark Beach with Chris Hemsworth",
        "description": "Chris Hemsworth meets shark experts to study apex predator behavior.",
        "location": {
            "lat": -33.8688,
            "lng": 151.2093
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "In Plain Sight: Intelligence & UFOs",
        "description": "Former intelligence officers discuss declassified UFO files and government secrecy.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Kiss the Ground",
        "description": "Regenerative farming could repair soil and climate, reveal environmental path forward.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Director by Night",
        "description": "Composer Giacchino takes director's seat for Werewolf by Night, explores creative process.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Sensitive: The Untold Story",
        "description": "Examines high sensitivity trait found in 20% of population, via science and experience.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2014,
        "event_end": 2015
    },
    {
        "title": "Howard",
        "description": "Rare footage captures Howard Ashman’s career in musical storytelling.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1950,
        "event_end": 1990
    },
    {
        "title": "Stutz",
        "description": "Psychiatrist Stutz uses visual therapy model while conversing with Jonah Hill.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2000,
        "event_end": 2022
    },
    {
        "title": "Inside the Mind of a Dog",
        "description": "Scientific insight into dog cognition, emotions, and human bonding.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Waking Sleeping Beauty",
        "description": "Inside Disney's creative battle that led to studio’s animated renaissance.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1984,
        "event_end": 1994
    },
    {
        "title": "Looking for Richard",
        "description": "Pacino examines Shakespeare’s relevance today via production/workshop.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1994,
        "event_end": 1996
    },
    {
        "title": "Civil: Ben Crump",
        "description": "Crump’s path as civil rights lawyer amid ongoing Black justice cases.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Tyson",
        "description": "Mike Tyson bares his life and legacy in raw self-reflection and boxing footage.",
        "location": {
            "lat": 36.1699,
            "lng": -115.1398
        },
        "event_start": 1985,
        "event_end": 2007
    },
    {
        "title": "Stuntwomen: The Untold Hollywood Story",
        "description": "Chronicles female stunt professionals shaping blockbuster action across eras.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1920,
        "event_end": 2020
    },
    {
        "title": "A Brief History of Time",
        "description": "Physicist Hawking’s life and breakthroughs told through personal and academic lens.",
        "location": {
            "lat": 52.2043,
            "lng": -0.1218
        },
        "event_start": 1963,
        "event_end": 1991
    },
    {
        "title": "Surviving Paradise: A Family Tale",
        "description": "Kalahari wildlife families struggle together in drought-driven fight for survival.",
        "location": {
            "lat": -22.3285,
            "lng": 24.6849
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Tony Hawk: Until the Wheels Fall Off",
        "description": "Iconic skateboarder’s journey from youth to legend with rare archival footage.",
        "location": {
            "lat": 33.1959,
            "lng": -117.3795
        },
        "event_start": 1990,
        "event_end": 2022
    },
    {
        "title": "Marvel Studios' 2021 Disney+ Day Special",
        "description": "Recap and preview of MCU content for Disney+ Day celebration.",
        "location": {
            "lat": 34.1808,
            "lng": -118.3089
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Time",
        "description": "Fox Rich fights for her husband’s release, illustrating love and perseverance.",
        "location": {
            "lat": 30.4515,
            "lng": -91.1871
        },
        "event_start": 2000,
        "event_end": 2020
    },
    {
        "title": "Guardians of the Galapagos",
        "description": "Follows Sea Lions production and celebrates Galápagos’ natural ecosystem.",
        "location": {
            "lat": -0.9538,
            "lng": -90.9656
        },
        "event_start": 2023,
        "event_end": 2025
    },
    {
        "title": "Woodstock 99: Peace, Love, and Rage",
        "description": "Explores Woodstock '99’s chaos, riots, and cultural fallout with sharp insight.",
        "location": {
            "lat": 42.7194,
            "lng": -75.4844
        },
        "event_start": 1999,
        "event_end": 1999
    },
    {
        "title": "Stevie Van Zandt: Disciple",
        "description": "Traces Van Zandt’s decades-long musical and cultural journey.",
        "location": {
            "lat": 40.223,
            "lng": -74.0128
        },
        "event_start": 1970,
        "event_end": 2024
    },
    {
        "title": "The Guardian of the Monarchs",
        "description": "Conservationist vanishes after defending monarch butterfly sanctuary.",
        "location": {
            "lat": 19.566,
            "lng": -100.1811
        },
        "event_start": 2018,
        "event_end": 2024
    },
    {
        "title": "Where to Invade Next",
        "description": "Michael Moore visits countries to showcase successful policies the U.S. could adopt.",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 2014,
        "event_end": 2015
    },
    {
        "title": "Hannah Montana & Miley Cyrus: Best of Both Worlds Concert",
        "description": "High-energy concert capturing Miley’s double life on her debut tour.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2007,
        "event_end": 2008
    },
    {
        "title": "The Gettysburg Address",
        "description": "Analyzes Lincoln’s iconic speech via manuscript study and historical context.",
        "location": {
            "lat": 39.8309,
            "lng": -77.2311
        },
        "event_start": 1863,
        "event_end": 1863
    },
    {
        "title": "Icahn: The Restless Billionaire",
        "description": "Explores Carl Icahn’s activist investing and public stances on wealth issues.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1960,
        "event_end": 2022
    },
    {
        "title": "The Elephant Whisperers",
        "description": "Family bonds form between caretakers and orphaned elephant in India.",
        "location": {
            "lat": 12.2958,
            "lng": 76.6394
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Operation Hope – The Children Lost in the Amazon",
        "description": "Miraculous survival of children lost in Amazon jungle stitched with rescue efforts.",
        "location": {
            "lat": -1.8312,
            "lng": -71.7313
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Code Red: Youth of the Nation",
        "description": "Investigates rising school shootings and proposes prevention tools and strategies.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Good Night Oppy",
        "description": "Narrates history of NASA’s Mars rover Opportunity and its record-breaking mission.",
        "location": {
            "lat": 34.1911,
            "lng": -118.1503
        },
        "event_start": 2003,
        "event_end": 2019
    },
    {
        "title": "Lover, Stalker, Killer",
        "description": "Romantic obsession turns deadly in chilling true-crime doc.",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Marley",
        "description": "Definitive biopic covering Bob Marley’s musical and social influence.",
        "location": {
            "lat": 18.1096,
            "lng": -77.2975
        },
        "event_start": 1960,
        "event_end": 1981
    },
    {
        "title": "Restrepo",
        "description": "Soldiers endure frontline combat in Afghanistan’s deadly Korengal Valley.",
        "location": {
            "lat": 34.8754,
            "lng": 70.3243
        },
        "event_start": 2007,
        "event_end": 2008
    },
    {
        "title": "Fallout",
        "description": "Examines Shute’s career and nuclear fears through On the Beach.",
        "location": {
            "lat": -37.8136,
            "lng": 144.9631
        },
        "event_start": 1940,
        "event_end": 1959
    },
    {
        "title": "Turtle Power: The Definitive History …",
        "description": "Traces rise of TMNT from comic oddity to global franchise.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1984,
        "event_end": 2014
    },
    {
        "title": "e‑motion",
        "description": "Explores emotion-based healing through global spiritual teachings.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2012,
        "event_end": 2014
    },
    {
        "title": "Why Did You Kill Me?",
        "description": "Family uses social media to unmask daughter’s killers.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2018,
        "event_end": 2021
    },
    {
        "title": "Clint Eastwood: Make My Day",
        "description": "Lifetime look at Eastwood’s multifaceted film legacy.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1950,
        "event_end": 2023
    },
    {
        "title": "Carlos",
        "description": "Santana shares his story with rare footage and firsthand voice.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1960,
        "event_end": 2023
    },
    {
        "title": "Roadrunner: A Film About Anthony Bourdain",
        "description": "Bourdain’s rise, travels, and legacy portrayed in raw personal storytelling.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1998,
        "event_end": 2018
    },
    {
        "title": "American Swing",
        "description": "Chronicles debauched era of Plato’s Retreat swing-era club.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1970,
        "event_end": 1980
    },
    {
        "title": "2022 Rock & Roll Hall of Fame Induction Ceremony",
        "description": "Rock legends are honored live with performances and tributes.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Hearts and Minds",
        "description": "Contrasts war rhetoric with graphic realities to critique U.S. strategy.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1964,
        "event_end": 1974
    },
    {
        "title": "Gaga: Five Foot Two",
        "description": "Lady Gaga’s emotional and creative struggle leading up to the Super Bowl.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2016,
        "event_end": 2017
    },
    {
        "title": "The Loneliest Whale: The Search for 52",
        "description": "Scientists pursue mysterious “52 Hz whale” whose solo calls resonate with humanity.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2018,
        "event_end": 2021
    },
    {
        "title": "The Last Waltz",
        "description": "The Band’s live farewell with star-studded performances immortalized by Scorsese.",
        "location": {
            "lat": 37.775,
            "lng": -122.4183
        },
        "event_start": 1976,
        "event_end": 1976
    },
    {
        "title": "Capitalism: A Love Story",
        "description": "Michael Moore examines the impact of corporate power on everyday Americans.",
        "location": {
            "lat": 42.3314,
            "lng": -83.0458
        },
        "event_start": 2007,
        "event_end": 2009
    },
    {
        "title": "One World: Together at Home",
        "description": "Live broadcast raising funds for frontline COVID-19 healthcare workers.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2020,
        "event_end": 2020
    },
    {
        "title": "Knock Down the House",
        "description": "Female grassroots candidates challenge political incumbents in midterms.",
        "location": {
            "lat": 40.8448,
            "lng": -72.8648
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Making 1899",
        "description": "Behind the scenes on sci-fi series using virtual production technology.",
        "location": {
            "lat": 52.52,
            "lng": 13.405
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "The Paley Center Salutes Parks and Recreation",
        "description": "Celebration event honoring one of TV’s most beloved sitcoms.",
        "location": {
            "lat": 40.7527,
            "lng": -73.9772
        },
        "event_start": 2020,
        "event_end": 2020
    },
    {
        "title": "What We Left Behind: Looking Back at DS9",
        "description": "Cast and crew reflect on legacy and potential future of Deep Space Nine.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2017,
        "event_end": 2018
    },
    {
        "title": "Marvel: 75 Years, from Pulp to Pop!",
        "description": "A celebration of Marvel’s history and future, hosted by Emily VanCamp.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "Angèle",
        "description": "Belgian pop star explores fame's emotional highs and lows in her personal journey.",
        "location": {
            "lat": 50.8503,
            "lng": 4.3517
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Cave of Forgotten Dreams",
        "description": "Herzog films inside ancient cave art in 3D for the first time.",
        "location": {
            "lat": 44.1235,
            "lng": 4.4024
        },
        "event_start": -30000,
        "event_end": -30000
    },
    {
        "title": "Chasing Ice",
        "description": "Photographer James Balog captures dramatic glacier retreat on camera.",
        "location": {
            "lat": 82.5018,
            "lng": -62.3481
        },
        "event_start": 2007,
        "event_end": 2012
    },
    {
        "title": "Ryuichi Sakamoto: Coda",
        "description": "Composer Sakamoto fuses music with activism after Fukushima and cancer diagnosis.",
        "location": {
            "lat": 35.6762,
            "lng": 139.6503
        },
        "event_start": 2011,
        "event_end": 2017
    },
    {
        "title": "Marvel Studios Assembled: The Making of Echo",
        "description": "Chronicles production of Echo, emphasizing representation of Deaf/Native culture.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "That's Entertainment! III",
        "description": "Musical stars reflect on MGM's golden age song-and-dance legacy.",
        "location": {
            "lat": 34.1808,
            "lng": -118.3089
        },
        "event_start": 1929,
        "event_end": 1994
    },
    {
        "title": "I Am Greta",
        "description": "Greta Thunberg’s climate strikes spark a worldwide youth movement.",
        "location": {
            "lat": 59.3293,
            "lng": 18.0686
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Jailbreak: Love on the Run",
        "description": "Officer’s illicit romance with inmate escalates into full prison escape saga.",
        "location": {
            "lat": 32.3182,
            "lng": -86.9023
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Living with Leopards",
        "description": "Leopard cubs observed from infancy to adulthood, revealing wild behaviors.",
        "location": {
            "lat": -25.7313,
            "lng": 28.2184
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Stone Cold Steve Austin: The Bottom Line…",
        "description": "Career-spanning look at Austin’s wrestling dominance and persona.",
        "location": {
            "lat": 30.2672,
            "lng": -97.7431
        },
        "event_start": 1996,
        "event_end": 2011
    },
    {
        "title": "Powaqqatsi",
        "description": "Poetic exploration of modernization’s impact on non-Western societies.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1986,
        "event_end": 1988
    },
    {
        "title": "You Are Not Alone: Fighting the Wolf Pack",
        "description": "Film tackles the San Fermín abuse case and its societal impact.",
        "location": {
            "lat": 42.8125,
            "lng": -1.6458
        },
        "event_start": 2016,
        "event_end": 2024
    },
    {
        "title": "Unity",
        "description": "Contemplates humanity's failure to unite despite cultural and scientific progress.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2013,
        "event_end": 2015
    },
    {
        "title": "Chiefsaholic: A Wolf in Chiefs Clothing",
        "description": "Passionate fan’s secret bank robbery life unveiled after arrest.",
        "location": {
            "lat": 39.0997,
            "lng": -94.5786
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Orgasm Inc: The Story of OneTaste",
        "description": "From wellness hype to scandal—OneTaste’s dark trajectory investigated.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2016,
        "event_end": 2022
    },
    {
        "title": "Man on Wire",
        "description": "Philippe Pettit’s high-wire stunt atop the Twin Towers immortalized.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1974,
        "event_end": 1974
    },
    {
        "title": "The Last Journey",
        "description": "Swedish duo explore father’s past on a soul‑searching trip to France.",
        "location": {
            "lat": 46.2276,
            "lng": 2.2137
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Kevin Hart: Let Me Explain",
        "description": "Hart’s stand-up tour brings explosive energy and candid life stories.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2012,
        "event_end": 2012
    },
    {
        "title": "Steve Jobs: The Man in the Machine",
        "description": "A hard-hitting critique on Steve Jobs’ mythic legacy.",
        "location": {
            "lat": 37.3229,
            "lng": -122.0322
        },
        "event_start": 2010,
        "event_end": 2015
    },
    {
        "title": "Bitter, Sweet, Seoul",
        "description": "Global video mosaic captures Seoul’s heart through thousands of faces.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2013,
        "event_end": 2013
    },
    {
        "title": "Shine a Light",
        "description": "Stones’ live performance directed by Scorsese in intimate setting.",
        "location": {
            "lat": 40.7808,
            "lng": -73.9819
        },
        "event_start": 2006,
        "event_end": 2006
    },
    {
        "title": "Won’t You Be My Neighbor?",
        "description": "Fred Rogers’ empathy and legacy in children’s television celebrated.",
        "location": {
            "lat": 40.4406,
            "lng": -79.9959
        },
        "event_start": 1968,
        "event_end": 2001
    },
    {
        "title": "Thriller 40",
        "description": "The story behind MJ’s game-changing Thriller album, with vintage footage.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1982,
        "event_end": 2022
    },
    {
        "title": "The Gleaners and I",
        "description": "Varda films rural gleaning culture and its socio-economic echoes.",
        "location": {
            "lat": 46.2276,
            "lng": 2.2137
        },
        "event_start": 1999,
        "event_end": 2000
    },
    {
        "title": "Making The Witcher: Season 2",
        "description": "Behind-the-scenes of Season 2, with monsters, armor, and fantasy lore.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "David Lynch: The Art Life",
        "description": "Lynch’s early life and creative roots explored in intimate detail.",
        "location": {
            "lat": 39.9526,
            "lng": -75.1652
        },
        "event_start": 1946,
        "event_end": 2017
    },
    {
        "title": "Born to Be Wild",
        "description": "Wildlife experts bond with orphaned orangutans and elephants.",
        "location": {
            "lat": 1.4566,
            "lng": 114.0448
        },
        "event_start": 2008,
        "event_end": 2010
    },
    {
        "title": "Unknown: Cave of Bones",
        "description": "Discovery of ancient burials challenges human origins understanding.",
        "location": {
            "lat": -25.9479,
            "lng": 28.1658
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "The Last Movie Ride",
        "description": "Centuries of American cinema through personal memories and archival magic.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1920,
        "event_end": 2020
    },
    {
        "title": "The Ark of Lilburn",
        "description": "Son tries to save father’s dream to build a steel boat amid family drama.",
        "location": {
            "lat": 33.8986,
            "lng": -84.1375
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Whitney",
        "description": "Reveals Whitney Houston’s raw talent and private tragedies.",
        "location": {
            "lat": 40.7357,
            "lng": -74.1724
        },
        "event_start": 1980,
        "event_end": 2012
    },
    {
        "title": "Temple of Film: 100 Years of the Egyptian Theatre",
        "description": "Celebrates century-old Hollywood landmark’s cultural and cinematic role.",
        "location": {
            "lat": 34.1019,
            "lng": -118.3265
        },
        "event_start": 1922,
        "event_end": 2022
    },
    {
        "title": "Cartel Land",
        "description": "Vigilantes in Mexico and the U.S. take on violent cartels.",
        "location": {
            "lat": 19.566,
            "lng": -104.0535
        },
        "event_start": 2013,
        "event_end": 2015
    },
    {
        "title": "Under the Sea 3D",
        "description": "Spectacular 3D voyage through diverse underwater ecosystems.",
        "location": {
            "lat": -18.2871,
            "lng": 147.6992
        },
        "event_start": 2007,
        "event_end": 2009
    },
    {
        "title": "The Imposter",
        "description": "A stranger claiming to be a missing boy shocks two worlds.",
        "location": {
            "lat": 29.4241,
            "lng": -98.4936
        },
        "event_start": 1994,
        "event_end": 1997
    },
    {
        "title": "Overnight",
        "description": "Bar-tender turned filmmaker experiences fame crash.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1996,
        "event_end": 2003
    },
    {
        "title": "Crownsville Hospital: From Lunacy to Legacy",
        "description": "Traces Maryland hospital’s heartbreaking psychiatric history.",
        "location": {
            "lat": 39.0168,
            "lng": -76.6101
        },
        "event_start": 1911,
        "event_end": 2018
    },
    {
        "title": "Untold: Sign Stealer",
        "description": "Athlete addresses charges of collegiate sign-stealing.",
        "location": {
            "lat": 42.2808,
            "lng": -83.743
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "I Am Chris Farley",
        "description": "Trainers, friends, and family reminisce on Farley’s legacy.",
        "location": {
            "lat": 43.0731,
            "lng": -89.4012
        },
        "event_start": 1990,
        "event_end": 1997
    },
    {
        "title": "OLIVIA RODRIGO: driving home 2 u",
        "description": "Rodrigo retraces the emotional journey of creating SOUR.",
        "location": {
            "lat": 40.7608,
            "lng": -111.891
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "ABBA: The Movie",
        "description": "Follows pop icons on tour in their peak years.",
        "location": {
            "lat": -33.8688,
            "lng": 151.2093
        },
        "event_start": 1976,
        "event_end": 1977
    },
    {
        "title": "Citizenfour",
        "description": "First-hand footage of Snowden’s disclosure of global surveillance.",
        "location": {
            "lat": 22.3193,
            "lng": 114.1694
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "Killing Lincoln",
        "description": "Reenacts Lincoln’s assassination with dramatic flair.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1865,
        "event_end": 1865
    },
    {
        "title": "Everest",
        "description": "Climbers battle the elements on the world’s highest peak.",
        "location": {
            "lat": 27.9881,
            "lng": 86.925
        },
        "event_start": 1996,
        "event_end": 1996
    },
    {
        "title": "The Only Girl in the Orchestra",
        "description": "Orin O’Brien breaks barriers in the NY Philharmonic.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1966,
        "event_end": 2022
    },
    {
        "title": "Making The Witcher: Season 3",
        "description": "Behind-the-scenes of Witcher Season 3’s fantasy world and fight prep.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "An Inconvenient Sequel",
        "description": "Gore’s climate activism picks up pace as earth heats up.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2006,
        "event_end": 2017
    },
    {
        "title": "Hail Satan?",
        "description": "A cheeky portrayal of The Satanic Temple’s legal activism.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2013,
        "event_end": 2019
    },
    {
        "title": "Score: A Film Music Documentary",
        "description": "Celebrates legendary film composers and their creative methods.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 2017
    },
    {
        "title": "Zero Days",
        "description": "A deep dive into Stuxnet’s shadowy cyberwar.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2010,
        "event_end": 2016
    },
    {
        "title": "Look at Me: XXXTENTACION",
        "description": "XXXTENTACION’s tragic arc from fame to controversy.",
        "location": {
            "lat": 26.1901,
            "lng": -80.3659
        },
        "event_start": 2016,
        "event_end": 2018
    },
    {
        "title": "BLACKPINK WORLD TOUR [BORN PINK] IN CINEMAS",
        "description": "Global cinema release of BLACKPINK’s record-breaking tour.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "The Kid Stays in the Picture",
        "description": "Inside Hollywood with legendary producer Robert Evans.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1966,
        "event_end": 2002
    },
    {
        "title": "Dogtown and Z‑Boys",
        "description": "The birth of modern skateboarding in gritty Venice.",
        "location": {
            "lat": 33.985,
            "lng": -118.4695
        },
        "event_start": 1975,
        "event_end": 1976
    },
    {
        "title": "Girl in the Picture",
        "description": "A daughter’s kidnapping unearths decades-old deceit.",
        "location": {
            "lat": 43.7844,
            "lng": -88.7879
        },
        "event_start": 2000,
        "event_end": 2022
    },
    {
        "title": "Machine Gun Kelly's Life In Pink",
        "description": "MGK faces fame’s chaos, music, and parenthood.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Lauda – The Untold Story",
        "description": "F1 legend Lauda’s crash and miraculous comeback.",
        "location": {
            "lat": 50.3356,
            "lng": 6.9483
        },
        "event_start": 1976,
        "event_end": 1976
    },
    {
        "title": "Folklore: The Long Pond Studio Sessions",
        "description": "Taylor Swift unpacks every track live and raw.",
        "location": {
            "lat": 41.7001,
            "lng": -73.9207
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "Manny",
        "description": "From poverty to global icon: Manny Pacquiao’s inspiring journey.",
        "location": {
            "lat": 14.5995,
            "lng": 120.9842
        },
        "event_start": 1995,
        "event_end": 2013
    },
    {
        "title": "A Beautiful Planet",
        "description": "A stunning Earth portrait from space, via ISS camera.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2015,
        "event_end": 2016
    },
    {
        "title": "Take Me to the River",
        "description": "Music legends mentor the next generation in Memphis.",
        "location": {
            "lat": 35.1495,
            "lng": -90.049
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "Who Are You, Charlie Brown?",
        "description": "Charlie Brown’s legacy celebrated by celebrities.",
        "location": {
            "lat": 38.4404,
            "lng": -122.7141
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "The Last Repair Shop",
        "description": "LA technicians save student instruments and dreams.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Pure Instinct Montana",
        "description": "The raw instincts of Montana’s fisher community.",
        "location": {
            "lat": 46.8797,
            "lng": -110.3626
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Polar Bear",
        "description": "A mother polar bear faces climate challenges in the Arctic.",
        "location": {
            "lat": 82.5018,
            "lng": -62.3481
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Titanic: 25 Years Later with James Cameron",
        "description": "Cameron tests whether Jack could’ve survived with Rose.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1997,
        "event_end": 2022
    },
    {
        "title": "Supersonic",
        "description": "Oasis rise in early ’90s Manchester, fueled by sibling rivalry.",
        "location": {
            "lat": 53.4808,
            "lng": -2.2426
        },
        "event_start": 1991,
        "event_end": 1994
    },
    {
        "title": "The Velvet Queen",
        "description": "Hunt for elusive snow leopard in remote Himalayas.",
        "location": {
            "lat": 32.428,
            "lng": 80.0999
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "That's Entertainment!",
        "description": "Celebrates MGM musical legacy through classic clips.",
        "location": {
            "lat": 34.1808,
            "lng": -118.3089
        },
        "event_start": 1929,
        "event_end": 1973
    },
    {
        "title": "\"Sr.\"",
        "description": "Homage to filmmaker Robert Downey Sr.’s wild career.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 2021
    },
    {
        "title": "Stan Lee",
        "description": "The life and legacy of Marvel’s iconic co-creator.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1961,
        "event_end": 2018
    },
    {
        "title": "Crip Camp: A Disability Revolution",
        "description": "Summer camp sparks a national movement for disability rights.",
        "location": {
            "lat": 41.7001,
            "lng": -73.9207
        },
        "event_start": 1971,
        "event_end": 1972
    },
    {
        "title": "H.H. Holmes: America's First Serial Killer",
        "description": "Inside the terrifying “Murder Castle” of Dr. Holmes.",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 1891,
        "event_end": 1894
    },
    {
        "title": "The Elephant Queen",
        "description": "A matriarch leads her herd across hardship and hope.",
        "location": {
            "lat": 0.1521,
            "lng": 37.2794
        },
        "event_start": 2017,
        "event_end": 2019
    },
    {
        "title": "The Mole Agent",
        "description": "Elderly spy uncovers joy and secrets in a care home.",
        "location": {
            "lat": -33.4489,
            "lng": -70.6693
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "Ghost of the Mountains",
        "description": "A team seeks elusive snow leopards in harsh terrain.",
        "location": {
            "lat": 32.428,
            "lng": 80.0999
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Puff: Wonders of the Reef",
        "description": "A baby pufferfish’s journey through coral wonder.",
        "location": {
            "lat": -18.2871,
            "lng": 147.6992
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Street Gang: How We Got to Sesame Street",
        "description": "The origins of Sesame Street through its creators.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1966,
        "event_end": 2021
    },
    {
        "title": "Justin Bieber: Rise to Fame",
        "description": "Bieber’s transformation from cover kid to global star.",
        "location": {
            "lat": 43.37,
            "lng": -80.316
        },
        "event_start": 2008,
        "event_end": 2011
    },
    {
        "title": "Blood Brothers: Malcolm X & Muhammad Ali",
        "description": "A powerful bond fractured by differing visions.",
        "location": {
            "lat": 39.2904,
            "lng": -76.6122
        },
        "event_start": 1960,
        "event_end": 1975
    },
    {
        "title": "j‑hope IN THE BOX",
        "description": "BTS’s j‑hope opens his world on solo creation.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "African Cats",
        "description": "Follows lions and cheetahs through family struggles.",
        "location": {
            "lat": -1.4061,
            "lng": 35.0292
        },
        "event_start": 2008,
        "event_end": 2011
    },
    {
        "title": "Evil Beneath",
        "description": "Ghost-hunting explores America’s oldest city.",
        "location": {
            "lat": 29.9012,
            "lng": -81.3124
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Wild Wild Space",
        "description": "Startups race to lead commercial inner-space access.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2022,
        "event_end": 2024
    },
    {
        "title": "Found",
        "description": "Genetic tools unite three long-separated cousins.",
        "location": {
            "lat": 37.0902,
            "lng": -95.7129
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Tim McGraw and Faith Hill: Country Lovin'",
        "description": "Love story of country power couple’s personal journey.",
        "location": {
            "lat": 36.1627,
            "lng": -86.7816
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Beyond Utopia",
        "description": "Pastor rescues North Korean refugees via secret routes.",
        "location": {
            "lat": 39.0392,
            "lng": 125.7625
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Always at The Carlyle",
        "description": "Iconic hotel’s legacy told through its guests.",
        "location": {
            "lat": 40.7656,
            "lng": -73.9747
        },
        "event_start": 2000,
        "event_end": 2018
    },
    {
        "title": "20,000 Days on Earth",
        "description": "One “day in the life” of Nick Cave’s creative society.",
        "location": {
            "lat": 50.8225,
            "lng": -0.1372
        },
        "event_start": 2014,
        "event_end": 2014
    },
    {
        "title": "The Antisocial Network: Memes to Mayhem",
        "description": "From harmless memes to extremist online chaos.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2000,
        "event_end": 2024
    },
    {
        "title": "Backstreet Boys: Show 'Em What You're Made Of",
        "description": "Behind-the-scenes look at Backstreet Boys' journey and legacy",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2013,
        "event_end": 2015
    },
    {
        "title": "The Final: Attack on Wembley",
        "description": "Ticketless fans storm Wembley during Euro 2020 final",
        "location": {
            "lat": 51.556,
            "lng": -0.2795
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Savage Man Savage Beast",
        "description": "Shocking mondo film exploring human-animal savagery",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1970,
        "event_end": 1975
    },
    {
        "title": "Real Haunts 3",
        "description": "Investigations of 4 American paranormal hotspots",
        "location": {
            "lat": 44.9778,
            "lng": -93.265
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "American Nightmare: Becoming Cody Rhodes",
        "description": "Follows wrestler Cody Rhodes’ return to WWE legacy",
        "location": {
            "lat": 36.1658,
            "lng": -86.7844
        },
        "event_start": 2016,
        "event_end": 2023
    },
    {
        "title": "Page One: Inside the New York Times",
        "description": "Inside the changing newsroom of the NY Times",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2008,
        "event_end": 2010
    },
    {
        "title": "Valentino: The Last Emperor",
        "description": "Final chapter in designer Valentino's career",
        "location": {
            "lat": 41.9028,
            "lng": 12.4964
        },
        "event_start": 2005,
        "event_end": 2007
    },
    {
        "title": "Making Waves: The Art of Cinematic Sound",
        "description": "Explores art and history of film sound design",
        "location": {
            "lat": 34.0928,
            "lng": -118.3287
        },
        "event_start": 2016,
        "event_end": 2019
    },
    {
        "title": "The Truth vs. Alex Jones",
        "description": "Trials of Alex Jones over Sandy Hook lies",
        "location": {
            "lat": 41.3083,
            "lng": -72.9279
        },
        "event_start": 2020,
        "event_end": 2023
    },
    {
        "title": "Happier Than Ever: A Love Letter to Los Angeles",
        "description": "Billie Eilish performs album live at Hollywood Bowl",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Lucy and Desi",
        "description": "Examines love and legacy of Lucille Ball & Desi Arnaz",
        "location": {
            "lat": 34.0928,
            "lng": -118.3287
        },
        "event_start": 1940,
        "event_end": 1989
    },
    {
        "title": "Last Take: Rust and the Story of Halyna",
        "description": "Explores tragic shooting of cinematographer Halyna Hutchins",
        "location": {
            "lat": 34.5199,
            "lng": -105.8701
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Becoming Santa",
        "description": "A man trains to become Santa for one season",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2010,
        "event_end": 2010
    },
    {
        "title": "Athlete A",
        "description": "How reporters exposed abuse in USA Gymnastics",
        "location": {
            "lat": 39.7684,
            "lng": -86.1581
        },
        "event_start": 2016,
        "event_end": 2019
    },
    {
        "title": "Propaganda",
        "description": "Satirical film critiques Western consumerism",
        "location": {
            "lat": 39.0392,
            "lng": 125.7625
        },
        "event_start": 2012,
        "event_end": 2013
    },
    {
        "title": "Renaissance: A Film by Beyoncé",
        "description": "Beyoncé’s world tour captured in a visual experience",
        "location": {
            "lat": 59.3293,
            "lng": 18.0686
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Schumacher",
        "description": "Portrait of F1 legend Michael Schumacher",
        "location": {
            "lat": 50.1109,
            "lng": 8.6821
        },
        "event_start": 1991,
        "event_end": 2012
    },
    {
        "title": "Be Natural: The Untold Story of Alice Guy-Blaché",
        "description": "Rediscovery of cinema’s first female filmmaker",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1896,
        "event_end": 1968
    },
    {
        "title": "The Contestant",
        "description": "Japanese man unknowingly stars in hidden TV show",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 1998,
        "event_end": 1999
    },
    {
        "title": "Attack of the Hollywood Clichés!",
        "description": "A comic look at overused movie tropes",
        "location": {
            "lat": 34.0928,
            "lng": -118.3287
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "The Lost Leonardo",
        "description": "Art world unravels over Salvator Mundi painting",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2008,
        "event_end": 2020
    },
    {
        "title": "Breaking Boundaries: The Science of Our Planet",
        "description": "Urgent call to action on Earth’s biosphere limits",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2015,
        "event_end": 2021
    },
    {
        "title": "Skywalkers: A Love Story",
        "description": "Daredevils scale world's tallest buildings to perform illegal aerial stunts",
        "location": {
            "lat": 3.139,
            "lng": 101.6869
        },
        "event_start": 2020,
        "event_end": 2023
    },
    {
        "title": "Naqoyqatsi",
        "description": "Global montage explores tech, war, consumerism in visual symphony",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1995,
        "event_end": 2001
    },
    {
        "title": "Ingrid Bergman: In Her Own Words",
        "description": "A portrait of the iconic Swedish actress through her letters and diaries",
        "location": {
            "lat": 59.3293,
            "lng": 18.0686
        },
        "event_start": 1915,
        "event_end": 1982
    },
    {
        "title": "Special When Lit",
        "description": "Documentary on the rise and nostalgia of pinball culture",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 1940,
        "event_end": 2009
    },
    {
        "title": "Meet the Pickles: The Making of \"Win or Lose\"",
        "description": "Behind-the-scenes look at Pixar's first original long-form series",
        "location": {
            "lat": 37.836,
            "lng": -122.289
        },
        "event_start": 2023,
        "event_end": 2025
    },
    {
        "title": "Gimme Danger",
        "description": "Iggy Pop and The Stooges' raw, chaotic music legacy",
        "location": {
            "lat": 42.2808,
            "lng": -83.743
        },
        "event_start": 1967,
        "event_end": 1974
    },
    {
        "title": "Why We Fight: The Battle of Britain",
        "description": "Propaganda film on Germany's failed aerial campaign in Britain",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1940,
        "event_end": 1941
    },
    {
        "title": "GameStop: Rise of the Players",
        "description": "Explores the amateur stock movement that shook Wall Street",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "Cheech & Chong's Last Movie",
        "description": "Chronicles the comedic duo’s legacy and influence",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1970,
        "event_end": 2025
    },
    {
        "title": "Fahrenheit 11/9",
        "description": "Michael Moore critiques American politics under Trump",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2016,
        "event_end": 2018
    },
    {
        "title": "Guillermo del Toro's Pinocchio: Handcarved Cinema",
        "description": "Behind-the-scenes look at del Toro’s stop-motion masterpiece",
        "location": {
            "lat": 45.5051,
            "lng": -122.675
        },
        "event_start": 2018,
        "event_end": 2022
    },
    {
        "title": "The Bee Gees: How Can You Mend a Broken Heart",
        "description": "Chronicles Bee Gees’ career and legacy across decades",
        "location": {
            "lat": 25.7617,
            "lng": -80.1918
        },
        "event_start": 1960,
        "event_end": 2003
    },
    {
        "title": "Camp Confidential: America's Secret Nazis",
        "description": "Jewish soldiers guard top Nazi POWs at secret US camp",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1943,
        "event_end": 1945
    },
    {
        "title": "The Commandant's Shadow",
        "description": "Survivor and Nazi descendant meet 80 years after Auschwitz",
        "location": {
            "lat": 50.0359,
            "lng": 19.1784
        },
        "event_start": 1940,
        "event_end": 2023
    },
    {
        "title": "American Symphony",
        "description": "Jon Batiste composes amid wife’s cancer battle",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Trust No One: The Hunt for the Crypto King",
        "description": "Mysterious death of crypto exchange CEO raises doubts",
        "location": {
            "lat": 43.651,
            "lng": -79.347
        },
        "event_start": 2014,
        "event_end": 2020
    },
    {
        "title": "Marvel Studios Assembled: The Making of Secret Invasion",
        "description": "Behind-the-scenes look at Marvel’s \"Secret Invasion\"",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Secret Lives of Orangutans",
        "description": "Life of orangutans in the rainforest through generations",
        "location": {
            "lat": 1.4927,
            "lng": 113.7481
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Let It Be",
        "description": "Beatles rehearse and perform in rooftop farewell",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1969,
        "event_end": 1969
    },
    {
        "title": "Conan O'Brien Can't Stop",
        "description": "Conan rebounds with live tour post-Tonight Show exit",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2010,
        "event_end": 2011
    },
    {
        "title": "Life to Afterlife: Death and Back",
        "description": "Four NDE survivors share shocking and comforting experiences after returning from death.",
        "location": {
            "lat": 33.4484,
            "lng": -112.074
        },
        "event_start": 2020,
        "event_end": 2020
    },
    {
        "title": "Sam Smith: Dreams Come True",
        "description": "Follows Sam Smith's rise from humble beginnings to global music stardom.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2010,
        "event_end": 2015
    },
    {
        "title": "Julia",
        "description": "A look at Julia Child's rise as a cooking icon and TV pioneer.",
        "location": {
            "lat": 42.3736,
            "lng": -71.1097
        },
        "event_start": 1961,
        "event_end": 2004
    },
    {
        "title": "The Beatles: Get Back - The Rooftop Concert",
        "description": "Final Beatles performance atop Apple Corps HQ remastered in IMAX.",
        "location": {
            "lat": 51.5136,
            "lng": -0.1456
        },
        "event_start": 1969,
        "event_end": 1969
    },
    {
        "title": "Sticky: A (Self) Love Story",
        "description": "Explores myths and facts about masturbation through candid interviews.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2016,
        "event_end": 2016
    },
    {
        "title": "Elvis on Tour",
        "description": "Captures Elvis Presley’s energetic 1972 tour with backstage and rehearsal footage.",
        "location": {
            "lat": 36.1627,
            "lng": -86.7816
        },
        "event_start": 1972,
        "event_end": 1972
    },
    {
        "title": "Making The Leopard",
        "description": "Behind-the-scenes look at adapting the Italian classic “The Leopard” into a series.",
        "location": {
            "lat": 37.5999,
            "lng": 13.6432
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "This Changes Everything",
        "description": "Investigates Hollywood gender inequality via firsthand industry accounts.",
        "location": {
            "lat": 34.0928,
            "lng": -118.3287
        },
        "event_start": 2010,
        "event_end": 2019
    },
    {
        "title": "Ryuichi Sakamoto: Opus",
        "description": "The final concert film by Ryuichi Sakamoto, a tribute to his legacy.",
        "location": {
            "lat": 35.6762,
            "lng": 139.6503
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Dueling Dragons",
        "description": "Cops and inner-city kids bond through a dragon boat racing team.",
        "location": {
            "lat": 28.5383,
            "lng": -81.3792
        },
        "event_start": 2016,
        "event_end": 2017
    },
    {
        "title": "Soufra",
        "description": "Refugee chef builds a catering business and food truck from a camp in Beirut.",
        "location": {
            "lat": 33.8938,
            "lng": 35.5018
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Tupac: Resurrection",
        "description": "Archival footage explores Tupac Shakur's revolutionary life and voice.",
        "location": {
            "lat": 37.8044,
            "lng": -122.2711
        },
        "event_start": 1971,
        "event_end": 1996
    },
    {
        "title": "Minding the Gap",
        "description": "Three friends skate and bond while confronting family trauma in the Rust Belt.",
        "location": {
            "lat": 42.2711,
            "lng": -89.0937
        },
        "event_start": 2010,
        "event_end": 2017
    },
    {
        "title": "Lamar Odom: Reborn",
        "description": "NBA champ Lamar Odom uses psychedelics to tackle addiction and anxiety.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Lords of Scam",
        "description": "Scammers profit from EU carbon schemes until their empire collapses.",
        "location": {
            "lat": 50.8503,
            "lng": 4.3517
        },
        "event_start": 2017,
        "event_end": 2021
    },
    {
        "title": "The Last Dragon",
        "description": "British team studies mythical dragons in a mockumentary style.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2002,
        "event_end": 2004
    },
    {
        "title": "Time Bomb Y2K",
        "description": "Looks back at the Y2K bug fears through archival footage and expert interviews.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1999,
        "event_end": 2000
    },
    {
        "title": "In Restless Dreams: The Music of Paul Simon",
        "description": "Paul Simon creates “Seven Psalms” while confronting aging, illness, and memory.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Beatles '64",
        "description": "Rare footage of Beatles’ 1964 arrival in NYC and legendary US breakout.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 0,
        "event_end": 0
    },
    {
        "title": "Missing: The Lucie Blackman Case",
        "description": "Explores the 2000 disappearance of Lucie Blackman and the pursuit of justice.",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2000,
        "event_end": 2000
    },
    {
        "title": "Catfish",
        "description": "Photographer’s online romance unravels in surprising self‑discovery journey.",
        "location": {
            "lat": 42.3314,
            "lng": -83.0458
        },
        "event_start": 2010,
        "event_end": 2010
    },
    {
        "title": "Oklahoma City Bombing: American Terror",
        "description": "Revisits the 1995 Oklahoma City bombing and its long-lasting repercussions.",
        "location": {
            "lat": 35.4676,
            "lng": -97.5164
        },
        "event_start": 1995,
        "event_end": 1995
    },
    {
        "title": "Strip Down, Rise Up",
        "description": "Women heal trauma through pole artistry and expressive movement.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "Dream Big: Engineering Our World",
        "description": "IMAX film celebrates global engineering marvels and human ingenuity.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Madu",
        "description": "Nigerian boy trains in Lagos and debuts at elite ballet school in England.",
        "location": {
            "lat": 6.5244,
            "lng": 3.3792
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Behind the Planet of the Apes",
        "description": "Theatrical journey through the making of the “Planet of the Apes” film series.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1968,
        "event_end": 1997
    },
    {
        "title": "The Women and the Murderer",
        "description": "Two women drive the investigation that caught serial killer Guy Georges.",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1991,
        "event_end": 2003
    },
    {
        "title": "Winged Migration",
        "description": "Stunning aerial journeys of migratory birds across continents.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1999,
        "event_end": 2001
    },
    {
        "title": "Aileen: Life and Death of a Serial Killer",
        "description": "In-depth interviews with Aileen Wuornos and courtroom footage.",
        "location": {
            "lat": 27.9944,
            "lng": -81.7603
        },
        "event_start": 1989,
        "event_end": 2002
    },
    {
        "title": "Slaughter Nick for President",
        "description": "Actor unexpectedly wins popularity and votes in Serbia.",
        "location": {
            "lat": 44.7866,
            "lng": 20.4489
        },
        "event_start": 2012,
        "event_end": 2013
    },
    {
        "title": "Memories of a Murderer: The Nilsen Tapes",
        "description": "Serial killer Dennis Nilsen narrates his life via haunting jail cell recordings.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1978,
        "event_end": 1983
    },
    {
        "title": "Christmas In Florida",
        "description": "Cancelled parade leads couple to embark on healing road trip through Florida.",
        "location": {
            "lat": 27.9944,
            "lng": -81.7603
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "Bigger Stronger Faster*",
        "description": "A critique of America's obsession with performance‑enhancing drugs and excellence.",
        "location": {
            "lat": 37.0902,
            "lng": -95.7129
        },
        "event_start": 2006,
        "event_end": 2008
    },
    {
        "title": "Mr. Dressup: The Magic of Make Believe",
        "description": "Celebrating Ernie Coombs’ legacy of creativity, kindness, and inclusive imagination.",
        "location": {
            "lat": 43.6532,
            "lng": -79.3832
        },
        "event_start": 1967,
        "event_end": 2023
    },
    {
        "title": "Rock Hudson: All That Heaven Allowed",
        "description": "Explores Rock Hudson’s public image versus hidden gay identity in Hollywood.",
        "location": {
            "lat": 34.0928,
            "lng": -118.3287
        },
        "event_start": 1950,
        "event_end": 1985
    },
    {
        "title": "Catch Me If You Can: Behind the Camera",
        "description": "Behind‑the‑scenes of Spielberg’s caper film, from casting to final cut.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2000,
        "event_end": 2003
    },
    {
        "title": "Graffiti Stories: From Dark Alleys to Bright Futures",
        "description": "Winnipeg youth find purpose and creativity through graffiti and hip‑hop.",
        "location": {
            "lat": 49.8951,
            "lng": -97.1384
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "20 Feet from Stardom",
        "description": "Tribute to career backup singers whose voices defined major hits.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 2012
    },
    {
        "title": "Outstanding: A Comedy Revolution",
        "description": "Chronicles rise of queer stand‑up comedy and its influence on social change.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1970,
        "event_end": 2024
    },
    {
        "title": "Growing Up Wild",
        "description": "Follows five newborn animals facing first challenges of survival in wild.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2014,
        "event_end": 2016
    },
    {
        "title": "Gonzo: The Life and Work of Dr. Hunter S. Thompson",
        "description": "Hunter S. Thompson’s wild, drug‑fueled rise and influence on journalism.",
        "location": {
            "lat": 39.1911,
            "lng": -106.8175
        },
        "event_start": 1965,
        "event_end": 1975
    },
    {
        "title": "Full Tilt Boogie",
        "description": "Inside-making of the cult hit \"From Dusk Till Dawn\" and its creative team.",
        "location": {
            "lat": 30.2672,
            "lng": -97.7431
        },
        "event_start": 1995,
        "event_end": 1997
    },
    {
        "title": "Milli Vanilli",
        "description": "Rise and scandalous fall of pop duo who lip‑synced their Grammy wins.",
        "location": {
            "lat": 48.1351,
            "lng": 11.582
        },
        "event_start": 1988,
        "event_end": 1990
    },
    {
        "title": "Deep Ocean: Descent into the Mariana Trench",
        "description": "NHK crew explores 7-mile deep trench and encounters giant squid.",
        "location": {
            "lat": 11.35,
            "lng": 142.2
        },
        "event_start": 2016,
        "event_end": 2018
    },
    {
        "title": "Apollo 17: The Untold Story of the Last Men on the Moon",
        "description": "Tribute to astronauts and teams behind Apollo 17's historic lunar mission.",
        "location": {
            "lat": 28.5729,
            "lng": -80.649
        },
        "event_start": 1972,
        "event_end": 1972
    },
    {
        "title": "Electric Boogaloo: The Wild, Untold Story of Cannon Films",
        "description": "Chronicles rise/fall of Cannon Films and their cult B‑movie empire.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1979,
        "event_end": 1994
    },
    {
        "title": "The True Cost",
        "description": "Investigates fashion industry’s human and environmental toll.",
        "location": {
            "lat": 23.8103,
            "lng": 90.4125
        },
        "event_start": 2010,
        "event_end": 2015
    },
    {
        "title": "Voyage of Time: Life's Journey",
        "description": "Cosmic exploration from universe formation to modern life on Earth.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": -600000000,
        "event_end": 2025
    },
    {
        "title": "Kokomo City",
        "description": "Intimate portrait of Black trans sex workers navigating survival and identity.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "All the Beauty and the Bloodshed",
        "description": "Nan Goldin’s life and activism vs Sackler depicted through intimate footage.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "The Beckoning Silence",
        "description": "Joe Simpson revisits 1936 Eiger tragedy that shaped his mountaineering.",
        "location": {
            "lat": 46.5775,
            "lng": 8.0056
        },
        "event_start": 1936,
        "event_end": 2007
    },
    {
        "title": "Justin Timberlake: FutureSex/LoveShow",
        "description": "JT electrifies Madison Square Garden with hits like SexyBack and Cry Me a River.",
        "location": {
            "lat": 40.7505,
            "lng": -73.9934
        },
        "event_start": 2006,
        "event_end": 2007
    },
    {
        "title": "Road Diary: Bruce Springsteen...",
        "description": "Behind-the-scenes look at Springsteen & E Street Band creation & rehearsals.",
        "location": {
            "lat": 40.127,
            "lng": -74.817
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Enigma",
        "description": "April Ashley and Amanda Lear’s intersecting transgender identity narratives told.",
        "location": {
            "lat": 51.5074,
            "lng": 0.127845
        },
        "event_start": 1950,
        "event_end": 2025
    },
    {
        "title": "Amazing Grace",
        "description": "Aretha Franklin’s soul performance recorded decades earlier finally released.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1972,
        "event_end": 2018
    },
    {
        "title": "Voyeur",
        "description": "Gay Talese exposes motel voyeurism scandal that turned personal investigation.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2003,
        "event_end": 2017
    },
    {
        "title": "American Movie",
        "description": "Indie filmmaker’s struggle to complete his horror dream project.",
        "location": {
            "lat": 43.0731,
            "lng": -89.4012
        },
        "event_start": 1997,
        "event_end": 1999
    },
    {
        "title": "Bisping",
        "description": "Michael Bisping reflects after decades in UFC and fights wounded legacy.",
        "location": {
            "lat": 53.4808,
            "lng": -2.242634
        },
        "event_start": 2000,
        "event_end": 2021
    },
    {
        "title": "Leonard Cohen: I'm Your Man",
        "description": "Cohen introspective interviews tie to performances by varied artists.",
        "location": {
            "lat": 45.5017,
            "lng": -73.5673
        },
        "event_start": 2005,
        "event_end": 2006
    },
    {
        "title": "The King of Kong",
        "description": "Arcade rivalry pits newcomer against Donkey Kong king Billy Mitchell.",
        "location": {
            "lat": 40.4406,
            "lng": -79.9959
        },
        "event_start": 1982,
        "event_end": 2007
    },
    {
        "title": "Wild Life",
        "description": "Conservationists Tompkins’ decades-long founding of South American parks.",
        "location": {
            "lat": -49.3266,
            "lng": -72.906
        },
        "event_start": 1990,
        "event_end": 2023
    },
    {
        "title": "Father Soldier Son",
        "description": "Wounded soldier’s family navigates love and legacy amid tragedy.",
        "location": {
            "lat": 46.8797,
            "lng": -110.3626
        },
        "event_start": 2010,
        "event_end": 2020
    },
    {
        "title": "The Statue of Liberty",
        "description": "Ken Burns explores history of the statue through personal narratives.",
        "location": {
            "lat": 40.6892,
            "lng": -74.0445
        },
        "event_start": 1886,
        "event_end": 1985
    },
    {
        "title": "We Stand Alone Together",
        "description": "Easy Company veterans tell WWII stories across continents.",
        "location": {
            "lat": 50.1109,
            "lng": 8.682141
        },
        "event_start": 1944,
        "event_end": 2001
    },
    {
        "title": "Untold: Malice at the Palace",
        "description": "NBA fight dissected by key players and its NBA legacy explored.",
        "location": {
            "lat": 42.3223,
            "lng": -83.1763
        },
        "event_start": 2004,
        "event_end": 2021
    },
    {
        "title": "Lo and Behold",
        "description": "Herzog explores internet origins, perils, and possibilities.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1990,
        "event_end": 2016
    },
    {
        "title": "Justin Bieber's Believe",
        "description": "BTS and onstage moments highlight Bieber’s early superstardom.",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2011,
        "event_end": 2013
    },
    {
        "title": "Take the Ball, Pass the Ball",
        "description": "Inside story of Guardiola’s Barça dominance and Messi’s rise.",
        "location": {
            "lat": 41.3851,
            "lng": 2.1734
        },
        "event_start": 2008,
        "event_end": 2012
    },
    {
        "title": "The Summit",
        "description": "Film explores the deadly 2008 K2 climb combining footage and drama.",
        "location": {
            "lat": 35.8808,
            "lng": 76.5133
        },
        "event_start": 2008,
        "event_end": 2008
    },
    {
        "title": "Billy & Molly: An Otter Love Story",
        "description": "Man and wild otter form rare interspecies friendship in remote isles.",
        "location": {
            "lat": 60.3932,
            "lng": -1.35
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Bettie Page Reveals All",
        "description": "Bettie Page recounts her life, witch‑hunts & revival before her death.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1950,
        "event_end": 2013
    },
    {
        "title": "Sweet Bobby: My Catfish Nightmare",
        "description": "Kirat’s online romance turns into years of emotional manipulation.",
        "location": {
            "lat": 37.0902,
            "lng": -95.7129
        },
        "event_start": 2020,
        "event_end": 2024
    },
    {
        "title": "Ben Platt: Live from Radio City",
        "description": "Ben Platt shares personal songbook with full band at Radio City.",
        "location": {
            "lat": 40.759,
            "lng": -73.979
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "Descendant",
        "description": "Africatown community reconnects via Clotilda wreck discovery.",
        "location": {
            "lat": 30.6954,
            "lng": -88.0399
        },
        "event_start": 1860,
        "event_end": 2022
    },
    {
        "title": "aespa: WORLD TOUR in cinemas",
        "description": "K‑pop group’s first UK show captured live with behind‑the‑scenes.",
        "location": {
            "lat": 51.503,
            "lng": -0.0032
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Anselm",
        "description": "Wim Wenders explores Kiefer’s life and art in immersive 3D portrait.",
        "location": {
            "lat": 52.52,
            "lng": 13.405
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Judah Friedlander: America Is…",
        "description": "Comic Friedlander extols America’s greatness in deadpan NYC performances.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2016,
        "event_end": 2017
    },
    {
        "title": "Into Nature's Wild",
        "description": "Multi‑mode journey through Alaska, Oregon, Appalachia, showcasing wild beauty.",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Bobi Wine: The People's President",
        "description": "Musician‑turned‑MP campaigns amid state violence in quest for power.",
        "location": {
            "lat": 0.3476,
            "lng": 32.5825
        },
        "event_start": 2020,
        "event_end": 2023
    },
    {
        "title": "Metallica: Some Kind of Monster",
        "description": "Band hires therapist, confronts anger and loss while seeking a new bassist.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2001,
        "event_end": 2004
    },
    {
        "title": "The Princess",
        "description": "Archival footages tell Princess Diana’s story without narrator.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1980,
        "event_end": 1997
    },
    {
        "title": "The Way I See It",
        "description": "Pete Souza shares decades documenting US presidents.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2009,
        "event_end": 2020
    },
    {
        "title": "Scream, Queen! My Nightmare…",
        "description": "Actor Mark Patton revisits the pivotal, career‑ending horror sequel.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1985,
        "event_end": 2019
    },
    {
        "title": "Sneakerheadz",
        "description": "Sneaker culture enthusiasts chase rare kicks globally.",
        "location": {
            "lat": 34.0522,
            "lng": -118.243735
        },
        "event_start": 2014,
        "event_end": 2015
    },
    {
        "title": "Pavarotti",
        "description": "Ron Howard captures Pavarotti’s performances and personal life.",
        "location": {
            "lat": 44.6471,
            "lng": 10.9252
        },
        "event_start": 1961,
        "event_end": 2017
    },
    {
        "title": "McQueen",
        "description": "Alexander McQueen’s ascent and inner turmoil revealed through archives.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1996,
        "event_end": 2010
    },
    {
        "title": "Aaron Carter: The Little Prince…",
        "description": "Rise and tragic fall of child pop star Aaron Carter recounted.",
        "location": {
            "lat": 27.9506,
            "lng": -82.4572
        },
        "event_start": 1997,
        "event_end": 2022
    },
    {
        "title": "Distinction",
        "description": "High schoolers mentor disabled peers and find purpose through music.",
        "location": {
            "lat": 46.8139,
            "lng": -71.208
        },
        "event_start": 2016,
        "event_end": 2018
    },
    {
        "title": "Surviving the Holidays…",
        "description": "Lewis Black humorously navigates holiday shopping madness.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2008,
        "event_end": 2009
    },
    {
        "title": "In the Shadow of the Moon",
        "description": "NASA astronaut interviews and lost footage from Apollo missions.",
        "location": {
            "lat": 29.7604,
            "lng": -95.3698
        },
        "event_start": 1968,
        "event_end": 1972
    },
    {
        "title": "Why We Fight",
        "description": "Investigates US foreign policy dominated by military power.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2004,
        "event_end": 2005
    },
    {
        "title": "The Last Days",
        "description": "Jewish survivors recount Holocaust in Hungary and liberation.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1944,
        "event_end": 1998
    },
    {
        "title": "All In: The Fight for Democracy",
        "description": "Stacey Abrams exposes US voter suppression ahead of 2020 election.",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "L'Amour Fou",
        "description": "Yves Saint‑Laurent’s rise and struggles in fashion world.",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1957,
        "event_end": 2010
    },
    {
        "title": "Donyale Luna: Supermodel",
        "description": "Life and career of pioneering Black supermodel Donyale Luna.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1965,
        "event_end": 2023
    },
    {
        "title": "The Story of the Kinks",
        "description": "Chronicles influential career of 60s rock band The Kinks.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1960,
        "event_end": 1985
    },
    {
        "title": "Daft Punk Unchained",
        "description": "Explores Daft Punk's career, privacy, and creative control.",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1993,
        "event_end": 2013
    },
    {
        "title": "Inside the Mind of a Cat",
        "description": "Experts decipher feline cognition and behavior.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Cristiano Ronaldo: World at His Feet",
        "description": "Follows Ronaldo's trajectory from Portugal to Real Madrid.",
        "location": {
            "lat": 38.7223,
            "lng": -9.1393
        },
        "event_start": 2002,
        "event_end": 2014
    },
    {
        "title": "IU CONCERT: THE WINNING",
        "description": "IU’s 100th show with drone show at Seoul World Cup Stadium.",
        "location": {
            "lat": 37.5683,
            "lng": 126.977
        },
        "event_start": 2025,
        "event_end": 2025
    },
    {
        "title": "Protecting Paradise: Niue",
        "description": "Niue’s community-led marine conservation efforts explored.",
        "location": {
            "lat": -19.0544,
            "lng": -169.8672
        },
        "event_start": 2020,
        "event_end": 2024
    },
    {
        "title": "The Jewel Thief",
        "description": "Chronicles master thief and detectives pursuing his heists.",
        "location": {
            "lat": 45.4215,
            "lng": -75.6972
        },
        "event_start": 2000,
        "event_end": 2023
    },
    {
        "title": "The Abundance Factor",
        "description": "Experts explore mindset and practice of abundance and prosperity.",
        "location": {
            "lat": 37.0902,
            "lng": -95.7129
        },
        "event_start": 2014,
        "event_end": 2015
    },
    {
        "title": "The Bridge",
        "description": "Understand lives behind suicides from Golden Gate Bridge.",
        "location": {
            "lat": 37.8199,
            "lng": -122.4783
        },
        "event_start": 2002,
        "event_end": 2006
    },
    {
        "title": "The Saint of Second Chances",
        "description": "Mike Veeck’s comeback after family scandal in baseball.",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 1990,
        "event_end": 2023
    },
    {
        "title": "Hideo Kojima: Connecting Worlds",
        "description": "Insight into Kojima’s creative mind and studio launch.",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Diddy: The Making of a Bad Boy",
        "description": "Sean Combs’ rise, allegations, and life backstage.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1972,
        "event_end": 2025
    },
    {
        "title": "Biggest Heist Ever",
        "description": "Bitcoin Bonnie & Clyde’s major crypto heist revealed.",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 2018,
        "event_end": 2024
    },
    {
        "title": "The Truffle Hunters",
        "description": "Elderly hunters and dogs search for Alba truffles in Italy.",
        "location": {
            "lat": 44.4056,
            "lng": 9.21
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "The Man Who Saw Tomorrow",
        "description": "Nostradamus prophecies dramatized about historical events.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1981,
        "event_end": 1981
    },
    {
        "title": "Untold: The Murder of Air McNair",
        "description": "Investigates NFL star Steve McNair's death in a crime of passion.",
        "location": {
            "lat": 35.1495,
            "lng": -90.049
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "The Children of October 7",
        "description": "Israeli kids recount trauma and survival from regional conflict.",
        "location": {
            "lat": 31.7683,
            "lng": 35.2137
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "The Secret Lives of Adult Stars",
        "description": "Adult entertainers share personal industry challenges.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2003,
        "event_end": 2004
    },
    {
        "title": "Marvel Studios Assembled: The Making of The Marvels",
        "description": "Behind-the-scenes of The Marvels production at Marvel Studios.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Monster Inside: America's Most Extreme Haunted House",
        "description": "Exposes abuse in extreme haunted house McKamey Manor.",
        "location": {
            "lat": 35.4676,
            "lng": -97.5164
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Dior and I",
        "description": "Inside Christian Dior’s design process and studio life.",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 2014,
        "event_end": 2015
    },
    {
        "title": "Glee: The Concert Movie",
        "description": "Captures the live performances and fan stories from Glee tour.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2011,
        "event_end": 2011
    },
    {
        "title": "The American Nightmare",
        "description": "Studies ’60s‑’70s horror films and cultural context.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 1979
    },
    {
        "title": "In Dreams: The Roy Orbison Story",
        "description": "Roy Orbison’s career via performances and interviews.",
        "location": {
            "lat": 35.4676,
            "lng": -97.5164
        },
        "event_start": 1950,
        "event_end": 1998
    },
    {
        "title": "Heckler",
        "description": "Jamie Kennedy confronts critics in comedic documentary.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2006,
        "event_end": 2007
    },
    {
        "title": "Wonders of the Sea 3D",
        "description": "3D underwater journey across oceans’ hidden beauty.",
        "location": {
            "lat": -17.7134,
            "lng": 178.065
        },
        "event_start": 2014,
        "event_end": 2017
    },
    {
        "title": "Not Quite Hollywood",
        "description": "Chronicles 1970s‑80s Australian exploitation filmmaking boom.",
        "location": {
            "lat": -33.8688,
            "lng": 151.2093
        },
        "event_start": 1970,
        "event_end": 1980
    },
    {
        "title": "The Stroll",
        "description": "Trans sex workers' lives and activism in NYC Meatpacking.",
        "location": {
            "lat": 40.743,
            "lng": -74.009
        },
        "event_start": 2010,
        "event_end": 2023
    },
    {
        "title": "Where's My Roy Cohn?",
        "description": "Exposé on Roy Cohn’s political influence from McCarthy to Trump.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1950,
        "event_end": 2019
    },
    {
        "title": "Saving Capitalism",
        "description": "Robert Reich explores economic inequality through US stories.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2016,
        "event_end": 2017
    },
    {
        "title": "Andrea Bocelli 30: The Celebration",
        "description": "Bocelli’s special concert with global stars at Tuscan venue.",
        "location": {
            "lat": 43.7333,
            "lng": 10.9
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Joy Division",
        "description": "Chronicles post‑punk band's rise and tragic legacy.",
        "location": {
            "lat": 53.4808,
            "lng": -2.2426
        },
        "event_start": 1976,
        "event_end": 1980
    },
    {
        "title": "SEVENTEEN POWER OF LOVE: THE MOVIE",
        "description": "K‑pop band Seventeen performing and reflecting for fans.",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "That’s Entertainment, Part II",
        "description": "Gene Kelly & Fred Astaire host MGM musical highlights.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1976,
        "event_end": 1976
    },
    {
        "title": "JUNG KOOK: I AM STILL",
        "description": "BTS’s Jung Kook solo journey captured through music & growth.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "American Dream/American Knightmare",
        "description": "Suge Knight story from rise to criminal downfall.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2018,
        "event_end": 2018
    },
    {
        "title": "Martha",
        "description": "Chronicles Martha Stewart’s career, scandal and comeback.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Child Star",
        "description": "Former child actors reflect on fame's toll.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Willow: Behind the Magic",
        "description": "Inside look at making of hit series “Willow”.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "ABBA: Against the Odds",
        "description": "ABBA’s journey from Eurovision to enduring fame.",
        "location": {
            "lat": 59.3293,
            "lng": 18.0686
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Client 9: The Rise and Fall of Eliot Spitzer",
        "description": "Exposes Spitzer’s political scandal and downfall.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2004,
        "event_end": 2008
    },
    {
        "title": "Jonas Brothers: The Concert Experience",
        "description": "Backstage-pass to Jonas Brothers tour with celebs.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2009,
        "event_end": 2009
    },
    {
        "title": "SEVENTEEN [RIGHT HERE] WORLD TOUR IN CINEMAS",
        "description": "Captures SEVENTEEN’s live tour in theaters.",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2025,
        "event_end": 2025
    },
    {
        "title": "Mr. Gaga",
        "description": "The story of choreographer Ohad Naharin’s vision.",
        "location": {
            "lat": 31.7683,
            "lng": 35.2137
        },
        "event_start": 2015,
        "event_end": 2015
    },
    {
        "title": "Bye Bye Tiberias",
        "description": "Hiam Abbass returns to Palestinian village with daughter.",
        "location": {
            "lat": 32.794,
            "lng": 35.5315
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Thelonious Monk: Straight, No Chaser",
        "description": "Jazz legend Monk’s live performances and life.",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1950,
        "event_end": 1988
    },
    {
        "title": "We Steal Secrets: The Story of WikiLeaks",
        "description": "Chronicles the rise of WikiLeaks & its controversies.",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2010,
        "event_end": 2013
    },
    {
        "title": "The Making of a Japanese",
        "description": "Observes Japanese children learning societal norms.",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Magician: The Astonishing Life and Work of Orson Welles",
        "description": "Explores Welles’s multifaceted career.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1915,
        "event_end": 1985
    },
    {
        "title": "Something’s Coming: West Side Story",
        "description": "BTS of Spielberg’s remake with Sondheim interviews.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Under the Helmet: The Legacy of Boba Fett",
        "description": "Explores origins and cultural impact of Boba Fett.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "The Prime Minister Is Missing",
        "description": "Reconstructs disappearance of PM Harold Holt.",
        "location": {
            "lat": -33.8688,
            "lng": 151.2093
        },
        "event_start": 1967,
        "event_end": 2008
    },
    {
        "title": "More Than Robots",
        "description": "Teen robotics teams prepare for global competition.",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "My SHINee World",
        "description": "SHINee’s 15th anniversary, concert prep & fan stories",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Bye Bye Barry",
        "description": "Barry Sanders revisits London amid career mystery",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Beats Rhymes & Life",
        "description": "A Tribe Called Quest's story & hip‑hop legacy",
        "location": {
            "lat": 40.7282,
            "lng": -73.7949
        },
        "event_start": 2011,
        "event_end": 2011
    },
    {
        "title": "Meru",
        "description": "American climbers attempt Meru’s Shark’s Fin",
        "location": {
            "lat": -3.3682,
            "lng": 36.692
        },
        "event_start": 2011,
        "event_end": 2015
    },
    {
        "title": "Kedi",
        "description": "Lives of Istanbul’s street cats through locals’ eyes",
        "location": {
            "lat": 41.0082,
            "lng": 28.9784
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "SLY LIVES!",
        "description": "Legacy of Sly & The Family Stone and Black genius",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2025,
        "event_end": 2025
    },
    {
        "title": "That's Dancing!",
        "description": "History of dance in film from early talkies to 80s",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1985,
        "event_end": 1985
    },
    {
        "title": "Tickled",
        "description": "Dark secrets behind competitive tickling online",
        "location": {
            "lat": -36.8485,
            "lng": 174.7633
        },
        "event_start": 2015,
        "event_end": 2016
    },
    {
        "title": "MoviePass, MovieCrash",
        "description": "Rise & bankruptcy of MoviePass subscription service",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Elton John: Never Too Late",
        "description": "Elton John reflects on final NA tour & struggles beaten",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Born Into Brothels",
        "description": "Calcutta kids empowered through photography lessons",
        "location": {
            "lat": 22.5726,
            "lng": 88.3639
        },
        "event_start": 2002,
        "event_end": 2004
    },
    {
        "title": "Rising Phoenix",
        "description": "Paralympians share journeys of resilience & excellence",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2020,
        "event_end": 2020
    },
    {
        "title": "The Pervert's Guide…",
        "description": "Žižek uses films to explain ideology in culture",
        "location": {
            "lat": 46.0569,
            "lng": 14.5058
        },
        "event_start": 2012,
        "event_end": 2012
    },
    {
        "title": "Embrace the Panda…",
        "description": "Pixar’s female team behind Turning Red creation",
        "location": {
            "lat": 43.6532,
            "lng": -79.3832
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Meet the Mormons",
        "description": "Portraits of six devout Mormons worldwide",
        "location": {
            "lat": 39.7392,
            "lng": -104.9903
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "Riding Giants",
        "description": "Big‑wave surfers’ heroic tales in Pacific coast",
        "location": {
            "lat": 36.7783,
            "lng": -119.4179
        },
        "event_start": 2004,
        "event_end": 2004
    },
    {
        "title": "Kevin Hart & Chris Rock…",
        "description": "Friendship & career of two comedy legends",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Cyberbunker…",
        "description": "Hackers using bunker to run cyber‑crime networks",
        "location": {
            "lat": 53.0793,
            "lng": 8.8017
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "My Mom Jayne",
        "description": "Mariska Hargitay explores mother’s complex legacy",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2025,
        "event_end": 2025
    },
    {
        "title": "A Fan's Guide to Ms. Marvel",
        "description": "Overview of Ms. Marvel series creation & cast",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Batman & Bill",
        "description": "Bill Finger’s contributions to Batman revealed",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "If These Walls Could Sing",
        "description": "Abbey Road studio history through insider stories",
        "location": {
            "lat": 51.5171,
            "lng": -0.1774
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "The Witches of the Orient",
        "description": "Japan’s 1964 Olympic volleyball champions revisited",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Hot Potato",
        "description": "The Wiggles backstage journey to global fame",
        "location": {
            "lat": -35.2809,
            "lng": 149.13
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "March of the Dinosaurs",
        "description": "Dinosaur migration drama set 70 million years ago",
        "location": {
            "lat": 54.526,
            "lng": -105.2551
        },
        "event_start": 2011,
        "event_end": 2011
    },
    {
        "title": "Music Box: Yacht Rock",
        "description": "Rise and resurgence of 70s–80s soft rock genre",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Aliens of the Deep",
        "description": "Cameron and NASA explore deep‑sea vents' lifeforms",
        "location": {
            "lat": 0,
            "lng": -140
        },
        "event_start": 2005,
        "event_end": 2005
    },
    {
        "title": "Sing, Dance, Act: Kabuki",
        "description": "Actor Toma Ikuta trains in traditional kabuki theater",
        "location": {
            "lat": 35.6762,
            "lng": 139.6503
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Join or Die",
        "description": "Civic engagement documentary inspired by Putnam’s work",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Mountain Queen",
        "description": "Lhakpa Sherpa’s record attempt for her daughters",
        "location": {
            "lat": 27.9881,
            "lng": 86.925
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "The Wrecking Crew",
        "description": "Story of famed session musicians behind hits",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2008,
        "event_end": 2008
    },
    {
        "title": "Marvel Studios: Expanding the Universe",
        "description": "Inside glimpse at upcoming Marvel films & series",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2019,
        "event_end": 2019
    },
    {
        "title": "My Love, Don't Cross That River",
        "description": "100‑year lovebirds share final days together",
        "location": {
            "lat": 36.5,
            "lng": 127.5
        },
        "event_start": 2014,
        "event_end": 2014
    },
    {
        "title": "Jimi Hendrix",
        "description": "Posthumous tribute to guitar legend Jimi Hendrix",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1973,
        "event_end": 1973
    },
    {
        "title": "Bob Dylan: The Best of Bob Dylan",
        "description": "Archival footage celebrating Dylan's musical genius",
        "location": {
            "lat": 41.6032,
            "lng": -73.0877
        },
        "event_start": 2005,
        "event_end": 2005
    },
    {
        "title": "Super High Me",
        "description": "Comedian tests effects of month‑long marijuana use",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2007,
        "event_end": 2007
    },
    {
        "title": "Africa: The Serengeti",
        "description": "Documentary of Great Migration’s wildlife spectacle",
        "location": {
            "lat": -2.3333,
            "lng": 34.8333
        },
        "event_start": 1994,
        "event_end": 1994
    },
    {
        "title": "The Mission",
        "description": "John Chau's fatal contact with uncontacted tribe",
        "location": {
            "lat": 11.5657,
            "lng": 92.246
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "Toni Morrison: The Pieces I Am",
        "description": "Intimate portrait of writer Toni Morrison's influence",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2019,
        "event_end": 2019
    },
    {
        "title": "Hope and Despair",
        "description": "Hinatazaka46 documentary on idol group's struggles",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Scream: The True Story",
        "description": "Chronicles Danny Rolling's Gainesville murders spree",
        "location": {
            "lat": 29.6516,
            "lng": -82.3248
        },
        "event_start": 1990,
        "event_end": 1990
    },
    {
        "title": "The Day the Music Died: The Story of Don McLean's \"American Pie\"",
        "description": "Unpacks cultural impact of American Pie song",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 1971,
        "event_end": 1971
    },
    {
        "title": "I Am Not Your Negro",
        "description": "James Baldwin’s narration on civil rights",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1979,
        "event_end": 1987
    },
    {
        "title": "Eric Clapton: Life in 12 Bars",
        "description": "Eric Clapton’s life journey and struggles",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1945,
        "event_end": 2018
    },
    {
        "title": "Generation Wealth",
        "description": "Portrait of wealth culture and inequality",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1993,
        "event_end": 2018
    },
    {
        "title": "Reggie",
        "description": "Reggie Jackson's baseball career and civil rights",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1960,
        "event_end": 1987
    },
    {
        "title": "Ringers: Lord of the Fans",
        "description": "Fans’ cultural impact of LOTR mythology",
        "location": {
            "lat": -41.2865,
            "lng": 174.7762
        },
        "event_start": 1954,
        "event_end": 2005
    },
    {
        "title": "The First Monday in May",
        "description": "China Through the Looking Glass exhibit prep",
        "location": {
            "lat": 40.7794,
            "lng": -73.9632
        },
        "event_start": 2014,
        "event_end": 2015
    },
    {
        "title": "Sex at 24 Frames Per Second",
        "description": "Female sexuality in mid-century film",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1950,
        "event_end": 2000
    },
    {
        "title": "Whale Nation",
        "description": "Rescue of beached humpback whale",
        "location": {
            "lat": -54.8019,
            "lng": -68.3029
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Not Just a Goof",
        "description": "Untold making of A Goofy Movie",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1995,
        "event_end": 2024
    },
    {
        "title": "Take Care of Maya",
        "description": "Child abuse wrongful accusation case",
        "location": {
            "lat": 42.2808,
            "lng": -83.743
        },
        "event_start": 2016,
        "event_end": 2021
    },
    {
        "title": "The Glacier Fox",
        "description": "Life cycle of fox couple in Hokkaido",
        "location": {
            "lat": 43.2203,
            "lng": 142.8635
        },
        "event_start": 1975,
        "event_end": 1976
    },
    {
        "title": "Untold: Hope Solo vs. U.S. Soccer",
        "description": "Hope Solo’s national team career and conflicts",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 2000,
        "event_end": 2016
    },
    {
        "title": "Salinger",
        "description": "J.D. Salinger's reclusive life",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1945,
        "event_end": 2010
    },
    {
        "title": "Inequality for All",
        "description": "Robert Reich on U.S. income inequality",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1990,
        "event_end": 2013
    },
    {
        "title": "Grey Gardens",
        "description": "Lives of eccentric mother-daughter Beales",
        "location": {
            "lat": 40.964,
            "lng": -72.1824
        },
        "event_start": 1975,
        "event_end": 1976
    },
    {
        "title": "Gunda",
        "description": "A pig and farm animals in rural life",
        "location": {
            "lat": 55.7558,
            "lng": 37.6173
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "Kids Are Growing Up: A Story About a Kid Named Laroi",
        "description": "The Kid Laroi’s rise to fame",
        "location": {
            "lat": -33.8688,
            "lng": 151.2093
        },
        "event_start": 2018,
        "event_end": 2023
    },
    {
        "title": "Untold: Caitlyn Jenner",
        "description": "Caitlyn Jenner’s Olympic and transition story",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1976,
        "event_end": 2015
    },
    {
        "title": "The Apollo",
        "description": "History of Harlem’s iconic Apollo Theater",
        "location": {
            "lat": 40.81,
            "lng": -73.95
        },
        "event_start": 1934,
        "event_end": 2019
    },
    {
        "title": "A Forbidden Orange",
        "description": "Kubrick’s banned film premiered under Franco",
        "location": {
            "lat": 41.655,
            "lng": -4.7286
        },
        "event_start": 1975,
        "event_end": 1975
    },
    {
        "title": "Vintage",
        "description": "Harvest season winemaking in NZ",
        "location": {
            "lat": -41.4846,
            "lng": 173.5977
        },
        "event_start": 2019,
        "event_end": 2019
    },
    {
        "title": "Great Bear Rainforest: Land of the Spirit Bear",
        "description": "IMAX journey to coastal rainforest",
        "location": {
            "lat": 53.922,
            "lng": -127.768
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "God & Country: The Rise of Christian Nationalism",
        "description": "Christian nationalism’s political rise",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2024
    },
    {
        "title": "David Byrne's American Utopia",
        "description": "Broadway concert filming",
        "location": {
            "lat": 40.759,
            "lng": -73.9845
        },
        "event_start": 2019,
        "event_end": 2019
    },
    {
        "title": "March of the Penguins 2: The Next Step",
        "description": "Young penguin’s journey in Antarctica",
        "location": {
            "lat": -75.25,
            "lng": -0.0714
        },
        "event_start": 2016,
        "event_end": 2017
    },
    {
        "title": "My Name Is Pauli Murray",
        "description": "Life of Pauli Murray, civil rights pioneer",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1938,
        "event_end": 1985
    },
    {
        "title": "Disney 100: A Century of Dreams – A Special Edition of 20/20",
        "description": "Disney’s 100-year retrospective",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1923,
        "event_end": 2023
    },
    {
        "title": "No Direction Home: Bob Dylan",
        "description": "Dylan’s folk-to-rock evolution",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1961,
        "event_end": 1966
    },
    {
        "title": "Laura Ingalls Wilder: Prairie to Page",
        "description": "Wilder’s frontier childhood to publishing fame",
        "location": {
            "lat": 43.826,
            "lng": -98.0423
        },
        "event_start": 1865,
        "event_end": 1930
    },
    {
        "title": "Cypress Hill: Insane in the Brain",
        "description": "Rise of Cypress Hill hip-hop group",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1991,
        "event_end": 2022
    },
    {
        "title": "Pina",
        "description": "Tribute to choreographer Pina Bausch",
        "location": {
            "lat": 51.27,
            "lng": 7.185
        },
        "event_start": 2009,
        "event_end": 2011
    },
    {
        "title": "Oprah & The Color Purple Journey",
        "description": "Making of new film adaptation",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 2019,
        "event_end": 2023
    },
    {
        "title": "Life, Animated",
        "description": "Autism breakthrough via Disney films",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1998,
        "event_end": 2015
    },
    {
        "title": "The Grease Story",
        "description": "Making of Grease musical to film",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1971,
        "event_end": 1978
    },
    {
        "title": "Rockshow",
        "description": "Wings concert at Kingdome",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 1976,
        "event_end": 1976
    },
    {
        "title": "Ten Dollar Death Trip: Inside the Fentanyl Crisis",
        "description": "Exposes fentanyl opioid crisis",
        "location": {
            "lat": 45.4215,
            "lng": -75.6972
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "The Quincy Avery Effect",
        "description": "Coach’s journey from homeless to NFL",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2010,
        "event_end": 2025
    },
    {
        "title": "Disney Intertwined Live",
        "description": "Concert film of Disney live show",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Hallelujah: Leonard Cohen, a Journey, a Song",
        "description": "Cohen's career seen through “Hallelujah”",
        "location": {
            "lat": 45.5017,
            "lng": -73.5673
        },
        "event_start": 1984,
        "event_end": 2016
    },
    {
        "title": "Wildcat",
        "description": "PTSD soldier bonds with ocelot in jungle",
        "location": {
            "lat": -3.4653,
            "lng": -62.2159
        },
        "event_start": 2015,
        "event_end": 2018
    },
    {
        "title": "Procession",
        "description": "Survivors recreate abuse trauma in films",
        "location": {
            "lat": 39.0997,
            "lng": -94.5786
        },
        "event_start": 1970,
        "event_end": 2020
    },
    {
        "title": "Comic-Con Episode IV: A Fan's Hope",
        "description": "Portrait of fans and creators at Comic-Con",
        "location": {
            "lat": 32.7157,
            "lng": -117.1611
        },
        "event_start": 2010,
        "event_end": 2010
    },
    {
        "title": "Azzurri: Road to Wembley",
        "description": "Italy's Euro 2020 championship journey",
        "location": {
            "lat": 45.4642,
            "lng": 9.19
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "Lang Lang Plays Disney",
        "description": "Pianist Lang Lang performs Disney themes",
        "location": {
            "lat": 51.501,
            "lng": -0.1774
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "The Jesus Music",
        "description": "Rise of Christian rock through 1970s–80s",
        "location": {
            "lat": 36.1627,
            "lng": -86.7816
        },
        "event_start": 1970,
        "event_end": 1985
    },
    {
        "title": "Religulous",
        "description": "Bill Maher questions religious belief",
        "location": {
            "lat": 30.0444,
            "lng": 31.2357
        },
        "event_start": 2006,
        "event_end": 2007
    },
    {
        "title": "The Making of Chicken Run: Dawn of the Nugget",
        "description": "Aardman crafts sequel in stop-motion",
        "location": {
            "lat": 51.4545,
            "lng": -2.5879
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Dolphin Reef",
        "description": "Young dolphin explores reef community",
        "location": {
            "lat": 19.8968,
            "lng": -155.5828
        },
        "event_start": 2016,
        "event_end": 2017
    },
    {
        "title": "Saving the Titanic",
        "description": "Titanic’s engineers fight for survival",
        "location": {
            "lat": 41.7325,
            "lng": -49.9469
        },
        "event_start": 1912,
        "event_end": 1912
    },
    {
        "title": "Voyage of Time: The IMAX Experience",
        "description": "Universe’s timeline in IMAX format",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": -13700000000,
        "event_end": 2020
    },
    {
        "title": "Cocaine Cowboys",
        "description": "Cocaine-fueled crime era in Miami",
        "location": {
            "lat": 25.7617,
            "lng": -80.1918
        },
        "event_start": 1975,
        "event_end": 1991
    },
    {
        "title": "Copa 71",
        "description": "1971 Women's World Cup finally told",
        "location": {
            "lat": 19.4326,
            "lng": -99.1332
        },
        "event_start": 1971,
        "event_end": 1971
    },
    {
        "title": "Untold: Breaking Point",
        "description": "Mardy Fish confronts anxiety in tennis",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2011,
        "event_end": 2012
    },
    {
        "title": "Springsteen On Broadway",
        "description": "Springsteen’s songs and stories live",
        "location": {
            "lat": 40.7635,
            "lng": -73.9826
        },
        "event_start": 2017,
        "event_end": 2018
    },
    {
        "title": "Freakonomics",
        "description": "Films explore incentives and human nature",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2006,
        "event_end": 2009
    },
    {
        "title": "The Wonderful: Stories from the Space Station",
        "description": "Life aboard ISS, shared by many nations",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2000,
        "event_end": 2020
    },
    {
        "title": "Standard Operating Procedure",
        "description": "Explores Abu Ghraib prison abuses",
        "location": {
            "lat": 33.3386,
            "lng": 44.4009
        },
        "event_start": 2003,
        "event_end": 2004
    },
    {
        "title": "Moana",
        "description": "Polynesian life captured by Flaherty",
        "location": {
            "lat": -13.759,
            "lng": -172.1046
        },
        "event_start": 1923,
        "event_end": 1925
    },
    {
        "title": "Farce of the Penguins",
        "description": "Penguins with human-voiced banter trek and mate",
        "location": {
            "lat": -75.25,
            "lng": -0.0714
        },
        "event_start": 2005,
        "event_end": 2005
    },
    {
        "title": "The Undefeated",
        "description": "Sarah Palin’s life before politics and Alaska tenure",
        "location": {
            "lat": 64.2008,
            "lng": -149.4937
        },
        "event_start": 2005,
        "event_end": 2008
    },
    {
        "title": "Overfed & Undernourished",
        "description": "One boy’s journey reversing unhealthy lifestyle habits",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2010,
        "event_end": 2013
    },
    {
        "title": "Mademoiselle C",
        "description": "Life of Vogue Paris editor Carine Roitfeld",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 2011,
        "event_end": 2012
    },
    {
        "title": "Medicine Man: The Stan Brock Story",
        "description": "Amazon cowboy brings free healthcare to poor villages",
        "location": {
            "lat": -3.4653,
            "lng": -62.2159
        },
        "event_start": 2000,
        "event_end": 2020
    },
    {
        "title": "The Who: The Kids Are Alright",
        "description": "Archive of The Who’s rise, concerts, and antics",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1964,
        "event_end": 1978
    },
    {
        "title": "Red Velvet Happiness Diary : My Dear, ReVe1uv in Cinemas",
        "description": "Behind scenes of Red Velvet’s 10th anniversary tour",
        "location": {
            "lat": 37.5172,
            "lng": 127.0473
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Stuntman",
        "description": "Veteran reenacts Evel Knievel’s Snake River jump",
        "location": {
            "lat": 43.581,
            "lng": -116.2244
        },
        "event_start": 2016,
        "event_end": 2018
    },
    {
        "title": "U2: Rattle and Hum",
        "description": "U2’s Joshua Tree tour captured on film",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1987,
        "event_end": 1988
    },
    {
        "title": "Buried Truth of the Maya",
        "description": "Archaeologists seek secret cave beneath Chichen Itza",
        "location": {
            "lat": 20.6843,
            "lng": -88.5678
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "Biggie & Tupac",
        "description": "Ex-cop investigates murders of Tupac and Biggie",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1996,
        "event_end": 1997
    },
    {
        "title": "OnlyFans: Selling Sexy",
        "description": "Lives of OnlyFans creators and platform critics",
        "location": {
            "lat": 37.0902,
            "lng": -95.7129
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "SPERMWORLD",
        "description": "Men navigating online sperm-donor relationships",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Miley Cyrus - Endless Summer Vacation (Backyard Sessions)",
        "description": "Miley performs songs from her “Endless Summer Vacation”",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2023,
        "event_end": 2023
    },
    {
        "title": "The Corporation",
        "description": "Psychological study of corporations as “persons”",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1800,
        "event_end": 2002
    },
    {
        "title": "Trumbo",
        "description": "Life of blacklisted writer Dalton Trumbo",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1947,
        "event_end": 1960
    },
    {
        "title": "The Last Tourist",
        "description": "Examining modern tourism’s societal impact",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2018,
        "event_end": 2020
    },
    {
        "title": "The Truth Is in the Stars",
        "description": "Shatner explores how “Star Trek” shaped culture",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Jerry Before Seinfeld",
        "description": "Seinfeld returns to comedy roots at original club",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1970,
        "event_end": 2015
    },
    {
        "title": "The Wolfpack",
        "description": "Brothers raised watching films reenact them",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1995,
        "event_end": 2012
    },
    {
        "title": "The Randall Scandal: Love, Loathing, and Vanderpump",
        "description": "Investigation into claims of workplace abuse and on-set misconduct",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Kiamichi Beast expedition 2",
        "description": "Expedition explores legendary Kiamichi Beast in Oklahoma woods",
        "location": {
            "lat": 34.8164,
            "lng": -95.686
        },
        "event_start": 2000,
        "event_end": 2022
    },
    {
        "title": "Lost in La Mancha",
        "description": "Terry Gilliam’s failed Don Quixote shoot undone by mishaps",
        "location": {
            "lat": 40.4168,
            "lng": -3.7038
        },
        "event_start": 2000,
        "event_end": 2000
    },
    {
        "title": "Fly",
        "description": "Over 7 years, BASE‑jumping couples test love and gravity",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2017,
        "event_end": 2024
    },
    {
        "title": "This Is Elvis",
        "description": "Archival footage traces Elvis’s career in life and performance",
        "location": {
            "lat": 35.1495,
            "lng": -90.049
        },
        "event_start": 1954,
        "event_end": 1977
    },
    {
        "title": "Expedition China",
        "description": "Filmmakers trek across intense Chinese wilderness",
        "location": {
            "lat": 35.8617,
            "lng": 104.1954
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Illusions for Sale: The Rise and Fall of Generation Zoe",
        "description": "Exposure of coaching network turned scam in Argentina",
        "location": {
            "lat": -34.6037,
            "lng": -58.3816
        },
        "event_start": 2018,
        "event_end": 2023
    },
    {
        "title": "Fed Up",
        "description": "Food industry campaign misled public on weight gain",
        "location": {
            "lat": 37.0902,
            "lng": -95.7129
        },
        "event_start": 1984,
        "event_end": 2014
    },
    {
        "title": "Take Your Pills",
        "description": "Investigates Adderall and discipline culture among youth",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2010,
        "event_end": 2018
    },
    {
        "title": "The Hatchet Wielding Hitchhiker",
        "description": "Viral nomad becomes imprisoned after shocking crime",
        "location": {
            "lat": 36.1627,
            "lng": -86.7816
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Nitro Circus: The Movie",
        "description": "Travis Pastrana crew perform outrageous stunts live",
        "location": {
            "lat": 33.7701,
            "lng": -118.1937
        },
        "event_start": 2010,
        "event_end": 2012
    },
    {
        "title": "Over Ireland",
        "description": "Aerial tour of Ireland’s scenic heritage sites",
        "location": {
            "lat": 53.1424,
            "lng": -7.6921
        },
        "event_start": 1997,
        "event_end": 1998
    },
    {
        "title": "Martin: The Reunion",
        "description": "Reunion and retrospective of '90s sitcom Martin",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Hell on Earth: The Fall of Syria and the Rise of ISIS",
        "description": "War-zone reporting on Syria and ISIS emergence",
        "location": {
            "lat": 34.8021,
            "lng": 38.9968
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Windy City Heat",
        "description": "Prank movie where one actor believes he’s real star",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 2001,
        "event_end": 2003
    },
    {
        "title": "Catwalk 2: The Comeback Cats",
        "description": "Follows cat show participants post‑first documentary",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Ado SPECIAL LIVE \"Shinzou\" in Cinema",
        "description": "Concert film of Ado’s live national stadium shows",
        "location": {
            "lat": 35.6804,
            "lng": 139.769
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Cocaine Bear: The True Story",
        "description": "Reveals real bear overdose and crime linked to smuggling",
        "location": {
            "lat": 33.9546,
            "lng": -84.4196
        },
        "event_start": 1985,
        "event_end": 1985
    },
    {
        "title": "The Real Top Gun",
        "description": "Explores origins of US Navy’s TOPGUN flight school",
        "location": {
            "lat": 32.7157,
            "lng": -117.1611
        },
        "event_start": 1969,
        "event_end": 2022
    },
    {
        "title": "The Beatles Revolution",
        "description": "Highlights The Beatles’ revolutionary impact on music",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1964,
        "event_end": 1970
    },
    {
        "title": "The Gatekeepers",
        "description": "Interviews with six Shin Bet chiefs on counterterrorism",
        "location": {
            "lat": 31.0461,
            "lng": 34.8516
        },
        "event_start": 1968,
        "event_end": 2011
    },
    {
        "title": "Bones Brigade: An Autobiography",
        "description": "The skate team that revolutionized skateboarding",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1978,
        "event_end": 1990
    },
    {
        "title": "Good Hair",
        "description": "Chris Rock explores black hair politics",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2007,
        "event_end": 2009
    },
    {
        "title": "Scouts Honor: The Secret Files of the Boy Scouts of America",
        "description": "Exposing decades of Scouts' sexual abuse cover-up",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1950,
        "event_end": 2020
    },
    {
        "title": "Hold Your Breath: The Ice Dive",
        "description": "Free diver breaks ice-depth record attempt",
        "location": {
            "lat": 61.9241,
            "lng": 25.7482
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "The Armstrong Lie",
        "description": "Lance Armstrong doping scandal unfolds",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 2009,
        "event_end": 2013
    },
    {
        "title": "Island of Lemurs: Madagascar",
        "description": "IMAX journey into lemur habitats",
        "location": {
            "lat": -18.7669,
            "lng": 46.8691
        },
        "event_start": 2005,
        "event_end": 2013
    },
    {
        "title": "Wreckage and Rage: Making 'Alien³'",
        "description": "Behind-the-scenes of 'Alien³' production",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1991,
        "event_end": 1992
    },
    {
        "title": "Chris & Don: A Love Story",
        "description": "Isherwood & Bachardy’s long romance",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1953,
        "event_end": 1993
    },
    {
        "title": "The Captains",
        "description": "Shatner interviews Trek captains",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1966,
        "event_end": 2010
    },
    {
        "title": "The Anthrax Attacks: In the Shadow of 9/11",
        "description": "FBI investigation of anthrax letters",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2001,
        "event_end": 2001
    },
    {
        "title": "Chuck Jones: Extremes…",
        "description": "Biography of animator Chuck Jones",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1938,
        "event_end": 2000
    },
    {
        "title": "To Kill a Tiger",
        "description": "Indian father fights for justice",
        "location": {
            "lat": 20.5937,
            "lng": 78.9629
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "The Cosby Show: A Look Back",
        "description": "Retrospective on 'The Cosby Show'",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1984,
        "event_end": 1992
    },
    {
        "title": "Marvel Studios Assembled: …Ms. Marvel",
        "description": "Behind-the-scenes of Ms. Marvel",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Imagine: John Lennon",
        "description": "Lennon biography via private archives",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1960,
        "event_end": 1980
    },
    {
        "title": "Who Killed the Electric Car?",
        "description": "The demise of California's electric car",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1996,
        "event_end": 2006
    },
    {
        "title": "The Super Bob Einstein Movie",
        "description": "Comedy career of Bob Einstein explored",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1970,
        "event_end": 2021
    },
    {
        "title": "Urgh! A Music War",
        "description": "Live performances by punk bands",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1980,
        "event_end": 1980
    },
    {
        "title": "Enchanted Kingdom",
        "description": "Spell-binding nature worldwide",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2009,
        "event_end": 2013
    },
    {
        "title": "MARS: Inside SpaceX",
        "description": "Behind‑the‑scenes of SpaceX Mars effort",
        "location": {
            "lat": 29.561,
            "lng": -95.08
        },
        "event_start": 2015,
        "event_end": 2018
    },
    {
        "title": "Diana Vreeland: The Eye Has to Travel",
        "description": "Portrait of iconic fashion editor",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1903,
        "event_end": 1989
    },
    {
        "title": "The Curse of the Dragon",
        "description": "Bruce Lee interviews and film history",
        "location": {
            "lat": 22.3193,
            "lng": 114.1694
        },
        "event_start": 1940,
        "event_end": 1993
    },
    {
        "title": "Pray Away",
        "description": "Rise and fall of Exodus conversion therapy",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1970,
        "event_end": 2021
    },
    {
        "title": "Blue Collar Comedy Tour: The Movie",
        "description": "Stand‑up by Southern comedians",
        "location": {
            "lat": 35.4676,
            "lng": -97.5164
        },
        "event_start": 2002,
        "event_end": 2002
    },
    {
        "title": "Ma Rainey's Black Bottom: A Legacy…",
        "description": "Reflections on August Wilson’s legacy",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 1920,
        "event_end": 2020
    },
    {
        "title": "Searching for Ingmar Bergman",
        "description": "Life of filmmaker Bergman examined",
        "location": {
            "lat": 59.3293,
            "lng": 18.0686
        },
        "event_start": 1980,
        "event_end": 2007
    },
    {
        "title": "The Program",
        "description": "Congressional study of UFO/UAP data",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2021,
        "event_end": 2024
    },
    {
        "title": "Camp Courage",
        "description": "Ukrainian refugees at Austrian camp",
        "location": {
            "lat": 47.5162,
            "lng": 14.5501
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Pompeii: Secrets of the Dead",
        "description": "Investigating Pompeii eruption victims",
        "location": {
            "lat": 40.746,
            "lng": 14.4989
        },
        "event_start": 79,
        "event_end": 79
    },
    {
        "title": "Hillary's America…",
        "description": "D’Souza on Democratic Party history",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2008,
        "event_end": 2016
    },
    {
        "title": "Mars: One Day on the Red Planet",
        "description": "Exploration of Mars surface via data",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 0,
        "event_end": 2025
    },
    {
        "title": "Travelin' Band: Creedence…",
        "description": "CCR concert at Royal Albert Hall",
        "location": {
            "lat": 51.5,
            "lng": -0.1257
        },
        "event_start": 1970,
        "event_end": 1970
    },
    {
        "title": "The Filth and the Fury",
        "description": "Sex Pistols punk history revisited",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1975,
        "event_end": 1977
    },
    {
        "title": "The Living Desert",
        "description": "Life cycle in the desert environment",
        "location": {
            "lat": 35.011,
            "lng": -115.4736
        },
        "event_start": 2025,
        "event_end": 2025
    },
    {
        "title": "Just Love and a Thousand Songs",
        "description": "Violetta cast anniversary concert",
        "location": {
            "lat": -34.6037,
            "lng": -58.3816
        },
        "event_start": 2012,
        "event_end": 2022
    },
    {
        "title": "A Cop Movie",
        "description": "Fictional‑documentary on police corruption",
        "location": {
            "lat": 19.4326,
            "lng": -99.1332
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Trekkies",
        "description": "Touring Trek fandom across America",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1997,
        "event_end": 1997
    },
    {
        "title": "Capital in the Twenty‑First Century",
        "description": "Piketty’s wealth‑inequality history",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1700,
        "event_end": 2018
    },
    {
        "title": "ReMastered: The Lion's Share",
        "description": "Solomon Linda family’s legal fight",
        "location": {
            "lat": -26.2041,
            "lng": 28.0473
        },
        "event_start": 1960,
        "event_end": 2019
    },
    {
        "title": "The Mind of the Demon",
        "description": "Birth of freestyle motocross",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1990,
        "event_end": 1999
    },
    {
        "title": "Life Itself",
        "description": "Roger Ebert’s personal journey",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 1942,
        "event_end": 2013
    },
    {
        "title": "Maxine's Baby: The Tyler Perry Story",
        "description": "Tyler Perry’s rise from trauma",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 1969,
        "event_end": 2023
    },
    {
        "title": "Mum and Son's Chilling Adventures",
        "description": "Ghost‑hunting mother & son duo",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Marianne & Leonard: Words of Love",
        "description": "Cohen’s romance with muse in 60s",
        "location": {
            "lat": 37.9838,
            "lng": 23.7275
        },
        "event_start": 1960,
        "event_end": 1970
    },
    {
        "title": "Waiting for Superman",
        "description": "US education system evaluated",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2008,
        "event_end": 2010
    },
    {
        "title": "The Black Godfather",
        "description": "Clarence Avant’s influence in music",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 2019
    },
    {
        "title": "Beyond Beauty: Taiwan from Above",
        "description": "Aerial film of Taiwan landscapes",
        "location": {
            "lat": 23.6978,
            "lng": 120.9605
        },
        "event_start": 2010,
        "event_end": 2013
    },
    {
        "title": "Anthropocene: The Human Epoch",
        "description": "Human‑driven global changes analyzed",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2000,
        "event_end": 2018
    },
    {
        "title": "Body Without Soul",
        "description": "Teen male prostitution in Prague",
        "location": {
            "lat": 50.0755,
            "lng": 14.4378
        },
        "event_start": 1993,
        "event_end": 1996
    },
    {
        "title": "The Return of Tanya Tucker…",
        "description": "Tucker & Carlile musical partnership",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2019,
        "event_end": 2022
    },
    {
        "title": "Real Haunts",
        "description": "Paranormal investigations at haunted sites",
        "location": {
            "lat": 27.9944,
            "lng": -81.7603
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "Inside Asda: Bigger, Better, Cheaper?",
        "description": "Inside British supermarket chain Asda",
        "location": {
            "lat": 52.4862,
            "lng": -1.8904
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "aespa: MY First page",
        "description": "Chronicles girl group aespa’s rise",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2020,
        "event_end": 2023
    },
    {
        "title": "The King",
        "description": "2016 road trip with Elvis’s Rolls Royce",
        "location": {
            "lat": 36.1627,
            "lng": -86.7816
        },
        "event_start": 2016,
        "event_end": 2016
    },
    {
        "title": "Iris",
        "description": "Fashion icon Iris Apfel’s life at 93",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "Star Wars Biomes",
        "description": "Virtual tours of Star Wars worlds",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1977,
        "event_end": 2021
    },
    {
        "title": "Pixar 2021 Disney+ Day Special",
        "description": "Pixar studio inside look and previews",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Black Travel Across America",
        "description": "Touring Black heritage travel sites",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Hitsville: The Making of Motown",
        "description": "Birth of Motown Records in Detroit",
        "location": {
            "lat": 42.3314,
            "lng": -83.0458
        },
        "event_start": 1959,
        "event_end": 1960
    },
    {
        "title": "Under the Boardwalk: The Monopoly Story",
        "description": "Monopoly World Championship coverage",
        "location": {
            "lat": 36.1699,
            "lng": -115.1398
        },
        "event_start": 2009,
        "event_end": 2009
    },
    {
        "title": "Red Army",
        "description": "Rise & fall of USSR hockey team",
        "location": {
            "lat": 55.7558,
            "lng": 37.6173
        },
        "event_start": 1970,
        "event_end": 1994
    },
    {
        "title": "Keith Richards: Under the Influence",
        "description": "Musical evolution of Keith Richards",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1960,
        "event_end": 2015
    },
    {
        "title": "Higuita: The Way of the Scorpion",
        "description": "Football icon’s rise & scandals",
        "location": {
            "lat": 6.2442,
            "lng": -75.5812
        },
        "event_start": 1986,
        "event_end": 2000
    },
    {
        "title": "The Making of Star Wars",
        "description": "Behind-the-scenes of Star Wars",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1975,
        "event_end": 1977
    },
    {
        "title": "Richard Pryor: Omit the Logic",
        "description": "Legacy of iconic comedian Pryor",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1963,
        "event_end": 2005
    },
    {
        "title": "Brandy Hellville & the Cult of Fast Fashion",
        "description": "Exposé on toxic fast fashion culture",
        "location": {
            "lat": 41.9028,
            "lng": 12.4964
        },
        "event_start": 2010,
        "event_end": 2023
    },
    {
        "title": "The Martha Mitchell Effect",
        "description": "Whistleblower wife’s Nixon clash",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1972,
        "event_end": 1974
    },
    {
        "title": "The Capote Tapes",
        "description": "Truman Capote and NY society",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1945,
        "event_end": 1984
    },
    {
        "title": "Going Upriver: The Long War of John Kerry",
        "description": "Kerry’s shift from soldier to activist",
        "location": {
            "lat": 16.0471,
            "lng": 108.2062
        },
        "event_start": 1966,
        "event_end": 1971
    },
    {
        "title": "Ferrari 312B",
        "description": "Comeback of iconic F1 car",
        "location": {
            "lat": 43.7384,
            "lng": 7.4246
        },
        "event_start": 1970,
        "event_end": 2016
    },
    {
        "title": "Maria by Callas",
        "description": "Life of opera legend Maria Callas",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1947,
        "event_end": 1977
    },
    {
        "title": "Kiss the Future",
        "description": "Art as survival in besieged Sarajevo",
        "location": {
            "lat": 43.8563,
            "lng": 18.4131
        },
        "event_start": 1992,
        "event_end": 1996
    },
    {
        "title": "Meeting Gorbachev",
        "description": "Interview with Gorbachev on USSR’s fall",
        "location": {
            "lat": 55.7558,
            "lng": 37.6173
        },
        "event_start": 1985,
        "event_end": 1991
    },
    {
        "title": "Daniel",
        "description": "Travel diary of late filmmaker",
        "location": {
            "lat": 17.0594,
            "lng": -89.158
        },
        "event_start": 2000,
        "event_end": 2009
    },
    {
        "title": "Get Smart With Money",
        "description": "Financial literacy made simple",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "Torn",
        "description": "Climber’s family reconciling with loss",
        "location": {
            "lat": 28.3949,
            "lng": 84.124
        },
        "event_start": 1999,
        "event_end": 2019
    },
    {
        "title": "The Eagle Huntress",
        "description": "First girl eagle hunter in her clan",
        "location": {
            "lat": 48.0196,
            "lng": 89.8378
        },
        "event_start": 2015,
        "event_end": 2015
    },
    {
        "title": "Jennifer Lopez: Let's Get Loud",
        "description": "First J.Lo headlining concert",
        "location": {
            "lat": 18.2208,
            "lng": -66.5901
        },
        "event_start": 2001,
        "event_end": 2002
    },
    {
        "title": "The Beast Within: Making Alien",
        "description": "Creation of Alien horror classic",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1978,
        "event_end": 1979
    },
    {
        "title": "Harlan County U.S.A.",
        "description": "Miners strike in Kentucky",
        "location": {
            "lat": 36.8437,
            "lng": -83.3186
        },
        "event_start": 1973,
        "event_end": 1974
    },
    {
        "title": "The Most Magical Story on Earth: 50 Years of Walt Disney World",
        "description": "Disney World’s 50-year history",
        "location": {
            "lat": 28.3852,
            "lng": -81.5639
        },
        "event_start": 1971,
        "event_end": 2021
    },
    {
        "title": "Unsupersize Us",
        "description": "Plant-based diet health reversal",
        "location": {
            "lat": 29.6516,
            "lng": -82.3248
        },
        "event_start": 2015,
        "event_end": 2016
    },
    {
        "title": "Architecton",
        "description": "Concrete’s role in our future",
        "location": {
            "lat": 48.1351,
            "lng": 11.582
        },
        "event_start": 2020,
        "event_end": 2024
    },
    {
        "title": "Coma",
        "description": "Brain trauma rehab journey",
        "location": {
            "lat": 40.0583,
            "lng": -74.4057
        },
        "event_start": 2004,
        "event_end": 2006
    },
    {
        "title": "Comic Book Confidential",
        "description": "History of comic books",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1930,
        "event_end": 1988
    },
    {
        "title": "The Singing Revolution",
        "description": "Estonians win freedom with song",
        "location": {
            "lat": 59.437,
            "lng": 24.7536
        },
        "event_start": 1986,
        "event_end": 1991
    },
    {
        "title": "POM Wonderful Presents: The Greatest Movie Ever Sold",
        "description": "Doc on product placement irony",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2010,
        "event_end": 2010
    },
    {
        "title": "Kevin Hart: Zero F**ks Given",
        "description": "Stand-up during pandemic",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2020,
        "event_end": 2020
    },
    {
        "title": "Sisterhood",
        "description": "Women’s lives in Japan today",
        "location": {
            "lat": 35.6895,
            "lng": 139.6917
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Untold: Crime & Penalties",
        "description": "Mob-funded hockey team scandal",
        "location": {
            "lat": 41.3948,
            "lng": -73.454
        },
        "event_start": 2004,
        "event_end": 2005
    },
    {
        "title": "Eldorado: Everything the Nazis Hate",
        "description": "Berlin’s queer scene vs. Nazis",
        "location": {
            "lat": 52.52,
            "lng": 13.405
        },
        "event_start": 1920,
        "event_end": 1933
    },
    {
        "title": "Deepsea Challenge 3D",
        "description": "Cameron’s record deep-sea dive",
        "location": {
            "lat": 11.35,
            "lng": 142.2
        },
        "event_start": 2012,
        "event_end": 2012
    },
    {
        "title": "Hitler Versus Picasso",
        "description": "Nazis’ war on modern art",
        "location": {
            "lat": 48.1351,
            "lng": 11.582
        },
        "event_start": 1937,
        "event_end": 1945
    },
    {
        "title": "Ryan Reynolds: I'm a Laureate?",
        "description": "Reynolds reflects with humor",
        "location": {
            "lat": 45.4215,
            "lng": -75.6972
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "Einstein's Big Idea",
        "description": "The history of E=mc²",
        "location": {
            "lat": 47.3769,
            "lng": 8.5417
        },
        "event_start": 1905,
        "event_end": 1905
    },
    {
        "title": "Roger & Me",
        "description": "GM layoffs and corporate evasion",
        "location": {
            "lat": 43.0125,
            "lng": -83.6875
        },
        "event_start": 1987,
        "event_end": 1988
    },
    {
        "title": "Born Racer",
        "description": "Inside the world of IndyCar",
        "location": {
            "lat": 39.7684,
            "lng": -86.1581
        },
        "event_start": 2016,
        "event_end": 2017
    },
    {
        "title": "Bruce Springsteen's Letter to You",
        "description": "Springsteen reunites with band",
        "location": {
            "lat": 40.2957,
            "lng": -74.1726
        },
        "event_start": 2020,
        "event_end": 2020
    },
    {
        "title": "Soul of a Nation Presents: Black in Vegas",
        "description": "Black entertainers’ Vegas history",
        "location": {
            "lat": 36.1699,
            "lng": -115.1398
        },
        "event_start": 1950,
        "event_end": 2023
    },
    {
        "title": "Mysterious Object at Noon",
        "description": "Villagers build a collaborative tale",
        "location": {
            "lat": 15.87,
            "lng": 100.9925
        },
        "event_start": 2000,
        "event_end": 2000
    },
    {
        "title": "Bully",
        "description": "First-day-of-school bullying insights",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2011,
        "event_end": 2011
    },
    {
        "title": "Revolution: New Art for a New World",
        "description": "Russian avant-garde under Stalin",
        "location": {
            "lat": 55.7558,
            "lng": 37.6173
        },
        "event_start": 1917,
        "event_end": 1932
    },
    {
        "title": "The Dreamlife of Georgie Stone",
        "description": "Trans rights activist’s personal journey",
        "location": {
            "lat": -35.2809,
            "lng": 149.13
        },
        "event_start": 2000,
        "event_end": 2022
    },
    {
        "title": "Trainwreck: Balloon Boy",
        "description": "Balloon Boy viral news story",
        "location": {
            "lat": 40.5853,
            "lng": -105.0844
        },
        "event_start": 2009,
        "event_end": 2009
    },
    {
        "title": "I Am Comic",
        "description": "Comedian comeback & community profile",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1980,
        "event_end": 2010
    },
    {
        "title": "James Stewart: A Wonderful Life",
        "description": "Celebrating James Stewart’s legacy",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 1920,
        "event_end": 1988
    },
    {
        "title": "Expedition Amazon",
        "description": "National Geographic’s Amazon research",
        "location": {
            "lat": -3.4653,
            "lng": -62.2159
        },
        "event_start": 2017,
        "event_end": 2024
    },
    {
        "title": "The U.S. vs. John Lennon",
        "description": "Lennon’s activism & FBI scrutiny",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1966,
        "event_end": 1972
    },
    {
        "title": "Inside Christopher Nolan's Oppenheimer",
        "description": "Nolan’s making of Oppenheimer",
        "location": {
            "lat": 42.3601,
            "lng": -71.0589
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "The Secret Science of Sewage",
        "description": "Wastewater science & innovation",
        "location": {
            "lat": 55.3781,
            "lng": -3.436
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "Complicated Women",
        "description": "Pre-code Hollywood female roles",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1929,
        "event_end": 1934
    },
    {
        "title": "Permanent Vacation",
        "description": "Family camping gone off the rails",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2007,
        "event_end": 2007
    },
    {
        "title": "The Queen of Versailles",
        "description": "Billionaire mansion during crash",
        "location": {
            "lat": 28.3852,
            "lng": -81.5639
        },
        "event_start": 2006,
        "event_end": 2008
    },
    {
        "title": "Man of Aran",
        "description": "Life on Ireland’s harsh islands",
        "location": {
            "lat": 53.0701,
            "lng": -9.6537
        },
        "event_start": 1931,
        "event_end": 1933
    },
    {
        "title": "Becoming",
        "description": "Michelle Obama’s life & tour",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "LA 92",
        "description": "Rodney King unrest through archives",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1992,
        "event_end": 1992
    },
    {
        "title": "One Direction: Where We Are…",
        "description": "23-song live concert at San Siro",
        "location": {
            "lat": 45.4642,
            "lng": 9.19
        },
        "event_start": 2014,
        "event_end": 2014
    },
    {
        "title": "Startup.com",
        "description": "Rise & fall of govWorks.com",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1999,
        "event_end": 2000
    },
    {
        "title": "Kangaroo Valley",
        "description": "Baby kangaroo survival in wild",
        "location": {
            "lat": -35.31,
            "lng": 149.485
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Concert for George",
        "description": "Memorial concert first anniversary",
        "location": {
            "lat": 51.5008,
            "lng": -0.1774
        },
        "event_start": 2002,
        "event_end": 2002
    },
    {
        "title": "SUGA: Road to D-DAY",
        "description": "BTS artist instruments & album journeys",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Titanic: Into the Heart of the Wreck",
        "description": "Underwater Titanic exploration",
        "location": {
            "lat": 47,
            "lng": -50
        },
        "event_start": 1985,
        "event_end": 2020
    },
    {
        "title": "Being Mary Tyler Moore",
        "description": "Career retrospective with intimate access",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 2022
    },
    {
        "title": "Ai Weiwei: Never Sorry",
        "description": "Artist’s rise & political persecution",
        "location": {
            "lat": 39.9042,
            "lng": 116.4074
        },
        "event_start": 2008,
        "event_end": 2011
    },
    {
        "title": "TikTok Star Murders",
        "description": "Domestic abuse becomes deadly",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Capturing the Killer Nurse",
        "description": "Serial killer nurse uncovered",
        "location": {
            "lat": 40.0583,
            "lng": -74.4057
        },
        "event_start": 2003,
        "event_end": 2003
    },
    {
        "title": "Tim's Vermeer",
        "description": "Inventor explores painting mystery",
        "location": {
            "lat": 29.7604,
            "lng": -95.3698
        },
        "event_start": 2003,
        "event_end": 2012
    },
    {
        "title": "Nick Cave & The Bad Seeds…",
        "description": "Recording post‑tragedy album",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2015,
        "event_end": 2016
    },
    {
        "title": "Addicted to Sexting",
        "description": "Sexting’s societal impact",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2013,
        "event_end": 2015
    },
    {
        "title": "The Endurance",
        "description": "Shackleton’s survival expedition",
        "location": {
            "lat": -82.8628,
            "lng": 135
        },
        "event_start": 1914,
        "event_end": 1916
    },
    {
        "title": "Being Elmo: A Puppeteer’s Journey",
        "description": "Backstage with Elmo’s creator",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1980,
        "event_end": 2011
    },
    {
        "title": "The Last Dolphin King",
        "description": "Dolphin trainer’s tragic career",
        "location": {
            "lat": 40.4168,
            "lng": -3.7038
        },
        "event_start": 1980,
        "event_end": 2015
    },
    {
        "title": "Hitchcock/Truffaut",
        "description": "Legacy of Hitchcock and critics",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1962,
        "event_end": 1980
    },
    {
        "title": "The Rise & Fall of WCW",
        "description": "WCW’s wrestling empire saga",
        "location": {
            "lat": 33.749,
            "lng": -84.388
        },
        "event_start": 1988,
        "event_end": 2001
    },
    {
        "title": "!W.A.R.: !Women Art Revolution",
        "description": "Feminist art movement’s history",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1969,
        "event_end": 2010
    },
    {
        "title": "Encounters at the End of the World",
        "description": "Herzog explores Antarctic inhabitants",
        "location": {
            "lat": -75.25,
            "lng": -0.0714
        },
        "event_start": 2005,
        "event_end": 2006
    },
    {
        "title": "2021 and Done…",
        "description": "Comedians on a chaotic year",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2021
    },
    {
        "title": "Marvel's Captain America…",
        "description": "Captain America’s cultural relevance",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1941,
        "event_end": 2016
    },
    {
        "title": "The Cockettes",
        "description": "Counterculture performance troupe",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1970,
        "event_end": 1972
    },
    {
        "title": "Untold: Hall of Shame",
        "description": "BALCO steroid scandal in sports",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2002,
        "event_end": 2004
    },
    {
        "title": "Arctic Tale",
        "description": "Life of walrus & polar bear cubs",
        "location": {
            "lat": 75.25,
            "lng": -0.0714
        },
        "event_start": 2005,
        "event_end": 2007
    },
    {
        "title": "The Death of \"Superman Lives\"…",
        "description": "Cancelled Superman film history",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1998,
        "event_end": 2002
    },
    {
        "title": "The Nanny Reunion…",
        "description": "Cast reunion at Drescher's home",
        "location": {
            "lat": 34.0195,
            "lng": -118.4912
        },
        "event_start": 2004,
        "event_end": 2004
    },
    {
        "title": "Metal: A Headbanger's Journey",
        "description": "Origins of heavy metal genres",
        "location": {
            "lat": 45.4215,
            "lng": -75.6972
        },
        "event_start": 2004,
        "event_end": 2005
    },
    {
        "title": "Faster",
        "description": "Inside two MotoGP seasons",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2002,
        "event_end": 2003
    },
    {
        "title": "The Territory",
        "description": "Uru-eu-wau-wau fight for land",
        "location": {
            "lat": -10.9,
            "lng": -62.2167
        },
        "event_start": 2018,
        "event_end": 2022
    },
    {
        "title": "West of Memphis",
        "description": "Central Park Three case activism",
        "location": {
            "lat": 35.201,
            "lng": -91.8318
        },
        "event_start": 1993,
        "event_end": 2011
    },
    {
        "title": "The Crazy Gang…",
        "description": "Wimbledon FC’s FA Cup rise",
        "location": {
            "lat": 51.424,
            "lng": -0.214
        },
        "event_start": 1986,
        "event_end": 1990
    },
    {
        "title": "Bray Wyatt: Becoming Immortal",
        "description": "WWE star’s origin story",
        "location": {
            "lat": 27.9944,
            "lng": -82.5945
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Michel'le: Still Standing",
        "description": "R&B singer reflects on life",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "HIGHLIGHT: LIGHTS GO ON…",
        "description": "K-pop group anniversary concert",
        "location": {
            "lat": 37.5665,
            "lng": 126.978
        },
        "event_start": 2024,
        "event_end": 2024
    },
    {
        "title": "Tigers on the Rise",
        "description": "Tiger conservation success stories",
        "location": {
            "lat": 20.5937,
            "lng": 78.9629
        },
        "event_start": 2000,
        "event_end": 2024
    },
    {
        "title": "The End of the Line",
        "description": "Overfishing crisis alert",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2006,
        "event_end": 2009
    },
    {
        "title": "Young Royals Forever",
        "description": "Serie set commentary behind scenes",
        "location": {
            "lat": 59.3293,
            "lng": 18.0686
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "Mel Blanc: The Man…",
        "description": "Legacy of voice acting legend",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1930,
        "event_end": 1989
    },
    {
        "title": "After Death",
        "description": "Near-death experiences investigated",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2000,
        "event_end": 2023
    },
    {
        "title": "¡Casa Bonita Mi Amor!",
        "description": "Reviving iconic restaurant culture",
        "location": {
            "lat": 39.7392,
            "lng": -104.9903
        },
        "event_start": 1974,
        "event_end": 2024
    },
    {
        "title": "The September Issue",
        "description": "Vogue’s largest issue ever",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2007,
        "event_end": 2007
    },
    {
        "title": "Making The Helicopter Heist",
        "description": "Filming a heist sequence revealed",
        "location": {
            "lat": 59.3293,
            "lng": 18.0686
        },
        "event_start": 2023,
        "event_end": 2024
    },
    {
        "title": "My Daughter's Killer",
        "description": "Father seeks justice across nations",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1980,
        "event_end": 2020
    },
    {
        "title": "Garbo: Where Did You Go?",
        "description": "Greta Garbo fame and isolation",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1920,
        "event_end": 1960
    },
    {
        "title": "Rewind This!",
        "description": "VHS’s cultural impact",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1970,
        "event_end": 1990
    },
    {
        "title": "God Bless Ozzy Osbourne",
        "description": "Inside Ozzy’s life and music",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1970,
        "event_end": 2010
    },
    {
        "title": "The Trials of Henry Kissinger",
        "description": "Kissinger & wartime controversies",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1969,
        "event_end": 1975
    },
    {
        "title": "Magic of the Disney Treasure",
        "description": "Inside new Disney cruise ship",
        "location": {
            "lat": 25.0343,
            "lng": -77.3963
        },
        "event_start": 2024,
        "event_end": 2025
    },
    {
        "title": "A LEGO Brickumentary",
        "description": "LEGO's global cultural story",
        "location": {
            "lat": 55.6761,
            "lng": 12.5683
        },
        "event_start": 1930,
        "event_end": 2010
    },
    {
        "title": "Harold and Lillian: A Hollywood Love Story",
        "description": "Unrecognized creative duo",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1950,
        "event_end": 2000
    },
    {
        "title": "Super Duper Alice Cooper",
        "description": "Origin of shock rock",
        "location": {
            "lat": 42.3314,
            "lng": -83.0458
        },
        "event_start": 1960,
        "event_end": 1980
    },
    {
        "title": "Into the Abyss",
        "description": "Death row inmate interviews",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 2007,
        "event_end": 2010
    },
    {
        "title": "Depeche Mode 101",
        "description": "Behind US tour scenes",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1988,
        "event_end": 1988
    },
    {
        "title": "Untold: The Race of the Century",
        "description": "Australia's America's Cup victory",
        "location": {
            "lat": -33.8688,
            "lng": 151.2093
        },
        "event_start": 1983,
        "event_end": 1983
    },
    {
        "title": "Chicago 10",
        "description": "Trial of Vietnam protesters",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 1968,
        "event_end": 1969
    },
    {
        "title": "I Am Patrick Swayze",
        "description": "Life through loved ones’ eyes",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1950,
        "event_end": 2009
    },
    {
        "title": "Weiner",
        "description": "Anthony Weiner campaign exposed",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2013,
        "event_end": 2013
    },
    {
        "title": "Devil's Road: Ed & Lorraine Warren",
        "description": "Famous paranormal investigators",
        "location": {
            "lat": 41.5853,
            "lng": -87.3546
        },
        "event_start": 1970,
        "event_end": 2020
    },
    {
        "title": "Taxi to the Dark Side",
        "description": "US torture policy explored",
        "location": {
            "lat": 33.9391,
            "lng": 67.71
        },
        "event_start": 2002,
        "event_end": 2006
    },
    {
        "title": "Dig!",
        "description": "Rival rock band saga",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1995,
        "event_end": 2003
    },
    {
        "title": "Wham!: Last Christmas Unwrapped",
        "description": "Song's cultural legacy",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1984,
        "event_end": 2023
    },
    {
        "title": "Nelma Kodama…",
        "description": "Brazilian corruption insider",
        "location": {
            "lat": -23.5505,
            "lng": -46.6333
        },
        "event_start": 2000,
        "event_end": 2024
    },
    {
        "title": "Jay and Silent Bob Go Down Under",
        "description": "Live stand-up in Sydney",
        "location": {
            "lat": -33.8688,
            "lng": 151.2093
        },
        "event_start": 2012,
        "event_end": 2012
    },
    {
        "title": "Spring Awakening: Those You've Known",
        "description": "Broadway reunion concert",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "High School Musical Holiday Special",
        "description": "Festive musical cast special",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2020,
        "event_end": 2020
    },
    {
        "title": "To Be and to Have",
        "description": "One-year classroom in rural France",
        "location": {
            "lat": 45.5626,
            "lng": 2.7432
        },
        "event_start": 2001,
        "event_end": 2002
    },
    {
        "title": "Untold: Operation Flagrant Foul",
        "description": "NBA referee scandal revisited",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2007,
        "event_end": 2022
    },
    {
        "title": "Hated: GG Allin & Murder Junkies",
        "description": "Provocative punk rock profile",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1980,
        "event_end": 1993
    },
    {
        "title": "Supermensch: Shep Gordon",
        "description": "Music manager’s extraordinary life",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 2013
    },
    {
        "title": "Generation Iron 2",
        "description": "Modern bodybuilding’s next era",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "Muscle Shoals",
        "description": "Birth of a legendary music sound",
        "location": {
            "lat": 34.7455,
            "lng": -87.6676
        },
        "event_start": 1960,
        "event_end": 2010
    },
    {
        "title": "Ghislaine Maxwell: Filthy Rich",
        "description": "Sex-trafficking trial focus",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1990,
        "event_end": 2022
    },
    {
        "title": "2040",
        "description": "Vision of a sustainable future",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2016,
        "event_end": 2019
    },
    {
        "title": "Making of Empire Strikes Back",
        "description": "Lost BTS footage rediscovered",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1979,
        "event_end": 1980
    },
    {
        "title": "Screaming in High Heels",
        "description": "Rise & fall of scream queens",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1980,
        "event_end": 1980
    },
    {
        "title": "Norm Macdonald: Nothing Special",
        "description": "Final stand-up special filmed one take",
        "location": {
            "lat": 49.2827,
            "lng": -123.1207
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "Something from Nothing: The Art of Rap",
        "description": "Ice‑T explores rap’s culture",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2012,
        "event_end": 2012
    },
    {
        "title": "The Farthest",
        "description": "The story of Voyager probes",
        "location": {
            "lat": 28.5721,
            "lng": -80.648
        },
        "event_start": 1977,
        "event_end": 2018
    },
    {
        "title": "Silent but Deadly",
        "description": "Comedy and health scare",
        "location": {
            "lat": 34.1425,
            "lng": -118.255
        },
        "event_start": 2018,
        "event_end": 2018
    },
    {
        "title": "China Hustle",
        "description": "Wall Street stock scam uncovered",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2017,
        "event_end": 2018
    },
    {
        "title": "Sound of 007 live",
        "description": "James Bond theme concert",
        "location": {
            "lat": 51.5033,
            "lng": -0.1196
        },
        "event_start": 2022,
        "event_end": 2022
    },
    {
        "title": "That Vitamin Movie",
        "description": "Vitamins and mental health debate",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2016,
        "event_end": 2016
    },
    {
        "title": "Illuminated: The True Story of the Illuminati",
        "description": "Origins and myths explored",
        "location": {
            "lat": 48.7904,
            "lng": 11.4979
        },
        "event_start": 1776,
        "event_end": 2025
    },
    {
        "title": "Jay and Silent Bob Get Old: Teabagging in the UK",
        "description": "UK comedy tour highlights",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2012,
        "event_end": 2012
    },
    {
        "title": "David Hockney: Joiner Photographs",
        "description": "Artist reflects on new medium",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1977,
        "event_end": 1983
    },
    {
        "title": "Boom for Real: Teenage Basquiat",
        "description": "Basquiat’s early art days",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1977,
        "event_end": 1982
    },
    {
        "title": "Larger than Life: Kevyn Aucoin Story",
        "description": "Makeup icon’s career spans",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1980,
        "event_end": 2002
    },
    {
        "title": "Lewis Capaldi: How I'm Feeling Now",
        "description": "Capaldi’s personal rise",
        "location": {
            "lat": 56.4907,
            "lng": -4.2026
        },
        "event_start": 2018,
        "event_end": 2023
    },
    {
        "title": "Happy",
        "description": "Global happiness exploration",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2008,
        "event_end": 2012
    },
    {
        "title": "Babies",
        "description": "First-year lives of infants",
        "location": {
            "lat": -18.0601,
            "lng": 100.492
        },
        "event_start": 2009,
        "event_end": 2010
    },
    {
        "title": "My Heroes Were Cowboys",
        "description": "A cowboy’s healing journey",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "The War on Democracy",
        "description": "US influence critiqued",
        "location": {
            "lat": 12.1165,
            "lng": -86.252
        },
        "event_start": 2000,
        "event_end": 2007
    },
    {
        "title": "Nose",
        "description": "Dior’s fragrance creation",
        "location": {
            "lat": 43.6594,
            "lng": 7.151
        },
        "event_start": 2019,
        "event_end": 2021
    },
    {
        "title": "Terror in the Aisles",
        "description": "Horror film moments compiled",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1890,
        "event_end": 1984
    },
    {
        "title": "Soul Power",
        "description": "Zaire '74 concert footage",
        "location": {
            "lat": -4.4419,
            "lng": 15.2663
        },
        "event_start": 1974,
        "event_end": 1974
    },
    {
        "title": "Rosa Peral's Tapes",
        "description": "Murder confession in prison",
        "location": {
            "lat": 40.4168,
            "lng": -3.7038
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Wuornos: Selling Serial Killer",
        "description": "Follows Wuornos trial & media",
        "location": {
            "lat": 27.6648,
            "lng": -81.5158
        },
        "event_start": 1991,
        "event_end": 1992
    },
    {
        "title": "Richard Pryor: Live Sunset",
        "description": "Pryor performs post-accident",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1980,
        "event_end": 1982
    },
    {
        "title": "Industrial Light & Magic doc",
        "description": "ILM breakthroughs",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1975,
        "event_end": 2010
    },
    {
        "title": "Prince: Sign o' the Times Tour",
        "description": "Live concert film capture",
        "location": {
            "lat": 44.9778,
            "lng": -93.265
        },
        "event_start": 1987,
        "event_end": 1987
    },
    {
        "title": "Kurt & Courtney",
        "description": "Cobain’s death investigated",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 1994,
        "event_end": 1998
    },
    {
        "title": "Linda Ronstadt: Sound of My Voice",
        "description": "Ronstadt’s rise chronicled",
        "location": {
            "lat": 32.7157,
            "lng": -117.1611
        },
        "event_start": 1965,
        "event_end": 2010
    },
    {
        "title": "The Black Power Mixtape 1967–1975",
        "description": "Evolution of Black Power",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1967,
        "event_end": 1975
    },
    {
        "title": "Lost on Everest",
        "description": "Search for Irvine’s body",
        "location": {
            "lat": 27.9881,
            "lng": 86.925
        },
        "event_start": 1924,
        "event_end": 1924
    },
    {
        "title": "Explorer: The Last Tepui",
        "description": "Tepui first-ascent expedition",
        "location": {
            "lat": 3.4168,
            "lng": -65.8576
        },
        "event_start": 2021,
        "event_end": 2022
    },
    {
        "title": "Road to Wadesboro – Evil Dead 2 Locations",
        "description": "Filming location tour",
        "location": {
            "lat": 34.9915,
            "lng": -80.0973
        },
        "event_start": 1987,
        "event_end": 1987
    },
    {
        "title": "Nothing Left Unsaid: Gloria Vanderbilt & Anderson Cooper",
        "description": "Mother–son memoir",
        "location": {
            "lat": 42.4072,
            "lng": -71.3824
        },
        "event_start": 1924,
        "event_end": 2016
    },
    {
        "title": "Bugs Bunny/Looney Tunes All-Star 50th Anniversary",
        "description": "Celebrating cartoon icons",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1930,
        "event_end": 1986
    },
    {
        "title": "Every Body",
        "description": "Intersex journeys",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2023
    },
    {
        "title": "Untold: Jake Paul the Problem Child",
        "description": "Jake Paul's transformation",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2013,
        "event_end": 2023
    },
    {
        "title": "Don’t You Forget About Me",
        "description": "John Hughes’ disappearance",
        "location": {
            "lat": 43.6511,
            "lng": -79.347
        },
        "event_start": 1980,
        "event_end": 2008
    },
    {
        "title": "The Godfather Legacy",
        "description": "Godfather franchise deep dive",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1945,
        "event_end": 2012
    },
    {
        "title": "Now and Then – The Last Beatles Song",
        "description": "Finale Beatles song",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1995,
        "event_end": 2023
    },
    {
        "title": "Trainwreck: The Real Project X",
        "description": "Viral teen party chaos",
        "location": {
            "lat": 53.2167,
            "lng": 6.5667
        },
        "event_start": 2012,
        "event_end": 2012
    },
    {
        "title": "Nuclear Now",
        "description": "Nuclear energy advocacy",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1950,
        "event_end": 2022
    },
    {
        "title": "No Safe Spaces",
        "description": "Free speech on campus",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2015,
        "event_end": 2019
    },
    {
        "title": "Finding Michael",
        "description": "Everest disappearance inquiry",
        "location": {
            "lat": 27.9881,
            "lng": 86.925
        },
        "event_start": 1999,
        "event_end": 1999
    },
    {
        "title": "The Life of Buddha",
        "description": "Biography of Buddha",
        "location": {
            "lat": 27.1751,
            "lng": 78.0421
        },
        "event_start": -563,
        "event_end": -483
    },
    {
        "title": "Magnus",
        "description": "Chess prodigy",
        "location": {
            "lat": 60.472,
            "lng": 8.4689
        },
        "event_start": 1990,
        "event_end": 2013
    },
    {
        "title": "The Lady of Silence: The Mataviejitas Murders",
        "description": "Elderly murder spree",
        "location": {
            "lat": 19.4326,
            "lng": -99.1332
        },
        "event_start": 1998,
        "event_end": 2005
    },
    {
        "title": "David Bowie: The Last Five Years",
        "description": "Bowie’s final works",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2012,
        "event_end": 2017
    },
    {
        "title": "The Original Kings of Comedy",
        "description": "Comedy tour film",
        "location": {
            "lat": 29.7604,
            "lng": -95.3698
        },
        "event_start": 1999,
        "event_end": 1999
    },
    {
        "title": "Thou Shalt Not: Sex, Sin and Censorship in Pre-Code Hollywood",
        "description": "Czech Hays Code era",
        "location": {
            "lat": 34.0928,
            "lng": -118.3287
        },
        "event_start": 1927,
        "event_end": 1934
    },
    {
        "title": "Anna Nicole Smith: You Don't Know Me",
        "description": "Anna Nicole’s rise & fall",
        "location": {
            "lat": 25.7617,
            "lng": -80.1918
        },
        "event_start": 1992,
        "event_end": 2007
    },
    {
        "title": "Diaries, Notes, and Sketches",
        "description": "Avant-garde NYC art",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1960,
        "event_end": 1969
    },
    {
        "title": "Tim & Faith: Soul2Soul",
        "description": "McGraw–Hill tour documentary",
        "location": {
            "lat": 36.1627,
            "lng": -86.7816
        },
        "event_start": 2017,
        "event_end": 2017
    },
    {
        "title": "Believer",
        "description": "Mormon LGBTQ crisis",
        "location": {
            "lat": 40.7608,
            "lng": -111.891
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Cirque du Soleil: Alegria",
        "description": "Cirque du Soleil origins",
        "location": {
            "lat": 45.5017,
            "lng": -73.5673
        },
        "event_start": 1994,
        "event_end": 2001
    },
    {
        "title": "Mike Wallace Is Here",
        "description": "Mike Wallace career retrospective",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1950,
        "event_end": 2018
    },
    {
        "title": "black-ish: A Celebration – An ABC News Special",
        "description": "‘black-ish’ retrospective",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2009,
        "event_end": 2022
    },
    {
        "title": "Bad Reputation",
        "description": "Joan Jett career story",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1975,
        "event_end": 2018
    },
    {
        "title": "State Funeral",
        "description": "Stalin funeral coverage",
        "location": {
            "lat": 55.7558,
            "lng": 37.6173
        },
        "event_start": 1953,
        "event_end": 1953
    },
    {
        "title": "It Might Get Loud",
        "description": "Guitarist trio story",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2007,
        "event_end": 2008
    },
    {
        "title": "Altman",
        "description": "Robert Altman career documentary",
        "location": {
            "lat": 39.0997,
            "lng": -94.5786
        },
        "event_start": 1959,
        "event_end": 2006
    },
    {
        "title": "Giving Voice",
        "description": "High school acting contest",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2019,
        "event_end": 2020
    },
    {
        "title": "Victim/Suspect",
        "description": "Assault survivors investigation",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2018,
        "event_end": 2023
    },
    {
        "title": "Killer Shark Vs. Killer Whale",
        "description": "Orcas–shark interactions",
        "location": {
            "lat": 0,
            "lng": -160
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "The Devil and Daniel Johnston",
        "description": "Music outsider biography",
        "location": {
            "lat": 30.2669,
            "lng": -97.7428
        },
        "event_start": 1980,
        "event_end": 2005
    },
    {
        "title": "Inside Pandora's Box",
        "description": "Cinema tech featurettes",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2021,
        "event_end": 2023
    },
    {
        "title": "Festival Express",
        "description": "Canadian music train tour",
        "location": {
            "lat": 49.2827,
            "lng": -123.1207
        },
        "event_start": 1970,
        "event_end": 1970
    },
    {
        "title": "Celia Cruz | ¡Azúcar!",
        "description": "Tribute to Celia Cruz",
        "location": {
            "lat": 25.7617,
            "lng": -80.1918
        },
        "event_start": 2003,
        "event_end": 2004
    },
    {
        "title": "Cypher",
        "description": "Fictional music conspiracy",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "The Image Book",
        "description": "Godard’s Cannes shocker",
        "location": {
            "lat": 43.5517,
            "lng": 7.0128
        },
        "event_start": 2018,
        "event_end": 2018
    },
    {
        "title": "One Direction: Up All Night - The Live Tour",
        "description": "Live DVD Tour",
        "location": {
            "lat": 50.7209,
            "lng": -1.8781
        },
        "event_start": 2012,
        "event_end": 2012
    },
    {
        "title": "The Flood",
        "description": "Kalahari flood cycle",
        "location": {
            "lat": -19.031,
            "lng": 23.5703
        },
        "event_start": 2025,
        "event_end": 2025
    },
    {
        "title": "Indiana Jones: Making the Trilogy",
        "description": "Indy trilogy behind scenes",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1981,
        "event_end": 1989
    },
    {
        "title": "Giants of the Deep Blue",
        "description": "Ancient marine giants",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": -6000000000,
        "event_end": 2017
    },
    {
        "title": "First Position",
        "description": "Ballet competition doc",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2010,
        "event_end": 2011
    },
    {
        "title": "The Speed Cubers",
        "description": "Cube-solving champs",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2019,
        "event_end": 2019
    },
    {
        "title": "Assassins",
        "description": "Kim Jong-nam case",
        "location": {
            "lat": 3.139,
            "lng": 101.6869
        },
        "event_start": 2017,
        "event_end": 2020
    },
    {
        "title": "Road",
        "description": "Dunlop family racers",
        "location": {
            "lat": 54.2361,
            "lng": -4.5481
        },
        "event_start": 2013,
        "event_end": 2014
    },
    {
        "title": "Gasland",
        "description": "Fracking exposé",
        "location": {
            "lat": 39.8283,
            "lng": -98.5795
        },
        "event_start": 2005,
        "event_end": 2010
    },
    {
        "title": "Halloween: 25 Years of Terror",
        "description": "Halloween movies retrospective",
        "location": {
            "lat": 42.0408,
            "lng": -87.6877
        },
        "event_start": 1978,
        "event_end": 2003
    },
    {
        "title": "Running with the Devil: The Wild World of John McAfee",
        "description": "On-the-run McAfee doc",
        "location": {
            "lat": 15,
            "lng": -86
        },
        "event_start": 2012,
        "event_end": 2021
    },
    {
        "title": "The Muppets Celebrate Jim Henson",
        "description": "Muppets tribute special",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1989,
        "event_end": 1990
    },
    {
        "title": "Koko: A Red Dog Story",
        "description": "Famous dog tale",
        "location": {
            "lat": -31.9505,
            "lng": 115.8605
        },
        "event_start": 2014,
        "event_end": 2019
    },
    {
        "title": "Pump",
        "description": "Oil dependency doc",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2014
    },
    {
        "title": "Shadows of Liberty",
        "description": "Media freedom exposé",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2012
    },
    {
        "title": "Little Richard: I Am Everything",
        "description": "Little Richard’s legacy",
        "location": {
            "lat": 32.7767,
            "lng": -96.797
        },
        "event_start": 1950,
        "event_end": 2020
    },
    {
        "title": "The Sweatbox",
        "description": "Disney exposé",
        "location": {
            "lat": 33.8121,
            "lng": -117.919
        },
        "event_start": 1997,
        "event_end": 2002
    },
    {
        "title": "Monty Python Live (Mostly)",
        "description": "Python reunion concert",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2014,
        "event_end": 2014
    },
    {
        "title": "City of Ghosts",
        "description": "Citizen journalists doc",
        "location": {
            "lat": 35.9349,
            "lng": 39.0321
        },
        "event_start": 2014,
        "event_end": 2017
    },
    {
        "title": "The N.Y. Friars Club Roast of Jerry Stiller",
        "description": "Roast of Jerry Stiller",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1999,
        "event_end": 1999
    },
    {
        "title": "Gaza",
        "description": "Gaza human portrait",
        "location": {
            "lat": 31.3547,
            "lng": 34.3088
        },
        "event_start": -6000000000,
        "event_end": 2019
    },
    {
        "title": "To the Arctic 3D",
        "description": "Polar bear story",
        "location": {
            "lat": 82.8628,
            "lng": -135
        },
        "event_start": 2011,
        "event_end": 2012
    },
    {
        "title": "Unholy Matrimony",
        "description": "Limons true crime",
        "location": {
            "lat": 34.0373,
            "lng": -116.9555
        },
        "event_start": 2018,
        "event_end": 2023
    },
    {
        "title": "Classic Albums: U2 - The Joshua Tree",
        "description": "Making The Joshua Tree",
        "location": {
            "lat": 53.3498,
            "lng": -6.2603
        },
        "event_start": 1986,
        "event_end": 1987
    },
    {
        "title": "Til Death Do Us Part Kourtney & Travis",
        "description": "Kourtney-Travis wedding doc",
        "location": {
            "lat": 44.3105,
            "lng": 9.21
        },
        "event_start": 2022,
        "event_end": 2023
    },
    {
        "title": "Becoming Hitchcock: The Legacy of Blackmail",
        "description": "Hitchcock’s early sound era",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1929,
        "event_end": 2024
    },
    {
        "title": "25 Messianic Signs",
        "description": "Prophecy signs doc",
        "location": {
            "lat": 31.7683,
            "lng": 35.2137
        },
        "event_start": -6000000000,
        "event_end": 2006
    },
    {
        "title": "Struggle: The Life and Lost Art of Szukalski",
        "description": "Rediscovering Szukalski",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1920,
        "event_end": 2018
    },
    {
        "title": "Nuclear Nation",
        "description": "Fukushima aftermath",
        "location": {
            "lat": 37.4861,
            "lng": 141.0328
        },
        "event_start": 2011,
        "event_end": 2012
    },
    {
        "title": "It's Tough to Be a Bird",
        "description": "Animated bird doc",
        "location": {
            "lat": 37.0902,
            "lng": -95.7129
        },
        "event_start": 1900,
        "event_end": 1969
    },
    {
        "title": "The Racing Scene",
        "description": "James Garner racing",
        "location": {
            "lat": 23.6345,
            "lng": -102.5528
        },
        "event_start": 1968,
        "event_end": 1969
    },
    {
        "title": "The Last Dance",
        "description": "Bulls dynasty docuseries",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 1995,
        "event_end": 1998
    },
    {
        "title": "Comedian",
        "description": "Seinfeld's return to stand-up",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2001,
        "event_end": 2002
    },
    {
        "title": "Ghostwatch: Behind the Curtains",
        "description": "Haunted live TV special",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1992,
        "event_end": 1992
    },
    {
        "title": "Citizen Clark... A Life of Principle",
        "description": "Biopic of politician Clark",
        "location": {
            "lat": -25.2744,
            "lng": 133.7751
        },
        "event_start": 1932,
        "event_end": 2013
    },
    {
        "title": "Goldman Sachs: Power and Peril",
        "description": "Inside Goldman Sachs",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2008,
        "event_end": 2012
    },
    {
        "title": "Super Rich: The Greed Game",
        "description": "Wealth inequality exposé",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2020,
        "event_end": 2022
    },
    {
        "title": "Wall Street Warriors",
        "description": "Brokers' lives docu-series",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2005,
        "event_end": 2006
    },
    {
        "title": "Hired Gun",
        "description": "Session musicians spotlight",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2000,
        "event_end": 2016
    },
    {
        "title": "Me and Bobby Fischer",
        "description": "Chess reunion documentary",
        "location": {
            "lat": 64.1466,
            "lng": -21.9426
        },
        "event_start": 2006,
        "event_end": 2009
    },
    {
        "title": "Leftover Women",
        "description": "Pressure on single Chinese women",
        "location": {
            "lat": 35.8617,
            "lng": 104.1954
        },
        "event_start": 2017,
        "event_end": 2019
    },
    {
        "title": "Mind Field",
        "description": "YouTube science series",
        "location": {
            "lat": 37.0902,
            "lng": -95.7129
        },
        "event_start": 2015,
        "event_end": 2017
    },
    {
        "title": "Beware the Slenderman",
        "description": "True crime in Slenderman case",
        "location": {
            "lat": 43.0117,
            "lng": -88.2315
        },
        "event_start": 2014,
        "event_end": 2016
    },
    {
        "title": "Eminent Monsters",
        "description": "Mythology & media doc",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2018,
        "event_end": 2019
    },
    {
        "title": "Spaceship Earth",
        "description": "Closed ecosystem experiment",
        "location": {
            "lat": 34.2544,
            "lng": -112.6097
        },
        "event_start": 1991,
        "event_end": 2020
    },
    {
        "title": "The Power of Nightmares",
        "description": "Fear politics analysis",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1990,
        "event_end": 2004
    },
    {
        "title": "The Mayfair Set",
        "description": "British capitalism series",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1970,
        "event_end": 1990
    },
    {
        "title": "Pandora's Box",
        "description": "Science & ethics docu-series",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1960,
        "event_end": 1992
    },
    {
        "title": "The Ascent of Money",
        "description": "History of finance",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1500,
        "event_end": 2008
    },
    {
        "title": "HyperNormalisation",
        "description": "Society's illusion of normalcy",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1970,
        "event_end": 2016
    },
    {
        "title": "Dear Zachary: A Letter to a Son About His Father",
        "description": "Father murdered, custody battle",
        "location": {
            "lat": 45.4215,
            "lng": -75.6972
        },
        "event_start": 2002,
        "event_end": 2008
    },
    {
        "title": "In the Realms of the Unreal",
        "description": "Biography of outsider artist Henry Darger",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1935,
        "event_end": 1999
    },
    {
        "title": "Kumaré",
        "description": "Fake guru social experiment",
        "location": {
            "lat": 33.4484,
            "lng": -112.074
        },
        "event_start": 2010,
        "event_end": 2011
    },
    {
        "title": "Last Breath",
        "description": "Deep-sea survival",
        "location": {
            "lat": 60,
            "lng": 1
        },
        "event_start": 2012,
        "event_end": 2019
    },
    {
        "title": "LuLaRich",
        "description": "MLM cult expose",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2015,
        "event_end": 2021
    },
    {
        "title": "Frank and Ollie",
        "description": "Disney animation pioneers",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1930,
        "event_end": 1995
    },
    {
        "title": "Vita Activa: The Spirit of Hannah Arendt",
        "description": "Philosopher’s life and work",
        "location": {
            "lat": 52.52,
            "lng": 13.405
        },
        "event_start": 1933,
        "event_end": 1975
    },
    {
        "title": "Banking on Heaven",
        "description": "Religious banking scandal",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1950,
        "event_end": 2016
    },
    {
        "title": "Sons of Perdition",
        "description": "FLDS teenage escape stories",
        "location": {
            "lat": 40.7608,
            "lng": -111.891
        },
        "event_start": 2002,
        "event_end": 2010
    },
    {
        "title": "I Escaped a Cult",
        "description": "Cult escape testimonies",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1980,
        "event_end": 2022
    },
    {
        "title": "Prophet's Prey",
        "description": "Warren Jeffs expose",
        "location": {
            "lat": 40.7608,
            "lng": -111.891
        },
        "event_start": 1995,
        "event_end": 2015
    },
    {
        "title": "The Crash",
        "description": "Asian financial crisis",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1997,
        "event_end": 1999
    },
    {
        "title": "Benjamin Franklin",
        "description": "Founding father biography",
        "location": {
            "lat": 39.9526,
            "lng": -75.1652
        },
        "event_start": 1706,
        "event_end": 1790
    },
    {
        "title": "The Case Against Adnan Syed",
        "description": "Serial criminal case review",
        "location": {
            "lat": 39.0458,
            "lng": -76.6413
        },
        "event_start": 1999,
        "event_end": 2019
    },
    {
        "title": "Empire: How Britain Made the Modern World",
        "description": "British Empire history",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1600,
        "event_end": 2012
    },
    {
        "title": "China: Triumph and Turmoil",
        "description": "Modern Chinese history",
        "location": {
            "lat": 39.9042,
            "lng": 116.4074
        },
        "event_start": 1949,
        "event_end": 2015
    },
    {
        "title": "Civilization: Is the West History?",
        "description": "Western civilization analysis",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1000,
        "event_end": 2011
    },
    {
        "title": "One Day on Earth",
        "description": "Global life snapshot",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 2011,
        "event_end": 2011
    },
    {
        "title": "Step Into Liquid",
        "description": "Surf culture tribute",
        "location": {
            "lat": 34.0195,
            "lng": -118.4912
        },
        "event_start": 2002,
        "event_end": 2003
    },
    {
        "title": "100 Foot Wave",
        "description": "Giant wave surfing series",
        "location": {
            "lat": 39.601,
            "lng": -9.07
        },
        "event_start": 2017,
        "event_end": 2021
    },
    {
        "title": "Triumph of the Will",
        "description": "Nazi propaganda film",
        "location": {
            "lat": 49.45,
            "lng": 11.08
        },
        "event_start": 1934,
        "event_end": 1934
    },
    {
        "title": "Gang War: Bangin' in Little Rock",
        "description": "Urban gang conflict series",
        "location": {
            "lat": 34.7465,
            "lng": -92.2896
        },
        "event_start": 2011,
        "event_end": 2013
    },
    {
        "title": "Under Pressure: Making 'the Abyss'",
        "description": "Film production documentary",
        "location": {
            "lat": 35.7596,
            "lng": -79.0193
        },
        "event_start": 1987,
        "event_end": 1989
    },
    {
        "title": "American Playboy: The Hugh Hefner Story",
        "description": "Biographical docuseries",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "event_start": 1953,
        "event_end": 2017
    },
    {
        "title": "Best of Enemies: Buckley vs. Vidal",
        "description": "Televised debate analysis",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1968,
        "event_end": 1968
    },
    {
        "title": "Forgiving Dr. Mengele",
        "description": "Holocaust war crimes aftermath",
        "location": {
            "lat": -34.6037,
            "lng": -58.3816
        },
        "event_start": 1960,
        "event_end": 2005
    },
    {
        "title": "Psywar",
        "description": "Psychological warfare history",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2003,
        "event_end": 2009
    },
    {
        "title": "Valley Uprising",
        "description": "Climbing culture history",
        "location": {
            "lat": 37.8651,
            "lng": -119.5383
        },
        "event_start": 1950,
        "event_end": 2014
    },
    {
        "title": "Filmworker",
        "description": "Assistant to director Scorsese",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1960,
        "event_end": 2017
    },
    {
        "title": "Through the Fire",
        "description": "CEO survives terror attack",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2015,
        "event_end": 2018
    },
    {
        "title": "Scary Stories",
        "description": "Horror anthology doc",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1960,
        "event_end": 2017
    },
    {
        "title": "Shoah",
        "description": "Holocaust documentary epic",
        "location": {
            "lat": 52.2297,
            "lng": 21.0122
        },
        "event_start": 1939,
        "event_end": 1945
    },
    {
        "title": "Russia 1985-1999: TraumaZone",
        "description": "Post-Soviet transition film",
        "location": {
            "lat": 55.7558,
            "lng": 37.6173
        },
        "event_start": 1985,
        "event_end": 1999
    },
    {
        "title": "The Money Masters",
        "description": "Monetary power history",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1913,
        "event_end": 1996
    },
    {
        "title": "All Watched Over by Machines of Loving Grace",
        "description": "Tech utopia critique",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1960,
        "event_end": 2011
    },
    {
        "title": "The Story of Film: An Odyssey",
        "description": "Film history series",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1895,
        "event_end": 2010
    },
    {
        "title": "Tales from the Script",
        "description": "Screenwriting insight",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2000,
        "event_end": 2015
    },
    {
        "title": "Capturing Reality: The Art of Documentary",
        "description": "Documentary theory film",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1920,
        "event_end": 2017
    },
    {
        "title": "For the Love of Movies: The Story of American Film Criticism",
        "description": "Criticism history",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1920,
        "event_end": 2009
    },
    {
        "title": "Martin Scorsese Presents: The Saints",
        "description": "Music history docuseries",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1960,
        "event_end": 2020
    },
    {
        "title": "The Forever Prisoner",
        "description": "Terror detainee portrait",
        "location": {
            "lat": 19.32,
            "lng": -75.17
        },
        "event_start": 2002,
        "event_end": 2021
    },
    {
        "title": "In Search of Memory",
        "description": "Oliver Sacks memoir-based doc",
        "location": {
            "lat": 52.52,
            "lng": 13.405
        },
        "event_start": 1960,
        "event_end": 2006
    },
    {
        "title": "Crazy, Not Insane",
        "description": "Forensic psychiatry cases",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1960,
        "event_end": 2010
    },
    {
        "title": "Citizen K",
        "description": "Power shift in post-Soviet Russia",
        "location": {
            "lat": 55.7558,
            "lng": 37.6173
        },
        "event_start": 1991,
        "event_end": 2018
    },
    {
        "title": "No Stone Unturned",
        "description": "Investigation into a murder",
        "location": {
            "lat": 54.5973,
            "lng": -5.9301
        },
        "event_start": 1998,
        "event_end": 2016
    },
    {
        "title": "Park Avenue: Money, Power and the American Dream",
        "description": "Wealth inequality exposé",
        "location": {
            "lat": 40.7712,
            "lng": -73.964
        },
        "event_start": 2000,
        "event_end": 2012
    },
    {
        "title": "The Civil War",
        "description": "Ken Burns' epic on US Civil War",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1861,
        "event_end": 1865
    },
    {
        "title": "Grant",
        "description": "Ulysses S. Grant biography",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1869,
        "event_end": 1877
    },
    {
        "title": "Common Ground",
        "description": "Race and land reform",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1995,
        "event_end": 2000
    },
    {
        "title": "Rams",
        "description": "Designer Dieter Rams portrait",
        "location": {
            "lat": 49.4875,
            "lng": 8.466
        },
        "event_start": 1896,
        "event_end": 2015
    },
    {
        "title": "How to Change Your Mind",
        "description": "Psychedelics revival",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1950,
        "event_end": 2020
    },
    {
        "title": "Kitty Hawk: The Wright Brothers' Journey of Invention",
        "description": "Wright Brothers biopic doc",
        "location": {
            "lat": 36.0646,
            "lng": -75.7056
        },
        "event_start": 1900,
        "event_end": 1903
    },
    {
        "title": "Deep Water",
        "description": "Sailing survival real-life drama",
        "location": {
            "lat": 41.3851,
            "lng": -8.2195
        },
        "event_start": 1968,
        "event_end": 1969
    },
    {
        "title": "Kon‑Tiki",
        "description": "Thor Heyerdahl’s raft expedition",
        "location": {
            "lat": -13.7969,
            "lng": -151.2073
        },
        "event_start": 1947,
        "event_end": 1950
    },
    {
        "title": "The King of Kong: A Fistful of Quarters",
        "description": "Classic arcade rivalry",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1980,
        "event_end": 2006
    },
    {
        "title": "Mr. Death: The Rise and Fall of Fred A. Leuchter, Jr.",
        "description": "Execution technician scandal",
        "location": {
            "lat": 42.3584,
            "lng": -71.0598
        },
        "event_start": 1988,
        "event_end": 1999
    },
    {
        "title": "Helvetica",
        "description": "Typeface cultural impact",
        "location": {
            "lat": 47.3769,
            "lng": 8.5417
        },
        "event_start": 1957,
        "event_end": 2007
    },
    {
        "title": "After Tiller",
        "description": "Abortion provider profiles",
        "location": {
            "lat": 39.7392,
            "lng": -104.9903
        },
        "event_start": 2009,
        "event_end": 2013
    },
    {
        "title": "Cosmos: A Spacetime Odyssey",
        "description": "Science education series",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": -6000000000,
        "event_end": 2013
    },
    {
        "title": "The Internet's Own Boy: The Story of Aaron Swartz",
        "description": "Tech activist biography",
        "location": {
            "lat": 42.3601,
            "lng": -71.0589
        },
        "event_start": 2008,
        "event_end": 2013
    },
    {
        "title": "Evolution's Achilles' Heels",
        "description": "Evolutionary biology debate",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1859,
        "event_end": 2018
    },
    {
        "title": "An Honest Liar",
        "description": "Magician James Randi exposé",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1970,
        "event_end": 2014
    },
    {
        "title": "Making a Murderer",
        "description": "Documentary series on wrongful conviction",
        "location": {
            "lat": 43.7844,
            "lng": -88.7879
        },
        "event_start": 1985,
        "event_end": 2007
    },
    {
        "title": "Planet Earth",
        "description": "Nature documentary series",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": -6000000000,
        "event_end": 2005
    },
    {
        "title": "Crossing the Line",
        "description": "Defection across border doc",
        "location": {
            "lat": 39.0392,
            "lng": 125.7625
        },
        "event_start": 2004,
        "event_end": 2006
    },
    {
        "title": "Cropsey",
        "description": "Urban legend & murder investigation",
        "location": {
            "lat": 40.5795,
            "lng": -74.1502
        },
        "event_start": 1970,
        "event_end": 1980
    },
    {
        "title": "Human Zoos",
        "description": "Exhibited humans in ethnological displays",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "event_start": 1800,
        "event_end": 1930
    },
    {
        "title": "The Inventor: Out for Blood in Silicon Valley",
        "description": "Theranos scandal exposé",
        "location": {
            "lat": 37.3382,
            "lng": -121.8863
        },
        "event_start": 2013,
        "event_end": 2018
    },
    {
        "title": "Game Over",
        "description": "Video game culture doc",
        "location": {
            "lat": 0,
            "lng": 0
        },
        "event_start": 1970,
        "event_end": 2003
    },
    {
        "title": "Trillion Dollar Bet",
        "description": "Financial gamble case study",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1997,
        "event_end": 2000
    },
    {
        "title": "All the Rage",
        "description": "Gun control and activism doc",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1930,
        "event_end": 1990
    },
    {
        "title": "Hearts of Darkness: A Filmmaker's Apocalypse",
        "description": "Making of Apocalypse Now",
        "location": {
            "lat": 14.5995,
            "lng": 120.9842
        },
        "event_start": 1976,
        "event_end": 1979
    },
    {
        "title": "The Century of the Self",
        "description": "Psychoanalysis & consumerism",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1920,
        "event_end": 2000
    },
    {
        "title": "Sour Grapes",
        "description": "Wine auction fraud",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1990,
        "event_end": 2000
    },
    {
        "title": "Liberated: The New Sexual Revolution",
        "description": "Modern sex culture",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 2010,
        "event_end": 2022
    },
    {
        "title": "Capturing the Friedmans",
        "description": "Family & criminal scandal",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1987,
        "event_end": 1989
    },
    {
        "title": "Heaven's Gate: The Cult of Cults",
        "description": "Heaven's Gate cult account",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1980,
        "event_end": 1997
    },
    {
        "title": "The Flaw",
        "description": "Financial crisis analysis",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2007,
        "event_end": 2009
    },
    {
        "title": "What We Started",
        "description": "Electronic dance music history",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1980,
        "event_end": 2016
    },
    {
        "title": "Hemingway",
        "description": "Biography of Ernest Hemingway",
        "location": {
            "lat": 40.7306,
            "lng": -73.9352
        },
        "event_start": 1899,
        "event_end": 1961
    },
    {
        "title": "Rewind",
        "description": "a young man reconstructs the unthinkable story of his boyhood",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1980,
        "event_end": 2010
    },
    {
        "title": "Mysteries of Mental Illness",
        "description": "Exploration of mental health history",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1900,
        "event_end": 2023
    },
    {
        "title": "Money for Nothing: Inside the Federal Reserve",
        "description": "Documentary on the Fed’s role",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 1913,
        "event_end": 2013
    },
    {
        "title": "Four Horsemen",
        "description": "Economic crisis critique",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 2008,
        "event_end": 2012
    },
    {
        "title": "The Pixar Story",
        "description": "Rise of Pixar",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "event_start": 1979,
        "event_end": 2006
    },
    {
        "title": "The Last Blockbuster",
        "description": "Story of final video store",
        "location": {
            "lat": 47.6062,
            "lng": -122.3321
        },
        "event_start": 1985,
        "event_end": 2019
    },
    {
        "title": "Beanie Mania",
        "description": "Beanie Babies craze",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 1993,
        "event_end": 2019
    },
    {
        "title": "The Tinder Swindler",
        "description": "Online romance scam exposé",
        "location": {
            "lat": 31.7683,
            "lng": 35.2137
        },
        "event_start": 2017,
        "event_end": 2022
    },
    {
        "title": "Can't Get You Out of My Head",
        "description": "Pop culture documentary",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1979,
        "event_end": 2021
    },
    {
        "title": "The Vietnam War",
        "description": "In-depth Vietnam War history",
        "location": {
            "lat": 14.0583,
            "lng": 108.2772
        },
        "event_start": 1955,
        "event_end": 1975
    },
    {
        "title": "Perfect Bid: The Contestant Who Knew Too Much",
        "description": "Game show betting scandal",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1986,
        "event_end": 2020
    },
    {
        "title": "TFW NO GF",
        "description": "Internet subculture deep dive",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2010,
        "event_end": 2023
    },
    {
        "title": "Eat the Rich: The GameStop Saga",
        "description": "Retail investor revolt analysis",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2020,
        "event_end": 2021
    },
    {
        "title": "God Forbid",
        "description": "Religion in modern America",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2018
    },
    {
        "title": "Masters of Money",
        "description": "History of currency management",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "event_start": 1920,
        "event_end": 2014
    },
    {
        "title": "Man in the Arena",
        "description": "Trump TV inside look",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2000,
        "event_end": 2021
    },
    {
        "title": "Skandal! Bringing Down Wirecard",
        "description": "Wirecard fraud investigation",
        "location": {
            "lat": 52.52,
            "lng": 13.405
        },
        "event_start": 2015,
        "event_end": 2020
    },
    {
        "title": "I'll Be Gone in the Dark",
        "description": "Golden State Killer case story",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "event_start": 1976,
        "event_end": 2002
    },
    {
        "title": "Glitch: The Rise & Fall of HQ Trivia",
        "description": "Mobile gaming boom & bust",
        "location": {
            "lat": 40.7128,
            "lng": -74.006
        },
        "event_start": 2017,
        "event_end": 2020
    },
    {
        "title": "Q: Into the Storm",
        "description": "QAnon origins investigation",
        "location": {
            "lat": 38.9072,
            "lng": -77.0369
        },
        "event_start": 2016,
        "event_end": 2021
    },
    {
        "title": "Manufacturing Consent: Noam Chomsky and the Media",
        "description": "Media criticism by Chomsky",
        "location": {
            "lat": 42.3601,
            "lng": -71.0589
        },
        "event_start": 1988,
        "event_end": 1992
    },
    {
        "title": "Requiem for the American Dream",
        "description": "Noam Chomsky on inequality",
        "location": {
            "lat": 40.7306,
            "lng": -73.9352
        },
        "event_start": 1945,
        "event_end": 2015
    },
    {
        "title": "The Act of Killing",
        "description": "Portrait of death squads",
        "location": {
            "lat": -6.1751,
            "lng": 106.865
        },
        "event_start": 1965,
        "event_end": 1966
    },
    {
        "title": "The Look of Silence",
        "description": "Aftermath through a brother’s eyes",
        "location": {
            "lat": -6.1751,
            "lng": 106.865
        },
        "event_start": 1965,
        "event_end": 1966
    }
]