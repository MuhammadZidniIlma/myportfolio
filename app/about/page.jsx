import React from "react";
import Shuffle from "../components/Shuffle ";
import Image from "next/image";
import Lanyard from '../components/Lanyard'
import LogoLoop from '../components/LogoLoop';
import { Timeline } from "../components/Timeline";
import { EducationData, TimelineData } from "../components/TimelineData";
import { SiTailwindcss, SiHtml5, SiSass, SiCss3, SiLaravel, SiMysql, SiSqlite, SiFigma, SiGithub, SiJavascript, SiPrisma, SiBootstrap } from 'react-icons/si';

const techLogos = [
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com/" },
  { node: <SiGithub />, title: "Github", href: "https://github.com/" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiSqlite />, title: "SQLite", href: "https://www.sqlite.org/index.html" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io/" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://www.w3schools.com/html/" },
  { node: <SiCss3 />, title: "CSS3", href: "https://www.w3schools.com/css/" }, 
  { node: <SiSass />, title: "Sass", href: "https://sass-lang.com/" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript />, title: "Javascript", href: "https://www.javascript.com/" },  
];

export default function About() {
  
  return (
    <>      
      <div className="w-10/12 mx-auto "> 
        <div className="text-center mt-10 ">
          <Shuffle
            text="About Me"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
        </div>      
        
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <div className="w-full md:w-1/2 pt-0 md:pt-20">
              <h1 className="text-3xl font-bold mb-4">Biography</h1>
              <p className="text-justify">Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.<br/>
              I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.<br/>
              Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
          </div>
          <div className=" flex justify-center order-first md:order-last">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 aspect-square mb-10 md:mb-0 md:hidden">
              <Image
                src="/profile.jpg"
                alt="Profile Illustration"
                fill
                className="object-contain rounded-md z-10"
                priority
              />
            </div>
            <div className="absolute top-0 right-1/4 translate-x-1/2 w-full -mt-16 hidden md:block">
            <Lanyard position={[0, 0, 15]} gravity={[0, -70, 0]} />
            </div>
          </div>
        </div>      
      </div>
      
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className="mt-36">
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#111"
          ariaLabel="Technology partners"
        />            
      </div>
      
      <div className="relative w-full overflow-clip">
        <Timeline data={TimelineData} title="Experience"/>      
      </div>    
      <div className="relative w-full overflow-clip mt-5">
        <Timeline data={EducationData} title="Education"/>      
      </div>        

      <div className="mt-60"></div>
    </>
  );
}
