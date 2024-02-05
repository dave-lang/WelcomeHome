// postcss.config.js
module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('css-mqpacker'),
        require('cssnano'),
    ]
};