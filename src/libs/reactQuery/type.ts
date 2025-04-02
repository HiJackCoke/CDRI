import { QueryKey } from "@tanstack/react-query";

export interface QueryProps<ResponseType = unknown> {
  queryKey: QueryKey;
  queryFn: () => Promise<ResponseType>;
}
