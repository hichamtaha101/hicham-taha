import React, { useState } from 'react';
import Link from 'next/link';
import Header from './Header';

export default function Layout({ children }) {
	const [currentYear] = useState(new Date().getFullYear());
	
	return (
		<div>
			<div className="py-8 ht-header-fixed fixed z-10 w-full">
				<div className="ht-wrapper">
					<Header className="flex justify-between text-white" currentSection="Skills"/>
				</div>
			</div>
			{children}
			<div className="ht-footer py-8 text-white">
				<div className="ht-wrapper">
					<div className="flex justify-center items-center gap-4 font-light">
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