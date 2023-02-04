import Layout from "@/components/Layout/Layout";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { getProfileInfo } from "@/pages/api/swr";
import reactUseCookie from "react-use-cookie";

import useSWR from "swr";

export default function Owner() {
	const [token] = reactUseCookie("key");
	
	const { data: profile } = useSWR(
		{ url: `https://frontend-test-api.yoldi.agency/api/profile`, token },
		getProfileInfo
	);

	return (
		<Layout>
			<ProfileInfo user={profile} />
		</Layout>
	);
}
