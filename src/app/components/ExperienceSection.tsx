import React from 'react';
import AppImage from '@/components/ui/AppImage';

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Addtech AB Group',
    location: 'Austria',
    period: '10/2025 – 04/2026',
    current: false,
    gradient: 'from-amber-400 to-yellow-500',
    glow: 'hover:shadow-amber-500/15',
    description: 'Architected responsive, high-throughput web interfaces and control dashboards for embedded network monitoring solutions. Partnered cross-functionally with embedded engineers and UX designers to deliver production-grade features. Modernized client-side state management and asynchronous data streams to handle high-frequency telemetry data without frame drops.',
    skills: ['React', 'TypeScript', 'Telemetry Data', 'State Management', 'Embedded Systems', 'CI/CD'],
    logo: '/assets/logos/addtech.jpeg',
  },
  {
    role: 'Senior Frontend Developer',
    company: 'TourRadar',
    location: 'Austria',
    period: '02/2022 – 09/2025',
    current: false,
    gradient: 'from-primary to-accent',
    glow: 'hover:shadow-primary/15',
    description: 'Engineered high-impact SEO architectures, dynamic routing, and search result discovery pages driving organic user acquisition. Spearheaded Core Web Vitals optimization initiatives across primary revenue-generating landing pages, significantly reducing LCP and CLS. Developed and rolled out modular design system components across multi-disciplinary product squads. Implemented localized i18n features and booking flows for European and global expansion.',
    skills: ['Next.js', 'Core Web Vitals', 'SEO Architecture', 'Design Systems', 'i18n', 'Performance'],
    logo: '/assets/logos/touradar.png',
  },
  {
    role: 'Web Developer',
    company: 'PlanRadar',
    location: 'Austria',
    period: '11/2019 – 01/2022',
    current: false,
    gradient: 'from-accent to-primary',
    glow: 'hover:shadow-accent/15',
    description: 'Architected interactive 2D plan and 3D BIM model viewers utilizing xeokit, enabling fast browser-based spatial navigation, model slicing, and defect pinpointing on complex construction blueprints. Built high-performance rendering tools for high-resolution 360° panoramic media alongside 3D visualizations. Profiled frontend bottlenecks, reduced webpack bundle sizes, and overhauled core application views.',
    skills: ['xeokit', '3D BIM', 'WebGL', '360° Panoramas', 'Webpack Optimization', 'Canvas'],
    logo: '/assets/logos/planradar.jpeg',
  },
  {
    role: 'Frontend Developer',
    company: 'Indielabs, LLC',
    location: 'Egypt',
    period: '10/2017 – 10/2019',
    current: false,
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'hover:shadow-emerald-500/15',
    description: 'Architected and maintained the end-to-end frontend interface and reusable UI component library for the SuppliesOn B2B procurement platform. Designed and integrated secure, low-latency REST APIs handling catalog search, inventory updates, and multi-tier supplier purchase workflows. Optimized cart calculations and checkout funnels for rapid rendering across diverse devices.',
    skills: ['React', 'B2B Procurement', 'REST APIs', 'UI Components', 'Data Tables', 'Code Standards'],
    logo: '/assets/logos/indielabs.jpeg',
  },
  {
    role: 'Frontend Developer',
    company: 'MediaSci ME',
    location: 'Egypt',
    period: '01/2016 – 09/2017',
    current: false,
    gradient: 'from-purple-400 to-indigo-500',
    glow: 'hover:shadow-purple-500/15',
    description: 'Developed and maintained the web UI for the Big Brother Analytics platform, translating large-scale social intelligence and sentiment data into clear visual dashboards. Built dynamic data visualization views, interactive timeline charts, and metric breakdown cards capable of rendering high-density data feeds smoothly.',
    skills: ['Vue.js', 'Data Visualization', 'Timeline Charts', 'Sentiment Analytics', 'Payload Optimization'],
    logo: '/assets/logos/mediasci.jpeg',
  },
];

const education = [
  {
    degree: 'MSc in Data Science and AI',
    institution: 'FH Joanneum',
    location: 'Graz, Austria 🇦🇹',
    period: '2025 – 2027',
    note: 'In Progress',
    courses: ['Machine Learning', 'Deep Learning & AI', 'Big Data Architectures', 'RAG & LLM Tool Calling'],
    logo: '/assets/logos/fh-joanneum.jpg',
    gradient: 'from-primary to-accent',
  },
  {
    degree: 'B.Sc. in Communications and Electronics Engineering',
    institution: 'Institute of Engineering and Aviation Technology',
    location: 'Egypt 🇪🇬',
    period: '2009 – 2014',
    note: 'Graduated',
    courses: ['Communications Engineering', 'Signal Processing', 'Embedded Systems', 'Computer Networks'],
    logo: '/assets/logos/ieat.jpeg',
    gradient: 'from-accent to-primary',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/6 rounded-full blur-[110px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">04 — Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="mb-14 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
            Where I&apos;ve{' '}
            <span className="text-gradient-gold">worked</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            10+ years delivering mission-critical web applications, high-throughput interfaces, and high-impact software across Europe and the Middle East.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mb-24">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/70 via-accent/25 to-transparent" />

          <div className="flex flex-col gap-0">
            {experiences?.map((exp, idx) => (
              <div
                key={exp?.company + exp?.period}
                className={`reveal-up delay-${idx * 100} relative pl-16 md:pl-24 pb-12 last:pb-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 relative`}>
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {exp?.current && (
                    <div className="absolute w-5 h-5 rounded-full bg-primary/40 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className={`group relative rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-2xl ${exp?.glow} overflow-hidden`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  {/* Corner glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${exp?.gradient} opacity-0 group-hover:opacity-8 blur-2xl transition-opacity duration-500`} />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      {/* Left: role info */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl border border-border/80 bg-secondary/50 flex items-center justify-center flex-shrink-0 shadow-md group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 ease-out overflow-hidden">
                          <AppImage src={exp?.logo} alt={exp?.company} width={48} height={48} className="object-cover w-full h-full" />
                        </div>
                        <div>
                          <h3 className="font-black text-card-foreground text-lg leading-tight">{exp?.role}</h3>
                          <p className="text-sm font-bold text-primary mt-0.5">{exp?.company}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{exp?.location}</p>
                        </div>
                      </div>

                      {/* Right: period + badge */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                          {exp?.period}
                        </span>
                        {exp?.current && (
                          <span className="px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-bold text-primary whitespace-nowrap animate-neon-pulse">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {exp?.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp?.skills?.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/60 text-xs font-semibold text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors duration-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal-up">
          <div className="flex items-center gap-3 mb-10">
            <h3 className="text-2xl font-black text-foreground whitespace-nowrap">Education</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {education?.map((edu) => (
              <div
                key={edu?.institution}
                className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-all duration-400 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl border border-border/80 bg-secondary/50 flex items-center justify-center flex-shrink-0 shadow-md group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 ease-out overflow-hidden">
                    <AppImage src={edu?.logo} alt={edu?.institution} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-black text-card-foreground text-lg leading-tight">{edu?.degree}</h4>
                    <p className="text-primary font-bold text-sm mt-0.5">{edu?.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu?.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{edu?.period}</span>
                  <span className="px-3 py-1 rounded-full bg-primary/12 border border-primary/25 text-xs font-bold text-primary">
                    {edu?.note}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu?.courses?.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/60 text-xs font-semibold text-foreground/80">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}