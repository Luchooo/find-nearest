import { orderByDistance } from "geolib";
import { useMemo } from "react";
import { CityApi, Coord } from "../types";

export const useOrderByDistance = (
  allCoords: Coord[],
  city: CityApi | undefined
): CityApi[] => {
  const nearestCities = useMemo(() => {
    if (!city) return [];
    const [, first, second, third] = orderByDistance(
      { latitude: city.lat, longitude: city.lng },
      allCoords
    );
    return [first, second, third] as CityApi[];
  }, [allCoords, city]);

  return nearestCities;
};
