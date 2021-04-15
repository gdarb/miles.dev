import {ReactNode} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {SEO} from "./SEO";

type LayoutProps = {
	children: ReactNode;
};

export function Layout({children}: LayoutProps) {
	return <>
		<SEO />
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-auto">
				{children}
			</main>
			<Footer />
		</div>
	</>;
}
