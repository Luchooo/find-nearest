import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { CitiesPage } from "../../pages/CitiesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapperApp = () => (
  <QueryClientProvider client={queryClient}>
    <CitiesPage />
  </QueryClientProvider>
);

describe("Pages", () => {
  afterEach(cleanup);

  test("<CitiesPage/> Render citites", async () => {
    render(wrapperApp());
    screen.getByText(/Cargando.../i, { selector: "p" });
    await screen.findByRole("heading", { level: 1, name: /Cities/i });
    const cities = screen.getAllByRole("listitem");
    expect(cities).toHaveLength(11);
  });

  test("<CitiesPage/> Use search", async () => {
    render(wrapperApp());
    await screen.findByRole("heading", { level: 1, name: /Cities/i });
    const inputSearch: HTMLInputElement =
      screen.getByPlaceholderText(/Search city.../i);
    fireEvent.change(inputSearch, { target: { value: "suba" } });
    await waitFor(() => {
      expect(inputSearch.value).toBe("suba");
    });
    screen.getByText(/Empty list/i, { selector: "span" });
  });

  test("<CitiesPage/> Empty list and clean search", async () => {
    render(wrapperApp());
    await screen.findByRole("heading", { level: 1, name: /Cities/i });
    const inputSearch: HTMLInputElement =
      screen.getByPlaceholderText(/Search city.../i);
    fireEvent.change(inputSearch, { target: { value: "suba" } });
    await waitFor(() => {
      expect(inputSearch.value).toBe("suba");
    });
    screen.getByText(/Empty list/i, { selector: "span" });
    fireEvent.change(inputSearch, { target: { value: "" } });
    await waitFor(() => {
      expect(inputSearch.value).toBe("");
    });
    const citiesNew = screen.getAllByRole("listitem");
    expect(citiesNew).toHaveLength(11);
  });

  test("<CitiesPage/> Select city", async () => {
    render(wrapperApp());
    await screen.findByRole("heading", { level: 1, name: /Cities/i });
    const cityElement = screen.getByText(/Bogotá/i, { selector: "span" });
    fireEvent.click(cityElement);
    await screen.findByRole("heading", {
      level: 1,
      name: /Nearby Cities from Bogotá/i,
    });
    screen.getByText(/🌎 Chía/i);
    screen.getByText(/🌎 Soacha/i);
    screen.getByText(/🌎 Sopó/i);
  });
});
