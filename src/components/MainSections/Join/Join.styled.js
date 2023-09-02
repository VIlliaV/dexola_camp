import styled from 'styled-components';
import { ReactComponent as Arrow } from '@/images/svg/Vector.svg';
import { ReactComponent as Line } from '@/images/svg/line.svg';

export const JoinContainer = styled.div`
  display: flex;
  gap: 66px;

  & form {
    flex: 1;
    flex: 0 0 50%;
  }

  & button {
    gap: 11.23px;
  }
`;

export const JoinDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;

  & h3 {
    line-height: 1.333 (3);
    letter-spacing: 0.02em;
  }

  & p {
    line-height: 1.55556;
  }
`;

export const SvgStyled = styled(Arrow)`
  fill: var(--primary);
  height: 62.5px;
`;

export const SvgStyledLine = styled(Line)`
  fill: var(--primary);
  /* height: 62.5px; */
`;
