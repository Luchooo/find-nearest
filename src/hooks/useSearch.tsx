import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const handleSearch = (inputText: string) => {
    setSearch(inputText);
  };

  return { debouncedSearch, handleSearch };
};
