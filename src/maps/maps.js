import L from "leaflet";

// if (!L.exists) {
//     let L;
//     import("leaflet").then(module => {
//         L = module;
//     }).catch(err => console.log(err))
// }

export var redIcon = new L.Icon({
    iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export var goldIcon = new L.Icon({
    iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export var orangeIcon = new L.Icon({
    iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const main = function(mapObject=null) {
    if (mapObject === null) {
        mapObject = L.map("mapid").setView([39.31, -76.61], 13);
    }

    L.tileLayer("http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png", {
        // attribution: "Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>",
        maxZoom: 18,
    }).addTo(mapObject);

    // custom icons from https://github.com/pointhi/leaflet-color-markers

//   events

    var gertrudes = L.marker([39.326, -76.619], {icon: redIcon}).addTo(mapObject);
    gertrudes.bindPopup("<b>Gertrudes</b><br /><em>10 Art Museum Dr</em><br />Ceremony and reception").openPopup();

    var bikeparty = L.marker([39.296, -76.627], {icon: redIcon}).addTo(mapObject);
    bikeparty.bindPopup("<b>St Mary's Park</b><br /><em>601 N Paca St</em><br />Start of Bike Party")

// accomodations

    var revival = L.marker([39.2975, -76.617], {icon: goldIcon});
    revival.bindPopup("<b>Hotel Revival</b><br /><em>101 W Monument St</em><br />Hotel block reserved")

    var daysinn = L.marker([39.287, -76.6203], {icon: goldIcon});
    daysinn.bindPopup("<b>Days Inn</b><br /><em>100 Hopkins Plaza</em><br />Hotel block reserved")

    var hampden = L.circle([39.330, -76.632], {
        color: "gold",
        fillColor: "gold",
        fillOpacity: 0.5,
        radius: 700
    });
    hampden.bindPopup("<b>Hampden</b><br /><em>Neighborhood</em><br />Suggested Airbnb neighborhood")

    var vernonmidtown = L.circle([39.305, -76.619], {
        color: "gold",
        fillColor: "gold",
        fillOpacity: 0.5,
        radius: 700
    });
    vernonmidtown.bindPopup("<b>Mt Vernon and Midtown</b><br /><em>Neighborhood</em><br />Suggested Airbnb neighborhood")

    var accomod = L.layerGroup([revival, daysinn, hampden, vernonmidtown]).addTo(mapObject);

    var foodInfo = {
        charmery: {
            name: "The Charmery",
            coord: [39.331, -76.629],
            address: "801 W 36th St",
            link: "",
            tag: "Ice cream parlor",
            desc: "This is a local favorite, with lots of fun flavor combinations -- including Old Bay!"
        },
        clavel: {
            name: "Clavel",
            coord: [39.315, -76.622],
            address: "225 W 23rd St",
            link: "",
            tag: "Mexican restaurant",
            desc: "Hip Mexican restaurant with an excellent mezcal tasting (or flights, if you can't book one of those) and great cocktails."
        },
        doobys: {
            name: "Dooby's",
            coord: [39.299, -76.616],
            address: "802 N Charles St",
            link: "http://doobys.com",
            tag: "Asian fusion restaurant",
            desc: "This place does it all, to our delight and Lindsey's confusion. Grab coffee and pastries in the morning, noodles or sandwiches for lunch, and maybe a drink in the evening."
        },
        dukem: {
            name: "Dukem",
            coord: [39.303, -76.617],
            address: "1100 Maryland Ave",
            link: "http://dukemrestaurant.com",
            tag: "Ethiopian restaurant",
            desc: "One of our regular spots, and a good option for vegetarians. We recommend getting a combination platter to share."
        },
        ekiben: {
            name: "Ekiben",
            coord: [39.331, -76.631],
            address: "911 W 36th St",
            link: "http://ekibenbaltimore.com",
            tag: "Asian fusion restaurant",
            desc: "Probably one of the most beloved restaurants in Baltimore. Tiny place with great bao and limited seating. The Tofu Brah is delicious, as are their meaty options."
        },
        faidleys: {
            name: "Faidley's",
            coord: [],
            address: "",
            link: "",
            tag: "Casual seafood restaurant",
            desc: "Located in the storied Lexington Market, Faidley's is known for its crabcakes. The market itself is a little gritty, so we'd recommend this spot mostly to people used to city living."
        },
        jongKak: {
            name: "Jong Kak",
            coord: [],
            address: "",
            link: "",
            tag: "Korean restaurant",
            desc: "Good Korean bbq over charcoal. This is a great late night option -- can be really crowded in the evenings."
        },
        laCuchara: {
            name: "La Cuchara",
            coord: [39.331, -76.643],
            address: "3600 Clipper Mill Rd",
            link: "http://lacucharabaltimore.com",
            tag: "Spanish restaurant",
            desc: "We love the patatas bravas here. We considered this place for our wedding venue. It has an excellent late night happy hour."
        },
        landOfKush: {
            name: "Land of Kush",
            coord: [],
            address: "",
            link: "",
            tag: "Vegan soul food restaurant",
            desc: ""
        },
        leComptoir: {
            name: "Le Comptoir du Vin",
            coord: [],
            address: "",
            link: "",
            tag: "French restaurant",
            desc: "Actually we haven't eaten here yet but this teeny tiny restaurant has received a lot of national praise, so it might be worth checking out if you can snag a table."
        },
        lpSteamers: {
            name: "LP Steamers",
            coord: [39.271, -76.601],
            address: "1100 E Fort Ave",
            link: "",
            tag: "Seafood restaurant",
            desc: "We take all guests from out-of-town here and, without fail, we order the Natty Boht Load to share."
        },
        orto: {
            name: "Orto",
            coord: [39.309, -76.616],
            address: "1709 N Charles St, Baltimore, MD 21201",
            link: "http://ortobaltimore.com",
            tag: "Italian restaurant",
            desc: "A small, modern Italian restaurant with good cocktails."
        },
        paulieGees: {
            name: "Paulie Gee's",
            coord: [],
            address: "",
            link: "",
            tag: "Pizza place",
            desc: "There's one of these in NYC that's always packed, much easier to get in here. Really good pizzas, including vegan ones with 'beetballs'."
        },
        woodberry: {
            name: "Woodberry Kitchen",
            coord: [39.332, -76.646],
            address: "2010 Clipper Park Rd",
            link: "",
            tag: "Chesapeake Bay restaurant",
            desc: "Beautiful restaurant that pioneered the idea of eating local."
        }
    };


    var drinkInfo = {
        dutchCourage: {
            name: "Dutch Courage",
            coord: [39.315, -76.617],
            address: "2229 N Charles St",
            link: "",
            tag: "Cocktail bar",
            desc: "This is a new gin-focused bar that we're really excited about."
        },
        gardenRoom: {
            name: "Garden Room at Hotel Revival",
            coord: [],
            address: "",
            link: "",
            tag: "Hotel bar",
            desc: "Tiki drinks in a beautiful room filled with lush plants. See the entire city from this room, or from Topside, the restaurant nextdoor."
        },
        meadworks: {
            name: "Charm City Meadworks",
            coord: [],
            address: "",
            link: "",
            tag: "Meadery",
            desc: "The only meadery in town! Mead slushies are delicious on a hot day. We also like the Retire by the Fire."
        },
        noonas: {
            name: "Noona's",
            coord: [],
            address: "",
            link: "",
            tag: "Pizza place",
            desc: "Our favorite place in our neighborhood. Say hi to our friend Tyler behind the bar."
        },
        rHouse: {
            name: "R House",
            coord: [],
            address: "",
            link: "",
            tag: "Food market",
            desc: "Surprisingly solid bar program at a market. This is a good option for kids and for groups, since everyone can choose their own thing."
        },
        sugarvale: {
            name: "Sugarvale",
            coord: [],
            address: "",
            link: "",
            tag: "Cocktail bar",
            desc: ""
        },
        wcHarlan: {
            name: "WC Harlan",
            coord: [],
            address: "",
            link: "",
            tag: "Speakeasy",
            desc: "A speakeasy--the door is not labeled. Dark and moody with candlabras covered in years of wax."
        },
    };

    var foodMarkers = [];
    for (let [key, subObject] of Object.entries(foodInfo)) {
        if (subObject.coord.length === 2) {
            let newMarker = L.marker(subObject.coord)
            newMarker.bindPopup(`<b>${subObject.name}</b><br /><em>${subObject.address}</em><br />${subObject.tag}`)
            foodMarkers.push(newMarker)
        }
    }

    var food = L.layerGroup(foodMarkers).addTo(mapObject);

    var drinkMarkers = [];
    for (let [key, subObject] of Object.entries(drinkInfo)) {
        if (subObject.coord.length === 2) {
            let newMarker = L.marker(subObject.coord, {icon: orangeIcon})
            newMarker.bindPopup(`<b>${subObject.name}</b><br /><em>${subObject.address}</em><br />${subObject.tag}`)
            drinkMarkers.push(newMarker)
        }
    }

    var drink = L.layerGroup(drinkMarkers).addTo(mapObject);

    // overlays

    var overlayMaps = {
        "Accomodations": accomod,
        "Food": food,
        "Drink": drink
    };

    L.control.layers(overlayMaps).addTo(mapObject);
    return mapObject
};

export default main;
