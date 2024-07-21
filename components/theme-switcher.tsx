"use client";

import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Switch
			checked={resolvedTheme === "light"}
			onChange={(value: boolean) => setTheme(value ? "light" : "dark")}
			className="size-6 transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
		>
			<span className="sr-only">Toggle theme</span>
			{resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
		</Switch>
	);
}
