import styled from 'styled-components';
import { media } from '@/styles/media';

export const SocialListStyled = styled.ul`
  display: flex;
  gap: 32px;

  @media ${media.tablet} {
    gap: 24px;
  }

  @media ${media.desktop} {
    gap: 40px;
  }
`;
