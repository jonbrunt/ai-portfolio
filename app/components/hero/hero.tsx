import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-height-minus-navbar hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/brunt-headshot.jpg"
          alt="Jonathan Brunt Professional Picture"
          width="384"
          height="384"
          className="max-w-xs rounded-lg shadow-2xl"
        />
        {/* title and intro */}
        <div className="px-6">
          <h1 className="text-3xl font-bold md:text-5xl">
            Jonathan Brunt: AI Engineer
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          {/* link to Projects */}
          <button className="btn btn-primary">My Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
