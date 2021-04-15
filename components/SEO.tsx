import Head from "next/head";
import {useRouter} from "next/router";

type SEOProps = {
	title?: string;
	description?: string;
	"og-image"?: string;
	"twitter-card"?: "summary" | "summary_large_image" | "app" | "player";
};

export function SEO(props: SEOProps) {
	const router = useRouter();
	const url = "https://www.miles.dev";

	const title = props.title ?? "Aidan Miles";
	const description = props.description ?? "Aidan Miles - Software Developer";
	const image = props["og-image"] ?? `${url}/avatar.jpg`;
	const twitter = props["twitter-card"] ?? "summary";

	return <Head>
		<title>
			{title}
		</title>
		<meta name="description" content={description} />
		<meta property="og:title" key="title" content={title} />
		<meta property="og:description" key="description" content={description} />
		<meta property="og:image" key="image" content={image} />
		<meta property="og:url" key="url" content={`${url}${router.asPath}`} />
		<meta name="twitter:card" content={twitter} />
		<link rel="icon" href="/favicon.ico" />
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="manifest" href="/site.webmanifest" />
	</Head>;
}
