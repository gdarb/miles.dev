import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Hover } from "./Hover";

export const Anchor = forwardRef<
	HTMLAnchorElement,
	ComponentPropsWithoutRef<"a">
>(function Anchor({ href, children, ...rest }, ref) {
	return (
		<a ref={ref} href={href} {...rest}>
			<Hover>{children}</Hover>
		</a>
	);
});
