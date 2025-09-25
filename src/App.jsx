import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <span className="font-bold">Baiansuluu</span>
          <nav className="flex gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <Hero />


      {/* Projects Section */}
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

      {/* Experience Section */}
      <section id="experience" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="font-semibold">Frankly Speaking Agency — Intern</h3>
            <p className="text-sm text-slate-500">Atlanta, GA · Dec 2022 – Feb 2023</p>
            <ul className="list-disc pl-5 mt-2 text-slate-600 text-sm">
              <li>Supported development and optimization of web pages for marketing campaigns reaching 5,000+ users.</li>
              <li>Improved UX with HTML, CSS, and JavaScript, reducing page load times by 15%.</li>
              <li>Collaborated with cross-functional teams to deliver projects aligned with business goals.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-2 text-slate-600">
          <strong>North American University — Texas</strong><br />
          BA in Computer Science (Minor in Business Administration) — Expected 2026
        </p>
        <p className="text-sm text-slate-500 mt-1">
          Relevant coursework: Web Development, Software Engineering, Database Systems
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-700">
          {[
            "HTML","CSS","JavaScript","SQL","Git/GitHub","Python","Ruby",
            "Database Systems","Software Engineering","Web Development",
            "Visual Studio Code","Microsoft Office"
          ].map(s => (
            <li key={s} className="rounded-full border px-3 py-1">{s}</li>
          ))}
        </ul>
      </section>
<Contact />
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Baiansuluu
        </div>
      </footer>
    </main>
  );
}
