const fs = require("fs");
const globby = require("globby");

async function generateSitemap() {
	const site = process.env.SITE_URL;

	const pages = await globby([
		"pages/**/*.tsx",
		"!pages/_*.tsx",
		"!pages/404.tsx",
		"!pages/api",
	]);

	let sitemap = `<?xml version="1.0" encoding="UTF-8"?>`;

	sitemap += `\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

	pages.map((page) => {
		const path = page.replace("pages", "").replace(".tsx", "");
		const route = path === "/index" ? "/" : path;
		sitemap += `\n\t<url>\n\t\t<loc>${site}${route}</loc>\n\t</url>`;
	});

	sitemap += "\n</urlset>";

	fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
