"use client";

import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamilies["noto-sans-kr"]};
  }
  body {
    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    margin: 0;
    background-color: ${({ theme }) => theme.Palette.White};
  }
  th,
  td {
    display: table-cell;
    vertical-align: inherit;
  }
  a {
    text-decoration: none;
    /* &:visited {
      color: currentColor;
    }
    &:-webkit-any-link {
      color: currentColor;
    } */
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

export default GlobalStyle;
