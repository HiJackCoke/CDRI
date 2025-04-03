export type PaginationGroupProps = {
  page: number;
  totalPage: number;
  onPaginateTo: (index: number) => void;
};
