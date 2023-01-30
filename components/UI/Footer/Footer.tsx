import React, { FC } from "react";
import s from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	return <div className={s.container}>Footer</div>;
};

export default Footer;
