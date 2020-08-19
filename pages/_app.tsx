import "../styles/globals.css";
import theme from "../styles/theme";
import {ThemeProvider} from "theme-ui";
import type {AppProps} from "next/app";

function MyApp({Component, pageProps}: AppProps) {
	return <ThemeProvider theme={theme}>
		<Component {...pageProps} />
	</ThemeProvider>;
}

export default MyApp;
