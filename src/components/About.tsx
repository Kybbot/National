import React, { FC } from "react";
import Image from "next/image";

export const About: FC = () => {
	return (
		<>
			<section className="about">
				<div className="about__container">
					<div className="about__img">
						<Image src="/img/food.png" alt="Company Food" fill />
					</div>
					<h2 className="about__title">КОНТРАКТНЕ ВИРОБНИЦТВО</h2>
					<div className="about__info">
						<p className="about__text">
							Наша компанія вже більше 5 років співпрацює із замовниками в рамках контрактного виробництва. Завдяки Нам,
							компанія-замовник здатна зекономити час та ресурси на покупці, обслуговуванні необхідного обладнання та
							виробничого приміщення - усе це робимо ми.
						</p>
						<p className="about__subtext">
							На території нашого виробництва розміщені 4 окремі купажні відділення, кожне з яких призначено для окремих
							продуктів. Також з 2022 року вибудовано холодильний цех з новітнім обладнанням для переробки м’яса який
							відповідає всім нормам та стандартам НАССР.
						</p>
					</div>
				</div>
			</section>
			<div className="container">
				<h2 className="about__subtitle">
					Маючи усі умови і дозволи у сфері виробництва напоїв та продуктів харчування, ми надаємо найкращі умови{" "}
					<span className="accent-text">для реалізації Ваших ідей!</span>
				</h2>
			</div>
		</>
	);
};
