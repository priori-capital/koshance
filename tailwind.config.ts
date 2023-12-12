import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			colors: {
				light: {
					100: "#FEFEFF",
					200: "#F2F4F7",
					300: "#D9D9D9",
					400: "#D1D5DC",
				},
				dark: {
					100: "#6F757D",
					200: "#364052",
				},
				red: "#EC7284",
				green: "#6DE779",
				kmint: "#F2FFED",
				kblack: "#001B1B",
				secondaryTeal: "#357576",
				secondaryBlue: "#C5E7FF",
				secondaryGreen: "#233732",
				kgreen: {
					100: "#DCECE8",
					200: "#AECEC6",
					300: "#85AFA5",
					400: "#61958E",
					500: "#30716E",
					600: "#004E4E",
				},
				"koshance-yellow": "#EAF636",
			},
		},
	},
	plugins: [],
};
export default config;
