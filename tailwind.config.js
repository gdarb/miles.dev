const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
	],
};
