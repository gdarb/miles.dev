import {ComponentProps, ComponentPropsWithoutRef, forwardRef} from "react";
import NextLink from "next/link";
import {Anchor} from "./Anchor";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
	href: ComponentProps<typeof NextLink>["href"];
};

export const Link = forwardRef<HTMLAnchorElement, Props>((
	{children, href, ...rest},
	ref,
) =>
// rome-ignore lint/jsx/noPropSpreading: just a wrapper around <Link>
	<NextLink href={href} passHref={true}>
		<Anchor ref={ref} {...rest}>
			{children}
		</Anchor>
	</NextLink>
);
