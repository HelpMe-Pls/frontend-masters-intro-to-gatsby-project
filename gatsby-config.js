module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.randomguy.com',
		title: 'Randomguy',
		description:
			'Randomguy is a random guy who is a web developer and a writer.',
		image: 'https://www.stjude.cloud/static/data-universe-v500-2fd94de5b7fee27353e38838e2814503.png',
	},
	plugins: [
		'gatsby-plugin-react-helmet',

		// These are the plugins that are used to enable the MDX rules for pages from src/posts
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: `gatsby-plugin-page-creator`,
			options: {
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					posts: require.resolve('./src/components/layout.js'),
				},
			},
		},
	],
};
