import styled from 'styled-components';

export const TitleStyled = styled.div`
  position: relative;
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
`;
