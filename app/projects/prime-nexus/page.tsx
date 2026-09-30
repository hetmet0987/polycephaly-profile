'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Database,
  Gauge,
  GitBranch,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Siren,
  Sparkles,
  Timer,
  Workflow,
} from 'lucide-react'

const vectors = [
  'MESSAGE_FLOOD',
  'MENTION_FLOOD',
  'JOIN_RAID',
  'CHANNEL_CREATION_RAID',
  'ROLE_CREATION_RAID',
  'PERMISSION_TAMPERING',
]

const states = ['NORMAL', 'WATCH', 'ATTACK', 'CRITICAL', 'RECOVERY']

const reworkMap = [
  ['R10', 'N1–N5', 'Core Protection & Behavioral Security'],
  ['R11', 'N6–N10', 'Identity, Message & Structure Integrity'],
  ['R12', 'N11–N15', 'Integration, Invite & Onboarding Security'],
  ['R13', 'N16–N20', 'Impersonation, Content, Voice Metadata & Threat Timeline'],
  ['R14', 'N21–N25', 'Investigation, Forensics, Watchlists, Alert Routing & False Positive Control'],
  ['R15', 'N26–N30', 'Automation Policy, Recovery, Diagnostics, Analytics & Operations Console'],
  ['R16', 'Control', '12-control workspaces + Dead Land / Nemesis bridge'],
  ['R17', 'i18n', 'Interactive control + eight-language UI'],
  ['R18', 'Live', 'Living Security Control System'],
  ['R19', 'Adaptive', 'Multi-window detection & active response engine'],
  ['R20', 'Sovereign', 'Deterministic anti-raid core + AI Tactical Intelligence'],
]

const auditItems = [
  'version_r20', 'message_vector_authoritative', 'channel_vector_authoritative',
  'role_vector_authoritative', 'permission_vector_authoritative', 'join_vector_authoritative',
  'coordinated_fusion', 'rolling_windows', 'raid_state_machine', 'same_actor_correlation',
  'visible_alert', 'visible_lab_suppression', 'incident_audit', 'lab_bridge', 'ai_async',
  'ai_latency_budget', 'ai_uses_r19_intelligence', 'ai_uses_trust', 'ai_cannot_relabel_prompt',
  'ai_degraded_states', 'actor_only_autonomous_containment', 'no_r20_ban_kick',
  'no_r20_guild_autolock', 'lab_auto_mutation_suppressed', 'persistent_raid_events',
  'persistent_ai_assessments', 'live_ui', 'lab_reset_r20', 'threshold_ui_r20',
  'vector_test_message_not_channel', 'vector_test_channel_not_message', 'vector_test_coordinated',
  'twelve_public_controls_preserved', 'eight_language_ui_preserved', 'docs', 'verify_script',
  'bridge_metrics_accounting',
]

const pipeline: Array<[string, LucideIcon]> = [
  ['Detector', Radar],
  ['Signal', Siren],
  ['Evidence', Database],
  ['Correlation / Fusion', GitBranch],
  ['Consensus', ShieldCheck],
  ['Decision Engine', Workflow],
  ['N26 Automation Policy', LockKeyhole],
  ['Safety Gate', CheckCircle2],
  ['Action Executor', Gauge],
]

export default function PrimeNexusPage() {
  return (
    <main className="project-page nexus-page">
      <header className="project-nav">
        <Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Projects</Link>
        <span className="project-nav-brand">POLYCEPHALY / PRIME NEXUS</span>
        <span className="project-status"><span /> R20 COMPLETE</span>
      </header>

      <section className="project-hero">
        <div className="project-hero-glow" />
        <div className="project-hero-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="eyebrow">PROJECT 01 / SECURITY SYSTEM</span>
            <h1>Prime <em>Nexus</em></h1>
            <p className="project-kicker">Sovereign Anti-Raid Core · AI Tactical Intelligence · Autonomous Defense Engine</p>
            <p className="project-lead">Prime Nexus R20 makes deterministic real-time anti-raid the primary defense path while retaining N1–N50 as intelligence and investigation layers.</p>
            <div className="project-meta-row">
              <span>C++ / Rust architecture</span><span>Discord</span><span>AI</span><span>PostgreSQL</span>
            </div>
            <div className="hero-project-actions">
              <a href="#architecture" className="primary-btn">Explore architecture <ChevronRight size={17} /></a>
              <a href="#verification" className="secondary-btn">R20 verification <CheckCircle2 size={16} /></a>
            </div>
          </motion.div>
          <motion.div className="nexus-orb" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .7 }}>
            <div className="nexus-core"><ShieldCheck size={72} /></div>
            <div className="orb-ring ring-one" /><div className="orb-ring ring-two" /><div className="orb-ring ring-three" />
            <span className="orb-label orb-label-top">R20</span><span className="orb-label orb-label-bottom">SOVEREIGN CORE</span>
          </motion.div>
        </div>
      </section>

      <section className="project-section" id="architecture">
        <div className="section-heading"><span className="eyebrow">01 / ARCHITECTURE</span><h2>Defense pipeline.</h2><p>The live architecture documented by the R20 project files.</p></div>
        <div className="pipeline">
          {pipeline.map(([label, Icon], i) => (
            <motion.div className="pipeline-step" key={String(label)} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}>
              <div className="pipeline-icon"><Icon size={19} /></div><span>{String(label)}</span>{i < pipeline.length - 1 && <ArrowUpRight className="pipeline-arrow" size={14} />}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="project-section nexus-split">
        <div>
          <span className="eyebrow">02 / SOVEREIGN ANTI-RAID CORE</span>
          <h2>Raw vectors stay authoritative.</h2>
          <p>R20 classifies the raw Discord event type directly. Heuristic fusion cannot relabel a message event as channel pressure.</p>
          <div className="vector-grid">{vectors.map(v => <span key={v}>{v}</span>)}</div>
        </div>
        <div className="state-card">
          <div className="state-card-head"><Radar size={18} /><span>RAID STATE MACHINE</span></div>
          <div className="state-flow">{states.map((state, i) => <div key={state} className="state-node"><span>{state}</span>{i < states.length - 1 && <ChevronRight size={14} />}</div>)}</div>
          <small>Multiple active vectors can become <strong>COORDINATED_RAID</strong>.</small>
        </div>
      </section>

      <section className="project-section threshold-section">
        <div className="section-heading"><span className="eyebrow">03 / DETERMINISTIC WINDOWS</span><h2>High-sensitivity thresholds.</h2><p>R20 uses short rolling windows for high-sensitivity detection while preserving separate LOW / BALANCED / ADAPTIVE profiles.</p></div>
        <div className="threshold-grid">
          {[
            ['Messages', '6 / 3s', '10 / 3s', '18 / 3s'],
            ['Mentions', '4 / 3s', '7 / 3s', '12 / 3s'],
            ['Channels', '2 / 10s', '4 / 10s', '7 / 10s'],
            ['Roles', '2 / 15s', '4 / 15s', '7 / 15s'],
            ['Joins', '4 / 10s', '8 / 10s', '15 / 10s'],
            ['Permissions', '2 / 15s', '4 / 15s', '7 / 15s'],
          ].map(([name, watch, attack, critical]) => <div className="threshold-card" key={name}><strong>{name}</strong><div><span>WATCH <b>{watch}</b></span><span>ATTACK <b>{attack}</b></span><span>CRITICAL <b>{critical}</b></span></div></div>)}
        </div>
      </section>

      <section className="project-section ai-defense-grid">
        <div className="feature-panel">
          <span className="eyebrow">04 / AI TACTICAL INTELLIGENCE</span><h2>AI enriches. It does not own detection.</h2>
          <p>AI runs asynchronously after deterministic ATTACK / CRITICAL transitions and receives the authoritative vector/state/rates, R19 intelligence, operating mode and actor trust evidence when available.</p>
          <div className="can-grid"><div><span className="can-label">AI MAY</span><ul><li>Summarize the campaign</li><li>Forecast the next likely vector</li><li>Recommend the least disruptive defense</li></ul></div><div><span className="can-label no">AI MAY NOT</span><ul><li>Rewrite the authoritative vector</li><li>Claim an action executed</li><li>Directly mutate Discord</li><li>Block deterministic detection</li></ul></div></div>
        </div>
        <div className="latency-panel"><Bot size={22} /><span>TACTICAL CALL</span><strong>≤ 1500 ms</strong><small>Timeout / provider / parse failure becomes a visible DEGRADED AI state while the anti-raid core continues.</small></div>
      </section>

      <section className="project-section safety-section">
        <div className="section-heading"><span className="eyebrow">05 / AUTONOMOUS DEFENSE</span><h2>Containment stays bounded.</h2><p>R20 can route deterministic CRITICAL same-actor message/mention raids into the existing central ActionExecutor.</p></div>
        <div className="safety-grid">
          {['Actor-level reversible timeout only','No R20 automatic ban / kick','No guild-wide permission mutation','No automatic guild lockdown','Operations workspace must be enabled','Containment mode + Automation Policy must permit action','Whitelist / staff check at execution boundary','Dead Land automatic mutation remains suppressed'].map((item, i) => <div className="safety-item" key={item}><CheckCircle2 size={17} /><span>{item}</span></div>)}
        </div>
      </section>

      <section className="project-section" id="verification">
        <div className="verification-card">
          <div className="verification-main"><span className="eyebrow">06 / STATIC VERIFICATION</span><div className="verification-score"><strong>48</strong><span>/ 48 PASS</span></div><p>R20 static audit records 48 passing checks across the sovereign anti-raid core, AI boundaries, safety gates, persistence, UI, compatibility and verification tooling.</p><small>Source note: the supplied R20 audit identifies this as static verification; local <code>R20_VERIFY.ps1</code> runs <code>cargo fmt --check</code>, <code>cargo test r20_antiraid</code>, <code>cargo check</code> and <code>cargo build</code>.</small></div>
          <div className="audit-grid">{auditItems.map((item, i) => <div key={item}><CheckCircle2 size={13} /> <span>{String(i + 1).padStart(2, '0')} · {item}</span></div>)}</div>
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading"><span className="eyebrow">07 / REWORK JOURNEY</span><h2>R10 → R20.</h2><p>Prime Nexus evolved through multiple rework stages before reaching the Sovereign Anti-Raid Core.</p></div>
        <div className="rework-timeline">{reworkMap.map(([rev, scope, desc], i) => <motion.div key={rev} className={`rework-item ${rev === 'R20' ? 'current' : ''}`} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .025 }}><div className="rework-marker"><span>{rev}</span></div><div><strong>{scope}</strong><p>{desc}</p></div></motion.div>)}</div>
      </section>

      <footer className="project-footer"><div><span>PRIME NEXUS</span><small>R20 · Sovereign Anti-Raid Core</small></div><Link href="/#projects">Back to Polycephaly <ArrowLeft size={15} /></Link></footer>
    </main>
  )
}
