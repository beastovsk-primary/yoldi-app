import Link from "next/link";
import React, { FC } from "react";
import s from "./Header.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	return <div className={s.container}>Header</div>;
};

export default Header;
