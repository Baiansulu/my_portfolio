export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 fade-up mx-auto max-w-5xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      {/* LEFT: Contact form */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-slate-600 mb-6 text-sm">
          I usually reply within 24–48 hours. Your info stays private.
        </p>

        <form
          action="https://formsubmit.co/baansuluu22@gmail.com"
          method="POST"
          className="grid gap-4"
        >
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://myportfolio-gilt-iota.vercel.app/#contact"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New message from your portfolio" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring"
              placeholder="Tell me a bit about your project…"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg border bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2"
          >
            Send message
          </button>
        </form>

        <div className="mt-6 text-xs text-slate-600">
          Prefer email?{" "}
          <a href="mailto:baansuluu22@gmail.com" className="underline">
            baansuluu22@gmail.com
          </a>
        </div>
      </div>

      {/* RIGHT: Let's work together box */}
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
           Let’s work together
        </h3>
        <div className="h-0.5 w-12 bg-sky-500 mb-4 rounded-full"></div>
        <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
          I'm always open to collaborating on meaningful projects, internships, and
          junior developer opportunities. If my background aligns with what you're
          looking for, I'd love to hear from you.
        </p>
      </div>
    </section>
  );
}
