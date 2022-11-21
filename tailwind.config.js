

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        lora:"'Lato', sans-serif"
      }
    },
  },
  plugins: [require('daisyui')],
}
