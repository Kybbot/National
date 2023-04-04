import { useState, useEffect } from "react";

export const useFormattedDate = (date: string) => {
	const [formattedDate, setFormattedDate] = useState({
		day: "",
		month: "",
		monthUk: "",
	});

	useEffect(() => {
		const convertedToDate = new Date(date);

		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const monthsUk = ["Січ", "Лют", "Бер", "Квт", "Трв", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Грд"];

		const month = convertedToDate.getMonth();
		let day: string | number = convertedToDate.getDate();

		if (day < 10) {
			day = "0" + day;
		}

		setFormattedDate({
			day: day.toString(),
			month: months[month],
			monthUk: monthsUk[month],
		});
	}, [date]);

	return formattedDate;
};
