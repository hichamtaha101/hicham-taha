/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import Layout from '../../components/layout'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import SectionTitle from '../../components/SectionTitle';
import projects from '../../lib/projects';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Project({ project, index, prevProject = false, nextProject = false }) {
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
		<Layout currentSection={project.title}>

			{/* Banner */}
			<div className="ht-banner z-20 relative text-white ht-bg-blue">
				<div className="ht-wrapper flex flex-col">
					<Header currentSection={project.title} className="flex justify-between font-light border-b-2 border-white py-8" />
					<Banner description={project.description} title={project.title} subTitle={project.timeline}/>
				</div>
			</div>

			{/* Project Details */}
			<div className="ht-bg-green pt-40">
				<div className="ht-wrapper flex flex-col gap-64">
					{ project.sections.map( (s, si) => (
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
												height={1080}
												width={1920}
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
					{/* Project Navigation  */}
					<div className="pb-16 flex flex-col xs:flex-row gap-4">
						{ prevProject && 
						<Link href={prevProject.link} passHref><div className="ht-button"><i className="fa fa-arrow-left mr-2"/>{index}. {prevProject.title}</div></Link> }
						<div className="ht-button no-hover flex-grow text-left xs:text-center">{index + 1}. {project.title}</div>
						{ nextProject && 
						<Link href={nextProject.link} passHref><div className="ht-button">{index + 2}. {nextProject.title}<i className="ml-2 fa fa-arrow-right" /></div></Link>
						}
					</div>
				</div>
			</div>

		</Layout>
	</div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible values for id.
  const paths = projects.map( p => ({  params: { id: p.id } }))
  return {
	  paths,
	  fallback: false,
  }
}

export async function getStaticProps({ params }) {
  	// Fetch necessary data for the blog post using params.id
  	const index = projects.findIndex( p => p.id === params.id );
	return {
		props: { 
			index,
			project: projects[index],
			prevProject: projects[index-1] ? { title: projects[index-1].title, link: projects[index-1].link } : false,
			nextProject: projects[index+1] ? { title: projects[index+1].title, link: projects[index+1].link } : false,
		}
	}
}