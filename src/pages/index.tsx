import type { NextPage } from "next";

import { About, Banner, Blog, Footer, Header, Modal, ContactForm, Partners, Services, Products } from "../components";

import { getAllArticles } from "../contentful";
import { useModal } from "../hooks/useModal";
import { useLanguage } from "../hooks/useLanguage";

import { translation } from "../utils/translation";

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
	const { language, changeLanguage } = useLanguage();

	return (
		<>
			<Header language={language} translation={translation} changeLanguage={changeLanguage} />
			<main>
				<Modal overlay active={isActive} closeModal={closeModal} displayType="flex">
					<ContactForm active={isActive} closeModal={closeModal} />
				</Modal>
				<Banner language={language} translation={translation} openModal={openModal} />
				<About language={language} translation={translation} />
				<Services language={language} translation={translation} openModal={openModal} />
				<Products language={language} translation={translation} />
				<Partners language={language} translation={translation} />
				<Blog language={language} translation={translation} articles={allArticles} />
				<Footer language={language} translation={translation} openModal={openModal} />
			</main>
		</>
	);
};

export default Home;
