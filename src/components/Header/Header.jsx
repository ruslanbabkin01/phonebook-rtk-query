import { Container } from 'components';
import { WrapperBox } from './Header.styled';

export default function Header({ children }) {
  return (
    <WrapperBox>
      <Container>{children}</Container>
    </WrapperBox>
  );
}
