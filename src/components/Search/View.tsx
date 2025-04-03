import {
  DetailButton,
  StyledInput,
  SearchArea,
  SearchForm,
  Title,
  Container,
  SearchBox,
  SearchHistory,
  RemoveButton,
  HistoryItem,
  HistoryWrapper,
  PopupContainer,
  FilterSelect,
  FilterLabel,
  SearchInput,
  SearchButton,
  ArrowIcon,
  SearchInputWrapper,
  CloseButton,
} from "./styled";
import { MouseEvent } from "react";
import { SearchViewProps } from "./type";
import Icon from "../Icon";

const SearchView = ({
  ref,
  keyword,
  histories,
  showDetail,
  onSubmit,
  onInputChange,
  onHistorySelect,
  onHistoryRemove,
  onDetailShow,
}: SearchViewProps) => {
  const handleHistoryRemove =
    (item: string) => (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      onHistoryRemove(item);
      const active = document.querySelector(
        "#book-search"
      ) as HTMLElement | null;

      if (active) {
        active.focus();
      }
    };

  return (
    <Container>
      <Title>도서 검색</Title>
      <SearchArea>
        <SearchBox ref={ref} $historyLength={histories.length}>
          <SearchForm onSubmit={onSubmit}>
            <Icon icon="search" width={1.875} height={1.875} />
            <StyledInput
              id="book-search"
              name="search"
              placeholder="검색어를 입력하세요"
              onChange={onInputChange}
              value={keyword}
            />
          </SearchForm>

          <HistoryWrapper>
            <SearchHistory>
              {histories.map((item) => (
                <HistoryItem
                  key={item}
                  tabIndex={-1}
                  role="button"
                  onClick={() => onHistorySelect(item)}
                >
                  {item}
                  <RemoveButton
                    tabIndex={-1}
                    onClick={handleHistoryRemove(item)}
                  >
                    <Icon icon="close" width={1.5} height={1.5} />
                  </RemoveButton>
                </HistoryItem>
              ))}
            </SearchHistory>
          </HistoryWrapper>
        </SearchBox>

        <DetailButton onClick={() => onDetailShow(true)}>상세검색</DetailButton>
      </SearchArea>

      <PopupContainer $isOpen={showDetail}>
        <CloseButton onClick={() => onDetailShow(false)}>
          <Icon icon="close" width={1.25} height={1.25} />
        </CloseButton>
        <SearchInputWrapper>
          <FilterSelect>
            <FilterLabel>제목</FilterLabel>

            <ArrowIcon icon="arrow-down" width={1.25} height={1.5} />
          </FilterSelect>

          <SearchInput>
            <input placeholder="검색어 입력" />
          </SearchInput>
        </SearchInputWrapper>
        <SearchButton>
          <span>검색</span>
        </SearchButton>
      </PopupContainer>
    </Container>
  );
};

export default SearchView;
