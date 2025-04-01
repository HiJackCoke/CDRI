import styled, { css } from "styled-components";

export const Container = styled.header`
  justify-self: center;
  max-width: 1280px;

  width: 100%;
  height: 80px;
  padding-block: 24px;

  display: flex;

  align-items: center;
  justify-content: stretch;
  box-sizing: border-box;

  color: ${({ theme }) => theme.Text.Primary};
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${theme.Title1};
  `};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 3rem;
`;

export const NavItem = styled.a<{ $active?: boolean }>`
  text-decoration: none;
  padding-bottom: 4px;

  ${({ theme, $active }) => css`
    ${theme.Body1};
    border-bottom: ${$active
      ? `1px solid ${theme.Palette.Primary}`
      : "1px solid transparent"};

    &:hover {
      border-bottom: 1px solid ${theme.Palette.Primary};
    }
  `}

  &:visited {
    color: currentColor;
  }
  &:-webkit-any-link {
    color: currentColor;
  }
`;
