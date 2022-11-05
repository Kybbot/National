import type { NextPage } from "next";

import { About, Banner, Header, Partners, Services } from "../components";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<About />
				<Services />
				<Partners />
			</main>
		</>
	);
};

export default Home;
