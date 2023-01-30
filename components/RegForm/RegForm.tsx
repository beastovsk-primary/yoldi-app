import Image from "next/image";
import React, { FC, ReactNode, useEffect, useState } from "react";

import eyeSolid from "../../public/icons/input/eye-solid.svg";

import s from "./RegForm.module.scss";

interface RegFormProps {}

const RegForm: FC<RegFormProps> = (props) => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");

	const [toggleType, setToggleType] = useState("password");
	const [isAvailable, setIsAvailable] = useState(false);

	const togglePasswordType = () => {
		if (toggleType == "password") return setToggleType("text");

		setToggleType("password");
	};

	const checkSendAvialable = () => {
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if (name.length > 4 && mail.match(re) && password.length > 6)
			return setIsAvailable(true);

		return setIsAvailable(false);
	};

	useEffect(() => {
		checkSendAvialable();
	}),
		[name, mail, password];

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<div className={s.form}>
					<h2 className={s.title}>
						Регистрация <br />
						в Yoldi Agency
					</h2>
					<div className={s.fields}>
						<input
							className={`${s.input} ${s.name}`}
							placeholder="Имя"
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							className={`${s.input} ${s.email}`}
							placeholder="E-mail"
							onChange={(e) => setMail(e.target.value)}
						/>

						{/* Here's container only for eye icon */}
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
					>
						Создать аккаунт
					</button>
				</div>
			</div>
		</div>
	);
};

export default RegForm;