import Layout from "@/components/Layout/Layout";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { getUserInfo } from "@/pages/api/swr";
import { useRouter } from "next/router";
import reactUseCookie from "react-use-cookie";

import useSWR from "swr";

export default function Guest() {
	const router = useRouter();

	const { data: profile } = useSWR(
		{
			url: `https://frontend-test-api.yoldi.agency/api/user/`,
			slug: router.query,
		},
		getUserInfo
	);
	// getUserInfo
	return (
		<Layout>
			<div>Personal Cabinet</div>
			<ProfileInfo user={profile} />
		</Layout>
	);
}
