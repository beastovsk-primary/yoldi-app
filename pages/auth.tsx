import AuthForm from "@/components/AuthForm/AuthForm";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

export default function Auth() {
	return (
		<Layout>
			<AuthForm />
		</Layout>
	);
}
