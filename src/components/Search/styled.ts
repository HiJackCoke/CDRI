import styled, { css } from "styled-components";
import Icon from "../Icon";

export const Container = styled.div`
  position: relative;
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

export const PopupContainer = styled.div<{ $isOpen: boolean }>`
  transition: opacity 0.3s;
  opacity: 0;
  position: absolute;
  top: calc(100% + 8px);
  left: 354.45px;
  padding: 36px 24px;
  width: 360px;

  background: ${({ theme }) => theme.Palette.White};
  box-shadow: 0px 4px 14px 6px rgba(151, 151, 151, 0.15);
  border-radius: 8px;

  ${({ theme, $isOpen }) => css`
    background: ${theme.Palette.White};

    ${$isOpen &&
    css`
      opacity: 1;
    `}
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  margin: 0;
  padding: 0;

  right: 8px;
  top: 8px;
  cursor: pointer;
`;

export const FilterSelect = styled.div`
  cursor: pointer;
  position: relative;
  width: 100px;
  height: 36px;

  margin-right: 4px;
  padding: 9px 8px;
  align-content: center;

  border-bottom: 1px solid #d2d6da;
`;

export const FilterLabel = styled.span`
  ${({ theme }) => css`
    ${theme.Body2};
    color: ${theme.Text.Primary};
  `}
`;

export const ArrowIcon = styled(Icon)`
  padding: 5px;
  position: absolute;

  right: 4px;
  top: 8px;
  color: #b1b8c0;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const SearchInput = styled.div`
  position: relative;
  width: 208px;
  height: 36px;

  ${({ theme }) => css`
    ${theme.Body2};

    border-bottom: 1px solid ${({ theme }) => theme.Palette.Primary};
    color: ${theme.Text.Subtitle};

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;

      padding: 8px;
    }
  `}
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 312px;
  height: 36px;

  border-radius: 8px;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.Body2};

    background: ${theme.Palette.Primary};
    span {
      color: ${theme.Palette.White};
    }
  `}
`;
