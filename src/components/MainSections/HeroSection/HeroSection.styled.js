import styled from 'styled-components';

export const PresentationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  & .presentation-text {
    /* display: flex; */
    height: 311px;
    padding: 159px 70px 56px 24px;
    align-items: center;
    & p {
      display: block;
      width: 640px;
    }
  }
`;
