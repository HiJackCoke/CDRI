import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.Title2};
    color: #1a1e27;
  `}
`;

export const SearchArea = styled.div`
  display: flex;

  width: 100%;
  gap: 16px;

  ${({ theme }) => theme.Body2};
`;

export const SearchForm = styled.form`
  gap: 21px;

  display: flex;
  align-items: center;

  ${({ theme }) => css`
    ${theme.Caption};
    color: ${theme.Text.Subtitle};
    background-color: ${theme.Palette.LightGray};
  `}
`;

export const StyledInput = styled.input`
  padding: 0;
  flex: 1;
  border: none;
  background: transparent;

  ${({ theme }) => css`
    ${theme.Body2};
    &::placeholder {
      color: ${theme.Text.Subtitle};
    }
  `};

  &:focus {
    outline: none;
  }
`;

export const DetailButton = styled.button`
  transition: background-color 0.3s;

  margin-block: 5px;
  padding: 5px 10px;
  height: 40px;
  border-radius: 8px;

  cursor: pointer;

  ${({ theme }) => css`
    ${theme.Body2};
    background-color: ${theme.Palette.White};
    border: 1px solid ${theme.Text.Subtitle};
    color: ${theme.Text.Subtitle};

    &:hover {
      background-color: ${theme.Palette.LightGray};
    }
  `}
`;

export const SearchBox = styled.div<{ $historyLength: number }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 25px;

  padding: 10px;
  width: 100%;
  max-width: 480px;

  ${({ theme, $historyLength }) => css`
    background-color: ${theme.Palette.LightGray};

    &:focus-within {
      > div {
        margin-top: ${$historyLength > 0 ? "21px;" : 0};

        max-height: ${$historyLength * 50}px;
      }
    }
  `};
`;

export const HistoryWrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease, margin-top 0.3s ease;
  max-height: 0;
`;

export const SearchHistory = styled.ul`
  list-style: none;
  /* padding-inline: 51px 15px; */

  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const HistoryItem = styled.li`
  transition: background-color 0.3s;

  padding-inline: 51px 15px;

  padding-block: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => css`
    &:hover {
      background-color: ${theme.Palette.Gray};
    }
  `}
`;

export const RemoveButton = styled.button`
  transition: transform 0.2s;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;
