import styled from 'styled-components';
import { input } from '@/styles/styledConst';

import { ReactComponent as Eye_closed } from '@/images/svg/ph_eye-closed.svg';
import { ReactComponent as Eye_opened } from '@/images/svg/ph_eye.svg';

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputStyled = styled.input`
  ${input}
`;

export const SvgStyledEyeClose = styled(Eye_closed)`
  fill: var(--primary);
`;
export const SvgStyledEyeOpen = styled(Eye_opened)`
  fill: var(--primary);
`;

export const Eye = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
