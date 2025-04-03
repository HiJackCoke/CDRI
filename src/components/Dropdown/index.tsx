import { DropdownItem, DropdownProps, DropdownViewProps } from "./typet";
import DropdownView from "./View";

const Dropdown = ({ isOpen, list, onSelect }: DropdownProps) => {
  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
  };

  const viewProps: DropdownViewProps = {
    isOpen,
    list,
    onSelect: handleSelect,
  };
  return <DropdownView {...viewProps} />;
};

export default Dropdown;
