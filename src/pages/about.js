import * as React from 'react'; //must have
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

// every {const query} will be injected into our component as a prop called {data} (a JSON object)
export const query = graphql`
	query CocktailQuery {
		file(name: { eq: "cocktail" }) {
			childImageSharp {
				gatsbyImageData(placeholder: DOMINANT_COLOR)
			}
		}
	}
`;

// every components MUST be <default> export
const AboutPage = ({ data }) => {
	// {data} is injected by the query above
	return (
		<Layout title="About" description="It is what it is">
			<GatsbyImage image={getImage(data.file)} alt="Cock with a tail" />
			<h1>Look MAAA !</h1>
			<Link to="/">Back to home </Link>
			{/* Using <Link> actually makes it faster than using the back button, by not having to refresh the page */}
		</Layout>
	);
};

export default AboutPage;
