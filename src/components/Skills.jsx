import React from 'react';
import { FlaskConical, GitBranch, Workflow, Calculator, Server, Accessibility } from 'lucide-react';

const skills = [
  {
    icon: <Workflow className="h-6 w-6 text-indigo-600" />,
    title: 'Test Strategy & Planning',
    items: ['Risk-based testing', 'Test design techniques', 'Release readiness'],
  },
  {
    icon: <Server className="h-6 w-6 text-indigo-600" />,
    title: 'API & Backend Testing',
    items: ['Postman/Insomnia', 'Contract testing', 'Load & reliability basics'],
  },
  {
    icon: <FlaskConical className="h-6 w-6 text-indigo-600" />,
    title: 'Automation',
    items: ['Playwright / Cypress', 'Selenium WebDriver', 'Python / JS testing'],
  },
  {
    icon: <GitBranch className="h-6 w-6 text-indigo-600" />,
    title: 'CI/CD & Versioning',
    items: ['Git & branching', 'CI pipelines', 'Quality gates'],
  },
  {
    icon: <Accessibility className="h-6 w-6 text-indigo-600" />,
    title: 'Quality Practices',
    items: ['Accessibility checks', 'Exploratory testing', 'Bug reporting'],
  },
  {
    icon: <Calculator className="h-6 w-6 text-indigo-600" />,
    title: 'Metrics & Visibility',
    items: ['Test coverage', 'Defect trends', 'Dashboards'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Core QA Skills</h2>
        <p className="mt-2 text-slate-600">Solid foundations across manual and automated testing to ship quality at speed.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc list-inside">
                {s.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
