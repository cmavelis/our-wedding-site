import React, {Component} from "react";
import { Map, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import L from "leaflet";

import {eventInfo, accomodationsInfo, neighborhoodInfo, iconSettings, iconColorUrls} from "./mapData";
// import "leaflet/dist/leaflet.css";
import "./map.scss";


export class MapComponent extends Component {
    icons = Object.entries(iconColorUrls).reduce((result, item) => {
        const newSettings = {...iconSettings};
        newSettings.iconUrl = item[1];
        result[item[0]] = L.icon(newSettings);
        return result;
    }, {});
    render() {
        const { options } = this.props;

        if (typeof window !== 'undefined') {
            return (
                <Map center={[39.31, -76.61]} zoom={13} options={options}>
                    <TileLayer
                        url="http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        maxZoom={18}
                    />
                    {Object.entries({...eventInfo, ...accomodationsInfo}).map(entry => {
                        const infoObject = entry[1];
                            return(
                                <Marker
                                    key={infoObject.name}
                                    position={[
                                        infoObject.coordinates[0],
                                        infoObject.coordinates[1]
                                    ]}
                                    icon={this.icons[infoObject.icon]}
                                    onMouseOver={(e) => {
                                        e.target.openPopup();
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.closePopup();
                                    }}
                                >
                                    <Popup>
                                        <b>{infoObject.name}</b><br /><em>{infoObject.address}</em><br />{infoObject.tag}
                                    </Popup>
                                </Marker>
                        )}
                    )}
                    {Object.entries(neighborhoodInfo).map(entry => {
                        const infoObject = entry[1];
                        return(
                            <Circle
                                key={infoObject.name}
                                color={"gold"}
                                fillColor={"gold"}
                                fillOpacity={0.5}
                                radius={700}
                                center={[
                                    infoObject.coordinates[0],
                                    infoObject.coordinates[1]
                                ]}
                                onMouseOver={(e) => {
                                    e.target.openPopup();
                                }}
                                onMouseOut={(e) => {
                                    e.target.closePopup();
                                }}
                            >
                                <Popup>
                                    <b>{infoObject.name}</b><br /><em>{infoObject.address}</em><br />{infoObject.tag}
                                </Popup>
                            </Circle>
                        )}
                    )}
                </Map>
            )
        }
        return null
    }
}

export default MapComponent;
