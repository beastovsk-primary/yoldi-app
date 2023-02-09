import { IUser } from "@/models/IUser";
import Link from "next/link";
import React, { FC } from "react";

import s from "./AccountsList.module.scss";

interface AccountsListProps {
	usersList: IUser[];
}

const AccountsList: FC<AccountsListProps> = ({ usersList }) => {
	console.log(usersList);
	return (
		<div className={s.container}>
			<h2 className={s.title}>Список аккаунтов</h2>
			<ul className={s.list}>
				{usersList.map(({ name, email, image, slug }) => (
					<li className={s.item}>
						<Link
							href={`/account/guest/${slug}`}
							className={s.photo}
						>
							{image ? (
								<img
									src={image.url}
									className={s.image}
									alt="photo"
								/>
							) : (
								name[0] || ""
							)}
						</Link>
						<div className={s.info}>
							<p className={s.name}>{name}</p>
							<p className={s.email}>{email}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AccountsList;
