import styled from '@emotion/styled';
import {
  color, //color and background-color
  space, //margin padding
  layout,
  flexbox,
  grid,
  border,
  shadow,
  typography,
  background,
  position,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  border,
  shadow,
  typography,
  background,
  position
);

// import styled from '@emotion/styled';
// import {
//   color,
//   space,
//   layout,
//   flexbox,
//   grid,
//   border,
//   shadow,
//   typography,
//   background,
//   position,
//   ColorProps,
//   SpaceProps,
//   LayoutProps,
//   FlexboxProps,
//   GridProps,
//   BorderProps,
//   ShadowProps,
//   TypographyProps,
//   BackgroundProps,
//   PositionProps,
// } from 'styled-system';

// interface BoxProps
//   extends ColorProps,
//     SpaceProps,
//     LayoutProps,
//     FlexboxProps,
//     GridProps,
//     BorderProps,
//     ShadowProps,
//     TypographyProps,
//     BackgroundProps,
//     PositionProps {}

// export const Box = styled('div')<BoxProps>(
//   color,
//   space,
//   layout,
//   flexbox,
//   grid,
//   border,
//   shadow,
//   typography,
//   background,
//   position
// );
