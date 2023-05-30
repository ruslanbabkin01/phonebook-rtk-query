import React from 'react';
import { Wrapp } from './Footer.styled';
import { Container } from 'components';

export const Footer = ({ children }) => {
  return (
    <Wrapp>
      <Container>{children}</Container>
    </Wrapp>
  );
};
