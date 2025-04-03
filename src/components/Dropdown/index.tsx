import { DropdownItem, DropdownProps, DropdownViewProps } from "./type";
import DropdownView from "./View";

const Dropdown = <T extends DropdownItem<unknown, unknown>>({
  list,
  isOpen,
  onSelect,
}: DropdownProps<T>) => {
  const viewProps: DropdownViewProps<T> = {
    isOpen,
    list,
    onSelect,
  };
  return <DropdownView {...viewProps} />;
};

export default Dropdown;
