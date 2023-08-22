import styled from 'styled-components';
import { media, size } from '@/utils/media';

export const Container = styled.div`
  /* width: 600px; */
  margin: 0 auto;
  @media ${media.desktop} {
    width: calc(${size.desktop}px - 240px);
  }
`;
