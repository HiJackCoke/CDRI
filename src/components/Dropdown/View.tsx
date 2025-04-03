import { DropdownBox, DropdownItem, DropdownText } from "./styled";
import { DropdownViewProps } from "./typet";

const DropdownView = ({ isOpen, list, onSelect }: DropdownViewProps) => {
  return (
    <DropdownBox $isOpen={isOpen}>
      {list.map((item) => (
        <DropdownItem key={item.value} onClick={() => onSelect(item)}>
          <DropdownText>{item.label}</DropdownText>
        </DropdownItem>
      ))}
    </DropdownBox>
  );
};

export default DropdownView;
