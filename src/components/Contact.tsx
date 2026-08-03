export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <p className="font-mono text-accent text-sm mb-2">04 — Contact</p>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's talk</h2>
      <p className="text-muted mb-6 max-w-md">
        Open to internships, junior roles, and collaboration.
      </p>
      <div className="flex flex-col gap-2 font-mono text-sm">
        <a href="mailto:chimahobiekunnie@gmail.com" className="text-accent hover:underline hover:opacity-80 transition-opacity duration-200 w-fit">
          chimahobiekunnie@gmail.com
        </a>
        <a href="https://github.com/yourusername" className="text-accent hover:underline hover:opacity-80 transition-opacity duration-200 w-fit">
          github.com/yourusername
        </a>
        <a href="https://linkedin.com/in/yourusername" className="text-accent hover:underline hover:opacity-80 transition-opacity duration-200 w-fit">
          linkedin.com/in/yourusername
        </a>
      </div>
    </section>
  );
}