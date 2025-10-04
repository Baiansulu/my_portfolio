import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ResumeViewer from "./components/ResumeViewer";
import Contact from "./components/Contact";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setResumeOpen(false); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <span className="font-bold">Baiansuluu</span>
          <nav className="flex gap-4 text-sm">
  <a href="#experience" className="hover:underline transition-opacity hover:opacity-80">Experience</a>
  <a href="#education"  className="hover:underline transition-opacity hover:opacity-80">Education</a>
  <a href="#skills"     className="hover:underline transition-opacity hover:opacity-80">Skills</a>
  <a href="#contact"    className="hover:underline transition-opacity hover:opacity-80">Contact</a>
</nav>

        </div>
      </header>

      <Hero onShowResume={() => setResumeOpen(true)} />

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 mx-auto max-w-5xl px-4 pb-16">
  <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
  <ol className="relative border-s border-slate-200">
    <li className="ms-6 pb-8 last:pb-0">
      <span className="absolute -start-2.5 mt-1 h-5 w-5 rounded-full border-2 border-sky-600 bg-white"></span>
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold">Frankly Speaking Agency — Intern</h3>
          <span className="text-xs text-slate-500">Atlanta, GA · Dec 2022 – Feb 2023</span>
        </div>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>Supported development and optimization of web pages for marketing campaigns reaching 5,000+ users.</li>
          <li>Improved UX with HTML, CSS, and JavaScript, reducing page load times by 15%.</li>
          <li>Collaborated with cross-functional teams to deliver projects aligned with business goals.</li>
        </ul>
      </div>
    </li>
  </ol>
</section>


      {/* Education */}
<section id="education" className="scroll-mt-24 mx-auto max-w-5xl px-4 pb-16">
  <h2 className="text-2xl font-semibold mb-8">Education</h2>
  <ol className="relative border-s border-slate-200">
    <li className="ms-6 pb-8 last:pb-0">
      <span className="absolute -start-2.5 mt-1 h-5 w-5 rounded-full border-2 border-sky-600 bg-white"></span>
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold">North American University — Texas</h3>
          <span className="text-xs text-slate-500">Expected 2026</span>
        </div>
        <p className="mt-1 text-sm text-slate-600">
          BA in Computer Science (Minor in Business Administration)
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-700">
          <span className="rounded-full border px-3 py-1">Web Development</span>
          <span className="rounded-full border px-3 py-1">Software Engineering</span>
          <span className="rounded-full border px-3 py-1">Database Systems</span>
        </div>
      </div>
    </li>
  </ol>
</section>


      {/* Skills */}
<section id="skills" className="scroll-mt-24 mx-auto max-w-5xl px-4 pb-16 fade-up">
  <h2 className="text-2xl font-semibold mb-8">Skills</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">💻</span>
        <h3 className="font-medium text-slate-800">Languages</h3>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        {["HTML","CSS","JavaScript","Python","Ruby","SQL"].map(s => (
          <span key={s} className="rounded-full border px-3 py-1 text-slate-700 hover:bg-slate-50 transition">
            {s}
          </span>
        ))}
      </div>
    </article>

    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🛠️</span>
        <h3 className="font-medium text-slate-800">Tools</h3>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        {["Git / GitHub","Visual Studio Code","Microsoft Office"].map(s => (
          <span key={s} className="rounded-full border px-3 py-1 text-slate-700 hover:bg-slate-50 transition">
            {s}
          </span>
        ))}
      </div>
    </article>

    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🏅</span>
        <h3 className="font-medium text-slate-800">Core Competencies</h3>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        {["Software Engineering","Web Development","Database Systems"].map(s => (
          <span key={s} className="rounded-full border px-3 py-1 text-slate-700 hover:bg-slate-50 transition">
            {s}
          </span>
        ))}
      </div>
    </article>
  </div>
</section>


<div className="fade-up">
  <Contact />
</div>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Baiansuluu
        </div>
      </footer>

      <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </main>
  );
}
