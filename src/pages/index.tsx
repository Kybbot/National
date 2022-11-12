import type { NextPage } from "next";

import { About, Banner, Blog, Footer, Header, Modal, ContactForm, Partners, Services, Products } from "../components";

import { useModal } from "../hooks/useModal";
import { getAllArticles } from "../contentful";

import { GetAllArticlesQuery } from "../@types/contentfulSchema";

export const getStaticProps = async () => {
	const allArticles = await getAllArticles();

	return {
		props: {
			allArticles,
		},
	};
};

type HomeProps = {
	allArticles: GetAllArticlesQuery;
};

const Home: NextPage<HomeProps> = ({ allArticles }) => {
	const { isActive, closeModal, openModal } = useModal();

	return (
		<>
			<Header />
			<main>
				<Modal overlay active={isActive} closeModal={closeModal} displayType="flex">
					<ContactForm active={isActive} closeModal={closeModal} />
				</Modal>
				<Banner openModal={openModal} />
				<About />
				<Services openModal={openModal} />
				<Products />
				<Partners />
				<Blog articles={allArticles} />
				<Footer openModal={openModal} />
			</main>
		</>
	);
};

export default Home;
