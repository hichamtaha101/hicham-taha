import projects from '../lib/projects';
const WEBSITE_URL = 'https://hichamtaha.com';

// Could do something for lastmod if necessary. Unless grabbing from headless cms.
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

// getServerSideProps will do the heavy lifting
function SiteMap() {}
export async function getServerSideProps({ res }) {
	const sitemap = generateSiteMap()
	res.setHeader('Content-Type', 'text/xml')
	res.write(sitemap)
	res.end()
	return { props: {} }
}

export default SiteMap;
