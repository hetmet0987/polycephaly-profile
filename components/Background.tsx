'use client'

import { motion } from 'framer-motion'

export function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="background-noise" />
      <div className="red-orb red-orb-a" />
      <div className="red-orb red-orb-b" />
      <div className="moon" />
      <div className="city-silhouette" />
      <div className="stars">
        {Array.from({ length: 34 }).map((_, i) => (
          <motion.span
            key={i}
            className="star"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 61) % 80}%` }}
            animate={{ opacity: [0.12, 0.55, 0.12], y: [0, -5, 0] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  )
}
