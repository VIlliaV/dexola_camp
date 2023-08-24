import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.5px;
  color: var(--primary);
  font-family: inherit;
  font-size: var(--font-size_button);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.32px;
  border: none;
  background-color: var(--button);
  cursor: pointer;
  &:hover {
    background-color: var(--button_hover);
  }
`;
