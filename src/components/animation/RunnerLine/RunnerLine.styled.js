import styled from 'styled-components';

export const RunnerContainer = styled.div`
  display: flex;
  overflow: hidden;

  & p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    white-space: nowrap;
    animation: runner 10s linear infinite;
  }

  @keyframes runner {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
