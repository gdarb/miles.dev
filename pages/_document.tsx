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
		return {...initialProps};
	}

	render() {
		return <Html lang="en">
			<Head />
			<link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
			<body className="text-gray-800 bg-gray-50 dark:text-gray-200 dark:bg-gray-800">
				<style jsx={true} global={true}>
					{`
						body {
							font-feature-settings: "ss01", "ss03", "cv06", "cv08", "cv11";
						}
					`}
				</style>
				<Main />
				<NextScript />
			</body>
		</Html>;
	}
}

export default MyDocument;
