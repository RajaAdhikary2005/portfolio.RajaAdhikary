import React, { useRef, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // path: src/lib/supabaseClient.js

const Contact = () => {
  const cardRef = useRef(null);

  // state for the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'err' | null

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-card-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // submit handler: insert a row into Supabase
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("err");
      return;
    }

    setLoading(true);
    setStatus(null);
    try {
      const { error } = await supabase
        .from("contacts") // table name
        .insert([{ name, email, message }]);

      if (error) throw error;

      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#181c2b] via-[#23293a] to-[#3730a3] px-2 py-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-indigo-400/20 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-pink-400/10 blur-2xl rounded-full"></div>
      </div>

      <div
        ref={cardRef}
        className="w-full max-w-2xl bg-gradient-to-br from-[#23293a]/90 via-[#3730a3]/80 to-[#6366f1]/70 rounded-3xl shadow-2xl px-6 py-10 flex flex-col items-center backdrop-blur-xl border border-indigo-200/30 opacity-0 contact-card transition-all duration-1000 z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 text-center tracking-wide drop-shadow-lg animate-contact-fadein">
          Contact
        </h2>
        <p
          className="text-base text-indigo-100 mb-8 text-center opacity-90 animate-contact-fadein"
          style={{ animationDelay: "0.15s" }}
        >
          Excited to collaborate? Let’s get in touch!
        </p>

        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-6 animate-contact-fadein"
          style={{ animationDelay: "0.25s" }}
        >
          <div>
            <label className="block text-indigo-100 mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border-b border-indigo-200/40 bg-transparent px-1 py-2 text-white placeholder:text-indigo-300 focus:outline-none focus:border-indigo-400 transition"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-indigo-100 mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border-b border-indigo-200/40 bg-transparent px-1 py-2 text-white placeholder:text-indigo-300 focus:outline-none focus:border-indigo-400 transition"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-indigo-100 mb-1 font-medium">Message</label>
            <textarea
              className="w-full border-b border-indigo-200/40 bg-transparent px-1 py-2 text-white placeholder:text-indigo-300 focus:outline-none focus:border-indigo-400 transition resize-none"
              rows={3}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mx-auto mt-4 px-8 py-2 rounded-lg bg-[#23293a] text-white font-semibold shadow hover:bg-[#3730a3] transition disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {status === "ok" && (
            <p className="text-green-300 text-center">Message sent! Thanks.</p>
          )}
          {status === "err" && (
            <p className="text-red-300 text-center">
              Please fill all fields or try again.
            </p>
          )}
        </form>

        <div
          className="flex gap-4 mt-8 animate-contact-fadein"
          style={{ animationDelay: "0.4s" }}
        >
          {/* socials unchanged */}
          <a
            href="https://www.instagram.com/raja_adhikary2005?igsh=cWppMnhwNHg1ODAy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-2 shadow hover:scale-110 transition"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/raja-adhikary-99777b2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-br from-blue-600 to-blue-800 p-2 shadow hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0h-20.46C.996 0 0 .996 0 2.23v19.54C0 23.004.996 24 2.23 24h20.46C23.004 24 24 23.004 24 22.23V2.23C24 .996 23.004 0 22.23 0zM7.07 20.45H3.54V9h3.53v11.45zm-1.77-13.14a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06zm16.68 13.14h-3.53V15.9c0-1.43-.03-3.27-1.98-3.27-1.99 0-2.29 1.56-2.29 3.17v4.75h-3.53V9h3.39v1.55h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.22 2.34 4.22 5.39v5.34z"/>
            </svg>
          </a>
          <a
            href="https://github.com/RajaAdhikary2005"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#23293a] p-2 shadow hover:scale-110 transition"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .contact-card { transform: translateY(40px) scale(0.97); filter: blur(8px) brightness(0.8); }
        .contact-card-visible { opacity: 1 !important; transform: translateY(0) scale(1) !important; filter: blur(0) brightness(1) !important;
          transition: opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1), filter 0.9s cubic-bezier(.4,0,.2,1); }
        .animate-contact-fadein { opacity: 0; animation: contactFadeIn 1.1s cubic-bezier(.4,0,.2,1) forwards; }
        .contact-card-visible .animate-contact-fadein { opacity: 1; }
        @keyframes contactFadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </div>
  );
};

export default Contact;
