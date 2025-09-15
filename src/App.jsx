export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <span className="font-bold">Baiansuluu</span>
          <nav className="flex gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="inline-block rounded-full border px-3 py-1 text-sm text-slate-600">
          Software Engineer • Web
        </p>
        <h1 className="mt-4 text-4xl font-bold">
          Hi, I’m <span className="text-sky-600">Baian</span>.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          I build fast, accessible web experiences. Here are my projects and how to reach me.
        </p>
        <div className="mt-6 flex gap-3">
          <a className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700" href="/_CV_.pdf" download>
            Download Résumé
          </a>
          <a className="rounded-lg border px-4 py-2 font-medium hover:bg-slate-100" href="#contact">
            Contact
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border bg-white p-4">
            <h3 className="font-semibold">Project Name</h3>
            <p className="mt-2 text-sm text-slate-600">One-line description of what you built.</p>
            <div className="mt-4 flex gap-2">
              <a className="rounded-md border px-3 py-1 text-sm hover:bg-slate-100" href="#">Live</a>
              <a className="rounded-md border px-3 py-1 text-sm hover:bg-slate-100" href="#">Code</a>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-700">
          {["HTML","CSS","JavaScript","Git/GitHub","SQL"].map(s => (
            <li key={s} className="rounded-full border px-3 py-1">{s}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 pb-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-slate-600">
          Email: <a className="underline" href="mailto:you@example.com">you@example.com</a>
        </p>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Baiansuluu
        </div>
      </footer>
    </main>
  );
}
