import { ReactNode } from "react";

interface CommonProps {
  page: number;
  totalPage: number;
}

export interface PaginationGroupProps extends CommonProps {
  onPaginateTo: (index: number) => void;
}

export interface PaginationGroupViewProps extends CommonProps {
  children: ReactNode;
  onPrev: () => void;
  onNext: () => void;
  onFirst: () => void;
  onLast: () => void;
}
