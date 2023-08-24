export const size = {
  mobile: 375,
  tablet: 745,
  desktop: 1440,
};

export const media = {
  mobile: `screen and (min-width: ${size.mobile}px)`,
  tablet: `screen and (min-width: ${size.tablet}px)`,
  desktop: `screen and (min-width: ${size.desktop}px)`,
  retina: `and (-webkit-min-device-pixel-ratio: 2) `,
};
