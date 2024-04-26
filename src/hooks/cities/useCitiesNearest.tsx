import { CityApi, Coord, MapCitiesSelected } from "../../types";
import { useOrderByDistance } from "../../utils/cities-nearest";

const mapCitiesSelected: MapCitiesSelected = {};

export const useCitiesNearest = (
  city: CityApi | undefined,
  allCoords: Coord[]
): CityApi[] | null => {
  let citiesNearest: CityApi[] = [];
  if (!city) return null;
  if (!mapCitiesSelected[city.name]) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    citiesNearest = useOrderByDistance(allCoords, city);
    mapCitiesSelected[city.name] = citiesNearest;
  } else {
    citiesNearest = mapCitiesSelected[city.name];
  }

  return citiesNearest;
};
