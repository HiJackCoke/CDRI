import BookList from "../../../components/BookList";
import Search from "../../../components/Search";
import { useKakaoBookList } from "../../../services/kakao/useKakaoService";

const SearchPage = () => {
  const { data } = useKakaoBookList({ query: "밀" });

  if (!data?.data) return <span>loading</span>;

  return (
    <>
      <Search />
      <BookList data={data.data} />
    </>
  );
};

export default SearchPage;
