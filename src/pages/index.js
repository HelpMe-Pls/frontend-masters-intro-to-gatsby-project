import * as React from 'react'; //must have
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { imageWrapper } from '../styles/index.module.css';
import { StaticImage } from 'gatsby-plugin-image';

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
			allSanityEpisode(
				sort: { fields: date, order: DESC }
				filter: { youtubeID: { ne: null } }
				limit: 20
			) {
				nodes {
					id # for unique keys in the <li>
					title
					guest {
						name
					}
					gatsbyPath( # generating actual URLs from the dynamic file name
						filePath: "/episode/{SanityEpisode.slug__current}"
					)
				}
			}
		}
	`);

	const posts = data.allMdx.nodes;
	const episodes = data.allSanityEpisode.nodes;

	return (
		<Layout>
			<div className={imageWrapper}>
				<StaticImage
					src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
					alt="Stupid dog, you make me look bad"
					placeholder="tracedSVG"
					width={300}
					height={300}
				/>
			</div>
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

			<h2>
				Latest episodes of <em>Learn With Jason</em>
			</h2>
			<ul>
				{episodes.map((episode) => (
					<li key={episode.id}>
						<Link to={episode.gatsbyPath}>
							{episode.title} (with {episode.guest?.[0]?.name}){' '}
							{/* .[0]? because Jason set the {guest} to be an array, if it was an object we could get rid of it */}
						</Link>
					</li>
				))}
			</ul>
			<a href="https://www.learnwithjason.dev/">
				Watch all episodes of <em>Learn With Jason</em>
			</a>
		</Layout>
	);
}
