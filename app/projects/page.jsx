import { ProjectsData } from "../components/ProjectData";
import { ProjectCard } from "../components/ProjectCard";
import Shuffle from "../components/Shuffle ";

export default function Projects () {
  return (
    <>      
      <div className="mx-auto w-10/12">
        <div className="text-center mt-10 mb-10">
          <Shuffle
            text="Project"
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

        <div className="grid gap-10 md:grid-cols-2">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-60"></div>
    </>
  );
};
