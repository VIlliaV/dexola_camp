import styled from 'styled-components';
import { media } from '@/styles/media';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & main {
    flex: 1;
    margin-top: 65px;
    @media ${media.tablet} {
      margin-top: 87px;
    }
    @media ${media.desktop} {
      margin-top: 78px;
    }
  }
`;
