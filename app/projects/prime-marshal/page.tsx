'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Command,
  Crosshair,
  Gauge,
  LockKeyhole,
  Network,
  Radar,
  Shield,
  ShieldAlert,
  Swords,
  Truck,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const systemBlocks = [
  ['M1–M5', 'Defense Command & Readiness', 'Defense command, force structure, personnel readiness, capability assessment and strategic readiness fusion.'],
  ['M6–M10', 'Defense Intelligence & Early Warning', 'Intelligence fusion, threat assessment, strategic forecasting, reconnaissance and correlated early warning.'],
  ['M11–M15', 'Operations & Mission Command', 'Operational planning, mission command, exercises, mobilization and crisis response.'],
  ['M16–M20', 'Logistics & Operational Continuity', 'Logistics, sustainment, continuity and the operational support layer.'],
  ['M21–M25', 'Authority, Joint Operations & Audit', 'Rules of engagement, authorization, joint operations and defense audit foundations.'],
  ['M26–M30', 'Simulation, Diagnostics, Analytics & Command Center', 'Simulation, adversarial/red-team validation, health, analytics and command-center orchestration.'],
]

const commandPlanes = [
  ['/marshal', 'Defence command landing surface.'],
  ['/forces', 'Force structure, personnel and capability views.'],
  ['/readiness', 'Readiness status and dimensions.'],
  ['/intelligence', 'Defense intelligence and early-warning views.'],
  ['/operations', 'Mission command and M31 chain-of-command workspace.'],
  ['/logistics', 'Operational sustainment and continuity.'],
  ['/system', 'Language, health and audit controls.'],
]

const readiness: Array<[string, string, LucideIcon]> = [
  ['PERSONNEL', '25%', Users],
  ['CAPABILITY', '25%', Gauge],
  ['RESILIENCE', '20%', Shield],
  ['INTELLIGENCE', '15%', Radar],
  ['COMMAND', '15%', Command],
]

const m31States = [
  ['OPEN', 'Order is active and still inside its acknowledgment window.'],
  ['OVERDUE', 'Deadline has passed while the order remains unclosed.'],
  ['CLOSED', 'Commander closed the order and the record remains auditable.'],
]

const boundaries = [
  ['Direct ban', '0'],
  ['Direct kick', '0'],
  ['Role mutation', '0'],
  ['Permission mutation', '0'],
  ['Channel mutation', '0'],
  ['Mission execution authority', '0'],
]

export default function PrimeMarshalPage() {
  return (
    <main className="marshal-page">
      <header className="project-nav marshal-nav">
        <Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Projects</Link>
        <span className="project-nav-brand">POLYCEPHALY / PRIME MARSHAL</span>
        <span className="project-status marshal-status"><span /> MR9 / M31</span>
      </header>

      <section className="marshal-hero">
        <div className="marshal-grid-lines" aria-hidden="true" />
        <div className="marshal-hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="marshal-kicker">DEFENCE COMMAND SYSTEM / RUST / 8-LANGUAGE CONTROL PLANE</span>
            <h1>Prime <em>Marshal</em></h1>
            <p className="marshal-lead">Defense command, readiness, intelligence, operations and logistics — organized as a structured command system with explicit authority boundaries.</p>
            <div className="marshal-actions">
              <a href="#command-center" className="marshal-primary">Enter Command Center <ArrowRight size={16} /></a>
              <Link href="/#projects" className="marshal-secondary">Back to projects</Link>
            </div>
            <div className="marshal-chips"><span>Rust</span><span>Serenity</span><span>Tokio</span><span>SQLx</span><span>PostgreSQL</span><span>8 languages</span></div>
          </motion.div>
        </div>
        <div className="marshal-command-art" aria-hidden="true">
          <div className="command-radar"><span className="radar-ring r1" /><span className="radar-ring r2" /><span className="radar-ring r3" /><span className="radar-sweep" /></div>
          <div className="command-core"><Command size={34} /><strong>DEFENCE HQ</strong><small>READINESS · INTELLIGENCE · OPERATIONS</small></div>
          <span className="signal s1">M31</span><span className="signal s2">MR9</span><span className="signal s3">AUTH</span>
        </div>
      </section>

      <section className="marshal-section">
        <div className="marshal-heading"><span>01 / COMMAND ARCHITECTURE</span><h2>Seven public control planes. A much deeper system behind them.</h2><p>The public surface stays compact while M1–M30, MR7, MR8 and M31 provide the defence-command capability underneath.</p></div>
        <div className="marshal-controls">{commandPlanes.map(([cmd, desc], i) => <motion.div key={cmd} className="marshal-control-card" whileHover={{ y: -4 }}><span>{String(i + 1).padStart(2, '0')}</span><code>{cmd}</code><p>{desc}</p></motion.div>)}</div>
      </section>

      <section className="marshal-section marshal-dark-section">
        <div className="marshal-heading"><span>02 / M1 → M30</span><h2>Six operational bands build the Defence Command System.</h2><p>The project scales from readiness and intelligence into operations, continuity, authorization, simulation, analytics and command-center orchestration.</p></div>
        <div className="marshal-band-grid">{systemBlocks.map(([id, title, desc], i) => <motion.article key={id} className="marshal-band-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}><span>{id}</span><h3>{title}</h3><p>{desc}</p><div className="marshal-band-icon">{i === 0 && <Shield size={18} />}{i === 1 && <BrainCircuit size={18} />}{i === 2 && <Swords size={18} />}{i === 3 && <Truck size={18} />}{i === 4 && <LockKeyhole size={18} />}{i === 5 && <Gauge size={18} />}</div></motion.article>)}</div>
      </section>

      <section className="marshal-section">
        <div className="marshal-heading"><span>03 / STRATEGIC READINESS</span><h2>A weighted readiness model for command review.</h2><p>The architecture exposes five dimensions used by the Strategic Readiness layer: Personnel, Capability, Resilience, Intelligence and Command.</p></div>
        <div className="readiness-grid">{readiness.map(([label, weight, Icon]) => { const I = Icon as typeof Users; return <motion.div className="readiness-card" key={label} whileHover={{ y: -4 }}><I size={20} /><strong>{label}</strong><span>{weight}</span><div className="readiness-bar"><i style={{ width: weight as string }} /></div></motion.div> })}</div>
      </section>

      <section className="marshal-section marshal-dark-section">
        <div className="marshal-heading"><span>04 / DEFENCE INTELLIGENCE</span><h2>Fusion. Assessment. Forecasting. Early warning.</h2><p>M6–M10 extends the system into intelligence fusion, threat assessment, strategic forecasting, reconnaissance and correlated warning with staff-review boundaries.</p></div>
        <div className="intel-flow"><div><Radar size={19} /><strong>FUSION</strong><span>M6 · Aggregate defence evidence.</span></div><i>→</i><div><ShieldAlert size={19} /><strong>ASSESSMENT</strong><span>M7 · Threat assessment only.</span></div><i>→</i><div><Crosshair size={19} /><strong>FORECAST</strong><span>M8 · Strategic forecast / advisory.</span></div><i>→</i><div><BellRing size={19} /><strong>WARNING</strong><span>M10 · Correlated warning + staff review.</span></div></div>
      </section>

      <section className="marshal-section">
        <div className="marshal-heading"><span>05 / M31 — CHAIN OF COMMAND</span><h2>Issue. Acknowledge. Track. Close.</h2><p>MR9 adds a focused chain-of-command order workflow under <code>/operations</code>. Orders use an <code>ORD-00042</code>-style code, a target role, a directive and a bounded acknowledgment deadline.</p></div>
        <div className="order-board">
          <div className="order-card-main"><div className="order-top"><span>M31</span><strong>ORD-00042</strong><span className="open-pill">OPEN</span></div><div className="order-field"><small>ADDRESSED TO</small><strong>Field Commander</strong></div><div className="order-field"><small>DIRECTIVE</small><p>Conduct a readiness review and return the operational acknowledgment.</p></div><div className="order-metrics"><div><small>DEADLINE</small><strong>60 min</strong></div><div><small>ACKNOWLEDGED</small><strong>04</strong></div><div><small>AUTHORITY</small><strong>COMMANDER</strong></div></div></div>
          <div className="order-states">{m31States.map(([status, desc], i) => <div key={status} className={`order-state state-${i}`}><span>{status}</span><p>{desc}</p></div>)}</div>
        </div>
        <div className="marshal-note"><ClipboardCheck size={17} /><span>Current M31 source records the <strong>raw acknowledgment count</strong>; it does not claim roster-based compliance percentages or live member verification.</span></div>
      </section>

      <section className="marshal-section marshal-dark-section">
        <div className="marshal-heading"><span>06 / AUTHORITY BOUNDARY</span><h2>Command intelligence without arbitrary Discord destruction.</h2><p>The static MR1–MR8 audits preserve explicit boundaries: no direct ban, kick, role mutation, permission mutation, channel mutation or mission-execution authority.</p></div>
        <div className="boundary-grid">{boundaries.map(([label, value]) => <div key={label}><CheckCircle2 size={17} /><span>{label}</span><strong>{value}</strong></div>)}</div>
      </section>

      <section className="marshal-section" id="command-center">
        <div className="marshal-heading"><span>07 / COMMAND CENTER</span><h2>One view for readiness, threat, sustainment and command integrity.</h2><p>M26–M30 culminate in simulation, diagnostics, analytics and a command-center orchestration layer. The site visualizes the architecture rather than claiming a live operational feed.</p></div>
        <div className="command-dashboard">
          <div className="dashboard-title"><Command size={17} /><strong>DEFENCE COMMAND CENTER</strong><span>ADVISORY / READ-ONLY ORCHESTRATION</span></div>
          <div className="dashboard-grid"><div><small>READINESS</small><strong>STRATEGIC</strong><span>Personnel · Capability · Resilience</span></div><div><small>INTELLIGENCE</small><strong>EARLY WARNING</strong><span>Fusion · Threat · Forecast</span></div><div><small>OPERATIONS</small><strong>MISSION LOAD</strong><span>Orders · Exercises · Crisis</span></div><div><small>LOGISTICS</small><strong>CONTINUITY</strong><span>Sustainment · Support</span></div></div>
          <div className="dashboard-network"><div className="hub"><Network size={23} /><strong>MARSHAL</strong></div><span className="peer p1">NEXUS</span><span className="peer p2">CHANCELLOR</span><span className="peer p3">LEGATE</span><i className="peer-line l1" /><i className="peer-line l2" /><i className="peer-line l3" /></div>
        </div>
      </section>

      <section className="marshal-section">
        <div className="marshal-heading"><span>08 / REWORK EVOLUTION</span><h2>MR7 → MR8 → MR9.</h2><p>MR7 is the cross-module integration and adversarial validation checkpoint; MR8 retires legacy runtime paths; MR9 adds the M31 chain-of-command order and acknowledgment layer.</p></div>
        <div className="marshal-release-row"><div><span>MR7</span><strong>Integration + Adversarial Validation</strong><p>Cross-module integration checks and adversarial scenarios.</p></div><div><span>MR8</span><strong>Legacy Cleanup</strong><p>Legacy runtime/public authority paths are retired while historical database tables are preserved.</p></div><div className="current"><span>MR9 / M31</span><strong>Chain of Command</strong><p>Order issuance, bounded deadlines, acknowledgment records and order state tracking.</p></div></div>
      </section>

      <section className="marshal-section marshal-dark-section">
        <div className="marshal-heading"><span>09 / LOCALIZATION + STACK</span><h2>Compact, multi-language and backend-oriented.</h2><p>The source provides an 8-language i18n foundation and a Rust-based persistence/control stack.</p></div>
        <div className="marshal-languages">{['VI', 'EN', 'JA', 'KO', 'ZH', 'ES', 'FR', 'DE'].map(lang => <span key={lang}>{lang}</span>)}</div>
        <div className="marshal-stack"><span>Rust 2021</span><span>Tokio</span><span>Serenity 0.12</span><span>SQLx 0.8</span><span>PostgreSQL</span><span>Reqwest / Rustls</span><span>Tracing</span></div>
      </section>

      <section className="marshal-section">
        <div className="marshal-heading"><span>10 / AUDIT FOOTPRINT</span><h2>What the static audits demonstrate.</h2><p>MR1–MR8 audit artifacts cover command scope, authority boundaries, module presence, guild-only registration, legacy cleanup and adversarial validation. MR9/M31 is presented separately as the current order-workflow feature.</p></div>
        <div className="audit-matrix"><div><strong>MR1</strong><span>7 control planes · 8 locales · destructive paths: 0</span></div><div><strong>MR2</strong><span>5 intelligence subcommands · operational execution authority: 0</span></div><div><strong>MR3–MR6</strong><span>M11–M30 present · guild-only markers retained · destructive tokens: 0</span></div><div><strong>MR7</strong><span>Integration command · adversarial command · scenario count: 6</span></div><div><strong>MR8</strong><span>Legacy runtime disabled · destructive delete/permission/drop/truncate tokens: 0</span></div><div className="audit-current"><strong>MR9</strong><span>M31 order / acknowledge / orders workflow added in current source.</span></div></div>
      </section>

      <footer className="marshal-footer"><div><strong>PRIME MARSHAL</strong><small>Defence Command System · MR9 / M31</small></div><Link href="/#projects">Back to Polycephaly <ArrowRight size={15} /></Link></footer>
    </main>
  )
}
