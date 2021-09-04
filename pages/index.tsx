import {ReactNode} from "react";
import Image from "next/image";
import {MailIcon} from "@heroicons/react/outline";
import {Layout} from "../components/Layout";
import {Container} from "../components/Container";
import {GitHubIcon, KeybaseIcon, LinkedInIcon} from "../components/SocialIcons";
import {Anchor} from "../components/Anchor";
import avatar from "../public/avatar.jpg"

type Social = {
	name: string;
	icon: ReactNode;
	href: string;
};

const socials: Social[] = [
	{
		name: "Email",
		icon: <MailIcon className="transform scale-125" />,
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
	return <Layout>
		<Container className="flex flex-col flex-auto justify-center items-center py-10 space-y-14">
			<div className="relative w-28 h-28 rounded-full ring-4 ring-gray-300">
				<Image src={avatar}
				alt="Avatar"
				className="object-cover rounded-full" />
			</div>
			<h1 className="text-5xl font-bold text-center">
				Aidan Miles
			</h1>
			<div className="flex space-x-8">
				{socials.map(({name, icon, href}) =>
					<Anchor key={href} href={href} className="w-8 h-8">
						<span className="sr-only">
							{name}
						</span>
						<div aria-hidden={true}>
							{icon}
						</div>
					</Anchor>
				)}
			</div>
		</Container>
	</Layout>;
}
