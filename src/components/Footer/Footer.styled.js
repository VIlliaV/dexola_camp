import styled from 'styled-components';
import { media, size, padding } from '@/styles/media';

export const FooterContainer = styled.footer`
  border-top: 1px solid var(--accent);

  & .container {
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-bottom: 34px;

    @media ${media.tablet} {
      padding: 28px 0;
      grid-template-columns: repeat(2, 1fr);
      ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        bottom: 0;
        width: 1px;
        background-color: var(--accent);
      }
    }

    @media ${media.desktop} {
      grid-template-columns: repeat(3, 1fr);
      padding: 34px 0;
      ::after {
        left: calc((${size.desktop}px - (${padding.desktop}px * 2)) / 3.333);
      }
      ::before {
        content: '';
        position: absolute;
        top: 0;
        right: calc((${size.desktop}px - (${padding.desktop}px * 2)) / 3.333);
        bottom: 0;
        width: 1px;
        background-color: var(--accent);
      }
    }

    & .footer_item {
      @media ${media.mobTab} {
        &:nth-child(1) {
          order: 2;
        }
        &:nth-child(2) {
          padding: 12px 0;
        }
        &:nth-child(3) {
          order: 2;
        }
      }
      @media ${media.tabDesk} {
        grid-template-rows: repeat(3, 1fr);

        &:nth-child(1) {
          justify-self: start;
        }
        &:nth-child(2) {
          grid-row: span 2;
          padding-left: calc(${padding.tablet}px) * 2;
        }
        &:nth-child(3) {
          justify-self: start;
        }
      }
      @media ${media.desktop} {
        &:nth-child(3) {
          justify-self: end;
        }
        &:nth-child(1) {
          justify-self: start;
        }
      }
    }
  }
`;
