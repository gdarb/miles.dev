import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";
import {InitializeColorMode} from "theme-ui";
import {Global} from "@emotion/core";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return <Html lang="en">
			<Head />
			<link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
			<Global styles={{
				"body": {
					margin: 0,
					padding: 0,
					fontFeatureSettings: `"liga", "tnum", "case", "calt", "zero", "ss01", "locl"`,
				},
				"*": {
					transition: "background-color 0.5s ease-in-out",
				},
			}} />
			<body>
				<InitializeColorMode />
				<Main />
				<NextScript />
			</body>
		</Html>;
	}
}

export default MyDocument;
