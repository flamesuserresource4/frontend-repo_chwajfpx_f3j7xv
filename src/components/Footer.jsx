import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} QA Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#about" className="hover:text-slate-900">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
