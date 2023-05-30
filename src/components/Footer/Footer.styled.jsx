import styled from '@emotion/styled';

export const Wrapp = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.highlight};
  box-shadow: ${p => p.theme.shadows.xl};
`;
