import styled from 'styled-components';
const HEIGHT_HERO_PRESENTATION = '311px';

export const PresentationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: ${HEIGHT_HERO_PRESENTATION} auto;

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
  & .hero_item {
    /* display: flex;
    align-items: flex-start; */
  }
  & .hero_item_slider {
    display: flex;
  }
  & .hero_item_presentation-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: stretch;
    padding: 0 70px 0px 24px;

    & p {
      flex: 0 0 50%;
      display: block;
      width: 640px;
    }
  }
  & .hero_item_run {
    grid-column: span 2;
    grid-row: 2;
  }
`;
