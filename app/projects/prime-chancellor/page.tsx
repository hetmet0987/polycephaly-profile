'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft, ArrowUpRight, Bot, BriefcaseBusiness, Building2, CheckCircle2,
  ChevronRight, Crown, FileText, Globe2, Landmark, LockKeyhole, Scale,
  ShieldCheck, Sparkles, Users, Workflow
} from 'lucide-react'

const roots = [
  ['/chancellor', 'Chancellor'],
  ['/government', 'Government'],
  ['/civilservice', 'Civil Service'],
  ['/community', 'Community'],
  ['/oversight', 'Oversight'],
  ['/bridge', 'Bridge'],
  ['/verify', 'Verify'],
]

const stages = [
  ['01', 'Cabinet Office', 'Foundation for the Royal Cabinet.'],
  ['02', 'Royal Administration', 'Government administration layer.'],
  ['03', 'Policy & Decree', 'Policy and decree lifecycle.'],
  ['04', 'Ministerial Tasking', 'Task records and contextual workflows.'],
  ['05', 'Civil Service Personnel', 'Personnel and service administration.'],
  ['06', 'Public Administration', 'Citizen-facing administration.'],
  ['07', 'Strategic Planning', 'Strategy records and planning.'],
  ['08', 'AI Executive Advisor', 'Read-only executive intelligence.'],
  ['09', 'Civic Identity', 'Citizen identity and hub views.'],
  ['10', 'Civic Participation', 'Proposals and civic support.'],
  ['11', 'Royal Honors', 'Civic recognition and honors.'],
  ['12', 'Community Programmes', 'Programme and mission workflows.'],
  ['13', 'Royal Community Events', 'Community event systems.'],
  ['14', 'Citizen Reception', 'Citizen assistance and reception.'],
  ['15', 'Citizen AI Concierge', 'AI-assisted citizen service.'],
  ['16', 'Royal Adaptive Verification', 'Adaptive verification layer.'],
  ['17', 'Chancellor Audit Logging', 'Audit and accountability records.'],
  ['18', 'Kingdom Intelligence Analytics', 'Government intelligence analytics.'],
  ['19', 'Royal Records', 'Citizen history and records.'],
  ['20', 'Citizen Reports & Case Management', 'Reports, cases and service workflows.'],
  ['21', 'Recruitment Service 2.0', 'Recruitment and service entry.'],
]

const offices: Array<[string, LucideIcon, string]> = [
  ['Royal Cabinet', Crown, 'Executive overview and cabinet workspace'],
  ['Government', Landmark, 'Policy, tasking and strategy offices'],
  ['Civil Service', BriefcaseBusiness, 'Personnel and administrative records'],
  ['Community', Users, 'Citizen services, programmes and civic participation'],
  ['Oversight', Scale, 'Investigation, reports and governance review'],
  ['Bridge', Workflow, 'Context-only cross-bot integration'],
  ['Verification', ShieldCheck, 'Public verification exception'],
]

const auditChecks = [
  '7 registered public roots',
  '25 office subcommands',
  '0 action options',
  '4 limited view options',
  'Public Citizen Support Centre',
  'Live ticket and rating statistics',
  'Staff workspace separated from citizens',
  'Contextual policy workflows',
  'Task / strategy / personnel workspaces',
  'Investigation workspace without ban / kick actions',
  '0 undefined DB function references',
  'Stage 1–21 modules retained',
  'Bridge authority disabled',
  'No destructive DROP / TRUNCATE patterns',
  'Legacy R2 presentation cleanup complete',
]

export default function PrimeChancellorPage() {
  return (
    <main className="project-page chancellor-page">
      <header className="project-nav chancellor-nav">
        <Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Projects</Link>
        <span className="project-nav-brand">POLYCEPHALY / PRIME CHANCELLOR</span>
        <span className="project-status chancellor-status"><span /> R3 STATIC AUDIT</span>
      </header>

      <section className="project-hero chancellor-hero">
        <div className="chancellor-hero-glow" />
        <div className="chancellor-crown-mark"><Crown size={210} strokeWidth={1} /></div>
        <div className="project-hero-inner chancellor-hero-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="eyebrow chancellor-eyebrow">PROJECT 02 / GOVERNMENT SYSTEM</span>
            <h1>Prime <em>Chancellor</em></h1>
            <p className="project-kicker">Crown Government · Cabinet Administration · Civic Services · Executive Intelligence</p>
            <p className="project-lead">Prime Chancellor is the Crown Government / Cabinet administration bot of the Prime ecosystem. R3 rebuilds the presentation layer around a needs-first model: commands open offices, while contextual panels carry the workflow.</p>
            <div className="project-meta-row"><span>Rust</span><span>Discord</span><span>PostgreSQL</span><span>AI</span><span>i18n × 8</span></div>
            <div className="hero-project-actions"><a href="#government" className="primary-btn chancellor-primary">Explore government <ChevronRight size={17} /></a><a href="#audit" className="secondary-btn chancellor-secondary">R3 audit <CheckCircle2 size={16} /></a></div>
          </motion.div>
          <motion.div className="cabinet-orb" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .7 }}>
            <div className="cabinet-seal"><Crown size={64} /></div>
            <div className="cabinet-ring ring-gold" /><div className="cabinet-ring ring-navy" /><div className="cabinet-ring ring-burgundy" />
            <span className="cabinet-label cabinet-label-top">R3</span><span className="cabinet-label cabinet-label-bottom">ROYAL CABINET OFFICE</span>
          </motion.div>
        </div>
      </section>

      <section className="project-section" id="government">
        <div className="section-heading"><span className="eyebrow chancellor-eyebrow">01 / GOVERNMENT ARCHITECTURE</span><h2>An office directory, not a backend map.</h2><p>The public command surface stays small while the complex Stage 1–21 business engines remain behind contextual workspaces.</p></div>
        <div className="office-grid">
          {offices.map(([name, Icon, description], i) => <motion.article key={name} className="office-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} whileHover={{ y: -5 }}><div className="office-icon"><Icon size={21} /></div><div><span className="office-number">0{i + 1}</span><h3>{name}</h3><p>{description}</p></div><ArrowUpRight size={15} className="office-arrow" /></motion.article>)}
        </div>
        <div className="command-metric-row"><div><strong>7</strong><span>public roots</span></div><div><strong>25</strong><span>office subcommands</span></div><div><strong>0</strong><span>action options</span></div><div><strong>4</strong><span>limited view options</span></div></div>
      </section>

      <section className="project-section chancellor-split">
        <div className="cabinet-panel">
          <span className="eyebrow chancellor-eyebrow">02 / NEEDS-FIRST UX</span><h2>Command nhỏ.<br /><em>UI lớn.</em></h2>
          <p>R3 treats commands as memorable office entry points. Rare administrative actions stay inside the relevant management centre instead of expanding the command grammar.</p>
          <div className="ux-flow"><span>Need</span><ChevronRight size={15} /><span>Office</span><ChevronRight size={15} /><span>Context</span><ChevronRight size={15} /><span>Action</span></div>
        </div>
        <div className="briefing-card"><div className="briefing-head"><FileText size={18} /><span>ROYAL BRIEFING</span><span className="briefing-stamp">R3</span></div><div className="briefing-lines"><p><strong>Public surface</strong> memorable office entry points</p><p><strong>Workflow</strong> contextual panels and records</p><p><strong>Advanced config</strong> secondary staff/admin workspace</p><p><strong>Citizen support</strong> public centre with private ticket contents</p></div></div>
      </section>

      <section className="project-section" id="ai">
        <div className="section-heading"><span className="eyebrow chancellor-eyebrow">03 / AI EXECUTIVE ADVISOR</span><h2>Intelligence without authority.</h2><p>Stage 8 defines the Chancellor AI Executive Advisor as a read-only executive intelligence layer. Human approval remains the authoritative control boundary.</p></div>
        <div className="ai-chancellor-grid"><div className="advisor-flow"><div className="advisor-node"><DatabaseIcon /><span>Operational data</span></div><ChevronRight /><div className="advisor-node"><Sparkles size={20} /><span>AI Executive Advisor</span></div><ChevronRight /><div className="advisor-node"><FileText size={20} /><span>Briefing / answer</span></div></div><div className="authority-card"><LockKeyhole size={21} /><span>AUTHORITY BOUNDARY</span><strong>READ-ONLY</strong><p>AI does not directly mutate Cabinet, Administration, Policy, Tasking, Personnel, Citizen Service or Strategy.</p></div></div>
      </section>

      <section className="project-section citizen-section">
        <div className="citizen-head"><div><span className="eyebrow chancellor-eyebrow">04 / CITIZEN SERVICES</span><h2>Needs-first civic administration.</h2></div><div className="citizen-stat"><strong>8</strong><span>languages retained<br />vi · en · ja · ko · zh · es · fr · de</span></div></div>
        <div className="citizen-grid"><div className="citizen-card"><Users size={20} /><h3>Citizen Hub</h3><p>Identity · Standing · Contribution · Achievements · Activity · Security</p></div><div className="citizen-card"><BriefcaseBusiness size={20} /><h3>Support Centre</h3><p>Open cases · cases today · SLA attention · satisfaction rating</p></div><div className="citizen-card"><Sparkles size={20} /><h3>AI Concierge</h3><p>AI-assisted citizen service without exposing unnecessary backend complexity.</p></div><div className="citizen-card"><Scale size={20} /><h3>Civic Participation</h3><p>Proposals, support flows and community programme participation.</p></div></div>
      </section>

      <section className="project-section bridge-section">
        <div className="section-heading"><span className="eyebrow chancellor-eyebrow">05 / GOVERNMENT BRIDGE V3</span><h2>Context crosses the bridge.<br />Authority does not.</h2><p>The Bridge carries context, state, events, advisory material and evidence references without delegating enforcement authority.</p></div>
        <div className="bridge-diagram"><div className="bridge-source"><Crown size={23} /><strong>Prime Chancellor</strong><small>Government authority</small></div><div className="bridge-core"><Workflow size={22} /><span>BRIDGE V3</span><small>context · state · events · evidence</small></div><div className="bridge-peers"><span>Prime Nexus</span><span>Prime Legate</span><span>Other peers</span></div></div>
        <div className="authority-grid"><div className="authority-negative"><LockKeyhole size={17} /><span>may_execute_authority = false</span></div><div className="authority-negative"><LockKeyhole size={17} /><span>may_mutate_guild = false</span></div><div className="authority-positive"><CheckCircle2 size={17} /><span>Context / State / Events / Evidence</span></div></div>
      </section>

      <section className="project-section" id="timeline">
        <div className="section-heading"><span className="eyebrow chancellor-eyebrow">06 / DEVELOPMENT JOURNEY</span><h2>Stage 01 → 21.</h2><p>R3 keeps the Stage 1–21 business engines while consolidating the public presentation/control layer.</p></div>
        <div className="chancellor-timeline">{stages.map(([num, title, desc], i) => <motion.div className={`stage-item ${num === '21' ? 'stage-current' : ''}`} key={num} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .018 }}><span>{num}</span><div><strong>{title}</strong><p>{desc}</p></div></motion.div>)}</div>
      </section>

      <section className="project-section" id="audit">
        <div className="audit-chancellor-card"><div className="audit-chancellor-main"><span className="eyebrow chancellor-eyebrow">07 / R3 STATIC AUDIT</span><h2>Needs-first.<br /><em>Audited.</em></h2><p>The supplied R3 audit records the public command surface, support centre, contextual workflows and backend integrity boundaries. Compiler validation was not available in the supplied runtime.</p><div className="audit-status"><CheckCircle2 size={17} /><span>STATIC AUDIT AVAILABLE</span></div></div><div className="audit-chancellor-list">{auditChecks.map((item, i) => <div key={item}><CheckCircle2 size={13} /><span>{String(i + 1).padStart(2, '0')} · {item}</span></div>)}</div></div>
      </section>

      <section className="project-section tech-section">
        <div className="section-heading"><span className="eyebrow chancellor-eyebrow">08 / SYSTEM IDENTITY</span><h2>Royal Cabinet Office.</h2><p>A government briefing aesthetic built around Royal Navy, Ivory and Crown Gold, with Burgundy reserved for executive/policy work.</p></div>
        <div className="tech-pills"><span>Rust</span><span>Discord</span><span>PostgreSQL</span><span>AI</span><span>i18n × 8</span><span>Contextual Workspaces</span><span>Government Bridge v3</span></div>
      </section>

      <footer className="project-footer chancellor-footer"><div><span>PRIME CHANCELLOR</span><small>Needs-First UX Rework R3 · Crown Government</small></div><Link href="/#projects">Back to Polycephaly <ArrowLeft size={15} /></Link></footer>
    </main>
  )
}

function DatabaseIcon() { return <Building2 size={20} /> }
