import * as React from 'react'; //must have
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function Seo(props) {
	const data = useStaticQuery(graphql`
		query GetSiteMetadata {
			site {
				siteMetadata {
					description
					image
					siteUrl
					title
				}
			}
		}
	`);

	const defaults = data?.site?.siteMetadata;

	const title = props.title || defaults?.title;
	const description = props.description || defaults?.description;
	const image = new URL(props.image || defaults?.image, defaults?.siteUrl);
	const url = new URL(props.path || '/', defaults?.siteUrl);

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />
			{image && <meta name="image" content={image} />}

			{/* SEO on Facebook */}
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			{image && <meta property="og:image" content={image} />}

			{/* SEO on Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
		</Helmet>
	);
}
