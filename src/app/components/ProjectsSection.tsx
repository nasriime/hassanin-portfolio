import React from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
  {
    id: 'telemetry',
    title: 'Embedded Network Telemetry & Control Suite',
    description: 'High-throughput web interface and real-time control dashboard handling continuous embedded network monitoring and high-frequency telemetry streams without frame drops.',
    tags: ['React', 'TypeScript', 'Telemetry', 'State Management', 'CI/CD'],
    image: '/assets/screenshots/addtech-screenshot.png',
    imageAlt: 'High-throughput network monitoring and telemetry control dashboard',
    badge: '⚡ Real-Time Systems',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    accent: 'from-amber-500/25 to-orange-500/15',
    borderHover: 'hover:border-amber-500/40',
    glow: 'hover:shadow-amber-500/15'
  },
  {
    id: 'tourradar',
    title: 'Global Travel Discovery & Booking Architecture',
    description: 'High-impact SEO architecture, dynamic routing, and search discovery pages. Optimized Core Web Vitals (substantially reduced LCP & CLS) and modular i18n design system components.',
    tags: ['Next.js', 'Core Web Vitals', 'SEO Architecture', 'Design System', 'i18n'],
    image: '/assets/screenshots/tourradar-screenshot.png',
    imageAlt: 'High-traffic travel marketplace discovery architecture and booking flow',
    badge: '🌍 Enterprise Scale',
    badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
    accent: 'from-primary/18 to-accent/8',
    borderHover: 'hover:border-primary/40',
    glow: 'hover:shadow-primary/15'
  },
  {
    id: 'bim-viewer',
    title: 'Browser-Based 3D BIM & 360° Inspection Engine',
    description: 'Interactive 2D plan and 3D BIM model viewer using xeokit, enabling browser-based spatial navigation, model slicing, defect pinpointing, and 360° panoramic media rendering.',
    tags: ['xeokit', '3D BIM', 'WebGL', '360° Panoramas', 'Canvas'],
    image: '/assets/screenshots/planradar-screenshot.png',
    imageAlt: '3D BIM viewer and spatial inspection interface in browser',
    badge: '🏛️ 3D / WebGL',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
    accent: 'from-emerald-500/20 to-teal-500/10',
    borderHover: 'hover:border-emerald-500/40',
    glow: 'hover:shadow-emerald-500/15'
  },
  {
    id: 'supplieson',
    title: 'SuppliesOn Enterprise B2B Procurement Platform',
    description: 'End-to-end frontend interface and reusable UI component library for B2B procurement, low-latency catalog search APIs, cart calculations, and multi-tier supplier workflows.',
    tags: ['React', 'REST APIs', 'B2B Procurement', 'UI Component Library', 'Data Tables'],
    image: '/assets/screenshots/supplieson-screenshot.png',
    imageAlt: 'SuppliesOn B2B procurement interface with catalog and cart workflows',
    badge: '🛒 B2B Platform',
    badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
    accent: 'from-purple-500/20 to-indigo-500/10',
    borderHover: 'hover:border-purple-500/40',
    glow: 'hover:shadow-purple-500/15'
  },
  {
    id: 'analytics',
    title: 'Big Brother Analytics & Social Intelligence',
    description: 'Web UI translating large-scale social intelligence and sentiment analytics into interactive timeline charts, high-density metric breakdown cards, and fast data filters.',
    tags: ['Vue.js', 'Data Visualization', 'Timeline Charts', 'Sentiment Analytics'],
    image: '/assets/screenshots/mediasci-screenshot.png',
    imageAlt: 'Data analytics dashboard with timeline charts and sentiment intelligence',
    badge: '📊 Data Viz',
    badgeColor: 'bg-teal-500/15 text-teal-300 border-teal-500/25',
    accent: 'from-teal-500/20 to-cyan-500/10',
    borderHover: 'hover:border-teal-500/40',
    glow: 'hover:shadow-teal-500/15'
  },
  {
    id: 'ai-rag',
    title: 'Agentic RAG & LLM Tool Calling Pipeline',
    description: 'Intelligent RAG architecture leveraging vector databases, LLM tool calling, and Vercel AI SDK for interactive data retrieval, automated reasoning, and synthetic analytics.',
    tags: ['Python', 'Next.js', 'Vercel AI SDK', 'Vector DB', 'PyTorch'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a0c02fe-1772100439660.png",
    imageAlt: 'AI and LLM agentic architecture interface',
    badge: '🧠 AI & LLM',
    badgeColor: 'bg-primary/20 text-primary border-primary/30',
    accent: 'from-primary/20 to-accent/15',
    borderHover: 'hover:border-primary/50',
    glow: 'hover:shadow-primary/20'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/6 rounded-full blur-[110px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-3 mb-16 reveal-up">
          <span className="text-xs font-black uppercase tracking-widest text-primary">03 — Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="mb-12 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
            Featured{' '}
            <span className="text-gradient-gold">architecture & systems</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            Selected platforms and engineering highlights spanning real-time embedded telemetry, 3D BIM visualization, Core Web Vitals at scale, and applied AI.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects?.map((project, idx) =>
          <div
            key={project?.id}
            className={`reveal-scale delay-${Math.min(idx * 100, 600)} project-card rounded-2xl border overflow-hidden group flex flex-col relative ${project?.borderHover} ${project?.glow} hover:shadow-2xl`}>

              {/* Hover gradient accent overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project?.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

              {/* Image */}
              <div className="relative overflow-hidden h-44 flex-shrink-0">
                <AppImage
                src={project?.image}
                alt={project?.imageAlt}
                fill
                className="object-cover grayscale-hover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full border text-xs font-bold backdrop-blur-sm ${project?.badgeColor}`}>
                  {project?.badge}
                </span>
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-effect" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col gap-3 bg-card flex-1">
                <h3 className="text-base font-black text-card-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {project?.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project?.description}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project?.tags?.map((tag) =>
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary/90 hover:bg-primary/20 transition-colors duration-200">
                      {tag}
                    </span>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}