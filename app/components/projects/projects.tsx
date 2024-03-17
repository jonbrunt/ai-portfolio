import Image from "next/image";
import { projects } from "@/app/components/projects/projectMockData";

const Projects = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mt-16 text-center text-3xl font-bold">Projects</h1>
      <p data-testid="opening-paragraph" className="mb-16 px-8 pt-4 lg:pb-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 lg:flex-row">
        {/* project mapping from projectMockData.ts */}
        {projects.map((project) => (
          <article key={project.id}>
            <div className="card mb-10 w-96 bg-base-100 shadow-2xl">
              <figure>
                <Image
                  src={project.srcAttr}
                  alt={project.altAttr}
                  width="320"
                  height="320"
                  className="max-w-xs rounded-lg shadow-2xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  {/* conditional rendering for GitHub button if code is open-source  */}
                  {project.githubBoolean ? (
                    <button className="btn btn-primary">GitHub</button>
                  ) : null}
                  <button className="btn btn-primary">Open App</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
