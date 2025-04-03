import styled, { css } from "styled-components";

export const DropdownBox = styled.ul<{ $isOpen: boolean }>`
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  z-index: 1;
  position: absolute;
  width: 100%;

  top: calc(100% + 6px);
  left: 0;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      transform: scaleY(1);
    `}

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.Palette.White};
`;

export const DropdownItem = styled.li`
  transition: background-color 0.3s;
  position: relative;

  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.Palette.LightGray};
  }
`;

export const DropdownText = styled.span`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    ${theme.Body2};
    color: ${theme.Text.Subtitle};
  `}
`;
