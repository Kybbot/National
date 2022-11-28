import React, { ReactNode, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { Block, BLOCKS, Inline } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { ContactForm, Footer, Header, Modal, Seo } from "../../components";

import { useLanguage } from "../../hooks/useLanguage";
import { useModal } from "../../hooks/useModal";
import useFormattedDate from "../../hooks/useFormattedDate";
import { getAllArticlesSlugs, getArticleBySlug } from "../../contentful";

import { translation } from "../../utils/translation";

import { GetAllArticlesSlugsQuery, GetArticleBySlugQuery } from "../../@types/contentfulSchema";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllArticlesSlugs();

	return {
		paths: slugs.articleCollection.items.map((item) => ({ params: { slug: item.slug } })),
		fallback: false,
	};
};

type Props = {
	post: GetArticleBySlugQuery;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const slugName = context.params!.slug;

	const post = await getArticleBySlug(slugName);
	const slugs = await getAllArticlesSlugs();

	return {
		props: { post, slugs },
	};
};

type ArticleProps = {
	post: GetArticleBySlugQuery;
	slugs: GetAllArticlesSlugsQuery;
};

const Article: NextPage<ArticleProps> = ({ post, slugs }) => {
	const { isActive, closeModal, openModal } = useModal();
	const { language, changeLanguage } = useLanguage();

	const [location, setLocation] = useState<Location | null>(null);
	const [copied, setCopied] = useState(false);
	const [copiedText, setCopiedText] = useState("");
	const [slugIndex, setSlugIndex] = useState(0);

	const {
		image: { url },
		title,
		titleEn,
		slug,
		date,
		description,
		descriptionEn,
		text,
		textEn,
	} = post.articleCollection.items[0];

	const finalDate = useFormattedDate(date);

	function renderOptions() {
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
			},
		};
	}

	const copyToClipBoard = async () => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText && location) {
			await navigator.clipboard.writeText(location.href);
			setCopiedText(translation["artilceLink"][language]);
		} else {
			setCopiedText("Clipboard doesn't work");
		}
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	useEffect(() => {
		if (window) {
			setLocation(window.location);
		}

		const index = slugs.articleCollection.items.findIndex((item) => item.slug === slug);
		setSlugIndex(index);
	}, [slugs, slug]);

	return (
		<>
			<Seo title={title} description={description} img={url} />
			<Header language={language} translation={translation} changeLanguage={changeLanguage} />
			<main>
				<Modal overlay active={isActive} closeModal={closeModal} displayType="flex">
					<ContactForm active={isActive} closeModal={closeModal} language={language} translation={translation} />
				</Modal>
				<div className="article">
					<div className="container">
						<article className="blog__article">
							<div className="blog__wrapper">
								<Image className="blog__img" src={url} alt={title} fill />
							</div>
							<div className="blog__info">
								<div className="blog__top">
									<h1 className="blog__name">{language === "ua" ? title : titleEn}</h1>
									<time className="blog__date" dateTime={`${finalDate.day} - ${finalDate.month}`}>
										<span className="blog__day">{finalDate.day}</span>
										<span className="blog__month">{language === "ua" ? finalDate.monthUk : finalDate.month}</span>
									</time>
								</div>
								<div className="blog__bottom">
									<p className="blog__text">{language === "ua" ? description : descriptionEn}</p>
								</div>
							</div>
							<div className="article__content">
								{documentToReactComponents(language === "ua" ? text.json : textEn.json, renderOptions())}
							</div>
							<div className="article__btns">
								<div className="article__socials">
									<p className="article__socials-name">{translation["artilceShare"][language]}</p>
									<button
										className={`article__social article__social--btn ${copied ? "article__social--active" : ""}`}
										data-title={copiedText}
										onClick={copyToClipBoard}
									>
										<Image
											className="article__social-img"
											src="/img/socials/link.svg"
											width="68"
											height="68"
											alt="Link"
										/>
									</button>
									<a
										href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//${
											location && location.host
										}/article/${slug}`}
										className="article__social"
										target="_blank"
										rel="noreferrer"
									>
										<Image
											className="article__social-img"
											src="/img/socials/facebook-red.png"
											width="68"
											height="68"
											alt="Facebook"
										/>
									</a>
									<a
										href={`https://t.me/share/url?url=${location && location.href}`}
										className="article__social"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Image
											className="article__social-img"
											src="/img/socials/telegram-red.png"
											width="68"
											height="68"
											alt="Telegram"
										/>
									</a>
								</div>
								<div className="blog__pagination">
									<Link
										href={`${
											slugIndex === 0
												? `${slugs.articleCollection.items[slugIndex].slug}`
												: `${slugs.articleCollection.items[slugIndex - 1].slug}`
										}`}
										className={`blog__nav blog__prev ${slugIndex === 0 ? `blog__nav--disabled` : `blog__active`}`}
										aria-label="Prev 3 articles from blog"
									>
										<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.887 8.59338L2.13512 0.843587C1.96914 0.695627 1.75029 0.605713 1.51044 0.605713C0.991773 0.605713 0.57131 1.02618 0.57131 1.54484C0.57131 1.82678 0.695548 2.0797 0.892263 2.25184L8.09892 8.63337L0.867835 15.4163L0.867902 15.4164C0.685334 15.5877 0.571289 15.8312 0.571289 16.1013C0.571289 16.62 0.991752 17.0405 1.51042 17.0405C1.7639 17.0405 1.99392 16.94 2.16287 16.7768L10.887 8.59338Z"
												fill="currentColor"
											/>
										</svg>
									</Link>
									<Link
										href={`${
											slugIndex === slugs.articleCollection.items.length - 1
												? `${slugs.articleCollection.items[slugIndex].slug}`
												: `${slugs.articleCollection.items[slugIndex + 1].slug}`
										}`}
										className={`blog__nav blog__next  ${
											slugIndex === slugs.articleCollection.items.length - 1 ? `blog__nav--disabled` : `blog__active`
										}`}
										aria-label="Next 3 articles from blog"
									>
										<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.887 8.59338L2.13512 0.843587C1.96914 0.695627 1.75029 0.605713 1.51044 0.605713C0.991773 0.605713 0.57131 1.02618 0.57131 1.54484C0.57131 1.82678 0.695548 2.0797 0.892263 2.25184L8.09892 8.63337L0.867835 15.4163L0.867902 15.4164C0.685334 15.5877 0.571289 15.8312 0.571289 16.1013C0.571289 16.62 0.991752 17.0405 1.51042 17.0405C1.7639 17.0405 1.99392 16.94 2.16287 16.7768L10.887 8.59338Z"
												fill="currentColor"
											/>
										</svg>
									</Link>
								</div>
							</div>
						</article>
					</div>
				</div>
			</main>
			<Footer language={language} translation={translation} openModal={openModal} />
		</>
	);
};

export default Article;
