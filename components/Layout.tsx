import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SEO } from "./SEO";

type LayoutProps = {
	children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<SEO />
			<div className="flex min-h-screen flex-col">
				<Header />
				<main className="flex flex-auto">{children}</main>
				<Footer />
			</div>
		</>
	);
}
