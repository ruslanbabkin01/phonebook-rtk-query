import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[5]}px;
  width: ${p => p.theme.breakpoints[0]};

  ${props => props.theme.mq.tablet} {
    width: ${p => p.theme.breakpoints[1]};
    padding: 0 ${p => p.theme.space[6]}px;
  }

  ${props => props.theme.mq.desktop} {
    width: ${p => p.theme.breakpoints[2]};
    padding: 0 ${p => p.theme.space[5]}px;
  }
`;
