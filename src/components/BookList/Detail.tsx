import styled, { css } from "styled-components";
import { ButtonGroup, Price, StyledButton } from "./styled";

import { HTMLAttributes } from "react";
import { BookData } from "./type";

export type DetailProps = Pick<BookData, "price" | "sale_price" | "contents"> &
  HTMLAttributes<HTMLDivElement>;

const BookListItemDetail = ({
  price,
  sale_price,
  contents,
  ...props
}: DetailProps) => {
  return (
    <DetailContainer {...props}>
      <DetailSection>
        <DetailTitle>책 소개</DetailTitle>
        <DetailContent>{contents}</DetailContent>
      </DetailSection>
      <DetailPriceButtonWrapper>
        <PriceContainer>
          <PriceWrapper>
            <PriceInfo>원가</PriceInfo>
            <OriginPrice>{price.toLocaleString()}원</OriginPrice>
          </PriceWrapper>

          {sale_price > 0 && (
            <PriceWrapper>
              <PriceInfo>할인가</PriceInfo>

              <Price>{sale_price.toLocaleString()}원</Price>
            </PriceWrapper>
          )}
        </PriceContainer>

        <ButtonGroup>
          <FullWidthButton>구매하기</FullWidthButton>
        </ButtonGroup>
      </DetailPriceButtonWrapper>
    </DetailContainer>
  );
};

export default BookListItemDetail;

const FullWidthButton = styled(StyledButton)``;

const DetailContainer = styled.div`
  margin-block: 16px 24px;
  width: 100%;
  height: 100%;
  min-height: 186px;
  display: flex;
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const DetailTitle = styled.h4`
  margin: 0;

  ${({ theme }) => css`
    ${theme.Body2Bold};
    color: ${theme.Text.Primary};
  `}
`;

const DetailContent = styled.p`
  margin: 0;
  white-space: pre-wrap;

  ${({ theme }) => css`
    ${theme.Small};
    color: ${theme.Text.Primary};
  `}
`;

const OriginPrice = styled.span`
  ${({ theme }) => css`
    ${theme.Title3};
    color: ${theme.Text.Primary};
  `}
  /* text-decoration: line-through; */
  font-weight: normal;
  white-space: nowrap;
`;

const PriceWrapper = styled.div`
  display: grid;
  grid-template-columns: 37px 1fr;
  align-items: center;
  gap: 8px;

  &:has(+ div) {
    margin-bottom: 8px;
    ${OriginPrice} {
      text-decoration: line-through;
    }
  }
`;

const PriceInfo = styled.span`
  justify-self: end;
  ${({ theme }) => css`
    ${theme.Small};
    color: ${theme.Text.Subtitle};
  `}
`;

const DetailPriceButtonWrapper = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  align-self: end;
  gap: 28px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
