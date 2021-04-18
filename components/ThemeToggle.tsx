import {useEffect, useState} from "react";
import {Switch} from "@headlessui/react";
import {MoonIcon, SunIcon} from "@heroicons/react/outline";
import {useTheme} from "next-themes";
import {Anchor} from "./Anchor";

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const {setTheme} = useTheme();
	const [enabled, setEnabled] = useState(false);

	function toggleTheme(checked: boolean) {
		setEnabled(checked);
		setTheme(enabled ? "light" : "dark");
	}

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return <Switch checked={enabled} onChange={toggleTheme} className="w-6 h-6">
		<span className="sr-only">
			Toggle colour mode
		</span>
		<Anchor aria-hidden={true}>
			{enabled ? <SunIcon /> : <MoonIcon />}
		</Anchor>
	</Switch>;
}
