import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormStyle = styled(Form)`
  max-width: 320px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const FieldInput = styled(Field)`
  width: 100%;
  border-radius: ${p => p.theme.radii.sm};
  padding: ${p => p.theme.space[2]}px;
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 30px;
  left: 5px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  color: ${p => p.theme.colors.error};
  margin-top: ${p => p.theme.space[2]}px;
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
