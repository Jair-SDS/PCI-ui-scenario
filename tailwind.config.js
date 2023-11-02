import plugin from "tailwindcss"

module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
  },
   plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
        'p': { fontSize: theme('fontSize.md') },
      })
    })
  ]
}

