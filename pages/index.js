import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import Header from '../components/Header';
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
            	I am a post-graduate from Kwantlen Polytechnic University with a Bachelors in Information and Technology. The program I attended covered general computer hardware and software concepts, business statistics, and technology in web development and networking. I specialized in web and mobile application development with a GPA of 3.5.
              </p>
              <p className="mt-6">
              	Currently, I work at <a href="https://henesysgroup.com/" target="_blank" rel="noreferrer">Henesys Group</a> as a freelance developer. Regarding the work environment, I am self-driven and engaging towards back-end oriented projects. My preferred development stack include MongoDB, Express, Node, Vue / Nuxt, and Amazon Web Services for infrastructure/deployment support.
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
              However, I do have a life outside of web development. During my leisure time, watching television or hitting the gym is where i&apos;ll be. I enjoy fitness and am physically active at least three days of the week. Regarding television, I generally watch anything from American television series to silly cartoons and anime.
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
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
        {/* add font style scripts here */}
      </Head>
      <Layout>
      <div className="ht-banner z-20 relative">
        {/* Banner */}
        <div className="ht-wrapper text-white flex flex-col">
          <Header className="flex justify-between font-light border-b-2 border-white py-8" currentSection="Introduction" />
          <div className="flex justify-between flex-grow items-center">
            
            {/* Banner Left Side Content */}
            <div className="w-full max-w-4xl flex justify-between flex-col" style={{ minHeight: '810px' }}>
              <div></div>
              <div>
              <h2 className="text-3xl">Full Stack</h2>
              <h1 className="text-7xl">Developer</h1>
              <p className="font-light mt-12">I am a Full Stack Developer with experience in content management, inventory management, digital marketing, and cryptocurrency services. I am well versed in many modern web based frameworks, and am currently pursuing Vue, Nuxt, MongoDB, Node and AWS development. I am currently employed as a freelance developer for Henesys Group.</p>
              <p className="font-light mt-6">Additionally, I graduated with a Bachelors in Information Technology at Kwantlen Polytechnic University, specializing in Web and Mobile Application Development. </p>
              <p className="font-light mt-6">I&apos;ve got a keen interest for upcoming innovations and am constantly researching new technologies to improve my development skill set.</p>
              </div>
              <div className="text-lg font-light py-8"><i className="fa fa-arrow-down mr-4" />Scroll To Learn More</div>
            </div>

            {/* Banner Right Side Diamond */}
            <div className="w-full" style={{ padding: '105px', maxWidth: '710px'}}>
              <div className="p-12 rotate-45 border-2 border-white m-auto">
                <Image
                    src="/images/profile.png"
                    height={400}
                    width={400}
                    alt="Hicham Taha Profile Picture"
                    className="-rotate-45"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="ht-skills">
        <div className="ht-wrapper py-40">
          <div className="flex flex-wrap justify-between gap-6">
            <h1 className="text-7xl">Skills</h1>
            <div className="max-w-5xl">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="ht-button mt-8">Check out my skill below <i className="fa fa-arrow-down ml-1" /></div>
            </div>
          </div>
          <div className="border-t border-black pb-24 mt-24" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-40">
            <div>
              <div className="pb-12">Front End</div>
              { frontendSkills.map( (skill, i ) => (
                <div className="flex items-end mt-12" key={i}>
                  <div className="w-40 text-6xl"><i className={skill.icon} /></div>
                  <div className="flex-grow">
                    <div>{skill.name}</div>
                    <div className="border border-black h-6">
                      <div className="bg-black h-full" style={{ width: `${skill.percentage}%` }}/>
                    </div>
                  </div>
                </div>
              ) )}
            </div>
            <div>
              <div className="pb-12">Back End</div>
              { backendSkills.map( (skill, i ) => (
                <div className="flex items-end mt-12" key={i}>
                  <div className="w-40 text-6xl"><i className={skill.icon} /></div>
                  <div className="flex-grow">
                    <div>{skill.name}</div>
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
      <div className="ht-projects">
      <div className="ht-wrapper pt-40 pb-60">
          <div className="flex flex-wrap justify-between gap-6">
            <h1 className="text-7xl">Projects</h1>
            <div className="max-w-5xl">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="border-t border-black pb-24 mt-24" />
          <div className="ht-projects-grid grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-y-40">
            { projects.map( (project, i) => (
                <div className="relative" key={i}>
                    <h3 className="text-4xl font-normal">0{ i + 1 } {project.title}</h3>
                    <p className="mt-8 mb-6 font-light">{project.description}</p>
                      <Link href={project.link} passHref>
                        <div className="ht-button">
                            Learn More <i className="fa fa-plus" />
                        </div>
                      </Link>
                </div>
            ) ) }
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="ht-about-me">
        <div className="ht-wrapper">
          <div className="py-40">
            <div className="flex flex-wrap justify-between gap-6">
              <h1 className="text-7xl">About Me</h1>
              <div className="max-w-5xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>

          {/* Below About Me Section */}
          <div className="flex">
              <div className="max-w-xl w-full">
                <div 
                className={`ht-about-me__link p-6 text-4xl cursor-pointer ${activeAboutSection === 'education-and-work' ? 'active' : 'border-b border-black'}`} 
                onClick={() => { setActiveAboutSection('education-and-work') }}>
                  Education & Work
                </div>
                <div 
                className={`ht-about-me__link p-6 text-4xl cursor-pointer ${activeAboutSection === 'personal-hobbies' ? 'active' : 'border-b border-black'}`}
                onClick={() => { setActiveAboutSection('personal-hobbies') } }>
                  Personal Hobbies
                </div>
              </div>
              <div className="py-10 pl-14 flex-grow bg-white ht-about-me__content" style={{ minHeight: "418px" }}>
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
      projects: Object.values( projects ),
    }
  }
}