import React from 'react';


const corePillars = [
  {
    icon: '⚡',
    title: 'High-Throughput Telemetry',
    desc: 'Real-time client streaming & control dashboards for embedded network hardware without UI frame drops.',
    badge: 'Real-Time Systems',
    gradient: 'from-amber-500/10 to-yellow-500/5',
    border: 'hover:border-amber-500/40',
  },
  {
    icon: '🤖',
    title: 'Applied AI & RAG Systems',
    desc: 'Building intelligent web interfaces with LLM tool-calling, agentic workflows, and vector visualizations.',
    badge: 'MSc AI & Data Science',
    gradient: 'from-primary/10 to-accent/5',
    border: 'hover:border-primary/40',
  },
  {
    icon: '🏛️',
    title: 'Spatial 3D & WebGL Viewers',
    desc: 'Browser-based 3D BIM model slicing, spatial blueprint navigation with xeokit, and 360° inspection engines.',
    badge: 'WebGL & xeokit',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    border: 'hover:border-emerald-500/40',
  },
  {
    icon: '🚀',
    title: 'Scale & Core Web Vitals',
    desc: 'Driving sub-second LCP, zero-CLS layout stability, and SEO architecture across high-traffic platforms.',
    badge: 'Web Performance',
    gradient: 'from-blue-500/10 to-cyan-500/5',
    border: 'hover:border-blue-500/40',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">01 — About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: stats & identity */}
          <div className="lg:col-span-2 flex flex-col gap-6 reveal-left">
            {/* Stats mini-cards */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:mx-0 w-full">
              {[
                { value: '10+', label: 'Years Exp.', icon: '⚡' },
                { value: '5', label: 'Companies', icon: '🏢' },
                { value: 'MSc', label: 'Data Science & AI', icon: '🎓' },
                { value: 'Graz', label: 'Austria', icon: '🇦🇹' },
              ]?.map((stat) => (
                <div key={stat?.label} className="glow-box rounded-2xl p-4 text-center bg-card/50 backdrop-blur-sm hover:bg-primary/4 transition-colors duration-300">
                  <div className="text-xl mb-1">{stat?.icon}</div>
                  <div className="text-xl font-black text-foreground">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: story & pillars */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="reveal-up">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05] mb-6">
                Bridging modern frontend architectures with{' '}
                <span className="text-gradient-gold">AI & high performance.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  I&apos;m a Senior Frontend Developer and Software Engineer with over a decade of experience designing scalable web applications, robust design systems, and high-performance interfaces.
                </p>
                <p>
                  Currently completing an MSc in Data Science and AI at <strong className="text-foreground">FH Joanneum in Graz, Austria</strong>, my work focuses on integrating modern web engineering with LLM tool-calling, RAG architectures, and complex interactive data visualizations.
                </p>
                <p>
                  Throughout my career, I&apos;ve architected high-throughput embedded control dashboards at <strong className="text-foreground">Addtech AB Group</strong>, driven Core Web Vitals optimization and international SEO at <strong className="text-foreground">TourRadar</strong>, and engineered browser-based 3D BIM &amp; 360° inspection viewers with xeokit at <strong className="text-foreground">PlanRadar</strong>.
                </p>
              </div>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid sm:grid-cols-2 gap-3.5 reveal-up delay-200">
              {corePillars?.map((pillar) => (
                <div
                  key={pillar?.title}
                  className={`glow-box group relative p-4 rounded-2xl bg-gradient-to-br ${pillar?.gradient} ${pillar?.border} transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 cursor-default`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-2xl">{pillar?.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary/80 border border-border/80 text-muted-foreground group-hover:text-foreground transition-colors">
                      {pillar?.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                    {pillar?.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar?.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}