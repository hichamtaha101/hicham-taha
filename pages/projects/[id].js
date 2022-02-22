import Layout from '../../components/layout'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import projects from '../../lib/projects';

export default function Project({ projectData }) {
  return (
	<div className="ht-page project-page">
		<Layout>

			{/* Banner */}
			<div className="ht-banner z-20 relative text-white ht-bg-blue">
				<div className="ht-wrapper flex flex-col">
					<Header currentSection={projectData.title} className="flex justify-between font-light border-b-2 border-white py-8" />
					<Banner description={projectData.description} title={projectData.title} subTitle={projectData.timeline}/>
				</div>
			</div>

			{/* Project Details */}
		</Layout>
	</div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible values for id.
  const paths = Object.keys( projects ).map( p => ({  params: { id: p  } }))
  return {
	  paths,
	  fallback: false,
  }
}

export async function getStaticProps({ params }) {
  	// Fetch necessary data for the blog post using params.id
  	const projectData = projects[params.id];
	return {
		props: { projectData, id: params.id }
	}
}