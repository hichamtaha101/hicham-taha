import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="ht-page home">
      <Head>
        <title>Hicham Taha | Full Stack Developer</title>
        <meta name="description" content="Portfolio for Full Stack Developer Hicham Taha" />
        <meta name="author" content="Hicham Akira Taha"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        {/* add font style scripts here */}
      </Head>
      <div className="ht-banner">
        <div className="ht-wrapper text-white flex flex-col">

          {/* Banner Menu */}
          <div className="flex justify-between font-light border-b-2 border-white py-8">
            <div className="cursor-pointer hover:opacity-75 transition-opacity">INTRODUCTION</div>
            <div className="cursor-pointer hover:opacity-75 transition-opacity">{ new Date().getFullYear() }, HICHAM TAHA</div>
            <div className="cursor-pointer hover:opacity-75 transition-opacity">CONTACT</div>
          </div>

          <div className="flex justify-between flex-grow items-center">
            
            {/* Banner Left Side Content */}
            <div className="w-full max-w-4xl flex justify-between flex-col" style={{ minHeight: '810px' }}>
              <div></div>
              <div>
              <h2 className="text-3xl">Full Stack</h2>
              <h1 className="text-7xl">Developer</h1>
              <p className="text-lg font-light mt-12">I am a Full Stack Developer with experience in content management, inventory management, digital marketing, and cryptocurrency services. I am well versed in many modern web based frameworks, and am currently pursuing Vue, Nuxt, MongoDB, Node and AWS development. I am currently employed as a freelance developer for Henesys Group.</p>
              <p className="text-lg font-light mt-6">Additionally, I graduated with a Bachelors in Information Technology at Kwantlen Polytechnic University, specializing in Web and Mobile Application Development. </p>
              <p className="text-lg font-light mt-6">I&apos;ve got a keen interest for upcoming innovations and am constantly researching new technologies to improve my development skill set.</p>
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
          <h1 className="text-7xl">Skills</h1>
        </div>

      </div>

      {/* Projects Section */}
      <div className="ht-projects">
        <div className="ht-wrapper py-40">
          <h1 className="text-7xl">Projects</h1>
        </div>

      </div>

      {/* About Me Section */}
      <div className="ht-about-me">
        <div className="ht-wrapper py-40">
          <h1 className="text-7xl">About Me</h1>
        </div>

      </div>
    </div>
  )
}
