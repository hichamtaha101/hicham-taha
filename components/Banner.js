import Link from 'next/link';
import Image from 'next/image';

export default function Banner({ title, description, subTitle = '' }) {

	return (
		<div className="flex justify-between items-center text-lg" style={{ minHeight: '450px' }}>
			<div>
				<Link href="/" passHref>
				<div className="font-light cursor-pointer hover:opacity-80 transition-opacity">
					<i className="fa fa-arrow-left mr-4" />Back To Home
				</div>
				</Link>
				<h1 className="text-7xl mt-2">{ title }</h1>
				{ subTitle && (<div className="font-light">{subTitle}</div>) }
				<p className="my-12 max-w-4xl w-full">{description}</p>
			</div>

			<div className="pr-12 hidden xs:block">
			<Image
				src="/images/hero-content-right-align.png"
				height={303}
				width={303}
				quality={100}
				alt="Hero Content Right Align"
			/>
			</div>
		</div>
	)
}