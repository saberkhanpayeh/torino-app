"use client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import React from "react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      // staleTime: 1000 *60*60*1, //1 hour stale time and then refresh
      refetchOnWindowFocus: false,
      retry:1,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.sessionStorage,
});
persistQueryClient({
  queryClient,
  persister,
  dehydrateOptions: {
    shouldDehydrateQuery: (query) => {
      return query.meta?.persist === true; // فقط کوئری‌هایی که persist=true دارند ذخیره می‌شوند
    },
  },
});
function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
