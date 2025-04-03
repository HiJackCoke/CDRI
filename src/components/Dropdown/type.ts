export interface DropdownItem<L = string, V = string> {
  label: L;
  value: V;
}

export interface DropdownProps<T extends DropdownItem<unknown, unknown>> {
  isOpen: boolean;
  list: T[];
  onSelect: (item: T) => void;
}

export interface DropdownViewProps<T extends DropdownItem<unknown, unknown>>
  extends DropdownProps<T> {
  isOpen: boolean;
}
