import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

const Price = styled.span`
  ${({ theme }) => css`
    ${theme.Title3};
    color: ${theme.Text.Primary};
  `}

  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  /* min-width: 240px; */
  min-width:  240px;
  display: flex;
  gap: 8px;
  margin-left: 56px;
`;

export { Price, StyledButton, ButtonGroup };
