import axios, { AxiosError } from "axios";
import type { CitiesFmOutput, CityApi } from "../types";
import { getCitiesFm } from "../utils/cities.utils";

export const getCities = async (): Promise<CitiesFmOutput> => {
  try {
    const cities = localStorage.getItem("cities");
    if (cities) {
      return JSON.parse(cities);
    }
    const { data } = await axios.get<CityApi[]>(
      "https://api.npoint.io/b07d3581cb7c33e28418"
    );
    const citiesFm = getCitiesFm(data);
    localStorage.setItem("cities", JSON.stringify(citiesFm));
    return citiesFm;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message);
    }
    throw new Error("Error getting cities");
  }
};
