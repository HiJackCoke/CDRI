import {
  Container,
  PrevButtonWrapper,
  NextButtonWrapper,
  StyledButton,
} from "./styled";

import Icon from "../Icon";

import { PaginationGroupViewProps } from "./type";

const PaginationGroupView = ({
  page,
  totalPage,
  children,
  onPrev,
  onNext,
  onFirst,
  onLast,
}: PaginationGroupViewProps) => {
  return (
    <Container>
      <PrevButtonWrapper>
        <StyledButton disabled={page === 1} onClick={onFirst}>
          <Icon icon="arrow_first" />
        </StyledButton>
        <StyledButton disabled={page === 1} onClick={onPrev}>
          <Icon icon="arrow_left" />
        </StyledButton>
      </PrevButtonWrapper>
      {children}
      <NextButtonWrapper>
        <StyledButton disabled={page === totalPage} onClick={onNext}>
          <Icon icon="arrow_right" />
        </StyledButton>
        <StyledButton disabled={page === totalPage} onClick={onLast}>
          <Icon icon="arrow_last" />
        </StyledButton>
      </NextButtonWrapper>
    </Container>
  );
};

export default PaginationGroupView;
