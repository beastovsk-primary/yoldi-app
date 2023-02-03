import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import s from "./Header.module.scss";

import useMedia from "use-media";

import logoImage from "../../../public/header/logo.svg";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	// Library for screen width, SSR support
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

			<Link href="/login" className={s.button}>
				Войти
			</Link>
		</div>
	);
};

export default Header;
