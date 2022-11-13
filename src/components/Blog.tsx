import React, { FC, useRef, useState } from "react";
import Image from "next/image";

import { BlogItem } from "./BlogItem";

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
						<BlogItem key={item.slug} data={item} language={language} translation={translation} />
					))}
				</div>
				<div className="blog__pagination">
					<button
						className={`blog__nav blog__prev ${currentPage !== 1 ? "blog__active" : ""}`}
						disabled={currentPage === 1}
						aria-label="Prev 3 articles from blog"
						onClick={prevPageHandler}
					>
						<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10.887 8.59338L2.13512 0.843587C1.96914 0.695627 1.75029 0.605713 1.51044 0.605713C0.991773 0.605713 0.57131 1.02618 0.57131 1.54484C0.57131 1.82678 0.695548 2.0797 0.892263 2.25184L8.09892 8.63337L0.867835 15.4163L0.867902 15.4164C0.685334 15.5877 0.571289 15.8312 0.571289 16.1013C0.571289 16.62 0.991752 17.0405 1.51042 17.0405C1.7639 17.0405 1.99392 16.94 2.16287 16.7768L10.887 8.59338Z"
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
						<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10.887 8.59338L2.13512 0.843587C1.96914 0.695627 1.75029 0.605713 1.51044 0.605713C0.991773 0.605713 0.57131 1.02618 0.57131 1.54484C0.57131 1.82678 0.695548 2.0797 0.892263 2.25184L8.09892 8.63337L0.867835 15.4163L0.867902 15.4164C0.685334 15.5877 0.571289 15.8312 0.571289 16.1013C0.571289 16.62 0.991752 17.0405 1.51042 17.0405C1.7639 17.0405 1.99392 16.94 2.16287 16.7768L10.887 8.59338Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};
