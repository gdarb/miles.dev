import Link from "next/link";
import { Anchor } from "./Anchor";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
	return (
		<header className="w-full bg-neutral-200 dark:bg-neutral-900">
			<Container className="flex h-16 flex-wrap items-center justify-between">
				<div className="flex items-center space-x-2">
					<Link href="/" passHref={true}>
						<Anchor className="font-mono text-lg font-bold">
							&gt; /home/aidan
						</Anchor>
					</Link>
					<div className="h-5 w-3 animate-pulse rounded-sm bg-red-500" />
				</div>
				<ThemeToggle />
			</Container>
		</header>
	);
}
