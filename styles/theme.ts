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
      5: '#B857A6',
      7: '#5B30E0',
      9: '#2788D6',
      11: '#29C76F',
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
    8: 32,
    10: 40,
    12: 48,
    13: 52,
    14: 56,
    16: 64,
  },

  shadow: {
    default: {
      shadowColor: '#A855F7',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4.65,

      elevation: 8,
    },
  },

  dimensions: {
    pHStops: {
      1: 0.05,
      2: 0.12,
      5: 0.33,
      7: 0.46,
      9: 0.6,
      11: 0.74,
      13: 0.88,
      14: 0.95,
    },
  },
} as const;
