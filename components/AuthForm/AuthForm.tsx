import { postRequest } from "@/pages/api/swr";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useState } from "react";
import useCookie from "react-use-cookie";
import useSWRMutation from "swr/mutation";

import eyeSolid from "../../public/icons/input/eye-solid.svg";

import s from "./AuthForm.module.scss";

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = (props) => {
	const [token, updateToken] = useCookie("key");
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [toggleType, setToggleType] = useState("password");
	const [isAvailable, setIsAvailable] = useState(false);

	const { trigger } = useSWRMutation(
		"https://frontend-test-api.yoldi.agency/api/auth/login",
		postRequest
	);

	const togglePasswordType = () => {
		if (toggleType == "password") return setToggleType("text");

		setToggleType("password");
	};

	const checkSendAvialable = () => {
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if (email.match(re) && password.length > 6) return setIsAvailable(true);

		return setIsAvailable(false);
	};

	const onFinish = async () => {
		const auth = await trigger({
			email,
			password,
		});

		updateToken(auth.value);
		router.push(`/account/owner/${auth.value}`);
	};

	useEffect(() => {
		checkSendAvialable();
	}),
		[email, password];

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<div className={s.form}>
					<h2 className={s.title}>Вход в Yoldi Agency</h2>
					<div className={s.fields}>
						<input
							className={`${s.input} ${s.email}`}
							placeholder="E-mail"
							onChange={(e) => setEmail(e.target.value)}
						/>

						{/* Here's container only because of eye icon */}
						<div className={s.passwordContainer}>
							<input
								className={`${s.input} ${s.password}`}
								type={toggleType}
								placeholder="Пароль"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div
								className={s.eye}
								onClick={() => togglePasswordType()}
							>
								<Image src={eyeSolid} alt="" />
							</div>
						</div>
					</div>
					<button
						className={
							isAvailable ? s.button : `${s.button} ${s.lock}`
						}
						onClick={() => onFinish()}
					>
						Войти
					</button>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
