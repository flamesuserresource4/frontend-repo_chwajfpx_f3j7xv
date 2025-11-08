import React from 'react';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium mb-4">
              <ShieldCheck className="h-4 w-4" />
              Proven Quality Assurance
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Elevating Product Reliability with Thoughtful QA
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              I design and execute testing strategies that keep releases smooth, users happy, and teams confident. Functional, API, and UI automation with a quality-first mindset.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
                <Rocket className="h-4 w-4" />
                View Projects
              </a>
              <a href="#skills" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">
                Explore Skills
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-xl ring-1 ring-slate-200 p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="h-20 rounded-md bg-green-100 border border-green-200 flex items-center justify-center text-green-800 text-sm font-medium">
                    Unit Tests
                  </div>
                  <div className="h-20 rounded-md bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-800 text-sm font-medium">
                    API Tests
                  </div>
                  <div className="h-20 rounded-md bg-yellow-100 border border-yellow-200 flex items-center justify-center text-yellow-800 text-sm font-medium">
                    CI Quality Gates
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-20 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-800 text-sm font-medium">
                    UI Automation
                  </div>
                  <div className="h-20 rounded-md bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-800 text-sm font-medium">
                    Accessibility
                  </div>
                  <div className="h-20 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 text-sm font-medium">
                    Exploratory
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
