import { CitiesFmOutput, CityApi, Coord, MapCities } from "../types";

export const getCitiesFm = (cities: CityApi[]): CitiesFmOutput => {
  const allCoords: Coord[] = [];
  const uniqueCities: CityApi[] = [];
  const mapCities: MapCities = {};

  cities.forEach((city) => {
    if (!mapCities[city.name]) {
      mapCities[city.name] = city.name;
      uniqueCities.push(city);
      allCoords.push({
        name: city.name,
        latitude: Number(city.lat),
        longitude: Number(city.lng),
      });
    }
  });

  return { cities: uniqueCities, allCoords };
};
