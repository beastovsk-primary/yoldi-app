import Head from "next/head";
import React, { FC, ReactNode } from "react";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";

import useCookie from "react-use-cookie";
import useSWR from "swr";

import s from "./Layout.module.scss";
import { getProfileInfo } from "@/pages/api/swr";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	const [token] = useCookie("key");

	const { data, error, isLoading } = useSWR(
		{ url: `https://frontend-test-api.yoldi.agency/api/profile`, token },
		getProfileInfo
	);

	return (
		<>
			<Head>
				<title>Yoldi Profile</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={"page"}>
				<Header user={!data?.message ? data : null} />
				<div className={s.content}>{children}</div>
				<Footer user={!data?.message ? data : null} />
			</div>
		</>
	);
};

export default Layout;
