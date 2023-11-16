/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#2E2D2F",
                grape: "#624958",
                wine: "#A2646D",
                guava: "#DB876E",
                pumpkin: "#FCBA67",
                pineapple: "#F9F871",
                ice: "#FCEAFF",
                lead: "#5C5B5D",
            },
        },
    },
    plugins: [],
};
