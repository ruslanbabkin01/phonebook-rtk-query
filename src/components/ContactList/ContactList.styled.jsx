import styled from '@emotion/styled';

export const Contacts = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TotalContacts = styled.p`
  margin-top: 12px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.ocean};
`;
