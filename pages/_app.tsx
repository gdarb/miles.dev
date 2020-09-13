import React, {useEffect, useState} from "react";
import type {AppProps} from "next/app";
import {ThemeProvider} from "theme-ui";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import {Global} from "@emotion/core";

function MyApp({Component, pageProps}: AppProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(
		() => {
			setIsMounted(true);
		},
		[],
	);

	// rome-ignore lint/jsx/noPropSpreading
	return <ThemeProvider theme={theme}>
		{isMounted &&
		<Layout>
			<Component {...pageProps} />
			<Global styles={{
				"*": {
					transition: "background-color 0.5s ease-in-out",
				},
			}} />
		</Layout>}
	</ThemeProvider>;
}
export default MyApp;
