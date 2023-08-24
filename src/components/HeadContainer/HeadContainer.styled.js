import styled from 'styled-components';
import { media, size } from '@/styles/media';

export const Container = styled.div`
  margin: 0 auto;
  width: calc(100vw - 24px);
  @media ${media.desktop} {
    width: calc(${size.desktop}px - 240px);
  }
`;
