from pathlib import Path
import shutil, textwrap
root=Path('/mnt/data/_v19')

# Update project data
p=root/'lib/data.ts'
s=p.read_text(encoding='utf-8')
needle="  { name: 'Prime Interpreter', description: 'Royal Language & Interpretation Service for translation, understanding and multilingual communication.', tags: ['Rust', 'Discord', 'PostgreSQL', 'AI'], href: '/projects/prime-interpreter' },\n"
insert=needle+"  { name: 'Prime Maestro', description: 'Royal Music & Audio Experience with smart match, governed playback, resilience and intelligent autoplay.', tags: ['Rust', 'Discord', 'Songbird', 'PostgreSQL'], href: '/projects/prime-maestro' },\n"
if "name: 'Prime Maestro'" not in s:
    if needle not in s: raise SystemExit('data insertion point not found')
    s=s.replace(needle,insert)
p.write_text(s,encoding='utf-8')

# Update journey entry
p=root/'app/page.tsx'
s=p.read_text(encoding='utf-8')
old="['2026', 'Prime Interpreter', 'Royal Language & Interpretation Service / Stage 10.'], ['2026+', 'APRIS', 'Advanced Photorealistic Rendering & Illumination System.']"
new="['2026', 'Prime Interpreter', 'Royal Language & Interpretation Service / Stage 10.'], ['2026', 'Prime Maestro', 'Royal Music & Audio Experience / Stage 10.'], ['2026+', 'APRIS', 'Advanced Photorealistic Rendering & Illumination System.']"
if old in s:
    s=s.replace(old,new)
else:
    raise SystemExit('journey insertion point not found')
p.write_text(s,encoding='utf-8')

# Copy source docs
src=Path('/mnt/data/_maestro')
dest=root/'docs'/'prime-maestro'
dest.mkdir(parents=True,exist_ok=True)
for name in ['README.md','STAGE_5.md','STAGE_6.md','STAGE_7.md','STAGE_8.md','STAGE_9.md','STAGE_10.md','STAGE2_PROVIDER_REBUILD.md','AUDIUS_PROVIDER.md','AUDIO_BACKEND_CONTRACT.md','TAVILY_DISCOVERY.md','STAGE2_MUSICBRAINZ_JAMENDO.md','STAGE_10_BUILD_FIX_01.md']:
    f=src/name
    if f.exists(): shutil.copy2(f,dest/name)
(dest/'SHOWCASE_SOURCE_NOTE.md').write_text(textwrap.dedent('''\
    # Prime Maestro Showcase Source Note
\n    This showcase is based on the provided Prime Maestro Stage 10 archive.\n    Product state: Stage 10 / Production Intelligence & Final Release / version 1.0.0.\n    The showcase presents the documented public commands, Stage 4–10 retained engines, Smart Match, playback resilience, Royal Player, personal/server music profiles, DJ governance, Intelligent Autoplay and production status.\n    It does not claim live playback or provider execution inside the portfolio site.\n    '''),encoding='utf-8')

# Create showcase page
page=root/'app'/'projects'/'prime-maestro'/'page.tsx'
page.parent.mkdir(parents=True,exist_ok=True)
page.write_text(textwrap.dedent(r'''
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft, ArrowDown, ArrowUpRight, AudioLines, BadgeCheck, BarChart3, Bot,
  CheckCircle2, ChevronRight, CirclePlay, Clock3, Disc3, Headphones, ListMusic,
  LockKeyhole, Music2, Radio, RefreshCw, Search, ShieldCheck, Sparkles, Star,
  Users, Volume2, Wand2, Waves
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
''').strip()+"\n",encoding='utf-8')

# Append CSS
css=root/'app/globals.css'
css_s=css.read_text(encoding='utf-8')
if '.maestro-page' not in css_s:
    css_s += textwrap.dedent(r'''

/* Prime Maestro Stage 10 showcase */
.maestro-page{--m-gold:#e4c777;--m-gold2:#f3db8f;--m-cyan:#64d6e7;--m-violet:#8a72e8;--m-line:rgba(228,199,119,.11);--m-text:#f3f1ea;--m-muted:#918f95;background:#060609;color:var(--m-text);min-height:100vh}
.maestro-nav{position:fixed;top:0;left:0;right:0;z-index:30;height:70px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(18px,5vw,70px);background:rgba(6,6,9,.72);border-bottom:1px solid rgba(228,199,119,.08);backdrop-filter:blur(18px)}
.maestro-brand{font:700 14px 'Space Grotesk';letter-spacing:.16em}.maestro-brand span{color:var(--m-gold2);margin-right:8px}.maestro-nav-links{display:flex;gap:24px}.maestro-nav-links a{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#88848b}.maestro-nav-links a:hover{color:#fff}.maestro-back{display:inline-flex;gap:7px;align-items:center;padding:9px 12px;border:1px solid var(--m-line);border-radius:999px;font-size:10px;color:#b0a98f}
.maestro-hero{min-height:100svh;position:relative;display:grid;place-items:center;overflow:hidden;padding:130px 6vw 80px;background:radial-gradient(circle at 70% 30%,rgba(228,199,119,.10),transparent 26%),radial-gradient(circle at 25% 85%,rgba(90,61,172,.10),transparent 30%),#060609}.maestro-hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent 0 49.8%,rgba(228,199,119,.025) 50%,transparent 50.2%),linear-gradient(rgba(228,199,119,.02) 1px,transparent 1px);background-size:100% 100%,100% 70px;opacity:.34}.maestro-hero-glow{position:absolute;width:640px;height:640px;border-radius:50%;background:radial-gradient(circle,rgba(228,199,119,.11),transparent 68%);filter:blur(15px)}.maestro-record{position:absolute;left:8vw;top:19%;width:420px;height:420px;border-radius:50%;border:1px solid rgba(228,199,119,.11);background:repeating-radial-gradient(circle at center,rgba(255,255,255,.02) 0 2px,rgba(0,0,0,.03) 3px 8px),radial-gradient(circle,rgba(40,40,46,.7),#0a0a0e 68%);box-shadow:0 0 80px rgba(228,199,119,.07);animation:maestro-spin 24s linear infinite}.maestro-record:before,.maestro-record:after{content:"";position:absolute;inset:18px;border:1px dashed rgba(228,199,119,.08);border-radius:50%}.maestro-record:after{inset:52px;border-style:solid;border-color:rgba(100,214,231,.05)}.maestro-record-center{position:absolute;inset:0;margin:auto;width:112px;height:112px;border-radius:50%;display:grid;place-items:center;gap:2px;color:var(--m-gold2);background:radial-gradient(circle,rgba(228,199,119,.16),rgba(16,15,19,.94));border:1px solid rgba(228,199,119,.22);box-shadow:0 0 30px rgba(228,199,119,.09)}.maestro-record-center span{font:700 9px ui-monospace,monospace;letter-spacing:.25em;color:#9a947e;margin-top:-34px;margin-left:2px}.maestro-record-center svg{margin-top:22px}@keyframes maestro-spin{to{transform:rotate(360deg)}}
.maestro-hero-copy{position:relative;z-index:2;width:min(1020px,100%);text-align:right;margin-left:auto}.maestro-kicker{display:block;font:700 9px ui-monospace,monospace;letter-spacing:.2em;color:#a59b83}.maestro-hero h1{font:800 clamp(60px,10vw,118px)/.88 'Space Grotesk';letter-spacing:-.08em;margin:18px 0}.maestro-hero h1 em{font-style:normal;color:var(--m-gold2);text-shadow:0 0 35px rgba(228,199,119,.13)}.maestro-lead{max-width:640px;margin-left:auto;color:#aaa6aa;font-size:15px;line-height:1.85}.maestro-actions{display:flex;justify-content:flex-end;gap:10px;flex-wrap:wrap;margin-top:28px}.maestro-primary,.maestro-secondary{display:inline-flex;align-items:center;gap:8px;padding:12px 17px;border-radius:999px;font-size:12px;transition:.25s}.maestro-primary{color:#11100e;background:linear-gradient(135deg,var(--m-gold2),#b99747);box-shadow:0 12px 35px rgba(228,199,119,.13)}.maestro-secondary{color:#b5b1bb;border:1px solid var(--m-line);background:rgba(255,255,255,.02)}.maestro-primary:hover,.maestro-secondary:hover{transform:translateY(-3px)}.maestro-chips{display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap;margin-top:23px}.maestro-chips span{padding:7px 9px;border:1px solid var(--m-line);border-radius:999px;color:#938e83;font:600 9px ui-monospace,monospace;background:rgba(255,255,255,.018)}
.maestro-section{width:min(1120px,calc(100% - 40px));margin:0 auto;padding:108px 0}.maestro-dark-section{width:100%;background:linear-gradient(180deg,rgba(20,17,21,.26),rgba(7,8,11,.38))}.maestro-heading{margin-bottom:32px}.maestro-heading>span{font:700 9px ui-monospace,monospace;letter-spacing:.18em;color:#a89e80}.maestro-heading h2{font:600 clamp(33px,5vw,58px)/1.04 'Space Grotesk';letter-spacing:-.055em;margin:11px 0}.maestro-heading p{max-width:760px;color:#8d8a91;font-size:13px;line-height:1.8}
.player-shell{border:1px solid rgba(228,199,119,.13);border-radius:28px;overflow:hidden;background:linear-gradient(145deg,rgba(24,22,26,.95),rgba(10,10,14,.98));box-shadow:0 30px 80px rgba(0,0,0,.22)}.player-top,.player-bottom{display:flex;justify-content:space-between;gap:15px;padding:16px 20px;font:700 9px ui-monospace,monospace;letter-spacing:.14em;color:#78747b}.player-top{border-bottom:1px solid rgba(228,199,119,.07)}.player-bottom{border-top:1px solid rgba(228,199,119,.07);color:#80796a}.live-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#62e4a0;box-shadow:0 0 12px rgba(98,228,160,.55);margin-right:7px}.player-main{display:grid;grid-template-columns:220px 1fr 150px;gap:28px;align-items:center;padding:30px}.player-art{aspect-ratio:1;border-radius:24px;border:1px solid rgba(228,199,119,.18);display:grid;place-items:center;position:relative;background:radial-gradient(circle,rgba(228,199,119,.15),transparent 35%),repeating-conic-gradient(from 0deg,rgba(255,255,255,.03) 0 7deg,transparent 7deg 14deg),#0c0c10;color:var(--m-gold2)}.player-art span{position:absolute;bottom:12px;font:700 8px ui-monospace,monospace;letter-spacing:.2em;color:#7d7768}.player-meta .mini-label{font:700 8px ui-monospace,monospace;letter-spacing:.17em;color:#8f876f}.player-meta h3{font:600 26px 'Space Grotesk';margin:10px 0}.player-meta p{max-width:550px;color:#8d8990;line-height:1.7;font-size:11px}.player-progress{height:3px;background:#2a282d;margin-top:24px;border-radius:99px;overflow:hidden}.player-progress span{display:block;height:100%;background:linear-gradient(90deg,var(--m-gold2),var(--m-cyan));border-radius:99px}.player-time{display:flex;justify-content:space-between;margin-top:8px;color:#6f6c73;font:600 8px ui-monospace,monospace}.player-controls{display:flex;align-items:center;justify-content:flex-end;gap:8px}.player-controls button{width:42px;height:42px;border-radius:50%;border:1px solid rgba(228,199,119,.12);background:#111116;color:#aaa6ae;display:grid;place-items:center}.player-controls .play{width:54px;height:54px;color:#0c0b0a;background:linear-gradient(135deg,var(--m-gold2),#b89b4b);border:none}.player-controls .flip{transform:scaleX(-1)}
.maestro-stage-section{padding-top:108px}.maestro-stage-list{position:relative;padding-left:34px}.maestro-stage-list:before{content:"";position:absolute;left:9px;top:5px;bottom:5px;width:1px;background:linear-gradient(180deg,var(--m-gold2),rgba(100,214,231,.35),rgba(228,199,119,.08))}.maestro-stage{position:relative;display:grid;grid-template-columns:100px 1fr 60px;gap:15px;padding:16px 0 18px;border-bottom:1px solid rgba(228,199,119,.055);border-radius:15px}.maestro-stage:before{content:"";position:absolute;left:-29px;top:25px;width:8px;height:8px;border-radius:50%;background:#4b453a;box-shadow:0 0 0 4px #07080b}.maestro-stage.current{background:linear-gradient(90deg,rgba(228,199,119,.07),transparent);padding-left:10px}.maestro-stage.current:before{left:-19px;background:var(--m-gold2);box-shadow:0 0 18px rgba(228,199,119,.38),0 0 0 4px #07080b}.maestro-stage>span{font:700 9px ui-monospace,monospace;letter-spacing:.12em;color:#8b836d}.maestro-stage h3{margin:0;font:600 16px 'Space Grotesk';color:#efece5}.maestro-stage p{margin:6px 0 0;color:#87838b;font-size:11px;line-height:1.6}.maestro-stage>b{align-self:center;text-align:right;font:700 9px ui-monospace,monospace;color:#635c4d}.maestro-stage.current>b{color:var(--m-gold2)}
.match-flow,.autoplay-flow{display:grid;grid-template-columns:1fr 34px 1fr 34px 1fr 34px 1fr;gap:10px;align-items:center}.match-flow>div,.autoplay-flow>div{min-height:190px;padding:21px;border:1px solid rgba(228,199,119,.09);border-radius:20px;background:rgba(255,255,255,.018)}.match-flow>div>span,.autoplay-flow>div>span{display:block;margin-top:13px;font:700 8px ui-monospace,monospace;letter-spacing:.16em;color:#7f7768}.match-flow strong,.autoplay-flow strong{display:block;margin-top:10px;font:600 16px 'Space Grotesk'}.match-flow p,.autoplay-flow p{color:#87838a;font-size:10px;line-height:1.62}.match-flow svg,.autoplay-flow svg{color:var(--m-gold2)}.match-flow>i,.autoplay-flow>i{font-style:normal;text-align:center;color:#93845d}.match-accent{border-color:rgba(100,214,231,.16)!important;background:linear-gradient(155deg,rgba(54,154,176,.08),rgba(13,13,19,.96))!important}.maestro-callout{display:flex;gap:13px;align-items:flex-start;margin-top:14px;padding:17px 19px;border:1px solid rgba(100,214,231,.13);border-radius:16px;background:rgba(64,154,176,.05)}.maestro-callout svg{color:var(--m-cyan)}.maestro-callout strong{font:700 11px 'Space Grotesk';color:#bdebf0}.maestro-callout p{margin:4px 0 0;color:#849198;font-size:10px;line-height:1.6}
.provider-path{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.provider-step{position:relative;padding:20px;border:1px solid rgba(228,199,119,.08);border-radius:18px;background:rgba(255,255,255,.017)}.provider-step>span{font:700 8px ui-monospace,monospace;color:#665f53}.provider-step svg{display:block;margin-top:22px;color:var(--m-gold2)}.provider-step strong{display:block;margin-top:10px;font:600 14px 'Space Grotesk'}.provider-step p{color:#87838a;font-size:10px;line-height:1.55}.provider-step>i{position:absolute;right:-8px;top:50%;font-style:normal;color:#7e7358}.resilience-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:13px}.resilience-grid>div{padding:20px;border:1px solid rgba(100,214,231,.08);border-radius:18px;background:rgba(100,214,231,.02)}.resilience-grid svg{color:var(--m-cyan)}.resilience-grid strong{display:block;margin-top:10px;font:600 14px 'Space Grotesk'}.resilience-grid p{margin:6px 0 0;color:#85838a;font-size:10px;line-height:1.6}
.memory-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.memory-card{min-height:195px;padding:20px;border:1px solid rgba(228,199,119,.08);border-radius:19px;background:rgba(255,255,255,.017)}.memory-card svg{color:var(--m-gold2)}.memory-card>span{display:block;margin-top:15px;font:700 8px ui-monospace,monospace;letter-spacing:.15em;color:#7c7567}.memory-card h3{font:600 17px 'Space Grotesk';margin:8px 0}.memory-card p{color:#87838a;font-size:10px;line-height:1.62}.memory-card.safe{border-color:rgba(100,214,231,.11)}
.governance-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:10px}.gov-card{padding:22px;border:1px solid rgba(228,199,119,.08);border-radius:19px;background:rgba(255,255,255,.018);min-height:210px}.gov-card.featured{grid-row:span 2;background:radial-gradient(circle at 80% 15%,rgba(228,199,119,.08),transparent 32%),rgba(255,255,255,.018)}.gov-card>svg{color:var(--m-gold2)}.gov-card>span{display:block;margin-top:13px;font:700 8px ui-monospace,monospace;letter-spacing:.15em;color:#7c7566}.gov-card h3{font:600 19px 'Space Grotesk';margin:9px 0}.gov-card p{color:#87838a;font-size:10px;line-height:1.6}.role-stack{display:grid;gap:7px;margin-top:22px}.role-stack b{padding:8px 9px;border:1px solid rgba(228,199,119,.07);border-radius:10px;font:600 9px ui-monospace,monospace;color:#aca393}.governance-footer{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:12px;padding:16px 17px;border:1px solid rgba(228,199,119,.07);border-radius:15px;color:#807b82;font:600 9px ui-monospace,monospace}.governance-footer code{color:#d9ca99;padding:7px 9px;border-radius:999px;background:rgba(228,199,119,.05);border:1px solid rgba(228,199,119,.07)}
.prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.prod-grid>div{padding:21px;border:1px solid rgba(100,214,231,.08);border-radius:18px;background:rgba(255,255,255,.018)}.prod-grid svg{color:var(--m-cyan)}.prod-grid span{display:block;margin-top:14px;font:700 8px ui-monospace,monospace;letter-spacing:.15em;color:#6f7f88}.prod-grid strong{display:block;margin-top:8px;font:600 14px 'Space Grotesk'}.prod-grid p{color:#87838a;font-size:10px;line-height:1.6}.command-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.command-grid>div{padding:20px;border:1px solid rgba(228,199,119,.08);border-radius:18px;background:rgba(255,255,255,.017)}.command-grid code{font:700 13px ui-monospace,monospace;color:#e9dca8}.command-grid p{margin:9px 0 0;color:#85828a;font-size:10px;line-height:1.6}
.maestro-final{padding:125px 0 145px;text-align:center;width:min(950px,calc(100% - 40px));margin:0 auto;display:flex;flex-direction:column;align-items:center}.final-maestro-mark{width:76px;height:76px;border:1px solid rgba(228,199,119,.22);border-radius:24px;display:grid;place-items:center;color:var(--m-gold2);background:radial-gradient(circle,rgba(228,199,119,.11),transparent 68%);box-shadow:0 0 40px rgba(228,199,119,.07)}.maestro-final>span{margin-top:22px;font:700 9px ui-monospace,monospace;letter-spacing:.16em;color:#8d856f}.maestro-final h2{max-width:820px;margin:14px 0;font:600 clamp(34px,5vw,64px)/1.03 'Space Grotesk';letter-spacing:-.05em}.maestro-final p{max-width:720px;color:#8d8a91;font-size:13px;line-height:1.78}.maestro-final-link{display:inline-flex;align-items:center;gap:8px;margin-top:26px;color:#e5d28d;font:700 10px 'Space Grotesk';letter-spacing:.12em;text-transform:uppercase}.maestro-footer{width:min(1120px,calc(100% - 40px));margin:0 auto;padding:36px 0 50px;border-top:1px solid rgba(228,199,119,.07);display:flex;justify-content:space-between;gap:15px;color:#6f6a71;font-size:10px}.maestro-footer span{font:700 10px 'Space Grotesk';letter-spacing:.15em;color:#b1aa9a}
@media(max-width:1050px){.maestro-record{width:330px;height:330px;left:-100px}.player-main{grid-template-columns:180px 1fr}.player-controls{grid-column:1/-1;justify-content:flex-start}.provider-path{grid-template-columns:repeat(2,1fr)}.memory-grid{grid-template-columns:repeat(2,1fr)}.governance-grid{grid-template-columns:1fr 1fr}.gov-card.featured{grid-row:span 2}.match-flow,.autoplay-flow{grid-template-columns:1fr 24px 1fr;}.match-flow>div:nth-of-type(3),.match-flow>div:nth-of-type(4),.autoplay-flow>div:nth-of-type(3),.autoplay-flow>div:nth-of-type(4){margin-top:10px}.prod-grid{grid-template-columns:1fr 1fr}}
@media(max-width:750px){.maestro-nav-links{display:none}.maestro-hero{padding:110px 18px 70px}.maestro-hero-copy{text-align:center;margin-left:0}.maestro-lead{margin-left:auto;margin-right:auto}.maestro-actions,.maestro-chips{justify-content:center}.maestro-record{position:relative;left:auto;top:auto;width:250px;height:250px;opacity:.45;margin-bottom:-170px}.maestro-hero h1{font-size:58px}.maestro-section{width:min(100% - 28px,680px)}.player-top,.player-bottom{flex-wrap:wrap}.player-main{grid-template-columns:1fr;padding:20px}.player-art{max-width:260px;margin:auto}.player-controls{justify-content:center}.maestro-stage{grid-template-columns:74px 1fr}.maestro-stage>b{display:none}.provider-path,.resilience-grid,.memory-grid,.governance-grid,.prod-grid,.command-grid{grid-template-columns:1fr}.provider-step>i{display:none}.match-flow,.autoplay-flow{grid-template-columns:1fr}.match-flow>i,.autoplay-flow>i{transform:rotate(90deg)}.governance-footer{line-height:1.7}.maestro-footer{flex-direction:column;gap:9px}}
''')
    css.write_text(css_s,encoding='utf-8')

# Update package version and readme
pkg=root/'package.json'
pj=pkg.read_text(encoding='utf-8').replace('"version": "1.8.0"','"version": "1.9.0"')
pkg.write_text(pj,encoding='utf-8')
readme=root/'README.md'
r=readme.read_text(encoding='utf-8')
r=r.replace('Polycephaly Profile v1.8','Polycephaly Profile v1.9')
r += textwrap.dedent('''\n\n## v1.9.0\n- Added Prime Maestro showcase at `/projects/prime-maestro`.\n- Added Royal Player, Stage 01–10 timeline, Smart Match, playback resilience, personal/server music profiles, DJ governance, Intelligent Autoplay, production intelligence, and public command surface.\n- Added source documents under `docs/prime-maestro/`.\n- Updated project ordering so Prime Maestro appears after Prime Interpreter and before APRIS.\n''')
readme.write_text(r,encoding='utf-8')

(root/'START-HERE.md').write_text(textwrap.dedent('''\
# Polycephaly Profile v1.9.0\n\nPrime Maestro showcase added.\n\n## Start\n\n```powershell\nnpm install\nnpm run dev\n```\n\nOpen `http://localhost:3000`.\n\nPrime Maestro route: `/projects/prime-maestro`.\n\n`package.json` is at the project root.\n'''),encoding='utf-8')
print('updated')
