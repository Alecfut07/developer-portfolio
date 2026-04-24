"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ loading: false, message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ loading: true, message: "" });

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setState({ loading: false, message: data.message || "Done." });
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-xl border p-4">
      <input
        name="name"
        placeholder="Your name"
        required
        className="rounded-md border px-3 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="rounded-md border px-3 py-2"
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={5}
        required
        className="rounded-md border px-3 py-2"
      />
      <button
        disabled={state.loading}
        className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-60"
      >
        {state.loading ? "Sending..." : "Send Message"}
      </button>
      {state.message ? (
        <p className="text-sm text-muted-foreground">{state.message}</p>
      ) : null}
    </form>
  );
}
