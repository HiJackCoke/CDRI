import { Fragment, useEffect, useMemo, useState } from "react";

import Accordion from "../Accordion";
import BookListItem from "./Item";
import styled, { css } from "styled-components";

import PaginationGroup from "../PaginationGroup";
import { PaginationGroupProps } from "../PaginationGroup/type";
import NoData from "../NoData";

import { isBookData } from "./utils";
import { BookData } from "./type";

interface Props {
  isLike?: boolean;
  bookData?: BookData[];
  totalCount?: number;

  onPaginateTo: PaginationGroupProps["onPaginateTo"];
}

const BookList = ({
  isLike = false,
  bookData,
  totalCount = 0,

  onPaginateTo,
}: Props) => {
  const [page, setPage] = useState(1);
  const [openedBook, setOpenedBook] = useState<string[]>([]);
  const [likeList, setLikeList] = useState<BookData[]>([]);

  const totalPage = useMemo(() => Math.ceil(totalCount / 10), [totalCount]);

  useEffect(() => {
    const storage = localStorage.getItem("like-list");

    if (storage) {
      const likeList = JSON.parse(storage);
      if (Array.isArray(likeList) && likeList.every(isBookData)) {
        setLikeList(likeList);
      }
    }
  }, []);

  const handleLike = (bookData: BookData) => {
    const isLiked = likeList.some((like) => like.isbn === bookData.isbn);

    let newLikeList: BookData[] = [];
    if (isLiked) {
      newLikeList = likeList.filter((like) => like.isbn !== bookData.isbn);
    } else {
      newLikeList = [...likeList, bookData];
    }

    setLikeList(newLikeList);
    localStorage.setItem("like-list", JSON.stringify(newLikeList));
  };

  const handleDetailClick = (isbn: string) => {
    if (openedBook.includes(isbn)) {
      setOpenedBook((prev) => prev.filter((openedIsBn) => openedIsBn !== isbn));
    } else {
      setOpenedBook((prev) => [...prev, isbn]);
    }
  };

  const handlePageChange = (index: number) => {
    setPage(index);
    onPaginateTo(index);
  };

  if (!bookData?.length)
    return (
      <Container>
        <ResultWrapper>
          <span>{isLike ? "찜한 책" : "도서 검색 결과"}</span>{" "}
          <span>
            총 <strong>{0}</strong>건
          </span>
        </ResultWrapper>
        <NoData
          content={isLike ? "찜한 책이 없습니다." : "검색된 결과가 없습니다."}
        />
      </Container>
    );

  return (
    <>
      <Container>
        <ResultWrapper>
          <span>도서 검색 결과</span>{" "}
          <span>
            총 <strong>{totalCount}</strong>건
          </span>
        </ResultWrapper>
        {bookData.map(
          ({
            isbn,
            title,
            price,
            sale_price,
            thumbnail,
            authors,
            contents,
          }) => {
            const isOpen = openedBook.includes(isbn);
            return (
              <Fragment key={isbn}>
                <Accordion isOpen={isOpen} defaultHeight={100}>
                  <BookListItem
                    isLike={likeList.some((like) => like.isbn === isbn)}
                    expanded={isOpen}
                    isbn={isbn}
                    title={title}
                    price={price}
                    sale_price={sale_price}
                    thumbnail={thumbnail}
                    authors={authors}
                    contents={contents}
                    onExpand={handleDetailClick}
                    onLike={handleLike}
                  />
                </Accordion>

                <Divider />
              </Fragment>
            );
          }
        )}
      </Container>
      <PaginationGroup
        page={page}
        totalPage={totalPage}
        onPaginateTo={handlePageChange}
      />
    </>
  );
};

export default BookList;

const Container = styled.div`
  margin-block: 24px;
`;
const ResultWrapper = styled.div`
  margin-bottom: 36px;

  ${({ theme }) => css`
    ${theme.Caption};
    color: ${theme.Text.Primary};

    strong {
      color: ${theme.Palette.Primary};
    }
  `}
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #d2d6da;
`;
