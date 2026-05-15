import Image from 'next/image';
import { Navbar }         from '@/components/Navbar';
import { Hero }           from '@/components/Hero';
import { SectionTitle }   from '@/components/SectionTitle';
import { SkillPill }      from '@/components/SkillPill';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard }    from '@/components/ProjectCard';
import { ContactSection } from '@/components/ContactSection';
import { RevealWrapper }  from '@/components/RevealWrapper';
import { experiences, projects, skills } from '@/data/portfolio';

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* RevealWrapper: attaches IntersectionObserver on the client */}
      <RevealWrapper>
        <main>

          {/* ── HERO ──────────────────────────────────────────────── */}
          <Hero />

          {/* ── ABOUT ─────────────────────────────────────────────── */}
          <section
            id="about"
            className="border-t border-white/[0.06] py-20"
          >
            <div className="mx-auto w-[min(1100px,92%)]">
              <SectionTitle title="About Me" />

              {/* Two-column: text left, photo right */}
              <div className="grid gap-12 md:grid-cols-[1fr_340px] items-start">

                {/* Left — text */}
                <div className="space-y-5 text-[1.05rem] text-zinc-400 leading-relaxed">
                  <p className="reveal">
                    I am an FPGA and RTL engineer with hands-on experience across{' '}
                    <span className="text-zinc-200">ASIC/SRAM design</span>,{' '}
                    <span className="text-zinc-200">hardware acceleration</span>, and{' '}
                    <span className="text-zinc-200">low-latency systems</span>. My work spans
                    the full hardware stack — from writing Verilog and closing timing at 7nm,
                    to co-designing hardware/software pipelines for real-time applications.
                  </p>
                  <p className="reveal">
                    I hold an MS in Electrical Engineering from{' '}
                    <span className="text-zinc-200">NYU Tandon</span> with coursework in
                    Advanced VLSI, Computer System Architecture, Analog Systems, and DSP.
                    I completed my undergraduate in Electronics &amp; Communications Engineering
                    at GVPCOE before joining Cognizant as a Programmer Analyst.
                  </p>
                  <p className="reveal">
                    Beyond hardware, I care about the intersection of silicon and software —
                    building tools and systems where every nanosecond and every byte matters.
                    I&apos;m currently pursuing FPGA Engineer, ASIC Design, and RTL Design roles.
                  </p>
                </div>

                {/* Right — photo */}
                <div className="reveal justify-self-center md:justify-self-end">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 shadow-xl">
                    <div className="rounded-xl overflow-hidden w-[280px] h-[320px] md:w-[300px] md:h-[360px] bg-surface flex items-center justify-center text-zinc-600 text-sm">
                      {/*
                        Replace this div with:
                        <Image src="/photo.jpg" alt="Chandra Kiran Narala" width={300} height={360} className="object-cover" />
                      */}
                      <div className="text-center space-y-2 px-6">
                        <div className="text-3xl">📸</div>
                        <p className="text-xs text-zinc-500">Add your photo as<br /><code className="text-zinc-400">public/photo.jpg</code></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Arsenal — below the grid, matching reference */}
              <div id="arsenal" className="mt-16 pt-16 border-t border-white/[0.06]">
                <h3 className="reveal text-center text-xl font-semibold mb-8 text-zinc-200 tracking-tight">
                  Technical Arsenal
                </h3>
                <div className="reveal flex flex-wrap justify-center gap-2.5">
                  {skills.map((skill) => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE ────────────────────────────────────────── */}
          <section
            id="experience"
            className="border-t border-white/[0.06] py-20"
          >
            <div className="mx-auto w-[min(900px,92%)]">
              <SectionTitle title="Work Experience" />

              <div className="relative">
                {experiences.map((exp) => (
                  <ExperienceCard key={exp.company} exp={exp} />
                ))}
              </div>
            </div>
          </section>

          {/* ── PROJECTS ──────────────────────────────────────────── */}
          <section
            id="projects"
            className="border-t border-white/[0.06] py-20"
          >
            <div className="mx-auto w-[min(1100px,92%)]">
              <SectionTitle title="Featured Projects" />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* ── CONTACT ───────────────────────────────────────────── */}
          <ContactSection />

        </main>
      </RevealWrapper>
    </>
  );
}
