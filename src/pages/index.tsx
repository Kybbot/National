import type { NextPage } from "next";

import { Banner, Header } from "../components";
import { About } from "../components/About";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<About />
			</main>
		</>
	);
};

export default Home;
