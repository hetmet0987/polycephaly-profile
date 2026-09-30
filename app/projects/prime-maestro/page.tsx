'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft, ArrowDown, ArrowUpRight, AudioLines, BadgeCheck, BarChart3, Bot,
  ChevronRight, CirclePlay, Clock3, Disc3, Headphones, ListMusic,
  LockKeyhole, Music2, Radio, RefreshCw, Search, ShieldCheck, Sparkles, Star,
  Users, Waves
} from 'lucide-react'

const stages = [
  ['01', 'Universal Music Playback', 'Foundation for playback and voice sessions.'],
  ['02', 'MusicBrainz + Jamendo Providers', 'Catalog evidence and provider architecture.'],
  ['03', 'Unified Identity / Exact Resolution', 'Resolve the recording the listener actually meant.'],
  ['04', 'Queue & Session Engine 2.0', 'Session state, queue ownership and continuity.'],
  ['05', 'Smart Search & Match', 'Identity, version and confidence-first matching.'],
  ['06', 'Audio Quality & Resilience', 'Bounded retries, provider recovery and voice reconnect.'],
  ['07', 'Royal Music Experience', 'One central player with concise controls.'],
  ['08', 'Personal Music & Server Profiles', 'Favorites, recent listening and server listening data.'],
  ['09', 'DJ / Permissions / Community Controls', 'Governed destructive controls and fair skip behavior.'],
  ['10', 'Production Intelligence & Final Release', 'Intelligent Autoplay, production status and startup self-test.'],
]

const commands = [
  ['/play', 'Search, exact-match and queue a recording.'],
  ['/music', 'Royal Player, queue, Autoplay, Favorites, Server Profile and status.'],
  ['/dj-roles', 'Configure Grand Maestro, Grand Conductor and Royal DJ roles.'],
  ['/help', 'Compact Stage 10 usage guide.'],
]

const providerPath = [
  ['Local Library', 'Fast local source when available.'],
  ['Audius', 'Authorized network playback provider.'],
  ['External Backend', 'Secondary playback backend.'],
  ['Jamendo', 'Final configured playback provider.'],
]

export default function PrimeMaestroPage() {
  return (
    <main className="maestro-page">
      <nav className="maestro-nav">
        <Link href="/" className="maestro-brand"><span>✦</span> PRIME MAESTRO</Link>
        <div className="maestro-nav-links">
          <a href="#player">Player</a><a href="#stages">Stages</a><a href="#match">Smart Match</a><a href="#governance">Governance</a><a href="#autoplay">Autoplay</a>
        </div>
        <Link href="/" className="maestro-back"><ArrowLeft size={14}/> Profile</Link>
      </nav>

      <section className="maestro-hero">
        <div className="maestro-hero-glow" />
        <div className="maestro-record"><div className="maestro-record-center"><Music2 size={36}/><span>PM</span></div></div>
        <div className="maestro-hero-copy">
          <span className="maestro-kicker">ROYAL MUSIC & AUDIO SERVICE · STAGE 10</span>
          <h1>PRIME <em>MAESTRO</em></h1>
          <p className="maestro-lead">A production-ready music system built around exact recording identity, resilient playback, a governed Royal Player and intelligent continuation.</p>
          <div className="maestro-actions">
            <a href="#player" className="maestro-primary">Open Royal Player <ArrowDown size={16}/></a>
            <a href="#stages" className="maestro-secondary">Explore architecture <ArrowUpRight size={15}/></a>
          </div>
          <div className="maestro-chips"><span>Rust 2021</span><span>Discord</span><span>Songbird 0.6.0</span><span>PostgreSQL</span><span>Groq</span></div>
        </div>
      </section>

      <section id="player" className="maestro-section">
        <div className="maestro-heading"><span>01 / ROYAL PLAYER</span><h2>One player. The whole listening experience.</h2><p>Stage 7 keeps the public surface small while moving queue state, controls, diagnostics, profiles and autoplay into one central music workspace.</p></div>
        <div className="player-shell">
          <div className="player-top"><span><span className="live-dot"/> NOW PLAYING</span><span>VOICE · CONNECTED</span></div>
          <div className="player-main">
            <div className="player-art"><Disc3 size={58}/><span>PRIME MAESTRO</span></div>
            <div className="player-meta"><span className="mini-label">EXACT RESOLUTION</span><h3>Recording identity stays intact.</h3><p>Artwork, title, artist, requester, source and playback state stay together in one readable surface.</p><div className="player-progress"><span style={{width:'62%'}} /></div><div className="player-time"><span>02:14</span><span>03:38</span></div></div>
            <div className="player-controls"><button aria-label="previous"><ChevronRight size={16} className="flip"/></button><button className="play" aria-label="play"><CirclePlay size={22}/></button><button aria-label="next"><ChevronRight size={16}/></button></div>
          </div>
          <div className="player-bottom"><span>LOOP · OFF</span><span>QUEUE · 04</span><span>VOLUME · 100%</span><span>↻ REFRESH</span></div>
        </div>
      </section>

      <section id="stages" className="maestro-dark-section">
        <div className="maestro-section maestro-stage-section">
          <div className="maestro-heading"><span>02 / ROADMAP</span><h2>Stage 01 → Stage 10.</h2><p>Prime Maestro closes its main roadmap at Stage 10 instead of endlessly expanding the public command surface.</p></div>
          <div className="maestro-stage-list">
            {stages.map(([n,title,desc],i)=>(<motion.div key={n} className={`maestro-stage ${i===9?'current':''}`} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}}><span>STAGE {n}</span><div><h3>{title}</h3><p>{desc}</p></div><b>{i===9?'FINAL':'•'}</b></motion.div>))}
          </div>
        </div>
      </section>

      <section id="match" className="maestro-section">
        <div className="maestro-heading"><span>03 / SMART MATCH</span><h2>Identity before convenience.</h2><p>Stage 5 ranks the recording a listener meant, not merely a source that happens to be playable.</p></div>
        <div className="match-flow">
          <div><Search size={20}/><span>QUERY PROFILER</span><strong>Artist - Title</strong><p>Normalizes punctuation, common noise and query shape.</p></div><i>→</i>
          <div><Sparkles size={20}/><span>VERSION CLASSIFIER</span><strong>Original / Live / Remix</strong><p>Detects version intent and applies conflict penalties.</p></div><i>→</i>
          <div><BadgeCheck size={20}/><span>CONFIDENCE</span><strong>0 — 100</strong><p>Provider evidence influences ranking without overriding severe conflicts.</p></div><i>→</i>
          <div className="match-accent"><CirclePlay size={20}/><span>EXACT RESOLUTION</span><strong>Authorized source</strong><p>Only the accepted artist/title/version identity may reach playback.</p></div>
        </div>
        <div className="maestro-callout"><ShieldCheck size={19}/><div><strong>No silent substitutions.</strong><p>A dead stream may change provider, but not recording identity. Covers and remixes are never used as a resilience shortcut.</p></div></div>
      </section>

      <section className="maestro-section">
        <div className="maestro-heading"><span>04 / PLAYBACK PATH</span><h2>Provider resilience without identity drift.</h2><p>Stage 6 changes the path to the same recording when a provider fails.</p></div>
        <div className="provider-path">{providerPath.map(([name,desc],i)=><div key={name} className="provider-step"><span>{String(i+1).padStart(2,'0')}</span><Waves size={18}/><strong>{name}</strong><p>{desc}</p>{i<providerPath.length-1&&<i>↓</i>}</div>)}</div>
        <div className="resilience-grid"><div><Clock3 size={18}/><strong>Bounded retries</strong><p>Timeouts and limited retries stop failed preparation from poisoning queue metadata.</p></div><div><RefreshCw size={18}/><strong>Voice reconnect</strong><p>Attempts to rejoin when Maestro itself disconnects during an active session.</p></div><div><BarChart3 size={18}/><strong>Per-guild telemetry</strong><p>Latency, retry count, recovered failures and queue consistency warnings.</p></div></div>
      </section>

      <section className="maestro-section">
        <div className="maestro-heading"><span>05 / PERSONAL MUSIC</span><h2>Listening becomes useful memory.</h2><p>Stage 8 only counts a play once a recording actually becomes the current Songbird track.</p></div>
        <div className="memory-grid"><div className="memory-card"><Star size={20}/><span>PERSONAL</span><h3>Favorites</h3><p>Up to 50 saved recordings, replayed through fresh exact resolution.</p></div><div className="memory-card"><Clock3 size={20}/><span>HISTORY</span><h3>Recent listening</h3><p>Up to 30 recent recordings, based on actual track starts rather than searches.</p></div><div className="memory-card"><Users size={20}/><span>SERVER</span><h3>Music profile</h3><p>Track starts, unique listeners, ranked recordings and recent server listening.</p></div><div className="memory-card safe"><LockKeyhole size={20}/><span>STORAGE</span><h3>Metadata only</h3><p>No playback bearer tokens or raw authenticated stream URLs are persisted.</p></div></div>
      </section>

      <section id="governance" className="maestro-dark-section">
        <div className="maestro-section">
          <div className="maestro-heading"><span>06 / DJ GOVERNANCE</span><h2>Power follows the session.</h2><p>Stage 9 adds community controls without creating a second command explosion.</p></div>
          <div className="governance-grid">
            <div className="gov-card featured"><Headphones size={22}/><span>ROLE AUTHORITY</span><h3>♬ GRAND MAESTRO</h3><p>Shared player controls can be reserved for DJ roles or the session host.</p><div className="role-stack"><b>♬ GRAND MAESTRO</b><b>♩ GRAND CONDUCTOR</b><b>♪ ROYAL DJ</b></div></div>
            <div className="gov-card"><LockKeyhole size={20}/><span>PROTECTED</span><h3>Destructive controls</h3><p>Pause, stop, loop, shuffle, clear, remove and move can require DJ/session-host authority.</p></div>
            <div className="gov-card"><Users size={20}/><span>FAIRNESS</span><h3>Vote Skip</h3><p>Requester, host and DJ can skip immediately; other listeners contribute one vote each.</p></div>
            <div className="gov-card"><Clock3 size={20}/><span>ANTI-SPAM</span><h3>Queue discipline</h3><p>Pending-per-user limits, request cooldowns and optional channel restrictions.</p></div>
          </div>
          <div className="governance-footer"><span>Public command surface</span><code>/play</code><code>/music</code><code>/dj-roles</code><code>/help</code></div>
        </div>
      </section>

      <section id="autoplay" className="maestro-section">
        <div className="maestro-heading"><span>07 / INTELLIGENT AUTOPLAY</span><h2>Continuation based on real listening.</h2><p>Stage 10 uses actual server listening history, excludes the recording that just ended and only starts a recommendation after exact resolution through the configured playback stack.</p></div>
        <div className="autoplay-flow">
          <div><Radio size={18}/><span>HISTORY</span><strong>Actual track starts</strong><p>Established recordings only.</p></div><i>→</i>
          <div><ListMusic size={18}/><span>ROTATION</span><strong>Top recordings</strong><p>Recent item excluded.</p></div><i>→</i>
          <div><BadgeCheck size={18}/><span>RESOLUTION</span><strong>Exact artist / title</strong><p>Authorized source required.</p></div><i>→</i>
          <div className="match-accent"><CirclePlay size={18}/><span>PLAY</span><strong>Start or stop</strong><p>No exact source means no autoplay.</p></div>
        </div>
      </section>

      <section className="maestro-section">
        <div className="maestro-heading"><span>08 / PRODUCTION INTELLIGENCE</span><h2>Stage 10 closes the product around operations.</h2><p>No new provider, no new command family — the final stage adds production visibility and safe startup behavior.</p></div>
        <div className="prod-grid"><div><BarChart3 size={20}/><span>STATUS</span><strong>Uptime · sessions · cache</strong><p>Production status is visible without exposing secrets.</p></div><div><Bot size={20}/><span>SELF-TEST</span><strong>Local/profile paths</strong><p>Startup validates local directories and configuration without blocking on external network calls.</p></div><div><AudioLines size={20}/><span>ENGINE</span><strong>Stage 4 → Stage 9 retained</strong><p>Queue, match, resilience, player, profiles and governance remain intact.</p></div></div>
      </section>

      <section className="maestro-section">
        <div className="maestro-heading"><span>09 / PUBLIC SURFACE</span><h2>Small surface. Deep engine.</h2><p>Prime Maestro keeps the visible Discord interface intentionally compact.</p></div>
        <div className="command-grid">{commands.map(([cmd,desc])=><div key={cmd}><code>{cmd}</code><p>{desc}</p></div>)}</div>
      </section>

      <section className="maestro-final">
        <div className="final-maestro-mark"><Music2 size={27}/></div>
        <span>STAGE 10 · 1.0.0 · FINAL MAIN ROADMAP</span>
        <h2>Royal listening, built around the recording that was actually meant.</h2>
        <p>Prime Maestro closes the Prime Music roadmap with Smart Match, resilient playback, governed sessions, personal listening memory and intelligent autoplay.</p>
        <Link href="/" className="maestro-final-link">Back to Polycephaly Profile <ArrowUpRight size={15}/></Link>
      </section>

      <footer className="maestro-footer"><span>PRIME MAESTRO</span><small>Royal Music & Audio Experience · Stage 10</small><small>Polycephaly · 2026</small></footer>
    </main>
  )
}
