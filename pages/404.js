import Layout from '../components/layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Link from 'next/link';

export default function Custom404() {
	return (
		<div className="ht-page contact-page">
		<Layout title="Hicham Taha | 404 Not Found" description="Request page for hichamtaha.com could not be found.">

			{/* Banner */}
			<div className="ht-banner z-20 relative text-white ht-bg-blue">
				<div className="ht-wrapper flex flex-col">
					<Header currentSection="404 Not Found" className="border-b-2 border-white py-8" />
					<Banner description="The page you have requested could not be found." title="Oops!"/>
				</div>
			</div>

			{/* Return Home */}
			<div className="ht-bg-green flex items-center" style={{ minHeight: "calc(100vh - 570px)"}}>
			<div className="ht-wrapper">
				<div className="gap-4 flex-col flex text-center">
					<h2 className="text-5xl font-light">Oops, something went wrong!</h2>
					<h3 className="text-3xl font-light">Error Code 404 Page Not Found</h3>
					<Link href="/" rel="canonical" passHref><div className="ht-button w-fit m-auto">Return Home <i className="fa fa-home"></i></div></Link>
				</div>
			</div>
			</div>
		</Layout>
		</div>
	)
}