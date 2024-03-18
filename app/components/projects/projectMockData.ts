export interface Project {
  id: number;
  srcAttr: string;
  altAttr: string;
  title: string;
  description: string;
  githubBoolean: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    srcAttr: "/project.webp",
    altAttr: "Project 1",
    title: "Project 1",
    description:
      "Project 1 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    githubBoolean: true,
  },
  {
    id: 2,
    srcAttr: "/project.webp",
    altAttr: "Project 2",
    title: "Project 2",
    description:
      "Project 2 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    githubBoolean: true,
  },
  {
    id: 3,
    srcAttr: "/project.webp",
    altAttr: "Project 3",
    title: "Project 3",
    description:
      "Project 3 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    githubBoolean: true,
  },
  {
    id: 4,
    srcAttr: "/project.webp",
    altAttr: "Project 4",
    title: "Project 4",
    description:
      "Project 4 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    githubBoolean: false,
  },
  {
    id: 5,
    srcAttr: "/project.webp",
    altAttr: "Project 5",
    title: "Project 5",
    description:
      "Project 5 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    githubBoolean: false,
  },
];
