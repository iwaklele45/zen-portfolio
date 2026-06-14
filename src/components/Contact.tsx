"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: "GitHub", href: "https://github.com/iwaklele45", icon: "🐙" },
  { name: "Email", href: "mailto:rafirutra027@gmail.com", icon: "📧" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children ? Array.from(contentRef.current.children) : [], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 bg-gray-100/30 dark:bg-gray-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader title="Get In Touch" subtitle="Let&apos;s connect" />

        <div ref={contentRef}>
          <p className="text-gray-600 dark:text-gray-400 mt-6 mb-10 leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out!
          </p>

          <div className="flex items-center justify-center gap-4 mb-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/30 rounded-xl shadow-sm dark:shadow-none"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          <a
            href="mailto:rafirutra027@gmail.com"
            className="magnetic-btn inline-block px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Say Hello 👋
          </a>
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
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <div className="section-line mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full origin-center" />
    </div>
  );
}
