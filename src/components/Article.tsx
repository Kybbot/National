import React, { FC } from "react";
import Image from "next/image";

import useFormattedDate from "../hooks/useFormattedDate";

type ArticleProps = {
	data: {
		title: string;
		slug: string;
		date: any;
		description: string;
		titleUk: string;
		descriptionUk: string;
		image: {
			url: string;
		};
	};
};

export const Article: FC<ArticleProps> = ({ data }) => {
	const date = useFormattedDate(data.date);

	return (
		<article className="blog__article" key={data.slug}>
			<div className="blog__wrapper">
				<Image className="blog__img" src={data.image.url} alt={data.title} fill />
			</div>
			<div className="blog__info">
				<div className="blog__top">
					<h3 className="blog__name">{data.title}</h3>
					<time className="blog__date" dateTime={`${date.day} - ${date.month}`}>
						<span className="blog__day">{date.day}</span>
						<span className="blog__month">{date.month}</span>
					</time>
				</div>
				<div className="blog__bottom">
					<p className="blog__text">{data.description}</p>
					<div className="blog__btns">
						<button type="button" className="blog__btn">
							Читати
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};
