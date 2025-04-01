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

const isStringArray = (value: unknown): value is string[] => {
  return (
    Array.isArray(value) &&
    value.every((keyword) => typeof keyword === "string")
  );
};

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

    const newHistory = [keyword, ...history.slice(0, 7)];
    handleHistory(newHistory);
    onSearch?.(keyword);
  };

  const handleRemove = (keyword: string) => {
    const newHistory = history.filter((history) => history !== keyword);
    handleHistory(newHistory);
  };

  const handleHistorySelect = (keyword: string) => {
    onSearch?.(keyword);
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
    keyword,
    histories: history,

    onSubmit: handleSubmit,
    onInputChange: handleChange,
    onHistorySelect: handleHistorySelect,
    onHistoryRemove: handleRemove,
  };

  return <SearchView ref={searchBoxRef} {...viewProps} />;
};

export default Search;
