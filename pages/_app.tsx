import type {AppProps} from "next/app";
import "tailwindcss/tailwind.css";

function app({Component, pageProps}: AppProps) {
	// rome-ignore lint/jsx/noPropSpreading: required by next
	return <Component {...pageProps} />;
}
export default app;
