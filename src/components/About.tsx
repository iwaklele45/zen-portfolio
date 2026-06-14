"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -60,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(textRef.current?.children ? Array.from(textRef.current.children) : [], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" subtitle="Get to know me" />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          <div ref={imageRef} className="relative">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-gray-800 flex items-center justify-center overflow-hidden">
              <div className="text-8xl animate-float">📱</div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>

          <div ref={textRef} className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a passionate mobile developer based in Indonesia,
              currently studying at{" "}
              <span className="text-indigo-400 font-medium">PENS</span>{" "}
              (Politeknik Elektronika Negeri Surabaya).
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in building cross-platform mobile applications with
              Flutter. I love creating smooth, native-feeling apps with
              beautiful UI and solid performance. When I&apos;m not coding, you
              can find me exploring new Flutter packages, tinkering with Dart,
              or learning about mobile architecture patterns.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently working on{" "}
              <span className="text-indigo-400 font-medium">ExTract</span> — an
              invoice OCR project that simplifies document processing with AI.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="stat-card p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/20 transition-colors duration-300">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Location
                </h4>
                <p className="text-gray-300">Surabaya, Indonesia</p>
              </div>
              <div className="stat-card p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/20 transition-colors duration-300">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Focus
                </h4>
                <p className="text-gray-300">Flutter & Dart</p>
              </div>
              <div className="stat-card p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/20 transition-colors duration-300">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Education
                </h4>
                <p className="text-gray-300">PENS</p>
              </div>
              <div className="stat-card p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/20 transition-colors duration-300">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Interest
                </h4>
                <p className="text-gray-300">Mobile, AI, DevOps</p>
              </div>
            </div>
          </div>
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
