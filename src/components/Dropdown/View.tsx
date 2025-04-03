import { DropdownBox, DropdownItem, DropdownText } from "./styled";
import { DropdownItem as DropdownItemType, DropdownViewProps } from "./type";

const DropdownView = <T extends DropdownItemType<unknown, unknown>>({
  isOpen,
  list,
  onSelect,
}: DropdownViewProps<T>) => {
  return (
    <DropdownBox $isOpen={isOpen}>
      {list.map((item) => (
        <DropdownItem key={String(item.value)} onClick={() => onSelect(item)}>
          <DropdownText>{String(item.label)}</DropdownText>
        </DropdownItem>
      ))}
    </DropdownBox>
  );
};

export default DropdownView;
