import styled from 'styled-components';
import { media } from '@/styles/media';

export const FeaturesInfo = styled.div`
  margin-bottom: 24px;
  @media ${media.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
  }
  @media ${media.desktop} {
    gap: 24px;
    margin-bottom: 90px;
  }

  & h3 {
    margin-bottom: 12px;
    @media ${media.tablet} {
      display: flex;
      justify-content: start;
      flex: 1;
      margin-bottom: 0;
    }
    @media ${media.desktop} {
      justify-content: end;
      flex: auto;
    }
  }

  p {
    flex: 2;
    @media ${media.desktop} {
      flex: auto;
      width: 50%;
    }
    & br {
      display: none;
      @media ${media.tablet} {
        display: block;
      }
    }
  }
`;

export const About = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${media.tablet} {
    flex-direction: row;
    gap: 16px;
  }
  @media ${media.desktop} {
    gap: 38px;
  }
`;

export const AboutItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--accent);
`;

export const AboutItemInfo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  @media ${media.tablet} {
    padding: 16px;
  }
  @media ${media.desktop} {
    padding: 24px;
  }

  & h4 {
    display: flex;
    gap: 16px;
    @media ${media.tablet} {
      flex-direction: column;
      gap: 4px;
    }
    @media ${media.desktop} {
      flex-direction: row;
      gap: 16px;
    }
  }

  & p {
    & br {
      display: none;
      @media ${media.desktop} {
        display: block;
      }
    }
  }
  & button {
    margin-top: 8px;
    text-transform: uppercase;
    @media ${media.tablet} {
      margin-top: auto;
    }
  }
`;
