import styled from 'styled-components';
import { ReactComponent as LogoTest } from '@/images/svg/logo.svg';

// export const LogoStyle = styled.img`
//   fill: var(--primary);
//   color: white;

//   & svg {
//     width: 35px;
//     height: auto;
//     fill: var(--primary);
//     color: white;
//   }
// `;

export const LogoStyled = styled(LogoTest)`
  fill: var(--primary);
`;
