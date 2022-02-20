module.exports = {
	purge: {
		content: [
			"./pages/**/*.{js,ts,jsx,tsx}",
			"./components/**/*.{js,ts,jsx,tsx}",
		],
	},
	theme: {
		screens: {
			xxs: '480px',
			xs: '768px',
			sm: '992px',
			md: '1200px',
			lg: '1440px',
			xl: '1920px',
		},
	},
};
