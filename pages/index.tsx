import React from "react";
import Head from "next/head";
import {Box, Flex, Heading, Image, Link as ThemeLink} from "theme-ui";
import {GitHub, Key, Linkedin, Mail} from "react-feather";

export default function pages() {
	const iconSize = "1.5rem";

	return <>
		<Head>
			<title>
				Aidan Miles
			</title>
			<meta name="description" content="Aidan Miles - Software Developer" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Flex sx={{variant: "layout.main"}}>
			<Box sx={{
				my: 3,
				bg: "#d3d3d3",
				height: "6rem",
				width: "6rem",
				clipPath: "circle(3rem)",
			}}>
				<Image alt="avatar"
				src="avatar.jpg"
				sx={{
					clipPath: "circle(2.8rem)",
					height: "6rem",
					width: "6rem",
				}} />
			</Box>
			<Heading as="h1" sx={{my: 3, fontSize: 6, fontWeight: "heading"}}>
				Aidan Miles
			</Heading>
			<Box sx={{my: 3}}>
				<ThemeLink variant="icon"
				title="email"
				href="mailto:aidan.miles@gmail.com">
					<Mail size={iconSize} />
				</ThemeLink>
				<ThemeLink variant="icon"
				title="GitHub"
				href="https://github.com/gdarb">
					<GitHub size={iconSize} />
				</ThemeLink>
				<ThemeLink variant="icon"
				title="LinkedIn"
				href="https://www.linkedin.com/in/aidanmiles/">
					<Linkedin size={iconSize} />
				</ThemeLink>
				<ThemeLink variant="icon"
				title="Keybase"
				href="https://keybase.io/gdarb">
					<Key size={iconSize} />
				</ThemeLink>
			</Box>
		</Flex>
	</>;
}
