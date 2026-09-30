'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, BookOpen, Brain, CheckCircle2, ChevronRight, Globe2,
  FileText, Languages, LockKeyhole, MessageCircle, MessageSquareText,
  ShieldCheck, Sparkles, Target, WandSparkles, Workflow,
} from 'lucide-react'

const stages = [
  ['STAGE 01', 'Universal Translator', 'The core /translate workflow with Auto Detect, Natural / Literal / Formal modes, private results and 45+ translation targets.'],
  ['STAGE 02', 'Context-Aware Translation', 'Context and tone resolve ambiguity without creating new facts; confidence and up to two alternative interpretations surface uncertainty.'],
  ['STAGE 03', 'Conversation Interpreter', 'Two users opt in to a translated conversation; the partner accepts and only explicit /conversation say turns reach the provider.'],
  ['STAGE 04', 'Message Translator', 'Translate one accessible Discord message by link without enabling channel-wide monitoring or MESSAGE_CONTENT intent.'],
  ['STAGE 05', 'Document Translation', 'UTF-8 TXT and Markdown translation with structure preservation, a 1 MB file limit and up to 12,000 characters per translation pass.'],
  ['STAGE 06', 'Language Assistant', 'Explain slang, idioms, nuance, tone and relevant cultural meaning through one practical /explain workflow.'],
  ['STAGE 07', 'Personal Glossary', 'Keep recurring names, titles, technical terms and community vocabulary consistent per user, guild and language pair.'],
  ['STAGE 08', 'Translation Review', 'Review an existing translation, flag meaningful semantic problems only, and return a complete correction only when needed.'],
  ['STAGE 09', 'Quick Translate', 'Set a usual target once, then use a one-field /quick-translate workflow for everyday text.'],
  ['STAGE 10', 'Personal Preferences', 'Inspect and change default target language, translation mode and tone behavior in one predictable preferences surface.'],
]

const capabilities = [
  ['Translate', '45+ language targets', Languages],
  ['Understand', 'Context + nuance + confidence', Brain],
  ['Connect', 'Opt-in conversation turns', MessageCircle],
  ['Review', 'Meaning-first quality checks', CheckCircle2],
]

const commandFamilies = [
  ['/translate', 'Advanced translation', ['text', 'to', 'from', 'mode', 'context', 'tone']],
  ['/conversation', 'Opt-in multilingual conversation', ['language', 'start', 'say', 'status', 'end']],
  ['/glossary', 'Personal terminology memory', ['add', 'list', 'remove']],
  ['/preferences', 'Personal translation defaults', ['show', 'set', 'reset']],
]

const privacyRules = [
  ['No channel-wide monitoring', 'Prime Interpreter does not listen to arbitrary channel messages for translation.', ShieldCheck],
  ['Explicit conversation turns', 'Only content sent through the opt-in conversation workflow reaches the translation provider.', MessageSquareText],
  ['Private results', 'Translation, explanation, review and document workflows return private results where specified by the source design.', LockKeyhole],
  ['No raw text persistence', 'The documented database logs keep metadata rather than the source text for sensitive translation flows.', FileText],
]

const providerFacts = [
  ['Provider', 'Groq API'],
  ['Model', 'openai/gpt-oss-120b'],
  ['Output', 'JSON response mode'],
  ['Architecture', 'Provider-oriented'],
  ['Translation layer', '45+ targets'],
  ['UI layer', '8 languages'],
]

export default function PrimeInterpreterPage() {
  return (
    <main className="interpreter-page">
      <header className="project-nav interpreter-nav">
        <Link href="/#projects" className="back-link"><ArrowLeft size={15} /> Projects</Link>
        <span className="project-nav-brand">POLYCEPHALY / PRIME INTERPRETER</span>
        <span className="project-status interpreter-status"><span /> STAGE 10 / PREFERENCES</span>
      </header>

      <section className="interpreter-hero">
        <div className="interpreter-hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="interpreter-kicker">ROYAL LANGUAGE & INTERPRETATION SERVICE / RUST / AI TRANSLATION</span>
            <h1>Prime <em>Interpreter</em></h1>
            <p className="interpreter-lead">A multilingual language service that moves from direct translation to context, conversation, explanation, review and personal preferences without turning the server into an always-on translation stream.</p>
            <div className="interpreter-actions">
              <a href="#capabilities" className="interpreter-primary">Enter language service <ArrowRight size={16} /></a>
              <Link href="/#projects" className="interpreter-secondary">Back to projects</Link>
            </div>
            <div className="interpreter-chips"><span>Rust</span><span>Serenity</span><span>SQLx</span><span>PostgreSQL</span><span>Groq</span><span>Stage 10</span></div>
          </motion.div>
        </div>

        <div className="interpreter-hero-panel" aria-hidden="true">
          <div className="language-orbit orbit-one" />
          <div className="language-orbit orbit-two" />
          <div className="language-core"><Languages size={34} /><strong>LANGUAGE</strong><span>INTERPRETATION</span></div>
          <div className="language-chip chip-en">EN</div>
          <div className="language-chip chip-vi">VI</div>
          <div className="language-chip chip-ja">JA</div>
          <div className="language-chip chip-de">DE</div>
          <div className="language-chip chip-zh">ZH</div>
          <div className="language-arrow arrow-a">→</div>
          <div className="language-arrow arrow-b">↗</div>
          <div className="language-foot"><span>45+ TARGETS</span><span>8 UI LANGUAGES</span><span>AUTO DETECT</span></div>
        </div>
      </section>

      <section className="interpreter-section" id="capabilities">
        <div className="interpreter-heading"><span>01 / LANGUAGE SERVICE</span><h2>Translate. Understand. Connect. Review.</h2><p>Prime Interpreter is presented as a service rather than a single translation command: each stage adds a practical layer while keeping the interaction understandable.</p></div>
        <div className="interpreter-capability-grid">
          {capabilities.map(([title, desc, Icon], i) => { const I = Icon as typeof Languages; return <motion.div key={title} className="interpreter-capability-card" whileHover={{ y: -5 }}><div className="cap-number">0{i + 1}</div><I size={21} /><strong>{title}</strong><p>{desc}</p></motion.div> })}
        </div>
      </section>

      <section className="interpreter-section interpreter-dark">
        <div className="interpreter-heading"><span>02 / 45+ LANGUAGE LAYER</span><h2>Two language surfaces — deliberately separate.</h2><p>The source defines 45+ translation targets while the Prime Interpreter UI uses 8 languages. These layers serve different purposes and should not be collapsed into one count.</p></div>
        <div className="language-compare">
          <div className="language-compare-card primary"><Languages size={22} /><span>TRANSLATION LAYER</span><strong>45+</strong><p>All Stage 1 translation languages remain accessible through the language resolver.</p></div>
          <div className="compare-arrow"><ChevronRight size={20} /></div>
          <div className="language-compare-card secondary"><Globe2 size={22} /><span>UI LAYER</span><strong>8</strong><p>The bot's own interface is localized separately from translation targets.</p></div>
        </div>
      </section>

      <section className="interpreter-section">
        <div className="interpreter-heading"><span>03 / STAGE 01 → STAGE 10</span><h2>From universal translation to personal preferences.</h2><p>Stage 10 is the final main feature stage. The source explicitly says future work should favor stabilization, UX cleanup, testing, performance and integration rather than more public-command growth.</p></div>
        <div className="interpreter-stage-list">
          {stages.map(([id, title, desc], i) => <motion.article key={id} className={`interpreter-stage ${i === stages.length - 1 ? 'current' : ''}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .035 }}><span>{id}</span><div><h3>{title}</h3><p>{desc}</p></div><b>{String(i + 1).padStart(2, '0')}</b></motion.article>)}
        </div>
      </section>

      <section className="interpreter-section interpreter-dark">
        <div className="interpreter-heading"><span>04 / CONTEXT-AWARE TRANSLATION</span><h2>Meaning protection over blind word substitution.</h2><p>Context can resolve pronouns, slang, idioms, jargon and ambiguous words. It may never manufacture new facts. Tone modifies register without changing factual meaning.</p></div>
        <div className="context-grid">
          <div className="context-card"><span className="mini-label">SOURCE</span><strong>I saw her duck.</strong><p>Without context, “duck” can remain materially ambiguous.</p></div>
          <div className="context-arrow">→</div>
          <div className="context-card context-card-accent"><span className="mini-label">CONTEXT</span><strong>She avoided a flying ball.</strong><p>The context resolves “duck” as a verb and raises confidence.</p></div>
          <div className="confidence-panel"><Target size={20} /><span>CONFIDENCE</span><strong>HIGH / MEDIUM / LOW</strong><p>When ambiguity remains, the system keeps the uncertainty visible and may show up to two alternative interpretations.</p></div>
        </div>
      </section>

      <section className="interpreter-section">
        <div className="interpreter-heading"><span>05 / CONVERSATION INTERPRETER</span><h2>Opt in — then speak.</h2><p>Two users can create a translated conversation only after the partner accepts. Prime Interpreter does not auto-read the channel; each translated turn is explicitly submitted through the conversation workflow.</p></div>
        <div className="conversation-flow">
          <div><span>01</span><MessageCircle size={20} /><strong>Save languages</strong><p>/conversation language</p></div><i>→</i>
          <div><span>02</span><div className="custom-users-icon" aria-hidden="true"><span /><span /></div><strong>Invite partner</strong><p>/conversation start</p></div><i>→</i>
          <div><span>03</span><CheckCircle2 size={20} /><strong>Partner accepts</strong><p>Explicit consent</p></div><i>→</i>
          <div><span>04</span><MessageSquareText size={20} /><strong>Send a turn</strong><p>/conversation say</p></div>
        </div>
      </section>

      <section className="interpreter-section interpreter-dark">
        <div className="interpreter-heading"><span>06 / ONE-TASK LANGUAGE TOOLS</span><h2>Small surfaces that solve specific language problems.</h2><p>Later stages add focused workflows without turning every concept into another command family.</p></div>
        <div className="tool-card-grid">
          <div className="interpreter-tool-card"><MessageSquareText size={20} /><span>MESSAGE TRANSLATOR</span><strong>/translate-message</strong><p>Translate one accessible Discord message from its link, privately, without channel-wide monitoring.</p></div>
          <div className="interpreter-tool-card"><FileText size={20} /><span>DOCUMENT TRANSLATION</span><strong>/translate-document</strong><p>Translate UTF-8 TXT or Markdown files while preserving headings, lists, Markdown, URLs and numbers.</p></div>
          <div className="interpreter-tool-card"><WandSparkles size={20} /><span>LANGUAGE ASSISTANT</span><strong>/explain</strong><p>Explain slang, idioms, nuance, tone and relevant cultural meaning with Simple or Detailed depth.</p></div>
          <div className="interpreter-tool-card"><BookOpen size={20} /><span>PERSONAL GLOSSARY</span><strong>/glossary</strong><p>Apply user- and guild-scoped preferred terminology automatically during translation.</p></div>
        </div>
      </section>

      <section className="interpreter-section">
        <div className="interpreter-heading"><span>07 / TRANSLATION REVIEW</span><h2>“Is this translation actually correct?”</h2><p>Stage 8 reviews an existing translation for meaningful errors rather than forcing stylistic rewrites. A good translation returns a simple GOOD verdict; only material problems trigger correction output.</p></div>
        <div className="review-board">
          <div className="review-source"><span>ORIGINAL</span><strong>Source meaning</strong><p>Actors, negation, tense, quantities, names, URLs, idioms and terminology are compared.</p></div>
          <div className="review-center"><Workflow size={22} /><b>REVIEW</b><span>GOOD / NEEDS_FIX</span></div>
          <div className="review-target"><span>OUTPUT</span><strong>Corrected translation</strong><p>Up to five meaningful issues are shown only when they exist; a complete correction is returned when needed.</p></div>
        </div>
      </section>

      <section className="interpreter-section interpreter-dark">
        <div className="interpreter-heading"><span>08 / QUICK TRANSLATE + PREFERENCES</span><h2>Advanced when needed. One field when not.</h2><p>Stage 9 reduces everyday use to a one-field workflow. Stage 10 adds one predictable place to inspect and change default target language, translation mode and tone behavior.</p></div>
        <div className="quick-layout">
          <div className="quick-card"><span>EVERYDAY PATH</span><code>/quick-language language:Vietnamese</code><div className="quick-arrow">↓</div><code>/quick-translate text:"..."</code><p>Auto Detect · Natural · preserved tone · matching glossary</p></div>
          <div className="quick-card accent"><span>PERSONAL SETTINGS</span><code>/preferences show</code><code>/preferences set</code><code>/preferences reset</code><p>Per user · per guild · default target · mode · tone</p></div>
        </div>
      </section>

      <section className="interpreter-section">
        <div className="interpreter-heading"><span>09 / PROVIDER ARCHITECTURE</span><h2>AI at the edge, language workflow at the core.</h2><p>The Discord layer is intentionally provider-oriented. The current provider is Groq, while the design leaves room for other translation providers without redesigning the Discord layer.</p></div>
        <div className="provider-grid">
          {providerFacts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </div>
        <div className="provider-note"><Sparkles size={20} /><div><strong>Why provider-oriented?</strong><p>Contextual multilingual understanding, idiom and slang handling, automatic source detection and register control can be provided behind one translation interface.</p></div></div>
      </section>

      <section className="interpreter-section interpreter-dark">
        <div className="interpreter-heading"><span>10 / PRIVACY ARCHITECTURE</span><h2>Language assistance without background surveillance.</h2><p>The project explicitly avoids automatic channel-wide translation and background message monitoring. Sensitive workflows are designed around explicit user action.</p></div>
        <div className="privacy-grid">
          {privacyRules.map(([title, desc, Icon]) => { const I = Icon as typeof ShieldCheck; return <motion.div key={title} className="privacy-card" whileHover={{ y: -4 }}><I size={20} /><strong>{title}</strong><p>{desc}</p></motion.div> })}
        </div>
      </section>

      <section className="interpreter-section">
        <div className="interpreter-heading"><span>11 / COMMAND FAMILIES</span><h2>A broad feature set, grouped by user intent.</h2><p>The current source contains multiple top-level workflows, but the main usability model is still organized around what a user wants to accomplish: translate, converse, explain, review, remember or personalize.</p></div>
        <div className="command-family-grid">
          {commandFamilies.map(([cmd, desc, subs]) => <div className="command-family" key={cmd}><div className="family-head"><code>{cmd}</code><span>{desc}</span></div><div className="family-pills">{(subs as string[]).map(s => <span key={s}>{s}</span>)}</div></div>)}
        </div>
      </section>

      <section className="interpreter-section interpreter-dark interpreter-final">
        <div className="final-language-mark"><Languages size={28} /></div>
        <span>STAGE 10 / PERSONAL PREFERENCES</span>
        <h2>A language service that knows when to be powerful — and when to stay simple.</h2>
        <p>Prime Interpreter closes its Stage 1–10 feature phase with a predictable preferences layer, while leaving future work to stabilization, UX cleanup, testing, performance and integration.</p>
        <Link href="/#projects" className="interpreter-final-link">Back to Polycephaly <ArrowLeft size={16} /></Link>
      </section>

      <footer className="interpreter-footer"><span>PRIME INTERPRETER / ROYAL LANGUAGE & INTERPRETATION SERVICE</span><small>Stage 10 showcase · Polycephaly</small></footer>
    </main>
  )
}
