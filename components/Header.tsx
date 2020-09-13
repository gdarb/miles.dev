import Link from "next/link";
import {Box, Button, Flex, Link as ThemeLink, useColorMode} from "theme-ui";
import {keyframes} from "@emotion/core";
import {Moon, Sun} from "react-feather";

function Header() {
	const [colorMode, setColorMode] = useColorMode();

	const cursor = keyframes`
	0% { opacity: 0; }
	50% { opacity: 1; }
	100% { opacity: 0; }`;

	const iconSize = "100%";

	return <Flex as="header" sx={{width: "100%", bg: "header", height: "4rem"}}>
		<Flex sx={{
			width: "container",
			alignItems: "center",
			mx: "auto",
			fontSize: 3,
			px: 3,
		}}>
			<Link href="/" passHref={true}>
				<ThemeLink sx={{
					pl: 1,
					fontFamily: "monospace",
					fontWeight: "heading",
					color: "text",
					textDecoration: "none",
					"&:hover, &:focus, &.active": {
						color: "primary",
					},
				}}>
					&gt; /home/aidan
				</ThemeLink>
			</Link>
			<Box sx={{
				display: "inline-block",
				width: "10px",
				height: "1rem",
				bg: "accent",
				ml: 1,
				borderRadius: "1px",
				animation: `${cursor} 1s infinite`,
			}} />
			<Box sx={{mx: "auto"}} />
			<Button title="Toggle Color Mode"
			type="button"
			onClick={() => {
				setColorMode(colorMode === "light" ? "dark" : "light");
			}}
			onKeyPress={() => {
				setColorMode(colorMode === "light" ? "dark" : "light");
			}}
			sx={{
				appearance: "none",
				color: "text",
				bg: "transparent",
				border: 0,
				"&:hover, &:focus, &.active": {
					color: "primary",
				},
				ml: 3,
			}}>
				<ThemeLink variant="icon">
					{colorMode === "light"
						? <Moon size={iconSize} />
						: <Sun size={iconSize} />}
				</ThemeLink>
			</Button>
		</Flex>
	</Flex>;
}

export default Header;
