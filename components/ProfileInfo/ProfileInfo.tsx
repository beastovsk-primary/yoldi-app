import { useRouter } from "next/router";
import React, { FC } from "react";
import useCookie from "react-use-cookie";

import s from "./ProfileInfo.module.scss";

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = (props) => {
	const [token] = useCookie("key");
	const router = useRouter();

	return (
		<div className={s.container}>
			<div className={s.banner}></div>
		</div>
	);
};

export default ProfileInfo;
