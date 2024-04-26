import List from "react-virtualized/dist/commonjs/List";
import { CityApi } from "../types";
import { VirtualListItem } from "./VirtualListItem";

interface VirtualListProps {
  cities: CityApi[];
  handleClick: (city: CityApi) => void;
  city: CityApi | undefined;
}

export const VirtualList = ({
  cities,
  handleClick,
  city,
}: VirtualListProps) => {
  return (
    <List
      width={290}
      height={400}
      rowCount={cities.length}
      rowHeight={40}
      rowRenderer={({ index, style }) => (
        <VirtualListItem
          key={index}
          style={style}
          handleClick={handleClick}
          city={cities[index]}
          citySelected={city}
        />
      )}
    />
  );
};
