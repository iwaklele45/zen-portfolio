"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills" subtitle="Technologies I work with" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="card-hover skill-card group p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/30 text-center"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-sm text-white mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-gray-500">{skill.desc}</p>
            </div>
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
