export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  isOpen: boolean;
  list: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}

export interface DropdownViewProps extends DropdownProps {
  isOpen: boolean;
}
