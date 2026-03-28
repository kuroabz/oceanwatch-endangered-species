import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';



L.Marker.prototype.options.icon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

function Map() {
    const [pins, setPins] = useState([]);

    
    useEffect(() => {
        fetch('/mock-educational-pins.json')
            .then(res => res.json())
            .then(data => setPins(data));
    }, []);


    return (

        <MapContainer center={[20, 0]} zoom={2} style={{ height: "600px", width: "50%", border: '5px solid #9af3ffff', margin: '100px auto', backgroundColor: '#d5e8eb'}}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                noWrap={true}
            />

           
            {pins.map(pin => (
                <Marker key={pin.id} position={[pin.latitude, pin.longitude]}>
                <Popup>
                        <b>{pin.speciesName}</b><br/>
                        {pin.status}
                    </Popup>
                    </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;
