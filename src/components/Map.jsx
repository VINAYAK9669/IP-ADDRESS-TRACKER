/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ ipLocation }) {
  const mapRef = useRef(null);

  const [latitude, setLatitude] = useState(40.52006);
  const [longitude, setLongitude] = useState(-82.09737);

  const position =
    ipLocation?.location === undefined
      ? ipLocation?.code
      : ipLocation?.location;

  useEffect(() => {
    position === 422 ? setLatitude(40.52006) : setLatitude(position?.lat);

    position === 422 ? setLongitude(-82.09737) : setLongitude(position?.lng);
  }, [ipLocation]);

  return (
    <>
      {latitude ? (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ height: "100%", width: "100%", zIndex: "-1" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}

          <Marker position={[latitude, longitude]}>
            <Popup>
              longitude
              <p>Here You are!</p>
            </Popup>
          </Marker>
          <ChangeCenter position={[latitude, longitude]} />
        </MapContainer>
      ) : (
        <p className="text-center text-red-500">
          OOPS! Unable to locate 😥: Enter a valid IPv6 Address
        </p>
      )}
    </>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
export default Map;
