import Image from "next/image";
import { projects } from "@/app/components/projects/projectMockData";

const Projects = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mt-16 text-center text-3xl font-bold">Projects</h1>
      <p className="mb-16 px-8 pt-4 lg:pb-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </div>
  );
};

export default Projects;
