import { useCallback, useEffect, useState } from "react";

export const useLanguage = () => {
	const [language, setLanguage] = useState<"en" | "ua">("ua");

	const changeLanguage = useCallback(() => {
		setLanguage((prev) => {
			if (prev === "en") {
				localStorage.setItem("language", "ua");
				return "ua";
			} else {
				localStorage.setItem("language", "en");
				return "en";
			}
		});
	}, []);

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
