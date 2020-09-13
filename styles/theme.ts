import {Theme} from "theme-ui";

const theme: Theme = {
	initialColorModeName: "light",
	useColorSchemeMediaQuery: true,

	colors: {
		text: "#222",
		background: "#fff",
		primary: "#07c",
		secondary: "#05a",
		accent: "#fe5186",
		highlight: "#000",
		muted: "#eaeaea",
		header: "#fafafa",
		modes: {
			dark: {
				text: "#a9a9b3",
				background: "#292a2d",
				highlight: "#000",
				muted: "#3b3d42",
				header: "#252627",
			},
		},
	},

	fonts: {
		body: "Inter, system-ui, sans-serif",
		heading: "inherit",
		monospace: "monospace",
	},

	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},

	fontSizes: [
		"0.875rem",
		"1rem",
		"1.25rem",
		"1.5rem",
		"1.875rem",
		"2.25rem",
		"2.625rem",
		"3rem",
		"4rem",
		"4.5rem",
	],

	lineHeights: {
		body: "1.625",
		heading: "1.25",
	},

	letterSpacings: [
		"-0.05rem",
		"-0.025rem",
		"0",
		"0.025rem",
		"0.05rem",
		"0.1rem",
	],

	breakpoints: ["640px", "768px", "1024px", "1280px"],

	space: [
		0,
		"0.25rem",
		"0.5rem",
		"1rem",
		"2rem",
		"4rem",
		"8rem",
		"16rem",
		"32rem",
	],

	sizes: {
		container: "60rem",
		icon: "1.5rem",
	},

	radii: [0],

	links: {
		icon: {
			m: 3,
			display: "inline-block",
			height: "icon",
			width: "icon",
			color: "text",
			"&:hover, &:focus, &.active": {
				color: "primary",
			},
		},
	},

	layout: {
		main: {
			width: "container",
			mx: "auto",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		},
	},

	styles: {
		root: {
			fontFamily: "body",
			margin: 0,
			padding: 0,
			fontFeatureSettings: `"liga", "tnum", "case", "calt", "zero", "ss01", "locl"`,
		},
	},
};

export default theme;
