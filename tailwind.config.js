module.exports = {
  purge: ['./pages/**/*.{js,vue}', './components/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        mac: "url('/images/mac.webp')",
      }),
      width: {
        99: 'calc(100% - 16rem);' /* get the width of the main content from lg:viewport by dividing
        (the total width by the width of the side navigation) */,
      },
      boxShadow: {
        lg: '0 0 10px #fff',
        xl: '0 0 20px #fff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
