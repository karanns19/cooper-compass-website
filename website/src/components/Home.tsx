"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Problem", href: "#problem" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <header className="w-full bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-4 h-20">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="h-12 w-12 object-contain" />
            <span className="ml-3 text-[#432143] text-xl font-bold">Cooper Compass</span>
          </Link>
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-black hover:text-blue-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-lg font-medium text-black hover:text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative h-[60vh] sm:h-[70vh] lg:h-screen flex items-center" id="hero">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Airport view"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 w-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl leading-tight text-left">
            Your Travel Experience,<br />Re-imagined
          </h1>
          <p className="text-white text-lg sm:text-xl leading-relaxed text-left max-w-xl mt-4">
            We are creating a breakthrough in travel solutions. It&apos;s simple, it&apos;s smart, and it&apos;s built to enhance your every journey.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="text-[#1a237e] text-lg font-semibold mb-2 block">About</span>
              <h2 className="text-black font-extrabold text-4xl sm:text-5xl leading-tight mb-4">
                Solving Problems,<br />That Matter
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed">
                We are a passionate team solving real traveler challenges with innovation. Combining expertise and creativity, we are building smarter, seamless solutions. Guided by mentors, we are redefining travel—stay tuned!
              </p>
            </div>
            <div className="relative w-full max-w-md h-72">
              <div className="absolute top-6 left-6 w-full h-full bg-gray-200 rounded-2xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/about.png"
                  alt="Team collaboration"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative w-full max-w-md h-72">
              <div className="absolute top-6 left-6 w-full h-full bg-gray-200 rounded-2xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/vision.png"
                  alt="Technology interface"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-black font-extrabold text-3xl sm:text-4xl leading-tight mb-4">Our Vision</h2>
              <p className="text-gray-500 text-xl leading-relaxed">
                To transform the way people navigate air travel through intelligent, intuitive, and future-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" id="problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-black font-extrabold text-3xl sm:text-4xl leading-tight mb-4">The Problem</h2>
              <p className="text-gray-900 font-bold text-xl mb-2">Passengers suffer. Staff scramble. Everyone loses.</p>
              <p className="text-gray-500 text-xl leading-relaxed mb-2">&quot;21% of airline complaints in India are about baggage. Outdated systems, no real-time visibility, and disconnected operations cost the industry $2.5B annually.&quot;</p>
            </div>
            <div className="relative w-full max-w-md h-72">
              <div className="absolute top-6 left-6 w-full h-full bg-gray-200 rounded-2xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/problem.png"
                  alt="Problem section image"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" id="approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative w-full max-w-md h-72">
              <div className="absolute top-6 left-6 w-full h-full bg-gray-200 rounded-2xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/approach.png"
                  alt="Our Approach image"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="order-2 lg:order-none">
              <h2 className="text-black font-extrabold text-3xl sm:text-4xl leading-tight mb-4">Our Approach</h2>
              <h3 className="text-gray-900 font-bold text-xl mb-2">One unified digital ecosystem.</h3>
              <p className="text-gray-500 text-xl leading-relaxed mb-2">We&apos;re building an intelligent, connected platform to bring real-time clarity to baggage movement – for airports, airlines, and passengers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" id="development">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-black font-extrabold text-3xl sm:text-4xl leading-tight mb-4">Development Status</h2>
              <h3 className="text-gray-900 font-bold text-xl mb-2">One Currently under active development</h3>
              <p className="text-gray-500 text-xl leading-relaxed">We&apos;re collaborating with industry experts to shape a solution that works in the real world.</p>
            </div>
            <div className="relative w-full max-w-md h-72">
              <div className="absolute top-6 left-6 w-full h-full bg-gray-200 rounded-2xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/development.png"
                  alt="Development Status image"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#432143] py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
            <div className="mb-8 md:mb-0">
              <nav className="flex flex-col space-y-10">
                <a href="#about" className="text-white text-xl font-semibold hover:underline text-left">About</a>
                <a href="#vision" className="text-white text-xl font-semibold hover:underline text-left">Vision</a>
                <a href="#problem" className="text-white text-xl font-semibold hover:underline text-left">Problem</a>
              </nav>
            </div>
            <div className="w-full md:w-auto flex flex-col items-start text-left">
              <h3 className="text-white text-xl font-bold mb-6 text-left">Contact</h3>
              <div className="flex items-start mb-2">
                <span className="text-white text-xl font-medium text-left">Mail Us : <br />coopercompassofficial@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 