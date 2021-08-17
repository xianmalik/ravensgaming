const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
			  serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
			  // sans: ['Calibre', ...defaultTheme.fontFamily.sans],
			  sans: [...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}