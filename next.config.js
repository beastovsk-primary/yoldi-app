/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
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
	typescript: { ignoreBuildErrors: true },
	// frontend-test-api.yoldi.agency
};

module.exports = nextConfig;
