import * as React from 'react'; //must have
import { Link, useStaticQuery, graphql } from 'gatsby';

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
			<header>
				<Link to="/">{meta.title}</Link>
			</header>
			<main>
				<h1>Look MA !</h1>
				<Link to="/about">About</Link>
				{/* Using <Link> actually makes it faster than using the back button, without having to refresh the page */}
			</main>
		</>
	);
}
