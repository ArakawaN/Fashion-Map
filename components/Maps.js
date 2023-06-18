import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  LoadScript,
} from "@react-google-maps/api";
import { getPosition } from "../lib/getPosition";
import { useCallback } from "react";
import { useState, useEffect } from "react";

const Maps = () => {
  const containerStyle = {
    width: "80%",
    height: "80vh",
  };
  const initialCenter = {
    lat: 35.494038588467824,
    lng: 134.2258911334211,
  };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  // });

  // const [map, setMap] = useState(null);

  // const onLoad = () => {
  //   const bounds = new window.google.maps.LatLngBounds(initialCenter);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // };

  // const onUnmount = useCallback(() => {}, []);

  // useEffect(() => {
  //   // console.log(currentPosition.lat);
  //   const position = getPosition();
  //   const center = {
  //     lat: position.lat,
  //     lng: position.lng,
  //   };
  //   return center;
  // }, []);

  return (
    <>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initialCenter}
          zoom={16}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          <MarkerF position={initialCenter} label={"ZABOU"} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Maps;
