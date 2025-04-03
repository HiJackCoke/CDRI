import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 0;
`;
export const PrevButtonWrapper = styled.div`
  display: flex;

  margin-right: 20px;

  button {
    margin: 0;
    margin-left: 7px;
    padding: 0 2px;
  }
`;
export const NextButtonWrapper = styled.div`
  display: flex;

  margin-left: 20px;

  button {
    margin: 0;
    margin-right: 7px;
    padding: 0 2px;
  }
`;

export const StyledButton = styled.button<{
  $isSelected?: boolean;
}>`
  cursor: pointer;
  justify-items: center;
  transition: background-color 0.3s ease-in-out;
  width: 28px;
  height: 28px;
  margin: 0 7px;
  outline: none;

  border-radius: 50%;
  border: none;

  ${({ theme, $isSelected }) => css`
    color: ${theme.Text.Primary};
    background-color: ${$isSelected ? theme.Palette.Gray : "transparent"};

    &:disabled {
      pointer-events: none;
      color: ${theme.Palette.Gray};
    }

    &:hover {
      background-color: ${!$isSelected && theme.Palette.Gray};
    }
  `}
`;
