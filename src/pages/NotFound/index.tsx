import { Code, Container, HomeLink, Message } from "./styled";

const NotFound = () => {
  return (
    <Container>
      <Code>404</Code>
      <Message>페이지를 찾을 수 없습니다.</Message>
      <HomeLink to="/">홈으로 돌아가기</HomeLink>
    </Container>
  );
};

export default NotFound;
