import searchIcon from "./icons/search.svg";
import closeIcon from "./icons/close.svg";
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
} from "./styled";
import { ForwardedRef, forwardRef, MouseEvent } from "react";
import { SearchViewProps } from "./type";

const SearchView = (
  {
    keyword,
    histories,

    onSearch,
    onInputChange,
    onHistorySelect,
    onHistoryRemove,
  }: SearchViewProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
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
          <SearchForm onSubmit={onSearch}>
            <img src={searchIcon} />
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
                    <img src={closeIcon} />
                  </RemoveButton>
                </HistoryItem>
              ))}
            </SearchHistory>
          </HistoryWrapper>
        </SearchBox>

        <DetailButton>상세검색</DetailButton>
      </SearchArea>
    </Container>
  );
};

export default forwardRef(SearchView);
