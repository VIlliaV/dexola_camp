import styled from 'styled-components';
// import { media } from '@/styles/media';

export const FeaturesInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 24px;
  margin-bottom: 90px;

  & h3 {
    display: flex;
    justify-content: end;
  }

  p {
    width: 50%;
    & br {
      /* display: none; */
    }
  }
`;

export const About = styled.ul`
  display: flex;
  gap: 40px;
`;

export const AboutItem = styled.li`
  border: 1px solid var(--accent);
`;

export const AboutItemInfo = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & h4 {
    display: flex;
    gap: 16px;
  }

  & p {
    margin-right: -19px;
  }
  & button {
    text-transform: uppercase;
  }
`;
