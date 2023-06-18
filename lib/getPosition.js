export const getPosition = async () => {
  await navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback
  );
  function successCallback(position) {
    const pos = {
      lat: parseFloat(position.coords.latitude),
      lng: parseFloat(position.coords.longitude),
    };
    console.log(pos);
    return pos;
  }
  function errorCallback(error) {
    return alert(`${error}:位置情報が取得できませんでした`);
  }
};

export const useMap = ({ defaultPosition }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  });

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(defaultPosition);
    map.fitBounds(bounds);
  };

  const onUnmount = useCallback(() => {}, []);

  return { isLoaded, onLoad, onUnmount };
};
