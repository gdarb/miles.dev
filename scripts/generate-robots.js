const fs = require("fs");

async function generateRobots() {
	const site = process.env.SITE_URL;

	let robots = "User-agent: *";
	robots += "\nDisallow:";

	robots += `\n\nSitemap: ${site}/sitemap.xml`;

	fs.writeFileSync("public/robots.txt", robots);
}

generateRobots();
