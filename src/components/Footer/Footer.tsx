import { Wrapp } from './Footer.styled';
import { Container } from 'components';

interface IFooterProps {
  children?: React.ReactNode;
}

export const Footer = ({ children }: IFooterProps) => {
  return (
    <Wrapp>
      <Container>{children}</Container>
    </Wrapp>
  );
};
