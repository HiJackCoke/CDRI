import BookList from "../../../components/BookList";

import Search from "../../../components/Search";
import { Params } from "../../../models/kakao/book";
import { useKakaoBookList } from "../../../services/kakao/useKakaoService";
import { useState } from "react";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [target, setTarget] = useState<Params["target"]>("title");

  const { data } = useKakaoBookList({ query, page, target });

  const handleFilterChange = (filter: string, keyword: string) => {
    setTarget(filter as Params["target"]);
    setQuery(keyword);
  };

  return (
    <>
      <Search onSearch={setQuery} onFilterChange={handleFilterChange} />
      <BookList
        bookData={data?.data.documents}
        totalCount={data?.data.meta.pageable_count}
        onPaginateTo={setPage}
      />
    </>
  );
};

export default SearchPage;
