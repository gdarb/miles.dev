import Link from "next/link";
import { Anchor } from "./Anchor";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
	return (
		<header className="w-full bg-neutral-200 dark:bg-neutral-900">
			<Container className="flex flex-wrap justify-between items-center h-16">
				<div className="flex items-center space-x-2">
					<Link href="/" passHref={true}>
						<Anchor className="font-mono text-lg font-bold">
							&gt; /home/aidan
						</Anchor>
					</Link>
					<div className="w-3 h-5 bg-red-500 rounded-sm animate-pulse" />
				</div>
				<ThemeToggle />
			</Container>
		</header>
	);
}
