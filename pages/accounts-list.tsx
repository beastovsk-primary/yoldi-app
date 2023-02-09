import AccountsList from "@/components/AccountsList/AccountsList";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";

import useSWR from "swr";
import { getAllUsers } from "./api/swr";

export default function Auth() {
	const [usersList, setUsersList] = useState([]);

	const { data } = useSWR(
		"https://frontend-test-api.yoldi.agency/api/user",
		getAllUsers
	);

	useEffect(() => {
		if (!data?.length) return;

		setUsersList(data);
	}, [data]);

	return (
		<Layout>
			<AccountsList usersList={usersList} />
		</Layout>
	);
}
