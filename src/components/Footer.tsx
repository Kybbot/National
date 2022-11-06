import Image from "next/image";
import React, { FC } from "react";

export const Footer: FC = () => {
	return (
		<>
			<footer className="footer">
				<Image
					className="footer__dec"
					src="/img/names/footer-name.svg"
					alt=""
					width="231"
					height="512"
					aria-hidden="true"
				/>
				<div className="container">
					<div className="footer__container">
						<div className="footer__main">
							<div className="footer__top">
								<Image className="footer__logo" src="/img/svg/preloader.svg" alt="National" width="195" height="30" />
								<ul className="footer__nav">
									<li className="footer__elem">
										<a href="#" className="footer__link">
											Виробництво
										</a>
									</li>
									<li className="footer__elem">
										<a href="#" className="footer__link">
											Послуги
										</a>
									</li>
									<li className="footer__elem">
										<a href="#" className="footer__link">
											Продукція
										</a>
									</li>
									<li className="footer__elem">
										<a href="#" className="footer__link">
											Сертифікати
										</a>
									</li>
									<li className="footer__elem">
										<a href="#" className="footer__link">
											Клієнти
										</a>
									</li>
									<li className="footer__elem">
										<a href="#" className="footer__link">
											Блог
										</a>
									</li>
								</ul>
								<button className="footer__btn">Зв’язатись</button>
								<hr className="footer__hr" />
							</div>
							<div className="footer__bottom">
								<h2 className="footer__title">КОНТАКТИ</h2>
								<div className="footer__contacts">
									<div className="footer__emails">
										<Image
											className="footer__email-svg"
											src="/img/contacts/email.svg"
											alt="Email"
											width="29"
											height="29"
										/>
										<a href="mailto:ani@ani.ua" className="footer__email">
											ani@ani.ua
										</a>
									</div>
									<div className="footer__phones">
										<Image
											className="footer__email-svg"
											src="/img/contacts/call.svg"
											alt="Email"
											width="29"
											height="29"
										/>
										<div>
											<a href="tel:+380567903807" className="footer__phone">
												+380567903807
											</a>
											<a href="tel:+380567950505" className="footer__phone">
												+380567950505
											</a>
										</div>
									</div>
									<div className="footer__addresses">
										<p className="footer__address">
											<Image
												className="footer__email-svg"
												src="/img/contacts/location.svg"
												alt="Email"
												width="29"
												height="29"
											/>
											<div>
												<span>Юридична адреса:</span>
												<span>Вул. Магдебурзького права, 2,</span>
												<span>м.Дніпро, Україна, 49000</span>
											</div>
										</p>
										<p className="footer__address">
											<Image
												className="footer__email-svg"
												src="/img/contacts/location.svg"
												alt="Email"
												width="29"
												height="29"
											/>
											<div>
												<span>Адреса потужностей (об’єкта)</span>
												<span>Виробництва: вул.Юдіна 6,</span>
												<span>м.Дніпро, Україна, 49035.</span>
											</div>
										</p>
									</div>
								</div>
								<div className="footer__socials">
									<a href="#" className="footer__social">
										<Image
											className="footer__social-img"
											src="/img/socials/facebook.png"
											width="44"
											height="44"
											alt="Facebook"
										/>
									</a>
									<a href="#" className="footer__social">
										<Image
											className="footer__social-img"
											src="/img/socials/youtube.png"
											width="44"
											height="44"
											alt="Facebook"
										/>
									</a>
									<a href="#" className="footer__social">
										<Image
											className="footer__social-img"
											src="/img/socials/instagram.png"
											width="44"
											height="44"
											alt="Facebook"
										/>
									</a>
									<a href="#" className="footer__social">
										<Image
											className="footer__social-img"
											src="/img/socials/telegram.png"
											width="44"
											height="44"
											alt="Facebook"
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
