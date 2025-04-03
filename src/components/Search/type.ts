import { ChangeEventHandler, FormEventHandler, ForwardedRef } from "react";

type SearchEventHandler = (keyword: string) => void;

export type SearchViewProps = {
  ref: ForwardedRef<HTMLDivElement>;
  histories: string[];
  keyword: string;

  onSubmit: FormEventHandler<HTMLFormElement>;

  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onHistorySelect: SearchEventHandler;
  onHistoryRemove: SearchEventHandler;
};

export type SearchProps = {
  onSearch?: SearchEventHandler;
  // onSelect?: SearchEventHandler;
  // onDelete?: SearchEventHandler;
};
