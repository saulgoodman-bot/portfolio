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
  impact: string;
};

export const navItems = [
  'About Me',
  'Technical Arsenal',
  'Work Experience',
  'Projects',
  'Research Interests',
  'Contact'
];

export const skills = ['FPGA', 'Verilog', 'SystemVerilog', 'VHDL', 'RTL Design', 'ASIC Design', 'Digital Design', 'C++', 'Python', 'Linux', 'Vivado', 'Vitis HLS', 'Cadence Virtuoso', 'HSPICE', 'Cocotb', 'TCL', 'Low-Latency Systems', 'TCP/IP', 'Ethernet', 'FIX Protocol', 'Distributed Systems', 'Computer Architecture', 'Processing-in-Memory', 'ML Acceleration'];

export const experiences: Experience[] = [
  {
    company: 'New York University',
    role: 'Research Assistant',
    location: 'New York, NY',
    period: 'Recent',
    points: [
      'Designed and validated a high-density 256x4-bit SRAM array in 7nm FinFET technology.',
      'Reduced dynamic power by about 20% compared with a baseline 6T SRAM design using mathematical modeling and statistical analysis.',
      'Resolved read/write setup and hold violations above 1 GHz through timing-closure iterations, HSPICE simulations, and parasitic-aware validation.',
      'Automated verification workflows using Python, TCL, and Cocotb.'
    ]
  },
  {
    company: 'Cognizant',
    role: 'Programmer Analyst',
    location: 'India',
    period: 'Previous',
    points: [
      'Optimized distributed data processing workflows using Python multiprocessing and connection pooling.',
      'Reduced end-to-end latency by about 20% and improved throughput by about 15%.',
      'Built automation and reliability improvements for large-scale production systems.',
      'Worked on debugging, deployment automation, and performance analysis.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Ultra-Low-Latency FPGA FIX Parser',
    description: 'Hardware/software co-design project for parsing financial FIX messages with FPGA-oriented FSM pipelines, FIFO buffering, and LUT-based validation for low-latency market data processing.',
    tech: ['Verilog', 'C++', 'FPGA', 'FIX Protocol', 'FIFO', 'BRAM', 'FSM Design', 'Low Latency'],
    impact: 'Designed for deterministic parsing performance in HFT-style environments.'
  },
  {
    title: 'YOLOv2 Acceleration on Zynq-7000 FPGA',
    description: 'Implemented and optimized YOLOv2 inference on Zynq-7000 using Vivado and Vitis HLS for throughput and power efficiency.',
    tech: ['Zynq-7000', 'Vitis HLS', 'Vivado', 'C++', 'FPGA', 'ML Acceleration'],
    impact: 'Improved compute efficiency for real-time edge inference flows.'
  },
  {
    title: 'NYC Subway Arrival Telegram Bot',
    description: 'Built a real-time Telegram bot that fetches and processes MTA GTFS-RT feeds to provide subway arrival and transfer information with sub-second response targets.',
    tech: ['Python', 'AsyncIO', 'aiohttp', 'Telegram Bot API', 'GTFS-RT', 'Protobuf', 'APIs'],
    impact: 'Increased response reliability under frequent polling conditions.'
  },
  {
    title: 'FPGA VGA Pong Game',
    description: 'Designed a Verilog-based Pong game on Basys 3 with VGA timing, counters, FSM gameplay, button inputs, and display synchronization.',
    tech: ['Verilog', 'Basys 3', 'VGA', 'FSM', 'Digital Design'],
    impact: 'Demonstrated precise timing control and digital logic integration on FPGA.'
  }
];

export const researchInterests = [
  'Processing-in-Memory architectures',
  'Memory wall problem',
  'LLM optimization',
  'Hardware-aware AI acceleration',
  'Low-latency compute systems',
  'FPGA acceleration for real-time workloads'
];
