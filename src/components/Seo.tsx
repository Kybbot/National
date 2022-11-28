import Head from "next/head";
import React, { FC } from "react";

type SeoProps = {
	title?: string;
	description?: string;
	img?: string;
};

export const Seo: FC<SeoProps> = ({
	title = "National - українське контрактне виробництво",
	description = "Вже більше 5 років ми займаємося контрактним виробництвом. Завдяки Нам, компанія-замовник здатна зекономити час та ресурси на виготовлення власного продукту.",
	img = "https://national-psi.vercel.app/img/ogImage.jpg",
}) => {
	return (
		<Head>
			<title>National - українське контрактне виробництво</title>
			<meta name="description" content={description} />

			<meta property="og:type" content="website" />
			{/* <meta property="og:url" content="" /> */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={img} />
			<meta name="twitter:card" content="summary_large_image" />

			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />

			<link rel="icon" href="/favicon.ico" />

			<meta name="theme-color" content="#cd2d3d" />
		</Head>
	);
};
