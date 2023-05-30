import styled from '@emotion/styled';

export const Form = styled.form`
  border: ${p => p.theme.borders.md} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.md};
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[3]}px;
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
    background-color: ${p => p.theme.colors.accent};
  }
`;
