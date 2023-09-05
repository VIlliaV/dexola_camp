import styled from 'styled-components';
import { media } from '@/styles/media';

export const ImageSlider = styled.div`
  position: relative;

  width: 233px;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--accent);

  @media ${media.tabDesk} {
    width: 100%;
    overflow: visible;
    border: none;
  }

  & .cut-container {
    width: 370px;
    height: 370px;

    @media ${media.tabDesk} {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      overflow: hidden;
      border: 1px solid var(--accent);
      transform: translateX(0);
    }
  }

  & .cut-container.active {
    @media ${media.tabDesk} {
      position: static;
    }
  }

  & .slider-image {
    opacity: 0;
    transition: opacity 2s ease-in-out;

    @media ${media.tabDesk} {
      transform: translateX(0);
      margin-bottom: -16%;
    }
  }

  & .slider-image.active {
    opacity: 1;
  }
`;

export const CutContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  & img {
    width: 100%;
    height: 100%;
  }
`;
