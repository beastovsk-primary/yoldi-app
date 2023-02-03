import { IRegData } from "@/models/IUser";

export async function postRequest(
	url: string,
	// Using Omit instead of creating an IAuthData
	{ arg }: { arg: IRegData | Omit<IRegData, "email" | "password"> }
) {
	return fetch(url, {
		method: "POST",
		body: JSON.stringify(arg),
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());
}
