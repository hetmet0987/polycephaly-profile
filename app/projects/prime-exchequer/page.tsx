"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Banknote,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Coins,
  Crown,
  Database,
  Dices,
  FileText,
  Globe2,
  Landmark,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  WalletCards,
} from 'lucide-react'

const stages = [
  ['E1', 'Exchequer Foundation', 'Currency core, wallets, balance management, configuration and economic ledger.', 'CURRENT'],
  ['E2', 'Monetary System', 'Currency mint/sink, income engine, tax & fee engine and inflation control.', 'FUTURE'],
  ['E3', 'Economic Engine', 'Jobs, income streams, market dynamics, economic events and balancing.', 'FUTURE'],
  ['E4', 'Commerce', 'Shop system, catalog, player marketplace, buy/sell engine and dynamic pricing.', 'FUTURE'],
  ['E5', 'Treasury Operations', 'Transfers, transaction engine, history, escrow and refunds.', 'FUTURE'],
  ['E6', 'Rewards & Incentives', 'Daily, achievement, activity and event rewards plus loyalty.', 'FUTURE'],
  ['E7', 'Games & Entertainment', 'Virtual-currency games, statistics and the future entertainment layer.', 'FUTURE'],
  ['E8', 'Financial Security', 'Anti-fraud, anomaly detection, abuse detection, transaction limits and audit.', 'FUTURE'],
  ['E9', 'Economic Intelligence', 'Dashboards, circulation, wealth distribution, market analytics and economy health.', 'FUTURE'],
  ['E10', 'Sovereign Treasury', 'Treasury intelligence, policy engine, advanced simulation, automated balancing and command center.', 'FUTURE'],
]

const currentModules = [
  ['01', 'Currency Core', 'Defines currencies, precision, bounds and status.'],
  ['02', 'Wallet System', 'Creates the per-user wallet tied to the active currency.'],
  ['03', 'Balance Management', 'Tracks non-negative integer balances and wallet state.'],
  ['04', 'Currency Configuration', 'Controls the economy status: ACTIVE, PAUSED or MAINTENANCE.'],
  ['05', 'Economic Ledger', 'Records credit/debit/adjustment entries with balance snapshots.'],
]

const futureBands = [
  ['E2', 'Money', 'Mint · Sink · Income · Tax · Inflation'],
  ['E3', 'Economy', 'Jobs · Income Streams · Market · Events · Balance'],
  ['E4', 'Commerce', 'Shops · Catalog · Marketplace · Buy/Sell · Pricing'],
  ['E5', 'Treasury', 'Transfer · Transactions · Escrow · Refunds'],
  ['E6', 'Rewards', 'Daily · Achievement · Activity · Events · Loyalty'],
  ['E7', 'Games', 'Casino Framework · Dice · Blackjack · Slots · Stats'],
  ['E8', 'Security', 'Fraud · Anomalies · Abuse · Limits · Audit'],
  ['E9', 'Intelligence', 'Dashboard · Circulation · Wealth · Market · Health'],
  ['E10', 'Sovereign', 'Treasury AI · Policy · Simulation · Balancing · Command'],
]

export default function PrimeExchequerPage() {
  return (
    <main className="project-page exq-page">
      <div className="project-topbar"><Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Back to Projects</Link><span className="project-mark">PRIME EXCHEQUER</span></div>

      <section className="exq-hero" style={{ width: 'min(1180px, calc(100% - 32px))', margin: '105px auto 60px' }}>
        <div className="exq-hero-grid">
          <div className="exq-hero-copy">
            <span className="exq-kicker">Royal Treasury · E1 Foundation</span>
            <h1>PRIME<br /><span>EXCHEQUER</span></h1>
            <p className="exq-subtitle">Royal Treasury & Economic System</p>
            <p className="exq-copy">Prime Exchequer is the financial foundation of the Prime ecosystem: a C++20 + D++ service that begins with <strong>currency, wallets and a durable economic ledger</strong>, then grows toward a sovereign economic command center.</p>
            <div className="hero-actions">
              <a href="#current" className="primary-btn exq-primary">Explore E1 Foundation <ArrowDown size={16} /></a>
              <a href="#roadmap" className="secondary-btn">View E1 → E10 Roadmap <ArrowUpRight size={16} /></a>
            </div>
            <div className="exq-chips"><span><Coins size={13} /> C++20</span><span><Crown size={13} /> D++</span><span><Database size={13} /> PostgreSQL</span><span><BrainCircuit size={13} /> Groq</span><span><Globe2 size={13} /> 8-language</span></div>
          </div>
          <div className="exq-vault">
            <div className="exq-vault-frame">
              <div className="exq-vault-crown"><Crown size={30} /></div>
              <div className="exq-vault-word">EXCHEQUER</div>
              <div className="exq-vault-small">ROYAL FINANCIAL OFFICE</div>
              <div className="exq-coin-stack"><Coins size={122} strokeWidth={1.1} /></div>
              <div className="exq-ring exq-ring-a" />
              <div className="exq-ring exq-ring-b" />
            </div>
          </div>
        </div>
        <div className="exq-stat-grid">
          <div className="exq-stat current"><strong>E1</strong><span>Current foundation</span></div>
          <div className="exq-stat"><strong>5</strong><span>Implemented modules</span></div>
          <div className="exq-stat"><strong>6</strong><span>Public commands</span></div>
          <div className="exq-stat"><strong>8</strong><span>UI languages</span></div>
        </div>
      </section>

      <section className="section" id="current">
        <div className="section-heading"><span className="eyebrow">01 / CURRENT STATE</span><h2>E1 is the real product today.</h2><p>The showcase deliberately separates implemented functionality from the future E2–E10 roadmap.</p></div>
        <div className="exq-current-layout">
          <div className="exq-panel exq-status-panel">
            <div className="exq-label"><CheckCircle2 size={13} /> IMPLEMENTED</div>
            <h3>Exchequer Foundation</h3>
            <p>Five financial primitives form the current baseline. The system uses integer BIGINT values for money and keeps AI advisory-only.</p>
            <div className="exq-status-row"><span>Economic status</span><b>ACTIVE / PAUSED / MAINTENANCE</b></div>
            <div className="exq-status-row"><span>Wallet state</span><b>ACTIVE / LOCKED / DISABLED</b></div>
            <div className="exq-status-row"><span>Currency</span><b>KINGDOM_COIN ◈</b></div>
          </div>
          <div className="exq-module-grid">
            {currentModules.map(([n, title, desc]) => <motion.div key={n} className="exq-module" whileHover={{ y: -4 }}><span>{n}</span><div><strong>{title}</strong><p>{desc}</p></div></motion.div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">02 / PUBLIC SURFACE</span><h2>Six commands. One treasury workspace.</h2><p>The current E1 bot keeps its command surface compact while buttons navigate inside the existing Discord message.</p></div>
        <div className="exq-command-grid">
          {['/exchequer', '/wallet', '/ledger', '/market', '/rewards', '/games'].map((cmd, i) => {
            const icons = [Landmark, WalletCards, ReceiptText, ShoppingBag, Sparkles, Dices]
            const Icon = icons[i]
            return <motion.div className="exq-command" key={cmd} whileHover={{ y: -4 }}><div><Icon size={18} /></div><code>{cmd}</code><span>{['Main treasury panel','Personal wallet','Economic ledger','Future E4 commerce surface','Future E6 rewards surface','Future E7 games surface'][i]}</span></motion.div>
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">03 / MONEY MODEL</span><h2>Integer-first financial state.</h2><p>E1 treats money as explicit integer balances and keeps transaction history auditable.</p></div>
        <div className="exq-flow">
          <div className="exq-flow-card"><Coins size={21} /><strong>Currency</strong><p><code>KINGDOM_COIN</code><br />precision, bounds, status</p></div>
          <span>→</span>
          <div className="exq-flow-card"><WalletCards size={21} /><strong>Wallet</strong><p>user + currency<br />non-negative BIGINT balance</p></div>
          <span>→</span>
          <div className="exq-flow-card"><ReceiptText size={21} /><strong>Ledger</strong><p>credit · debit · adjustment<br />before / after snapshots</p></div>
          <span>→</span>
          <div className="exq-flow-card"><BarChart3 size={21} /><strong>Auditability</strong><p>source + actor + timestamp<br />wallet history index</p></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">04 / AI ADVISOR</span><h2>Read-only intelligence at E1.</h2><p>Prime Exchequer already includes an advisory layer, but it cannot modify or invent financial state.</p></div>
        <div className="exq-ai-board">
          <div className="exq-ai-orbit"><BrainCircuit size={28} /><strong>GROQ</strong><span>READ-ONLY ADVISOR</span></div>
          <div className="exq-ai-flow"><div><small>INPUT</small><strong>Locale</strong><span>Balance</span><span>Ledger count</span></div><b>→</b><div className="accent"><small>ADVISORY</small><strong>Economic overview</strong><span>No mutation</span><span>No invented facts</span></div><b>→</b><div><small>OUTPUT</small><strong>8-language response</strong><span>Concise</span><span>Context-limited</span></div></div>
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="section-heading"><span className="eyebrow">05 / E1 → E10 ROADMAP</span><h2>Foundation today. Sovereign treasury tomorrow.</h2><p>The future bands below are roadmap targets, not claims that those capabilities already exist in E1.</p></div>
        <div className="exq-roadmap-visual"><img src="/prime-exchequer-roadmap.png" alt="Prime Exchequer E1 to E10 economic roadmap" /></div>
        <div className="exq-stage-list">
          {stages.map(([id, title, desc, state], i) => <motion.div key={id} className={`exq-stage ${state === 'CURRENT' ? 'current' : ''}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * 0.03 }}><span>{id}</span><div><h3>{title}</h3><p>{desc}</p></div><b>{state === 'CURRENT' ? 'LIVE' : 'ROADMAP'}</b></motion.div>)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">06 / FUTURE ECONOMIC BANDS</span><h2>From currency to an economic command center.</h2></div>
        <div className="exq-future-grid">{futureBands.map(([id, title, mods]) => <div key={id} className="exq-future-card"><span>{id}</span><strong>{title}</strong><p>{mods}</p></div>)}</div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">07 / SAFETY CONTRACT</span><h2>What E1 intentionally does not claim.</h2><p>The current foundation keeps the future economy clearly separated from implemented capability.</p></div>
        <div className="exq-boundary-grid">
          <div className="exq-boundary allow"><div><CheckCircle2 size={16} /></div><strong>Implemented now</strong><p>Currency foundation, wallets, balance state, economic configuration, ledger history, six public commands and read-only AI advice.</p></div>
          <div className="exq-boundary deny"><div><LockKeyhole size={16} /></div><strong>Future roadmap</strong><p>Transfers, marketplace, dynamic pricing, reward systems, games, fraud controls, economic intelligence and automated balancing remain in E2–E10.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">08 / ARCHITECTURE</span><h2>Small Discord surface. Rich backend foundation.</h2></div>
        <div className="exq-tech-grid">
          {[
            ['C++20', 'Core application runtime and service orchestration.'],
            ['D++', 'Discord command and component layer.'],
            ['PostgreSQL / libpqxx', 'Durable currency, wallet, ledger and configuration state.'],
            ['Groq', 'Read-only E1 economic advisor.'],
            ['8-language i18n', 'vi-VN, en-US, zh-CN, ja-JP, ko-KR, fr-FR, de-DE, es-ES.'],
            ['Panel UI', 'Buttons update the existing Discord message instead of creating noisy new messages.'],
          ].map(([t,d]) => <div className="exq-panel" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><span className="eyebrow">09 / CURRENT STATUS</span><h2>Early-stage, but structurally ready to grow.</h2></div>
        <div className="exq-final-status">
          <div className="exq-final-badge"><Crown size={24} /><span>E1 FOUNDATION</span></div>
          <div><h3>Prime Exchequer is not finished — and that is the point.</h3><p>The current showcase makes the implementation boundary visible while preserving the long-term E10 vision. Future capabilities can be added without rewriting the identity of the project page.</p><div className="exq-status-pills"><span>E1 LIVE</span><span>E2–E10 ROADMAP</span><span>50 TARGET MODULES</span></div></div>
        </div>
      </section>

      <section className="final-cta exq-final-cta">
        <span className="eyebrow">PRIME EXCHEQUER</span>
        <h2>Build the treasury one stage at a time.</h2>
        <p>A royal economic foundation today, with a roadmap toward sovereign treasury intelligence.</p>
        <Link href="/#projects" className="primary-btn exq-primary">Back to Polycephaly <ArrowUpRight size={17} /></Link>
      </section>

      <footer><span>POLYCEPHALY</span><small>Prime Exchequer · E1 Foundation</small><small>© 2026 Polycephaly</small></footer>
    </main>
  )
}
