import React, { FC } from "react";
import Image from "next/image";

type ContactForm = {
	active: boolean;
	closeModal: () => void;
};

export const ContactForm: FC<ContactForm> = ({ active, closeModal }) => {
	return (
		<form className={`contactForm ${active ? "contactForm--active" : ""}`}>
			<div className="container">
				<div className="contactForm__container">
					<div className="contactForm__wrapper">
						<h2 className="contactForm__title">Залишити заявку</h2>
						<input type="text" className="contactForm__input" placeholder="Прізвище Імʼя" />
						<input type="text" className="contactForm__input" placeholder="Номер телефону" />
						<textarea className="contactForm__textarea" placeholder="Коментар..."></textarea>
						<button className="contactForm__btn" type="submit">
							Надіслати
						</button>
					</div>
					<div className="contactForm__contact">
						<h2 className="contactForm__subtitle">КОНТАКТИ</h2>
						<p className="contactForm__text">Ми завжди з вами на звʼязку!</p>
						<div className="contactForm__info">
							<div className="contactForm__contacts">
								<div className="contactForm__emails">
									<Image
										className="contactForm__email-svg"
										src="/img/contacts/email.svg"
										alt="Email"
										width="29"
										height="29"
									/>
									<a href="mailto:ani@ani.ua" className="contactForm__email">
										ani@ani.ua
									</a>
								</div>
								<div className="contactForm__phones">
									<Image
										className="contactForm__email-svg"
										src="/img/contacts/call.svg"
										alt="Email"
										width="29"
										height="29"
									/>
									<div>
										<a href="tel:+380567903807" className="contactForm__phone">
											+380567903807
										</a>
										<a href="tel:+380567950505" className="contactForm__phone">
											+380567950505
										</a>
									</div>
								</div>
								<div className="contactForm__addresses">
									<p className="contactForm__address">
										<Image
											className="contactForm__email-svg"
											src="/img/contacts/location.svg"
											alt="Email"
											width="29"
											height="29"
										/>
										<span>
											<span>Юридична адреса:</span>
											<span>Вул. Магдебурзького права, 2,</span>
											<span>м.Дніпро, Україна, 49000</span>
										</span>
									</p>
									<p className="contactForm__address">
										<Image
											className="contactForm__email-svg"
											src="/img/contacts/location.svg"
											alt="Email"
											width="29"
											height="29"
										/>
										<span>
											<span>Адреса потужностей (об’єкта)</span>
											<span>Виробництва: вул.Юдіна 6,</span>
											<span>м.Дніпро, Україна, 49035.</span>
										</span>
									</p>
								</div>
							</div>
							<div className="contactForm__socials">
								<a href="#" className="contactForm__social">
									<Image
										className="contactForm__social-img"
										src="/img/socials/facebook-red.png"
										width="44"
										height="44"
										alt="Facebook"
									/>
								</a>
								<a href="#" className="contactForm__social">
									<Image
										className="contactForm__social-img"
										src="/img/socials/youtube-red.png"
										width="44"
										height="44"
										alt="Facebook"
									/>
								</a>
								<a href="#" className="contactForm__social">
									<Image
										className="contactForm__social-img"
										src="/img/socials/instagram-red.png"
										width="44"
										height="44"
										alt="Facebook"
									/>
								</a>
								<a href="#" className="contactForm__social">
									<Image
										className="contactForm__social-img"
										src="/img/socials/telegram-red.png"
										width="44"
										height="44"
										alt="Facebook"
									/>
								</a>
							</div>
						</div>
					</div>
					<button className="footer__close" type="button" aria-label="Close modal form" onClick={closeModal}>
						<svg width="23" height="22" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.17871 2L25.1787 24M2.17871 24L25.1787 2" stroke="currentColor" strokeWidth="4" />
						</svg>
					</button>
				</div>
			</div>
		</form>
	);
};
