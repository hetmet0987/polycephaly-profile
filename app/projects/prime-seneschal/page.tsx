"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Crown,
  Database,
  FileCheck2,
  GitBranch,
  Layers,
  LockKeyhole,
  Network,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const stages = [
  ['S0', 'Discord Census', 'Observed-state discovery without mutation.'],
  ['S0.5', 'Administrative Codex', 'CONFIRMED / PROPOSED foundation and review gates.'],
  ['S0.7', 'Authority & Jurisdiction', 'Authority graph separated from Discord hierarchy.'],
  ['S0.8', 'Permission Blueprint', 'Dry-run VIEW_CHANNEL policy compiler; no executable changes.'],
  ['S1', 'Administrative Intelligence', 'Unified kingdom intelligence and readiness.'],
  ['S2', 'Structure Management', 'Reviewable plans, snapshots, verification and rollback foundations.'],
  ['S3', 'Safe Permission Executor', 'Owner-confirmed exact diffs with snapshot, verify and rollback.'],
  ['S4', 'Institution Governance', 'Ownership, governance roles, conflicts and review gates.'],
  ['S5', 'Dynamic Access', 'Temporary access, TTL and restoration contracts.'],
  ['S5.1 / S5.2', 'Deployment Governance', 'Waves, preflight, approval, exact diff and rollback hardening.'],
  ['S6', 'Drift & Compliance', 'Detect drift, classify findings and build reconciliation plans.'],
  ['S7', 'Permission Memory', 'Sovereign automation, canonical permission memory and delegation packages.'],
  ['S8', 'Policy Simulation', 'Effective access matrix, lockout checks and readiness governance.'],
  ['S9', 'Deployment Readiness', 'Freshness validation, rollout waves and sealed activation gate.'],
  ['S10', 'Controlled Deployment', 'Six ordered waves with snapshot, verify and rollback.'],
  ['S10.7', 'Canonical Permission Plan', 'Permission memory becomes the deployment contract.'],
  ['S10.8', 'Fast Deployment Engine', 'Bulk read, precompiled diff and live deployment progress.'],
  ['S10.9', 'Channel Architecture Exporter', 'Fresh category/channel topology export for planning.'],
  ['S10.10', 'Channel-Aware Canonical Memory', 'Category inheritance plus exact channel exceptions.'],
]

const policies = [
  ['COMMUNITY_HUB', 'PUBLIC_VERIFIED', 'PUBLIC_VERIFIED'],
  ['WAR_ROOM_PRIVATE', 'DEFENCE_ALL', 'DEFENCE_ALL'],
  ['CHANCELLOR_OFFICE_PRIVATE', 'GOVERNMENT', 'GOVERNMENT'],
  ['SUPREME_COURT_PRIVATE', 'JUDICIARY, SOVEREIGN', 'JUDICIARY, SOVEREIGN'],
  ['EMBASSY_PUBLIC_INFO', 'PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN', 'PUBLIC_VERIFIED, FOREIGN_AFFAIRS, SOVEREIGN'],
  ['CROWN_PROSECUTION_PRIVATE', 'PROSECUTION, SOVEREIGN', 'PROSECUTION, SOVEREIGN'],
]

const exceptions = [
  'server-rules → SERVER_RULES_PUBLIC',
  'verify-access → VERIFY_ACCESS',
  'create-ticket → CREATE_TICKET_INTERACTIVE',
  'prime-staff → PRIME_STAFF_PRIVATE',
  'embassy-ticket → EMBASSY_TICKET',
  'royal-codex → ROYAL_CODEX_PUBLIC',
]

export default function PrimeSeneschalPage() {
  return (
    <main className="project-page" style={{ background: '#050706' }}>
      <div className="project-topbar"><Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Back to Projects</Link><span className="project-mark">PRIME SENESCHAL</span></div>

      <section className="sen-stage" style={{ width: 'min(1160px, calc(100% - 32px))', margin: '105px auto 60px' }}>
        <div className="sen-hero-grid">
          <div>
            <span className="sen-kicker">Royal Administrative Authority · S10.10</span>
            <h1 className="sen-title">PRIME<br />SENESCHAL</h1>
            <p className="sen-subtitle">Channel-Aware Canonical Permission Memory</p>
            <p className="sen-copy">A governance system that turns observed Discord structure into reviewable administrative knowledge, simulated access policy, and controlled deployment contracts — with <span className="sen-accent">category visibility as the authoritative baseline</span>.</p>
            <div className="hero-actions"><a href="#memory" className="primary-btn" style={{ background: 'linear-gradient(135deg,#1d6b4b,#103627)' }}>Enter Administrative Codex <ArrowDown size={16} /></a><a href="#deployment" className="secondary-btn">Explore Deployment <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="sen-orbit"><div className="sen-core"><div><Crown size={30} color="#d9bb63" /><strong>S10.10</strong><small>CANONICAL MEMORY</small></div></div></div>
        </div>
        <div className="sen-stat-grid">
          <div className="sen-stat"><strong>106</strong><span>Roles observed</span></div>
          <div className="sen-stat"><strong>25</strong><span>Categories</span></div>
          <div className="sen-stat"><strong>115</strong><span>Channels</span></div>
          <div className="sen-stat"><strong>24/24</strong><span>Static policy checks</span></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">01 / CONTROL SURFACE</span><h2>Small public surface. Deep administrative system.</h2><p>Prime Seneschal keeps the public command layer intentionally compact.</p></div>
        <div className="sen-grid-3">
          {[
            ['/seneschal', 'Control Center', 'Contextual workspace for Codex, intelligence, blueprint, simulation and deployment.'],
            ['/census', 'Census Workflow', 'scan / status / export for observed Discord structure.'],
            ['/seneschal-help', 'Operator Guide', 'Help and workflow guidance without adding command bloat.'],
          ].map(([cmd,title,desc]) => <motion.div key={cmd} className="sen-panel" whileHover={{ y: -4 }}><div className="sen-chip"><Settings2 size={12} /> {cmd}</div><h3>{title}</h3><p>{desc}</p></motion.div>)}
        </div>
      </section>

      <section className="section" id="codex">
        <div className="section-heading"><span className="eyebrow">02 / ADMINISTRATIVE CODEX</span><h2>Observed structure is not automatically law.</h2><p>S0 → S0.8 establishes evidence, confidence and gates before permission compilation.</p></div>
        <div className="sen-grid-2">
          <div className="sen-panel"><div className="sen-chip"><BookOpen size={12} /> CONFIDENCE STATES</div><h3>CONFIRMED vs PROPOSED</h3><p><strong style={{ color: '#9ff0bf' }}>CONFIRMED</strong> is explicitly approved administrative truth. <strong style={{ color: '#d9bb63' }}>PROPOSED</strong> is inferred from current names/structure and must be reviewed before authority.</p><div className="sen-boundary"><div className="allow"><strong>Permission effect</strong><p>Blocked until the policy compiler and execution gates are intentionally enabled.</p></div><div className="deny"><strong>Observed state</strong><p>Not treated as the future Administrative Codex.</p></div></div></div>
          <div className="sen-panel"><div className="sen-chip"><ShieldCheck size={12} /> SAFETY CONTRACT</div><h3>Decorative headers stay decorative.</h3><p>The source Codex explicitly ignores roles formatted like <code>━━━━〔 ... 〕━━━━</code> as permission authorities. They remain grouping metadata with empty permissions.</p><div style={{ marginTop: 18 }}><span className="sen-chip">GROUP_HEADER excluded</span><span className="sen-chip">DRY_RUN_ONLY</span><span className="sen-chip">APPLY_ENABLED = false</span></div></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">03 / CAPABILITY LINEAGE</span><h2>S0 → S10.10</h2><p>From census to canonical permission memory.</p></div>
        <div className="sen-lineage">
          {[['OBSERVE','S0'],['CLASSIFY','S0.5–S0.8'],['PLAN','S1–S5.2'],['SIMULATE','S6–S8']].map(([a,b]) => <div key={a} className="sen-node"><strong>{a}</strong><span>{b}</span></div>)}
        </div>
        <div className="sen-steps" style={{ marginTop: 16 }}>
          {[['S9','READY','Freshness + readiness'],['S10','DEPLOY','Six ordered waves'],['S10.7','MEMORY','Canonical permission plan'],['S10.8','FAST','Bulk read + diff'],['S10.9','EXPORT','Live channel map'],['S10.10','SYNC','Category + exceptions']].map(([s,t,d]) => <div className="sen-step" key={s}><b>{s}</b><strong>{t}</strong><span>{d}</span></div>)}
        </div>
      </section>

      <section className="section" id="memory">
        <div className="section-heading"><span className="eyebrow">04 / CANONICAL PERMISSION MEMORY</span><h2>Category-first. Exception-aware.</h2><p>S10.10 uses category visibility as the authoritative baseline; channels inherit unless their function requires an explicit exception.</p></div>
        <div className="sen-stage" style={{ padding: 28 }}>
          <div className="sen-grid-3">
            <div className="sen-stat"><strong>89</strong><span>Category-synchronized channels</span></div>
            <div className="sen-stat"><strong>26</strong><span>Explicit channel exceptions</span></div>
            <div className="sen-stat"><strong>0</strong><span>Inherited channels with overwrites</span></div>
          </div>
          <div className="sen-panel" style={{ marginTop: 16 }}><div className="sen-chip"><Network size={12} /> MEMORY GRAPH</div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 14 }}><div className="sen-node"><strong>CATEGORY</strong><span>Base visibility</span></div><div className="sen-node"><strong>INHERIT</strong><span>Channel follows parent</span></div><div className="sen-node"><strong>EXCEPTION</strong><span>Exact function override</span></div></div></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">05 / POLICY MATRIX</span><h2>Real policy classes from S10.10.</h2><p>Selected examples from the canonical memory; the full source contains 25 category policies and 26 exact channel exceptions.</p></div>
        <div className="sen-panel">
          {policies.map(([name, view, chat]) => <div className="sen-role" key={name}><span>{name}</span><code>VIEW: {view}<br />CHAT: {chat}</code></div>)}
        </div>
      </section>

      <section className="section" id="deployment">
        <div className="section-heading"><span className="eyebrow">06 / CONTROLLED DEPLOYMENT</span><h2>Simulate → approve → deploy → verify.</h2><p>S8–S10 deliberately separate policy simulation from mutation and bind live deployment to gates.</p></div>
        <div className="sen-panel"><div className="sen-steps">
          {['Preflight','Approval','Snapshot','Write','Verify','Rollback'].map((x,i) => <div className="sen-step" key={x}><b>{String(i+1).padStart(2,'0')}</b><strong>{x}</strong><span>Wave-controlled execution step.</span></div>)}
        </div><p style={{ marginTop: 18 }}>S10 uses six ordered deployment waves. There is no single “Apply All” operation, and execution remains gated until the required environment controls are intentionally enabled.</p></div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">07 / CHANNEL ARCHITECTURE</span><h2>Live topology becomes memory.</h2><p>S10.9 exports a fresh category/channel map so planning can work from the actual server structure.</p></div>
        <div className="sen-grid-2">
          <div className="sen-panel"><div className="sen-chip"><ScanSearch size={12} /> LIVE SCAN</div><h3>115 channels · 25 categories</h3><p>Every channel is classified as inherited, explicit, or uncategorized, with parent relationships and overwrite state available to the planning layer.</p><div style={{ marginTop: 16 }}><span className="sen-chip">89 inherited</span><span className="sen-chip">26 explicit</span><span className="sen-chip">3 uncategorized explicit</span></div></div>
          <div className="sen-panel"><div className="sen-chip"><Layers size={12} /> SAMPLE TOPOLOGY</div><div style={{ marginTop: 14 }}><div className="sen-role"><span>CAPITAL HALL</span><code>PUBLIC_VERIFIED → inherit</code></div><div className="sen-role"><span>WAR ROOM</span><code>DEFENCE_ALL → private</code></div><div className="sen-role"><span>CHANCELLOR OFFICE</span><code>GOVERNMENT → private</code></div><div className="sen-role"><span>SUPREME COURT</span><code>JUDICIARY + SOVEREIGN</code></div></div></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">08 / GUARDRAILS</span><h2>Authority without silent mutation.</h2></div>
        <div className="sen-boundary">
          <div className="allow"><strong><CheckCircle2 size={14} style={{ verticalAlign: 'middle', marginRight: 5 }} /> ALLOWED</strong><p>Observe Discord state, classify roles, build policy, simulate effective access, export plans, preflight live state, snapshot, verify and attempt rollback.</p></div>
          <div className="deny"><strong><LockKeyhole size={14} style={{ verticalAlign: 'middle', marginRight: 5 }} /> GATED / BLOCKED</strong><p>No silent policy compilation, no automatic Apply All, no assumption that observed state is authority, and no execution without the explicit safety gates.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">09 / S10.10 AUDIT</span><h2>Static policy validation.</h2></div>
        <div className="sen-grid-2">
          <div className="sen-panel sen-audit"><CheckCircle2 size={26} color="#8ef0b3" /><strong>24 / 24</strong><span>Static checks passed</span><p style={{ maxWidth: 420 }}>Role, category, channel inheritance, exception rules, managed-bot exclusion, policy wiring, runtime use of S10.10 and version checks all pass in the supplied static audit.</p></div>
          <div className="sen-panel"><div className="sen-chip"><FileCheck2 size={12} /> SOURCE STATUS</div><h3>Compiler verification remains separate.</h3><p>The supplied audit records <code>compiler_verified = false</code> and directs local Rust compiler verification through <code>S10_10_VERIFY.ps1</code>. This showcase therefore labels the result as <strong>Static Policy Validation</strong>, not a compiler-verified release.</p><div style={{ marginTop: 18 }}><span className="sen-chip">S10.10</span><span className="sen-chip">24/24 PASS</span><span className="sen-chip">Rust verification separate</span></div></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">10 / TECHNOLOGY</span><h2>Built as a governance engine.</h2></div>
        <div className="sen-grid-3">
          {[
            ['Rust 2021', 'Core runtime and policy engines.'],
            ['Serenity 0.12', 'Discord client / gateway / model / HTTP layer.'],
            ['Serde + JSON', 'Codex, memory, deployment and audit artifacts.'],
            ['SHA-256', 'Fingerprints for live state and deployment contracts.'],
            ['Tokio', 'Async runtime, timers, file operations and execution.'],
            ['8-language i18n', 'UI and workflow localization with technical identifiers preserved.'],
          ].map(([t,d]) => <div className="sen-panel" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="final-cta" style={{ background: 'radial-gradient(circle at 50% 0%,rgba(91,226,155,.18),transparent 45%),rgba(10,14,11,.78)', borderColor: 'rgba(91,226,155,.18)' }}>
        <span className="eyebrow">PRIME SENESCHAL</span>
        <h2>Observe. Codify. Simulate. Govern.</h2>
        <p style={{ color: '#8f9993', maxWidth: 700, margin: '0 auto 26px', lineHeight: 1.7 }}>S10.10 turns live channel architecture into canonical permission memory while keeping authority, simulation and controlled deployment explicitly separated.</p>
        <Link href="/#projects" className="primary-btn" style={{ background: 'linear-gradient(135deg,#1d6b4b,#103627)' }}>Back to Polycephaly <ArrowUpRight size={17} /></Link>
      </section>

      <footer><span>POLYCEPHALY</span><small>Prime Seneschal · S10.10</small><small>© 2026 Polycephaly</small></footer>
    </main>
  )
}
