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
				blue: "#70A6E8",
			},
		},
	},
	// plugins: [require("daisyui")],
	// daisyui: {
	// 	themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
	// 	darkTheme: "dark", // name of one of the included themes for dark mode
	// },
};
export default config;
