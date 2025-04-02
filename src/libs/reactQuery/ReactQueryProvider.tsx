import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState } from "react";
import type { ReactNode } from "react";
import queryClientOptions from "./options";

interface Props {
  children: ReactNode;
}

const ReactQueryProvider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
