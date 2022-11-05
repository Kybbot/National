import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const Services: FC = () => {
	return (
		<section className="services">
			<div className="container">
				<h2 className="services__title">Наші послуги</h2>
				<div className="services__container">
					<div className="services__item">
						<Image
							src="/img/services/create.svg"
							className="services__svg"
							alt=""
							width="46"
							height="45"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							Створення продукту з 0
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/drinks.svg"
							className="services__svg"
							alt=""
							width="57"
							height="46"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							Виробництво соків, газованих напоїв у скло
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/conservation.svg"
							className="services__svg"
							alt=""
							width="50"
							height="50"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							Виробництво консервації
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/food.svg"
							alt=""
							className="services__svg"
							width="57"
							height="51"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							Виробництво їжі довготривалого зберігання
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/honey.svg"
							alt=""
							className="services__svg"
							width="50"
							height="41"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							Виробництво меду
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/sauces.svg"
							alt=""
							className="services__svg"
							width="49"
							height="53"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							Виробництво соусів та томатної групи
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/package.svg"
							alt=""
							className="services__svg"
							width="38"
							height="49"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							Формування гнучкої упаковки
						</Link>
					</div>
					<div className="services__item">
						<Image
							src="/img/services/packing.svg"
							alt=""
							className="services__svg"
							width="52"
							height="52"
							aria-hidden="true"
						/>
						<Link href="/" className="services__link">
							Co-packing
						</Link>
					</div>
				</div>
				<button className="btn services__btn" type="button">
					Звʼязатись
				</button>
			</div>
		</section>
	);
};
