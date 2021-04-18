import {ComponentPropsWithoutRef, forwardRef} from "react";
import {Hover} from "./Hover";

export const Anchor = forwardRef<
	HTMLAnchorElement,
	ComponentPropsWithoutRef<"a">
>(({href, children, ...rest}, ref) =>
// rome-ignore lint/jsx/noPropSpreading: just a wrapper around <a>
	<a ref={ref} href={href} {...rest}>
		<Hover>
			{children}
		</Hover>
	</a>
);
