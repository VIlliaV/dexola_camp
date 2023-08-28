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
    position: absolute;
    left: 50%;
    width: 370px;
    height: 370px;

    @media ${media.tabDesk} {
      left: 0;
      width: 100%;
      height: auto;
      overflow: hidden;
      border: 1px solid var(--accent);
    }
  }

  & .slider-image {
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 2s ease-in-out;

    @media ${media.tabDesk} {
      /* height: auto; */
      transform: translateX(0);
      margin-bottom: -16%;
    }
  }

  & .slider-image.active {
    opacity: 1;
  }
  /* & .slider-image:not(.active) {
    z-index: -1;
  } */
`;
