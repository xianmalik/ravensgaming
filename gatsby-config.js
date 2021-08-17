const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'Gatsby + Node.js (TypeScript) API',
	},
	plugins: [
		'gatsby-plugin-postcss',
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					"@components": path.resolve(__dirname, 'src/components'),
					"@images": path.resolve(__dirname, 'src/images'),
					"@layouts": path.resolve(__dirname, 'src/layouts'),
					"@pages": path.resolve(__dirname, 'src/pages'),
					"@styles": path.resolve(__dirname, 'src/styles')
				},
				extensions: []
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Gatsby + Node.js (TypeScript) API',
				short_name: 'Gatsby + Node.js (TypeScript)',
				start_url: '/',
				icon: 'src/images/gatsby-icon.png',
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Montserrat\: 300,400,500,600,700`,
					// `Oxygen\:300,400,700`,
					// `Red Rose`, // second font
				],
				display: 'swap'
			}
		},
	],
};
