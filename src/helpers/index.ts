type Coordinates = {
  latitude?: number;
  longitude?: number;
  error? : string;
};

const getCurrentCoordinates = (): Promise<Coordinates> => new Promise(
  (resolve) => navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    (error) => {
      resolve({
        error: error.message || '',
      });
    },
  ),
);

export default getCurrentCoordinates;
