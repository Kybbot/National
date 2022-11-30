import React, { FC, RefObject, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { translationType } from "../utils/translation";

import { GetAllServicesQuery } from "../@types/contentfulSchema";

type ServicesProps = {
	services: GetAllServicesQuery;
	language: "en" | "ua";
	translation: translationType;
	openModal: (openBtnRef: RefObject<HTMLButtonElement>) => void;
};

export const Services: FC<ServicesProps> = ({ services, language, translation, openModal }) => {
	const btnRef = useRef<HTMLButtonElement>(null);
	console.log(services);

	return (
		<section className="services" aria-labelledby="services">
			<div className="container">
				<h2 className="services__title" id="services">
					{translation["servicesTitle"][language]}
				</h2>
				<div className="services__container">
					{services.serviceCollection.items.map((item) => (
						<div className="services__item" key={item.title}>
							<Image
								src={item.icon.url}
								className="services__svg"
								alt=""
								width={item.icon.width / 1.5}
								height={item.icon.height / 1.5}
								aria-hidden="true"
							/>
							<Link href={`/service/${item.slug}`} className="services__link">
								{language === "ua" ? item.title : item.titleEn}
							</Link>
						</div>
					))}
				</div>
				<button ref={btnRef} className="btn services__btn" type="button" onClick={() => openModal(btnRef)}>
					{translation["contactBtn"][language]}
				</button>
			</div>
		</section>
	);
};
