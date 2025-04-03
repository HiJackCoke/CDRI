import { useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { Response } from "../../models/kakao/book";

type Props = Pick<
  Response["documents"][number],
  "title" | "authors" | "price" | "thumbnail"
>;
const BookListItem = ({ title, price, thumbnail, authors }: Props) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleDetailClick = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  return (
    <Container>
      <img src={thumbnail} alt={title} />
      <ContentWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <Author>{authors.join(", ")}</Author>
        </TitleWrapper>
        <OtherWrapper>
          <Price>{price.toLocaleString()}원</Price>
          <ButtonGroup>
            <StyledButton>구매하기</StyledButton>
            <DetailButton onClick={handleDetailClick}>
              상세보기
              <img src="/images/arrow-icon.svg" alt="arrow" />
            </DetailButton>
          </ButtonGroup>
        </OtherWrapper>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  background: ${theme.Palette.White};

  display: flex;
  align-items: center;
  gap: 48px;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  > img {
    width: 48px;
    aspect-ratio: 48/68;
    margin-left: 32px;

    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  ${theme.Title3};
  color: ${theme.Palette.Black};
  margin: 0;
`;

const Author = styled.span`
  ${theme.Body2};
  color: ${theme.Palette.Gray};
`;

const OtherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
`;

const Price = styled.div`
  ${theme.Title3};
  color: ${theme.Palette.Black};
  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  ${({ theme }) => css`
    background: ${theme.Palette.Primary};
    ${theme.Caption};
    color: ${theme.Palette.White};
  `}

  &:hover {
    opacity: 0.9;
  }
`;

const DetailButton = styled(StyledButton)`
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    background: ${theme.Palette.LightGray};
    color: ${theme.Text.Secondary};
    &:hover {
      background: ${theme.Palette.Gray};
      color: ${theme.Palette.White};
    }
  `}

  img {
    width: 14px;
  }
`;

export default BookListItem;
