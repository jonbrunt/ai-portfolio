export interface Video {
  id: number;
  srcAttr: string;
  altAttr: string;
  title: string;
  description: string;
}

export const videos: Video[] = [
  {
    id: 1,
    srcAttr: "/youtube.webp",
    altAttr: "Video 1",
    title: "Video 1",
    description:
      "Video 1 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  },
  {
    id: 2,
    srcAttr: "/youtube.webp",
    altAttr: "Video 2",
    title: "Video 2",
    description:
      "Video 2 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  },
  {
    id: 3,
    srcAttr: "/youtube.webp",
    altAttr: "Video 3",
    title: "Video 3",
    description:
      "Video 3 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  },
];
