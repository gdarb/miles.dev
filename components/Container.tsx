import { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
	className?: string;
	children: ReactNode;
};

export function Container({ className, children }: ContainerProps) {
	return (
		<div className={clsx("px-4 mx-auto max-w-5xl sm:px-6", className)}>
			{children}
		</div>
	);
}
