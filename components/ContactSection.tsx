import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function ContactSection() {
  return (
    <section className="py-24" id="contact">
      <div className="mx-auto w-[min(900px,92%)] text-center">
        <SectionTitle title="Get In Touch" id="contact-title" subtitle="I am always open to discussing new projects, research collaborations, and opportunities across FPGA, low-latency systems, and hardware-software co-design." />
        <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-8 py-4 text-2xl font-medium text-black">
          <Mail size={22} /> Say Hello
        </a>
        <div className="mt-10 flex justify-center gap-5 text-zinc-200">
          <a className="rounded-full border border-line p-4" href="#"><Github /></a>
          <a className="rounded-full border border-line p-4" href="#"><Linkedin /></a>
          <a className="rounded-full border border-line p-4" href="#"><FileText /></a>
        </div>
      </div>
    </section>
  );
}
