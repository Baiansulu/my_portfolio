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
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <Hero onShowResume={() => setResumeOpen(true)} />

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <h3 className="font-semibold">Frankly Speaking Agency — Intern</h3>
            <p className="text-sm text-slate-500">Atlanta, GA · Dec 2022 – Feb 2023</p>
            <ul className="list-disc pl-5 mt-2 text-slate-600 text-sm space-y-1">
              <li>Supported development and optimization of web pages for marketing campaigns reaching 5,000+ users.</li>
              <li>Improved UX with HTML, CSS, and JavaScript, reducing page load times by 15%.</li>
              <li>Collaborated with cross-functional teams to deliver projects aligned with business goals.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="border-l-4 border-sky-600 pl-4">
          <h3 className="font-semibold">North American University — Texas</h3>
          <p className="text-sm text-slate-500">BA in Computer Science (Minor in Business Administration) · Expected 2026</p>
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-700">
            <span className="rounded-full border px-3 py-1">Web Development</span>
            <span className="rounded-full border px-3 py-1">Software Engineering</span>
            <span className="rounded-full border px-3 py-1">Database Systems</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-slate-700 mb-2">Languages</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>Python, Ruby</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-700 mb-2">Tools</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Git / GitHub</li>
              <li>Visual Studio Code</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-700 mb-2">Core Competencies</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Software Engineering</li>
              <li>Web Development</li>
              <li>Database Systems</li>
            </ul>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Baiansuluu
        </div>
      </footer>

      <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </main>
  );
}
