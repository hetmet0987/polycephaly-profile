'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, CircleAlert, Clock3,
  Crown, Database, Eye, GitBranch, Globe2, Network, Scale, ShieldCheck,
  Sparkles, Users, Workflow, XCircle
} from 'lucide-react'

const stages: Array<[string, string, string]> = [
  ['RR1', 'Observation Fabric', 'Operational observation foundation.'],
  ['RR2', 'Digital Twin / Temporal State', 'Server state and temporal baseline.'],
  ['RR3', 'Situation Awareness', 'Correlation and live situation understanding.'],
  ['RR4', 'Executive Advisor', 'Executive recommendations grounded in evidence.'],
  ['RR5', 'Briefings & Attention', 'Proactive briefings and ranked attention.'],
  ['RR6', 'Memory & Governance', 'Operational memory, decisions and outcomes.'],
  ['RR7', 'Chancellor Bridge', 'Context-only cross-bot integration.'],
  ['RR8', 'Executive Intelligence', 'Ranked, deduplicated executive attention.'],
  ['RR9', 'Decision Council', 'Human decision records + 8-language UX.'],
  ['RR10', 'Government Coordination', 'Fresh coordination across Chancellor, Nexus and Marshal.'],
  ['RR11', 'Sovereign Executive', 'Completion stage: UNDERSTAND → DECIDE → COORDINATE → GOVERN.'],
]

const council: Array<[string, LucideIcon, string, string]> = [
  ['Kingdom State', Globe2, 'Situation confidence + network freshness', 'CURRENT'],
  ['Executive Attention', Sparkles, 'Ranked and deduplicated matters', 'TOP 5'],
  ['Decision Council', Scale, 'Human-adopted decision records', 'HUMAN'],
  ['Government Coordination', Network, 'Chancellor / Nexus / Marshal context', 'FRESHNESS'],
  ['Briefing', Clock3, 'Live, change, daily and weekly views', 'BRIEF'],
  ['Evidence', Database, 'Evidence references and provenance', 'TRACE'],
  ['Memory', GitBranch, 'Operational continuity and outcomes', 'MEMORY'],
  ['Language', Globe2, 'Per-user executive interface', '8 LANG'],
]

const auditChecks = [
  'Command surface preserved: /regent /briefing /bridge',
  'RR11 Sovereign panel wired',
  'KNOWN state',
  'LIKELY state',
  'UNCERTAIN state',
  'STALE state',
  'UNAVAILABLE state',
  'RR8 executive attention preserved',
  'RR9 human decisions preserved',
  'RR10 government coordination preserved',
  '8-language RR11 catalog',
  'Language selector preserved',
  'Bridge execute = false',
  'Bridge mutate = false',
  'DROP TABLE count = 0',
  'TRUNCATE count = 0',
]

const epistemic = [
  ['KNOWN', 'Current evidence is directly verified.', 'known'],
  ['LIKELY', 'Enough current domains agree for a strong but incomplete view.', 'likely'],
  ['UNCERTAIN', 'Current evidence is incomplete.', 'uncertain'],
  ['STALE', 'A source exists but is no longer fresh.', 'stale'],
  ['UNAVAILABLE', 'Current state cannot be established from the source.', 'unavailable'],
]

export default function PrimeRegentPage() {
  return (
    <main className="project-page regent-page">
      <header className="project-nav regent-nav">
        <Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Projects</Link>
        <span className="project-nav-brand">POLYCEPHALY / PRIME REGENT</span>
        <span className="project-status regent-status"><span /> RR11 STATIC AUDIT</span>
      </header>

      <section className="regent-hero">
        <div className="regent-hero-glow" />
        <div className="regent-hero-orbit orbit-one" />
        <div className="regent-hero-orbit orbit-two" />
        <motion.div className="regent-crown" initial={{ opacity: 0, scale: .7, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9 }}>
          <Crown size={42} />
          <span>RR11</span>
        </motion.div>
        <motion.div className="regent-hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }}>
          <span className="regent-kicker">SOVEREIGN EXECUTIVE SYSTEM / 1.2.0-RR11</span>
          <h1>Prime <em>Regent</em></h1>
          <p className="regent-lead">Executive intelligence for the Prime ecosystem — built to understand, decide, coordinate and govern without becoming an autonomous authority.</p>
          <div className="regent-actions">
            <a href="#architecture" className="regent-primary">Explore system <ArrowRight size={16} /></a>
            <Link href="/#projects" className="regent-secondary">Back to projects</Link>
          </div>
          <div className="regent-chips"><span>Rust</span><span>Discord</span><span>PostgreSQL</span><span>8 languages</span></div>
        </motion.div>
      </section>

      <section className="regent-section" id="architecture">
        <div className="regent-section-heading"><span>01 / EXECUTIVE ARCHITECTURE</span><h2>Understand → Decide → Coordinate → Govern.</h2><p>RR11 is the completion stage for Prime Regent Core. It turns the compact executive surface into a continuity layer built from RR1–RR10.</p></div>
        <div className="regent-flow">
          {[
            ['UNDERSTAND', Eye, 'Observe state, evidence and situation.'],
            ['DECIDE', Scale, 'Present options and record human decisions.'],
            ['COORDINATE', Network, 'Share fresh context across the Prime network.'],
            ['GOVERN', Crown, 'Signal intervention for review — never auto-execute it.'],
          ].map(([label, Icon, text]) => {
            const I = Icon as LucideIcon
            return <motion.div className="regent-flow-node" key={label as string} whileHover={{ y: -6 }}><I size={25} /><strong>{label as string}</strong><p>{text as string}</p></motion.div>
          })}
        </div>
      </section>

      <section className="regent-section regent-dark-section">
        <div className="regent-section-heading"><span>02 / SOVEREIGN COUNCIL</span><h2>One executive surface. Eight contextual controls.</h2><p>The registered slash surface remains <code>/regent</code>, <code>/briefing</code> and <code>/bridge</code>; the main Council exposes the operational context through panels.</p></div>
        <div className="regent-council-grid">
          {council.map(([title, Icon, desc, badge], i) => <motion.article key={title} className="regent-council-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .035 }}><div className="regent-card-icon"><Icon size={19} /></div><div><span>{badge}</span><h3>{title}</h3><p>{desc}</p></div></motion.article>)}
        </div>
      </section>

      <section className="regent-section">
        <div className="regent-section-heading"><span>03 / EXECUTIVE CONTINUITY</span><h2>State is only as trustworthy as its evidence.</h2><p>RR11 introduces an explicit epistemic model. Old cross-bot state is never silently presented as current.</p></div>
        <div className="epistemic-grid">
          {epistemic.map(([label, desc, cls]) => <motion.div key={label} className={`epistemic-card ${cls}`} whileHover={{ y: -4 }}><span>{label}</span><p>{desc}</p></motion.div>)}
        </div>
        <div className="regent-continuity-note"><ShieldCheck size={20} /><div><strong>Freshness first.</strong><p>Chancellor freshness comes through RR7/RR10. Nexus and Marshal remain WAITING / STALE / OFFLINE / UNAVAILABLE unless real peer evidence exists.</p></div></div>
      </section>

      <section className="regent-section regent-dark-section">
        <div className="regent-section-heading"><span>04 / PRIME GOVERNMENT NETWORK</span><h2>Coordination without delegated authority.</h2></div>
        <div className="network-map">
          <div className="network-regent"><Crown size={28} /><strong>Prime Regent</strong><span>Executive context</span></div>
          <div className="network-lines"><i /><i /><i /></div>
          <div className="network-peers"><div><Crown size={18} /><strong>Chancellor</strong><span>Government</span></div><div><ShieldCheck size={18} /><strong>Nexus</strong><span>Security</span></div><div><Users size={18} /><strong>Marshal</strong><span>Coordination</span></div></div>
        </div>
        <div className="freshness-row"><span>ONLINE</span><span>STALE</span><span>OFFLINE</span><span>WAITING</span><span>UNAVAILABLE</span></div>
      </section>

      <section className="regent-section">
        <div className="regent-section-heading"><span>05 / EXECUTIVE ATTENTION</span><h2>What actually deserves attention?</h2><p>RR8 ranks and deduplicates executive matters, with the Council exposing the highest-priority context instead of flooding the operator with raw signals.</p></div>
        <div className="attention-shell"><div className="attention-header"><span>EXECUTIVE ATTENTION</span><strong>MAX 5 MATTERS</strong></div>{['Critical situation requires review','Chancellor coordination context is fresh','Human decision awaiting record','Operational briefing changed','Evidence chain needs inspection'].map((item, i) => <div className="attention-row" key={item}><b>{String(i + 1).padStart(2, '0')}</b><span>{item}</span><em>{i === 0 ? 'URGENT' : i < 3 ? 'HIGH' : 'NORMAL'}</em></div>)}</div>
      </section>

      <section className="regent-section regent-dark-section">
        <div className="regent-section-heading"><span>06 / HUMAN DECISION LAYER</span><h2>Recommendations stop at the decision boundary.</h2></div>
        <div className="decision-layout"><div className="decision-panel"><div className="decision-head"><Scale size={18} /><span>DECISION COUNCIL</span><small>HUMAN-ADOPTED</small></div><div className="decision-option"><span>OPTION A</span><strong>Review executive intervention</strong><p>Expected effect: clarify current situation and evidence.</p><i>Risk: LOW · Reversibility: HIGH</i></div><div className="decision-option"><span>OPTION B</span><strong>Wait for additional evidence</strong><p>Expected effect: increase confidence before intervention.</p><i>Risk: LOW · Reversibility: HIGH</i></div></div><div className="decision-boundary"><BrainCircuit size={26} /><span>AUTHORITY BOUNDARY</span><strong>Human decision required</strong><p>Regent can observe, explain, recommend, record human decisions and share coordination context. It does not execute authority through the Bridge.</p><div className="boundary-badges"><span><CheckCircle2 size={14} /> Recommend</span><span><CheckCircle2 size={14} /> Record</span><span><XCircle size={14} /> Execute</span><span><XCircle size={14} /> Mutate guild</span></div></div></div>
      </section>

      <section className="regent-section">
        <div className="regent-section-heading"><span>07 / RR1 → RR11</span><h2>Eleven iterations. One executive continuity.</h2></div>
        <div className="regent-timeline">{stages.map(([id, title, desc], i) => <div className={`regent-stage ${i === stages.length - 1 ? 'current' : ''}`} key={id}><span>{id}</span><strong>{title}</strong><p>{desc}</p></div>)}</div>
      </section>

      <section className="regent-section regent-audit-section">
        <div className="regent-audit-card"><div className="regent-audit-main"><span>RR11 STATIC AUDIT</span><h2>PASS<br /><em>BOUNDARIES</em></h2><p>Static audit data records the RR11 wiring and constitutional boundaries. Cargo verification is not claimed because Rust/Cargo was unavailable in the generation runtime.</p><div className="regent-audit-status"><CheckCircle2 size={16} /> STATIC AUDIT DATA PRESENT</div></div><div className="regent-audit-list">{auditChecks.map(check => <div key={check}><CheckCircle2 size={13} /> {check}</div>)}</div></div>
      </section>

      <section className="regent-section regent-tech-section"><div className="regent-section-heading"><span>08 / STACK</span><h2>Built for the Prime executive layer.</h2></div><div className="regent-tech-pills"><span>Rust</span><span>Discord Gateway</span><span>PostgreSQL</span><span>8-language i18n</span><span>RR1–RR11</span><span>Needs-First UX</span><span>Evidence / Freshness</span></div></section>

      <footer className="regent-footer"><div><span>PRIME REGENT</span><small>RR11 · Sovereign Executive System</small></div><Link href="/#projects">Back to Polycephaly <ArrowUpRightIcon /></Link></footer>
    </main>
  )
}

function ArrowUpRightIcon() { return <ArrowRight size={15} /> }
