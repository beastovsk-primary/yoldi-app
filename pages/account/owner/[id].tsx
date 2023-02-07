import Layout from "@/components/Layout/Layout";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { getProfileInfo } from "@/pages/api/swr";
import { useCookie } from "react-use";

import useSWR from "swr";

export default function Owner() {
	const [key] = useCookie("key");

	const { data: profile } = useSWR(
		{
			url: `https://frontend-test-api.yoldi.agency/api/profile`,
			token: key,
		},
		getProfileInfo
	);

	return (
		<Layout>
			<ProfileInfo user={profile} />
		</Layout>
	);
}
