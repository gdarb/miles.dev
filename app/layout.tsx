import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
	title: "Aidan Miles",
	description: "Aidan Miles - Software Engineer",
};

const inter = localFont({
	src: [
		{
			path: "./InterVariable.subset.woff2",
			style: "normal",
		},
		{
			path: "./InterVariable-Italic.subset.woff2",
			style: "italic",
		},
	],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={inter.variable}
			style={{
				fontFeatureSettings: '"ss01", "ss03", "cv06", "cv08", "cv11"',
			}}
			suppressHydrationWarning
		>
			<body className="bg-neutral-50 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
