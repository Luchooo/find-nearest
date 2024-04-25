import { SearchSelect, SearchSelectItem } from "@tremor/react";

export const App = () => {
  return (
    <div className="mx-auto max-w-xs">
      <div className="mb-4 mt-8 text-center font-mono text-sm text-slate-500">
        Select city
      </div>
      <SearchSelect>
        <SearchSelectItem value="1">Option 1</SearchSelectItem>
        <SearchSelectItem value="2">Option 2</SearchSelectItem>
        <SearchSelectItem value="3">Option 3</SearchSelectItem>
      </SearchSelect>
    </div>
  );
};
