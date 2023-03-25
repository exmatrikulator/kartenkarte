kartenkarten = new Map([
    ["localhost", {
        title: "Test Map",
        description: "A map just for testing",
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
        style: "node[amenity=restaurant], \
            node[amenity=fast_food], \
            node[amenity=cafe], \
            area[amenity=restaurant], \
            area[amenity=fast_food], \
            area[amenity=cafe] \
            { color:blue; fill-color:gray; } \
            \
            node[shop=bakery], \
            area[shop=bakery] \
            { color:grey; fill-color:yellow;} \
            \
            node[shop=supermarket], \
            area[shop=supermarket] \
            { color:gray; fill-color:green; } \
            \
            node[shop=butcher], \
            area[shop=butcher] \
            { color:gray; fill-color:orange; }",
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
        minZoom: 14
    }],
]);