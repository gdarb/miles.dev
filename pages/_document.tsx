import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";
import {InitializeColorMode} from "theme-ui";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return <Html lang="en">
			<Head />
			<link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
			<body>
				<InitializeColorMode />
				<Main />
				<NextScript />
			</body>
		</Html>;
	}
}

export default MyDocument;
