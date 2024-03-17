export interface Post {
  id: number;
  srcAttr: string;
  altAttr: string;
  title: string;
  description: string;
}

export const posts: Post[] = [
  {
    id: 1,
    srcAttr: "/blog.png",
    altAttr: "Post 1",
    title: "Post 1",
    description:
      "Post 1 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  },
  {
    id: 2,
    srcAttr: "/blog.png",
    altAttr: "Post 2",
    title: "Post 2",
    description:
      "Post 2 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  },
  {
    id: 3,
    srcAttr: "/blog.png",
    altAttr: "Post 3",
    title: "Post 3",
    description:
      "Post 3 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  },
];
