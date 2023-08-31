import styled from 'styled-components';
import { media } from '@/styles/media';

export const TableStyle = styled.table`
  /* @media ${media.mobTab} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  } */

  width: 100%;
  border-collapse: separate;
  border-spacing: 10px;
  border-collapse: collapse;
  & tr {
    border-bottom: 1px solid var(--accent);
  }
  & .photo {
    padding: 0;
    min-width: 64px;
    color: transparent;
    overflow: hidden;
    & img {
      font-size: 8px;
      border-radius: 60px;
    }
  }
  & th {
    width: auto;
    padding: 12px 24px;
    text-align: start;
    white-space: nowrap;

    &.name {
      width: 100%;
    }
    &.level {
      min-width: 180px;
    }
  }

  & tbody {
    & tr {
      &:nth-child(2n + 1) {
        background: #080b27;
      }
    }
  }
  & td {
    padding: 28px 24px;
  }
`;
