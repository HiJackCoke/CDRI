import styled from "styled-components";
import { AccordionViewProps } from "./type";

const AccordionView = ({
  ref,
  isOpen,
  height,
  children,
}: AccordionViewProps) => {
  return (
    <Container $height={height}>
      <Content ref={ref} $isOpen={isOpen}>
        {children}
      </Content>
    </Container>
  );
};

const Container = styled.div<{ $height: number }>`
  height: ${({ $height }) => $height}px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const Content = styled.div<{ $isOpen: boolean }>`
  /* opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)}; */
  /* transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "10px")}); */
  transition: all 0.3s ease-in-out;
`;

export default AccordionView;
