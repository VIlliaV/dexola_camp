import styled from 'styled-components';
import { media, size, padding } from '@/styles/media';

export const Container = styled.div`
  margin: 0 auto;
  width: calc(100vw - (2 * ${padding.mobile}px));
  @media ${media.desktop} {
    width: calc(${size.desktop}px - (2 * ${padding.desktop}px));
  }
`;
