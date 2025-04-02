import Search from "../../../components/Search";
import { useKakaoBookList } from "../../../services/kakao/useKakaoService";

const SearchPage = () => {
  const { data } = useKakaoBookList({ query: "밀" });
  console.log(data?.data.documents);

  return (
    <>
      <Search />
    </>
  );
};

export default SearchPage;
