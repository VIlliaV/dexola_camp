import styled from 'styled-components';

export const ImageSlider = styled.div`
  position: relative;
  width: 233px;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--accent);
  & .cut-container {
    position: absolute;
    left: 50%;
    width: 370px;
    height: 370px;
  }

  & .slider-image {
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }

  & .slider-image.active {
    opacity: 1;
  }
  /* & .slider-image:not(.active) {
    z-index: -1;
  } */
`;
