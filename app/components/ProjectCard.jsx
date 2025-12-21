import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-3xl border border-white/20 bg-neutral-900 p-4 transition hover:scale-[1.02]
shadow-[10px_10px_0_rgba(255,255,255,0.9)]">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-sm text-teal-400">{project.category}</p>

        <h3 className="mt-1 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <a
            href={project.liveUrl}
            className="text-white underline underline-offset-4 hover:text-teal-400"
          >
            Visit
          </a>

          <a
            href={project.githubUrl}
            className="text-white hover:text-teal-400"
            aria-label="Github"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>

      {/* Decorative border effect */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
    </div>
  );
};
