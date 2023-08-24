import styled from 'styled-components';
import { media } from '@/styles/media';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 24px;

  @media ${media.desktop} {
    padding: 0 120px;
  }
`;
