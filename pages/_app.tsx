import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function app({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" disableTransitionOnChange={true}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default app;
