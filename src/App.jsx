import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Me</h2>
        <p className="mt-3 text-slate-600">
          I am a quality-focused professional who partners with product and engineering to ship reliable features.
          My toolkit spans manual exploration, API testing, and UI automation. I care about clear communication,
          actionable bug reports, and building team confidence in every release.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}
