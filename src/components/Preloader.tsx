import React, { FC } from "react";
import Image from "next/image";

export const Preloader: FC = () => {
	return (
		<div className="preloader">
			<Image src="/img/svg/preloader.svg" alt="National" className="preloader__img" width="270" height="38" />
		</div>
	);
};
