import * as React from 'react'; //must have
import Seo from '../components/seo.js';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ({
	children,
	title = false,
	description = false,
	image = false,
	path = false
}) => {
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
			<Seo
				title={title}
				description={description}
				image={image}
				path={path}
			/>
			<header>
				<Link to="/">{meta.title}</Link>
				<nav>
					<Link to="/about">About</Link>
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
};

export default Layout;
