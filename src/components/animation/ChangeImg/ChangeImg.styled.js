import styled from 'styled-components';

export const ImageSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & .slider-image {
    max-width: 500px;
    height: auto;
    position: absolute;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  & .slider-image.active {
    opacity: 1;
  }
  & .slider-image:not(.active) {
    z-index: -1;
  }
`;
