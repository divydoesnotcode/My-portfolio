import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI Image Generator",
    description: "Full-stack SaaS platform for generating AI images with DALL-E 3. Real-time generation, user auth, and subscription billing.",
    tech: ["Next.js", "OpenAI", "Stripe", "PostgreSQL"],
    link: "https://github.com",
    github: "https://github.com/divydoesnotcode",
    year: "2024",
    gradient: "from-violet-900 to-cyan-900",
  },
  {
    number: "02",
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking with live charts, portfolio management, and price alerts across 200+ coins.",
    tech: ["React", "Chart.js", "WebSockets"],
    link: "https://github.com",
    github: "https://github.com/divydoesnotcode",
    year: "2024",
    gradient: "from-emerald-900 to-teal-900",
  },
  {
    number: "03",
    title: "Task Management",
    description: "Collaborative task manager with real-time updates, team workspaces, drag-and-drop kanban, and deadline tracking.",
    tech: ["Node.js", "Socket.io", "React", "MongoDB"],
    link: "https://github.com",
    github: "https://github.com/divydoesnotcode",
    year: "2023",
    gradient: "from-rose-900 to-purple-900",
  },
  {
    number: "04",
    title: "Portfolio v1",
    description: "First personal portfolio built with React and Framer Motion. Where it all started.",
    tech: ["React", "Framer", "Tailwind"],
    link: "https://github.com",
    github: "https://github.com/divydoesnotcode",
    year: "2023",
    gradient: "from-orange-900 to-yellow-900",
  },
];

// Animated Text Generator (Aceternity style)
function AnimatedText({ text, className }) {
  const words = text.split(" ");
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
        hidden: {}
      }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Aceternity inspired Hover Card
function AceternityProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative w-full rounded-3xl p-px"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated glowing border effect */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 z-0 rounded-3xl bg-gradient-to-br ${project.gradient} blur-xl opacity-40`}
          />
        )}
      </AnimatePresence>
      
      {/* Structural Card */}
      <div className="relative z-10 w-full h-full min-h-[400px] flex flex-col justify-between rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden p-8 transition-transform duration-500 group-hover:-translate-y-1">
        
        {/* Abstract Top-Right Gradient Blob */}
        <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${project.gradient} rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity duration-700`} />

        {/* Top Header */}
        <div className="flex justify-between items-start mb-8 relative z-10">
          <motion.span 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-white/20 text-6xl font-black leading-none"
             style={{ fontFamily: "var(--font-display)" }}
          >
            {project.number}
          </motion.span>
          
          <div className="flex gap-3">
             <a href={project.link} target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
               <ArrowUpRight size={18} />
             </a>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </motion.h3>
          
          <AnimatedText 
            text={project.description} 
            className="text-white/60 text-sm md:text-base leading-relaxed mb-8" 
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
             {project.tech.map((t) => (
               <span key={t} className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full bg-white/5 border border-white/10 text-white/70">
                 {t}
               </span>
             ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="text-blue-500 text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-semibold"
          >
            Selected Work
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 14 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Featured <br className="hidden md:block" /> Projects.
          </motion.h2>
        </div>
        
        <motion.a 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          href="https://github.com/divydoesnotcode" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white text-sm md:text-base transition-colors border-b border-white/20 hover:border-white/50 pb-1 whitespace-nowrap self-start md:self-end"
        >
          View Full Archive →
        </motion.a>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        {projects.map((project, i) => (
          <AceternityProjectCard 
            key={project.number} 
            project={project} 
            index={i}
          />
        ))}
      </div>

    </section>
  );
}