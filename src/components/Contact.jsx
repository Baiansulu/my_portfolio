import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("name")?.trim() || !data.get("email")?.trim() || !data.get("message")?.trim()) {
      setStatus({ type: "error", msg: "Please fill out all required fields." });
      return;
    }

    const res = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    if (res.ok) {
      form.reset();
      setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
    } else {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-3xl font-semibold mb-2">Contact</h2>
      <p className="text-slate-600 mb-8">I usually reply within 24–48 hours. Your info stays private.</p>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            id="name" name="name" type="text" required autoComplete="name"
            className="mt-2 w-full rounded-xl border p-3 outline-none focus:ring"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email" name="email" type="email" required autoComplete="email"
            className="mt-2 w-full rounded-xl border p-3 outline-none focus:ring"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message" name="message" required rows={6}
            className="mt-2 w-full rounded-xl border p-3 outline-none focus:ring"
            placeholder="Tell me a bit about your project…"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl border bg-black px-5 py-3 text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2"
        >
          Send message
        </button>

        <p aria-live="polite" className={`text-sm ${status.type === "error" ? "text-rose-600" : "text-emerald-600"}`}>
          {status.msg}
        </p>
      </form>

      <div className="mt-8 text-sm text-slate-600">
        Prefer email? <a href="mailto:you@domain.com" className="underline">you@domain.com</a>
      </div>
    </section>
  );
}

