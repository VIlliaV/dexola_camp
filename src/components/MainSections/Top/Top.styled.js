import styled from 'styled-components';

export const TableStyle = styled.table`
  width: 100%;

  & .photo {
    padding: 0;
    min-width: 64px;
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
  & td {
    padding: 11px 24px;
  }
`;
