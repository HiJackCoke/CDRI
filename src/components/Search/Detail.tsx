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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SearchDetailProps } from "./type";

import { Target } from "../../models/kakao/book";

interface ListProps {
  label: string;
  value: Target;
}
const LIST: ListProps[] = [
  // { label: "제목", value: "title" },
  { label: "저자명", value: "person" },
  { label: "출판사", value: "publisher" },
];

const SearchDetail = ({ isTitle, onSearch }: SearchDetailProps<Target>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState<ListProps | null>(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (isTitle) {
      setSelectedFilter(null);
      setKeyword("");
    }
  }, [isTitle]);

  const handleDropdown = (item: ListProps) => {
    setSelectedFilter(item);
    setIsDropdownOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (!selectedFilter) return;
    onSearch(selectedFilter.value, keyword);
    setIsOpen;
  };

  return (
    <>
      <DetailButton onClick={() => setIsOpen(true)}>상세검색</DetailButton>

      <PopupContainer ref={ref} $isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <Icon icon="close" width={1.25} height={1.25} />
        </CloseButton>
        <SearchInputWrapper>
          <FilterSelect onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <FilterLabel>{selectedFilter?.label || "제목"}</FilterLabel>
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
