const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media",
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
			},
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
	],
};
