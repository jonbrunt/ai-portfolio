import Image from "next/image";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-5 mt-16 text-center text-3xl font-bold">About</h1>
      <figure>
        <Image
          src="/brunt-headshot.jpg"
          alt="Jonathan Brunt's Logo"
          width="320"
          height="320"
          className="mb-6 max-w-xs rounded-lg shadow-2xl"
        />
      </figure>
      <p className="mx-8 mb-4 px-8 pt-4">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
        assumenda excepturi exercitationem quasi. In deleniti eaque aut
        repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat
        fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
        aut repudiandae et a id nisi. Provident cupiditate voluptatem et in.
        Quaerat fugiat ut assumenda excepturi exercitationem quasi.
      </p>
      <p className="mx-8 mb-4 px-8">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
        assumenda excepturi exercitationem quasi. In deleniti eaque aut
        repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat
        fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
        aut repudiandae et a id nisi. Provident cupiditate voluptatem et in.
        Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
        eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et
        in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
      </p>
      <p className="mx-8 mb-6 px-8">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
        assumenda excepturi exercitationem quasi. In deleniti eaque aut
        repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat
        fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
        aut repudiandae et a id nisi. Provident cupiditate voluptatem et in.
        Quaerat fugiat ut assumenda excepturi exercitationem quasi.
      </p>
      <button className="btn btn-primary mb-8">Open CV</button>
    </div>
  );
};

export default About;
