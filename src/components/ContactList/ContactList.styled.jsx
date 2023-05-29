import styled from '@emotion/styled';

export const Contacts = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Total = styled.p`
  margin-top: 12px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.ocean};
`;
