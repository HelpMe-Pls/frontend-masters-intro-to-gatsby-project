import * as React from 'react'; //must have
import { Link } from 'gatsby';

// every components MUST be <default> export
export default function AboutPage() {
	return (
		<main>
			<h1>Look MAAA !</h1>
			<Link to="/">Back to home </Link>
			{/* Using <Link> actually makes it faster than using the back button, without having to refresh the page */}
		</main>
	);
}
