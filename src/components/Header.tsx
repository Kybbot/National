import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { translationType } from "../utils/translation";
import { socials } from "../constants";

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
						<Link href="/">
							<svg className="header__logo" width="142" height="21" aria-label="National">
								<use xlinkHref="/img/icons.svg#preloader" />
							</svg>
						</Link>
						<div className="header__wrapper">
							<nav className="header__nav">
								<ul className="header__list">
									<li className="header__element">
										<Link href="/#services" className="header__link" scroll={false}>
											{translation["navServices"][language]}
										</Link>
									</li>
									<li className="header__element">
										<Link href="/#products" className="header__link" scroll={false}>
											{translation["navProducts"][language]}
										</Link>
									</li>
									<li className="header__element">
										<a href="/Certificates.pdf" className="header__link" target="_blank" rel="noreferrer noopener">
											{translation["navCertificate"][language]}
										</a>
									</li>
									<li className="header__element">
										<Link href="/#blog" className="header__link" scroll={false}>
											{translation["navBlog"][language]}
										</Link>
									</li>
									<li className="header__element">
										<Link href="/#contacts" className="header__link" scroll={false}>
											{translation["navContacts"][language]}
										</Link>
									</li>
								</ul>
							</nav>
							<select id="language" className="header__lng" value={language} onChange={changeLanguage}>
								<option className="header__option" value="en">
									ENG
								</option>
								<option className="header__option" value="ua">
									УКР
								</option>
							</select>
						</div>
						<button type="button" className="header__btn" aria-label="Open menu" onClick={toggleMobileNav}>
							<svg width="25" height="19" aria-hidden="true">
								<use xlinkHref="/img/icons.svg#burger" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className={`header__mobile ${isOpen ? "header__mobile--open" : ""}`}>
				<nav className="header__mobile-nav">
					<ul className="header__mobile-list">
						<li className="header__element">
							<Link href="/#services" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navServices"][language]}
							</Link>
						</li>
						<li className="header__element">
							<Link href="/#products" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navProducts"][language]}
							</Link>
						</li>
						<li className="header__element">
							<a
								href="/Certificates.pdf"
								className="header__link"
								target="_blank"
								rel="noreferrer noopener"
								onClick={toggleMobileNav}
							>
								{translation["navCertificate"][language]}
							</a>
						</li>
						<li className="header__element">
							<Link href="/#blog" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navBlog"][language]}
							</Link>
						</li>
						<li className="header__element">
							<Link href="/#contacts" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navContacts"][language]}
							</Link>
						</li>
					</ul>
				</nav>
				<select id="language" className="header__lng header__lng--mobile" value={language} onChange={changeLanguage}>
					<option className="header__option" value="en">
						ENG
					</option>
					<option className="header__option" value="ua">
						УКР
					</option>
				</select>
				<div className="header__socials">
					<a href="#" target="_blank" rel="noreferrer noopener">
						<Image src="/img/socials/facebook.png" width="44" height="44" alt="Facebook" />
					</a>
					<a href={socials.telegram} target="_blank" rel="noreferrer noopener">
						<Image src="/img/socials/telegram.png" width="44" height="44" alt="Telegram" />
					</a>
				</div>
			</div>
		</header>
	);
};
