import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  margin-left: 10px;
  display: inline-block;
  margin-left: auto;
  border: ${props => props.theme.borders.none};

  svg {
    :hover {
      color: ${props => props.theme.colors.error};
    }
  }
`;
