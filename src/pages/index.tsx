import type { NextPage } from "next";

import { Banner, Header } from "../components";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Banner />
			</main>
		</>
	);
};

export default Home;
