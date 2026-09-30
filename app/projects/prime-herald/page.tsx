'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, Bot, CalendarClock, CheckCircle2, FileText, Globe2,
  Newspaper, Radio, Rss, ShieldAlert, Sparkles, Timer, Users, Workflow,
} from 'lucide-react'

const topLevel = [
  ['/herald', 'Publishing Desk with the largest subcommand surface.', Newspaper],
  ['/newsroom', 'Private newsroom desk for drafts, review and next actions.', FileText],
  ['/crisis', 'Crisis press operations: start, update, resolve and status.', ShieldAlert],
  ['/schedule', 'Timed publication of finished The Prime Time articles.', CalendarClock],
  ['/edition', 'Build or publish the last 24 hours as one front page.', Rss],
  ['/setup', 'Discover and persist official Herald role bindings.', Users],
  ['/language', 'Per-user and server language preferences.', Globe2],
  ['/help', 'Help, examples and workflow guidance.', Workflow],
]

const heraldSubs = ['assist', 'news', 'breaking', 'announce', 'save-draft', 'drafts', 'edit-draft', 'submit-review', 'review', 'publish-draft']
const crisisSubs = ['start', 'update', 'resolve', 'status']
const scheduleSubs = ['add', 'list', 'cancel']
const editionSubs = ['preview', 'publish']
const languageSubs = ['me', 'server']

const stages = [
  ['STAGE 01', 'Royal Communications Office', 'Official Prime Herald communications, role authority and the shared publication foundation.'],
  ['STAGE 02', 'The Prime Time Newsroom', 'Dedicated journalism records, PT identifiers and an explicit editorial authority layer.'],
  ['STAGE 03', 'Simple Editorial Review', 'Draft → review → approve / changes → publish workflow with contextual editor actions.'],
  ['STAGE 04', 'Groq Editorial Assistant', 'Private AI editorial assistance for writing, polishing, headlines, briefs and announcements.'],
  ['STAGE 05', 'The Prime Time Newsroom Desk', 'One private operational desk for drafts, owned stories, reviews and approved items.'],
  ['STAGE 06', 'The Prime Time Public Edition', 'Publication-facing article grammar, attribution, imagery and reader presentation.'],
  ['STAGE 07', 'Crisis Communications', 'Incident lifecycle with repeated public updates and a dedicated crisis press role.'],
  ['STAGE 08', 'Publication Scheduler', 'Automatic timed publication for finished The Prime Time articles.'],
  ['STAGE 09', 'The Prime Time Editions', 'A front page assembled from up to six published stories from the last 24 hours.'],
]

const editorialLabels = [
  ['NEWS', 'Straight reporting'],
  ['BREAKING', 'Developing news'],
  ['ANALYSIS', 'Interpretation based on established facts'],
  ['EXPLAINER', 'Complex systems made clear'],
  ['FEATURE', 'Long-form context'],
  ['INTERVIEW', 'Q&A / interview format'],
  ['EDITORIAL', 'Institutional editorial-board opinion'],
  ['OPINION', "Named author's opinion"],
]

const intensity = [
  ['01', 'Routine'], ['02', 'Notable'], ['03', 'Major'], ['04', 'Breaking'], ['05', 'Historic'],
]

const boundaries = [
  ['AI can draft', 'Assistive editorial generation remains private until a human chooses what to publish.', Bot],
  ['AI cannot publish', 'The source explicitly keeps editorial AI from automatic publication authority.', ShieldAlert],
  ['Official ≠ journalism', 'HER- communications and PT journalism remain distinct publication records.', FileText],
  ['Edition ≠ new story', 'Stage 9 assembles already-published stories and does not fabricate new reporting.', Newspaper],
]

export default function PrimeHeraldPage() {
  return (
    <main className="herald-page">
      <header className="project-nav herald-nav">
        <Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Projects</Link>
        <span className="project-nav-brand">POLYCEPHALY / PRIME HERALD</span>
        <span className="project-status herald-status"><span /> STAGE 09 / EDITIONS</span>
      </header>

      <section className="herald-hero">
        <div className="herald-hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="herald-kicker">ROYAL COMMUNICATIONS OFFICE / RUST / EDITORIAL INTELLIGENCE</span>
            <h1>Prime <em>Herald</em></h1>
            <p className="herald-lead">A communications office and digital newsroom for official notices, journalism, editorial assistance, crisis updates, scheduled publication and The Prime Time editions.</p>
            <div className="herald-actions">
              <a href="#newsroom" className="herald-primary">Enter the newsroom <ArrowRight size={16} /></a>
              <Link href="/#projects" className="herald-secondary">Back to projects</Link>
            </div>
            <div className="herald-chips"><span>Rust</span><span>Serenity</span><span>PostgreSQL</span><span>Groq</span><span>8 languages</span><span>Stage 09</span></div>
          </motion.div>
        </div>

        <div className="herald-hero-paper" aria-hidden="true">
          <div className="paper-masthead">THE PRIME TIME</div>
          <div className="paper-rule" />
          <div className="paper-meta"><span>VOL. 09</span><span>DAILY EDITION</span><span>POLYCEPHALY</span></div>
          <div className="paper-headline">The Prime Time<br /><em>Editorial intelligence meets publication.</em></div>
          <div className="paper-deck">Reporting, analysis, official communications and a front page built from stories that are already public.</div>
          <div className="paper-grid">
            <div><b>NEWS</b><span>HER- / PT- records remain distinct.</span></div>
            <div><b>EDITION</b><span>Up to six published stories.</span></div>
            <div><b>LANGUAGE</b><span>Eight supported locales.</span></div>
          </div>
          <div className="paper-stamp"><Radio size={17} /><span>PRESS OFFICE</span></div>
        </div>
      </section>

      <section className="herald-section" id="newsroom">
        <div className="herald-heading"><span>01 / ROYAL COMMUNICATIONS OFFICE</span><h2>Many subcommands — one newsroom.</h2><p>Prime Herald has not gone through the same aggressive command-surface consolidation as the newer Prime systems. Its current public registry keeps eight top-level controls while allowing /herald itself to expose a much larger publishing workflow.</p></div>
        <div className="herald-top-grid">
          {topLevel.map(([cmd, desc, Icon], i) => { const I = Icon as typeof Newspaper; return <motion.div key={cmd as string} className="herald-command-card" whileHover={{ y: -5 }}><div className="herald-command-top"><span>{String(i + 1).padStart(2, '0')}</span><I size={18} /></div><code>{cmd}</code><p>{desc}</p></motion.div> })}
        </div>
      </section>

      <section className="herald-section herald-dark">
        <div className="herald-heading"><span>02 / COMMAND ARCHITECTURE</span><h2>The breadth is intentional — especially inside /herald.</h2><p>The current source defines ten /herald subcommands, alongside dedicated crisis, scheduler, edition, language and setup workspaces. The legacy /news backend remains for compatibility but is not registered as a public top-level command.</p></div>
        <div className="command-bands">
          <div className="command-band command-band-main"><div className="band-title"><Newspaper size={18} /><span>/herald</span><b>10 subcommands</b></div><div className="pill-row">{heraldSubs.map(x => <span key={x}>{x}</span>)}</div></div>
          <div className="command-band"><div className="band-title"><ShieldAlert size={18} /><span>/crisis</span><b>4</b></div><div className="pill-row">{crisisSubs.map(x => <span key={x}>{x}</span>)}</div></div>
          <div className="command-band"><div className="band-title"><CalendarClock size={18} /><span>/schedule</span><b>3</b></div><div className="pill-row">{scheduleSubs.map(x => <span key={x}>{x}</span>)}</div></div>
          <div className="command-band"><div className="band-title"><Rss size={18} /><span>/edition</span><b>2</b></div><div className="pill-row">{editionSubs.map(x => <span key={x}>{x}</span>)}</div></div>
          <div className="command-band"><div className="band-title"><Globe2 size={18} /><span>/language</span><b>2</b></div><div className="pill-row">{languageSubs.map(x => <span key={x}>{x}</span>)}</div></div>
          <div className="command-band"><div className="band-title"><Users size={18} /><span>/setup</span><b>roles</b></div><div className="pill-row"><span>roles</span></div></div>
        </div>
      </section>

      <section className="herald-section">
        <div className="herald-heading"><span>03 / STAGE 01 → STAGE 09</span><h2>From communications office to a daily digital edition.</h2><p>Each stage adds a capability without erasing the distinction between official communications, journalism and operational publication workflows.</p></div>
        <div className="herald-stage-list">
          {stages.map(([id, title, desc], i) => <motion.article key={id} className={`herald-stage ${i === stages.length - 1 ? 'current' : ''}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .035 }}><span className="herald-stage-id">{id}</span><div><h3>{title}</h3><p>{desc}</p></div><b>{String(i + 1).padStart(2, '0')}</b></motion.article>)}
        </div>
      </section>

      <section className="herald-section herald-dark">
        <div className="herald-heading"><span>04 / THE PRIME TIME</span><h2>Journalism with an explicit editorial grammar.</h2><p>The stylebook separates reporting from opinion, uses attribution where the source is the basis of a claim, and limits headline intensity so not every story becomes “breaking” or “historic”.</p></div>
        <div className="editorial-grid">
          <div className="editorial-card editorial-main"><div className="editorial-masthead">THE PRIME TIME</div><div className="editorial-rule" /><small>NEWS / PT-###### / DATELINE</small><h3>Event + consequence / significance</h3><p>A clear headline, deck, byline, label, intensity, dateline and body — designed to read like a publication rather than a database record.</p><span className="editorial-foot">PUBLICATION GRAMMAR</span></div>
          <div className="label-panel"><span className="panel-label">ARTICLE LABELS</span><div className="label-list">{editorialLabels.map(([name, desc]) => <div key={name}><strong>{name}</strong><span>{desc}</span></div>)}</div></div>
          <div className="intensity-panel"><span className="panel-label">HEADLINE INTENSITY</span><div className="intensity-list">{intensity.map(([n, label]) => <div key={n}><b>{n}</b><span>{label}</span></div>)}</div></div>
        </div>
      </section>

      <section className="herald-section">
        <div className="herald-heading"><span>05 / EDITORIAL INTELLIGENCE</span><h2>AI assists the newsroom. It does not become the newsroom.</h2><p>Stage 4 uses the Groq Editorial Assistant to produce a private preview or save a draft. Publication remains a separate human-controlled action.</p></div>
        <div className="ai-flow">
          <div><Bot size={21} /><strong>Rough facts</strong><span>Source text and optional context.</span></div><i>→</i>
          <div><Sparkles size={21} /><strong>Groq Editorial Assistant</strong><span>Write, polish, headline, summarize or draft an announcement.</span></div><i>→</i>
          <div><FileText size={21} /><strong>Private preview / draft</strong><span>Nothing is published automatically.</span></div><i>→</i>
          <div><CheckCircle2 size={21} /><strong>Human publication path</strong><span>Review, approval, schedule or publish through the desk.</span></div>
        </div>
      </section>

      <section className="herald-section herald-dark">
        <div className="herald-heading"><span>06 / CRISIS + SCHEDULING</span><h2>From a developing incident to a controlled publication.</h2><p>Prime Herald can maintain repeated public updates during a crisis and schedule finished articles for timed release without turning either workflow into an autonomous publisher.</p></div>
        <div className="ops-grid">
          <div className="ops-card"><ShieldAlert size={22} /><span>CRISIS PRESS</span><h3>Start → Update → Resolve</h3><p>A single incident can carry multiple public updates while staff retain the status workflow.</p><div className="ops-flow"><b>START</b><i>→</i><b>UPDATE</b><i>→</i><b>RESOLVE</b></div></div>
          <div className="ops-card"><Timer size={22} /><span>PUBLICATION SCHEDULER</span><h3>Finished article → timed release</h3><p>Stage 8 adds a schedule queue for completed The Prime Time articles.</p><div className="ops-flow"><b>READY</b><i>→</i><b>QUEUED</b><i>→</i><b>PUBLISHED</b></div></div>
        </div>
      </section>

      <section className="herald-section" id="edition">
        <div className="herald-heading"><span>07 / STAGE 09 — THE PRIME TIME EDITIONS</span><h2>A front page built from what is already public.</h2><p>Stage 9 reads up to six published The Prime Time stories from the previous 24 hours. It can preview the edition or publish it to the newspaper channel, without creating new reporting or another approval layer.</p></div>
        <div className="edition-layout">
          <div className="edition-paper">
            <div className="edition-top"><span>THE PRIME TIME</span><span>DAILY EDITION</span><span>VOL. 09</span></div>
            <div className="edition-line" />
            <div className="edition-title">TODAY'S FRONT PAGE</div>
            <div className="edition-note">Up to six published stories from the last 24 hours.</div>
            <div className="edition-story-grid"><div><small>01 / NEWS</small><h3>Headline of the day</h3><p>Deck and public reporting context.</p></div><div><small>02 / ANALYSIS</small><h3>Why the story matters</h3><p>Interpretation based on established facts.</p></div><div><small>03 / DIPLOMACY</small><h3>Developing events</h3><p>Source-attributed update.</p></div><div><small>04 / COMMUNITY</small><h3>Public life</h3><p>Reader-facing publication.</p></div></div>
          </div>
          <div className="edition-stats">
            <div><strong>24h</strong><span>source window</span></div>
            <div><strong>6</strong><span>maximum stories</span></div>
            <div><strong>2</strong><span>actions: preview / publish</span></div>
            <div><strong>0</strong><span>new stories fabricated</span></div>
          </div>
        </div>
      </section>

      <section className="herald-section herald-dark">
        <div className="herald-heading"><span>08 / EDITORIAL BOUNDARIES</span><h2>Publication rules are part of the product.</h2><p>The source keeps several distinctions explicit so the communications layer cannot quietly blur official voice, journalism, source attribution and AI assistance.</p></div>
        <div className="boundary-grid">{boundaries.map(([title, desc, Icon]) => { const I = Icon as typeof Bot; return <motion.div key={title} className="boundary-card" whileHover={{ y: -4 }}><I size={20} /><strong>{title}</strong><p>{desc}</p></motion.div> })}</div>
      </section>

      <section className="herald-section herald-final">
        <div className="final-masthead"><Newspaper size={29} /></div>
        <span>STAGE 09 / THE PRIME TIME EDITIONS</span>
        <h2>Publish with hierarchy. Report with context. Keep the desk human.</h2>
        <p>Prime Herald adds the Prime ecosystem a communications and newsroom layer designed around publication workflows, editorial structure and explicit boundaries between official statements and journalism.</p>
        <Link href="/#projects" className="herald-final-link">Back to Polycephaly <ArrowLeft size={16} /></Link>
      </section>

      <footer className="herald-footer"><span>PRIME HERALD / THE PRIME TIME</span><small>Stage 09 showcase · Polycephaly</small></footer>
    </main>
  )
}
