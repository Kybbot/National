import React, { FC } from "react";
import Head from "next/head";

type SeoProps = {
	title?: string;
	description?: string;
	img?: string;
};

export const Seo: FC<SeoProps> = ({
	title = "National - українське контрактне виробництво",
	description = "Вже більше 5 років ми займаємося контрактним виробництвом. Завдяки Нам, компанія-замовник здатна зекономити час та ресурси на виготовлення власного продукту.",
	img = "https://www.national.ua/img/ogImage.jpg",
}) => {
	return (
		<Head>
			<title>National - українське контрактне виробництво</title>
			<meta name="description" content={description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.national.ua/" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={img} />
			<meta name="twitter:card" content="summary_large_image" />

			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />

			<link rel="icon" type="image/jpg" sizes="16x16" href="/img/favicons/16х16.jpg" />
			<link rel="icon" type="image/jpg" sizes="32x32" href="/img/favicons/32х32.jpg" />
			<link rel="apple-touch-icon" sizes="228x228" href="/img/favicons/228х228.jpg" />

			<meta name="theme-color" content="#cd2d3d" />
		</Head>
	);
};
