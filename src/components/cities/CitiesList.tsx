import { Card, List } from "@tremor/react";
import { CityApi } from "../../types";
import { VirtualList } from "../VirtualList";

interface CitiesListProps {
  cities: CityApi[];
  handleCity: (citySelect: CityApi) => void;
  city: CityApi | undefined;
}

export const CitiesList = ({ cities, handleCity, city }: CitiesListProps) => {
  const handleClick = (city: CityApi) => {
    handleCity(city);
  };

  return (
    <Card>
      <h3 className="dark:text-dark-tremor-content-strong font-medium">
        List of cities
      </h3>
      <List className="mt-2">
        {cities.length === 0 && <span>Empty list</span>}
        {cities.length > 0 && (
          <VirtualList {...{ cities, handleClick, city }} />
        )}
      </List>
    </Card>
  );
};
