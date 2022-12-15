import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 5px;
  margin-left: 10px;
  display: inline-block;
  margin-left: auto;
  border-radius: 5px;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
