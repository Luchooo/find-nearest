import { CitiesList } from "../components/cities/CitiesList";
import { CitiesNearest } from "../components/cities/CitiesNearest";
import { CitiesSearch } from "../components/cities/CitiesSelector";
import { useCities } from "../hooks/cities/useCities";
import { useCitySelected } from "../hooks/cities/useCitySelected";
import { useSearch } from "../hooks/useSearch";

export const CitiesPage = () => {
  const { search, handleSearch } = useSearch();
  const { cities, allCoords, isLoading, isError } = useCities(search);
  const { city, handleCity } = useCitySelected();

  if (isError) return <p>Error al cargar las ciudades</p>;
  if (isLoading) return <p>Cargando...</p>;

  return (
    <section className="flex flex-col gap-4 mx-auto w-80 max-w-md">
      <CitiesSearch {...{ handleSearch, search }} />
      <CitiesList {...{ cities, handleCity, city }} />
      <CitiesNearest {...{ city, allCoords }} />
    </section>
  );
};
