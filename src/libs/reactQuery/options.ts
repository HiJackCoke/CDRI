import {
  defaultShouldDehydrateQuery,
  keepPreviousData,
  Query,
  QueryClientConfig,
} from "@tanstack/react-query";

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 60,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    },
    dehydrate: {
      shouldDehydrateQuery: (query: Query) =>
        defaultShouldDehydrateQuery(query) || query.state.status === "pending",
    },
  },
};

export default queryClientOptions;
