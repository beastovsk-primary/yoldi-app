export interface IRegData {
	email: string;
	name?: string;
	password: string;
}

export interface IUser {
	name: string;
	email: string;
	slug: string;
	image?: any;
	cover?: any;
	description?: any;
}

export interface IEditUser {
	name: string;
	imageId: string | null;
	password: string;
	slug: string;
	coverId: string | null;
	description: string;
}
