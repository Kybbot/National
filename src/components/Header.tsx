import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

import { translationType } from "../utils/translation";

type HeaderProps = {
	language: "en" | "ua";
	translation: translationType;
	changeLanguage: () => void;
};

export const Header: FC<HeaderProps> = ({ language, translation, changeLanguage }) => {
	const [isOpen, setOpen] = useState(false);

	const toggleMobileNav = () => {
		setOpen((prev) => !prev);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("body--hidden");
		} else {
			document.body.classList.remove("body--hidden");
		}
	}, [isOpen]);

	return (
		<header className="header">
			<div className="header__top"></div>
			<div className="header__main">
				<div className="container">
					<div className="header__section">
						<Image src="/img/svg/preloader.svg" alt="National" className="header__logo" width="142" height="21" />
						<div className="header__wrapper">
							<nav className="header__nav">
								<ul className="header__list">
									<li className="header__element">
										<a href="#services" className="header__link">
											{translation["navServices"][language]}
										</a>
									</li>
									<li className="header__element">
										<a href="#products" className="header__link">
											{translation["navProducts"][language]}
										</a>
									</li>
									<li className="header__element">
										<a href="#" className="header__link">
											{translation["navCertificate"][language]}
										</a>
									</li>
									<li className="header__element">
										<a href="#blog" className="header__link">
											{translation["navBlog"][language]}
										</a>
									</li>
									<li className="header__element">
										<a href="#contacts" className="header__link">
											{translation["navContacts"][language]}
										</a>
									</li>
								</ul>
							</nav>
							<button type="button" className="header__lng" onClick={changeLanguage}>
								{translation["navBtn"][language]}
							</button>
						</div>
						<button type="button" className="header__btn" aria-label="Open menu" onClick={toggleMobileNav}>
							<Image src="/img/svg/burger.svg" alt="National" width="25" height="19" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
			<div className={`header__mobile ${isOpen ? "header__mobile--open" : ""}`}>
				<nav className="header__mobile-nav">
					<ul className="header__mobile-list">
						<li className="header__element">
							<a href="#services" className="header__link" onClick={toggleMobileNav}>
								{translation["navServices"][language]}
							</a>
						</li>
						<li className="header__element">
							<a href="#products" className="header__link" onClick={toggleMobileNav}>
								{translation["navProducts"][language]}
							</a>
						</li>
						<li className="header__element">
							<a href="#" className="header__link" onClick={toggleMobileNav}>
								{translation["navCertificate"][language]}
							</a>
						</li>
						<li className="header__element">
							<a href="#blog" className="header__link" onClick={toggleMobileNav}>
								{translation["navBlog"][language]}
							</a>
						</li>
						<li className="header__element">
							<a href="#contacts" className="header__link" onClick={toggleMobileNav}>
								{translation["navContacts"][language]}
							</a>
						</li>
					</ul>
				</nav>
				<div className="header__socials">
					<a href="#">
						<Image src="/img/socials/facebook.png" width="44" height="44" alt="Facebook" />
					</a>
					<a href="#">
						<Image src="/img/socials/youtube.png" width="44" height="44" alt="Facebook" />
					</a>
					<a href="#">
						<Image src="/img/socials/instagram.png" width="44" height="44" alt="Facebook" />
					</a>
					<a href="#">
						<Image src="/img/socials/telegram.png" width="44" height="44" alt="Facebook" />
					</a>
				</div>
			</div>
		</header>
	);
};
