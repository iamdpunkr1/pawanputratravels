
interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}


interface Itinerary {
  title: string;
  duration: string;
  itineraryCode: string;
  gForm:string;
  days: ItineraryDay[];
}

const itinerary:Itinerary[] = [
    {
        title: "Bomdila(1N), Tawang(2N), Dirang(1N), Kohima(3N)",
        duration: "(7N/8D)",
        itineraryCode: "5",
        gForm:"https://forms.gle/nWMdgnt7sXLePRWC8",
        days: [
          {
            day: 1,
            title: "Guwahati - Bomdila",
            description: "Early morning proceed towards Bomdila. On the way visit Mahamrityunjay temple. Places to see will include: Tipi Orchidendron, Sessa, Nag Mandir, Tenga Valley, Tenga Haat. Overnight at Bomdila."
          },
          {
            day: 2,
            title: "Bomdila - Tawang",
            description: "Today proceed towards Tawang via Sela Pass (14000ft). Sightseeing today includes: Sela Pass, Sela Lake, Jaswant Garh, Nuranang Falls. Overnight stay at Tawang."
          },
          {
            day: 3,
            title: "Tawang Sightseeing",
            description: "After breakfast start on the day-long tour of Bumla. Please note that a separate vehicle has to be taken for the tour today as the Indian government only allows local vehicles to visit the Bumla sector. Sightseeing includes: Bumla Pass, India-China border, Madhuri Lake, PT Tso Lake, etc. Return to Tawang and after lunch, go on a local tour of Tawang. Tawang (8800ft) is a mountainous town known for the Tawang Monastery, the second largest after the Potala Palace, Tibet. Visit Tawang Monastery, Giant Buddha statue, War Memorial, Light Show in the evening, Local Market, etc. Overnight stay at Tawang."
          },
          {
            day: 4,
            title: "Tawang - Dirang",
            description: "Today after breakfast start the journey back to Dirang. On the way, visit remaining sightseeing spots and halt at several viewpoints. Overnight at Dirang."
          },
          {
            day: 5,
            title: "Dirang - Kohima",
            description: "Dirang to Kohima via Kaziranga. On the way, visit several viewpoints near Kaziranga for sighting of One-horned rhinos. Drive to Dimapur first via Nambor Jungle. Dimapur to Kohima. Overnight at Kohima."
          },
          {
            day: 6,
            title: "Kohima - Khonoma",
            description: "Today after breakfast start on a local tour of Kohima. Visit: War Cemetery, Local Market, Baptist Church, Hornbill Festival. Later in the afternoon, visit Khonoma, India’s first green village. Here hire a guide to explore the unique traditions of Nagaland. Overnight at Kohima."
          },
          {
            day: 7,
            title: "Kohima Sightseeing",
            description: "Today start the day a little relaxed. Enjoy the Hornbill Festival at both venues: Kohima and Kisama. It’s the stone-pulling ceremony today. Enjoy cultural shows and music performances. Overnight at Kohima."
          },
          {
            day: 8,
            title: "Kohima - Dimapur Airport",
            description: "Today after breakfast start the journey towards Dimapur. Trip ends with a drop at Dimapur airport. Trip ends!!!"
          }
        ]
      },
      {
        title:"hfhjgfj",
        duration:"(5N/6D)",
        itineraryCode:"67",
        gForm:"https://forms.gle/3p1bBZf8mD1yK5zQ9",
        days:[
          {
            day:1,
            title:"gdgf",
            description:"gdfg"
          }
        ]
      },
    {
    title: "Udaipur(2N), Jaisalmer(2N), Jodhpur(1N)",
    duration: "(5N/6D)",
    itineraryCode: "22",
    gForm:"https://forms.gle/sBweEXoZz4tw8CbN9",
    days: [
      {
        day: 1,
        title: "Arrive Udaipur",
        description: "On arrival at Udaipur Railway station/ airport and transferred to the hotel. Overnight stay at the hotel."
      },
      {
        day: 2,
        title: "Udaipur Sightseeing",
        description: "After breakfast sight-seeing of Udaipur and visit Sajjangarh at 10am. Depart Sajjangarh at 12pm, Fatehsagar lake, Sahelion ki bari, Moti Magri 12:30 pm to 2 pm. 2-3 pm lunch. 3pm - 6pm: Pichhola lake, City palace, Gulab bagh. 7-8pm: Cultural show at Bagore ki haveli. (Omit Jagdish temple and Bharitya lok kala mandal). Overnight stay at hotel."
      },
      {
        day: 3,
        title: "Udaipur - Jaisalmer",
        description: "After breakfast, proceed to Jaisalmer. On arrival Jaisalmer transferred to the hotel. Overnight stay at the hotel."
      },
      {
        day: 4,
        title: "Jaisalmer Sightseeing",
        description: "After breakfast, take a sightseeing tour of Jaisalmer covering Sonar Fort, Patwon Ki Haweli & Gadisar Lake etc. Further visit the most important attraction of Jaisalmer, Sand Dunes. Enjoy a camel ride. Overnight stay at camp."
      },
      {
        day: 5,
        title: "Jaisalmer - Jodhpur",
        description: "After breakfast, proceed to Jodhpur. On arrival Jodhpur visit, Toorji Stepwell, Mehrangarh Fort, situated on a low sandstone Hill, including Moti Mahal and Phool Mahal. Also visit Jaswant Thada, an imposing Marble Memoriam built in 1899. Overnight stay at the hotel."
      },
      {
        day: 6,
        title: "Depart Jodhpur",
        description: "After breakfast drop at Jodhpur airport/railway station for your onward journey."
      }
    ],
    },
    {
        title: "Bhalukpong(1N), Dirang(1N), Tawang(3N), Bomdila(1N)",
        duration: "(6N/7D)",
        itineraryCode: "4",
        gForm:"https://forms.gle/7CURYdnFAoEAeuiJA",
        days: [
          {
            day: 1,
            title: "Guwahati - Bhalukpong",
            description: `Arrival at Guwahati and proceed towards Bhalukpong. 
      On the way visit Mahamrityunjaya temple. This temple has the world's largest Shivalinga.
      Later proceed towards Bhalukpong.
      Visit Nameri National Park on your own.
      Overnight stay at Bhalukpong.`
          },
          {
            day: 2,
            title: "Bhalukpong - Dirang",
            description: `Today start journey towards Sangti.
      At Dirang, places to see will include:-
      - Tipi Orchidendron
      - Dirang Monastery
      - Sessa
      Overnight stay at Dirang.`
          },
          {
            day: 3,
            title: "Dirang - Tawang",
            description: `Today proceed towards Tawang via Sela pass (14000ft). 
      Sightseeing today includes:-
      - Sela Pass
      - Sela Lake
      - Jaswant Garh
      - Nuranang Falls 
      Overnight stay at Tawang.`
          },
          {
            day: 4,
            title: "Tawang Sightseeing",
            description: `Today do a local tour of Tawang. Tawang (8800ft) is a mountainous town known for the Tawang Monastery, the second largest after the Potala Palace, Tibet.
      Visit Tawang Monastery
      - Giant Buddha statue
      - Light show in the evening
      - Local market 
      - Get the permit ready for next day's Bumla tour. 
      Overnight stay at Tawang.`
          },
          {
            day: 5,
            title: "Bumla Pass, PITSO Lake, Madhuri Lake",
            description: `After breakfast start on the day-long tour of Bumla. Please note that a separate vehicle has to be taken for the tour today as the Indian government only allows local vehicles to visit the Bumla sector. 
      Sightseeing includes:-
      - Bumla Pass
      - India-China border
      - Madhuri Lake
      - PT Tso Lake 
      Overnight stay at Tawang.
      - Separate vehicle required.`
          },
          {
            day: 6,
            title: "Tawang - Bomdila",
            description: `Today proceed towards Bomdila.
      - Nag Mandir 
      - Tenga Valley
      - Tenga Haat
      Overnight stay at Bomdila.`
          },
          {
            day: 7,
            title: "Bomdila - Guwahati",
            description: `Today after breakfast, back to Guwahati.
      On the final day of your trip, you'll travel back to Guwahati via Kalaktang, a small town located in the West Kameng district of Arunachal Pradesh. 
      You can stop at the beautiful Pemaling, the birthplace of the famous Buddhist saint Pema Lingpa, before reaching Guwahati. Here Gyuto Monastery is located amongst the Tibetan settlements. 
      Tour ends with a drop at Guwahati airport/railway station.
      Trip ends..!!!`
          }
        ]
    },
    {
        title: "Kaziranga(1N), Majuli(2N), Tinsukia(1N), Golden Pagoda(1N), Dibrusaikhowa(1N), Dibrugarh(2N)",
        duration: "(8N/9D)",
        itineraryCode: "12",
        gForm:"https://forms.gle/P1ft4j4bYN8WU1BV8",
        days: [
          {
            day: 1,
            title: "Guwahati - Kaziranga",
            description: `Arrive at Guwahati proceed towards Kaziranga.
      On the way visit Mahamrityunjay temple.
      - Do Jeep Safari.
      - Visit Orchid Park.
      Dinner at Pelican/Orchid Park Assamese local cuisine.
      Overnight stay at Kaziranga.`
          },
          {
            day: 2,
            title: "Kaziranga - Majuli",
            description: `Arrive at Guwahati proceed towards Kaziranga.
      On the way visit Mahamrityunjay temple.
      - Do Jeep Safari.
      - Visit Orchid Park.
      Dinner at Pelican/Orchid Park Assamese local cuisine.
      Overnight stay at Kaziranga.`
          },
          {
            day: 3,
            title: "Majuli Sightseeing",
            description: `Morning start a day tour in Majuli. 
      - Auniati Satra 
      - Dakhinpat Satra
      - Garmur Satra
      - Kamalabari Satra
      - Uttar Kamalabari Satra
      Overnight stay at Majuli.`
          },
          {
            day: 4,
            title: "Majuli - Dibrugarh via Dhemaji",
            description: `On the way Habung Ahom 1st capital.
      On the way Bogibeel Bridge - Bhupen Hazarika Setu.
      - Kanchanjangha Floating Resturant.
      Overnight stay at Dibrugarh.`
          },
          {
            day: 5,
            title: "Dibrugarh - Tinsukia",
            description: `Dibrugarh local sightseeing:
      - Dehing Pataki National Park
      - Jokai Botanical Garden
      - Naharkatiya Namphake village
      On the way Tinsukia Tilinga Mandir.
      Overnight stay at Tinsukia.`
          },
          {
            day: 6,
            title: "Tinsukia - Parshuram Kund Namsai",
            description: `Early morning start your journey towards Parshuram Kund.
      - Parshuram Kund
      - Golden Pagoda
      Overnight stay at Golden Pagoda.`
          },
          {
            day: 7,
            title: "Namsai - Tinsukia",
            description: `On the way Dhola Sadiya Bridge.
      - Dibru Saikhowa National Park.
      - Do one round tour in boat.
      Overnight stay at Dibrusaikhowa.`
          },
          {
            day: 8,
            title: "Dibrusaikhowa - Dibrugarh",
            description: `After breakfast do visit:
      - Maguri Beel
      - Guijan
      Later proceed towards Dibrugarh.
      Overnight stay at Dibrugarh.`
          },
          {
            day: 9,
            title: "Departure",
            description: `- Morning Jaganatha Temple.
      After breakfast drop at Mohonbari Airport Dibrugarh.
      Trip ends!!`
          }
        ]
    },
    {
      title: "Kaziranga(1N), Sibsagar(1N), Dibrugarh(1N), Roing(2N), Anini(2N)",
      duration: "(7N/8D)",
      itineraryCode: "11",
      gForm:"https://forms.gle/DUqBE9N2KgfGy5Ge8",
      days: [
        {
          day: 1,
          title: "Guwahati - Kaziranga",
          description: `Arrival at Guwahati airport/railway station and start your journey towards Kaziranga.
    On the way visit Mahamritunjay temple.
    After reaching Kaziranga do Jeep Safari.
    Evening enjoy cultural show at Orchid Park.
    Overnight stay at Kaziranga.`
        },
        {
          day: 2,
          title: "Kaziranga - Sibsagar",
          description: `Early morning do elephant Safari.
    After breakfast proceed to Sibsagarh.
    After reaching Sibsagar visit Rudra Singha park, evening enjoy Tai Ahom cultural show.
    Overnight stay at Sibsagar.`
        },
        {
          day: 3,
          title: "Sibsagar - Dibrugarh",
          description: `Early morning visit Shiv Dol, which was constructed by Ambika Kunwari Ahom Queen of Swargadeo Siva Singha.
    Later visit Sivsagar Tank.
    After breakfast do some sightseeing at Sibsagarh:
    - Devi Dol
    - Rang Ghar 
    - Talatal Ghar
    - Kareng Ghar
    - Assam Tai Museum
    Later proceed towards Dibrugarh.
    On the way after reaching Dibrugarh town visit Jaganath temple.
    Overnight stay at Dibrugarh.`
        },
        {
          day: 4,
          title: "Dibrugarh - Roing",
          description: `After breakfast proceed towards Roing.
    On the way pass through Assam's longest river bridge Bhupen Hazarika bridge (Dhola Sadiya Bridge).
    Also enjoy Roing's scenic beauty.
    Overnight stay at Roing.`
        },
        {
          day: 5,
          title: "Roing - Anini",
          description: `Morning start your journey towards Anini.
    On the way enjoy the scenic beauty of Upper Dibang Valley with different waterfalls.
    Overnight stay at Anini.`
        },
        {
          day: 6,
          title: "Anini Local Sightseeing",
          description: `Morning explore the peaceful natural beauty of Anini.
    After that start your trekking at Emuli Grassland which takes around 4 hours - Take a village tour guide.
    Visit Anini viewpoint.
    Explore the scenic view of Mishmi Hills.
    Explore the scenic beauty of Dibang Valley like:
    - Aeyo Valley 
    - Fourth Lake Aeyo
    - Chigu Wooden Bridge
    - Mathu Valley - Grassland
    Also visit different waterfalls like Aeyo Waterfall and Pomo Waterfall, & several viewpoints.
    Overnight stay at Anini.`
        },
        {
          day: 7,
          title: "Dibang Valley - Roing",
          description: `Morning start your journey towards Roing.
    On the way explore several waterfalls like Chigu Falls, viewpoints, and Stones River, where crystal clear water mesmerizes the viewers.
    Overnight stay at Roing.`
        },
        {
          day: 8,
          title: "Roing - Dibrugarh",
          description: `Morning start your journey towards Dibrugarh.
    On the way visit Golden Pagoda at Namsai.
    Later proceed towards Dibrugarh.
    Drop at Dibrugarh railway station/airport.
    Trip ends!!`
        }
      ]
    },
    {
      title: "Baghmara(2N), Shillong(1N), Jowai(1N), Shnongpdeng(1N), Cherrapunjee(1N), Guwahati(2N), Kaziranga(2N)",
      duration: "(10N/11D)",
      itineraryCode: "2",
      gForm:"https://forms.gle/DUNZjVhko2zPSdH36",
      days: [
        {
          day: 1,
          title: "Guwahati - Baghmara VIA Simsang River",
          description: `After arrival proceed towards Baghmara.
    Overnight stay at Baghmara.`
        },
        {
          day: 2,
          title: "Baghmara - Wari Chora",
          description: `After breakfast proceed towards:
    - Jadesil fish sanctuary
    - Drive to Wari Chora enjoy boating
    - Visit Aginma Wari fish sanctuary
    Overnight stay at Baghmara.`
        },
        {
          day: 3,
          title: "Baghmara - Shillong",
          description: `After breakfast proceed towards Shillong.
    - Evening visit police bazaar
    Overnight stay at Shillong.`
        },
        {
          day: 4,
          title: "Shillong - Krangsuri, Phe Phe Falls",
          description: `Today early morning proceed towards Laitlum Canyon.
    - Visit Phe Phe falls
    - Visit Tyrshi falls
    Overnight stay at Jowai.`
        },
        {
          day: 5,
          title: "Jowai",
          description: `After breakfast visit:
    - Krangshuri falls, also called the Niagara of Northeast. Experience the majestic waterfall and don't forget to carry extra clothes so as to take a splash in the waters of Krangshuri.
    - Afternoon proceed towards Dawki
    - Do boating at Umangot River
    Overnight stay at Shnongpdeng (campsite).`
        },
        {
          day: 6,
          title: "Dawki - Mawlynnong",
          description: `Early morning proceed towards Dawki Mawlynnong, Asia's cleanest village.
    - Visit Living root bridge
    - Visit Balancing rock
    - Do Mawryngkhang bamboo trek
    Overnight stay at Cherrapunjee.`
        },
        {
          day: 7,
          title: "Double Decker & Cherrapunjee Local Sightseeing",
          description: `Today after breakfast proceed to trek to Double Decker root bridge:
    - Double decker trek
    - Local sightseeing at Cherrapunjee (if time permits)
    - Visit Seven Sister falls
    - Visit Nohkalikai falls
    - Visit Arwa and Mawsmai cave
    - Visit Garden of Caves
    Back to Guwahati
    Overnight stay at Guwahati.`
        },
        {
          day: 8,
          title: "Guwahati - Kaziranga",
          description: `Early morning proceed towards Kaziranga.
    - On the way halt at Mawdok viewpoint. Here, you can do Zip line.
    - Visit Mahamritunjay temple, Nagaon
    - Dinner at Pelican Dhaba (Assamese local cuisine)
    Overnight stay at Kaziranga.`
        },
        {
          day: 9,
          title: "Kaziranga Local Sightseeing",
          description: `Early morning do Elephant safari.
    - After breakfast do Jeep safari
    - Visit Orchid Park and enjoy cultural show
    Overnight stay at Kaziranga.`
        },
        {
          day: 10,
          title: "Kaziranga - Guwahati",
          description: `After breakfast proceed towards Guwahati.
    Do some local sightseeing at Guwahati:
    - Assam State Museum
    - Srimanta Sankaradeva Kalakshetra
    - Brahmaputra Heritage Centre
    - Brahmaputra river cruise
    Overnight stay at Guwahati.`
        },
        {
          day: 11,
          title: "Guwahati & Departure",
          description: `Early morning visit Kamakhya temple.
    Later visit:
    - Umananda temple (smallest river island)
    - Guwahati ropeway
    - Basiatha temple
    - Balaji temple
    Overnight stay at Guwahati
    
    Trip ends!!!`
        }
      ]
    },
    {
      title: "Shillong(2N), Mawlynnong(1N), Cherrapunjee(2N)",
      duration: "(5N/6D)",
      itineraryCode: "1",
      gForm:"https://forms.gle/8kyrfxFa9dMFrtx28",
      days: [
        {
          day: 1,
          title: "Guwahati - Shillong",
          description: `Early morning start your journey towards Shillong. After reaching do local sightseeing at Shillong. These include: 
    - Cathedral
    - Don Bosco Museum
    - Golf Link
    - Wards Lake
    - Shillong Peak
    - Elephant Falls
    - Airforce Museum
    - In the evening explore Police Bazar.
    Overnight stay at Shillong.`
        },
        {
          day: 2,
          title: "Shillong - Krangsuri Phe Phe Falls",
          description: `Today after breakfast, start journey towards Krangshuri Falls, also called the Niagara of Northeast. Experience the majestic waterfall and don't forget to carry extra clothes to take a splash in the waters of Krangshuri.
    - Later visit Phe Phe Falls 
    - Visit Laitlum Canyon.
    Overnight stay at Shillong.`
        },
        {
          day: 3,
          title: "Shillong - Dawki Mawlynnong",
          description: `After breakfast proceed towards Dawki. Here visit: 
    - Indo-Bangla Border
    - Enjoy boating at the breathtakingly beautiful Umgnot River, where crystal clear water mesmerizes the viewers.
    - Dawki Market.
    Later after lunch proceed towards visit Mawlynnong. Here you can explore:
    - Living Root Bridge
    - Balancing Rock
    - Sky Walk
    - Take a village guided tour.
    - Explore local cuisine.
    Overnight stay at Mawlynnong.`
        },
        {
          day: 4,
          title: "Cherrapunjee Local Sightseeing",
          description: `After breakfast do Cherrapunjee local sightseeing like:
    - Seven Sister Falls
    - Nohkalikai Falls
    - Mawsmai Cave
    - Arwa Cave 
    - Eco Park
    - Wah Kaba Falls
    - Kynrem Falls
    - Garden of Caves
    Overnight stay at Cherrapunjee.`
        },
        {
          day: 5,
          title: "Trek to Double Decker Living Root Bridge and Rainbow Falls",
          description: `Morning start your trek towards Double Decker Living Root Bridge. Visit Rainbow Falls.
    Overnight stay at Cherrapunjee.`
        },
        {
          day: 6,
          title: "Cherrapunjee - Guwahati",
          description: `After breakfast complete all the sightseeing if left any. 
    Later proceed towards Guwahati.
    On the way halt at Mawdok View Point and do zipline there.
    Drop at Guwahati airport/railway station.
    Trip end!!`
        }
      ]
    },
    {
      title: "Aizawl(3N), Champhai(1N), Aizawl(1N)",
      duration: "(5N/6D)",
      itineraryCode: "7",
      gForm:"https://forms.gle/1mKBjb8F35tKymA99",
      days: [
        {
          day: 1,
          title: "Arrival in Aizawl",
          description: `Arrive at Lengpui Airport in Aizawl.
    Check-in to your hotel and rest.
    In the evening, explore local markets and enjoy Mizoram cuisine.
    Overnight stay at Aizawl.`
        },
        {
          day: 2,
          title: "Reiek Mountain",
          description: `Drive to Reiek Mountain, famous for trekking.
    Enjoy a trek to the summit for panoramic views.
    Return to Aizawl in the evening.`
        },
        {
          day: 3,
          title: "Aizawl - Hmuiphang and back to Aizawl",
          description: `Drive to Hmuiphang, a serene village.
    Explore the local culture, visit the Murlen National Park.`
        },
        {
          day: 4,
          title: "Aizawl - TAM DIL - RIH DIL - Champhai",
          description: `Visit TAM DIL, a stunning high-altitude lake.
    Later proceed towards RIH DIL (Myanmar Border) (Hire a local cab there as Indian vehicles are not allowed).
    Later back to Champhai.
    Overnight stay at Champhai.`
        },
        {
          day: 5,
          title: "Champhai - Aizawl",
          description: `Today after breakfast, proceed towards Aizawl and do local sightseeing like:
    Visit the beautiful Aizawl Cathedral.
    Explore the State Museum and learn about Mizoram's culture.
    Stroll through Solomon's Temple for panoramic views of Aizawl.
    Overnight stay at Aizawl.`
        },
        {
          day: 6,
          title: "Departure",
          description: `Check out from your hotel in Aizawl.
    If time allows, explore any missed spots or go souvenir shopping.
    Depart from Lengpui Airport for your onward journey.`
        }
      ]
    },
    {
      title: "Kohima(3N), Imphal(3N), Aizawl(3N)",
      duration: "(9N/10D)",
      itineraryCode: "8",
      gForm:"https://forms.gle/Wzyf9NaQZxfGUmHy8",
      days: [
        {
          day: 1,
          title: "Guwahati - Kohima",
          description: `Arrival at Guwahati airport and proceed towards Kohima. After reaching check in at the hotel and relax. Overnight stay at Kohima.`
        },
        {
          day: 2,
          title: "Kohima Sightseeing",
          description: `Today after breakfast, do Kohima local, visit the market and the war cemetery, Hornbill festival site and heritage village and head for Khonoma. Khonoma is a heritage village and the history will shock you beyond ways you can imagine. Overnight at Kohima.`
        },
        {
          day: 3,
          title: "Dzukou Valley Trek",
          description: `Early in the morning start your trek for Dzukou. Experience the majestic trek to Dzukou. This place in northeast is probably the most visited place by foreigners due to its unreal beauty. Dzukou is famous for its unique Dzukou lily. Experience the valley and return in the evening and stay at Kohima. There are 2 prime routes to the valley called Jakhama and Viswema. Take the Viswema route as it is a lot easier.`
        },
        {
          day: 4,
          title: "Kohima - Imphal",
          description: `After breakfast proceed towards Imphal. Later after reaching Imphal visit Loktak lake, take a boat ride and stay there. Enjoy your own leisure. Overnight stay at a cottage on a floating island at Loktak lake.`
        },
        {
          day: 5,
          title: "Imphal - Moreh",
          description: `Today early in the morning start the journey to the India-Myanmar border. The town on the Indian side is called Moreh and on the Myanmar side is called Tamu. You can get a feel of Burmese culture by visiting the market here. You can shop for Myanmar products here. In the evening, return to Imphal and stay.`
        },
        {
          day: 6,
          title: "Imphal Local Sightseeing",
          description: `Today do Imphal local sightseeing, you can visit Thanga, Kangla fort, Ima Market (Women's market), Imphal war cemetery, INA Museum, ISKCON temple, etc. Overnight at Imphal.`
        },
        {
          day: 7,
          title: "Imphal - Aizawl",
          description: `After breakfast, start an exciting journey towards Mizoram. Although long, this day promises a lot of adventure. Overnight stay at Aizawl.`
        },
        {
          day: 8,
          title: "Aizawl Local Sightseeing",
          description: `Today after breakfast do the Aizawl local sightseeing, visit Salomon temple, KV Paradise, ATC view point, Hangi Lungleng Tlang Aizawl view point, and State Museum Zarkawt. Overnight stay at Aizawl.`
        },
        {
          day: 9,
          title: "Aizawl Local Sightseeing",
          description: `Today after breakfast proceed towards the sightseeing tour of Mizo Village and Reiek Mountain. Return to your hotel and overnight stay.`
        },
        {
          day: 10,
          title: "Departure",
          description: `Today after breakfast proceed towards Aizawl airport. Trip end !!!`
        }
      ]
    },
    {
      title: "Gangtok(4N), Lachen(1N), Lachung(1N), Pelling(1N)",
      duration: "(7N/8D)",
      itineraryCode: "18",
      gForm:"https://forms.gle/ZhHe8Qa8f8JVQvJ87",
      days: [
        {
          day: 1,
          title: "NJP/Bagdogra - Gangtok",
          description: `Arrival at Njp/Bagdogra airport and proceed towards Gangtok. 
    - Check in at the hotel.
    - You can visit MG Marg on your own.
    Overnight at Gangtok.`
        },
        {
          day: 2,
          title: "Gangtok Local Sightseeing",
          description: `Today do Gangtok local sightseeing like:-
    - Banjakri waterfalls
    - Hanuman tok
    - Tashi view point
    - Gangtok ropeway
    - Ganesh tok 
    - Evening visit MG Marg on your own.
    Overnight at Gangtok.`
        },
        {
          day: 3,
          title: "Tsomgo Lake, Nathula & BABA Mandir",
          description: `Today after breakfast start on a day long journey to Nathula pass. Sightseeing 
    - Tsomgo lake
    - Baba Harbhajan Mandir
    - Nathula 
    Overnight stay at Gangtok.`
        },
        {
          day: 4,
          title: "Gangtok - Lachen",
          description: `Today after breakfast drive from Gangtok to Lachen. 
    - Reach late afternoon. 
    - Check into the hotel. 
    - Stroll around the Lepcha village and explore the local lifestyle.
    - Lachen is also considered a pilgrimage place, hidden in the lap of mountains, for the Buddhists.
    - Lachen is considered the initial point of all treks.
    Dinner and overnight stay at Lachen.`
        },
        {
          day: 5,
          title: "Lachen - Lachung",
          description: `Early morning drive from Lachen to Gurundongmar lake, a freshwater lake, via Chota valley, Thangu Village. 
    - Later proceed towards Lachung, an area covered with green forests, monasteries, and sanctuaries. 
    - Also, explore the Tibetan border and plenty of fruit orchards. 
    - Check into hotel and in the evening, take a stroll to Lachung monastery. 
    Overnight Stay at Lachung.`
        },
        {
          day: 6,
          title: "Lachung - Gangtok",
          description: `Early morning drive to Yumthang Valley, which is an Alpine flower valley in North Sikkim. 
    - Enjoy the scenic landscape and Hot spring and drive back to Lachung for Lunch. (Optional tour to Yumesamdong Valley or Zero Point close to Tibet Border (15,000ft, 23kms from Yumthang) for Indian tourists only (at extra cost on prior notice). 
    - After lunch, pack and head back to Gangtok for continuation of the trip. 
    Overnight stay at Gangtok.`
        },
        {
          day: 7,
          title: "Gangtok - Pelling VIA Namchi & Ravangla",
          description: `Today after breakfast proceed towards Ravangla. 
    - At Ravangla you can visit Buddha park
    - Namchi Chardham 
    - Sai mandir 
    - Tea garden
    - Later proceed towards Pelling.
    Overnight stay at Pelling.`
        },
        {
          day: 8,
          title: "Pelling - NJP",
          description: `Today after breakfast proceed towards Njp station.
    Trip end !!!`
        }
      ]
    },
    {
      title: "Jaigaon(1N), Thimphu(2N), Paro(2N)",
      duration: "(5N/6D)",
      itineraryCode: "21",
      gForm:"https://forms.gle/BejpXjwQs5wMv5LXA",
      days: [
        {
          day: 1,
          title: "Alipurduar - Jaigaon",
          description: `Arrival at Alipurduar railway station and you will be transferred to Jaigaon. Do the immigration formalities.
    Overnight stay at Jaigaon.`
        },
        {
          day: 2,
          title: "Jaigaon - Thimphu",
          description: `After breakfast, proceed towards Thimphu via the wonderful mystic town Gedu, which is about 9000 ft above the sea and Chukha Dam. On the way, halt at Chojum to take photographs of confluence of two rivers of Bhutan, Thimphu Chu and Paro Chu. Reach Thimphu in the evening. 
    On arrival check in at the hotel. In the evening, visit the Tashichho Dzong (Fortress of the Glorious Religion). Overnight stay at Thimphu.`
        },
        {
          day: 3,
          title: "Thimphu Sightseeing",
          description: `After breakfast, day is dedicated to sightseeing of Thimphu. You will see the following tourist sites in Thimphu include:
    - Kuenselphodrang
    - National Memorial Chorten
    - Folk Heritage Museum
    
    Typical Bhutanese lunch at the Folk Heritage Restaurant would be a great experience.
    
    - Sangaygang view point
    - Takin Reserve Centre
    - Changangkha Monastery
    - Tashichho Dzong (Fortress of the Glorious Religion).`
        },
        {
          day: 4,
          title: "Thimphu - Paro via Punakha",
          description: `After breakfast, you will be taken on a three hour road trip from Thimphu to Punakha / Wangdue Phodrang, which is located across the famous Dochu La Pass. During the road trip, you will pass through the Dochula, where you will spot mani wall, chorten, prayer flags, and others. This is the country’s highest road. You can even spot the peaks of surrounding mountains, if the sky is clear. Top peaks to spot during your drive are Masagang, Tsendagang, Terigang, Kangphugang, Table Mountain, and others. This includes the Gangkhar Puensum peak, which is the highest in Bhutan. 
    
    Later proceed towards Paro.
    
    Include:
    - Punakha Dzong
    - Chimi Lhakhang
    - Punakha Suspension Bridge
    - Punakha Village
    - Jigme Dorji National Park.`
        },
        {
          day: 5,
          title: "Paro Local Sightseeing",
          description: `After breakfast go for full day sightseeing of Paro. You will see the following tourist sites in Paro include:
    - View of Taktshang Monastery
    - Nya-mey Zam
    - Dungtse Lhankhang
    - Kila Gompa
    - Druk Choeding.`
        },
        {
          day: 6,
          title: "Paro - Alipurduar Railway Station",
          description: `After breakfast check-out from hotel and take the departure transfers to Alipurduar railway station.
    
    Trip end..!!`
        }
      ]
    },
    {
      title: "Kathmandu(3N), Pokhara(1N)",
      duration: "(4N/5D)",
      itineraryCode: "20",
      gForm:"https://forms.gle/1Rtd4hiKnf9qsTuv5",
      days: [
        {
          day: 1,
          title: "Kathmandu Arrival",
          description: `Arrival at Kathmandu airport and proceed towards your hotel.
    Overnight stay at Kathmandu.`
        },
        {
          day: 2,
          title: "Kathmandu Local Sightseeing",
          description: `Kathmandu city sightseeing:-
    - Pashupatinath Temple
    - Shambhunath Buddha
    - Neelkanth King Palace
    Overnight stay at Kathmandu.`
        },
        {
          day: 3,
          title: "Kathmandu - Pokhara",
          description: `Today proceed towards Pokhara.
    - On the way visit Manokamna Temple.
    Overnight stay at Pokhara.`
        },
        {
          day: 4,
          title: "Pokhara Sightseeing - Kathmandu",
          description: `Today do Pokhara city sightseeing:-
    - Fewa Lake
    - Devi's Falls
    - Gujeshwari Temple
    - Mahendra Cave
    - Chameri Gufa
    Later back to Kathmandu.
    Overnight stay at Kathmandu.`
        },
        {
          day: 5,
          title: "Departure",
          description: `Today proceed towards Kathmandu airport.
    Trip end !!!`
        }
      ]
    },
    {
      title: "Srinagar(1N), Kargil(1N), Leh(3N), Nubra(2N), Pangong(1N)",
      duration: "(8N/9D)",
      itineraryCode: "14",
      gForm:"https://forms.gle/7K9V9C5RdscEVmf5A",
      days: [
        {
          day: 1,
          title: "Arrival at Srinagar",
          description: "- Arrive in Srinagar and check-in to your accommodation. - Explore the vibrant local market on your own, known for its handicrafts, spices, and traditional Kashmiri attire. - In the evening, experience the serenity of Dal Lake with a Shikara ride, admiring the floating gardens and houseboats. - Airport pick up included."
        },
        {
          day: 2,
          title: "Srinagar to Kargil",
          description: "- Distance: Approximately 204 km - Drive to Kargil, a town with a rich history due to its strategic location on the Srinagar-Leh highway. - Enroute, first visit Sonamarg for its breathtaking beauty. Halt here and visit Thaswas glacier on your own. - Later on the way visit the Kargil War Memorial in Dras, paying homage to the soldiers who sacrificed their lives during the Kargil War. - Check-in to your accommodation in Kargil and relax. Overnight at Kargil."
        },
        {
          day: 3,
          title: "Kargil - Leh",
          description: "- Distance: Approximately 213 km - Head towards Leh, the capital of Ladakh, known for its Buddhist monasteries and stunning landscapes. - Enroute, first wait for a cup of tea at Drass, worlds 2nd coldest inhabited place. - Visit Lamayuri monastery built on rocks. - Halt at Magnetic Hill and the confluence of the Indus and Zanskar rivers at Sangam. - Reach Leh and unwind at your accommodation. Stay at Leh."
        },
        {
          day: 4,
          title: "Leh Local Sightseeing",
          description: "- Explore Leh's local attractions, including the Shanti Stupa, Leh Palace, and the lively Leh Market. - Visit the historic Shey Palace and the Thiksey Monastery, offering panoramic views of the Indus Valley. Overnight at Leh."
        },
        {
          day: 5,
          title: "Leh to Nubra via Khardungla",
          description: "- Distance: Approximately 125 km - Embark on a thrilling journey to Nubra Valley via the world's highest motorable pass, Khardung La. - Explore Diskit Monastery and the iconic Maitreya Buddha statue. Overnight at Nubra."
        },
        {
          day: 6,
          title: "Nubra, Diskit, and Hunder",
          description: "- Spend the day exploring the charming villages of Diskit and Hunder. - Visit the Hunder Sand Dunes and enjoy a camel safari. - Enjoy the scenic beauty of Nubra Valley, known for its sand dunes and double-humped camels. - Experience the unique culture of the region, influenced by both Indian and Tibetan traditions. - Overnight stay in Nubra."
        },
        {
          day: 7,
          title: "Nubra to Pangong",
          description: "- Distance: Approximately 275 km - Drive to Pangong Lake, a mesmerizing high-altitude lake known for its changing colors. - Enroute, visit the picturesque Shyok River and Tangtse village. - Reach Pangong Lake in the evening and marvel at its breathtaking beauty."
        },
        {
          day: 8,
          title: "Pangong to Leh",
          description: "- Distance: Approximately 160 km - Spend the morning by Pangong Lake, enjoying the tranquility and taking in the stunning views. - Drive back to Leh, passing through the Chang La pass. - Reach Leh in the evening and relax at your accommodation."
        },
        {
          day: 9,
          title: "Departure from Leh",
          description: "- Depart from Leh with beautiful memories of Ladakh. - If time permits indulge in some last-minute shopping. - Catch your flight back home, concluding your unforgettable Ladakh journey. Only drop included."
        }
      ]
    },
    {
      title: "Srinagar(2N), Pahalgam(1N), Gulmarg(2N), Srinagar Houseboat(1N)",
      duration: "(6N/7D)",
      itineraryCode: "15",
      gForm:"https://forms.gle/gGjeNiWSZtv7GKAv9",
      days: [
        {
          day: 1,
          title: "Arrival in Srinagar",
          description: "On arrival at Srinagar airport, you will be greeted by our representative and transferred to your hotel. Rest of the day is free for you to relax and explore the beautiful city of Srinagar. Overnight stay in Srinagar."
        },
        {
          day: 2,
          title: "Srinagar - Sonmarg - Srinagar",
          description: "After breakfast, head to Sonmarg, which is about 2.5 hours from Srinagar. Enjoy the beautiful drive to Sonmarg, which is known for its beautiful meadows and snow-capped mountains. Visit the Thajiwas Glacier, which is a popular tourist attraction in Sonmarg. Return to Srinagar in the evening. Overnight stay in Srinagar."
        },
        {
          day: 3,
          title: "Srinagar - Pahalgam",
          description: "After breakfast, head to Pahalgam, which is about 3 hours from Srinagar. En route, visit the famous saffron fields of Pampore. Explore the picturesque town of Pahalgam, known for its lush green meadows and beautiful valleys. You can also visit the famous Betaab Valley, Chandanwari and Aru Valley. Overnight stay in Pahalgam."
        },
        {
          day: 4,
          title: "Pahalgam",
          description: "Spend the day at leisure in Pahalgam, enjoying the beautiful surroundings and scenic views. You can also indulge in some adventure activities like trekking or river rafting. Later proceed towards Gulmarg. After breakfast, head to Gulmarg, which is about 4 hours from Pahalgam. Enjoy the breathtaking views of snow-capped peaks and the lush green valley as you drive towards Gulmarg. Overnight stay in Gulmarg."
        },
        {
          day: 5,
          title: "Gulmarg Siteseeing",
          description: "Today you can spend the day exploring the picturesque town of Gulmarg, known for its snow-capped mountains and scenic beauty. Take a gondola ride (cable car ride) to Khilanmarg to enjoy the panoramic views of the Himalayas. Overnight stay in Gulmarg."
        },
        {
          day: 6,
          title: "Gulmarg - Srinagar",
          description: "Spend the day at leisure in Gulmarg, enjoying the beautiful surroundings and scenic views. Return to Srinagar. Overnight stay at Houseboat in Dal Lake."
        },
        {
          day: 7,
          title: "Departure",
          description: "After breakfast, check-out from your hotel and head to the airport for your departure flight."
        }
      ]
    },
    {
      title: "Shimla(2N), Manali(3N), Chandigarh(1N)",
      duration: "(6N/7D)",
      itineraryCode: "17",
      gForm:"https://forms.gle/QXK8P1zBXv6NSfC69",
      days: [
        {
          day: 1,
          title: "Arrival at Delhi – Shimla",
          description: "Arrival at Delhi airport and proceed towards Shimla. After reaching Shimla check in to your hotel. Overnight stay at Shimla."
        },
        {
          day: 2,
          title: "Shimla - Kufri – Shimla",
          description: "After breakfast, go ahead with a tour to Shimla, exploring the eminent tourist spots. Visit Mall Road, Jakhoo Hill, Chadwick Falls, Himachal State Museum, Summer Hill, and Prospect Hill. In the afternoon, you can make your way to Kufri Valley for an exciting excursion. Return to your hotel and overnight stay at Shimla."
        },
        {
          day: 3,
          title: "Shimla – Manali",
          description: "After breakfast, proceed to Manali and visit Kullu Valley on your way. Take a glimpse at the verdant fields and apple, cherry, and plum orchards. Kullu Valley is often considered the abode of God and is replete with pictorial locales. After exploring Kullu, move on to Manali. Check in at your hotel and overnight stay at Manali."
        },
        {
          day: 4,
          title: "Manali Local Sightseeing",
          description: "After breakfast, visit Hadimba Devi Temple, Manu Temple, Tibetan Monastery, and Vashisht Village for a city tour. Afternoon at leisure. Overnight stay at Manali."
        },
        {
          day: 5,
          title: "Full Day Atal Tunnel Day Tour from Manali",
          description: "Today after breakfast, enjoy a day tour to Atal Tunnel Rohtang, the world’s longest highway tunnel above 10,000ft, located amidst snow-capped mountain peaks and a beautiful valley. The tour takes you through an amazing 24 km long drive from Manali via Solang Valley and Dhundi, with the highway passing through a lush green forest area with the Solang rivulet flowing by the right side. As you pass through the 9.02 KM long tunnel, which takes around 8 to 9 minutes, you will enter an entirely different world with barren landscapes (similar to Ladakh) with almost no trees and greenery but even higher mountain peaks covered with snow and Chandra, a tributary of Chenab river, flowing next to the tunnel. Overnight stay at Manali."
        },
        {
          day: 6,
          title: "Manali – Chandigarh",
          description: "After breakfast, transfer to Chandigarh. On arrival, check into hotel. The day is free for leisure. Overnight stay at Chandigarh."
        },
        {
          day: 7,
          title: "Chandigarh Local Sightseeing and Departure",
          description: "After breakfast, do Chandigarh Local Sightseeing. Visit Rock Garden, Sukhna Lake, Chandigarh Museum and Art Gallery, Rose Garden, and Leisure Valley (Bougainvillea Park). Later proceed to Chandigarh airport. Trip ends..!!"
        }
      ]
    },
    {
      title: "Gangtok(4N), Lachen(1N), Lachung(1N), Pelling(2N), Darjeeling(2N)",
      duration: "(10N/11D)",
      itineraryCode: "19",
      gForm:"https://forms.gle/z5X1un4wQ26VRGsn8",
      days: [
        {
          day: 1,
          title: "NJP Railway Station / Bagdogra - Gangtok",
          description: "Arrival at Njp/Bagdogra airport and proceed towards Gangtok. Check in at the hotel. You can visit MG Marg on your own. Overnight at Gangtok."
        },
        {
          day: 2,
          title: "Gangtok Local Sight Seeing",
          description: "Today do Gangtok local sightseeing like: Banjakri waterfalls, Hanuman tok, Tashi view point, Gangtok ropeway, Ganesh tok. Evening visit MG Marg on your own. Overnight at Gangtok."
        },
        {
          day: 3,
          title: "Tsomgo Lake, Nathula & BABA Mandir",
          description: "Today after breakfast start on a day long journey to Nathula pass. Sightseeing includes: Tsomgo lake, Baba Harbhajan Mandir, Nathula (which is directly payable at spots Rs.3,500-Rs.4,000 approx.). Overnight stay at Gangtok."
        },
        {
          day: 4,
          title: "Gangtok - Lachen",
          description: "Today after breakfast drive from Gangtok to Lachen. Reach late afternoon. Check into the hotel. Stroll around the Lepcha village and explore the local lifestyle. Lachen is also considered a pilgrimage place, hidden in the lap of mountains, for the Buddhists. Lachen is considered the initial point of all treks. Dinner and overnight stay at Lachen."
        },
        {
          day: 5,
          title: "Lachen - Lachung",
          description: "Early morning drive from Lachen to Gurundongmar lake, a freshwater lake, via Chota valley, Thangu Village. Later proceed towards Lachung, an area covered with green forests, monasteries, and sanctuaries. Also, explore the Tibetan border and plenty of fruit orchards. Check into hotel and in the evening, take a stroll to Lachung monastery. Overnight Stay at Lachung."
        },
        {
          day: 6,
          title: "Lachung - Gangtok",
          description: "Early morning drive to Yumthang Valley, which is an Alpine flower valley in North Sikkim. Enjoy the scenic landscape and Hot spring and drive back to Lachung for Lunch. (Optional tour to Yumesamdong Valley or Zero Point close to Tibet Border (15,000ft, 23kms from Yumthang) for Indian tourists only (at extra cost on prior notice). After lunch, pack and head back to Gangtok for continuation of the trip. Overnight stay at Gangtok."
        },
        {
          day: 7,
          title: "Gangtok - Pelling VIA Namchi & Ravangla",
          description: "Today after breakfast proceed towards Ravangla. At Ravangla you can visit Buddha park, Namchi Chardham, Sai mandir, Tea garden. Later proceed towards Pelling. Overnight stay at Pelling."
        },
        {
          day: 8,
          title: "Pelling Sightseeing",
          description: "Today do Pelling local sightseeing like: Singshore Bridge (Subject to weather conditions)(extra cost), Rabdense ruins, Glass bridge, Several waterfalls, Kechupari lake, Orange garden. Overnight stay at Pelling."
        },
        {
          day: 9,
          title: "Pelling - Darjeeling",
          description: "Today after breakfast proceed towards Darjeeling. And visit: Zoo, HMI, Rope way, Tea Garden, Japanese Temple n Peace Pagoda. Evening visit Mall Road on your own. Overnight stay at Darjeeling."
        },
        {
          day: 10,
          title: "Darjeeling Sightseeing",
          description: "Early morning proceed to visit: Tiger Hill, Batasia Loop, Ghoom Monastery, Rock Garden. Overnight stay at Darjeeling."
        },
        {
          day: 11,
          title: "Departure",
          description: "Today after breakfast, proceed towards NJP station. Trip end!!!"
        }
      ]
    }
                                   
]
  
  export default itinerary;
  