import Layout from '../../components/layout';
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Link from 'next/link';

export default function Contact() {
	return (
		<div className="ht-page contact-page">
			<Layout>

				{/* Banner */}
				<div className="ht-banner z-20 relative text-white ht-bg-blue">
					<div className="ht-wrapper flex flex-col">
						<Header currentSection="Get In Touch" className="flex justify-between font-light border-b-2 border-white py-8" />
						<Banner description="You can find me only various social platforms including Linkedin, Github, or Leetcode. Additionally, i'll be happy to answer any questions you may have via email or a phone call." title="Contact"/>
					</div>
				</div>

				{/* Contact Details */}
				<div className="ht-bg-green flex items-center" style={{ minHeight: "calc(100vh - 570px)"}}>
					<div className="ht-wrapper text-5xl">
						<h2 className="text-center mb-8 font-normal">Lets Connect</h2>
						<div className="flex justify-center gap-12 pb-12">
							<a href="https://www.linkedin.com/in/hichamakirataha/" target="_blank" rel="noreferrer">
								<i className="ht-contact-link devicon-linkedin-plain" />
							</a>
							<a href="https://github.com/hichamtaha101" target="_blank" rel="noreferrer">
								<i className="ht-contact-link devicon-github-plain" />
							</a>
							<a href="mailto:hichamtaha101@gmail.com">
								<i className="ht-contact-link fa-solid fa-envelope" />
							</a>
							<a href="tel:7787891002">
								<i className="ht-contact-link fa-solid fa-phone" />
							</a>
							<a href="https://leetcode.com/hichamtaha101/" target="_blank" rel="noreferrer">
							<svg className="w-12 h-auto ht-contact-link icon-leet-code" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/></svg>
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	)
}
