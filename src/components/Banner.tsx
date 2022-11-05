import Image from "next/image";
import React, { FC } from "react";

export const Banner: FC = () => {
	return (
		<section className="banner">
			<div className="container">
				<div className="banner__container">
					<Image src="/img/names/red-name.svg" alt="National" className="banner__img" width="343" height="52" />
					<h1 className="banner__title">
						Ми надаємо найкращі умови <span className="accent-text">для реалізації Ваших продуктів!</span>
					</h1>
					<button className="btn banner__btn" type="button">
						Звʼязатись
					</button>
				</div>
			</div>
			<div className="banner__dec">
				<Image
					src="/img/names/main-bg-name1.svg"
					alt="National"
					className="banner__svg banner__svg--1"
					width="375"
					height="60"
				/>
				<Image
					src="/img/names/main-bg-name2.svg"
					alt="National"
					className="banner__svg banner__svg--2"
					width="375"
					height="60"
				/>
			</div>
			<div className="banner__gradient"></div>
		</section>
	);
};
