kartenkarten = new Map([
    ["briefkasten", {
        title: "Briefkästen",
        description: "Wo steht der nächste Briefkasten?",
        query: "node({{bbox}})['amenity'='post_box'];out;",
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
        minZoom: 8
    }],
    ["defibrillator", {
        title: "Defibrillator",
        description: "Wo gibt Defibrillatoren?",
        query: "(nwr({{bbox}})[emergency=defibrillator];);out center;",
        minZoom: 11
    }],
    ["internet", {
        title: "Wo kommt der Internetanschluss her?",
        description: "",
        query: "(nwr({{bbox}})[telecom=exchange];);out center;",
        minZoom: 13
    }],
    ["ladestationen", {
        title: "Ladestationen",
        description: "",
        query: "(nwr({{bbox}})[amenity=charging_station];);out center;",
        minZoom: 13
    }],
    ["friseur", {
        title: "Friseurläden",
        description: "",
        query: "(nwr({{bbox}})[shop=hairdresser];);out center;",
        minZoom: 13
    }],
    ["wasserspender", {
        title: "Wasserspender",
        description: "",
        query: "(nwr({{bbox}})[amenity=drinking_water];);out center;",
        minZoom: 13
    }],
    ["stolpersteine", {
        title: "Stolpersteine",
        description: "",
        query: "(node({{bbox}})[memorial=stolperstein];node({{bbox}})['memorial:type'=stolperstein];node({{bbox}})[memorial=stolperstein];);out center;",
        minZoom: 13
    }],
    ["fahrrad-parken", {
        title: "Fahrrad Parkplatz",
        description: "Wo sind Fahrrad Abstellmöglichkeiten?",
        query: "(node({{bbox}})[amenity=bicycle_parking];);out center;",
        minZoom: 13
    }],
    ["car-wash", {
        title: "Autowaschanlage",
        description: "",
        query: "(nwr({{bbox}})[amenity=car_wash];);out center;",
        minZoom: 13
    }],
    ["container", {
        title: "Recyclingcontainer",
        description: "",
        query: "(nwr({{bbox}})[recycling_type=container];);out center;",
        minZoom: 14
    }],
    ["hoflaeden", {
        title: "Automaten auf Hofläden",
        description: "",
        query: "(node({{bbox}})[vending~food];node({{bbox}})[vending~eggs];node({{bbox}})[vending~milk];);out center;",
        minZoom: 12
    }],
]);