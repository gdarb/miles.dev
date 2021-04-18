import {ReactNode} from "react";

type HoverProps = {
	as?: "div" | "span";
	children: ReactNode;
};

export function Hover({as = "div", children}: HoverProps) {
	const Element = as;

	return <Element className="transition duration-300 hover:text-blue-600 dark:hover:text-blue-400">
		{children}
	</Element>;
}
