import { useRef, useEffect, useState } from "react";

import AccordionView from "./View";
import { AccordionProps, AccordionViewProps } from "./type";

const Accordion = ({ defaultHeight = 0, isOpen, children }: AccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(defaultHeight);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;

      setHeight(isOpen ? contentHeight : defaultHeight);
    }
  }, [isOpen, children]);

  const viewProps: AccordionViewProps = {
    ref: contentRef,
    isOpen,
    height,
    children,
  };

  return <AccordionView {...viewProps} />;
};

export default Accordion;
