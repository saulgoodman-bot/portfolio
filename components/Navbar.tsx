'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

const items = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/90 backdrop-blur">
      <nav className="mx-auto flex w-[min(1200px,94%)] items-center justify-between py-5">
        <a href="#hero" className="text-3xl font-extrabold tracking-tight">Chandra<span className="rounded bg-zinc-100 px-2 text-base text-black align-middle ml-1">Kiran</span></a>
        <ul className="hidden md:flex items-center gap-9 text-lg text-zinc-200">
          {items.map((item) => <li key={item.href}><a className="hover:text-white" href={item.href}>{item.label}</a></li>)}
        </ul>
        <div className="flex gap-4 text-zinc-300">
          <a href="#" aria-label="GitHub"><Github size={20} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="mailto:your.email@example.com" aria-label="Email"><Mail size={20} /></a>
        </div>
      </nav>
    </header>
  );
}
