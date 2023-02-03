import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import s from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	const router = useRouter();
	const [pageInfo, setPageInfo] = useState({ info: "", href: "", link: "" });

	// destructurization  of state
	const { info, href, link } = pageInfo;

	const checkCurrentPage = () => {
		if (!router.pathname) return;

		if (router.pathname == "/reg") {
			return setPageInfo({
				info: "Уже есть аккаунт?",
				href: "/login",
				link: "Войти",
			});
		}

		setPageInfo({
			info: "Еще нет аккаунта?",
			href: "/register",
			link: "Зарегистрироваться",
		});
	};

	useEffect(() => {
		checkCurrentPage();
	}, []);

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<span className={s.info}>
					{info}{" "}
					<Link href={href} className={s.link}>
						{link}
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Footer;
