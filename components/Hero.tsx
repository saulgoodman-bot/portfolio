'use client';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="mx-auto w-[min(1100px,92%)] py-28 md:py-36">
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-zinc-300">Chandra Kiran Narala</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mt-4 max-w-4xl text-4xl md:text-6xl font-semibold leading-tight">FPGA Engineer | Hardware-Aware Software Engineer | Low-Latency Systems Engineer</motion.h1>
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-7 max-w-3xl text-xl text-muted">I build performance-critical systems across FPGA, RTL, C++, Python, and distributed systems. My work focuses on low-latency design, hardware/software co-design, memory-efficient architectures, and real-world engineering problems.</motion.p>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-10 flex flex-wrap gap-4">
        {['Resume', 'GitHub', 'LinkedIn', 'Contact'].map((item) => (
          <a key={item} href={item === 'Contact' ? '#contact' : '#'} className="rounded-full border border-line bg-soft px-6 py-3 text-lg hover:border-zinc-500 hover:bg-zinc-800/70">{item}</a>
        ))}
      </motion.div>
    </section>
  );
}
