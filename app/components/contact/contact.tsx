const Contact = () => {
  return (
    <div className="min-height-minus-navbar flex flex-col items-center justify-center">
      <h1 className="mt-16 text-center text-3xl font-bold">Contact</h1>
      <p data-testid="opening-paragraph" className="mb-16 px-8 pt-4 lg:pb-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
        {/* email */}
        <article>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <div className="card card-side mb-10 bg-base-100 shadow-2xl">
              {/* PROBLEM HERE WITH <P> CONTROLLING WIDTH */}
              <div className="card-body">
                <h2 className="card-title">Email</h2>
                <p>Provident cupiditate voluptatem et in.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* LinkedIn */}
        <article>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <div className="card card-side mb-10 bg-base-100 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">LinkedIn</h2>
                <p>Provident cupiditate voluptatem et in.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Open</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* GitHub */}
        <article>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <div className="card card-side mb-10 bg-base-100 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">GitHub</h2>
                <p>Provident cupiditate voluptatem et in.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Open</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* YouTube */}
        <article>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <div className="card card-side mb-10 bg-base-100 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">YouTube</h2>
                <p>Provident cupiditate voluptatem et in.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Open</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* phone */}
        <article>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <div className="card card-side mb-10 bg-base-100 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">Phone</h2>
                <p>Provident cupiditate voluptatem et in.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Contact;
