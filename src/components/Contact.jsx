export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-md px-4 py-12">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p className="text-slate-600 mb-6 text-sm">
        I usually reply within 24–48 hours. Your info stays private.
      </p>

<form
  action="https://formsubmit.co/baansuluu22@gmail.com"
  method="POST"
  className="grid gap-4"
>
        <input
          type="text"
          name="_honey"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://myportfolio-gilt-iota.vercel.app/#contact"
        />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_subject"
          value="New message from your portfolio"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
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
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
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
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
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
    </section>
  );
}
