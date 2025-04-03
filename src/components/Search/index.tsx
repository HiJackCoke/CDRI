import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import SearchView from "./View";
import { SearchProps, SearchViewProps } from "./type";
import { isStringArray, moveToFirst } from "./utils";

const Search = ({ onSearch }: SearchProps) => {
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const [keyword, setKeyword] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  const handleHistory = useCallback((newHistory: typeof history) => {
    localStorage.setItem("search-history", JSON.stringify(newHistory));
    setHistory(newHistory);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSearch?.(keyword);

    if (history.includes(keyword)) {
      const newHistory = moveToFirst(history, keyword);
      handleHistory(newHistory);
    } else {
      const newHistory = [keyword, ...history.slice(0, 7)];
      handleHistory(newHistory);
    }
  };

  const handleRemove = (keyword: string) => {
    const newHistory = history.filter((history) => history !== keyword);
    handleHistory(newHistory);
  };

  const handleHistorySelect = (keyword: string) => {
    onSearch?.(keyword);
    setKeyword(keyword);
    const newHistory = moveToFirst(history, keyword);

    handleHistory(newHistory);
  };

  useEffect(() => {
    const storage = localStorage.getItem("search-history");

    if (storage) {
      const history = JSON.parse(storage);

      if (isStringArray(history)) {
        setHistory(history);
      }
    }
  }, []);

  const viewProps: SearchViewProps = {
    ref: searchBoxRef,
    keyword,
    histories: history,

    onSubmit: handleSubmit,
    onInputChange: handleChange,
    onHistorySelect: handleHistorySelect,
    onHistoryRemove: handleRemove,
  };

  return <SearchView {...viewProps} />;
};

export default Search;
