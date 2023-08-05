import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: block;
  margin: 0 auto;
  max-width: 320px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FilterInput = styled.input`
  display: block;
  width: 100%;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.sm};
  font-size: ${p => p.theme.fontSizes[3]}px;
`;
