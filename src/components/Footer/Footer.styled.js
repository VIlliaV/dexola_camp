import styled from 'styled-components';

export const FooterContainer = styled.footer`
  & .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    padding: 34px 0;

    & .footer_item_1 {
      justify-self: start;
    }
    & .footer_item_3 {
      justify-self: end;
    }
  }
`;
