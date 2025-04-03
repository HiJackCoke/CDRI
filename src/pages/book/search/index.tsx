import BookList from "../../../components/BookList";

import Search from "../../../components/Search";
import { useKakaoBookList } from "../../../services/kakao/useKakaoService";
import { useState } from "react";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const { data } = useKakaoBookList({ query, page });

  return (
    <>
      <Search onSearch={setQuery} />
      <BookList
        bookData={data?.data?.documents}
        totalCount={data?.data.meta.pageable_count}
        onPaginateTo={setPage}
      />
    </>
  );
};

export default SearchPage;
