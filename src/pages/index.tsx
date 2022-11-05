import type { NextPage } from "next";

import { About, Banner, Header, Services } from "../components";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<About />
				<Services />
			</main>
		</>
	);
};

export default Home;
