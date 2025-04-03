import React, { useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";

interface BookListItemProps {
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  description: string;
  publishDate: string;
  publisher: string;
  isbn: string;
  onBuyClick: () => void;
}

const BookListItem: React.FC<BookListItemProps> = ({
  title,
  author,
  price,
  imageUrl,
  description = "",
  publishDate = "",
  publisher = "",
  isbn = "",
  onBuyClick,
}) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleDetailClick = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  return (
    <Container>
      <img src={imageUrl} alt={title} />
      <ContentWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </TitleWrapper>
        <OtherWrapper>
          <Price>{price.toLocaleString()}원</Price>
          <ButtonGroup>
            <StyledButton onClick={onBuyClick}>구매하기</StyledButton>
            <DetailButton onClick={handleDetailClick}>
              상세보기
              <img src="/images/arrow-icon.svg" alt="arrow" />
            </DetailButton>
          </ButtonGroup>
        </OtherWrapper>
      </ContentWrapper>
      {/* <Accordion isOpen={isDetailOpen}>
        <DetailContent>
          <DetailSection>
            <DetailTitle>도서 소개</DetailTitle>
            <DetailText>{description}</DetailText>
          </DetailSection>
          <DetailSection>
            <DetailTitle>도서 정보</DetailTitle>
            <DetailGrid>
              <DetailLabel>출간일</DetailLabel>
              <DetailValue>{publishDate}</DetailValue>
              <DetailLabel>출판사</DetailLabel>
              <DetailValue>{publisher}</DetailValue>
              <DetailLabel>ISBN</DetailLabel>
              <DetailValue>{isbn}</DetailValue>
            </DetailGrid>
          </DetailSection>
        </DetailContent>
      </Accordion> */}
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
    min-width: 48px;
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
    color: ${theme.Palette.Gray};
    &:hover {
      background: ${theme.Palette.Gray};
      color: ${theme.Palette.White};
    }
  `}

  img {
    width: 14px;
  }
`;

const DetailContent = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DetailTitle = styled.h4`
  ${theme.Title3};
  color: ${theme.Palette.Black};
  margin: 0;
`;

const DetailText = styled.p`
  ${theme.Body2};
  color: ${theme.Palette.Gray};
  margin: 0;
  white-space: pre-wrap;
  line-height: 1.6;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 12px 24px;
`;

const DetailLabel = styled.span`
  ${theme.Body2};
  color: ${theme.Palette.Gray};
`;

const DetailValue = styled.span`
  ${theme.Body2};
  color: ${theme.Palette.Black};
`;

export default BookListItem;
