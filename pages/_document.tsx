import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/Inter-roman.var.subset.woff2?v=3.19"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Inter-italic.var.subset.woff2?v=3.19"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
				</Head>
				<body
					className="bg-neutral-50 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
					style={{
						fontFeatureSettings:
							'"ss01", "ss03", "cv06", "cv08", "cv11"',
					}}
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
