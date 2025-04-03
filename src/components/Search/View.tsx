import {
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
import { MouseEvent } from "react";
import { SearchViewProps } from "./type";
import Icon from "../Icon";
import SearchDetail from "./Detail";

const SearchView = ({
  ref,
  keyword,
  histories,

  onSubmit,
  onInputChange,
  onHistorySelect,
  onHistoryRemove,
  onFilterChange
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

        <SearchDetail onSearch={onFilterChange} />
      </SearchArea>
    </Container>
  );
};

export default SearchView;
