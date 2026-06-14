"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          rotationY: 8,
          duration: 0.8,
          delay: i * 0.12,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Projects" subtitle="Things I've built" />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              ref={(el) => { cardsRef.current[i] = el; }}
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

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      const line = ref.current?.querySelector(".section-line");
      if (line) {
        gsap.from(line, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          scaleX: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="text-center mb-4">
      <p className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="section-line mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full origin-center" />
    </div>
  );
}
