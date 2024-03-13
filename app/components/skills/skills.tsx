const aiSkills: string[] = [
  "Python, PyTorch",
  "Open Source LLMs and sLLMs",
  "Open AI API",
  "LangChain, LangSmith",
  "Fine-Tuning",
  "Vector Databases, Embeddings",
  "Stable Diffusion",
  "LLMOps, MLOps",
];
const fullstackSkills: string[] = [
  "TypeScript, React, Next.js",
  "Tailwind CSS",
  "GCP, Azure, AWS, Vercel",
  "Node",
  "Serverless Functions",
  "PostgreSQL, MongoDB",
  "Docker, Kubernates",
  "DevOps",
];

// render content from skills arrays
export const renderSkills = (skills: string[]): JSX.Element => (
  <ul tabIndex={0} className="text-xl font-bold">
    {skills.map((skill) => (
      <li key={skill} className="py-4 pl-12">
        <a>{skill}</a>
      </li>
    ))}
  </ul>
);

const Skills = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mt-16 text-center text-3xl font-bold">Skills</h1>
      <p className="mx-8 mb-16 px-8 pt-4 md:mx-16 lg:pb-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-col">
          <h2 className="mb-4 text-center text-2xl font-bold md:ml-16">
            AI Engineering
          </h2>
          {/* ai engineering skills */}
          <div
            data-testid="ai-skills"
            className="card mx-12 mb-10 flex flex-grow overflow-auto rounded-box bg-base-300 py-12 pr-6 md:mx-0 md:ml-16"
          >
            {renderSkills(aiSkills)}
          </div>
        </div>
        <div className="divider divider-horizontal md:flex"></div>
        <div className="flex w-full flex-col">
          <h2 className="mb-4 text-center text-2xl font-bold md:mr-16">
            Fullstack Development
          </h2>
          {/* fullstack skills */}
          <div
            data-testid="fullstack-skills"
            className="card mx-12 mb-10 flex flex-grow overflow-auto rounded-box bg-base-300 py-12 md:mx-0 md:mr-16"
          >
            {renderSkills(fullstackSkills)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
