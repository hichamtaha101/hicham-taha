/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import { backendSkills, frontendSkills } from '../lib/skills';
import projects from '../lib/projects';
import Link from 'next/link'

export default function Home({ frontendSkills, backendSkills, projects }) {
  const [ activeAboutSection, setActiveAboutSection ] = useState( 'education-and-work' );

  const getAboutSectionContent = ( type ) => {
    switch (type) {
        case 'education-and-work':
          return (
            <React.Fragment>
              <p>
            	  I am a post-graduate from Kwantlen Polytechnic University with a Bachelors in Information and Technology. The program I attended covered general computer hardware and software concepts, business statistics, and technology in web development and networking. I specialized in web and mobile application development with a GPA of 3.8.
              </p>
              <p className="mt-6">
              	Currently, I work at <a href="https://henesysgroup.com/" target="_blank" rel="noreferrer">Henesys Group</a> as a freelance developer. My responsibilities are oriented towards back-end or full-stack related projects. My preferred development stack include MongoDB, Express, Node, Vue / Nuxt, and Amazon Web Services for infrastructure/deployment support.
              </p>
            </React.Fragment>
          );

        case 'personal-hobbies':
          return (
            <React.Fragment>
              <p>
              Outside of work hours, i&apos;m still a developer. A fair amount of my spare time is invested in learning new development tools and techniques. I&apos;m subscribed to various learning platforms such as Udemy, Code Academy and Team Tree House.
            </p>
            <p className="mt-6">
              Outside of development, watching television, playing video games, or hitting the gym is where i&apos;ll be. I enjoy fitness and try to be physically active at least three days of the week. Regarding television, I generally watch anything from popular television series to silly cartoons and animes. Lastly, I enjoy classic games on my switch, or playing Counter Strike and Starcraft on my gaming desktop.
            </p>
            </React.Fragment>
          );

        default:
          return (
            <React.Fragment>
              <p>Unknown Section Selected</p>
            </React.Fragment>
          );
    }
  }

  return (
    <div className="ht-page homepage">
      <Head>
        <title>Hicham Taha | Full Stack Developer</title>
        <meta name="description" content="Portfolio for Full Stack Developer Hicham Taha" />
        <meta name="author" content="Hicham Akira Taha"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* add font style scripts here */}
      </Head>
      <Layout currentSection="Skills">
      <div className="ht-banner z-20 relative ht-bg-blue">
        {/* Banner */}
        <div className="ht-wrapper text-white flex flex-col">
          <Header className="flex justify-between font-light border-b-2 border-white py-8" currentSection="Introduction" />
          <div className="flex justify-between flex-wrap sm:flex-nowrap flex-grow items-center">
            
            {/* Banner Left Side Content */}
            <div className="w-full max-w-4xl order-2 sm:order-1 pb-20 mt-0 sm:mt-6">
              <div>
              <h2 className="text-3xl">Full Stack</h2>
              <h1 className="text-7xl">Developer</h1>
              <p className="font-light mt-12">I am a Full Stack Developer with experience in content management, inventory management, digital marketing, and cryptocurrency services. I am well versed in many modern web based frameworks, and am currently pursuing Vue, Nuxt, MongoDB, Node and AWS development. I am currently employed as a freelance developer for Henesys Group.</p>
              <p className="font-light mt-6">Additionally, I graduated with a Bachelors in Information Technology at Kwantlen Polytechnic University, specializing in Web and Mobile Application Development. </p>
              <p className="font-light mt-6">I&apos;ve got a keen interest for upcoming innovations and am constantly researching new technologies to improve my development skill set.</p>
              </div>
              <div className="text-lg font-light absolute bottom-4 sm:bottom-8"><i className="fa fa-arrow-down mr-4" />Scroll To Learn More</div>
            </div>

            {/* Banner Right Side Diamond */}
            <div className="w-full order-1 sm:order-2 p-0 sm:p-28 my-6 sm:my-12" style={{ maxWidth: '710px'}}>
              <div className="p-0 sm:p-12 rotate-0 sm:rotate-45 border-0 sm:border-2 border-white m-auto">
                <Image
                    src="/images/profile.png"
                    height={400}
                    width={400}
                    quality={100}
                    alt="Hicham Taha Profile Picture"
                    className="rotate-0 sm:-rotate-45"
                  />
                  {/* <img src="/images/profile.png" alt="Profile Image" className="rotate-0 sm:-rotate-45"/> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="ht-bg-pink" id="skills">
        <div className="ht-wrapper py-40">
          <SectionTitle 
          title="Skills" 
          descriptions={["Having 6+ years of working experience in web and software development, i've has the opportunity to explore a vast range of popular tools and technology. The following grid ranks my technical competencies from most comfortable to least. Nonetheless, each item listed below has been fundamentally involved in at least one of my work related projects."]}
          append={(
            <div className="ht-button no-hover">Check out my skill below <i className="fa fa-arrow-down ml-1" /></div>
          )}
          />

          <div className="border-t border-black pb-24 mt-24" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-40">
            <div>
              <div className="pb-0 sm:pb-12 text-lg font-light">Front End</div>
              { frontendSkills.map( (skill, i ) => (
                <div className="flex items-end mt-12" key={i}>
                  <div className="w-40 text-6xl"><i className={skill.icon} /></div>
                  <div className="flex-grow">
                    <div className="font-light mb-1">{skill.name}</div>
                    <div className="border border-black h-6">
                      <div className="bg-black h-full" style={{ width: `${skill.percentage}%` }}/>
                    </div>
                  </div>
                </div>
              ) )}
            </div>
            <div>
              <div className="pb-0 sm:pb-12 text-lg font-light">Back End</div>
              { backendSkills.map( (skill, i ) => (
                <div className="flex items-end mt-12" key={i}>
                  <div className="w-40 text-6xl"><i className={skill.icon} /></div>
                  <div className="flex-grow">
                    <div className="font-light mb-1">{skill.name}</div>
                    <div className="border border-black h-6">
                      <div className="bg-black h-full" style={{ width: `${skill.percentage}%` }}/>
                    </div>
                  </div>
                </div>
              ) )}
            </div>
          </div>
        </div>

      </div>

      {/* Projects Section */}
      <div className="ht-projects ht-bg-green" id="projects">
      <div className="ht-wrapper pt-40 pb-60">
          <SectionTitle 
          title="Projects"
          descriptions={["Below is a timeline of projects i've developed or lead throughout my professional career sorted by completion date. In general, i've created API services, web platforms, automation scripts, websites, and e-commerce solutions. You may view the individual projects in detail by clicking on their \"Learn More\" button."]}
          />
          <div className="border-t border-black pb-24 mt-24" />
          <div className="ht-projects-grid grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-y-40">
            { projects.map( (project, i) => (
                <div className="relative flex flex-col" key={i}>
                    <h3 className="text-4xl font-normal">0{ i + 1 } {project.title}</h3>
                    <h6 className="font-normal mt-1">{project.timeline}</h6>
                    <p className="mt-8 mb-6 font-light">{project.description}</p>
                      <Link href={project.link} passHref>
                        <div className="ht-button mt-auto">
                            Learn More <i className="fa fa-plus" />
                        </div>
                      </Link>
                </div>
            ) ) }
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="ht-about-me ht-bg-pink" id="about">
        <div className="ht-wrapper">
          <div className="pt-40 pb-12">
            <SectionTitle title="About Me"/>
          </div>

          {/* Below About Me Section */}
          <div className="flex">
              <div className="max-w-xl w-full">
                <div 
                className={`ht-about-me__link p-6 text-lg xs:text-4xl cursor-pointer ${activeAboutSection === 'education-and-work' ? 'active' : 'border-b border-black'}`} 
                onClick={() => { setActiveAboutSection('education-and-work') }}>
                  Education & Work
                </div>
                <div 
                className={`ht-about-me__link p-6 text-lg xs:text-4xl cursor-pointer ${activeAboutSection === 'personal-hobbies' ? 'active' : 'border-b border-black'}`}
                onClick={() => { setActiveAboutSection('personal-hobbies') } }>
                  Personal Hobbies
                </div>
              </div>
              <div className="py-10 pl-14 flex-grow bg-white ht-about-me__content" style={{ minHeight: "500px" }}>
                <div className="max-w-5xl ml-auto">
                  {getAboutSectionContent(activeAboutSection)}
                </div>
              </div>
          </div>
        </div>
      
      </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  // Fetch necessary data for the homepage.
  return {
    props: { 
      frontendSkills, 
      backendSkills,
      projects: Object.values( projects ).map( p => {
        const copy = JSON.parse( JSON.stringify( p ) );
        // Ellipses for descriptions that are too long.
        let sliced = copy.description.slice(0, 200).trim().split( ' ' );
        sliced.pop();
        sliced = sliced.join(' ');
        copy.description = `${sliced}...`;
        return copy;
      }),
    }
  }
}