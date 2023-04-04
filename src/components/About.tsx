import React, { FC } from "react";
import Image from "next/image";

import { translationType } from "../utils/translation";

type AboutProps = {
	language: "en" | "ua";
	translation: translationType;
};

export const About: FC<AboutProps> = ({ language, translation }) => {
	return (
		<>
			<section className="about" aria-labelledby="about">
				<div className="about__container">
					<div className="about__img">
						<Image src="/img/pripravka.png" alt="Company Food" fill />
						<Image src="/img/tomat.png" alt="Company Food" fill />
						<Image src="/img/honey.png" alt="Company Food" fill />
					</div>
					<h2 className="about__title" id="about">
						{translation["aboutTitle"][language]}
					</h2>
					<div className="about__info">
						<p className="about__text">{translation["aboutText1"][language]}</p>
						<p className="about__subtext">{translation["aboutText2"][language]}</p>
					</div>
				</div>
			</section>
			<div className="container">
				<h2 className="about__subtitle">
					{translation["aboutSubtitle1"][language]}{" "}
					<span className="accent-text">{translation["aboutSubtitle2"][language]}</span>
				</h2>
			</div>
		</>
	);
};
