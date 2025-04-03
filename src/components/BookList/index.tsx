import { Fragment, useMemo, useState } from "react";

import Accordion from "../Accordion";
import BookListItem from "./Item";
import styled, { css } from "styled-components";

import { Response } from "../../models/kakao/book";
import PaginationGroup from "../PaginationGroup";
import { PaginationGroupProps } from "../PaginationGroup/type";
import NoData from "./NoData";

interface Props {
  data?: Response;
  onPaginateTo: PaginationGroupProps["onPaginateTo"];
}

const BookList = ({ data, onPaginateTo }: Props) => {
  const [page, setPage] = useState(1);
  const [openedBook, setOpenedBook] = useState<string[]>([]);

  const totalPage = useMemo(
    () => Math.ceil((data?.meta.total_count || 0) / 10),
    [data?.meta.total_count]
  );

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

  if (!data) return <NoData />;

  return (
    <>
      <Container>
        <ResultWrapper>
          <span>도서 검색 결과</span>{" "}
          <span>
            총 <strong>{data.meta.total_count}</strong>건
          </span>
        </ResultWrapper>
        {data.documents.map(
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
                    expanded={isOpen}
                    isbn={isbn}
                    title={title}
                    price={price}
                    sale_price={sale_price}
                    thumbnail={thumbnail}
                    authors={authors}
                    contents={contents}
                    onExpand={handleDetailClick}
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
