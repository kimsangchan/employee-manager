/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}", // 이미 포함됨
    "./styles/**/*.{css}", // 필요 시 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
