import { IUser } from "@/models/IUser";
import React, { FC, useState } from "react";

import { useCookie } from "react-use";
import useMedia from "use-media";

import s from "./ProfileInfo.module.scss";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import EditProfileInfo from "../UI/EditProfileInfo/EditProfileInfo";

interface ProfileInfoProps {
	user: IUser;
	owner: boolean;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ user, owner }) => {
	const isMobile = useMedia({ maxWidth: "576px" }, true);
	const router = useRouter();

	const [editModal, setEditModal] = useState(false);

	const [slug] = useCookie("slug");
	const [key, updateKey, deleteKey] = useCookie("key");

	const onSignOut = () => {
		router.push("/login");
		deleteKey();
	};

	if (!user) return <></>;

	// If mobile device -> show component instead of modal
	if (editModal && isMobile)
		return (
			<EditProfileInfo
				setEditModal={(e) => setEditModal(e)}
				userInfo={user}
			/>
		);

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
					) : user.name ? (
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
					{owner ? (
						<button
							className={s.edit}
							onClick={() => setEditModal(true)}
						>
							Редактировать
						</button>
					) : null}
				</div>
				<div className={s.body}>
					{user?.description ? (
						<p className={s.description}>{user?.description}</p>
					) : (
						<p className={s.empty}>
							{owner
								? "Нет информации о себе"
								: "Пользователь не указал информацию о себе"}
						</p>
					)}

					{owner ? (
						<button
							className={s.signout}
							onClick={() => onSignOut()}
						>
							Выйти
						</button>
					) : null}
				</div>
			</div>

			<Modal
				open={editModal}
				footer={false}
				onCancel={() => setEditModal(false)}
				onOk={() => setEditModal(false)}
				className={s.modal}
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
