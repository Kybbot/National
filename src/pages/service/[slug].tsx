import React, { ReactNode, useRef } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { ParsedUrlQuery } from "querystring";
import { Block, BLOCKS, Inline } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { ContactForm, Footer, Header, Modal, Seo } from "../../components";

import { useLanguage } from "../../hooks/useLanguage";
import { useModal } from "../../hooks/useModal";
import { getAllServicesSlugs, geServiceBySlug } from "../../contentful";

import { translation } from "../../utils/translation";

import { GeServiceBySlugQuery } from "../../@types/contentfulSchema";

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllServicesSlugs();

	return {
		paths: slugs.serviceCollection.items.map((item) => ({ params: { slug: item.slug } })),
		fallback: false,
	};
};

type Props = {
	service: GeServiceBySlugQuery;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const slugName = context.params!.slug;

	const service = await geServiceBySlug(slugName);

	return {
		props: { service },
	};
};

type ArticleProps = {
	service: GeServiceBySlugQuery;
};

const Service: NextPage<ArticleProps> = ({ service }) => {
	const { isActive, closeModal, openModal } = useModal();
	const { language, changeLanguage } = useLanguage();

	const btnRef = useRef<HTMLButtonElement>(null);

	const { title, titleEn, description, descriptionEn, subTitle, subTitleEn, bgImg, stages, stagesEn } =
		service.serviceCollection.items[0];

	function renderOptions(json: any) {
		const headlinesMap = new Map<
			string,
			{
				index: number;
				title: string;
			}
		>();

		const filteredHeadlines = json.content.filter((item: { nodeType: string }) => item.nodeType === "heading-3");

		for (let i = 0; i < filteredHeadlines.length; i++) {
			headlinesMap.set(filteredHeadlines[i].content[0].value, {
				index: i + 1,
				title: filteredHeadlines[i].content[0].value,
			});
		}

		return {
			renderNode: {
				[BLOCKS.HEADING_3]: (node: any, children: ReactNode) => {
					const index = headlinesMap.get(node.content[0].value);

					return (
						<div className="service__headline">
							<span className="service__index">{index?.index}</span>
							<h2 className="service__h3">{children}</h2>
						</div>
					);
				},
				[BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => <p className="service__text">{children}</p>,
			},
		};
	}

	return (
		<>
			<Seo />
			<Header language={language} translation={translation} changeLanguage={changeLanguage} />
			<main>
				<Modal overlay active={isActive} closeModal={closeModal} displayType="flex">
					<ContactForm active={isActive} closeModal={closeModal} language={language} translation={translation} />
				</Modal>
				<div className="service">
					<div className="service__wrapper">
						<div className="service__bg" style={{ backgroundImage: `url(${bgImg.url})` }}></div>
						<h1 className="service__title">{language === "ua" ? title : titleEn}</h1>
					</div>
					<div className="container">
						<article className="service__article">
							<p className="service__description">{language === "ua" ? description : descriptionEn}</p>
							<h2 className="service__h2">{language === "ua" ? subTitle : subTitleEn}</h2>
							<div className="service__content">
								{documentToReactComponents(
									language === "ua" ? stages.json : stagesEn.json,
									language === "ua" ? renderOptions(stages.json) : renderOptions(stagesEn.json)
								)}
							</div>
							<button ref={btnRef} className="btn services__btn" type="button" onClick={() => openModal(btnRef)}>
								{translation["contactBtn"][language]}
							</button>
						</article>
					</div>
				</div>
			</main>
			<Footer language={language} translation={translation} openModal={openModal} />
		</>
	);
};

export default Service;
