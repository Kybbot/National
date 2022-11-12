import Image from "next/image";
import React, { FC } from "react";

import { translationType } from "../utils/translation";

type ProductsProps = {
	language: "en" | "ua";
	translation: translationType;
};

export const Products: FC<ProductsProps> = ({ language, translation }) => {
	return (
		<section className="products" aria-labelledby="products">
			<div className="container">
				<h2 className="products__title" id="products">
					{translation["productsTitle"][language]}
				</h2>
			</div>
			<div className="products__nav scrollbar">
				<button className="products__nav-btn products__nav-btn--active">Напої</button>
				<button className="products__nav-btn ">Консервація</button>
				<button className="products__nav-btn ">Інша продукція</button>
			</div>
			<div className="products__wrapper">
				<div className="container">
					<div className="products__container">
						<div className="products__subnav">
							<button className="products__subnav-btn products__subnav-btn--active">Соки</button>
							<button className="products__subnav-btn ">Компоти</button>
						</div>
						<div className="products__items">
							<article className="product__item">
								<div className="product__inner">
									<div className="product__front">
										<div className="product__dec"></div>
										<div className="product__text">
											<h3 className="product__title">Сік абрикосовий</h3>
											<p className="product__amount">0.25 л / 0.5 л</p>
										</div>
										<div className="product__preview">
											<Image className="product__img" src="/img/juce.png" alt="Juce" width="93" height="179" />
										</div>
									</div>
									<div className="product__back">
										<div className="product__desc">
											<p className="product__name">Тара</p>
											<span className="product__dashed"></span>
											<p className="product__value">скляна тара</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Обсяг</p>
											<span className="product__dashed"></span>
											<p className="product__value">0,25/0,5 л</p>
										</div>
										<div className="product__desc">
											<p className="product__name">К-сть в упаковці</p>
											<span className="product__dashed"></span>
											<p className="product__value">20 шт.</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Термін зберігання</p>
											<span className="product__dashed"></span>
											<p className="product__value">2 р.</p>
										</div>
									</div>
								</div>
							</article>
							<article className="product__item">
								<div className="product__inner">
									<div className="product__front">
										<div className="product__dec"></div>
										<div className="product__text">
											<h3 className="product__title">Сік абрикосовий</h3>
											<p className="product__amount">0.25 л / 0.5 л</p>
										</div>
										<div className="product__preview">
											<Image className="product__img" src="/img/juce.png" alt="Juce" width="93" height="179" />
										</div>
									</div>
									<div className="product__back">
										<div className="product__desc">
											<p className="product__name">Тара</p>
											<span className="product__dashed"></span>
											<p className="product__value">скляна тара</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Обсяг</p>
											<span className="product__dashed"></span>
											<p className="product__value">0,25/0,5 л</p>
										</div>
										<div className="product__desc">
											<p className="product__name">К-сть в упаковці</p>
											<span className="product__dashed"></span>
											<p className="product__value">20 шт.</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Термін зберігання</p>
											<span className="product__dashed"></span>
											<p className="product__value">2 р.</p>
										</div>
									</div>
								</div>
							</article>
							<article className="product__item">
								<div className="product__inner">
									<div className="product__front">
										<div className="product__dec"></div>
										<div className="product__text">
											<h3 className="product__title">Сік абрикосовий</h3>
											<p className="product__amount">0.25 л / 0.5 л</p>
										</div>
										<div className="product__preview">
											<Image className="product__img" src="/img/juce.png" alt="Juce" width="93" height="179" />
										</div>
									</div>
									<div className="product__back">
										<div className="product__desc">
											<p className="product__name">Тара</p>
											<span className="product__dashed"></span>
											<p className="product__value">скляна тара</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Обсяг</p>
											<span className="product__dashed"></span>
											<p className="product__value">0,25/0,5 л</p>
										</div>
										<div className="product__desc">
											<p className="product__name">К-сть в упаковці</p>
											<span className="product__dashed"></span>
											<p className="product__value">20 шт.</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Термін зберігання</p>
											<span className="product__dashed"></span>
											<p className="product__value">2 р.</p>
										</div>
									</div>
								</div>
							</article>
							<article className="product__item">
								<div className="product__inner">
									<div className="product__front">
										<div className="product__dec"></div>
										<div className="product__text">
											<h3 className="product__title">Сік абрикосовий</h3>
											<p className="product__amount">0.25 л / 0.5 л</p>
										</div>
										<div className="product__preview">
											<Image className="product__img" src="/img/juce.png" alt="Juce" width="93" height="179" />
										</div>
									</div>
									<div className="product__back">
										<div className="product__desc">
											<p className="product__name">Тара</p>
											<span className="product__dashed"></span>
											<p className="product__value">скляна тара</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Обсяг</p>
											<span className="product__dashed"></span>
											<p className="product__value">0,25/0,5 л</p>
										</div>
										<div className="product__desc">
											<p className="product__name">К-сть в упаковці</p>
											<span className="product__dashed"></span>
											<p className="product__value">20 шт.</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Термін зберігання</p>
											<span className="product__dashed"></span>
											<p className="product__value">2 р.</p>
										</div>
									</div>
								</div>
							</article>
							<article className="product__item">
								<div className="product__inner">
									<div className="product__front">
										<div className="product__dec"></div>
										<div className="product__text">
											<h3 className="product__title">Сік абрикосовий</h3>
											<p className="product__amount">0.25 л / 0.5 л</p>
										</div>
										<div className="product__preview">
											<Image className="product__img" src="/img/juce.png" alt="Juce" width="93" height="179" />
										</div>
									</div>
									<div className="product__back">
										<div className="product__desc">
											<p className="product__name">Тара</p>
											<span className="product__dashed"></span>
											<p className="product__value">скляна тара</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Обсяг</p>
											<span className="product__dashed"></span>
											<p className="product__value">0,25/0,5 л</p>
										</div>
										<div className="product__desc">
											<p className="product__name">К-сть в упаковці</p>
											<span className="product__dashed"></span>
											<p className="product__value">20 шт.</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Термін зберігання</p>
											<span className="product__dashed"></span>
											<p className="product__value">2 р.</p>
										</div>
									</div>
								</div>
							</article>
							<article className="product__item">
								<div className="product__inner">
									<div className="product__front">
										<div className="product__dec"></div>
										<div className="product__text">
											<h3 className="product__title">Сік абрикосовий</h3>
											<p className="product__amount">0.25 л / 0.5 л</p>
										</div>
										<div className="product__preview">
											<Image className="product__img" src="/img/juce.png" alt="Juce" width="93" height="179" />
										</div>
									</div>
									<div className="product__back">
										<div className="product__desc">
											<p className="product__name">Тара</p>
											<span className="product__dashed"></span>
											<p className="product__value">скляна тара</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Обсяг</p>
											<span className="product__dashed"></span>
											<p className="product__value">0,25/0,5 л</p>
										</div>
										<div className="product__desc">
											<p className="product__name">К-сть в упаковці</p>
											<span className="product__dashed"></span>
											<p className="product__value">20 шт.</p>
										</div>
										<div className="product__desc">
											<p className="product__name">Термін зберігання</p>
											<span className="product__dashed"></span>
											<p className="product__value">2 р.</p>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
