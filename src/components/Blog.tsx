import React, { FC, useRef, useState } from "react";
import Image from "next/image";

import { Article } from "./Article";

import { translationType } from "../utils/translation";

import { GetAllArticlesQuery } from "../@types/contentfulSchema";

type BlogProps = {
	articles: GetAllArticlesQuery;
	language: "en" | "ua";
	translation: translationType;
};

export const Blog: FC<BlogProps> = ({ articles, language, translation }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const linkRef = useRef<HTMLAnchorElement>(null);

	const articlesPerPage = 3;
	const lastArticleInex = currentPage * articlesPerPage;
	const firstArticleIndex = lastArticleInex - articlesPerPage;
	const currentArticles = articles.articleCollection.items.slice(firstArticleIndex, lastArticleInex);

	const totalPages = Math.ceil(articles.articleCollection.total / articlesPerPage);

	const prevPageHandler = () => {
		setCurrentPage((prevState) => (prevState === 1 ? 1 : prevState - 1));
		linkRef.current?.click();
	};

	const nextPageHandler = () => {
		setCurrentPage((prevState) => (prevState === totalPages ? prevState : prevState + 1));
		linkRef.current?.click();
	};

	return (
		<section className="blog" aria-labelledby="blog">
			<Image className="blog__dec" src="/img/names/blog-name.svg" alt="" height="1715" width="262" aria-hidden="true" />
			<div className="container">
				<h2 className="blog__title" id="blog">
					{translation["blogTitle"][language]}
				</h2>
				<a ref={linkRef} href="#blog" style={{ display: "none" }}>
					{translation["blogTitle"][language]}
				</a>
				<div className="blog__container">
					{currentArticles.map((item) => (
						<Article key={item.slug} data={item} language={language} translation={translation} />
					))}
				</div>
				<div className="blog__pagination">
					<button
						className={`blog__nav blog__prev ${currentPage !== 1 ? "blog__active" : ""}`}
						disabled={currentPage === 1}
						aria-label="Prev 3 articles from blog"
						onClick={prevPageHandler}
					>
						<svg
							width="17"
							height="27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							focusable="false"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 13.88 14.37 26.6a1.54 1.54 0 0 0 2.58-1.14c0-.46-.2-.88-.52-1.16L4.58 13.81 16.46 2.67A1.54 1.54 0 0 0 15.4 0c-.4 0-.78.16-1.06.43L0 13.88Z"
								fill="currentColor"
							/>
						</svg>
					</button>
					<button
						className={`blog__nav blog__next ${currentPage !== totalPages ? "blog__active" : ""} `}
						disabled={currentPage === totalPages}
						aria-label="Next 3 articles from blog"
						onClick={nextPageHandler}
					>
						<svg
							width="17"
							height="27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							focusable="false"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 13.88 14.37 26.6a1.54 1.54 0 0 0 2.58-1.14c0-.46-.2-.88-.52-1.16L4.58 13.81 16.46 2.67A1.54 1.54 0 0 0 15.4 0c-.4 0-.78.16-1.06.43L0 13.88Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};
