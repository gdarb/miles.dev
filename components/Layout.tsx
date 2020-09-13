import React from "react";
import {Flex} from "theme-ui";
import Header from "./Header";
import Footer from "./Footer";

function Layout(
	props: {
		children: React.ReactNode;
	},
) {
	return <Flex sx={{
		minHeight: "100vh",
		width: "100%",
		flexDirection: "column",
		bg: "background",
		color: "text",
	}}>
		<Header />
		<Flex as="main" sx={{width: "100%", flex: "1 1 auto"}}>
			{props.children}
		</Flex>
		<Footer />
	</Flex>;
}

export default Layout;
