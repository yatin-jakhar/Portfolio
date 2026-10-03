# Yatin Singh Jakhar — Personal Engineering Portfolio

A modern, high-performance personal portfolio website built for **Yatin Singh Jakhar** (B.Tech in Electronics and Communication Engineering, specializing in Very Large Scale Integration — VLSI).

Designed with a dark technical aesthetic inspired by hardware schematics, logic analyzers, and integrated circuit engineering.

---

## ⚡ Key Highlights & Features

- **Accurate & Verified Credentials**: 100% faithful to the official resume and project reports without exaggeration or fabricated claims.
- **Hero Logic Monitor**: Real-time interactive clock pulse (`clk`), serial data trace (`data_in`), and synchronous register bank visualization.
- **Deep-Dive Featured Projects**:
  1. **6 DOF Robotic Arm Using Joystick Control**: Mixed-power servo distribution (35kg RC digital servos + SG90 micro-servos), Arduino Uno C++ firmware with deadzone filtering (`DEADZONE 50`), and an interactive joint pinout inspector.
  2. **4-Bit Palindrome Detector Using FSM & Verilog HDL**: 5-state synchronous sequential FSM ($S_0 \to S_1 \to S_2 \to S_3 \to S_4$), mathematical symmetry evaluator ($(B_3 == B_0) \ \&\&\ (B_2 == B_1)$), and a **live interactive 4-bit clock testbench simulator**.
- **Interactive Project Modals**: Tabbed views for Architecture, Interactive Schematics/Simulators, Full Source Code (with one-click copying), and Technical Specifications.
- **Centralized Data Store**: All content is defined in `src/data/portfolioData.ts` for effortless updates.
- **Direct PDF Assets**: One-click download of the official Resume (`/Yatin_Singh_Jakhar_Resume.pdf`) and Project Reports (`/Yatin_Project_Reports.pdf`).
- **Responsive & Accessible**: Seamlessly adapts to desktop, laptop, tablet, and mobile with a full-screen mobile menu and semantic HTML.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom engineering theme
- **Icons**: [Lucide React](https://lucide.dev/) + custom vector IC icons
- **Fonts**: Inter (Sans) & JetBrains Mono (Technical code & pinouts)

---

## 🚀 Running the Project Locally

### 1. Prerequisites
Ensure Node.js (v18+) and npm are available in your environment.

### 2. Start the Development Server
Navigate to the `portfolio` directory and run:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
To create an optimized production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## ✏️ Customization & Placeholders

All portfolio content is centralized in **`src/data/portfolioData.ts`**. You can update any information without touching component JSX:

### 1. GitHub URL
In `src/data/portfolioData.ts`, replace the placeholder:
```typescript
github: "GITHUB_URL_HERE", // Replace with your actual profile, e.g. "https://github.com/yatinsinghjakhar"
```

### 2. Updating Resume or Project Reports
To update your PDF documents, simply replace the files in the `public/` directory:
- `public/Yatin_Singh_Jakhar_Resume.pdf`
- `public/Yatin_Project_Reports.pdf`

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── Yatin_Singh_Jakhar_Resume.pdf   # Verified Resume PDF
│   └── Yatin_Project_Reports.pdf       # Verified Project Report PDF
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                  # Elevated sticky navigation & mobile drawer
│   │   ├── Hero.tsx                    # Brand statement & live RTL clock monitor
│   │   ├── About.tsx                   # Technical specs sheet & personal background
│   │   ├── Skills.tsx                  # Categorized competency cards (no fake percentages)
│   │   ├── Projects.tsx                # Featured project showcases with architecture pipelines
│   │   ├── ProjectModal.tsx            # Deep-dive modal with live FSM simulator & pinout viewer
│   │   ├── Experience.tsx              # PRISM Conference logistics internship
│   │   ├── EducationCertifications.tsx # B.Tech ECE (VLSI), 12th CBSE & Truechip/NPTEL credentials
│   │   ├── Leadership.tsx              # Student Welfare, Digital Nexus, Rudra Dance Society
│   │   ├── Contact.tsx                 # Direct email launcher, LinkedIn, & message composer
│   │   └── Footer.tsx                  # Engineering signature, clock status, & credits
│   ├── data/
│   │   └── portfolioData.ts            # Central source of truth for all portfolio data
│   ├── App.tsx                         # Root composition
│   ├── index.css                       # Tailwind directives & circuit aesthetic utilities
│   └── main.tsx                        # Application mount
├── index.html                          # SEO metadata, Open Graph, & JetBrains Mono font
├── tailwind.config.js                  # Custom dark canvas & silicon cyan color palette
└── package.json
```
