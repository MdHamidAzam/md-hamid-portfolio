import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    emailjs
      .sendForm(
        "service_hn3v5el",
        "template_3gqke2r",
        form.current,
        "Z1e5mzGlc3FHKYFd6",
      )
      .then(() => {
        alert("Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      })
      .finally(() => {
        setSending(false);
      });
  };
  return (
    <section id="contact" className="bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold">Let's Work Together 🚀</h3>

            <p className="text-gray-400 mt-5 leading-8">
              I'm open to internships, freelance projects and exciting
              collaborations. Feel free to contact me.
            </p>

            <div className="flex gap-6 mt-8 text-3xl">
              <a
                href="https://github.com/MdHamidAzam"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/md-hamid-azam-54aaab309"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <textarea
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition"
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-cyan-500 text-black py-4 rounded-xl font-semibold hover:bg-cyan-400 transition disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
