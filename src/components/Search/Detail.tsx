import {
  PopupContainer,
  FilterSelect,
  FilterLabel,
  SearchInput,
  SearchButton,
  ArrowIcon,
  SearchInputWrapper,
  CloseButton,
  DetailButton,
} from "./styled";

import Icon from "../Icon";
import Dropdown from "../Dropdown";
import { ChangeEvent, useState } from "react";
import { SearchDetailProps } from "./type";
import { DropdownItem } from "../Dropdown/typet";

const LIST = [
  { label: "제목", value: "title" },
  { label: "저자명", value: "person" },
  { label: "출판사", value: "publisher" },
];

const SearchDetail = ({ onSearch }: SearchDetailProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState(LIST[0]);
  const [keyword, setKeyword] = useState("");

  const handleDropdown = (item: DropdownItem) => {
    setSelectedFilter(item);
    setIsDropdownOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    onSearch(selectedFilter.value, keyword);
    setIsOpen;
  };

  return (
    <>
      <DetailButton onClick={() => setIsOpen(!isOpen)}>상세검색</DetailButton>

      <PopupContainer $isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <Icon icon="close" width={1.25} height={1.25} />
        </CloseButton>
        <SearchInputWrapper>
          <FilterSelect onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <FilterLabel>{selectedFilter.label}</FilterLabel>
            <ArrowIcon icon="arrow-down" width={1.25} height={1.5} />

            <Dropdown
              isOpen={isDropdownOpen}
              list={LIST}
              onSelect={handleDropdown}
            />
          </FilterSelect>

          <SearchInput>
            <input
              placeholder="검색어 입력"
              value={keyword}
              onChange={handleChange}
            />
          </SearchInput>
        </SearchInputWrapper>
        <SearchButton onClick={handleSearch}>
          <span>검색</span>
        </SearchButton>
      </PopupContainer>
    </>
  );
};

export default SearchDetail;
