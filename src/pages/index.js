import * as React from 'react'; //must have
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

// every components MUST be <default> export
export default function IndexPage() {
	const data = useStaticQuery(graphql`
		query GetBlogPost {
			allMdx(sort: { fields: frontmatter___date, order: DESC }) {
				nodes {
					slug
					id
					frontmatter {
						date(fromNow: true)
						description
						title
					}
				}
			}
		}
	`);

	const posts = data.allMdx.nodes;

	return (
		<Layout>
			<h1>Look MA !</h1>
			<Link to="/about">About</Link>
			{/* Using <Link> actually makes it faster than using the back button, by not having to refresh the page */}
			<h2>Recent Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
						<small>-- posted {post.frontmatter.date}</small>
					</li>
				))}
			</ul>
		</Layout>
	);
}
