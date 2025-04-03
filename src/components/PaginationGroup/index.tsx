import {
  Container,
  PrevButtonWrapper,
  NextButtonWrapper,
  StyledButton,
} from "./style";

import Icon from "../Icon";
import { PaginationGroupProps } from "./type";

const PaginationGroup = ({
  page,
  totalPage,
  onPaginateTo,
}: PaginationGroupProps) => {
  const VISIBLE_PAGE_COUNT = 5;
  const start =
    Math.floor((page - 1) / VISIBLE_PAGE_COUNT) * VISIBLE_PAGE_COUNT;
  const end = Math.ceil(page / VISIBLE_PAGE_COUNT) * VISIBLE_PAGE_COUNT;

  const handleFirstButtonClick = () => {
    if (page === 1) {
      return;
    }
    onPaginateTo(1);
  };

  const handlePrevButtonClick = () => {
    if (page === 1) {
      return;
    }
    onPaginateTo(page - 1);
  };

  const handleNextButtonClick = () => {
    if (page === totalPage) {
      return;
    }
    onPaginateTo(page + 1);
  };

  const handleLastButtonClick = () => {
    if (page === totalPage) {
      return;
    }
    onPaginateTo(totalPage);
  };

  const handlePageButtonClick = (index: number) => () => onPaginateTo(index);

  const pages = Array(totalPage)
    .fill(null)
    .map((_, i) => i + 1)
    .map((index) => (
      <StyledButton
        key={`paginate-${index}`}
        $isSelected={index === page}
        onClick={handlePageButtonClick(index)}
      >
        {index}
      </StyledButton>
    ))
    .slice(start, end);

  return (
    <Container>
      <PrevButtonWrapper>
        <StyledButton disabled={page === 1} onClick={handleFirstButtonClick}>
          <Icon icon="arrow_first" />
        </StyledButton>
        <StyledButton disabled={page === 1} onClick={handlePrevButtonClick}>
          <Icon icon="arrow_left" />
        </StyledButton>
      </PrevButtonWrapper>
      {pages}
      <NextButtonWrapper>
        <StyledButton
          disabled={page === totalPage}
          onClick={handleNextButtonClick}
        >
          <Icon icon="arrow_right" />
        </StyledButton>
        <StyledButton
          disabled={page === totalPage}
          onClick={handleLastButtonClick}
        >
          <Icon icon="arrow_last" />
        </StyledButton>
      </NextButtonWrapper>
    </Container>
  );
};

export default PaginationGroup;
