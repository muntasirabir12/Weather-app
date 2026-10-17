"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  const field = "w-full rounded border border-ink/20 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {sent && (
        <p className="rounded bg-green-100 text-green-800 px-4 py-3" role="status">
          Message sent. Thank you for contacting us.
        </p>
      )}
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
        <input id="name" name="name" required className={field} />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
        <input id="email" name="email" type="email" required className={field} />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">Message</label>
        <textarea id="message" name="message" rows={5} required className={field} />
      </div>
      <button type="submit" className="rounded bg-ink text-white px-6 py-3 hover:bg-ink/90">
        Send message
      </button>
    </form>
  );
}
