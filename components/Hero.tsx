'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, CircleDot } from 'lucide-react'
import { profile } from '../lib/data'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div className="avatar-shell" initial={{ scale: 0.82, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="avatar-ring" />
          <Image src="/avatar.jpg" alt="Polycephaly avatar" width={220} height={220} priority className="avatar" />
          <span className="status-dot" title="Profile active" />
        </motion.div>
        <motion.div className="hero-copy" initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18, duration: 0.7 }}>
          <span className="eyebrow">DIGITAL IDENTITY / 2026</span>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-bio">{profile.bio}</p>
          <p className="hero-quote">“{profile.quote}”</p>
          <div className="hero-actions">
            <a href="#connect" className="primary-btn">Explore profile <ArrowDown size={17} /></a>
            <a href="#projects" className="secondary-btn">View projects <ArrowUpRight size={17} /></a>
          </div>
          <div className="identity-chips"><span><CircleDot size={14} /> Polycephaly</span><span>AMD</span><span>Discord</span></div>
        </motion.div>
      </div>
      <motion.div className="scroll-hint" animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>SCROLL TO EXPLORE ↓</motion.div>
    </section>
  )
}
