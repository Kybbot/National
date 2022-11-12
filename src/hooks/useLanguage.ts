import { useEffect, useState } from "react";

export const useLanguage = () => {
	const [language, setLanguage] = useState<"en" | "ua">("ua");

	const changeLanguage = () => {
		setLanguage((prev) => {
			if (prev === "en") {
				return "ua";
			} else {
				return "en";
			}
		});
	};

	useEffect(() => {
		const languageType = localStorage.getItem("language") || "";
		if (languageType === "ua" || languageType === "en") {
			setLanguage(languageType);
		} else {
			localStorage.setItem("language", "ua");
			setLanguage("ua");
		}
	}, []);

	return { language, changeLanguage };
};
