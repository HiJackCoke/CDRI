import { ChangeEventHandler, FormEventHandler, ForwardedRef } from "react";

type SearchEventHandler = (keyword: string) => void;

export type SearchViewProps = {
  ref: ForwardedRef<HTMLDivElement>;
  histories: string[];
  keyword: string;
  showDetail: boolean;

  onSubmit: FormEventHandler<HTMLFormElement>;

  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onHistorySelect: SearchEventHandler;
  onHistoryRemove: SearchEventHandler;
  onDetailShow: (show: boolean) => void;
};

export type SearchProps = {
  onSearch: SearchEventHandler;
};
