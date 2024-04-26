import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (inputText: string) => {
    setSearch(inputText);
  };

  return { search, handleSearch };
};
