export default function Hero() {
  return (
<section className="mx-auto max-w-5xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="flex justify-center md:justify-start">
        <img
  src="/profile.jpg"
  alt="Baiansuluu Profile"
  className="w-72 h-80 md:w-96 md:h-[420px] object-cover shadow-lg"
/>

      </div>

      <div>
        <p className="inline-block rounded-full border px-3 py-1 text-sm text-slate-600">
          Software Engineer • Web Development
        </p>
        <h1 className="mt-4 text-4xl font-bold">
          Hi, I’m <span className="text-sky-600">Baiansuluu</span>.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Motivated Computer Science student pursuing a BA with a minor in
          Business Administration. Skilled in software engineering, web
          development, and databases. Passionate about improving user
          experiences and supporting cross-functional projects.
        </p>
        <p className="mt-2 text-slate-500">
          Houston, TX · Open to internships and junior roles
        </p>

        <div className="mt-3 flex flex-wrap gap-3 text-slate-500 text-sm">
          <a href="mailto:baansuluu22@gmail.com" className="underline">
            baansuluu22@gmail.com
          </a>
          <span>• 832-919-1050</span>
          <a
            href="https://www.linkedin.com/in/baian-550558227"
            className="underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Baiansulu"
            className="underline"
          >
            GitHub
          </a>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700"
            href="/_CV_.pdf"
            download
          >
            Download Résumé
          </a>
          <a
            className="rounded-lg border px-4 py-2 font-medium hover:bg-slate-100"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

