"use client";

import { FormEvent, useState } from "react";
import { waLink } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const text = `Hello Riosap, my name is ${name || "a customer"}. Phone: ${phone || "not provided"}. ${message || "I would like to enquire about wholesale orders."}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-brand-dark">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2.5 outline-none focus:border-brand"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-brand-dark">
          Phone
        </label>
        <input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2.5 outline-none focus:border-brand"
          placeholder="024 XXX XXXX"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-brand-dark">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2.5 outline-none focus:border-brand"
          placeholder="Tell us what you need (product, size, quantity)"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand py-3 text-sm font-bold text-white hover:bg-brand-dark"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
