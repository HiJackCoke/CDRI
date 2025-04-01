import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Header />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  width: 100%;
  padding-inline: 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  justify-self: center;

  max-width: 960px;
  padding-block: 80px;
`;
