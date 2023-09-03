import styled from 'styled-components';
import { media } from '@/styles/media';
import { ReactComponent as Arrow } from '@/images/svg/Vector.svg';
import { ReactComponent as Line } from '@/images/svg/line.svg';

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${media.tablet} {
    gap: 56px;
  }
  @media ${media.desktop} {
    flex-direction: row;
    gap: 66px;
  }
  & form {
    flex: 1;
    flex: 0 0 50%;
  }

  & button {
    width: 100%;
    gap: 11.23px;
    @media ${media.tablet} {
      width: 235px;
    }
  }
`;

export const JoinDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  @media ${media.desktop} {
    gap: 16px;
  }

  & h3 {
    line-height: 1.4;
    letter-spacing: normal;
    @media ${media.mobTab} {
      font-size: 16px;
    }

    @media ${media.desktop} {
      line-height: 1.333333;
      letter-spacing: 0.02em;
    }
  }

  & p {
    line-height: normal;

    @media ${media.tabDesk} {
      width: 86%;
    }
    @media ${media.desktop} {
      line-height: 1.55556;
    }
  }
`;

export const SvgStyled = styled(Arrow)`
  display: none;
  @media ${media.desktop} {
    display: block;
    fill: var(--primary);
    height: 62.5px;
  }
`;

export const SvgStyledLine = styled(Line)`
  fill: var(--primary);
`;
