/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./templates/**/*.{html,twig}", // if using Twig templates
        "./src/**/*.{js,jsx,ts,tsx,vue}", // include JS/TS files
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
