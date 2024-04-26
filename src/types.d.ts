export interface CityApi {
  name: string;
  country: string;
  lat: string;
  lng: string;
}

export interface Coord {
  name: string;
  latitude: number;
  longitude: number;
}

export interface MapCities {
  [key: string]: string;
}

export interface CitiesFmOutput {
  cities: CityApi[];
  allCoords: Coord[];
}

export interface MapCitiesSelected {
  [key: string]: CityApi[];
}
