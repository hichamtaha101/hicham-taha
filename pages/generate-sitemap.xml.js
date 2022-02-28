import projects from '../lib/projects';
const WEBSITE_URL = 'https://hichamtaha.com';

function generateSiteMap() {
	return `<?xml version="1.0" encoding="UTF-8"?>
	 <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	   <!--We manually set the URLs we know already-->
	   <url>
		 <loc>${WEBSITE_URL}</loc>
		 <lastmod>2022-02-28</lastmod>
	   </url>
	   <url>
		 <loc>${WEBSITE_URL}/contact</loc>
		 <lastmod>2022-02-28</lastmod>
	   </url>
	   ${projects
		 .map(({ id }) => {
		   return `
		 <url>
			 <loc>${`${WEBSITE_URL}/projects/${id}`}</loc>
			 <lastmod>2022-02-28</lastmod>
		 </url>
	   `
		 })
		 .join('')}
	 </urlset>
   `
}

// This page is just to generate content and paste it into public/sitemap.xml since static sites can't use server resources.
// Could probably write a script to automate this in the build pipeline, meh.
export default function SiteMap() {
	const sitemap = generateSiteMap();
	// res.setHeader('Content-Type', 'text/xml')
	// res.write(sitemap)
	// res.end()
	return sitemap;
}
