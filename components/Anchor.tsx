import clsx from "clsx";
import {ComponentPropsWithoutRef, forwardRef} from "react";

export const Anchor = forwardRef<
	HTMLAnchorElement,
	ComponentPropsWithoutRef<"a">
>(({children, className, href, ...rest}, ref) =>
// rome-ignore lint/jsx/noPropSpreading: just a wrapper around <a>
	<a className={clsx(
		"transition duration-300 hover:text-blue-600 dark:hover:text-blue-400",
		className,
	)}
	href={href}
	ref={ref}
	{...rest}>
		{children}
	</a>
);
