import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { SectionTitle } from '@/components/SectionTitle';
import { SkillPill } from '@/components/SkillPill';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { ContactSection } from '@/components/ContactSection';
import { experiences, projects, researchInterests, skills } from '@/data/portfolio';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="mx-auto w-[min(1100px,92%)] py-20" id="about">
          <SectionTitle title="About Me" id="about-title" />
          <div className="grid gap-10 md:grid-cols-2 items-center section-wrap p-7 md:p-10">
            <div className="space-y-6 text-xl text-muted leading-relaxed">
              <p>I am an FPGA-focused engineer with strong foundations in RTL development, ASIC/SRAM design, and hardware-aware systems software.</p>
              <p>I enjoy architecting low-latency solutions where microsecond-level behavior matters—from memory-centric design to throughput-driven distributed systems.</p>
              <p>My engineering style combines hands-on implementation, timing-aware optimization, and research-driven problem solving.</p>
            </div>
            <div className="justify-self-center">
              <div className="rounded-3xl border border-line bg-soft p-2 shadow-card">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop" alt="Portrait placeholder" width={420} height={500} className="rounded-2xl object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[min(1100px,92%)] py-16" id="arsenal">
          <SectionTitle title="Technical Arsenal" id="skills" />
          <div className="section-wrap p-6 flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
          </div>
        </section>

        <section className="mx-auto w-[min(1100px,92%)] py-20" id="experience">
          <SectionTitle title="Work Experience" id="experience-title" />
          <div className="relative space-y-8 before:absolute before:left-1 before:top-0 before:h-full before:w-px before:bg-line">
            {experiences.map((exp) => <ExperienceCard key={exp.company} exp={exp} />)}
          </div>
        </section>

        <section className="mx-auto w-[min(1200px,94%)] py-20" id="projects">
          <SectionTitle title="Featured Projects" id="projects-title" />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>

        <section className="mx-auto w-[min(1000px,92%)] py-20" id="research">
          <SectionTitle title="Research Interests" id="research-title" />
          <div className="section-wrap p-7 grid gap-3 sm:grid-cols-2">
            {researchInterests.map((topic) => (
              <div key={topic} className="rounded-xl border border-line bg-soft px-4 py-3 text-zinc-200">{topic}</div>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
