import { ChangeEventHandler, FormEventHandler, ForwardedRef } from "react";

type SearchEventHandler = (keyword: string) => void;
type FilterEventHandler = (filter: string, keyword: string) => void;

export interface SearchViewProps {
  ref: ForwardedRef<HTMLDivElement>;
  histories: string[];
  keyword: string;

  onSubmit: FormEventHandler<HTMLFormElement>;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onHistorySelect: SearchEventHandler;
  onHistoryRemove: SearchEventHandler;
  onFilterChange: FilterEventHandler;
}

export interface SearchProps {
  onSearch: SearchEventHandler;
  onFilterChange: FilterEventHandler;
}

export interface SearchDetailProps {
  onSearch: FilterEventHandler;
}
