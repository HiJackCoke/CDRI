import BookListItem from "../../../components/BookListItem";
import Search from "../../../components/Search";
import { useKakaoBookList } from "../../../services/kakao/useKakaoService";

const SearchPage = () => {
  const { data } = useKakaoBookList({ query: "밀" });
  console.log(data?.data.documents);

  if (!data?.data) return <span>loading</span>;

  const { title, authors, price, thumbnail } = data.data.documents[0];

  return (
    <>
      <Search />
      <BookListItem
        title={title}
        authors={authors}
        price={price}
        thumbnail={thumbnail}
      />
    </>
  );
};

export default SearchPage;
