import BookList from "../../../components/BookList";

import Search from "../../../components/Search";
import { useKakaoBookList } from "../../../services/kakao/useKakaoService";
import { useState } from "react";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useKakaoBookList({ query: "밀", page });

  if (!data?.data || isLoading) return <span>loading</span>;

  return (
    <>
      <Search />
      <BookList data={data.data} onPaginateTo={setPage} />
    </>
  );
};

export default SearchPage;
