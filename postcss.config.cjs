const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
    plugins: [
        tailwindcss(),     // ← dikkat buraya
        require('autoprefixer'),
    ],
};
