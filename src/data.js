export const projects = [
  {
    id: 'blackwall',
    index: '01',
    name: 'Project Blackwall',
    year: '2024',
    tags: ['C', 'Rust', 'eBPF', 'PyTorch'],
    category: 'Autonomous Defence',
    short: 'Autonomous cyber defence system operating across four interdependent pillars.',
    description:
      'An ambitious autonomous cyber defence framework built across four pillars: Sentinel (C/eBPF/XDP network threat detection), Void (Rust/Firecracker deception layer), Brain (PyTorch LSTM anomaly engine), and Vault (post-quantum cryptography). Designed to operate with minimal human intervention.',
    link: 'https://github.com/humm3ll/blackwall',
    color: '#0a0f0a',
  },
  {
    id: 'bininspect',
    index: '02',
    name: 'BinInspect',
    year: '2024',
    tags: ['C++', 'ELF', 'Security'],
    category: 'Security Tooling',
    short: 'C++ CLI for ELF binary structural analysis and validation.',
    description:
      'A security-focused command-line tool for analysing and validating the structural integrity of ELF binaries. Designed for malware triage, exploit research, and secure engineering workflows. Built in C++ with a focus on performance and low-level precision.',
    link: 'https://github.com/humm3ll/BinInspect',
    color: '#0a0a0f',
  },
  {
    id: 'lunarlander',
    index: '03',
    name: 'LunarLander RL',
    year: '2024',
    tags: ['Python', 'RL', 'PyTorch'],
    category: 'Machine Learning',
    short: 'Deep RL algorithm comparison in OpenAI Gymnasium. Graded 90/100.',
    description:
      'Implementation and comparative analysis of three value-based deep reinforcement learning algorithms — DQN, DDQN, and Dueling DQN — applied to the LunarLander-v3 environment in OpenAI Gymnasium. Assessed for CIS2719, graded 90/100.',
    link: 'https://github.com/humm3ll/LunarLander-v3-RL',
    color: '#0f0a0a',
  },
  {
    id: 'rockyou',
    index: '04',
    name: 'RockYou Analysis',
    year: '2024',
    tags: ['Python', 'ML', 'Data Science'],
    category: 'Data Science',
    short: 'EDA and ML comparison on the RockYou password dataset.',
    description:
      'Exploratory data analysis and machine learning model comparison (Logistic Regression, Random Forest, SVM RBF) applied to the RockYou password dataset. Includes a critical evaluation of inflated classifier metrics and their implications for password security assessment.',
    link: 'https://github.com/humm3ll/RockYouAnalysis',
    color: '#0a0f0f',
  },
]

export const skills = [
  { name: 'Python',       note: 'Scripting · ML · Analysis' },
  { name: 'C / C++',      note: 'Systems · Security Tools' },
  { name: 'Rust',         note: 'Low-level · Safe Systems' },
  { name: 'Bash / Linux', note: 'Kali · Arch · Automation' },
  { name: 'PyTorch',      note: 'ML · RL · LSTM' },
  { name: 'Java',         note: 'OOP · Coursework' },
  { name: 'SQL',          note: 'Data · Backends' },
]

export const nav = [
  { label: 'Work',    href: '/work' },
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
]
