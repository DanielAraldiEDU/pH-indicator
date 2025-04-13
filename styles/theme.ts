export const theme = {
  colors: {
    primary: {
      main: '#A855F7',
    },

    secondary: {
      main: '#C084FC',
    },

    background: {
      main: '#F3E8FF',
    },

    pH: {
      1: '#750000',
      2: '#B30000',
      3: '#D1342D',
      4: '#E86A92',
      5: '#B857A6',
      6: '#8137C0',
      7: '#5B30E0',
      8: '#3B62F4',
      9: '#2788D6',
      10: '#1EAB9F',
      11: '#29C76F',
      12: '#6EDC4D',
      13: '#B6E738',
      14: '#F5E33B',
    },

    transparent: {
      main: 'transparent',
    },
  },

  fonts: {
    sizes: {
      heading: 32,
      body: 16,
      text: 12,
    },

    families: {
      rowdies: {
        regular: 'Rowdies_400Regular',
      },
    },
  },

  borders: {
    radius: {
      small: 4,
      full: 9999,
    },

    widths: {
      small: 1,
    },
  },

  spacings: {
    0: 0,
    '0.5': 2,
    1: 4,
    '1.5': 6,
    2: 8,
    '2.5': 10,
    3: 12,
    '3.5': 14,
    4: 16,
    '4.5': 18,
    5: 20,
    10: 40,
  },
} as const;
