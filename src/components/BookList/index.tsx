import { Fragment, useState } from "react";

import Accordion from "../Accordion";
import BookListItem from "./Item";
import styled from "styled-components";

import { Response } from "../../models/kakao/book";

interface Props {
  data?: Response;
}

const BookList = ({ data }: Props) => {
  const [openedBook, setOpenedBook] = useState<string[]>([]);

  const handleDetailClick = (isbn: string) => {
    if (openedBook.includes(isbn)) {
      setOpenedBook((prev) => prev.filter((openedIsBn) => openedIsBn !== isbn));
    } else {
      setOpenedBook((prev) => [...prev, isbn]);
    }
  };

  return data?.documents.map(
    ({ isbn, title, price, sale_price, thumbnail, authors, contents }) => {
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
  );
};

export default BookList;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #d2d6da;
`;
