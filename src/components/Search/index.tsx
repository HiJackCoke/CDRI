import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import SearchView from "./View";
import { SearchViewProps } from "./type";

const Search = () => {
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const [keyword, setKeyword] = useState("");
  const [history, setHistory] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(keyword);
  };

  const handleRemove = (item: string) => {
    setHistory((prev) => prev.filter((h) => h !== item));
  };

  const handleHistorySelect = (item: string) => {
    console.log(item);
  };

  const viewProps: SearchViewProps = {
    keyword,
    histories: history,

    onSearch: handleSubmit,
    onInputChange: handleChange,
    onHistorySelect: handleHistorySelect,
    onHistoryRemove: handleRemove,
  };

  return <SearchView ref={searchBoxRef} {...viewProps} />;
};

export default Search;
