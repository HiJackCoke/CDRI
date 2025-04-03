import styled, { css } from "styled-components";
import Icon from "./Icon";

interface Props {
  content: string;
}
const NoData = ({ content }: Props) => {
  return (
    <Container>
      <Icon icon="no_data" width={5} height={5} />
      <Description>{content}</Description>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 220px 40px;
  gap: 24px;
`;

const Description = styled.p`
  ${({ theme }) => css`
    ${theme.Caption};
    color: ${theme.Text.Secondary};
  `}
`;

export default NoData;
