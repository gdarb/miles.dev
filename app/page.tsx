import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GitHubIcon } from "@/components/github-icon";
import { Header } from "@/components/header";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import memoji from "./memoji.png";

type Social = {
	name: string;
	icon: ReactNode;
	href: string;
};

let socials: Social[] = [
	{
		name: "Email",
		icon: <EnvelopeIcon className="scale-125" />,
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
];

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex flex-auto">
				<Container className="flex flex-auto flex-col items-center justify-center gap-y-14 py-10">
					<div className="relative size-28 rounded-full ring-4 ring-neutral-300">
						<Image
							src={memoji}
							alt="Avatar"
							className="rounded-full object-cover"
						/>
					</div>
					<h1 className="text-center text-5xl font-semibold">
						Aidan Miles
					</h1>
					<div className="flex gap-x-8">
						{socials.map(({ name, icon, href }) => (
							<Link
								key={href}
								href={href}
								className="size-8 transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
							>
								<span className="sr-only">{name}</span>
								<div aria-hidden={true}>{icon}</div>
							</Link>
						))}
					</div>
				</Container>
			</main>
			<Footer />
		</div>
	);
}
