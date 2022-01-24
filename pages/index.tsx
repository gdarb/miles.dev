import { MailIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { ReactNode } from "react";
import { Anchor } from "../components/Anchor";
import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import {
	GitHubIcon,
	KeybaseIcon,
	LinkedInIcon,
} from "../components/SocialIcons";
import avatar from "../public/avatar.jpg";

type Social = {
	name: string;
	icon: ReactNode;
	href: string;
};

const socials: Social[] = [
	{
		name: "Email",
		icon: <MailIcon className="scale-125" />,
		href: "mailto:aidan.miles@gmail.com",
	},
	{
		name: "GitHub",
		icon: <GitHubIcon />,
		href: "https://github.com/gdarb",
	},
	{
		name: "LinkedIn",
		icon: <LinkedInIcon />,
		href: "https://www.linkedin.com/in/aidanmiles/",
	},
	{
		name: "Keybase",
		icon: <KeybaseIcon />,
		href: "https://keybase.io/gdarb",
	},
];

export default function pages() {
	return (
		<Layout>
			<Container className="flex flex-auto flex-col items-center justify-center space-y-14 py-10">
				<div className="relative h-28 w-28 rounded-full ring-4 ring-neutral-300">
					<Image
						src={avatar}
						alt="Avatar"
						className="rounded-full object-cover"
					/>
				</div>
				<h1 className="text-center text-5xl font-bold">Aidan Miles</h1>
				<div className="flex space-x-8">
					{socials.map(({ name, icon, href }) => (
						<Anchor key={href} href={href} className="h-8 w-8">
							<span className="sr-only">{name}</span>
							<div aria-hidden={true}>{icon}</div>
						</Anchor>
					))}
				</div>
			</Container>
		</Layout>
	);
}
