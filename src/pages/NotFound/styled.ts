import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.Palette.White};
  text-align: center;
  padding: 0 2rem;
`;

export const Code = styled.h1`
  ${({ theme }) => css`
    ${theme.Title1};
    color: ${theme.Palette.Primary};
  `};
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  ${({ theme }) => theme.Body1};

  color: #333;
  margin-bottom: 2rem;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;

  ${({ theme }) => css`
    ${theme.Body1};
    background-color: ${theme.Palette.Primary};
    color: ${theme.Palette.White};
  `}

  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1677cc;
  }
`;
