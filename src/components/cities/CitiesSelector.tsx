import { RiSearchLine } from "@remixicon/react";
import { TextInput } from "@tremor/react";

interface CitiesSearchProps {
  handleSearch: (inputText: string) => void;
}

export const CitiesSearch = ({ handleSearch }: CitiesSearchProps) => {
  return (
    <section>
      <h1 className="mb-4 mt-8 text-center font-mono text-sm text-slate-500">
        Cities
      </h1>
      <form>
        <TextInput
          icon={RiSearchLine}
          placeholder="Search city..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </section>
  );
};
