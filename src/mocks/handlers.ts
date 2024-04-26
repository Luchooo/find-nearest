import { http, HttpResponse } from "msw";
import type { CityApi } from "../types";

const cities: CityApi[] = [
  {
    name: "Bogotá",
    country: "CO",
    lat: "4.6482784",
    lng: "-74.2726167",
  },
  {
    name: "Chía",
    country: "CO",
    lat: "4.864759",
    lng: "-74.0714468",
  },
  {
    name: "Soacha",
    country: "CO",
    lat: "4.5754472",
    lng: "-74.2342427",
  },
  {
    name: "Santa Marta",
    country: "CO",
    lat: "11.2404",
    lng: "-74.199",
  },
  {
    name: "Medellín",
    country: "CO",
    lat: "6.244203",
    lng: "-75.581212",
  },
  {
    name: "Cali",
    country: "CO",
    lat: "3.451646",
    lng: "-76.532051",
  },
  {
    name: "Pasto",
    country: "CO",
    lat: "1.2136",
    lng: "-77.2811",
  },
  {
    name: "Sopó",
    country: "CO",
    lat: "4.9083",
    lng: "-73.9394",
  },
  {
    name: "Envigado",
    country: "CO",
    lat: "6.1738",
    lng: "-75.5918",
  },
  {
    name: "Itagüí",
    country: "CO",
    lat: "6.1845",
    lng: "-75.6114",
  },
  {
    name: "Sabaneta",
    country: "CO",
    lat: "6.1522",
    lng: "-75.6167",
  },
];

export const handlers = [
  http.get(`https://api.npoint.io/b07d3581cb7c33e28418`, () => {
    return HttpResponse.json(cities);
  }),
];
