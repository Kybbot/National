import Pageclip from "pageclip";

const pageclipAPIKey = process.env.PAGECLIP_API_KEY;
const pageclip = new Pageclip(pageclipAPIKey);

export default async function handler(req, res) {
	try {
		const response = await pageclip.send("Test", req.body);
		if (response.status !== 200) {
			throw new Error("Не вдалось відправити заявку");
		} else {
			res.status(200).json({ data: { message: "Success" }, success: true });
		}
	} catch (error) {
		res.json({ error: { message: error.message }, success: false });
	}
}
