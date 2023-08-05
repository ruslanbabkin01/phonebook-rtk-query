import { Container } from 'components';
import { WrapperBox } from './Header.styled';

interface IHeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <WrapperBox>
      <Container>{children}</Container>
    </WrapperBox>
  );
}
