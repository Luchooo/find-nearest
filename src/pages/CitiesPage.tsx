import { CitiesList } from "../components/cities/CitiesList";
import { CitiesNearest } from "../components/cities/CitiesNearest";
import { CitiesSearch } from "../components/cities/CitiesSelector";
import { useCities } from "../hooks/cities/useCities";
import { useCitySelected } from "../hooks/cities/useCitySelected";
import { useSearch } from "../hooks/useSearch";

export const CitiesPage = () => {
  const { debouncedSearch, handleSearch } = useSearch();
  const { cities, allCoords, isLoading, isError } = useCities(debouncedSearch);
  const { city, handleCity } = useCitySelected();

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar las ciudades</div>;

  return (
    <section className="flex flex-col gap-4 mx-auto w-80 max-w-md">
      <CitiesSearch {...{ handleSearch }} />
      <CitiesList {...{ cities, handleCity, city }} />
      <CitiesNearest {...{ city, allCoords }} />
    </section>
  );
};
