import styled from 'styled-components';

export const TableStyle = styled.table`
  width: 100%;

  border-collapse: collapse; /* Об'єднуємо межі таблиці */
  & tr {
    border-bottom: 1px solid var(--accent);
  }
  & .photo {
    position: relative;
    padding: 0;
    min-width: 64px;
    width: 64px;
    overflow: hidden;
    & .cut-container {
      top: 0;
      width: 199.5px;
      height: 199.5px;
      & img {
        /* transform: translate(-50%, -50%); */
      }
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
    padding: 11px 24px;
  }
`;
