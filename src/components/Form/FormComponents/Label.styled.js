import styled from 'styled-components';

export const LabelStyled = styled.label`
  & .input_container {
    position: relative;
    border-bottom: 1px solid var(--primary);
    border-color: ${props => (props.$errorMessage ? 'var(--warning)' : 'var(--primary)')};
    & span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      color: var(--warning);
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.02em;
    }
    &:hover {
      border-color: var(--accent);
    }
  }
`;
