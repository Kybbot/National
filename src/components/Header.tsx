import React, { FC, useState } from "react";
import Image from "next/image";

export const Header: FC = () => {
	const [isOpen, setOpen] = useState(false);

	const toggleMobileNav = () => {
		setOpen((prev) => !prev);
	};

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
										<a href="#" className="header__link">
											Послуги
										</a>
									</li>
									<li className="header__element">
										<a href="#" className="header__link">
											Продукція
										</a>
									</li>
									<li className="header__element">
										<a href="#" className="header__link">
											Сертифікати
										</a>
									</li>
									<li className="header__element">
										<a href="#" className="header__link">
											Блог
										</a>
									</li>
									<li className="header__element">
										<a href="#" className="header__link">
											Контакти
										</a>
									</li>
								</ul>
							</nav>
							<button type="button" className="header__lng">
								ENG
							</button>
						</div>
						<button type="button" className="header__btn" aria-label="Open menu" onClick={toggleMobileNav}>
							<Image
								src="/img/svg/burger.svg"
								alt="National"
								className="header__logo"
								width="25"
								height="19"
								aria-hidden="true"
							/>
						</button>
					</div>
				</div>
			</div>
			<div className={`header__mobile ${isOpen ? "header__mobile--open" : ""}`}>
				<nav className="header__mobile-nav">
					<ul className="header__mobile-list">
						<li className="header__element">
							<a href="#" className="header__link">
								Послуги
							</a>
						</li>
						<li className="header__element">
							<a href="#" className="header__link">
								Продукція
							</a>
						</li>
						<li className="header__element">
							<a href="#" className="header__link">
								Сертифікати
							</a>
						</li>
						<li className="header__element">
							<a href="#" className="header__link">
								Блог
							</a>
						</li>
						<li className="header__element">
							<a href="#" className="header__link">
								Контакти
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
