import React, { ReactNode, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { ParsedUrlQuery } from "querystring";
import { Block, BLOCKS, Inline, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { ContactForm, Footer, Header, Modal, Seo } from "../../components";
import { YoutubeVideo } from "../../components/rich-text/YoutubeVideo";

import { useLanguage } from "../../hooks/useLanguage";
import { useModal } from "../../hooks/useModal";
import { getAllServicesSlugs, geServiceBySlug } from "../../contentful";

import { translation } from "../../utils/translation";

import { GeServiceBySlugQuery } from "../../@types/contentfulSchema";
import { TextAsset, TextBlock, TextLink, TextLinks, videoTypes } from "../../@types/contentfulRichText";

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

	function renderOptionsForDescription(links: TextLinks) {
		const assetMap = new Map<string, TextAsset>();
		for (const asset of links.assets.block) {
			assetMap.set(asset.sys.id, asset);
		}

		const hyperLinksMap = new Map<string, TextLink>();
		for (const entry of links.entries.hyperlink) {
			hyperLinksMap.set(entry.sys.id, entry);
		}

		const entriesMap = new Map<string, TextBlock>();
		for (const entry of links.entries.block) {
			entriesMap.set(entry.sys.id, entry);
		}

		return {
			renderNode: {
				[BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => {
					return <p className="article__text">{children}</p>;
				},
				[BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => (
					<div className="article__wrapper">
						<h2 className="article__h2">{children}</h2>
						<div className="article__dec"></div>
					</div>
				),
				[BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => (
					<div className="article__wrapper">
						<h3 className="article__h3">{children}</h3>
						<div className="article__dec"></div>
					</div>
				),
				[BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => <ul className="article__list">{children}</ul>,
				[BLOCKS.OL_LIST]: (node: Block | Inline, children: ReactNode) => <ol className="article__list">{children}</ol>,
				[BLOCKS.LIST_ITEM]: (node: Block | Inline, children: ReactNode) => (
					<li className="article__item">{children}</li>
				),
				[BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
					const asset = assetMap.get(node.data.target.sys.id);

					if (asset?.contentType === videoTypes.mp4) {
						return (
							<video controls preload="metadata" className="article__video">
								<source src={asset!.url} type="video/mp4"></source>
								Download the
								<a href={asset!.url}>MP4</a>
								video.
							</video>
						);
					}

					return (
						<Image
							width={asset?.width}
							height={asset?.height}
							src={asset!.url}
							placeholder="blur"
							blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkNWQ1ZDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmUyZTIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg=="
							alt={asset!.title}
							className="article__img"
						/>
					);
				},
				[BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline, children: ReactNode) => {
					const asset = entriesMap.get(node.data.target.sys.id);
					if (asset?.__typename === "YouTubeVideo") {
						return <YoutubeVideo id={asset.id} title={asset.title} />;
					}
				},
				[INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => (
					<a className="article__link" target="_blank" rel="noreferrer noopener" href={`${node.data.uri}`}>
						{children}
					</a>
				),
				[INLINES.ENTRY_HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
					const entry = hyperLinksMap.get(node.data.target.sys.id);
					if (entry?.__typename === "Article") {
						return (
							<Link href={`/article/${entry.slug}`} className="article__link">
								{children}
							</Link>
						);
					}
					if (entry?.__typename === "Service") {
						return (
							<Link href={`/service/${entry.slug}`} className="article__link">
								{children}
							</Link>
						);
					}
				},
			},
		};
	}

	function renderOptionsForStages(json: any) {
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
						<Image src={bgImg.url} alt={title} className="service__img" fill />
						<h1 className="service__title">{language === "ua" ? title : titleEn}</h1>
					</div>
					<div className="container">
						<article className="service__article">
							<div className="service__description">
								{documentToReactComponents(
									language === "ua" ? description.json : descriptionEn.json,
									language === "ua"
										? renderOptionsForDescription(description.links)
										: renderOptionsForDescription(descriptionEn.links)
								)}
							</div>
							{subTitle && subTitleEn && <h2 className="service__h2">{language === "ua" ? subTitle : subTitleEn}</h2>}
							{stages && stagesEn && (
								<div className="service__content">
									{documentToReactComponents(
										language === "ua" ? stages.json : stagesEn.json,
										language === "ua" ? renderOptionsForStages(stages.json) : renderOptionsForStages(stagesEn.json)
									)}
								</div>
							)}
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
