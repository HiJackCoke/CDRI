import { useEffect, useRef, useState } from "react";

import BookListItemDetail, { DetailProps } from "./Detail";
import styled, { css } from "styled-components";
import { ButtonGroup, Price, StyledButton } from "./styled";
import Icon from "../Icon";
import { BookData } from "./type";

type Props = Pick<
  BookData,
  "isbn" | "title" | "authors" | "price" | "thumbnail"
> &
  DetailProps & {
    isLike: boolean;
    expanded: boolean;
    onExpand?: (isbn: string) => void;
    onLike?: (bookData: BookData) => void;
  };

const BookListItem = ({
  isLike,
  expanded,
  onExpand,
  onLike,

  ...props
}: Props) => {
  const { isbn, title, sale_price, price, thumbnail, authors, contents } =
    props;
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
      <ThumbnailWrapper>
        <LikeButton $isLiked={isLike} onClick={() => onLike?.(props)}>
          <Icon icon={isLike ? "like" : "unlike"} />
        </LikeButton>
        <Thumbnail src={thumbnail || "/"} alt={title} />
      </ThumbnailWrapper>

      <ContentWrapper>
        <Content>
          <InfoWrapper>
            <TitleWrapper>
              <Title>{title}</Title>
              <Author>{authors.join(", ")}</Author>
            </TitleWrapper>
            <ListPrice>{price.toLocaleString()}원</ListPrice>
          </InfoWrapper>

          <ButtonGroup>
            <BuyButton>구매하기</BuyButton>
            <DetailButton $isOpen={expanded} onClick={handleExpand}>
              상세보기
              <Icon icon="arrow-down" />
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

const ListPrice = styled(Price)``;

const LikeButton = styled.button<{ $isLiked: boolean }>`
  cursor: pointer;

  transition: transform 0.3s ease-in-out;
  transform-origin: center right;

  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;

  ${({ theme, $isLiked }) =>
    css`
      color: ${$isLiked ? theme.Red : theme.Palette.White};
    `}
`;

const ThumbnailWrapper = styled.div`
  position: relative;
`;

const Thumbnail = styled.img`
  transition: all 0.3s ease-in-out;

  max-width: 48px;
  min-width: 48px;

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

    span {
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
        min-width: 210px;
        max-width: 210px;
        max-height: 100%;
        aspect-ratio: 210/280;
      }

      ${BuyButton} {
        opacity: 0;
        pointer-events: none;
      }

      ${ListPrice} {
        opacity: 0;
        pointer-events: none;
      }

      ${LikeButton} {
        transform: scale(1.5);
      }
    `}
`;
