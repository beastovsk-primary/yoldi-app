import { IUser } from "@/models/IUser";
import React, { FC, useState } from "react";
import s from "./EditProfileInfo.module.scss";
import useSWRMutation from "swr/mutation";
import { editUserInfo } from "@/pages/api/swr";
import { useCookie } from "react-use";
import { useRouter } from "next/router";
import { customNotification } from "@/utils/notification";

interface EditProfileInfoProps {
	setEditModal: (arg0: boolean) => void;
	userInfo: IUser;
}

const EditProfileInfo: FC<EditProfileInfoProps> = ({
	setEditModal,
	userInfo,
}) => {
	const [token] = useCookie("key");
	const router = useRouter();
	const [slugCookie, updateSlugCookie] = useCookie("slug");

	const [name, setName] = useState(userInfo.name || "");
	const [slug, setSlug] = useState(userInfo.slug || "");
	const [description, setDescription] = useState(userInfo.description || "");

	const { trigger } = useSWRMutation(
		{
			url: "https://frontend-test-api.yoldi.agency/api/profile",
			token,
		},
		editUserInfo
	);

	const onEdit = async () => {
		if (!name || !slug) return setEditModal(false);
		
		const data = {
			name,
			imageId: null,
			slug,
			coverId: null,
			description,
		};
		trigger(data);

		// customNotification("success", "top", "Успешно", "");
		updateSlugCookie(slug);

		setEditModal(false);
	};

	const onCancel = () => {
		setEditModal(false);

		setName(userInfo.name || "");
		setSlug(userInfo.slug || "");
		setDescription(userInfo.description || "");
	};

	return (
		<div className={s.container}>
			<h2 className={s.title}>Редактировать профиль</h2>

			<div className={s.field}>
				<p className={s.label}>Имя</p>
				<input
					className={s.input}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div className={s.field}>
				<p className={s.label}>Адрес профиля</p>
				<div className={s.adressField}>
					<div className={s.domain}>examle.com/</div>
					<input
						className={`${s.domainInput} ${s.input}`}
						value={slug}
						onChange={(e) => setSlug(e.target.value)}
					/>
				</div>
			</div>

			<div className={s.field}>
				<p className={s.label}>Описание</p>
				<textarea
					className={`${s.textarea} ${s.input}`}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>

			<div className={s.buttons}>
				<button className={s.cancel} onClick={() => onCancel()}>
					Отмена
				</button>
				<button className={s.save} onClick={() => onEdit()}>
					Сохранить
				</button>
			</div>
		</div>
	);
};

export default EditProfileInfo;
