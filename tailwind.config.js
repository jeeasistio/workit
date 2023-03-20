/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            colors: {
                primary: '#24053E',
                secondary: '#44FFA1',
                tertiary: '#584D62',
                gray: '#FCF8FF',
                white: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                serif: ['Fraunces', 'serif'],
            },
        },
    },
    plugins: [],
}
