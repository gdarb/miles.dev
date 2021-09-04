import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";

function app({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" disableTransitionOnChange={true}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default app;
