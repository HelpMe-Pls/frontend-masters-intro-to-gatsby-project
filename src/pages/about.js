import * as React from 'react'; //must have
import { Link } from 'gatsby';
import Layout from '../components/layout';

// every components MUST be <default> export
export default function AboutPage() {
	return (
		<Layout title="About" description="It is what it is">
			<h1>Look MAAA !</h1>
			<Link to="/">Back to home </Link>
			{/* Using <Link> actually makes it faster than using the back button, by not having to refresh the page */}
		</Layout>
	);
}
