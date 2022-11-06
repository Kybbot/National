import React, { FC } from "react";
import Image from "next/image";

export const Blog: FC = () => {
	return (
		<section className="blog">
			<Image className="blog__dec" src="/img/names/blog-name.svg" alt="" height="1715" width="262" aria-hidden="true" />
			<div className="container">
				<h2 className="blog__title">Блог</h2>
				<div className="blog__container">
					<article className="blog__article">
						<div className="blog__wrapper">
							<Image className="blog__img" src="/img/blogimg.jpg" alt="Burger" fill />
						</div>
						<div className="blog__info">
							<div className="blog__top">
								<h3 className="blog__name">Чекаєте на відкриття фастфуду?</h3>
								<time className="blog__date" dateTime="20:00">
									<span className="blog__day">01</span>
									<span className="blog__month">DEC</span>
								</time>
							</div>
							<div className="blog__bottom">
								<p className="blog__text">
									Оскільки запальні реакції — це хардвер нашого організму (тому здихатися їх не вийде і загалом
									небезпечно), найкращий спосіб запобігти їм — взагалі відмовитися від їжі, що пройшла ультраобробку.
								</p>
								<div className="blog__btns">
									<button type="button" className="blog__btn">
										Читати
									</button>
								</div>
							</div>
						</div>
					</article>
					<article className="blog__article blog__article--2">
						<div className="blog__wrapper">
							<Image className="blog__img" src="/img/blogimg.jpg" alt="Burger" fill />
						</div>
						<div className="blog__info">
							<div className="blog__top">
								<h3 className="blog__name">Чекаєте на відкриття фастфуду?</h3>
								<time className="blog__date" dateTime="20:00">
									<span className="blog__day">01</span>
									<span className="blog__month">DEC</span>
								</time>
							</div>
							<div className="blog__bottom">
								<p className="blog__text">
									Оскільки запальні реакції — це хардвер нашого організму (тому здихатися їх не вийде і загалом
									небезпечно), найкращий спосіб запобігти їм — взагалі відмовитися від їжі, що пройшла ультраобробку.
								</p>
								<div className="blog__btns">
									<button type="button" className="blog__btn">
										Читати
									</button>
								</div>
							</div>
						</div>
					</article>
					<article className="blog__article">
						<div className="blog__wrapper">
							<Image className="blog__img" src="/img/blogimg.jpg" alt="Burger" fill />
						</div>
						<div className="blog__info">
							<div className="blog__top">
								<h3 className="blog__name">Чекаєте на відкриття фастфуду?</h3>
								<time className="blog__date" dateTime="20:00">
									<span className="blog__day">01</span>
									<span className="blog__month">DEC</span>
								</time>
							</div>
							<div className="blog__bottom">
								<p className="blog__text">
									Оскільки запальні реакції — це хардвер нашого організму (тому здихатися їх не вийде і загалом
									небезпечно), найкращий спосіб запобігти їм — взагалі відмовитися від їжі, що пройшла ультраобробку.
								</p>
								<div className="blog__btns">
									<button type="button" className="blog__btn">
										Читати
									</button>
								</div>
							</div>
						</div>
					</article>
				</div>
				<div className="blog__pagination">
					<button className="blog__nav blog__prev" disabled aria-label="Prev 3 articles from blog">
						<svg
							width="17"
							height="27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							focusable="false"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 13.88 14.37 26.6a1.54 1.54 0 0 0 2.58-1.14c0-.46-.2-.88-.52-1.16L4.58 13.81 16.46 2.67A1.54 1.54 0 0 0 15.4 0c-.4 0-.78.16-1.06.43L0 13.88Z"
								fill="currentColor"
							/>
						</svg>
					</button>
					<button className="blog__nav blog__next blog__active" aria-label="Next 3 articles from blog">
						<svg
							width="17"
							height="27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							focusable="false"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 13.88 14.37 26.6a1.54 1.54 0 0 0 2.58-1.14c0-.46-.2-.88-.52-1.16L4.58 13.81 16.46 2.67A1.54 1.54 0 0 0 15.4 0c-.4 0-.78.16-1.06.43L0 13.88Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};
