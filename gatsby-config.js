module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.randomguy.com',
		title: 'Randomguy',
		description:
			'Randomguy is a random guy who is a web developer and a writer.',
		image: 'https://www.stjude.cloud/static/data-universe-v500-2fd94de5b7fee27353e38838e2814503.png',
	},
	plugins: [
		// every <yarn add plugin...> MUST be listed here (doesn't have to be in order)
		'gatsby-plugin-react-helmet', // <Helmet> is like the <head> tag, but on steroids

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
		'gatsby-remark-images', // to add images to MDX pages
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
				],
				defaultLayouts: {
					posts: require.resolve('./src/components/post-layout.js'), // Common layout for the .mdx pages from src/posts
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-plugin-image', // producing various of image sizes to support responsive design
		'gatsby-plugin-sharp', // for img extesions conversion
		'gatsby-transformer-sharp', // to optimize images

		{
			resolve: `gatsby-source-sanity`,
			options: {
				projectId: 'vnkupgyb', // read only, change this into your desidered projectId
				dataset: 'production',
			},
		},
	],
};
