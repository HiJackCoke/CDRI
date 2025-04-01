import { ChangeEventHandler, FormEventHandler } from "react";

export interface SearchViewProps {
  histories: string[];
  keyword: string;

  onSearch: FormEventHandler<HTMLFormElement>;

  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onHistorySelect: (item: string) => void;
  onHistoryRemove: (item: string) => void;
}
