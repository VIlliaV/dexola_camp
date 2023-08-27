import styled from 'styled-components';
import { media } from '@/styles/media';

const HEIGHT_HERO_PRESENTATION = '311px';

export const PresentationContainer = styled.div`
  display: grid;
  grid-template-rows: ${HEIGHT_HERO_PRESENTATION} auto;
  padding-bottom: 124px;

  @media ${media.tabDesk} {
    padding-bottom: 134px;
    grid-template-columns: repeat(1, 1fr);
    //  варіант №2
    /* grid-template-rows: calc(${HEIGHT_HERO_PRESENTATION}*2) auto; */
  }
  @media ${media.desktop} {
    padding-bottom: 176px;
    grid-template-columns: repeat(2, 1fr);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 1px;
      width: 100vw;
      background-color: var(--accent);
    }
    &::before {
      content: '';
      position: absolute;
      top: ${HEIGHT_HERO_PRESENTATION};
      left: 0;
      height: 1px;
      width: 100vw;
      background-color: var(--accent);
    }
  }

  & .hero_item {
    &:nth-child(1) {
      order: 2;
    }

    @media ${media.desktop} {
      &:nth-child(2) {
        order: 2;
      }
    }
  }

  & .hero_item_slider {
    display: flex;
    justify-content: space-evenly;

    @media ${media.desktop} {
      justify-self: end;
    }
    & .image-slider {
      width: 50%;
      @media ${media.tabDesk} {
        //  варіант №1
        max-width: 370px;
        //  варіант №2
        /* & .cut-container {
          width: 740px;
          height: 740px;
        } */
      }
      @media ${media.desktop} {
        width: 233px;
      }
    }
  }

  & .hero_item_presentation-text {
    & p {
      color: var(--primary);
    }
    @media ${media.desktop} {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-self: stretch;
      padding-left: 24px;

      & p {
        flex: 0 0 50%;
        display: block;
        width: 640px;
      }
    }
  }

  & .hero_item_run {
    @media ${media.desktop} {
      grid-column: span 2;
      grid-row: 2;
      margin-top: -16px;
    }
  }
`;
