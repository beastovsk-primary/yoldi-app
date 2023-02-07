import { IUser } from "@/models/IUser";
import React, { FC, useState } from "react";
import Image from "next/image";

import { useCookie } from "react-use";

import pen from "../../public/icons/button/pen.svg";

import s from "./ProfileInfo.module.scss";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import EditProfileInfo from "../UI/EditProfileInfo/EditProfileInfo";

interface ProfileInfoProps {
	user: IUser;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ user }) => {
	const router = useRouter();

	const [editModal, setEditModal] = useState(false);

	const [slug, updateSlug, deleteSlug] = useCookie("slug");
	const [key, updateKey, deleteKey] = useCookie("key");

	const onSignOut = () => {
		router.push("/login");
		deleteSlug();
		deleteKey();
	};
	if (!user) return <></>;

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
					) : (
						user?.name[0]
					)}
				</div>
				<div className={s.title}>
					<div className={s.user}>
						<h2 className={s.name}>{user?.name}</h2>
						<p className={s.mail}>{user?.email}</p>
					</div>
					<button
						className={s.edit}
						onClick={() => setEditModal(true)}
					>
						Редактировать
					</button>
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

					<button className={s.signout} onClick={() => onSignOut()}>
						Выйти
					</button>
				</div>
			</div>

			<Modal
				open={editModal}
				footer={false}
				onCancel={() => setEditModal(false)}
				onOk={() => setEditModal(false)}
			>
				{/* Pulling the props to setState */}
				<EditProfileInfo
					setEditModal={(e) => setEditModal(e)}
					userInfo={user}
				/>
			</Modal>
		</div>
	);
};

export default ProfileInfo;
