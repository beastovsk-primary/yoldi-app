/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "frontend-test-api.yoldi.agency",
				port: "",
				pathname: "/frontend-test-api.yoldi.agency/**",
			},
		],
	},
	// frontend-test-api.yoldi.agency
};

module.exports = nextConfig;
