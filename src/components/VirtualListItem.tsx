import { ListItem } from "@tremor/react";
import { CityApi } from "../types";

interface VirtualListItemProps {
  style: React.CSSProperties;
  city: CityApi;
  handleClick: (city: CityApi) => void;
  citySelected: CityApi | undefined;
}

export const VirtualListItem = ({
  style,
  handleClick,
  city,
  citySelected,
}: VirtualListItemProps) => {
  return (
    <ListItem
      style={style}
      className={`p-4 hover:cursor-pointer hover:bg-slate-500 dark:hover:text-white ${
        city?.name === citySelected?.name ? "dark:bg-slate-500/40" : ""
      }`}
      onClick={() => handleClick(city)}
    >
      <span>{city?.name}</span>
    </ListItem>
  );
};
