import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
    };

    typography: {
      family: string;
      size: string;
    };
  }
}
