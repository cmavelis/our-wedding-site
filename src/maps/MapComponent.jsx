import React, {useEffect} from "react";
// import { Map } from 'react-leaflet'

import L from "leaflet";

// import mapFunction, {goldIcon, orangeIcon, redIcon} from "./maps.js";
import "leaflet/dist/leaflet.css";
import "./map.scss";


// export default class MyMap extends Component {
//     render() {
//         const { options } = this.props
//
//         if (typeof window !== 'undefined') {
//             return (
//                 <Map {...options}>
//                     {/* Map code goes here */}
//                 </Map>
//             )
//         }
//         return null
//     }
// }

const MapComponent = () => {
    if (typeof window !== 'undefined') {
        const L = import("leaflet");
        const mapsFile = import("./maps.js")
        const {goldIcon, redIcon} = mapsFile;

        useEffect(() => {
        let mapObject = L.map("mapid").setView([39.31, -76.61], 13);

        // mapFunction(mapObject)
        L.tileLayer("http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png", {
            // attribution: "Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>",
            maxZoom: 18,
        }).addTo(mapObject);

//   events

        var gertrudes = L.marker([39.326, -76.619], {icon: redIcon}).addTo(mapObject);
        gertrudes.bindPopup("<b>Gertrudes</b><br /><em>10 Art Museum Dr</em><br />Ceremony and reception").openPopup();

        var bikeparty = L.marker([39.296, -76.627], {icon: redIcon}).addTo(mapObject);
        bikeparty.bindPopup("<b>St Mary's Park</b><br /><em>601 N Paca St</em><br />Start of Bike Party");

// accomodations

        var revival = L.marker([39.2975, -76.617], {icon: goldIcon});
        revival.bindPopup("<b>Hotel Revival</b><br /><em>101 W Monument St</em><br />Hotel block reserved");

        var daysinn = L.marker([39.287, -76.6203], {icon: goldIcon});
        daysinn.bindPopup("<b>Days Inn</b><br /><em>100 Hopkins Plaza</em><br />Hotel block reserved");

        var hampden = L.circle([39.330, -76.632], {
            color: "gold",
            fillColor: "gold",
            fillOpacity: 0.5,
            radius: 700
        });
        hampden.bindPopup("<b>Hampden</b><br /><em>Neighborhood</em><br />Suggested Airbnb neighborhood");

        var vernonmidtown = L.circle([39.305, -76.619], {
            color: "gold",
            fillColor: "gold",
            fillOpacity: 0.5,
            radius: 700
        });
        vernonmidtown.bindPopup("<b>Mt Vernon and Midtown</b><br /><em>Neighborhood</em><br />Suggested Airbnb neighborhood")

        L.layerGroup([revival, daysinn, hampden, vernonmidtown]).addTo(mapObject);

        return function cleanup() {
            mapObject.remove();
        }
    });

        return (
            <div id="mapid">

            </div>
        )
    }
    return null

};

export default MapComponent;
