import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import s from "./Header.module.scss";

import useMedia from "use-media";

import logoImage from "../../../public/header/logo.svg";
import { IUser } from "@/models/IUser";
import { useCookie } from "react-use";

interface HeaderProps {
	user: IUser;
}

const Header: FC<HeaderProps> = ({ user }) => {
	// Library for screen width, SSR support
	const [slug] = useCookie("slug");
	const isMobile = useMedia({ maxWidth: "768px" }, true);

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<Link href={""}>
					<Image src={logoImage} alt="" />
				</Link>

				{!isMobile ? (
					<h2 className={s.info}>
						Разрабатываем и запускаем <br />
						сложные веб проекты
					</h2>
				) : null}
			</div>

			{user ? (
				<div className={s.user}>
					<p>{user.name}</p>
					<Link href={`/account/owner/${slug}`}>
						<div className={s.photo}>
							{user.image ? (
								<Image src={user.image} alt="photo" />
							) : (
								user.name[0]
							)}
						</div>
					</Link>
				</div>
			) : (
				<Link href="/login" className={s.button}>
					Войти
				</Link>
			)}
		</div>
	);
};

export default Header;
