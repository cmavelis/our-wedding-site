import L from "leaflet";

import {eventInfo, accomodationsInfo, drinkInfo, neighborhoodInfo, redIcon, goldIcon, orangeIcon} from "./mapData";

var mapObject = L.map("mapid").setView([39.31, -76.61], 13);

L.tileLayer("http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png", {
    // attribution: "Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>",
    maxZoom: 18,
}).addTo(mapObject);

// custom icons from https://github.com/pointhi/leaflet-color-markers

//   events

var eventMarkers = [];
for (let [key, subObject] of Object.entries(eventInfo)) {
    if (subObject.coordinates.length === 2) {
        let newMarker = L.marker(subObject.coordinates, {icon: subObject.icon}).addTo(mapObject);
        newMarker.bindPopup(`<b>${subObject.name}</b><br /><em>${subObject.address}</em><br />${subObject.tag}`)
        eventMarkers.push(newMarker)
    }
}

// accomodations



var accomodationsMarkers = [];
for (let [key, subObject] of Object.entries(accomodationsInfo)) {
    if (subObject.coordinates.length === 2) {
        let newMarker = L.marker(subObject.coordinates, {icon: subObject.icon}).addTo(mapObject);
        newMarker.bindPopup(`<b>${subObject.name}</b><br /><em>${subObject.address}</em><br />${subObject.tag}`)
        accomodationsMarkers.push(newMarker)
    }
}

var hampden = L.circle(neighborhoodInfo.hampden.coordinates, {
    color: "gold",
    fillColor: "gold",
    fillOpacity: 0.5,
    radius: 700
});
hampden.bindPopup("<b>Hampden</b><br /><em>Neighborhood</em><br />Suggested Airbnb neighborhood")

var vernonmidtown = L.circle(neighborhoodInfo.mtvernon.coordinates, {
    color: "gold",
    fillColor: "gold",
    fillOpacity: 0.5,
    radius: 700
});
vernonmidtown.bindPopup("<b>Mt Vernon and Midtown</b><br /><em>Neighborhood</em><br />Suggested Airbnb neighborhood")

var accomod = L.layerGroup([hampden, vernonmidtown]).addTo(mapObject);


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

