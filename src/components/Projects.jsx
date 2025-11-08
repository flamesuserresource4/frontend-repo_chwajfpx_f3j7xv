import React from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Checkout QA',
    summary:
      'Designed a comprehensive test suite for cart, payments, and order flows; automated key UI paths and API contracts.',
    highlights: ['Reduced checkout bugs by 45%', 'CI pipeline with smoke tests', 'API contract verification'],
    link: '#',
  },
  {
    title: 'Design System Accessibility',
    summary:
      'Audited UI components for WCAG issues and implemented automated a11y checks in CI for regressions.',
    highlights: ['Improved contrast and focus states', 'Automated axe checks', 'Higher usability scores'],
    link: '#',
  },
  {
    title: 'Microservice API Reliability',
    summary:
      'Created Postman collections and contract tests; monitored error rates and added resilience tests.',
    highlights: ['99.9% success rate', 'Load test baselines', 'Better incident response'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Projects</h2>
        <p className="mt-2 text-slate-600">Selected work where QA practices improved reliability and user confidence.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
                </div>
                <a href={p.link} className="text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1 text-sm" aria-label="Open project details">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <ul className="mt-4 space-y-2">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
