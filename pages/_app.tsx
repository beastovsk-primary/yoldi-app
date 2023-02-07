import "@/styles/globals.scss";
import { Inter } from "@next/font/google";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500"],
	variable: "--font-inter",
});

console.log(inter.className);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ConfigProvider>
			<main className={inter.className}>
				<Component {...pageProps} />
			</main>
		</ConfigProvider>
	);
}
