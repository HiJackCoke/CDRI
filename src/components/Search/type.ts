import { ChangeEventHandler, FormEventHandler, ForwardedRef } from "react";
type SearchEventHandler = (keyword: string) => void;
type FilterEventHandler<T extends unknown> = (
  filter: T,
  keyword: string
) => void;

export interface SearchViewProps<T extends unknown> {
  ref: ForwardedRef<HTMLDivElement>;
  histories: string[];
  keyword: string;

  onSubmit: FormEventHandler<HTMLFormElement>;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onHistorySelect: SearchEventHandler;
  onHistoryRemove: SearchEventHandler;
  onFilterChange: FilterEventHandler<T>;
}

export interface SearchProps<T extends unknown> {
  onSearch: SearchEventHandler;
  onFilterChange: FilterEventHandler<T>;
}

export interface SearchDetailProps<T extends unknown> {
  onSearch: FilterEventHandler<T>;
}
