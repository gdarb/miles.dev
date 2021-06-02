import {useEffect, useState} from "react";
import {Switch} from "@headlessui/react";
import {MoonIcon, SunIcon} from "@heroicons/react/outline";
import {useTheme} from "next-themes";
import {Hover} from "./Hover";

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const {resolvedTheme, setTheme} = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return <Switch checked={resolvedTheme === "light"}
	onChange={(value: boolean) => setTheme(value ? "light" : "dark")}
	className="w-6 h-6">
		<span className="sr-only">
			Toggle theme
		</span>
		<Hover aria-hidden={true}>
			{resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
		</Hover>
	</Switch>;
}
