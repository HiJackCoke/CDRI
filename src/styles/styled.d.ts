import theme from "./theme";

type CustomTheme = typeof theme;

declare module "styled-components" {
  /* eslint-disable  @typescript-eslint/no-empty-object-type */
  export interface DefaultTheme extends CustomTheme {}
}
