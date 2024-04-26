import { useState } from "react";
import { CityApi } from "../../types";

export const useCitySelected = () => {
  const [city, setCity] = useState<CityApi>();

  const handleCity = (citySelected: CityApi) => {
    setCity(citySelected);
  };

  return { city, handleCity };
};
