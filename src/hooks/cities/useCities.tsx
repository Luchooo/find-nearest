import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getCities } from "../../api/cities";
import { CitiesFmOutput, CityApi } from "../../types";

export const useCities = (search: string) => {
  const { data, isLoading, isError } = useQuery<CitiesFmOutput>({
    refetchOnWindowFocus: false,
    queryKey: ["cities"],
    queryFn: getCities,
  });
  const [cities, setCities] = useState<CityApi[]>([]);

  useEffect(() => {
    const filterCities = () => {
      let filteredCities = data?.cities ?? [];
      if (search && search.length > 0) {
        filteredCities = filteredCities.filter((city) =>
          city.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      setCities(filteredCities);
    };

    filterCities();
  }, [data?.cities, search]);

  return {
    cities: cities,
    allCoords: data?.allCoords ?? [],
    isLoading,
    isError,
  };
};
