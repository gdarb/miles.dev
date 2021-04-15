import {ReactNode} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";

type LayoutProps = {
	children: ReactNode;
};

export function Layout({children}: LayoutProps) {
	return <div className="flex flex-col min-h-screen">
		<Header />
		<main className="flex flex-auto">
			{children}
		</main>
		<Footer />
	</div>;
}
