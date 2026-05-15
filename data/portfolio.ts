export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
};

// ─── Skills shown in "Technical Arsenal" ───────────────────────
export const skills = [
  'FPGA',
  'Verilog',
  'SystemVerilog',
  'RTL Design',
  'ASIC Design',
  'SRAM Design',
  'MBIST',
  'Vivado',
  'Vitis HLS',
  'Zynq-7000',
  'C++',
  'Python',
  'Embedded C',
  'Low-Latency Systems',
  'FIX Protocol',
  'Computer Architecture',
  'RISC-V',
  'DSP',
  'Linux',
  'Git',
  'Cocotb',
  'HSPICE',
  'ModelSim',
];

// ─── Work Experience ────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    company: 'New York University — Tandon School of Engineering',
    role: 'Graduate Researcher',
    location: 'New York, NY',
    period: '2023 – Present',
    points: [
      'Designed and validated a high-density 256×4-bit SRAM array at 7nm FinFET node with parasitic-aware HSPICE simulations.',
      'Reduced dynamic power by ~20% vs. a 6T baseline through mathematical modeling and iterative cell optimization.',
      'Resolved read/write setup and hold timing violations above 1 GHz via STA, timing-closure iterations, and parasitic back-annotation.',
      'Automated verification and test flows using Python, TCL scripting, and Cocotb-based testbench infrastructure.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Programmer Analyst',
    location: 'India',
    period: '2021 – 2023',
    points: [
      'Optimized distributed data processing pipelines using Python multiprocessing and connection pooling.',
      'Reduced end-to-end pipeline latency by ~20% and improved throughput by ~15% through profiling and architecture changes.',
      'Built deployment automation and monitoring tooling for large-scale production services.',
      'Contributed to debugging, scripting, and reliability improvements across multiple client-facing systems.',
    ],
  },
  {
    company: 'GVPCOE — Electronics & Communications Engineering',
    role: 'Bachelor of Engineering',
    location: 'India',
    period: '2017 – 2021',
    points: [
      'Foundational coursework in VLSI Design, Microprocessors & Microcontrollers, Digital Signal Processing, and Linear & Digital ICs.',
      'Built hardware projects including a biometric fingerprint identification system and embedded signal acquisition boards.',
    ],
  },
];

// ─── Featured Projects ──────────────────────────────────────────
export const projects: Project[] = [
  {
    title: 'Ultra-Low-Latency FPGA FIX Parser',
    description:
      'Hardware FIX protocol parser built for HFT-grade latency targets. FSM-based pipelined parsing, FIFO buffering, BRAM/ROM lookup for tag-value validation, and parallel field extraction — designed for sub-microsecond message processing on FPGA fabric.',
    tech: ['Verilog', 'FPGA', 'FIX Protocol', 'FSM', 'FIFO', 'BRAM', 'Low-Latency'],
    githubUrl: '#',
  },
  {
    title: 'RISC-V RV32I Processor',
    description:
      'Full 5-stage pipelined implementation of the RISC-V RV32I base integer ISA in SystemVerilog. Includes hazard detection, data forwarding, branch prediction stubs, and instruction/data cache controllers.',
    tech: ['SystemVerilog', 'RISC-V', 'RV32I', 'Pipelining', 'Computer Architecture'],
    githubUrl: '#',
  },
  {
    title: 'MBIST Engine — 256×4b SRAM @ 7nm',
    description:
      'Memory Built-In Self-Test engine for a 256×4-bit SRAM at 7nm FinFET. Implements March-C and MATS+ algorithms with full fault coverage analysis, timing verification, and automated TCL regression flows.',
    tech: ['ASIC', 'SRAM', '7nm PDK', 'MBIST', 'HSPICE', 'TCL', 'Cocotb'],
    githubUrl: '#',
  },
  {
    title: 'Object Detection on Zynq-7000 SoC',
    description:
      'Real-time object detection accelerated on Zynq-7000 using Vitis HLS. Offloads convolution layers to FPGA fabric, achieving significant inference speedup over ARM-only baseline with hardware/software co-design.',
    tech: ['Zynq-7000', 'Vitis HLS', 'Vivado', 'C++', 'Hardware Acceleration'],
    githubUrl: '#',
  },
  {
    title: 'NYC Subway Arrival Telegram Bot',
    description:
      'Production Telegram bot built with async Python (aiohttp + asyncio). Fetches MTA GTFS-RT feeds concurrently, with per-stage latency instrumentation, rate limiting, and stale-feed detection for production reliability.',
    tech: ['Python', 'asyncio', 'aiohttp', 'Telegram Bot API', 'GTFS-RT'],
    githubUrl: '#',
  },
  {
    title: 'Low-Latency Pong on Artix-7',
    description:
      'Pong game implemented entirely in Verilog on Artix-7 FPGA with 60 fps VGA output. Custom hSync/vSync controller, sprite rendering pipeline, collision detection — zero software overhead, running purely in FPGA fabric.',
    tech: ['Verilog', 'Artix-7', 'VGA', 'FSM', 'Digital Design'],
    githubUrl: '#',
  },
];
