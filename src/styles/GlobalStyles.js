import { createGlobalStyle } from 'styled-components';
import { media } from '@/styles/media';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: var(--font-body);
    font-size: var(--font-size_body-mob);

    @media ${media.tablet} {
      font-size: var(--font-size_body-tab);
    }

    @media ${media.desktop} {
      font-size: var(--font-size_body-web);
    }
  }
  h1, h2, h3 {
    font-family: var(--font-title)
  }
  h1 {
    font-size: 120px;
    font-weight: 500;
    line-height: 1.254;
    text-transform: uppercase;

    @media ${media.tablet} {
      font-size: 280px;
    }

    @media ${media.desktop} {
      font-size: 340px;
    }

  }

  h2 {
     font-size: var(--font-size_title-mob);
    text-transform: capitalize;

    @media ${media.tablet} {
      font-size: var(--font-size_title-tab);
    }

    @media ${media.desktop} {
      font-size: var(--font-size_title-web);
    }
  }
  h3 {
     font-size: var(--font-size_subtitle-mob);

    @media ${media.tablet} {
      font-size: var(--font-size_subtitle-tab);
    }

    @media ${media.desktop} {
      font-size: var(--font-size_subtitle-web);
    }
  }

  button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 235px;
  height: 48px;
  color: var(--primary);
  font-family: inherit;
  font-size: var(--font-size_button);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.32px;
  border: none;
  background-color: var(--button);
  cursor: pointer;
  &:hover {
    background-color: var(--button_hover);
  }
  }
`;
