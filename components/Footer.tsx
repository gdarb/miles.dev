import {Box} from "theme-ui";

function Footer() {
	return <Box as="footer"
	sx={{textAlign: "center", fontWeight: 300, fontSize: 0, my: 4}}>
		&copy;&nbsp;
		{new Date().getFullYear()}
	</Box>;
}

export default Footer;
