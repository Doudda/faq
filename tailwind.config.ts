import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				customWhite: "#f1faee",
				customGray: "#a2acba",
				customGreen: "#4daa57",
				customRed: "#e63946",
				customBlue: "#457b9d",
				customDarkBlue: "#1d3557",
			},
		},
	},
	plugins: [require("daisyui")],
	// daisyui: {
	// 	themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
	// 	darkTheme: "dark", // name of one of the included themes for dark mode
	// },
};
export default config;
