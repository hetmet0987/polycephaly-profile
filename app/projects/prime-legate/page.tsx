'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  FileText,
  Flag,
  Globe2,
  Landmark,
  Map,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Swords,
  Target,
  Waypoints,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const stages = [
  ['STAGE 01', 'Sovereign Relationship Graph', 'Deterministic relationship graph from Embassy, Treaty, Timeline and relationship-age evidence.'],
  ['STAGE 02', 'Diplomatic Intelligence Nexus', 'FACT → SIGNAL → ASSESSMENT with bounded interpretation and explicit insufficient-data states.'],
  ['STAGE 03', 'Diplomatic Negotiation Chamber', 'Controlled negotiation workspace with proposals, counter-proposals, clauses and review-bound confirmations.'],
  ['STAGE 04', 'Crisis & De-escalation Protocol', 'Human-led NORMAL → CONCERN → TENSION → CRISIS → DE-ESCALATION → RESOLVED lifecycle.'],
  ['STAGE 05', 'Diplomatic Mission Control', 'Mission orchestration across Treaty, Negotiation, Crisis, Joint Programme and Diplomatic Case records.'],
  ['STAGE 06', 'Treaty Intelligence Engine', 'Explainable Compatibility Index for treaty context, never a probability or ratification authority.'],
  ['STAGE 07', 'Cultural & Protocol Intelligence', 'Server-specific communication protocol profile from deterministic structural evidence.'],
  ['STAGE 08', 'Strategic Foresight & Scenario Engine', 'Conditional scenarios, drivers and stress tests — not a prediction engine.'],
  ['STAGE 09', 'Diplomatic Decision Support', 'Four non-binding posture options: Stabilize, Maintain, Deepen Cooperation, Strategic Review.'],
  ['STAGE 10', 'Foreign Affairs Command Center', 'Capstone operating layer summarizing systems, priority, evidence, drift and staff action queue.'],
]

const releases = [
  ['LR1', 'Foreign Affairs Control Architecture', 'Seven public controls; legacy commands remain backend-only.'],
  ['LR2', 'Embassy & Relations Workspaces', 'Embassy-bound contextual workspaces and stale-context guards.'],
  ['LR3', 'Authorized Relationship Lifecycle', 'Verified evidence, adjacent-stage transitions and two-step confirmation.'],
  ['LR4', 'Contextual Diplomatic Chamber', 'Unified Treaty / Negotiation / Protocol workspace with review-bound confirmations.'],
  ['LR5', 'Mission Operations Workspace', 'Overview / Plan / Evidence / Activity with revalidation and contextual evidence linking.'],
]

const controls = [
  ['/legate', 'Foreign Office landing surface.'],
  ['/embassies', 'Embassy workspace and relationship context.'],
  ['/relations', 'Sovereign Relationship Graph.'],
  ['/diplomacy', 'Contextual diplomatic chamber.'],
  ['/missions', 'LR5 Mission Operations workspace.'],
  ['/intelligence', 'Diplomatic intelligence and evidence.'],
  ['/crisis', 'Crisis & de-escalation protocol.'],
]

const missionViews: Array<[string, string, LucideIcon]> = [
  ['Overview', 'Objective, owner, type, progress, linked records and update count.', Target],
  ['Plan', 'Milestones and completion progress without raw action strings.', Waypoints],
  ['Evidence', 'Current Treaty, Negotiation, Crisis, Joint Event and Diplomatic Case context.', FileText],
  ['Activity', 'Operational updates that keep Mission execution visible.', Activity],
]

export default function PrimeLegatePage() {
  return (
    <main className="project-page legate-page">
      <header className="project-nav legate-nav">
        <Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Projects</Link>
        <span className="project-nav-brand">POLYCEPHALY / PRIME LEGATE</span>
        <span className="project-status legate-status"><span /> LR5 STATIC AUDIT</span>
      </header>

      <section className="legate-hero">
        <div className="legate-starfield" />
        <div className="legate-seal"><Landmark size={30} /><span>LR5</span></div>
        <motion.div className="legate-hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <span className="legate-kicker">FOREIGN AFFAIRS COMMAND / 0.7.0-LR5</span>
          <h1>Prime <em>Legate</em></h1>
          <p className="legate-lead">Diplomacy, intelligence and mission operations for the Prime ecosystem — designed as a Royal Foreign Office rather than a collection of isolated commands.</p>
          <div className="legate-actions">
            <a href="#foreign-office" className="legate-primary">Enter Foreign Office <ArrowRight size={16} /></a>
            <Link href="/#projects" className="legate-secondary">Back to projects</Link>
          </div>
          <div className="legate-chips"><span>Rust</span><span>Discord</span><span>PostgreSQL</span><span>Groq-compatible AI</span><span>8 languages</span></div>
        </motion.div>
        <div className="legate-network-art" aria-hidden="true">
          <span className="node node-a">A</span><span className="node node-b">B</span><span className="node node-c">C</span><span className="node node-d">D</span>
          <i className="wire wire-a" /><i className="wire wire-b" /><i className="wire wire-c" /><i className="wire wire-d" />
          <div className="center-seal"><Globe2 size={32} /><strong>FOREIGN OFFICE</strong><small>Evidence · Diplomacy · Missions</small></div>
        </div>
      </section>

      <section className="legate-section" id="foreign-office">
        <div className="legate-section-heading"><span>01 / FOREIGN AFFAIRS CONTROL ARCHITECTURE</span><h2>Seven public controls. Deep interaction behind them.</h2><p>LR1–LR5 preserve a compact public command surface while moving real workflows into contextual panels and workspaces.</p></div>
        <div className="legate-controls">{controls.map(([cmd, desc], i) => <motion.div key={cmd} className="legate-control-card" whileHover={{ y: -5 }}><span>{String(i + 1).padStart(2, '0')}</span><code>{cmd}</code><p>{desc}</p></motion.div>)}</div>
      </section>

      <section className="legate-section legate-dark-section">
        <div className="legate-section-heading"><span>02 / STAGE 01 → STAGE 10</span><h2>A complete diplomatic capability stack.</h2><p>Prime Legate grows from relationship evidence into a Foreign Affairs Command Center while preserving module ownership and human authority.</p></div>
        <div className="legate-stage-grid">{stages.map(([id, title, desc], i) => <motion.article key={id} className="legate-stage-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .025 }}><div className="legate-stage-no">{id}</div><h3>{title}</h3><p>{desc}</p>{i === 0 && <Network size={18} />}{i === 1 && <BrainCircuit size={18} />}{i === 2 && <Scale size={18} />}{i === 3 && <ShieldCheck size={18} />}{i === 4 && <Target size={18} />}{i === 5 && <FileText size={18} />}{i === 6 && <Sparkles size={18} />}{i === 7 && <Map size={18} />}{i === 8 && <Swords size={18} />}{i === 9 && <Landmark size={18} />}</motion.article>)}</div>
      </section>

      <section className="legate-section">
        <div className="legate-section-heading"><span>03 / EVIDENCE MODEL</span><h2>FACT → SIGNAL → ASSESSMENT.</h2><p>Prime Legate keeps stored facts, deterministic signals and bounded assessments separate. Missing evidence becomes <code>INSUFFICIENT DATA</code> instead of fabricated certainty.</p></div>
        <div className="legate-evidence-flow"><div><strong>FACT</strong><span>Stored authoritative record</span></div><i>→</i><div><strong>SIGNAL</strong><span>Deterministic rule over records</span></div><i>→</i><div><strong>ASSESSMENT</strong><span>Bounded interpretation</span></div></div>
      </section>

      <section className="legate-section legate-dark-section">
        <div className="legate-section-heading"><span>04 / DIPLOMATIC RELATIONSHIP GRAPH</span><h2>Evidence-connected diplomacy.</h2><p>Stage 1 derives relationship strength from authoritative Embassy, Treaty, Diplomatic Timeline and relationship-age evidence. AI does not invent graph nodes, edges or scores.</p></div>
        <div className="legate-graph-card"><div className="graph-node graph-main"><Landmark size={20} /><strong>Embassy</strong><small>Current diplomatic context</small></div><div className="graph-node graph-left"><Flag size={18} /><strong>Kingdom</strong><small>Partner actor</small></div><div className="graph-node graph-right"><FileText size={18} /><strong>Treaty</strong><small>Bound relationship</small></div><div className="graph-node graph-bottom"><Activity size={18} /><strong>Timeline</strong><small>Diplomatic evidence</small></div><i className="graph-line gl1" /><i className="graph-line gl2" /><i className="graph-line gl3" /></div>
      </section>

      <section className="legate-section">
        <div className="legate-section-heading"><span>05 / CRISIS & DE-ESCALATION</span><h2>Human-led escalation control.</h2><p>Stage 4 uses an explicit state machine and requires a human actor plus a reason for each transition.</p></div>
        <div className="crisis-flow"><span>NORMAL</span><i>→</i><span>CONCERN</span><i>→</i><span>TENSION</span><i>→</i><span>CRISIS</span><i>→</i><span>DE-ESCALATION</span><i>→</i><span>RESOLVED</span></div>
        <div className="legate-boundary-row"><div className="boundary-positive"><CheckCircle2 size={16} /> Every transition requires a human actor + reason.</div><div className="boundary-negative"><ShieldCheck size={16} /> No automatic hostility, sanctions, retaliation or agreement signing.</div></div>
      </section>

      <section className="legate-section legate-dark-section">
        <div className="legate-section-heading"><span>06 / LR5 MISSION OPERATIONS WORKSPACE</span><h2>Overview. Plan. Evidence. Activity.</h2><p>LR5 turns <code>/missions</code> into an Embassy-bound operations workspace while preserving Stage 5 as the authoritative backend.</p></div>
        <div className="mission-workspace">{missionViews.map(([title, desc, Icon], i) => { const I = Icon as typeof Target; return <motion.div className="mission-view-card" key={title as string} whileHover={{ y: -5 }}><I size={21} /><span>0{i + 1}</span><h3>{title as string}</h3><p>{desc as string}</p></motion.div> })}</div>
        <div className="mission-safety"><div><BadgeCheck size={18} /><strong>Current-state revalidation</strong><p>Milestone completion, evidence linking and Mission completion re-read the current Embassy-bound Mission before mutation.</p></div><div><Network size={18} /><strong>Contextual evidence</strong><p>Common evidence linking reviews the latest current Treaty / Negotiation / Crisis / Joint Event / Diplomatic Case instead of manual record IDs.</p></div><div><Scale size={18} /><strong>Authority remains distributed</strong><p>Linking a Treaty does not ratify it; linking a Negotiation does not approve it; linking a Crisis does not transition it.</p></div></div>
      </section>

      <section className="legate-section">
        <div className="legate-section-heading"><span>07 / STRATEGIC INTELLIGENCE</span><h2>Foresight without pretending certainty.</h2><p>Stage 8 is explicitly a conditional scenario engine. Stage 9 converts current diplomatic state into four non-binding options for staff review.</p></div>
        <div className="foresight-grid"><div><span>STAGE 08</span><h3>Strategic Foresight</h3><p>Stability · Opportunity · Pressure</p><small>Scenario ≠ prediction · Driver ≠ cause · Pressure ≠ hostility</small></div><div><span>STAGE 09</span><h3>Decision Support</h3><p>Stabilize · Maintain · Deepen Cooperation · Strategic Review</p><small>Recommendation ≠ authorization · option fit ≠ success probability</small></div></div>
      </section>

      <section className="legate-section legate-dark-section">
        <div className="legate-section-heading"><span>08 / LR1 → LR5</span><h2>The UX evolution.</h2><p>Capability growth happened underneath a progressively tighter control architecture.</p></div>
        <div className="legate-release-timeline">{releases.map(([id, title, desc], i) => <div key={id} className={i === releases.length - 1 ? 'current' : ''}><span>{id}</span><strong>{title}</strong><p>{desc}</p></div>)}</div>
      </section>

      <section className="legate-section">
        <div className="legate-section-heading"><span>09 / EIGHT-LANGUAGE FOREIGN OFFICE</span><h2>One operational model, eight language surfaces.</h2></div>
        <div className="legate-languages">{['VI', 'EN', 'JA', 'KO', 'ZH', 'ES', 'FR', 'DE'].map(lang => <span key={lang}>{lang}</span>)}</div>
      </section>

      <section className="legate-section">
        <div className="legate-audit-card"><div className="legate-audit-score"><span>LR5 STATIC AUDIT</span><strong>13 / 13</strong><em>PASS</em></div><div className="legate-audit-copy"><p>Static architecture checks confirm the LR5 module routing, seven-command public surface, contextual mission type, stale guards, evidence linking, completion revalidation and i18n keys. The source audit explicitly notes that Cargo/Rust tooling was unavailable in the generation runtime.</p><div className="audit-points"><span><CheckCircle2 size={14} /> seven public commands</span><span><CheckCircle2 size={14} /> stale guards</span><span><CheckCircle2 size={14} /> no LR5 migration</span><span><CheckCircle2 size={14} /> eight-language index</span></div></div></div>
      </section>

      <section className="legate-section legate-stack-section">
        <div className="legate-section-heading"><span>10 / STACK</span><h2>Built for diplomatic operations.</h2></div><div className="legate-stack">{['Rust 2021', 'Tokio', 'Serenity 0.12', 'SQLx 0.8', 'PostgreSQL', 'Reqwest + Rustls', 'Groq-compatible AI', 'Optional Tavily', 'Tracing', '8-language i18n'].map(item => <span key={item}>{item}</span>)}</div>
      </section>

      <footer className="legate-footer"><div><span>PRIME LEGATE</span><small>LR5 · Mission Operations Workspace</small></div><Link href="/#projects">Back to Polycephaly <ArrowRight size={15} /></Link></footer>
    </main>
  )
}
