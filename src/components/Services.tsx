import React, { FC, RefObject, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { translationType } from "../utils/translation";

type ServicesProps = {
	language: "en" | "ua";
	translation: translationType;
	openModal: (openBtnRef: RefObject<HTMLButtonElement>) => void;
};

export const Services: FC<ServicesProps> = ({ language, translation, openModal }) => {
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<section className="services" aria-labelledby="services">
			<div className="container">
				<h2 className="services__title" id="services">
					{translation["servicesTitle"][language]}
				</h2>
				<div className="services__container">
					<div className="services__item">
						<Image
							src="/img/services/create.svg"
							className="services__svg"
							alt=""
							width="46"
							height="45"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							{translation["servicesItem1"][language]}
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/drinks.svg"
							className="services__svg"
							alt=""
							width="57"
							height="46"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							{translation["servicesItem2"][language]}
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/conservation.svg"
							className="services__svg"
							alt=""
							width="50"
							height="50"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							{translation["servicesItem3"][language]}
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/food.svg"
							alt=""
							className="services__svg"
							width="57"
							height="51"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							{translation["servicesItem4"][language]}
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/honey.svg"
							alt=""
							className="services__svg"
							width="50"
							height="41"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							{translation["servicesItem5"][language]}
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/sauces.svg"
							alt=""
							className="services__svg"
							width="49"
							height="53"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							{translation["servicesItem6"][language]}
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/package.svg"
							alt=""
							className="services__svg"
							width="38"
							height="49"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							{translation["servicesItem7"][language]}
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/packing.svg"
							alt=""
							className="services__svg"
							width="52"
							height="52"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							{translation["servicesItem8"][language]}
						</Link>
					</div>
				</div>
				<button ref={btnRef} className="btn services__btn" type="button" onClick={() => openModal(btnRef)}>
					{translation["contactBtn"][language]}
				</button>
			</div>
		</section>
	);
};
