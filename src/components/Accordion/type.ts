export type AccordionViewProps = {
  ref?: React.Ref<HTMLDivElement>;
  isOpen: boolean;
  height: number;
  children: React.ReactNode;
};

export type AccordionProps = Omit<AccordionViewProps, "ref" | "height"> & {
  defaultHeight?: number;
};
