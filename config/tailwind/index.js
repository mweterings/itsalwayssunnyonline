/**
 * TODO: Make sure no unused classes are created.
 */

const colors = require('./colors')
const screens = require('./screens')
const fonts = require('./fonts')

module.exports = {
  prefix: 'u-',
  theme: {
    aspectRatio: {
      square: [1, 1],
      '2/1': [2, 1]
    },
    colors,
    ...fonts,
    extend: {
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem'
      }
    },
    opacity: {
      '0': '0',
      '100': '1'
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      auto: 'auto'
    },
    screens
  },
  plugins: [require('tailwindcss-aspect-ratio')],
  variants: {},
  corePlugins: {
    container: false
  }
}
