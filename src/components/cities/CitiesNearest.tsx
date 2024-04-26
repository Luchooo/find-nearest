import { Card } from "@tremor/react";
import { useCitiesNearest } from "../../hooks/cities/useCitiesNearest";
import { CityApi, Coord } from "../../types";

interface CitiesNearestProps {
  city: CityApi | undefined;
  allCoords: Coord[];
}

export const CitiesNearest = ({ city, allCoords }: CitiesNearestProps) => {
  const citiesNearest = useCitiesNearest(city, allCoords);
  if (!city) return <h1>Select a city</h1>;

  return (
    <Card>
      <h1 className="dark:text-dark-tremor-content-strong font-medium mb-4">
        Nearby Cities from {city.name}
      </h1>
      {citiesNearest &&
        citiesNearest.map(({ name }) => (
          <ul key={name} className={"flex flex-col gap-4"}>
            <li>🌎 {name}</li>
          </ul>
        ))}
    </Card>
  );
};
