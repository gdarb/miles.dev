// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const config = {
	swcMinify: true,
	reactStrictMode: true,
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "accelerometer=(); camera=(); geolocation=(); gyroscope=(); magnetometer=(); microphone=(); payment=(); usb=()",
					},
					{
						key: "Report-To",
						value: `{"group":"default","max_age":31536000,"endpoints":[{"url":"https://gdarb.report-uri.com/a/d/g"}],"include_subdomains":true}`,
					},
					{
						key: "NEL",
						value: `{"report_to":"default","max_age":31536000,"include_subdomains":true}`,
					},
				],
			},
			{
				source: "/fonts/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, immutable, max-age=31536000",
					},
				],
			},
		];
	},
};

module.exports = config;
