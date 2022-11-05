import Image from "next/image";
import React, { FC } from "react";

export const Partners: FC = () => {
	return (
		<section className="partners">
			<div className="container">
				<h2 className="partners__title">Партнери</h2>
				<div className="partners__container">
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="89" height="17" src="/img/partners/borjomi.png" alt="Borjomi" />
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="89"
							height="27"
							src="/img/partners/coagulant.png"
							alt="Coa Gulant"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="99" height="49" src="/img/partners/pripravka.png" alt="Pripravka" />
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="89" height="31" src="/img/partners/metro.png" alt="Metro" />
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="90" height="34" src="/img/partners/fozzy.png" alt="Fozzy" />
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="89" height="32" src="/img/partners/atb.png" alt="Atb" />
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="83" height="70" src="/img/partners/neftek.png" alt="Neftek" />
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="100" height="71" src="/img/partners/morepiva.png" alt="More piva" />
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="74" height="78" src="/img/partners/wog.png" alt="Wog" />
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="94" height="56" src="/img/partners/shedro.png" alt="Shedro" />
					</div>
					<div className="parthners__wrapper">
						<Image className="pathners__img" width="66" height="62" src="/img/partners/blackfox.png" alt="Black fox" />
					</div>
				</div>
			</div>
		</section>
	);
};
