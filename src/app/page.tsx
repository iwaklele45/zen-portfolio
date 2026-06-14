export default function Home() {
  return (
    <main className="grid-bg min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

/* ─── Navigation ─── */
function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="nav-blur fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">zen.</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center max-w-3xl relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            Flutter Developer
          </span>
        </div>

        <h1 className="animate-fade-up animate-delay-100 text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I&apos;m <span className="gradient-text">Muhammad Rafi Putra Hidayat</span>
        </h1>
        <p className="animate-fade-up animate-delay-150 text-lg text-gray-500 mb-4">
          but you can call me <span className="text-indigo-400 font-medium">Zen</span> ✨
        </p>

        <p className="animate-fade-up animate-delay-200 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft beautiful mobile experiences with Flutter. Passionate about clean architecture, 
          smooth animations, and building apps that users love.
        </p>

        <div className="animate-fade-up animate-delay-300 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up animate-delay-500 mt-20 animate-float">
          <a href="#about" className="inline-block text-gray-600 hover:text-gray-400 transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" subtitle="Get to know me" />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-gray-800 flex items-center justify-center">
              <div className="text-8xl animate-float">📱</div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a passionate mobile developer based in Indonesia, currently studying at{" "}
              <span className="text-indigo-400 font-medium">PENS</span> (Politeknik Elektronika Negeri Surabaya).
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in building cross-platform mobile applications with Flutter. 
              I love creating smooth, native-feeling apps with beautiful UI and solid performance. 
              When I&apos;m not coding, you can find me exploring new Flutter packages, tinkering with Dart, 
              or learning about mobile architecture patterns.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently working on{" "}
              <span className="text-indigo-400 font-medium">ExTract</span> — an invoice OCR project 
              that simplifies document processing with AI.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-gray-300">Surabaya, Indonesia</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Focus</h4>
                <p className="text-gray-300">Flutter & Dart</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Education</h4>
                <p className="text-gray-300">PENS</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Interest</h4>
                <p className="text-gray-300">Mobile, AI, DevOps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ─── */
function Skills() {
  const skills = [
    { name: "Flutter", icon: "💙", desc: "Cross-platform mobile framework" },
    { name: "Dart", icon: "🎯", desc: "Language for Flutter" },
    { name: "Firebase", icon: "🔥", desc: "Backend & authentication" },
    { name: "Android", icon: "🤖", desc: "Native Android development" },
    { name: "REST API", icon: "🌐", desc: "Backend integration" },
    { name: "Git", icon: "🔀", desc: "Version control" },
    { name: "Figma", icon: "🎨", desc: "UI/UX design handoff" },
    { name: "Docker", icon: "🐳", desc: "Containerization" },
    { name: "CI/CD", icon: "⚙️", desc: "Automated builds & deploy" },
    { name: "AI / ML", icon: "🧠", desc: "Smart features & automation" },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills" subtitle="Technologies I work with" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-hover group p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/30 text-center"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-sm text-white mb-1">{skill.name}</h3>
              <p className="text-xs text-gray-500">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */
function Projects() {
  const projects = [
    {
      title: "ExTract",
      desc: "AI-powered invoice OCR mobile app. Scan invoices and extract data automatically with high accuracy, built with Flutter.",
      tags: ["Flutter", "Dart", "Firebase", "AI/ML"],
      color: "from-indigo-500/20 to-blue-500/20",
      border: "border-indigo-500/20",
      link: "https://extract.web.id",
    },
    {
      title: "Zen Portfolio",
      desc: "Personal portfolio website — built with Next.js and deployed with Docker on a self-managed server.",
      tags: ["Next.js", "Tailwind", "Docker"],
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/20",
      link: "#",
    },
    {
      title: "More Coming Soon",
      desc: "Always building something new. Stay tuned for more Flutter apps and experiments.",
      tags: ["WIP"],
      color: "from-gray-500/10 to-gray-600/10",
      border: "border-gray-700",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Projects" subtitle="Things I&apos;ve built" />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              className={`card-hover group block p-8 rounded-2xl bg-gradient-to-br ${project.color} border ${project.border} hover:border-indigo-500/40`}
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-800/50 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const links = [
    { name: "GitHub", href: "https://github.com/iwaklele45", icon: "🐙" },
    { name: "Email", href: "mailto:rafirutra027@gmail.com", icon: "📧" },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gray-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader title="Get In Touch" subtitle="Let&apos;s connect" />

        <p className="text-gray-400 mt-6 mb-10 leading-relaxed">
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out!
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-800 hover:border-indigo-500/30 rounded-xl"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-sm font-medium text-gray-300">{link.name}</span>
            </a>
          ))}
        </div>

        <a
          href="mailto:rafirutra027@gmail.com"
          className="inline-block px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Zen. Built with Next.js &amp; deployed with Docker.
        </p>
        <p className="text-sm text-gray-600">
          Made with ❤️ in Surabaya
        </p>
      </div>
    </footer>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-4">
      <p className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
    </div>
  );
}
