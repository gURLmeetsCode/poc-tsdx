module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    fontSize: {
      xs: '.75rem', //12
      sm: '.875rem', //14
      base: '1rem', //16
      lg: '1.125rem', //18
      xl: '2rem', //32
      xxl: '2.25rem', //36
      xxxl: '2.375', // 38
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.375rem',
      lg: '.5rem',
      full: '9999px',
      large: '12px',
    },
    fontFamily: {
      regular: 'NBTPReg',
      medium: 'NBTPMedium',
      bold: 'NBTPBold',
      book: 'NBTPBook',
    },
    container: {},
    colors: {
      shadow: {
        1: 'rgba(0, 0, 0, 0.6)',
      },
      black: '#333335',
      white: '#ffffff',
      blue: {
        0: '#f2f4fa',
        1: '#e7ebfa',
        2: '#d6e5ff', //middle accent blue
        3: '#3b6be3', //core accent blue
        4: '#2257da',
        5: '#1F49B1', //core selected blue
      },
      grey: {
        0: '#bababe',
        1: '#737376',
        2: '#333335',
        3: '#d3d5db',
        4: 'rgba(128, 128, 128, 0.3)',
      },
      yellow: {
        0: '#febc09',
      },
      red: {
        0: '#c42f45',
        1: '#ffe7e8',
        2: '#e86f70',
      },
      green: {
        0: '#6ec42f',
        1: '#cdffc9',
        3: '#d5eed8',
        4: '#02a300',
      },
      transparent: 'transparent',
    },
    boxShadow: {
      default: '0 15px 27px 0 rgba(59, 107, 227, 0.1)',
      1: '0px 10px 27px 13px rgba(59, 107, 227, 0.21)',
    },
    extend: {
      maxWidth: {
        '8xl': '121rem',
      },
      margin: {
        '18': '4.5rem',
        '45': '11rem',
        '46': '11.25rem',
        '47': '11.5rem',
        '50': '12.5rem',
        '52': '13rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '60': '15rem',
        '62': '15.5rem',
      },
      width: {
        '35': '8.5rem',
        '36': '9rem',
        '37': '9.5rem',
        '40': '10rem',
        '41': '10.25rem',
        '42': '10.5rem',
        '43': '10.75rem',
        '44': '11rem',
        '45': '11.25rem',
        '46': '11.5rem',
        '47': '11.75rem',
        '48': '12rem',
      },
      height: {
        '6.5': '1.65rem',
        '7': '1.75rem',
      },
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
