module.exports = {
  variants: {
    borderRadius: ['responsive', 'hover'],
    borderWidth: ['responsive', 'first', 'last']
  },
  theme: {
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      opacity: {
        '15': '.15'
      },
      minHeight: {
        '275': '275px'
      },
      spacing: {
        'xs': '0.1rem',
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '28': '7rem',
        '36': '9rem',
        '44': '11rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '160': '40rem',
        '168': '42rem',
        '192': '48rem'
      },
      width: {
        '48p': '48%'
      }
    }
  }
}
