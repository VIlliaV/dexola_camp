import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  padding: 8px 0px 8px 30px;
  margin-bottom: 4px;
  color: var(--primary);
  background-color: transparent;
  border: none;
  &::placeholder {
    color: var(--placeholder);
  }
  &:focus {
    outline: none;
  }
`;
