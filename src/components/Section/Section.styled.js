import styled from 'styled-components';
import { media } from '@/styles/media';

export const SectionStyled = styled.section`
  /* display: flex;
  justify-content: center; */
  position: relative;
  overflow: hidden;
  margin-bottom: 41px;
  padding: 24px 0;

  @media ${media.tablet} {
    margin-bottom: 62px;
    padding: 14px 0;
  }
  @media ${media.desktop} {
    margin-bottom: 60px;
    padding: 65px 0;
  }
`;
