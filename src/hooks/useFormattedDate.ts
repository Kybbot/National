import { useState, useEffect } from "react";

const useFormattedDate = (date: string) => {
	const [formattedDate, setFormattedDate] = useState({
		day: "",
		month: "",
	});

	useEffect(() => {
		const convertedToDate = new Date(date);

		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		const month = convertedToDate.getMonth();
		let day: string | number = convertedToDate.getDate();

		if (day < 10) {
			day = "0" + day;
		}

		setFormattedDate({
			day: day.toString(),
			month: months[month],
		});
	}, [date]);

	return formattedDate;
};

export default useFormattedDate;
