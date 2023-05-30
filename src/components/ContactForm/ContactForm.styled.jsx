import styled from '@emotion/styled';

export const Form = styled.form`
  border: ${p => p.theme.borders.md} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.md};
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const BtnAdd = styled.button`
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.gray};
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.muted};

  :hover {
    background-color: ${p => p.theme.colors.highlight};
    color: ${p => p.theme.colors.text};
  }
`;

export const ErrorText = styled.p`
  font-size: ${p => p.theme.fontSizes[1]}px;
  color: ${p => p.theme.colors.error};
  margin-top: ${p => p.theme.space[2]}px;
`;
