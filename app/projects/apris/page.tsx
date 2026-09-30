'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowDown, ArrowLeft, ArrowUpRight, Droplets, Gauge, Layers3,
  Lightbulb, Moon, Mountain, Orbit, Sparkles, Sun, Waves, Wind, Zap
} from 'lucide-react'

const current = [
  ['0.01', 'Foundation', 'Shared rendering foundation for APRIS systems.'],
  ['0.02', 'PBR', 'Material-aware physically-inspired surface response.'],
  ['0.03', 'Shadows', 'Shadow subsystem feeding the lighting pipeline.'],
  ['0.04', 'AO / Contact Shadows', 'Depth-based ambient/contact occlusion.'],
  ['0.05', 'Reflections', 'Adaptive screen-space reflections with confidence weighting.'],
  ['0.06', 'Global Illumination', 'RSM-style indirect lighting and GI integration.'],
  ['0.07', 'Water Engine', 'Current milestone: procedural water, Fresnel, reflections, glitter and optical-depth tint.'],
]

const future = [
  ['0.08', 'Weather', 'Rain, wet surfaces, puddles and weather-light interaction.'],
  ['0.09', 'Atmosphere / Volumetrics', 'Fog, mist, volumetric lighting and atmospheric scattering.'],
  ['0.10', 'TAA / Denoising', 'Temporal history, reprojection, accumulation and denoising.'],
  ['1.00', 'Photorealism', 'Integrated photorealistic rendering pipeline across the completed milestones.'],
]

const water = [
  ['Water Geometry', 'Dedicated gbuffers_water stage with restrained displacement.'],
  ['Wave Model', 'Multi-layer directional wave octaves with domain distortion.'],
  ['Dynamic Normals', 'Height-field reconstruction for medium and micro detail.'],
  ['Water G-Buffer', 'Color, world normal and water mask data for composite.'],
  ['Fresnel', 'Water IOR around 1.333 for physically-inspired reflectance.'],
  ['SSR + Sky', 'Water-specific SSR plus procedural sky/horizon fallback.'],
  ['Sun Glitter', 'Specular highlights driven by wave normals.'],
  ['Optical Depth', 'Basic absorption/tint approximation for water body appearance.'],
]

const pipeline: Array<[string, string, LucideIcon]> = [
  ['Geometry', 'Water geometry + height field', Mountain],
  ['Surface', 'Normals + material response', Waves],
  ['Lighting', 'SSR + Fresnel + GI', Sun],
  ['Atmosphere', 'Future volume/weather integration', Orbit],
  ['Reconstruction', 'Future TAA + denoising', Gauge],
]

export default function AprisPage() {
  return (
    <main className="apris-page">
      <div className="apris-bg" />
      <div className="apris-grid" />

      <nav className="apris-nav">
        <Link href="/#projects" className="apris-back"><ArrowLeft size={15} /> Projects</Link>
        <span className="apris-brand">APRIS</span>
        <a href="#roadmap" className="apris-nav-link">ROADMAP</a>
      </nav>

      <section className="apris-hero">
        <div className="apris-hero-copy">
          <span className="apris-kicker">FINAL SHOWCASE · MILESTONE 0.07</span>
          <h1>APRIS</h1>
          <p className="apris-subtitle">Advanced Photorealistic Rendering &amp; Illumination System</p>
          <p className="apris-lead">A Minecraft rendering system being built milestone by milestone — from foundational lighting and reflections to a future photorealistic pipeline.</p>
          <div className="apris-current-badge"><span className="apris-pulse" /> CURRENT DEVELOPMENT · 0.07 WATER ENGINE</div>
          <div className="apris-actions">
            <a href="#water" className="apris-btn apris-btn-primary">Explore water engine <ArrowDown size={16} /></a>
            <a href="#roadmap" className="apris-btn apris-btn-ghost">View 0.01 → 1.00 <ArrowUpRight size={16} /></a>
          </div>
          <div className="apris-meta">
            <span><Layers3 size={14} /> GLSL modular pipeline</span>
            <span><Waves size={14} /> Iris-style water stage</span>
            <span><Zap size={14} /> Independent implementation</span>
          </div>
        </div>

        <div className="apris-visual">
          <div className="apris-ring apris-ring-1" />
          <div className="apris-ring apris-ring-2" />
          <div className="apris-orb">
            <Droplets size={88} strokeWidth={1.1} />
            <span>0.07</span>
            <small>WATER ENGINE</small>
          </div>
          <div className="apris-glint glint-a"><Sun size={18} /></div>
          <div className="apris-glint glint-b"><Sparkles size={16} /></div>
        </div>
      </section>

      <section className="apris-section" id="current">
        <div className="apris-section-head">
          <span>CURRENT STATE</span>
          <h2>What APRIS has today.</h2>
          <p>The current showcase marks 0.07 as the live milestone and keeps future work visibly separate.</p>
        </div>
        <div className="apris-milestone-grid">
          {current.map(([id, title, desc], i) => (
            <motion.article key={id} className={`apris-milestone ${id === '0.07' ? 'is-current' : ''}`} whileHover={{ y: -5 }}>
              <div className="apris-milestone-top"><span>{id}</span>{id === '0.07' ? <b>LIVE</b> : <em>DONE</em>}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              {i === current.length - 1 && <div className="apris-current-line"><Waves size={14} /> CURRENT WATER SUBSYSTEM</div>}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="apris-section" id="water">
        <div className="apris-section-head">
          <span>0.07 · WATER RENDERING ENGINE</span>
          <h2>The current flagship milestone.</h2>
          <p>APRIS 0.07 is the first complete water-rendering subsystem and is internally split into reusable GLSL modules.</p>
        </div>

        <div className="apris-water-grid">
          <div className="apris-water-card apris-water-architecture">
            <div className="apris-water-surface">
              <div className="apris-wave wave-a" />
              <div className="apris-wave wave-b" />
              <div className="apris-wave wave-c" />
              <div className="apris-water-label"><Droplets size={16} /> WATER</div>
            </div>
            <div className="apris-water-flow">
              <div><strong>Geometry</strong><span>Wave height field</span></div>
              <div><strong>Surface</strong><span>Dynamic normal</span></div>
              <div><strong>Composite</strong><span>SSR · Fresnel · Sky</span></div>
              <div><strong>Output</strong><span>Water lighting</span></div>
            </div>
          </div>

          <div className="apris-water-features">
            {water.map(([title, desc]) => <motion.div key={title} className="apris-feature" whileHover={{ x: 4 }}><div className="apris-feature-icon"><Droplets size={15} /></div><div><strong>{title}</strong><p>{desc}</p></div></motion.div>)}
          </div>
        </div>
      </section>

      <section className="apris-section">
        <div className="apris-section-head">
          <span>RENDERING PIPELINE</span>
          <h2>Built as a chain, not a collection of tricks.</h2>
          <p>Each milestone is a reusable subsystem that feeds the next stage of the renderer.</p>
        </div>
        <div className="apris-pipeline">
          {pipeline.map(([title, desc, Icon], i) => <div className="apris-pipeline-step" key={title}><div className="apris-pipeline-icon"><Icon size={19} /></div><strong>{title}</strong><span>{desc}</span>{i < pipeline.length - 1 && <b>→</b>}</div>)}
        </div>
      </section>

      <section className="apris-section apris-boundary-section">
        <div className="apris-section-head">
          <span>BOUNDARY</span>
          <h2>What 0.07 does — and what it does not claim.</h2>
        </div>
        <div className="apris-boundary-grid">
          <div className="apris-boundary allow"><strong>Implemented now</strong><ul><li>Water geometry and wave displacement</li><li>Dynamic surface normals</li><li>Water G-buffer + mask</li><li>Fresnel + SSR + sky fallback</li><li>Sun glitter and roughness response</li><li>Basic optical-depth absorption tint</li></ul></div>
          <div className="apris-boundary future"><strong>Reserved for future milestones</strong><ul><li>Full caustics</li><li>Full underwater volumetrics</li><li>Weather system</li><li>Atmosphere / volumetric lighting</li><li>TAA and final denoising</li><li>APRIS 1.00 photorealism integration</li></ul></div>
        </div>
      </section>

      <section className="apris-section" id="roadmap">
        <div className="apris-section-head">
          <span>0.01 → 1.00</span>
          <h2>From foundation to photorealism.</h2>
          <p>The roadmap is a development plan, not a claim that every future subsystem already exists.</p>
        </div>
        <div className="apris-roadmap">
          {[...current.map(x => [...x, 'CURRENT']), ...future.map(x => [...x, 'ROADMAP'])].map(([id, title, desc, state], i) => (
            <motion.div key={id} className={`apris-roadmap-row ${id === '0.07' ? 'current' : ''}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .03 }}>
              <span>{id}</span><div><h3>{title}</h3><p>{desc}</p></div><b>{state}</b>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="apris-section apris-future-grid-section">
        <div className="apris-section-head">
          <span>FUTURE MILESTONES</span>
          <h2>The systems still ahead.</h2>
        </div>
        <div className="apris-future-grid">
          {future.map(([id, title, desc], i) => {
            const icons = [Wind, Orbit, Gauge, Sparkles]
            const Icon = icons[i]
            return <motion.div key={id} className="apris-future-card" whileHover={{ y: -5 }}><div className="apris-future-icon"><Icon size={18} /></div><span>{id}</span><h3>{title}</h3><p>{desc}</p></motion.div>
          })}
        </div>
      </section>

      <section className="apris-section">
        <div className="apris-section-head">
          <span>REFERENCE POLICY</span>
          <h2>Independent implementation.</h2>
          <p>APRIS may study publicly documented rendering concepts and visual goals, but its implementation remains independently written.</p>
        </div>
        <div className="apris-reference">
          <div><Lightbulb size={19} /><strong>Study concepts</strong><span>Rendering research and documented techniques may inform design.</span></div>
          <div><Sparkles size={19} /><strong>Build independently</strong><span>No reference shader source is copied into APRIS.</span></div>
          <div><Moon size={19} /><strong>Keep the identity</strong><span>APRIS remains its own rendering system and architecture.</span></div>
        </div>
      </section>

      <section className="apris-section apris-final">
        <div className="apris-final-card">
          <span className="apris-kicker">CURRENT DEVELOPMENT</span>
          <h2>0.07 · Water Engine</h2>
          <p>APRIS is not finished yet. The current milestone is one step in a larger path toward weather, atmosphere, temporal reconstruction and a future 1.00 photorealistic rendering pipeline.</p>
          <div className="apris-final-pills"><span>0.07 LIVE</span><span>0.08–0.10 ROADMAP</span><span>1.00 TARGET</span></div>
          <Link href="/#projects" className="apris-btn apris-btn-primary">Back to Polycephaly <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <footer className="apris-footer"><span>POLYCEPHALY · APRIS</span><small>Advanced Photorealistic Rendering &amp; Illumination System</small><small>© 2026 Polycephaly</small></footer>
    </main>
  )
}
