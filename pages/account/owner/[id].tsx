import Layout from "@/components/Layout/Layout";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { getProfileInfo } from "@/pages/api/swr";
import { useCookie } from "react-use";
import { useSearchParams } from "next/navigation";

import useSWR from "swr";
import { useRouter } from "next/router";

export default function Owner() {
	const router = useRouter();
	const [key] = useCookie("key");
	const [slug] = useCookie("slug");
	const searchParams = useSearchParams();

	const queryId = searchParams.get("id");

	if (!key) {
		router.push(`/login`);
	}

	if (queryId != slug) {
		router.push(`/account/owner/${slug}`);
	}

	const { data: profile } = useSWR(
		{
			url: `https://frontend-test-api.yoldi.agency/api/profile`,
			token: key,
		},
		getProfileInfo
	);

	return (
		<Layout>
			<ProfileInfo user={profile} owner={true} />
		</Layout>
	);
}
