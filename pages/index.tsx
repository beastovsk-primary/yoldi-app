import Layout from "@/components/Layout/Layout";
import Link from "next/link";

export default function Home() {
	return (
		<Layout>
			<Link href="/accounts-list">Список аккаунтов</Link>
			<Link href="/login">Авторизация</Link>
			<Link href="/register">Регистрация</Link>
		</Layout>
	);
}
