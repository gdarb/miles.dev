import clsx from "clsx";
import { ReactNode } from "react";

type ContainerProps = {
	className?: string;
	children: ReactNode;
};

export function Container({ className, children }: ContainerProps) {
	return (
		<div className={clsx("mx-auto max-w-5xl px-4 sm:px-6", className)}>
			{children}
		</div>
	);
}
