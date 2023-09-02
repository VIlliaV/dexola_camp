import styled from 'styled-components';

export const FormStyled = styled.form`
  padding: 54px 40px 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
  border: 1px solid var(--accent);

  & label {
    width: 100%;
  }
`;
