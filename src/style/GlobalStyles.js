import { createGlobalStyle } from 'styled-components';
import { media } from '@/utils/media';

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 8px;

    @media ${media.tablet} {
      font-size: var(--font-size_body-tab);
    }

    @media ${media.desktop} {
      font-size: var(--font-size_body-web);
    }
  }

  h1 {
    font-size: 120px;

    @media ${media.tablet} {
      font-size: 280px;
    }

    @media ${media.desktop} {
      font-size: 340px;
    }

  }
`;
