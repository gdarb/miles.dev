import {Container} from "./Container";
import {Link} from "./Link";

export function Header() {
	return <header className="w-full bg-gray-200 dark:bg-gray-900">
		<Container className="flex flex-wrap justify-between items-center h-16">
			<div className="flex items-center space-x-2">
				<Link href="/" className="font-mono text-lg font-bold">
					&gt; /home/aidan
				</Link>
				<div className="w-3 h-5 bg-red-500 rounded-sm animate-pulse" />
			</div>
		</Container>
	</header>;
}
