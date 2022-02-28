import React, { useState } from 'react';
import Link from 'next/link';
import Header from './Header';
import Head from 'next/head'

export default function Layout({ 
	children, 
	currentSection, 
	title = "Hicham Taha | Full Stack Developer",
	description = "Portfolio website for Full Stack Developer Hicham Taha",
	appendHead
}) {
	const [currentYear] = useState(new Date().getFullYear());
	
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="author" content="Hicham Akira Taha"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" type="image/png" href="/favicon.png" />
				{/* add font style scripts here */}
				{ appendHead ? appendHead : null }
			</Head>
			<div className="py-8 ht-header-fixed fixed z-10 w-full ht-bg-blue">
				<div className="ht-wrapper">
					<Header className="flex justify-between text-white" currentSection={currentSection}/>
				</div>
			</div>
			{children}
			<div className="py-8 text-white" style={{background: '#16232d'}}>
				<div className="ht-wrapper">
					<div className="flex flex-wrap justify-center items-center gap-4 font-light">
						<div className="hover:opacity-80 transition-opacity cursor-pointer">
							<Link href="/">
								HICHAM TAHA
							</Link>
						</div>
						<div>{currentYear}</div>
						<div>•</div>
						<div className="hover:opacity-80 transition-opacity cursor-pointer">
							<Link href="/#projects">
								PROJECTS
							</Link>
						</div>
						<div>•</div>
						<div className="hover:opacity-80 transition-opacity cursor-pointer">
							<Link href="/#skills">
								SKILLS
							</Link>
						</div>
						<div>•</div>
						<div className="hover:opacity-80 transition-opacity cursor-pointer">
							<Link href="/#about">
								ABOUT
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}