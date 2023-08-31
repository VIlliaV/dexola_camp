import styled from 'styled-components';
import { media } from '@/styles/media';

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.5px;
  padding: 12px 16px;
  color: var(--primary);
  font-family: inherit;
  font-size: var(--font-size_button);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
  border: none;
  background-color: var(--button);
  cursor: pointer;
  transition: background-color 250ms var(--cubic-bezier);

  @media ${media.tablet} {
    padding: 12px 66.44px;
  }
  &:hover {
    background-color: var(--button_hover);
  }
`;
