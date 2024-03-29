import styled from '@emotion/styled';

export const WrapperBox = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${p => p.theme.zIndices[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.space[7]}px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.highlight};
  box-shadow: ${p => p.theme.shadows.xl};
`;
