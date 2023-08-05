import { Wrapper } from './Container.styled';

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};
