import * as React from 'react'; //must have
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from '../components/seo.js';

// every components MUST be <default> export
export default function IndexPage() {
	const data = useStaticQuery(graphql`
		query GetSiteTitle {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const meta = data?.site?.siteMetadata ?? {};

	return (
		<>
			<Seo />
			<header>
				<Link to="/">{meta.title}</Link>
			</header>
			<main>
				<h1>Look MA !</h1>
				<Link to="/about">About</Link>
				{/* Using <Link> actually makes it faster than using the back button, by not having to refresh the page */}
			</main>
		</>
	);
}
