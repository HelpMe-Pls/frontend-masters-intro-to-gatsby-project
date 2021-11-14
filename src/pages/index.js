import * as React from 'react'; //must have
import { Link } from 'gatsby';
import Layout from '../components/layout';

// every components MUST be <default> export
export default function IndexPage() {
	return (
		<Layout>
			<h1>Look MA !</h1>
			<Link to="/about">About</Link>
			{/* Using <Link> actually makes it faster than using the back button, by not having to refresh the page */}
		</Layout>
	);
}
