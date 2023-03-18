/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        colors: {
            gray: '#FCF8FF',
            white: '#FFFFFF',
        },
        extend: {
            colors: {
                primary: '#24053E',
                secondary: '#44FFA1',
                tertiary: '#584D62',
            },
        },
    },
    plugins: [],
}
