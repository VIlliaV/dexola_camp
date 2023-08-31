import styled from 'styled-components';
import { media } from '@/styles/media';

export const TableStyle = styled.table`
  & thead {
    @media ${media.mobTab} {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
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

    &.name {
      width: 100%;
    }
    &.level {
      min-width: 180px;
    }
  }

  & tbody {
    & tr {
      @media ${media.mobTab} {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(3, auto);
      }
      &:nth-child(2n + 1) {
        background: #080b27;
      }
    }
  }
  & td {
    padding: 28px 24px;
    @media ${media.mobTab} {
      display: block;
      padding: 0;
      &:nth-child(1) {
        order: 3;
        grid-row: span 3;
      }
      &:nth-child(2) {
        order: 1;
        margin-bottom: 16px;
      }
      &:nth-child(3) {
        order: 4;
      }
      &:nth-child(4) {
        order: 5;
      }
      &:nth-child(5) {
        order: 6;
      }
      &:nth-child(6) {
        order: 2;
      }
    }
  }
`;
