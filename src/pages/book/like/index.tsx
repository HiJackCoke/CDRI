import { useEffect, useState } from "react";
import BookList from "../../../components/BookList";
import { BookData } from "../../../components/BookList/type";

const Like = () => {
  const [page, setPage] = useState(1);
  const [likeList, setLikeList] = useState<BookData[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("like-list");

    if (storage) {
      const likeList = JSON.parse(storage);
      setLikeList(likeList);
    }
  }, []);

  const getPaginatedList = () => {
    const itemsPerPage = 10;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return likeList.slice(startIndex, endIndex);
  };

  return (
    <>
      <BookList
        isLike
        bookData={getPaginatedList()}
        totalCount={likeList.length}
        onPaginateTo={setPage}
      />
    </>
  );
};

export default Like;
