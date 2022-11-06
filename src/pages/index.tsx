import type { NextPage } from "next";

import { About, Banner, Blog, Header, Partners, Services } from "../components";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<About />
				<Services />
				<Partners />
				<Blog />
			</main>
		</>
	);
};

export default Home;
