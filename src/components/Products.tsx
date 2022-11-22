import Image from "next/image";
import React, { FC, memo, useState, MouseEvent } from "react";

import { translationType } from "../utils/translation";

import { CategoriesListType, ProductsInfoType, SubCategoriesList } from "../@types/products";

type ProductsProps = {
	language: "en" | "ua";
	translation: translationType;
	categoriesList: CategoriesListType;
	subCategoriesList: SubCategoriesList;
	productsInfo: ProductsInfoType;
};

export const Products: FC<ProductsProps> = memo(
	({ language, translation, categoriesList, subCategoriesList, productsInfo }) => {
		const [currentCategory, setCurrentCategory] = useState<string>(Object.keys(productsInfo)[0]);
		const [currentSubCategory, setCurrentSubCategory] = useState<string>(Object.keys(productsInfo[currentCategory])[0]);

		const changeCategory = (name: string) => {
			setCurrentCategory(name);
			setCurrentSubCategory(Object.keys(productsInfo[name])[0]);
		};

		const changeProductItem = (event: MouseEvent<HTMLButtonElement>) => {
			event.currentTarget.classList.toggle("product__item--active");
		};

		return (
			<section className="products" aria-labelledby="products">
				<div className="container">
					<h2 className="products__title" id="products">
						{translation["productsTitle"][language]}
					</h2>
				</div>
				<div className="products__nav scrollbar">
					{categoriesList.map((item) => {
						if (Object.prototype.hasOwnProperty.call(productsInfo, item.name)) {
							return (
								<button
									key={item.name}
									className={`products__nav-btn ${item.name === currentCategory && "products__nav-btn--active"}`}
									type="button"
									onClick={() => changeCategory(item.name)}
								>
									{language === "ua" ? item.name : item.nameEn}
								</button>
							);
						}
					})}
				</div>
				<div className="products__wrapper">
					<div className="container container--small">
						<div className="products__container">
							<div className="products__subnav">
								{subCategoriesList.map((item) => {
									if (item.category.name === currentCategory) {
										return (
											<button
												key={item.name}
												className={`products__subnav-btn ${
													item.name === currentSubCategory && "products__subnav-btn--active"
												}`}
												type="button"
												onClick={() => setCurrentSubCategory(item.name)}
											>
												{language === "ua" ? item.name : item.nameEn}
											</button>
										);
									}
								})}
							</div>
							<div className="products__items">
								{productsInfo[currentCategory][currentSubCategory].map((item) => (
									<button key={item.name} className="product__item" onClick={changeProductItem}>
										<div className="product__inner">
											<div className="product__front">
												<div className="product__text">
													<h3 className="product__title">{language === "ua" ? item.name : item.nameEn}</h3>
													<p className="product__amount">{language === "ua" ? item.quantity : item.quantityEn}</p>
												</div>
												<div className="product__preview">
													<Image
														className="product__img"
														src={item.image.url}
														alt={item.name}
														width="180"
														height="180"
													/>
												</div>
											</div>
											<div className="product__back">
												{language === "ua"
													? item.info.map((item) => (
															<div key={item.name} className="product__desc">
																<p className="product__name">{item.name}</p>
																<span className="product__dashed"></span>
																<p className="product__value">{item.value}</p>
															</div>
													  ))
													: item.infoEn.map((item) => (
															<div key={item.name} className="product__desc">
																<p className="product__name">{item.name}</p>
																<span className="product__dashed"></span>
																<p className="product__value">{item.value}</p>
															</div>
													  ))}
											</div>
										</div>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
);

Products.displayName = "Products";
