import * as React from 'react'; //must have
import { Link } from 'gatsby';
import Layout from './layout';

const PostLayout = ({ children, pageContext }) => {
	const { title, description } = pageContext.frontmatter; // {.frontmatter} is the custom metaData from the top of the .mdx file
	return (
		<Layout title={title} description={description}>
			{children}
			<Link to="/">&larr; Back</Link>
		</Layout>
	);
};

export default PostLayout;
