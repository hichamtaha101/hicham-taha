import React, { useState } from 'react';
import Link from 'next/link';

export default function Header({ className, currentSection = '' }) {
	const [currentYear] = useState(new Date().getFullYear());

	return (
		<div className={className}>
			<div className="uppercase">{currentSection}</div>
				<Link href="/" passHref>
					<div className="cursor-pointer hover:opacity-80 transition-opacity">
						{currentYear}, HICHAM TAHA
					</div>
				</Link>
			<div className="cursor-pointer hover:opacity-80 transition-opacity">
				<Link href="/contact" passHref>
					CONTACT
				</Link>
			</div>
		</div>
	);
}