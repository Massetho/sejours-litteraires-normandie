/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'wb-ink':     '#1E2B2F',
        'wb-cream':   '#FAF7F2',
        'wb-bordeaux':'#8B3A3A',
        'wb-gold':    '#C9A04E',
        'wb-sage':    '#6B8F71',
        'wb-charcoal':'#2A2A2A',
      },
      fontFamily: {
        seasons:    ['"Playfair Display"', 'Georgia', 'serif'],
        lora:       ['"Lora"', 'Georgia', 'serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '7rem',
        'section-sm': '4rem',
      },
    },
  },
  plugins: [],
}
