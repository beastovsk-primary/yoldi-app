import { IUser } from "@/models/IUser";
import React, { FC } from "react";
import useCookie from "react-use-cookie";
import Image from "next/image";

import pen from "../../public/icons/button/pen.svg";

import s from "./ProfileInfo.module.scss";

interface ProfileInfoProps {
	user: IUser;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ user }) => {
	const [slug] = useCookie("slug");

	return (
		<div className={s.container}>
			<div className={s.banner}></div>
			<div className={s.info}>
				<div className={s.photo}>
					{user?.image ? (
						<img
							src={user?.image.url}
							className={s.image}
							alt="photo"
						/>
					) : user?.name ? (
						user?.name[0]
					) : (
						""
					)}
				</div>
				<div className={s.title}>
					<div className={s.user}>
						<h2 className={s.name}>{user?.name}</h2>
						<p className={s.mail}>{user?.email}</p>
					</div>
					<button className={s.edit}>Редактировать</button>
				</div>
				<div className={s.body}>
					{user?.description ? (
						<p className={s.description}>{user?.description}</p>
					) : (
						<p className={s.empty}>
							{user?.slug == slug
								? "Нет информации о себе"
								: "Пользователь не указал информацию о себе"}
						</p>
					)}

					<button className={s.signout}>Выйти</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
