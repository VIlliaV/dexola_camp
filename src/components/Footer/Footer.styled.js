import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 1px solid var(--accent);
  & .container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    padding: 34px 0;

    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 360px;
      bottom: 0;
      width: 1px;
      background-color: var(--accent);
    }
    ::before {
      content: '';
      position: absolute;
      top: 0;
      right: 360px;
      bottom: 0;
      width: 1px;
      background-color: var(--accent);
    }
    & .footer_item_1 {
      justify-self: start;
    }
    & .footer_item_3 {
      justify-self: end;
    }
  }
`;
