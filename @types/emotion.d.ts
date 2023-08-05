import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColors;
    fonts: ThemeFonts;
    fontSizes: number[];
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    letterSpacings: {
      body: string;
      caps: string;
    };
    opacities: {};
    borders: {
      none: string;
      sm: string;
      md: string;
    };
    borderStyles: {};
    borderWidths: {};
    radii: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      round: string;
    };
    space: number[];
    shadows: {
      sm: string;
      s: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      inner: string;
    };
    breakpoints: string[];
    mq: {
      mobile: string;
      tablet: string;
      tabletOnly: string;
      desktop: string;
    };
    transitions: {
      cubicBezier: string;
    };
    zIndices: number[];
  }
}

type ThemeColors = {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  highlight: string;
  muted: string;
  white: string;
  gray: string;
  ocean: string;
  black: string;
  error: string;
  mainBackground: string[];
  tagBackground: string[];
  modes: {
    dark: {
      text: string;
      background: string;
      primary: string;
    };
    light: {
      text: string;
      background: string;
      primary: string;
    };
  };
};

type ThemeFonts = {
  body: string;
  heading: string;
  monospace: string;
};
