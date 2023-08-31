import styled from 'styled-components';
import { media } from '@/styles/media';
import { visualHidden } from '@/styles/styledConst';
import { h4 } from '@/styles/styledConst';

export const TableStyle = styled.table`
  & thead {
    @media ${media.mobTab} {
      ${visualHidden}
    }
  }

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
    @media ${media.tabDesk} {
      padding: 12px 16px;
      white-space: wrap;
      vertical-align: top;
      &:last-child {
        padding: 12px 24px;
      }
    }
    &.name {
      width: 100%;
    }
    &.level {
      @media ${media.desktop} {
        min-width: 180px;
      }
    }
  }

  & tbody {
    & tr {
      @media ${media.mobTab} {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        grid-template-rows: repeat(3, auto);
        padding: 16px 24px;
        &:first-child {
          padding: 0 24px 16px;
        }
        &:nth-child(2n) {
          background: #080b27;
        }
      }
      @media ${media.tablet} {
        &:nth-child(2n + 1) {
          background: #080b27;
        }
      }
    }
  }
  & td {
    padding: 28px 24px;
    & .no_aria {
      display: none;
    }

    @media ${media.mobTab} {
      display: block;
      padding: 0;
      & .no_aria {
        display: inline-block;
      }

      &:nth-child(1) {
        order: 3;
        grid-row: span 3;
        margin-right: 16px;
      }
      &:nth-child(2) {
        order: 1;
        grid-column: span 2;
        margin-bottom: 16px;
        ${h4}
      }
      &:nth-child(3) {
        order: 4;
        grid-column: span 2;
      }
      &:nth-child(4) {
        order: 5;
        grid-column: span 2;
      }
      &:nth-child(5) {
        order: 6;
        grid-column: span 2;
      }
      &:nth-child(6) {
        order: 2;
        justify-self: end;
        ${h4}
      }

      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 4px;
        color: var(--secondary);
      }
    }
    @media ${media.tabDesk} {
      padding: 29.5px 24px;
      &:nth-child(3) {
        padding: 29.5px 16px;
      }
    }
  }
`;
