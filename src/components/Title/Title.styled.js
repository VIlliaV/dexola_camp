import styled from 'styled-components';
import { media } from '@/styles/media';

export const TitleStyled = styled.div`
  position: relative;
  margin-bottom: 48px;
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: var(--primary);
  }

  & h2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
  }

  @media ${media.mobTab} {
    &::after {
      left: -24px;
      width: 100vw;
    }
  }

  @media ${media.tablet} {
    margin-bottom: 72px;
  }

  @media ${media.desktop} {
    margin-bottom: 106px;
  }
`;
