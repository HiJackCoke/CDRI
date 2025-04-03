import { StyledButton } from "./styled";

import { PaginationGroupProps } from "./type";
import { useMemo } from "react";
import PaginationGroupView from "./View";
const VISIBLE_PAGE_COUNT = 5;

const PaginationGroup = ({
  page,
  totalPage,
  onPaginateTo,
}: PaginationGroupProps) => {
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

  const pages = useMemo(
    () =>
      Array(totalPage)
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
        .slice(start, end),
    [totalPage, start, end]
  );

  const viewProps = {
    page,
    totalPage,
    children: pages,
    onPrev: handlePrevButtonClick,
    onNext: handleNextButtonClick,
    onFirst: handleFirstButtonClick,
    onLast: handleLastButtonClick,
  };

  return <PaginationGroupView {...viewProps} />;
};

export default PaginationGroup;
