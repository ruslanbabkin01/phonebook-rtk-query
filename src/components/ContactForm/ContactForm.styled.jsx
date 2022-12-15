import styled from '@emotion/styled';

export const Form = styled.form`
  border: 2px solid #000;
  margin: 20px 0;
  padding: 12px;
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  & + & {
    margin-top: 12px;
  }
`;

export const BtnAdd = styled.button`
  margin-top: 12px;
  border-radius: 5px;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
