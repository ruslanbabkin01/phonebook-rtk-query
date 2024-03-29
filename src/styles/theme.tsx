import { Theme } from '@emotion/react';

const breakpoints: string[] = ['320', '768', '1280'];

export const theme: Theme = Object.freeze({
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#609',
    secondary: '#05a',
    accent: '#07c',
    highlight: '#48d1cc',
    muted: '#f6f6f6',
    white: '#fff',
    gray: '#9e9e9e',
    ocean: '#008B8B',
    black: '#000',
    error: '#FF0000',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
      light: {
        text: '#000',
        background: '#fff',
        primary: '#0cf',
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [8, 12, 14, 16, 18, 20, 24, 28, 32, 48, 68],
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  opacities: {},
  borders: {
    none: 'none',
    sm: '1px solid',
    md: '2px solid',
  },
  borderStyles: {},
  borderWidths: {},
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
  space: [0, 4, 8, 16, 20, 24, 32, 64, 128, 256, 512],
  shadows: {
    sm: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    s: '0px 4px 10px 4px #9e9e9e',
    md: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    lg: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    xl: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    xxl: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },
  breakpoints: [
    `${breakpoints[0]}px`,
    `${breakpoints[1]}px`,
    `${breakpoints[2]}px`,
  ],
  mq: {
    mobile: `@media screen and (max-width: ${+breakpoints[1] - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints[1]
    }px) and (max-width: ${+breakpoints[2] - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },
  transitions: {
    cubicBezier: '250ms cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  zIndices: [-1, 10, 50, 100, 1000],
});
