"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setState("ok");
    } catch (err: any) {
      setState("err");
      setMessage(err.message || "Something went wrong");
    }
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="mark">
          i<em>love</em>gtm
        </div>
        <div className="tag">Private beta · 2026</div>
      </header>

      <main className="main">
        <section className="hero">
          <span className="eyebrow reveal reveal-1">
            <span className="dot" />
            Waitlist open
          </span>

          <h1 className="reveal reveal-2">
            Go-to-market tools & ideas that <em>actually</em> drive growth.
          </h1>

          <p className="sub reveal reveal-3">
            iloveGTM is where builders, founders, and GTM leaders find, test, and
            share the plays that really move the needle.
          </p>

          {state === "ok" ? (
            <div className="success">
              <h2>You&rsquo;re on the list.</h2>
              <p>
                Join our community of Growth and GTM folks
                <br />
                <span className="limit">Open for the first 500 ONLY</span>
              </p>
              <a
                className="cta"
                href="https://chat.whatsapp.com/FNjpthHArfDAnp04dR4gPD?mode=gi_t"
                target="_blank"
                rel="noreferrer"
              >
                Join the WhatsApp group →
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="reveal reveal-4">
              <div className="row">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <input
                type="text"
                placeholder="Company (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="organization"
              />
              <button type="submit" disabled={state === "loading"}>
                {state === "loading" ? "Joining…" : "Join the waitlist"}
              </button>
              <div className={`status ${state === "err" ? "err" : ""}`}>
                {message}
              </div>
            </form>
          )}
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} iloveGTM</span>
        <a href="https://x.com/idleshubh" target="_blank" rel="noreferrer">
          built by @idleShubh ↗
        </a>
      </footer>
    </div>
  );
}
