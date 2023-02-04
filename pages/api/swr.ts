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
export async function getProfileInfo({
	url,
	token,
}: {
	url: string;
	token: string;
}) {
	return fetch(url, {
		method: "GET",
		headers: {
			accept: "application/json",
			"X-API-KEY": token,
		},
	}).then((res) => res.json());
}
