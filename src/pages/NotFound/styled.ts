import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 0 2rem;
`;

export const Code = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: #ff4d4f;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #1890ff;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1677cc;
  }
`;
