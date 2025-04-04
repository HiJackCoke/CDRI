"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

interface Props {
  children: ReactNode;
}

const StylesProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles theme={theme} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default StylesProvider;
