import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react'; //must have
import { graphql } from 'gatsby';
import Layout from '../../components/layout';

export const query = graphql`
	query SanityEpisode($id: String!) {
		sanityEpisode(id: { eq: $id }) {
			title
			description
			slug {
				current
			}
			youtubeID
			date(fromNow: true)
			image {
				asset {
					gatsbyImageData(placeholder: DOMINANT_COLOR)
				}
			}
		}
	}
`;

const SanityEpisode = ({ data }) => {
	// {data} is the query's result
	const episode = data.sanityEpisode;

	return (
		<Layout title={episode.title} description={episode.description}>
			{episode.image?.asset?.gatsbyImageData && (
				<GatsbyImage
					image={episode.image.asset.gatsbyImageData}
					alt={episode.title}
				/>
			)}
			<h1>{episode.title}</h1>
			<p>
				(posted {episode.date}) — {episode.description}
			</p>
			<ul>
				<li>
					<a
						href={`https://www.learnwithjason.dev/${episode.slug.current}`}
					>
						full episode and details
					</a>
				</li>
				<li>
					<a href={`https://youtu.be/${episode.youtubeID}`}>
						watch on YouTube
					</a>
				</li>
			</ul>
		</Layout>
	);
};

export default SanityEpisode;

// to see if it rebuilds
