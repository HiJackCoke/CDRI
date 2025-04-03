import { useEffect, useRef, useState } from "react";

import { Response } from "../../models/kakao/book";

import BookListItemDetail, { DetailProps } from "./Detail";
import styled, { css } from "styled-components";
import { ButtonGroup, Price, StyledButton } from "./styled";

type Props = Pick<
  Response["documents"][number],
  "isbn" | "title" | "authors" | "price" | "thumbnail"
> &
  DetailProps & {
    expanded: boolean;
    onExpand?: (isbn: string) => void;
  };

const BookListItem = ({
  expanded,
  isbn,
  title,
  sale_price,
  price,
  thumbnail,
  authors,
  contents,

  onExpand,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      const contentHeight = ref.current.scrollHeight;

      setHeight(contentHeight);
    }
  }, [ref]);

  const handleExpand = () => {
    onExpand?.(isbn);
  };

  return (
    <Container ref={ref} $height={height} $isOpen={expanded}>
      <Thumbnail src={thumbnail} alt={title} />

      <ContentWrapper>
        <Content>
          <InfoWrapper>
            <TitleWrapper>
              <Title>{title}</Title>
              <Author>{authors.join(", ")}</Author>
            </TitleWrapper>
            <Price>{price.toLocaleString()}원</Price>
          </InfoWrapper>

          <ButtonGroup>
            <BuyButton>구매하기</BuyButton>
            <DetailButton $isOpen={expanded} onClick={handleExpand}>
              상세보기
              <img src="/images/arrow-icon.svg" alt="arrow" />
            </DetailButton>
          </ButtonGroup>
        </Content>

        <BookListItemDetail
          price={price}
          sale_price={sale_price}
          contents={contents}
        />
      </ContentWrapper>
    </Container>
  );
};

export default BookListItem;

const Thumbnail = styled.img`
  transition: all 0.3s ease-in-out;

  max-width: 48px;
  max-height: 68px;

  aspect-ratio: 48/68;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-block: 11px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  margin: 0;

  ${({ theme }) => css`
    ${theme.Title3};
    color: ${theme.Palette.Black};
  `}
`;

const Author = styled.span`
  ${({ theme }) => css`
    ${theme.Body2};
    color: ${theme.Palette.Gray};
  `}
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  width: 100%;
`;

const BuyButton = styled(StyledButton)`
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
`;

const DetailButton = styled(StyledButton)<{ $isOpen: boolean }>`
  align-items: center;
  justify-content: space-between;
  ${({ theme, $isOpen }) => css`
    background: ${theme.Palette.LightGray};
    color: ${theme.Text.Secondary};

    img {
      width: 14px;
      height: 8px;
      transition: transform 0.3s ease-in-out;
      transform: rotate(${$isOpen ? "180deg" : "0deg"});
    }

    &:hover {
      background: ${theme.Palette.Gray};
      color: ${theme.Palette.White};
    }
  `}
`;

const Container = styled.div<{ $height: number; $isOpen: boolean }>`
  background: ${({ theme }) => theme.Palette.White};

  display: flex;
  align-items: start;

  gap: 48px;
  width: 100%;
  height: ${({ $height }) => ($height ? `${$height}px` : "auto")};
  padding: 16px;

  border-radius: 16px;

  ${Content} {
    margin-bottom: 1px;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      ${Content} {
        margin-bottom: 0px;
      }

      ${Thumbnail} {
        max-width: 210px;
        max-height: 100%;
      }

      ${BuyButton} {
        opacity: 0;
        pointer-events: none;
      }
    `}
`;
