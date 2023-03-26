import React, { FC, RefObject, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { translationType } from "../utils/translation";
import { socials } from "../constants";

type FooterProps = {
	language: "en" | "ua";
	translation: translationType;
	openModal: (openBtnRef: RefObject<HTMLButtonElement> | RefObject<HTMLInputElement>) => void;
};

export const Footer: FC<FooterProps> = ({ language, translation, openModal }) => {
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<footer className="footer" id="contacts">
				<svg className="footer__dec" width="231" height="512" aria-hidden="true">
					<use xlinkHref="/img/names.svg#footerName" />
				</svg>
				<div className="container">
					<div className="footer__container">
						<div className="footer__main">
							<div className="footer__top">
								<svg className="footer__logo" width="195" height="30" aria-hidden="true">
									<use xlinkHref="/img/icons.svg#preloader" />
								</svg>
								<ul className="footer__nav">
									<li className="footer__elem">
										<Link href="/#about" className="footer__link" scroll={false}>
											{translation["navProduction"][language]}
										</Link>
									</li>
									<li className="footer__elem">
										<Link href="/#services" className="footer__link" scroll={false}>
											{translation["navServices"][language]}
										</Link>
									</li>
									<li className="footer__elem">
										<Link href="/#products" className="footer__link" scroll={false}>
											{translation["navProducts"][language]}
										</Link>
									</li>
									<li className="footer__elem">
										<a href="/Certificates.pdf" className="footer__link" target="_blank" rel="noreferrer noopener">
											{translation["navCertificate"][language]}
										</a>
									</li>
									<li className="footer__elem">
										<Link href="/#partners" className="footer__link" scroll={false}>
											{translation["navClients"][language]}
										</Link>
									</li>
									<li className="footer__elem">
										<Link href="/#blog" className="footer__link" scroll={false}>
											{translation["navBlog"][language]}
										</Link>
									</li>
								</ul>
								<button ref={btnRef} className="footer__btn" type="button" onClick={() => openModal(btnRef)}>
									{translation["contactBtn"][language]}
								</button>
								<hr className="footer__hr" />
							</div>
							<div className="footer__bottom">
								<h2 className="footer__title">{translation["navContacts"][language]}</h2>
								<div className="footer__contacts">
									<div className="footer__emails">
										<svg className="footer__email-svg" width="29" height="29" aria-hidden="true">
											<use xlinkHref="/img/icons.svg#email" />
										</svg>
										<a href={`mailto:${socials.email}`} className="footer__email">
											{socials.email}
										</a>
									</div>
									<div className="footer__phones">
										<svg className="footer__email-svg" width="29" height="29" aria-hidden="true">
											<use xlinkHref="/img/icons.svg#call" />
										</svg>
										<div>
											<a href={`tel:${socials.phone}`} className="footer__phone">
												{socials.phone}
											</a>
										</div>
									</div>
									<div className="footer__addresses">
										<p className="footer__address">
											<svg className="footer__email-svg" width="29" height="29" aria-hidden="true">
												<use xlinkHref="/img/icons.svg#location" />
											</svg>
											<span>
												<span>{translation["contactAddress1"][language]}</span>
												<span>{translation["contactAddress2"][language]}</span>
												<span>{translation["contactAddress3"][language]}</span>
											</span>
										</p>
										<p className="footer__address">
											<svg className="footer__email-svg" width="29" height="29" aria-hidden="true">
												<use xlinkHref="/img/icons.svg#location" />
											</svg>
											<span>
												<span>{translation["contactAddress4"][language]}</span>
												<span>{translation["contactAddress5"][language]}</span>
												<span>{translation["contactAddress6"][language]}</span>
											</span>
										</p>
									</div>
								</div>
								<div className="footer__socials">
									<a href="#" className="footer__social" target="_blank" rel="noreferrer noopener">
										<Image
											className="footer__social-img"
											src="/img/socials/facebook.png"
											width="44"
											height="44"
											alt="Facebook"
										/>
									</a>
									<a href={socials.telegram} className="footer__social" target="_blank" rel="noreferrer noopener">
										<Image
											className="footer__social-img"
											src="/img/socials/telegram.png"
											width="44"
											height="44"
											alt="Telegram"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="rights">
				<div className="container">
					<p className="rights__text">© NATIONAL 1992-{new Date().getFullYear()} All Rights Reserved</p>
				</div>
			</div>
		</>
	);
};
