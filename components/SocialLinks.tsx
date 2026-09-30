'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { socials } from '../lib/data'

export function SocialLinks() {
  return (
    <section id="connect" className="section social-section">
      <div className="section-heading">
        <span className="eyebrow">05 / CONNECT</span>
        <h2>Across the web.</h2>
        <p>Find Polycephaly on the platforms below.</p>
      </div>
      <div className="social-grid">
        {socials.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="social-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            whileHover={{ y: -5 }}
          >
            <span className="social-icon">{social.icon}</span>
            <span className="social-copy"><strong>{social.name}</strong><small>{social.handle}</small></span>
            <ArrowUpRight size={18} />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
