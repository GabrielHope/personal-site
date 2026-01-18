/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Optional: add your custom colors, fonts, etc.
      colors: {
        primary: '#2563eb',
        muted: '#9ca3af',
      },
    },
  },
  plugins: [],
}
