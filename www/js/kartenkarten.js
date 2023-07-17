kartenkarten = new Map([
    ["briefkasten", {
        title: "Briefkästen",
        description: "Wo steht der nächste Briefkasten?",
        query: "node({{bbox}})['amenity'='post_box'];out;",
        marker: { postbox: {icon: 'envelope', color: 'orange'}},
        mapping:{ amenity:{post_box:"postbox"}},
        lat: "51.2627",
        lon: "7.1772",
        zoom: 15
    }],
    ["essen", {
        title: "Wo finde ich Essen?",
        description: "Wo bekommt man Essen her?",
        query: "(\
            nwr({{bbox}})[shop=bakery]; \
            nwr({{bbox}})[amenity=restaurant]; \
            nwr({{bbox}})[amenity=fast_food]; \
            nwr({{bbox}})[amenity=cafe]; \
            nwr({{bbox}})[shop=supermarket]; \
            nwr({{bbox}})[shop=butcher];);out center;",
        marker: {   cafe: {icon: 'coffee', color: 'darkblue'},
                    bakery: {icon: 'bread-slice', color: 'beige'},
                    fast_food: {icon: 'hamburger', color: 'orange'},
                    supermarket:{icon: 'shopping-cart', color: 'green'},
                    restaurant:{icon: 'utensils', color: 'purple'},
                    butcher:{icon: 'cow', color: 'red'}},
        mapping:    {amenity:{restaurant:"restaurant",
                                cafe:"cafe",
                            fast_food: "fast_food"},
                    shop:{
                        supermarket: "supermarket",
                        bakery: "bakery",
                        butcher: "butcher"
                    }},
        lat: "51.4555",
        lon: "7.0121",
        zoom: 15,
        minZoom: 16
    }],
    ["hackerspace", {
        title: "Hackerspaces",
        description: "Wo gibt es Hackerspaces?",
        query: "nwr({{bbox}})[leisure=hackerspace];out center;",
        marker: { hackerspace: {icon: 'hat-cowboy', color: 'purple'}},
        mapping:{ leisure:{hackerspace:"hackerspace"}},
        minZoom: 8
    }],
    ["defibrillator", {
        title: "Defibrillator",
        description: "Wo gibt Defibrillatoren?",
        query: "(nwr({{bbox}})[emergency=defibrillator];);out center;",
        marker: { defibrillator: {icon: 'heart-pulse', color: 'green'}},
        mapping:{ emergency:{defibrillator:"defibrillator"}},
        minZoom: 11
    }],
    ["internet", {
        title: "Wo kommt der Internetanschluss her?",
        description: "",
        query: "(nwr({{bbox}})[telecom=exchange];);out center;",
        marker: { exchange: {icon: 'network-wired', color: 'black', iconColor: 'white'}},
        mapping:{ telecom:{exchange:"exchange"}},
        minZoom: 13
    }],
    ["ladestationen", {
        title: "Ladestationen",
        description: "",
        query: "(nwr({{bbox}})[amenity=charging_station];);out center;",
        marker: { chargingstation: {icon: 'plug-circle-bolt', color: 'green'}},
        mapping:{ amenity:{charging_station:"chargingstation"}},
        minZoom: 13
    }],
    ["friseur", {
        title: "Friseurläden",
        description: "",
        query: "(nwr({{bbox}})[shop=hairdresser];);out center;",
        marker: { hairdresser: {icon: 'scissors', color: 'darkred'}},
        mapping:{ shop:{hairdresser:"hairdresser"}},
        minZoom: 14
    }],
    ["wasserspender", {
        title: "Wasserspender",
        description: "",
        query: "(nwr({{bbox}})[amenity=drinking_water];);out center;",
        marker: { water: {icon: 'glass-water', color: 'lightblue'}},
        mapping:{ amenity:{drinking_water:"water"}},
        minZoom: 13
    }],
    ["stolpersteine", {
        title: "Stolpersteine",
        description: "",
        query: "(node({{bbox}})[memorial=stolperstein];node({{bbox}})['memorial:type'=stolperstein];);out center;",
        marker: { stolperstein: {icon: 'stop', color: 'black', iconColor:'white'}},
        mapping:{ memorial:{stolperstein:"stolperstein"}, "memorial:type":{stolperstein:"stolperstein"} },
        minZoom: 13
    }],
    ["fahrrad-parken", {
        title: "Fahrrad Parkplatz",
        description: "Wo sind Fahrrad Abstellmöglichkeiten?",
        query: "(node({{bbox}})[amenity=bicycle_parking];);out center;",
        marker: { parking: {icon: 'square-parking', color: 'blue'}},
        mapping:{ amenity:{bicycle_parking:"parking"}},
        minZoom: 15,
        lat: "51.2651",
        lon: "7.1660",
        zoom: 15
    }],
    ["carwash", {
        title: "Autowaschanlage",
        description: "",
        query: "(nwr({{bbox}})[amenity=car_wash];);out center;",
        marker: { carwash: {icon: 'car', color: 'blue'}},
        mapping:{ amenity:{car_wash:"carwash"}},
        minZoom: 13
    }],
    ["container", {
        title: "Recyclingcontainer",
        description: "",
        query: "(nwr({{bbox}})[recycling_type=container];);out center;",
        marker: { container: {icon: 'recycle', color: 'cadetblue'}},
        mapping:{ recycling_type:{container:"container"}},
        minZoom: 14
    }],
    ["hoflaeden", {
        title: "Automaten auf Hofläden",
        description: "",
        query: "(node({{bbox}})[vending~food];node({{bbox}})[vending~eggs];node({{bbox}})[vending~milk];node({{bbox}})[vending~bread];node({{bbox}})[vending~jam];);out center;",
        marker: {egg : {icon: 'egg', color: 'beige'}, food : {icon: 'utensils', color: 'orange'}, milk : {icon: 'cow', color: 'white', iconColor:'black'}},
        mapping:{ vending:{eggs:"egg", food:"food", milk: "milk"}},
        minZoom: 12
    }],
    ["bus", {
        title: "Wo fährt der nächste Bus?",
        description: "",
        query: "(nwr({{bbox}})[highway=bus_stop];nwr({{bbox}})[amenity=bus_station];);out center;",
        marker: { bus: {icon: 'bus', color: 'blue'}},
        mapping:{ highway:{bus_stop:"bus"}, amenity:{bus_station:"bus"}},
        minZoom: 15
    }],
    ["camera", {
        title: "Werde ich überwacht?",
        description: "",
        query: "(nwr({{bbox}})[man_made=surveillance];);out center;",
        marker: { camera: {icon: 'video', color: 'purple'}},
        mapping:{ man_made:{surveillance:"camera"}},
        minZoom: 15
    }],
    ["tankstelle", {
        title: "Tankstellen",
        description: "",
        query: "(nwr({{bbox}})[amenity=fuel];);out center;",
        marker: { station: {icon: 'gas-pump', color: 'purple'}},
        mapping:{ amenity:{fuel:"station"}},
        minZoom: 15
    }],
    ["med", {
        title: "Medizinische Versorgung",
        description: "",
        query: "(nwr({{bbox}})[amenity=pharmacy];nwr({{bbox}})[amenity=doctors];nwr({{bbox}})[amenity=hospital];);out center;",
        marker: { pharmacy: {icon: 'suitcase-medical', color: 'green'},
                 doctors: {icon: 'user-doctor', color: 'grey'},
                 hospital: {icon: 'hospital', color: 'darkred', iconColor: 'white'}},
        mapping:{ amenity:{pharmacy:"pharmacy",doctors:"doctors",hospital:"hospital"}},
        minZoom: 15
    }],
    ["voegeln", {
        title: "Nistkästen für Vögel",
        description: "Nistkästen & Vogelhäuser",
        query: "(nwr({{bbox}})[amenity=nest_box];nwr({{bbox}})[man_made=birdhouse];);out center;",
        marker: { nest: {icon: 'crow', color: 'purple'}, birdhouse: {icon: 'dove', color: 'pink'}},
        mapping:{ amenity:{nest_box:"nest"}, man_made:{birdhouse:"birdhouse"}},
        minZoom: 9
    }],
    ["gaslaternen", {
        title: "Gaslaternen",
        description: "",
        query: "(nwr({{bbox}})[lit_by_gaslight=yes];);out center;",
        marker: { lit: {icon: 'lightbulb', color: 'orange'}},
        mapping:{ lit_by_gaslight:{yes:"lit"}},
        minZoom: 16
    }],
    ["brewery", {
        title: "Brauereien",
        description: "",
        query: "(nwr({{bbox}})[building=brewery];nwr({{bbox}})[craft=brewery];);out center;",
        marker: { brewery: {icon: 'beer-mug-empty', color: 'orange'}},
        mapping:{ building:{brewery:"brewery"},craft:{brewery:"brewery"}},
        minZoom: 10
    }],
    ["windrad", {
        title: "Windräder",
        description: "Wo stehen Windräder?",
        query: "(nwr({{bbox}})['generator:source'=wind];);out center;",
        minZoom: 10
    }],
]);