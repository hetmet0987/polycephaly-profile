'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, BookOpenCheck, BrainCircuit, CheckCircle2,
  ClipboardCheck, FileCheck2, Gavel, GitBranch, History, Landmark,
  Languages, LockKeyhole, Scale, ShieldCheck, Stamp, Swords, Users,
} from 'lucide-react'

const controls = [
  ['/justiciar', 'Supreme Court executive overview.', Landmark],
  ['/cases', 'Case workspace, focus and lifecycle.', FileCheck2],
  ['/law', 'Canonical Codex + publication health.', BookOpenCheck],
  ['/hearing', 'Hearings, court session and official record.', Scale],
  ['/judgment', 'Findings, reasoning and finalization.', Gavel],
  ['/orders', 'Judicial orders and protected enforcement.', Stamp],
  ['/oversight', 'Operational oversight and integrity surfaces.', ShieldCheck],
]

const stages = [
  ['STAGE 01', 'Supreme Judicial Registry', 'Case intake, referral gateway and judicial lifecycle.'],
  ['STAGE 02', 'Codex Regius', '18 Books and 360 canonical Articles with publication tooling.'],
  ['STAGE 03', 'Evidence Vault', 'Evidence IDs, SHA-256 fingerprints and hash-chained chain of custody.'],
  ['STAGE 04', 'Legal Intelligence', 'Grounded Codex + Case + Evidence analysis with human-judge guardrails.'],
  ['STAGE 05', 'Crown Prosecution', 'Charge counts, prosecution briefs and conflict-aware prosecutorial workflow.'],
  ['STAGE 06', 'Defence & Hearings', 'Defence Counsel authority, hearing creation and persistent court setup.'],
  ['STAGE 07', 'Dynamic Courtroom', 'Case-scoped courtroom, participant ACL and official hash-chained record.'],
  ['STAGE 08', 'Judgment Engine', 'Count-by-count findings, reasoning and immutable final fingerprints.'],
  ['STAGE 09', 'Appeals / Judicial Review', 'Separate appellate review without rewriting the original judgment.'],
  ['STAGE 10', 'Judicial Orders & Enforcement', 'Orders, execution, appeal stays and audited enforcement actions.'],
]

const reworks = [
  ['P1', 'Judicial Integration Pass', 'Unified lifecycle, Case Control Center, timeline and auditable transitions.'],
  ['P2', 'Authority & Due Process Hardening', 'Conflict, recusal, issuer/executor separation and two-person safeguards.'],
  ['P3', 'Judicial UX Modernization', 'Needs-first navigation and progressive disclosure across the Court.'],
  ['JR1', 'Supreme Court Control Architecture', 'Seven public controls replace the legacy flat command surface.'],
  ['JR2', 'Judicial Case Workspace', 'Lifecycle-driven workspace with a contextual next step.'],
  ['JR3', 'Contextual Judicial Workflows', 'Real backend actions from evidence, hearing, judgment and order workspaces.'],
  ['JR4', 'Supreme Court Operations', 'Live Court Session mode and operational court configuration.'],
  ['JR4.1', 'Multilingual Codex Publication', 'Persistent publication job, 8 language threads, resumable sync and smart chunks.'],
  ['JR5', 'Final Supreme Court Experience', 'Needs-first attention, Case Focus, Court Readiness and publication health.'],
]

const judicialPipeline = [
  ['CASE', 'Filed / accepted / investigated', FileCheck2],
  ['LAW', 'Codex rule and legal basis', BookOpenCheck],
  ['EVIDENCE', 'Integrity + chain of custody', ClipboardCheck],
  ['PROSECUTION', 'Charges and prosecution brief', Swords],
  ['DEFENCE', 'Counsel and hearing rights', Users],
  ['HEARING', 'Official court session record', Scale],
  ['JUDGMENT', 'Findings + reasoning + finalization', Gavel],
  ['APPEAL', 'Independent judicial review', GitBranch],
  ['ORDER', 'Judicial order / execution path', Stamp],
]

const dueProcess = [
  ['Conflict of interest', 'Respondent, complainant, prosecutor, defence counsel or recused justice cannot silently self-handle the matter.'],
  ['Recusal', 'Recusal and clearance remain explicit judicial state transitions.'],
  ['Issuer ≠ Executor', 'Order issuance is separated from execution authority.'],
  ['Two-person rule', 'Protected punitive actions require an independent confirmation step.'],
  ['Appeal stay', 'Active appeals can stay punitive executions rather than rewriting the underlying judgment.'],
  ['Immutable record', 'Evidence, hearing records, judgments and orders retain integrity metadata.'],
]

const codexStats = [
  ['18', 'BOOKS'],
  ['360', 'ARTICLES'],
  ['8', 'LANGUAGES'],
  ['144', 'BOOK-THREAD TARGETS'],
]

export default function PrimeJusticiarPage() {
  return (
    <main className="justiciar-page">
      <header className="project-nav justiciar-nav">
        <Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Projects</Link>
        <span className="project-nav-brand">POLYCEPHALY / PRIME JUSTICIAR</span>
        <span className="project-status justiciar-status"><span /> JR5 / 0.6.0</span>
      </header>

      <section className="justiciar-hero">
        <div className="justiciar-hero-seal" aria-hidden="true"><div className="seal-ring"><Scale size={52} /><span>PRIME</span><small>SUPREME COURT</small></div></div>
        <div className="justiciar-hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="justiciar-kicker">ROYAL JUDICIARY / RUST / 8-LANGUAGE COURT SURFACE</span>
            <h1>Prime <em>Justiciar</em></h1>
            <p className="justiciar-lead">Supreme Court and Royal Judiciary experience built around evidence, due process, hearings, judgment, appeals and protected judicial authority.</p>
            <div className="justiciar-actions">
              <a href="#supreme-home" className="justiciar-primary">Enter the Court <ArrowRight size={16} /></a>
              <Link href="/#projects" className="justiciar-secondary">Back to projects</Link>
            </div>
            <div className="justiciar-chips"><span>Rust</span><span>Serenity</span><span>SQLx</span><span>PostgreSQL</span><span>Groq</span><span>8 languages</span></div>
          </motion.div>
        </div>
        <div className="justiciar-hero-panel" aria-hidden="true">
          <div className="court-arch"><div className="arch-dome" /><div className="arch-column c1" /><div className="arch-column c2" /><div className="arch-plaque"><Scale size={24} /><strong>JR5</strong><small>FINAL SUPREME COURT EXPERIENCE</small></div></div>
          <div className="court-orbit o1" /><div className="court-orbit o2" />
        </div>
      </section>

      <section className="justiciar-section" id="supreme-home">
        <div className="justiciar-heading"><span>01 / SUPREME COURT HOME</span><h2>Seven public controls. One coherent Court.</h2><p>JR5 preserves the complete judicial backend while turning the public surface into a needs-first Supreme Court application.</p></div>
        <div className="justiciar-controls">{controls.map(([cmd, desc, Icon], i) => { const I = Icon as typeof Landmark; return <motion.div key={cmd} className="justiciar-control" whileHover={{ y: -5 }}><div className="control-top"><span>{String(i + 1).padStart(2, '0')}</span><I size={19} /></div><code>{cmd}</code><p>{desc}</p></motion.div> })}</div>
        <div className="court-home-grid">
          <div className="court-home-card attention"><small>JUDICIAL ATTENTION</small><strong>Hearings · judgments · orders · integrity</strong><span>Surface matters requiring action without exposing every backend command.</span></div>
          <div className="court-home-card"><small>CASE FOCUS</small><strong>Continue Case</strong><span>When a relevant active case exists, JR5 opens the case workspace directly.</span></div>
          <div className="court-home-card"><small>COURT READINESS</small><strong>Rules · Courtroom · Codex</strong><span>Operational court configuration and multilingual publication health remain visible.</span></div>
          <div className="court-home-card"><small>MY COURT WORK</small><strong>Authority-aware workspace</strong><span>Active matters connected to the current user are grouped into the same judicial experience.</span></div>
        </div>
      </section>

      <section className="justiciar-section justiciar-dark" id="pipeline">
        <div className="justiciar-heading"><span>02 / JUDICIAL PIPELINE</span><h2>From allegation to judgment without collapsing the boundaries between domains.</h2><p>The Court preserves lifecycle, legal source, evidence integrity, adversarial procedure, review and execution as distinct layers.</p></div>
        <div className="judicial-pipeline">{judicialPipeline.map(([name, desc, Icon], i) => { const I = Icon as typeof FileCheck2; return <motion.div key={name} className="pipeline-card" whileHover={{ y: -4 }}><div className="pipeline-num">{String(i + 1).padStart(2, '0')}</div><I size={19} /><strong>{name}</strong><span>{desc}</span>{i < judicialPipeline.length - 1 && <i className="pipeline-arrow">→</i>}</motion.div> })}</div>
      </section>

      <section className="justiciar-section">
        <div className="justiciar-heading"><span>03 / STAGE 01 → STAGE 10</span><h2>The complete judicial backend, consolidated behind a smaller control surface.</h2><p>Each stage remains a capability layer underneath the JR5 Supreme Court experience.</p></div>
        <div className="stage-grid">{stages.map(([id, title, desc], i) => <motion.article className="stage-card" key={id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .025 }}><span>{id}</span><div><h3>{title}</h3><p>{desc}</p></div><b>{String(i + 1).padStart(2, '0')}</b></motion.article>)}</div>
      </section>

      <section className="justiciar-section justiciar-dark">
        <div className="justiciar-heading"><span>04 / P1 → P3 → JR1 → JR5</span><h2>Integration, safeguards and UX consolidation.</h2><p>The rework history preserves the underlying judicial modules while progressively tightening authority and simplifying the public experience.</p></div>
        <div className="rework-timeline">{reworks.map(([id, title, desc], i) => <motion.div className={`rework-item ${id === 'JR5' ? 'current' : ''}`} key={id} whileHover={{ x: 4 }}><span className="rework-id">{id}</span><div><strong>{title}</strong><p>{desc}</p></div><span className="rework-index">{String(i + 1).padStart(2, '0')}</span></motion.div>)}</div>
      </section>

      <section className="justiciar-section">
        <div className="justiciar-heading"><span>05 / CODEX REGIUS</span><h2>Canonical law with an operational multilingual publication layer.</h2><p>JR4.1 keeps the English Codex as the canonical legal source while publishing seven localized accessibility editions through a persistent background job.</p></div>
        <div className="codex-stats">{codexStats.map(([n, label]) => <div key={label}><strong>{n}</strong><span>{label}</span></div>)}</div>
        <div className="codex-flow"><div><BookOpenCheck size={20} /><strong>CANONICAL CODEX</strong><span>18 Books · 360 Articles</span></div><div className="flow-arrow">→</div><div><History size={20} /><strong>PERSISTENT JOB</strong><span>Progress · cancel · restart recovery</span></div><div className="flow-arrow">→</div><div><Languages size={20} /><strong>8-LANGUAGE PORTAL</strong><span>Hash-sync · smart chunks · book threads</span></div></div>
      </section>

      <section className="justiciar-section justiciar-dark">
        <div className="justiciar-heading"><span>06 / EVIDENCE &amp; COURT RECORD</span><h2>Integrity is part of the product surface.</h2><p>Evidence records carry fingerprints and chain-of-custody history. Hearings maintain official hash-chained records; judgments preserve final fingerprints rather than silent rewrites.</p></div>
        <div className="integrity-grid"><div><ClipboardCheck size={21} /><strong>EVD-######</strong><span>SHA-256 registered evidence fingerprints.</span></div><div><LockKeyhole size={21} /><strong>CHAIN OF CUSTODY</strong><span>Access audit and judicial sealing remain explicit.</span></div><div><History size={21} /><strong>HEARING RECORD</strong><span>Official record with hash chaining and transcript verification.</span></div><div><Stamp size={21} /><strong>JUDGMENT INTEGRITY</strong><span>Finalized findings receive immutable SHA-256 fingerprints.</span></div></div>
      </section>

      <section className="justiciar-section">
        <div className="justiciar-heading"><span>07 / DUE PROCESS &amp; AUTHORITY</span><h2>Judicial UX can be elegant without weakening safeguards.</h2><p>JR5 improves what users see; it does not weaken the human authority, conflict, recusal, due-process or protected-action rules already enforced by the backend.</p></div>
        <div className="due-grid">{dueProcess.map(([title, desc], i) => <motion.div className="due-card" key={title} whileHover={{ y: -4 }}><div><span>0{i + 1}</span><CheckCircle2 size={17} /></div><strong>{title}</strong><p>{desc}</p></motion.div>)}</div>
        <div className="two-person"><div className="two-person-step"><span>01</span><strong>ISSUE</strong><small>Authorized judicial actor</small></div><ArrowRight className="tp-arrow" size={22} /><div className="two-person-step"><span>02</span><strong>CONFIRM</strong><small>Independent second person</small></div><ArrowRight className="tp-arrow" size={22} /><div className="two-person-step"><span>03</span><strong>EXECUTE</strong><small>Protected action boundary</small></div></div>
      </section>

      <section className="justiciar-section justiciar-dark">
        <div className="justiciar-heading"><span>08 / JR5 STATIC AUDIT</span><h2>Final UX release — backend preserved.</h2><p>Static audit evidence records the JR5 feature wiring and preservation guarantees. Compiler verification is not claimed because Cargo was unavailable in the source generation runtime.</p></div>
        <div className="audit-card">
          <div className="audit-head"><div><small>RELEASE</small><strong>0.6.0-jr5</strong></div><div><small>NEW MIGRATIONS</small><strong>0</strong></div><div><small>DROP / TRUNCATE</small><strong>0 / 0</strong></div><div className="audit-pass"><CheckCircle2 size={18} /><strong>STATIC AUDIT</strong><span>PASS</span></div></div>
          <div className="audit-grid">
            {['seven_controls','needs_first_attention','case_focus','court_readiness','law_publication_health','real_progress_link','jr5_i18n_wired','all_jr5_i18n_keys','eight_language_index','backend_preserved','jr4_session_preserved','jr41_publisher_preserved','authority_preserved','due_process_preserved','version_bumped','runtime_identity'].map(key => <div key={key}><CheckCircle2 size={15} /><span>{key.split('_').join(' ')}</span><b>true</b></div>)}
          </div>
          <div className="audit-note"><Scale size={17} /><span><strong>cargo_check:</strong> NOT_AVAILABLE_IN_RUNTIME — the showcase intentionally reports the audit state rather than claiming compiler verification.</span></div>
        </div>
      </section>

      <section className="justiciar-section justiciar-final">
        <div className="final-seal"><Scale size={28} /></div>
        <span>JR5 / FINAL SUPREME COURT EXPERIENCE</span>
        <h2>Justice, evidence, judgment, continuity.</h2>
        <p>Prime Justiciar brings the Prime ecosystem a dedicated judicial layer — organized around needs-first control, contextual case workspaces and explicit authority boundaries.</p>
        <Link href="/#projects" className="justiciar-final-link">Back to Polycephaly <ArrowLeft size={16} /></Link>
      </section>
    </main>
  )
}
