import Layout from "@/components/Layout/Layout";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { getUserInfo } from "@/pages/api/swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import useSWR from "swr";

export default function Guest() {
	const searchParams = useSearchParams();

	const searchId = searchParams.get("id");

	const [slag, setSlag] = useState<string>();

	useEffect(() => {
		if (!searchId) return;

		setSlag(searchId);
	}, [searchId]);

	const { data } = useSWR(
		{
			url: `https://frontend-test-api.yoldi.agency/api/user`,
			slag,
		},
		getUserInfo
	);

	return (
		<Layout>
			<ProfileInfo user={data} />
		</Layout>
	);
}
