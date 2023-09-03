import styled from 'styled-components';
import { media } from '@/styles/media';

export const InputStyled = styled.input`
  width: 100%;
  padding: 8px 0px 11px 30px;
  margin-bottom: 4px;
  color: var(--primary);
  background-color: transparent;
  border: none;
  letter-spacing: -0.02em;
  line-height: normal;
  &::placeholder {
    color: var(--secondary);
  }
  &:focus {
    outline: none;
  }
  @media ${media.desktop} {
    padding: 8px 0px 8px 30px;
    letter-spacing: 0.02em;
    line-height: 1.333333;
  }
`;
