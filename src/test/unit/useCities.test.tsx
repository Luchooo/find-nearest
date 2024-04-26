import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, test } from "vitest";
import { getCities } from "../../api/cities";
import type { CitiesFmOutput } from "../../types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export function useCities() {
  return useQuery<CitiesFmOutput>({
    queryKey: ["citites"],
    queryFn: getCities,
  });
}

describe("Customs hooks", () => {
  test("fetch useCitites", async () => {
    const { result } = renderHook(() => useCities(), { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.cities).toHaveLength(11);
  });
});
