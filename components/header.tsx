import Link from "next/link";
import { Container } from "./container";
import { ThemeSwitcher } from "./theme-switcher";
// import { ThemeToggle } from "./ThemeToggle";

export function Header() {
	return (
		<header className="w-full bg-neutral-200 dark:bg-neutral-900">
			<Container className="flex h-16 flex-wrap items-center justify-between">
				<div className="flex items-center gap-x-2">
					<Link
						href="/"
						className="font-mono text-lg font-bold transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
					>
						&gt; /home/aidan
					</Link>
					<div className="h-5 w-3 animate-pulse rounded-xs bg-red-500" />
				</div>
				{<ThemeSwitcher />}
			</Container>
		</header>
	);
}
