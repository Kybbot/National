import React, { FC } from "react";
import Image from "next/image";

import useFormattedDate from "../hooks/useFormattedDate";

import { translationType } from "../utils/translation";
import Link from "next/link";

type BlogItemProps = {
	data: {
		title: string;
		slug: string;
		date: any;
		description: string;
		titleEn: string;
		descriptionEn: string;
		image: {
			url: string;
		};
	};
	language: "en" | "ua";
	translation: translationType;
};

export const BlogItem: FC<BlogItemProps> = ({ data, language, translation }) => {
	const date = useFormattedDate(data.date);

	return (
		<article className="blog__article" key={data.slug}>
			<div className="blog__wrapper">
				<Image className="blog__img" src={data.image.url} alt={data.title} fill />
			</div>
			<div className="blog__info">
				<div className="blog__top">
					<h3 className="blog__name">{language === "ua" ? data.title : data.titleEn}</h3>
					<time className="blog__date" dateTime={`${date.day} - ${date.month}`}>
						<span className="blog__day">{date.day}</span>
						<span className="blog__month">{language === "ua" ? date.monthUk : date.month}</span>
					</time>
				</div>
				<div className="blog__bottom">
					<p className="blog__text">{language === "ua" ? data.description : data.descriptionEn}</p>
					<div className="blog__btns">
						<Link href={`/article/${data.slug}`} type="button" className="blog__btn">
							{translation["blogBtn"][language]}
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
};
