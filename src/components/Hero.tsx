"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.8,
        delay: 0.5,
      })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          subRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.3"
        )
        .from(
          scrollRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.6,
          },
          "-=0.2"
        );

      gsap.to(orb1Ref.current, {
        y: -60,
        x: 30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        y: 40,
        x: -20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const section = sectionRef.current;
      const handleMouseMove = (e: MouseEvent) => {
        if (!section) return;
        const { clientX, clientY } = e;
        const xPercent = (clientX / window.innerWidth - 0.5) * 2;
        const yPercent = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(orb1Ref.current, {
          x: 30 + xPercent * 40,
          y: -60 + yPercent * 40,
          duration: 1.5,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(orb2Ref.current, {
          x: -20 + xPercent * -30,
          y: 40 + yPercent * -30,
          duration: 1.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      section?.addEventListener("mousemove", handleMouseMove);
      return () => section?.removeEventListener("mousemove", handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="text-center max-w-3xl relative z-10">
        <div ref={badgeRef}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-full">
            Flutter Developer
          </span>
        </div>

        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
        >
          Hi, I&apos;m <span className="gradient-text">Rafi Putra</span>
        </h1>
        <p ref={subRef} className="text-lg text-gray-500 dark:text-gray-500 mb-4">
          but you can call me{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">Zen</span> ✨
        </p>

        <p
          ref={descRef}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft beautiful mobile experiences with Flutter. Passionate about
          clean architecture, smooth animations, and building apps that users
          love.
        </p>

        <div ref={ctaRef} className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 magnetic-btn"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium rounded-lg transition-all duration-300 magnetic-btn"
          >
            Get In Touch
          </a>
        </div>

        <div ref={scrollRef} className="mt-20 animate-float">
          <a
            href="#about"
            className="inline-block text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
