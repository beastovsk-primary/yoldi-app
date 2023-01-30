import { IRegData } from "@/models/IUser";

export async function regUser(url: string, regData: IRegData) {
	return fetch(url, {
		method: "POST",
		body: JSON.stringify(regData.arg),
	});
}
