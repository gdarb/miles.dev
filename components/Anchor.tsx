import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Hover } from "./Hover";

export const Anchor = forwardRef<
	HTMLAnchorElement,
	ComponentPropsWithoutRef<"a">
>(({ href, children, ...rest }, ref) => (
	<a ref={ref} href={href} {...rest}>
		<Hover>{children}</Hover>
	</a>
));
