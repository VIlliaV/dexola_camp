import { media } from '@/styles/media';

export const visualHidden = `
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);`;

export const h4 = `
font-family: var(--font-title);
font-size: var(--font-size_subtitle-mob);
font-weight: 500;
line-height: 1.4`;

export const input = `
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
