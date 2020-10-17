module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      './src/**/*.vue',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
