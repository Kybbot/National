import type { NextPage } from "next";

import { About, Banner, Blog, Footer, Header, Modal, ContactForm, Partners, Services, Products } from "../components";

import { useModal } from "../hooks/useModal";

const Home: NextPage = () => {
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
				<Blog />
				<Footer openModal={openModal} />
			</main>
		</>
	);
};

export default Home;
