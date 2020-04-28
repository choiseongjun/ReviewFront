const palette = {
  /* teal */
  teal0: '#5CEEDA',
  teal1: '#5ADDC7',
  teal2: '#1AE1CC',
  teal3: '#06C4B0',
  /* gray */
  gray0: '#FCFCFC',
  gray1: '#E1E1E1',
  gray2: '#C9C9C9',
  gray3: '#B9B9B9',
  gray4: '#AEAEAE',
  gray5: '#6E6E6E',
  gray6: '#474747',
  gray7: '#363636',
  gray8: '#202020',
  gray9: '#171717',
  /* green */
  green0: '#22DF6E',
  /* blue */
  blue0: '#1C82DC',
  /* red */
  red0: '#F23F3F',
  /* yellow */
  yellow0: '#FFE646',
};

export const buttonColorMap = {
  teal: {
    background: palette.teal1,
    color: 'white',
    hoverBackground: palette.teal0,
  },
  gray: {
    background: palette.gray8,
    color: 'white',
    hoverBackground: palette.teal3,
  },
  transparent: {
    background: 'none',
    color: palette.teal2,
    hoverBackground: 'none',
    hoverColor: palette.teal3,
  },
  black: {
    background: 'none',
    color: 'black',
    hoverBackground: 'none',
    hoverColor: palette.teal3,
  },
};

export default palette;
