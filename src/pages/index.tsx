import type { NextPage } from "next";

import { About, Banner, Blog, Footer, Header, Partners, Services } from "../components";

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
				<Footer />
			</main>
		</>
	);
};

export default Home;
