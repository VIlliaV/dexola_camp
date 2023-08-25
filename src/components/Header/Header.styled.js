import styled from 'styled-components';
import { media } from '@/styles/media';
import { ReactComponent as Arrow } from '@/images/svg/iconoir_arrow-tr.svg';

export const HeaderContainer = styled.header`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  padding: 4px 0 13px;
  background-color: var(--background);
  z-index: 100;
  @media ${media.tablet} {
    padding: 15px 0;
  }

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & button {
    width: 136px;
    height: 40px;
    flex-shrink: 0;
    @media ${media.tablet} {
      width: 235px;
      height: 48px;
    }
  }
`;

export const SvgStyled = styled(Arrow)`
  fill: var(--primary);
`;
