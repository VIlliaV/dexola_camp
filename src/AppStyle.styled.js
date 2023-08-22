import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  & main {
    flex: 1;
    margin-top: 78px;
  }
`;
