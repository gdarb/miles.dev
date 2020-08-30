import React from "react";
import Head from "next/head";
import {Box, Flex, Heading} from "theme-ui";
import {CloudDrizzle} from "react-feather";

export default function pages() {
	return <>
		<Head>
			<title>
				404
			</title>
			<meta name="description" content="Aidan Miles - Software Developer" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Flex sx={{variant: "layout.main"}}>
			<Box sx={{
				my: 3,
			}}>
				<CloudDrizzle size={"1.5rem"} />
			</Box>
			<Heading as="h1" sx={{my: 3, fontSize: 6, fontWeight: "heading"}}>
				404
			</Heading>
			<Box sx={{my: 3, letterSpacing: 3}}>
				Oops, page not found&hellip;
			</Box>
		</Flex>
	</>;
}
