/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#7542aa",
                    secondary: "#c42d41",
                    accent: "#0099c4",
                    neutral: "#252D3C",
                    "base-100": "#43305A",
                    info: "#5BAAD2",
                    success: "#63E3C5",
                    warning: "#EE9D1B",
                    error: "#F20D59",
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
