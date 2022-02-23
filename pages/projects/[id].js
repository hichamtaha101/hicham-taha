/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import SectionTitle from '../../components/SectionTitle';
import projects from '../../lib/projects';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Project({ projectData }) {
	const slickSettings = {
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
	};

  return (
	<div className="ht-page project-page">
		<Layout currentSection={projectData.title}>

			{/* Banner */}
			<div className="ht-banner z-20 relative text-white ht-bg-blue">
				<div className="ht-wrapper flex flex-col">
					<Header currentSection={projectData.title} className="flex justify-between font-light border-b-2 border-white py-8" />
					<Banner description={projectData.description} title={projectData.title} subTitle={projectData.timeline}/>
				</div>
			</div>

			{/* Project Details */}
			<div className="ht-bg-green py-40">
				<div className="ht-wrapper flex flex-col gap-64">
					{ projectData.sections.map( (s, si) => (
						<div key={si}>
							<SectionTitle
								title={s.title}
								titleSize="text-5xl"
								descriptions={s.titleDescriptions}
								append={(
									<div className="flex gap-6">
										<div className="ht-button no-hover">Learn More <i className="fa fa-arrow-down ml-1" /></div>
										{ s.link && <div className="ht-button"><a href={s.link} target="_blank" rel="noreferrer">Visit Website <i className="fa fa-link ml-1" /></a></div> }
									</div>
								)}
							/>
							<div className="mt-16 -mx-3">
								<Slider {...slickSettings}>
									{ s.slides.map( (slide, ssi) => (
										<div className="px-3" key={`slide_${ssi}`}>
											<div>
												<Image
												src={slide.src}
												height={468}
												width={906}
												quality={100}
												alt="test"
												/>
												{/* <img src={slide.src} alt=""/> */}
											</div>
											<div className="font-light text-lg border-t border-black inline-block mt-2 pt-3">{ssi + 1}. {slide.title}</div>
										</div>
									)) }
								</Slider>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	</div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible values for id.
  const paths = Object.keys( projects ).map( p => ({  params: { id: p } }))
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