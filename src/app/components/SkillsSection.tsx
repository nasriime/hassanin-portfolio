'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Layers, BrainCircuit, Server, Database } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend & Architecture',
    icon: Layers,
    iconColor: 'text-primary',
    gradient: 'from-primary to-accent',
    glow: 'hover:shadow-primary/15',
    border: 'hover:border-primary/45',
    bg: 'group-hover:bg-primary/6',
    badgeBorder: 'group-hover:border-primary/50',
    skills: ['React & Next.js', 'Vue & Nuxt', 'TypeScript', 'JavaScript', 'Design Systems', 'Core Web Vitals'],
  },
  {
    category: 'AI & Applied ML',
    icon: BrainCircuit,
    iconColor: 'text-accent',
    gradient: 'from-accent to-primary',
    glow: 'hover:shadow-accent/15',
    border: 'hover:border-accent/55',
    bg: 'group-hover:bg-accent/6',
    badgeBorder: 'group-hover:border-accent/50',
    skills: ['LLM APIs & Tool Calling', 'RAG Architecture', 'Vercel AI SDK', 'Vector DBs', 'PyTorch', 'Scikit-learn'],
  },
  {
    category: 'Backend & Cloud',
    icon: Server,
    iconColor: 'text-amber-400',
    gradient: 'from-amber-400 to-orange-500',
    glow: 'hover:shadow-amber-500/20',
    border: 'hover:border-amber-500/50',
    bg: 'group-hover:bg-amber-500/8',
    badgeBorder: 'group-hover:border-amber-500/50',
    skills: ['FastAPI', 'Express', 'Python', 'Docker', 'Kubernetes', 'AWS & Terraform'],
  },
  {
    category: 'Data & Testing',
    icon: Database,
    iconColor: 'text-emerald-400',
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'hover:shadow-emerald-500/20',
    border: 'hover:border-emerald-500/50',
    bg: 'group-hover:bg-emerald-500/8',
    badgeBorder: 'group-hover:border-emerald-500/50',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Playwright', 'Vitest', 'Pytest'],
  },
];

const tools = [
  { name: 'xeokit (3D BIM)', icon: '🏛️', color: 'hover:border-primary/50 hover:text-primary' },
  { name: 'WebGL & 360° Media', icon: '🌐', color: 'hover:border-sky-400/50 hover:text-sky-300' },
  { name: 'Telemetry Streams', icon: '📡', color: 'hover:border-amber-400/50 hover:text-amber-300' },
  { name: 'Core Web Vitals', icon: '⚡', color: 'hover:border-emerald-400/50 hover:text-emerald-300' },
  { name: 'R & Data Analysis', icon: '📊', color: 'hover:border-blue-400/50 hover:text-blue-300' },
  { name: 'Docker & K8s', icon: '🐳', color: 'hover:border-cyan-400/50 hover:text-cyan-300' },
  { name: 'Git & CI/CD Pipelines', icon: '⎇', color: 'hover:border-orange-400/50 hover:text-orange-300' },
  { name: 'i18n & Dynamic Routing', icon: '🌍', color: 'hover:border-accent/55 hover:text-accent' },
];

const spokenLanguages = [
  { lang: 'English', level: 'Fluent (B2)', flag: '🇬🇧' },
  { lang: 'German', level: 'Conversational (A2)', flag: '🇦🇹' },
  { lang: 'Arabic', level: 'Native / Bilingual (C1)', flag: '🇪🇬' },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/6 rounded-full blur-[130px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">02 — Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="mb-14 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
            Technical{' '}
            <span className="text-gradient-gold">toolkit</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            10+ years of proven full-stack and frontend mastery — spanning modern web applications, 3D visualization, scalable cloud backends, and applied AI.
          </p>
        </div>

        {/* Skill category cards — asymmetric bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {skillGroups?.map((group, gi) => (
            <div
              key={group?.category}
              className={`reveal-scale group relative rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl ${group?.glow} ${group?.border} hover:-translate-y-3 overflow-hidden cursor-default`}
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${group?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* BG tint */}
              <div className={`absolute inset-0 transition-colors duration-500 ${group?.bg} rounded-2xl`} />
              {/* Corner glow */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${group?.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

              {/* Icon badge */}
              <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/80 border border-border/80 shadow-md mb-5 ${group?.badgeBorder} group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300 ease-out overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${group?.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <group.icon className={`w-5 h-5 relative z-10 ${group?.iconColor} transition-transform duration-300 group-hover:scale-110`} />
              </div>

              <h3 className="relative text-sm font-black uppercase tracking-wider text-foreground mb-4">{group?.category}</h3>

              {/* Skill pills */}
              <div className="relative flex flex-wrap gap-2">
                {group?.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary/90 text-xs font-semibold text-foreground border border-border/60 hover:border-primary/40 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools strip */}
        <div className={`reveal-up transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">Specialized Capabilities & Tools</p>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3 mb-10">
            {tools?.map((tool, i) => (
              <div
                key={tool?.name}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card/80 ${tool?.color} hover:-translate-y-1 transition-all duration-300 cursor-default group`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="text-base leading-none group-hover:scale-125 transition-transform duration-300">{tool?.icon}</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-inherit transition-colors duration-300">{tool?.name}</span>
              </div>
            ))}
          </div>

          {/* Spoken Languages strip */}
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">Languages</p>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="flex flex-wrap gap-4">
            {spokenLanguages?.map((l) => (
              <div
                key={l.lang}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-card/70 hover:border-primary/40 transition-colors duration-300"
              >
                <span className="text-xl">{l.flag}</span>
                <div>
                  <p className="text-sm font-black text-foreground">{l.lang}</p>
                  <p className="text-xs text-muted-foreground">{l.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}