import React, { ReactNode, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { Block, BLOCKS, Inline, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { ContactForm, Footer, Header, Modal, Seo } from "../../components";

import { useLanguage } from "../../hooks/useLanguage";
import { useModal } from "../../hooks/useModal";
import useFormattedDate from "../../hooks/useFormattedDate";
import { getAllArticlesSlugs, getArticleBySlug } from "../../contentful";

import { translation } from "../../utils/translation";

import { GetAllArticlesSlugsQuery, GetArticleBySlugQuery } from "../../@types/contentfulSchema";
import { TextAsset, TextLink, TextLinks } from "../../@types/contentfulRichText";

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

	function renderOptions(links: TextLinks) {
		const assetMap = new Map<string, TextAsset>();
		for (const asset of links.assets.block) {
			assetMap.set(asset.sys.id, asset);
		}

		const hyperLinksMap = new Map<string, TextLink>();
		for (const entry of links.entries.hyperlink) {
			hyperLinksMap.set(entry.sys.id, entry);
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
								{documentToReactComponents(
									language === "ua" ? text.json : textEn.json,
									language === "ua" ? renderOptions(text.links) : renderOptions(textEn.links)
								)}
							</div>
							<div className="article__btns">
								<div className="article__socials">
									<p className="article__socials-name">{translation["artilceShare"][language]}</p>
									<button
										className={`article__social article__social--btn ${copied ? "article__social--active" : ""}`}
										data-title={copiedText}
										onClick={copyToClipBoard}
									>
										<svg className="article__social-img" width="68" height="68" aria-hidden="true">
											<use xlinkHref="/img/icons.svg#link" />
										</svg>
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
										<svg width="11" height="18" aria-hidden="true">
											<use xlinkHref="/img/icons.svg#arrow" />
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
										<svg width="11" height="18" aria-hidden="true">
											<use xlinkHref="/img/icons.svg#arrow" />
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
