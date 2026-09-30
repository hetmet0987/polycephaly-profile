'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Gamepad2, Cpu, Sparkles, Globe2, Music2 } from 'lucide-react'
import Link from 'next/link'
import { Background } from '../components/Background'
import { Hero } from '../components/Hero'
import { SocialLinks } from '../components/SocialLinks'
import { interests, projects } from '../lib/data'

const interestIcons = [Code2, Gamepad2, Sparkles, Cpu, Globe2, Cpu, Gamepad2, Music2]

export default function Home() {
  return (
    <main>
      <Background />
      <nav className="nav">
        <a href="#home" className="brand"><span>✦</span> POLYCEPHALY</a>
        <div className="nav-links">
          {['home', 'about', 'interests', 'projects', 'connect'].map(item => <a key={item} href={`#${item}`}>{item}</a>)}
        </div>
        <a href="#connect" className="nav-cta">CONNECT</a>
      </nav>

      <Hero />

      <section id="about" className="section about-section">
        <div className="section-heading"><span className="eyebrow">01 / ABOUT</span><h2>Who is Polycephaly?</h2></div>
        <div className="about-grid">
          <div className="glass-panel large-panel">
            <p>I&apos;m a developer, creator and digital explorer. I enjoy building interesting systems, immersive worlds and experimental digital projects.</p>
            <p>My interests move between programming, Discord ecosystems, Minecraft graphics, AI and visual design — always with a focus on learning and creating something distinct.</p>
          </div>
          <div className="glass-panel quote-panel"><span>“</span><p>More than one mind.<br />More than one world.</p><small>— Polycephaly</small></div>
        </div>
      </section>

      <section id="interests" className="section">
        <div className="section-heading"><span className="eyebrow">02 / INTERESTS</span><h2>Things that keep me inspired.</h2></div>
        <div className="interest-grid">
          {interests.map((interest, i) => { const Icon = interestIcons[i]; return <motion.div key={interest} className="interest-card" whileHover={{ y: -5, scale: 1.02 }}><Icon size={22} /><span>{interest}</span></motion.div> })}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading"><span className="eyebrow">03 / PROJECTS</span><h2>Things I build.</h2><p>Selected projects from the Polycephaly ecosystem.</p></div>
        <div className="project-grid">
          {projects.map((project, i) => <motion.article key={project.name} className="project-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * .07 }} whileHover={{ y: -7 }}><div className={`project-art art-${i}`}><span>{String(i + 1).padStart(2, '0')}</span></div><div className="project-body"><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link href={project.href} className="project-link">View concept <ArrowUpRight size={15} /></Link></div></motion.article>)}
        </div>
      </section>

      <section className="section journey-section">
        <div className="section-heading"><span className="eyebrow">04 / JOURNEY</span><h2>Key moments in the path.</h2></div>
        <div className="timeline">
          <div className="timeline-line" />
          {[['2025', 'Discord', 'Joined Discord and started building.'], ['2026', 'Prime Ecosystem', 'Developing government, security, executive, diplomatic and defence systems.'], ['2026', 'Prime Marshal', 'Defence Command / Chain of Command.'], ['2026', 'Prime Justiciar', 'Supreme Court / Royal Judiciary / JR5.'], ['2026', 'Prime Herald', 'Royal Communications Office / The Prime Time / Stage 09.'], ['2026', 'Prime Interpreter', 'Royal Language & Interpretation Service / Stage 10.'], ['2026', 'Prime Maestro', 'Royal Music & Audio Experience / Stage 10.'], ['2026', 'Prime Seneschal', 'Royal Administrative Authority / S10.10 Canonical Permission Memory.'], ['2026', 'Prime Exchequer', 'Royal Treasury / E1 Foundation with E2–E10 economic roadmap.'], ['2026', 'APRIS', '0.07 Water Engine · 0.08 Weather → 1.00 Photorealism roadmap.']].map(([year, title, desc]) => <div className="timeline-item" key={year + title}><span className="timeline-dot" /><strong>{year}</strong><h3>{title}</h3><p>{desc}</p></div>)}
        </div>
      </section>

      <SocialLinks />

      <section className="final-cta">
        <span className="eyebrow">LET&apos;S CONNECT</span>
        <h2>See you somewhere on the web.</h2>
        <a href="#connect" className="primary-btn">Open social hub <ArrowUpRight size={17} /></a>
      </section>

      <footer><span>POLYCEPHALY</span><small>Built with code & curiosity.</small><small>© 2026 Polycephaly</small></footer>
    </main>
  )
}
