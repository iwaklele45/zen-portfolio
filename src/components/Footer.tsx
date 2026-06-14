"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="py-8 px-6 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Zen. Built with Next.js & deployed
          with Docker.
        </p>
        <p className="text-sm text-gray-600">Made with ❤️ in Surabaya</p>
      </div>
    </footer>
  );
}
