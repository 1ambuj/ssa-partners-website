<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Direct Taxation & Income Tax Services | SSA Chartered Accountants</title>
<meta name="description" content="End-to-end direct tax advisory, compliance, and representation for corporates, LLPs, professionals, NGOs, and individuals — SSA Chartered Accountants, India.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>
/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: #0D1B2A;
  background: #fff;
}
img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
button { font-family: inherit; cursor: pointer; }

/* ── COLOUR TOKENS ── */
:root {
  --navy:   #0C1B33;
  --navy2:  #162544;
  --navy3:  #1E2F4A;
  --orange: #E85D17;
  --orange2:#F47030;
  --orange3:#FF8C42;
  --mist:   #F5F3EF;
  --mist2:  #F0EDE8;
  --border: #DDD8CF;
  --slate:  #5A6475;
  --ink:    #0D1B2A;
  --white:  #ffffff;
  --green:  #065F46;
  --amber:  #78350F;
  --blue:   #1E3A5F;
  --red:    #7F1D1D;
  --purple: #4C1D95;
  --gold:   #B07D2C;
  --gold2:  #C99535;
  --gold3:  #EAB84A;
}

/* ── TOPBAR ── */
.topbar {
  background: var(--navy);
  display: flex; align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 64px;
  position: sticky; top: 0; z-index: 200;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.topbar-brand {
  display: flex; align-items: center; gap: 10px;
  color: #fff;
}
.topbar-logo {
  width: 38px; height: 38px; border-radius: 8px;
  background: var(--orange);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; color: #fff;
  letter-spacing: 0.02em;
  flex-shrink: 0;
}
.topbar-name { font-size: 15px; font-weight: 700; letter-spacing: 0.02em; }
.topbar-sub {
  font-size: 10px; color: rgba(255,255,255,0.45);
  letter-spacing: 0.1em; text-transform: uppercase;
}
.topbar-nav { display: flex; gap: 2rem; }
.topbar-nav a {
  color: rgba(255,255,255,0.6); font-size: 13.5px;
  letter-spacing: 0.01em; transition: color 0.15s;
  font-weight: 500;
}
.topbar-nav a:hover { color: #fff; }
.topbar-nav a.active { color: var(--orange2); }
.topbar-cta {
  background: var(--orange); color: #fff; border: none;
  padding: 9px 22px; font-size: 13px; font-weight: 600;
  border-radius: 6px; letter-spacing: 0.01em;
  transition: background 0.15s;
}
.topbar-cta:hover { background: var(--orange2); }

/* ── HERO ── */
.hero {
  background: var(--navy2);
  color: #fff;
  padding: 5rem 2.5rem 4.5rem;
  position: relative; overflow: hidden;
}
.hero::after {
  content: '';
  position: absolute; right: 0; top: 0; bottom: 0; width: 45%;
  background: radial-gradient(ellipse at 80% 50%, rgba(232,93,23,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.hero-geo {
  position: absolute; right: 5%; top: 50%; transform: translateY(-50%);
  width: 340px; height: 340px; opacity: 0.04;
  border: 1px solid #fff; border-radius: 50%;
  pointer-events: none;
}
.hero-geo::before {
  content: ''; position: absolute; inset: 40px;
  border: 1px solid #fff; border-radius: 50%;
}
.hero-geo::after {
  content: ''; position: absolute; inset: 80px;
  border: 1px solid #fff; border-radius: 50%;
}
.hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
.breadcrumb {
  font-size: 11px; color: rgba(255,255,255,0.38);
  letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 1.5rem;
}
.breadcrumb a { color: rgba(255,255,255,0.38); }
.breadcrumb span { color: var(--orange2); }
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--orange2); margin-bottom: 1.1rem; font-weight: 600;
}
.hero-eyebrow::before {
  content: ''; display: block; width: 22px; height: 1.5px;
  background: var(--orange2);
}
.hero h1 {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  font-weight: 600; line-height: 1.1;
  letter-spacing: -0.02em; max-width: 660px;
  margin-bottom: 1.25rem;
}
.hero h1 em { font-style: italic; color: var(--orange3); }
.hero-sub {
  font-size: 15px; color: rgba(255,255,255,0.6);
  max-width: 540px; line-height: 1.85; margin-bottom: 2.5rem;
}
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 3.5rem; }
.btn-primary {
  background: var(--orange); color: #fff; border: none;
  padding: 13px 28px; font-size: 13.5px; font-weight: 600;
  border-radius: 6px; letter-spacing: 0.01em;
  transition: background 0.15s;
}
.btn-primary:hover { background: var(--orange2); }
.btn-ghost {
  background: transparent; color: rgba(255,255,255,0.85);
  border: 1.5px solid rgba(255,255,255,0.25);
  padding: 13px 28px; font-size: 13.5px; font-weight: 500;
  border-radius: 6px; transition: border-color 0.15s;
}
.btn-ghost:hover { border-color: rgba(255,255,255,0.55); }
.hero-stats {
  display: flex; gap: 3rem; flex-wrap: wrap;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}
.hstat-num {
  font-family: 'Lora', serif;
  font-size: 1.65rem; font-weight: 600;
  color: var(--orange3); letter-spacing: -0.02em; line-height: 1;
}
.hstat-label {
  font-size: 11px; color: rgba(255,255,255,0.38);
  margin-top: 5px; text-transform: uppercase; letter-spacing: 0.08em;
}

/* ── COMPLIANCE BAR ── */
.compliance-bar {
  background: #FFF8F5;
  border-top: 3px solid var(--orange);
  padding: 1.25rem 2.5rem;
  display: flex; align-items: flex-start; gap: 1rem;
}
.cb-icon {
  flex-shrink: 0; width: 34px; height: 34px;
  background: var(--orange); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 15px; margin-top: 2px;
}
.cb-content { flex: 1; }
.cb-head {
  font-size: 10.5px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: #C2410C; margin-bottom: 5px;
}
.cb-text { font-size: 13px; color: #7C3B1A; line-height: 1.65; }
.pill-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
.pill {
  font-size: 11px; font-weight: 600; padding: 3px 10px;
  border-radius: 3px; letter-spacing: 0.03em;
}
.pill-orange { background: #FFEDD5; color: #9A3412; }
.pill-green  { background: #D1FAE5; color: #065F46; }
.pill-amber  { background: #FEF3C7; color: #78350F; }
.pill-blue   { background: #DBEAFE; color: #1E3A5F; }
.pill-purple { background: #EDE9FE; color: #4C1D95; }
.pill-navy   { background: #E0E7FF; color: #1E40AF; }

/* ── LAYOUT ── */
.container { max-width: 1100px; margin: 0 auto; }
.sec { padding: 4rem 2.5rem; }
.sec-mist { background: var(--mist); }
.sec-dark { background: var(--navy); color: #fff; }
.sec-navy2 { background: var(--navy2); color: #fff; }
.sec-label {
  font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--orange); font-weight: 700; margin-bottom: 0.5rem;
}
.sec-dark .sec-label, .sec-navy2 .sec-label { color: var(--orange2); }
.sec-h {
  font-family: 'Lora', serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 600; letter-spacing: -0.02em;
  line-height: 1.2; margin-bottom: 0.5rem; color: var(--ink);
}
.sec-dark .sec-h, .sec-navy2 .sec-h { color: #fff; }
.sec-rule {
  width: 32px; height: 2.5px; background: var(--orange);
  margin: 0.65rem 0 1.5rem; border-radius: 2px;
}
.sec-intro {
  font-size: 14.5px; color: var(--slate); line-height: 1.85;
  max-width: 680px; margin-bottom: 2rem;
}
.sec-dark .sec-intro, .sec-navy2 .sec-intro { color: rgba(255,255,255,0.55); }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: start; }

/* ── INTRO CARDS ── */
.intro-text p {
  font-size: 14.5px; color: var(--slate); line-height: 1.9;
  margin-bottom: 1rem;
}
.intro-cards { display: flex; flex-direction: column; gap: 1px; background: var(--border); border-radius: 8px; overflow: hidden; border: 1px solid var(--border); }
.ic-card { background: #fff; padding: 1.3rem 1.25rem; }
.ic-law { font-size: 10.5px; font-weight: 700; color: var(--orange); letter-spacing: 0.08em; margin-bottom: 0.4rem; font-family: 'Courier New', monospace; }
.ic-title { font-size: 13.5px; font-weight: 700; color: var(--ink); margin-bottom: 0.3rem; }
.ic-body { font-size: 12.5px; color: var(--slate); line-height: 1.6; }
.alert-box {
  background: #FFF7ED; border-left: 3px solid var(--orange);
  padding: 1rem 1.25rem; border-radius: 0 5px 5px 0; margin-top: 1.25rem;
}
.alert-head { font-size: 10.5px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #C2410C; margin-bottom: 4px; }
.alert-body { font-size: 12.5px; color: #7C3B1A; line-height: 1.65; }

/* ── 6X MODEL ── */
.sixmodel-wrap {
  background: var(--navy); border-radius: 10px;
  padding: 2.5rem; margin: 2.5rem 0 0; overflow: hidden; position: relative;
}
.sixmodel-wrap::before {
  content: '6×';
  position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%);
  font-family: 'Lora', serif; font-size: 8rem; font-weight: 700;
  color: rgba(255,255,255,0.04); line-height: 1; pointer-events: none;
}
.sixmodel-title {
  font-size: 10.5px; font-weight: 700; letter-spacing: 0.13em;
  text-transform: uppercase; color: var(--orange2); margin-bottom: 0.4rem;
}
.sixmodel-h {
  font-family: 'Lora', serif;
  font-size: 1.25rem; font-weight: 600; color: #fff;
  margin-bottom: 0.6rem; line-height: 1.25;
}
.sixmodel-sub { font-size: 12.5px; color: rgba(255,255,255,0.5); margin-bottom: 1.75rem; line-height: 1.6; }
.six-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.six-item {
  background: rgba(255,255,255,0.05); border-radius: 6px;
  padding: 1rem 1.1rem; border: 1px solid rgba(255,255,255,0.08);
  position: relative;
}
.six-num {
  font-family: 'Lora', serif;
  font-size: 1.6rem; font-weight: 600; color: var(--orange2);
  line-height: 1; margin-bottom: 0.4rem;
}
.six-name { font-size: 12.5px; font-weight: 700; color: #fff; margin-bottom: 0.25rem; }
.six-desc { font-size: 11.5px; color: rgba(255,255,255,0.5); line-height: 1.55; }

/* ── SERVICE ACCORDION ── */
.services-accordion { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.svc-item { background: #fff; }
.svc-header {
  width: 100%; background: none; border: none;
  padding: 1.25rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between;
  gap: 1rem; cursor: pointer; text-align: left;
  transition: background 0.12s;
}
.svc-header:hover { background: var(--mist); }
.svc-header.open { background: var(--navy); }
.svc-header-left { display: flex; align-items: center; gap: 12px; }
.svc-icon {
  width: 36px; height: 36px; border-radius: 6px;
  background: var(--mist); display: flex; align-items: center;
  justify-content: center; font-size: 16px; flex-shrink: 0;
  transition: background 0.12s;
}
.svc-header.open .svc-icon { background: rgba(255,255,255,0.1); }
.svc-name { font-size: 14.5px; font-weight: 700; color: var(--ink); }
.svc-header.open .svc-name { color: #fff; }
.svc-tagline { font-size: 12px; color: var(--slate); margin-top: 1px; }
.svc-header.open .svc-tagline { color: rgba(255,255,255,0.5); }
.svc-toggle {
  font-size: 20px; color: var(--orange); font-weight: 300;
  min-width: 20px; text-align: center; flex-shrink: 0; line-height: 1;
}
.svc-header.open .svc-toggle { color: rgba(255,255,255,0.7); }
.svc-body { display: none; padding: 0 1.5rem 1.75rem; }
.svc-body.open { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.svc-scope-label {
  font-size: 10.5px; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--orange); margin-bottom: 0.7rem;
}
.svc-desc { font-size: 13.5px; color: var(--slate); line-height: 1.8; margin-bottom: 1rem; }
.svc-list { display: flex; flex-direction: column; gap: 7px; }
.svc-list li {
  font-size: 13px; color: var(--slate);
  display: flex; gap: 9px; align-items: flex-start; line-height: 1.55;
}
.svc-list li::before { content: '→'; color: var(--orange); font-size: 11px; margin-top: 3px; flex-shrink: 0; }
.std-box {
  background: var(--navy); border-radius: 6px; padding: 1.25rem 1.4rem;
}
.std-head {
  font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--orange2); margin-bottom: 0.8rem; font-weight: 700;
}
.std-row {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 0.45rem 0; border-bottom: 1px solid rgba(255,255,255,0.07);
}
.std-row:last-child { border-bottom: none; }
.std-code {
  font-size: 11px; font-weight: 700; color: var(--orange3);
  min-width: 80px; font-family: 'Courier New', monospace;
  letter-spacing: 0.03em; flex-shrink: 0; margin-top: 1px;
}
.std-desc { font-size: 12px; color: rgba(255,255,255,0.6); line-height: 1.5; }
.deliv-box {
  background: #FFF8F5; border-radius: 5px; padding: 1.1rem 1.25rem;
  margin-top: 1rem; border-left: 3px solid var(--orange);
}
.deliv-head {
  font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
  color: #C2410C; margin-bottom: 0.6rem; font-weight: 700;
}
.deliv-list { display: flex; flex-direction: column; gap: 5px; }
.deliv-list li {
  font-size: 12.5px; color: var(--slate);
  display: flex; gap: 8px; line-height: 1.45;
}
.deliv-list li::before { content: '✓'; color: var(--green); font-size: 11px; flex-shrink: 0; margin-top: 1px; }
.note-box {
  background: #FFFBEB; border: 1px solid #FCD34D;
  border-radius: 4px; padding: 1rem 1.25rem; margin-top: 1rem;
}
.note-head { font-size: 10.5px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: var(--amber); margin-bottom: 5px; }
.note-body { font-size: 12.5px; color: #78350F; line-height: 1.65; }

/* ── APPROACH STEPS ── */
.approach-steps { display: flex; flex-direction: column; }
.a-step {
  display: flex; gap: 1.5rem; align-items: flex-start;
  padding: 1.5rem 0; border-bottom: 1px solid var(--border);
}
.a-step:last-child { border-bottom: none; }
.a-num-wrap { display: flex; flex-direction: column; align-items: center; gap: 0; }
.a-num {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--navy); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; flex-shrink: 0;
}
.a-title { font-size: 14.5px; font-weight: 700; color: var(--ink); margin-bottom: 0.35rem; }
.a-desc { font-size: 13.5px; color: var(--slate); line-height: 1.7; }
.a-ref {
  font-size: 11px; color: var(--orange); font-weight: 600;
  margin-top: 7px; font-family: 'Courier New', monospace;
}

/* ── WHY SSA ── */
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; margin-top: 1.5rem; }
.why-item { background: #fff; padding: 1.75rem 1.4rem; }
.why-icon { font-size: 1.5rem; margin-bottom: 0.6rem; }
.why-title { font-size: 13.5px; font-weight: 700; color: var(--ink); margin-bottom: 0.35rem; }
.why-body { font-size: 12.5px; color: var(--slate); line-height: 1.6; }

/* ── SECTORS ── */
.sectors-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 1.5rem; }
.sector-card {
  border: 1.5px solid var(--border); border-radius: 7px;
  padding: 1.25rem 1.1rem; background: #fff;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.sector-card:hover { border-color: var(--orange); box-shadow: 0 4px 16px rgba(232,93,23,0.08); }
.sector-icon { font-size: 22px; margin-bottom: 0.6rem; }
.sector-name { font-size: 13.5px; font-weight: 700; color: var(--ink); margin-bottom: 0.3rem; }
.sector-detail { font-size: 12px; color: var(--slate); line-height: 1.55; }

/* ── FAQ ── */
.faq-wrap { max-width: 820px; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-q {
  width: 100%; background: none; border: none;
  text-align: left; padding: 1.15rem 0;
  font-size: 14.5px; font-weight: 600; color: var(--ink);
  display: flex; justify-content: space-between; align-items: center;
  gap: 1rem; cursor: pointer; transition: color 0.15s;
}
.faq-q:hover { color: var(--orange); }
.faq-toggle { font-size: 22px; color: var(--orange); font-weight: 300; line-height: 1; min-width: 22px; text-align: center; flex-shrink: 0; }
.faq-a { display: none; padding: 0 0 1.15rem; font-size: 13.5px; color: var(--slate); line-height: 1.85; max-width: 720px; }
.faq-a.open { display: block; }
.faq-ref {
  display: inline-block; font-size: 11.5px; color: var(--blue);
  background: #EFF6FF; border: 1px solid #BFDBFE;
  padding: 4px 10px; border-radius: 3px; margin-top: 0.75rem;
  font-family: 'Courier New', monospace;
}

/* ── ITA 2025 BLOG SECTION ── */
.blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 1.5rem; }
.blog-card {
  border: 1.5px solid var(--border); border-radius: 8px;
  overflow: hidden; background: #fff;
  transition: box-shadow 0.15s, border-color 0.15s;
}
.blog-card:hover { border-color: var(--orange); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
.blog-card-top {
  background: var(--navy2); padding: 1.4rem 1.25rem;
  min-height: 80px;
  display: flex; flex-direction: column; justify-content: flex-end;
}
.blog-tag {
  font-size: 9.5px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--orange2);
  margin-bottom: 0.5rem;
}
.blog-title { font-size: 13.5px; font-weight: 700; color: #fff; line-height: 1.35; }
.blog-card-body { padding: 1.1rem 1.25rem; }
.blog-excerpt { font-size: 12.5px; color: var(--slate); line-height: 1.65; margin-bottom: 0.9rem; }
.blog-meta { font-size: 11px; color: #9CA3AF; display: flex; justify-content: space-between; align-items: center; }
.blog-read { font-size: 12px; font-weight: 600; color: var(--orange); display: flex; align-items: center; gap: 4px; }
.blog-read:hover { color: var(--orange2); }
.blog-new-badge {
  background: #FFF7ED; color: var(--orange);
  font-size: 9px; font-weight: 700; padding: 2px 7px;
  border-radius: 2px; letter-spacing: 0.08em; text-transform: uppercase;
  border: 1px solid #FED7AA;
}

/* ── CTA BAND ── */
.cta-band {
  background: var(--navy2); padding: 4rem 2.5rem;
  display: flex; justify-content: space-between;
  align-items: center; gap: 2rem; flex-wrap: wrap;
}
.cta-band h2 {
  font-family: 'Lora', serif;
  font-size: 1.6rem; font-weight: 600; color: #fff;
  letter-spacing: -0.015em; margin-bottom: 0.4rem; line-height: 1.2;
}
.cta-band p { font-size: 13.5px; color: rgba(255,255,255,0.5); }
.cta-btns { display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap; }

/* ── FOOTER ── */
.footer {
  background: var(--navy);
  color: rgba(255,255,255,0.4);
  font-size: 12px; padding: 1.5rem 2.5rem;
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 0.5rem;
}
.footer span { color: var(--orange2); }

/* ── RESPONSIVE ── */
@media (max-width: 960px) {
  .two-col { grid-template-columns: 1fr; }
  .svc-body.open { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr 1fr; }
  .sectors-grid { grid-template-columns: 1fr 1fr; }
  .six-grid { grid-template-columns: 1fr 1fr; }
  .blog-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .sec { padding: 3rem 1.25rem; }
  .topbar { padding: 0 1.25rem; }
  .hero { padding: 3.5rem 1.25rem; }
  .topbar-nav { display: none; }
  .hero-stats { gap: 1.5rem; }
  .sectors-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .six-grid { grid-template-columns: 1fr; }
  .cta-band { padding: 3rem 1.25rem; flex-direction: column; align-items: flex-start; }
  .footer { flex-direction: column; text-align: center; }
  .compliance-bar { flex-direction: column; }
}
</style>
</head>
<body>

<!-- ══ TOPBAR ══ -->
<header class="topbar">
  <div class="topbar-brand">
    <div class="topbar-logo">CA</div>
    <div>
      <div class="topbar-name">SSA</div>
      <div class="topbar-sub">Chartered Accountants</div>
    </div>
  </div>
  <nav class="topbar-nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#" class="active">Services</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
    <a href="#">Careers</a>
    <a href="#">Login</a>
  </nav>
  <button class="btn-primary topbar-cta">Schedule a Call</button>
</header>

<!-- ══ HERO ══ -->
<section class="hero">
  <div class="hero-geo"></div>
  <div class="hero-inner">
    <div class="breadcrumb">
      <a href="#">Home</a> / <a href="#">Services</a> / <span>Direct Taxation &amp; Income Tax</span>
    </div>
    <div class="hero-eyebrow">Practice Area</div>
    <h1>Direct Taxation<br>&amp; <em>Income Tax</em></h1>
    <p class="hero-sub">End-to-end direct tax advisory, compliance, and representation for corporates, LLPs, professionals, NGOs, and individuals — executed with structured documentation, correct legal interpretation, and strong representation support.</p>
    <div class="hero-ctas">
      <button class="btn-primary">Schedule a Consultation</button>
      <button class="btn-ghost">Our Approach ↓</button>
    </div>
    <div class="hero-stats">
      <div class="hstat">
        <div class="hstat-num">ITA 2025</div>
        <div class="hstat-label">New Income Tax Act</div>
      </div>
      <div class="hstat">
        <div class="hstat-num">6×</div>
        <div class="hstat-label">SSA Service Delivery Model</div>
      </div>
      <div class="hstat">
        <div class="hstat-num">5</div>
        <div class="hstat-label">Core Practice Areas</div>
      </div>
      <div class="hstat">
        <div class="hstat-num">CBDT</div>
        <div class="hstat-label">Always Current</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ COMPLIANCE BAR ══ -->
<div class="compliance-bar">
  <div class="cb-icon">⚖</div>
  <div class="cb-content">
    <div class="cb-head">Regulatory Framework — All Direct Tax Engagements</div>
    <p class="cb-text">Every engagement is governed by the Income Tax Act 1961 (and the new Income Tax Act 2025, effective from AY 2026-27), CBDT notifications, judicial precedents, and ICAI Guidance Notes. All representations before Assessing Officers, CIT(A), ITAT, and High Courts are backed by documented legal positions.</p>
    <div class="pill-row">
      <span class="pill pill-orange">Income Tax Act 1961 / ITA 2025</span>
      <span class="pill pill-green">CBDT Circulars &amp; Notifications</span>
      <span class="pill pill-amber">Sec 44AB — Tax Audit (GN 2023)</span>
      <span class="pill pill-blue">Sec 80G / 12AB — NGO &amp; Trust</span>
      <span class="pill pill-purple">Faceless Assessment / AIS</span>
      <span class="pill pill-navy">DTAA / Transfer Pricing</span>
      <span class="pill pill-orange">ICAI Revised ITR Guidance FY25-26</span>
    </div>
  </div>
</div>

<!-- ══ INTRODUCTION ══ -->
<section class="sec">
  <div class="container">
    <div class="two-col">
      <div class="intro-text">
        <div class="sec-label">Overview</div>
        <h2 class="sec-h">Our Direct Tax Practice</h2>
        <div class="sec-rule"></div>
        <p>We provide end-to-end direct tax services under the Income Tax Act, 1961 — and now under the new Income Tax Act 2025 (effective AY 2026-27) — for companies, LLPs, professionals, NGOs, and individuals.</p>
        <p>Our team combines structured documentation, correct legal interpretation, and strong representation support to minimise tax risk while remaining fully compliant. Engagements are executed with reference to CBDT notifications, judicial precedents, and evolving legislative changes.</p>
        <p>We believe tax advisory must be proactive, not reactive. Every engagement is anchored to your business model, income profile, and long-term financial objectives — not a generic compliance checklist.</p>

        <!-- 6X MODEL EMBEDDED HERE -->
        <div class="sixmodel-wrap">
          <div class="sixmodel-title">SSA Service Delivery Framework</div>
          <div class="sixmodel-h">The 6× Model — How We Deliver</div>
          <div class="sixmodel-sub">Every direct tax engagement at SSA is structured around six core principles that ensure quality, completeness, and genuine client value at every stage.</div>
          <div class="six-grid">
            <div class="six-item">
              <div class="six-num">01</div>
              <div class="six-name">Understand</div>
              <div class="six-desc">Deep-dive into income profile, business model, past positions, and tax history</div>
            </div>
            <div class="six-item">
              <div class="six-num">02</div>
              <div class="six-name">Structure</div>
              <div class="six-desc">Plan tax-efficient structures within the law — not aggressive schemes</div>
            </div>
            <div class="six-item">
              <div class="six-num">03</div>
              <div class="six-name">Compute</div>
              <div class="six-desc">Accurate tax computation, disallowances, deductions, and reconciliations</div>
            </div>
            <div class="six-item">
              <div class="six-num">04</div>
              <div class="six-name">Document</div>
              <div class="six-desc">Working paper quality documentation of every position taken</div>
            </div>
            <div class="six-item">
              <div class="six-num">05</div>
              <div class="six-name">File &amp; Report</div>
              <div class="six-desc">Timely, accurate return filing and regulatory reporting across all forms</div>
            </div>
            <div class="six-item">
              <div class="six-num">06</div>
              <div class="six-name">Defend</div>
              <div class="six-desc">Represent and defend positions before all levels — AO to High Court</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="intro-cards">
          <div class="ic-card">
            <div class="ic-law">ITA 2025 · Effective AY 2026-27</div>
            <div class="ic-title">Navigating the New Tax Code</div>
            <div class="ic-body">The Income Tax Act 2025 replaces the 1961 Act with simplified, restructured provisions. Our team has undertaken a clause-by-clause analysis to advise clients on transition positions, reclassified income heads, and revised computation mechanics.</div>
          </div>
          <div class="ic-card" style="border-top:1px solid var(--border)">
            <div class="ic-law">Faceless Regime · AIS / TIS</div>
            <div class="ic-title">Assessment &amp; Compliance Intelligence</div>
            <div class="ic-body">We integrate Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) data into every return — reconciling reportable transactions before filing to reduce mismatches and notices.</div>
          </div>
          <div class="ic-card" style="border-top:1px solid var(--border)">
            <div class="ic-law">Sec 44AB · ICAI GN 2023</div>
            <div class="ic-title">Tax Audit — Depth, Not Just Compliance</div>
            <div class="ic-body">Tax Audit u/s 44AB goes beyond Form 3CD. We treat it as a diagnostic review — surfacing disallowance risks, TDS gaps, and GST mismatches that could otherwise trigger assessments.</div>
          </div>
        </div>
        <div class="alert-box">
          <div class="alert-head">ITA 2025 — Transition Alert</div>
          <p class="alert-body">The Income Tax Act 2025 (enacted March 2025) introduces restructured income heads, a revised computation framework, and new provision numbering. For AY 2026-27 onwards, all filings, tax audits, and representations will reference ITA 2025 provisions. SSA is fully prepared for this transition.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ SERVICES ══ -->
<section class="sec sec-mist">
  <div class="container">
    <div class="sec-label">Our Offerings</div>
    <h2 class="sec-h">Direct Tax Service Lines</h2>
    <div class="sec-rule"></div>
    <p class="sec-intro">Expand each service line to view scope, applicable law and ICAI standards, and key deliverables.</p>

    <div class="services-accordion">

      <!-- SERVICE 1: TAX PLANNING -->
      <div class="svc-item">
        <button class="svc-header open" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">📊</div>
            <div>
              <div class="svc-name">Tax Planning &amp; Advisory</div>
              <div class="svc-tagline">Holistic income tax and corporate tax planning aligned with business objectives</div>
            </div>
          </div>
          <span class="svc-toggle">−</span>
        </button>
        <div class="svc-body open">
          <div>
            <div class="svc-scope-label">Scope</div>
            <p class="svc-desc">Strategic tax planning covering corporate tax, MAT/AMT, capital gains, deductions under Chapter VI-A, and entity structuring. All planning is within the four corners of the law — backed by judicial precedents and CBDT positions, not aggressive schemes.</p>
            <ul class="svc-list">
              <li>Corporate tax planning — domestic and cross-border</li>
              <li>MAT/AMT computation and planning u/s 115JB/115JC</li>
              <li>Capital gains planning — short-term, long-term, and grandfathering positions</li>
              <li>Deductions advisory — Sec 80C, 80D, 80G, 80IA/IB/IC/ID</li>
              <li>Remuneration and perquisite structuring for key managerial personnel</li>
              <li>Tax-efficient entity structuring — company, LLP, trust, or hybrid</li>
              <li>New regime vs old regime optimisation u/s 115BAC / 115BAA</li>
              <li>NGO and trust tax planning — Sec 11/12/13 compliance</li>
              <li>Year-end tax position review before ITR filing</li>
              <li>Impact analysis under ITA 2025 for restructured provisions</li>
            </ul>
            <div class="note-box" style="margin-top:1rem">
              <div class="note-head">ITA 2025 Update</div>
              <p class="note-body">The new Income Tax Act 2025 reorganises provisions under revised chapter and section numbers. Our advisory services now include a parallel ITA 2025 mapping for all planning positions to ensure smooth transition from AY 2026-27.</p>
            </div>
          </div>
          <div>
            <div class="std-box">
              <div class="std-head">Applicable Law &amp; Guidance</div>
              <div class="std-row"><span class="std-code">ITA 1961</span><span class="std-desc">Chapters IV–VI-A — income computation and deductions</span></div>
              <div class="std-row"><span class="std-code">ITA 2025</span><span class="std-desc">Revised provisions — effective AY 2026-27 onwards</span></div>
              <div class="std-row"><span class="std-code">Sec 115BAA</span><span class="std-desc">New tax regime for domestic companies — 22% flat rate</span></div>
              <div class="std-row"><span class="std-code">Sec 115BAC</span><span class="std-desc">New tax regime for individuals and HUFs</span></div>
              <div class="std-row"><span class="std-code">Sec 115JB</span><span class="std-desc">Minimum Alternate Tax (MAT) — computation and credit</span></div>
              <div class="std-row"><span class="std-code">CBDT</span><span class="std-desc">Circulars and notifications on allowability of expenses</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Tax planning memo with documented positions</li>
                <li>Regime comparison workbook (old vs new)</li>
                <li>ITA 2025 transition mapping document</li>
                <li>Year-end tax computation and advance tax schedule</li>
                <li>Capital gains computation with indexation workings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- SERVICE 2: RETURN FILING -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">📄</div>
            <div>
              <div class="svc-name">Return Preparation &amp; Filing</div>
              <div class="svc-tagline">All ITR forms for corporates, LLPs, trusts, professionals, and individuals</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body">
          <div>
            <div class="svc-scope-label">Scope</div>
            <p class="svc-desc">Comprehensive return preparation across all ITR forms with pre-filing AIS/TIS reconciliation to avoid mismatches. Every return is supported by documented workings for income, deductions, TDS credit, and advance tax.</p>
            <ul class="svc-list">
              <li>ITR-1/2/3/4/5/6/7 — all forms for all taxpayer categories</li>
              <li>AIS/TIS reconciliation before filing — transaction matching</li>
              <li>Form 26AS verification — TDS credit and advance tax</li>
              <li>Corporate return — Ind AS/AS to tax reconciliation</li>
              <li>LLP return — partner remuneration and interest verification</li>
              <li>Trust return — ITR-7, Form 10B/10BB, application of income</li>
              <li>Non-resident return — ITR-2/3, DTAA positions, FEMA compliance</li>
              <li>Revised return and updated return u/s 139(8A)</li>
              <li>Advance tax computation and self-assessment tax reconciliation</li>
              <li>Form 10-IC / 10-ID — new tax regime option filings</li>
            </ul>
          </div>
          <div>
            <div class="std-box">
              <div class="std-head">Applicable Law &amp; Standards</div>
              <div class="std-row"><span class="std-code">Sec 139</span><span class="std-desc">Mandatory filing, revised return, and belated return provisions</span></div>
              <div class="std-row"><span class="std-code">Sec 139(8A)</span><span class="std-desc">Updated return — two years from end of assessment year</span></div>
              <div class="std-row"><span class="std-code">AIS / TIS</span><span class="std-desc">Annual Information Statement — pre-filing reconciliation</span></div>
              <div class="std-row"><span class="std-code">Sec 234A/B/C</span><span class="std-desc">Interest on late filing and short payment of advance tax</span></div>
              <div class="std-row"><span class="std-code">ICAI GN</span><span class="std-desc">Guidance Note on ITR Forms (FY 2025-26 edition)</span></div>
              <div class="std-row"><span class="std-code">ITA 2025</span><span class="std-desc">New Act provisions applicable from AY 2026-27</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Filed ITR acknowledgement (ITR-V)</li>
                <li>Income computation and tax workings</li>
                <li>AIS/TIS reconciliation statement</li>
                <li>TDS mismatch resolution report</li>
                <li>Advance tax / self-assessment payment summary</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- SERVICE 3: TAX AUDIT -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">🔍</div>
            <div>
              <div class="svc-name">Tax Audit — Section 44AB</div>
              <div class="svc-tagline">Independent audit of books of accounts under ITA — Form 3CA/3CB and 3CD</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body">
          <div>
            <div class="svc-scope-label">Scope</div>
            <p class="svc-desc">Tax Audit u/s 44AB is mandatory for businesses whose turnover exceeds ₹1 crore (₹10 crore for 95%+ digital transactions) and professionals above ₹50 lakh gross receipts. The audit is governed by ICAI's Guidance Note on Tax Audit u/s 44AB (Revised 2023). Effective 1 April 2026, the limit remains 60 tax audits per member per year per ICAI Council.</p>
            <ul class="svc-list">
              <li>Applicability assessment — Sec 44AB, 44ADA, 44AE thresholds</li>
              <li>Form 3CA (statutory audit entity) or 3CB (other) — audit report</li>
              <li>Form 3CD — all 44 reporting clauses with full factual support</li>
              <li>Depreciation schedule verification — WDV, block-wise, additional</li>
              <li>Disallowances — Sec 40A(3), 40(a)(ia), 43B, 269SS/T</li>
              <li>GST turnover reconciliation with books of accounts</li>
              <li>TDS compliance gap review — Sec 194C/194I/194J/194Q</li>
              <li>Related party transactions and transfer pricing observation</li>
              <li>Form 3CEB — Transfer Pricing report u/s 92E (where applicable)</li>
              <li>MSME payments — Sec 43B(h) verification from FY 2023-24</li>
            </ul>
            <div class="note-box" style="margin-top:1rem">
              <div class="note-head">ICAI 2026 — Tax Audit Limit</div>
              <p class="note-body">Effective 1 April 2026, ICAI confirmed the tax audit limit at 60 per member per year. The limit cannot be distributed across partners. Revised/rectified reports are excluded from the count. (ICAI Council Circular, July 2025)</p>
            </div>
          </div>
          <div>
            <div class="std-box">
              <div class="std-head">Applicable Standards &amp; Law</div>
              <div class="std-row"><span class="std-code">Sec 44AB</span><span class="std-desc">ITA — applicability thresholds and mandatory audit</span></div>
              <div class="std-row"><span class="std-code">ICAI GN</span><span class="std-desc">GN on Tax Audit u/s 44AB — Revised 2023 Edition</span></div>
              <div class="std-row"><span class="std-code">Form 3CD</span><span class="std-desc">Statement of particulars — 44 reporting clauses</span></div>
              <div class="std-row"><span class="std-code">SA 500</span><span class="std-desc">Audit evidence — sufficient and appropriate evidence</span></div>
              <div class="std-row"><span class="std-code">SA 520</span><span class="std-desc">Analytical procedures — turnover and ratio analysis</span></div>
              <div class="std-row"><span class="std-code">Sec 43B(h)</span><span class="std-desc">MSME payments — disallowance if not paid within time</span></div>
              <div class="std-row"><span class="std-code">Sec 92E</span><span class="std-desc">Transfer pricing report — Form 3CEB</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Form 3CA or 3CB (Audit Report)</li>
                <li>Form 3CD — 44-clause statement with workings</li>
                <li>GST/Turnover reconciliation memo</li>
                <li>TDS compliance gap report</li>
                <li>MSME payments verification workings</li>
                <li>Form 3CEB — Transfer Pricing Report (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- SERVICE 4: REPRESENTATION -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">⚖️</div>
            <div>
              <div class="svc-name">Representation &amp; Litigation Support</div>
              <div class="svc-tagline">Assessment, appeals, and litigation before all forums — AO to ITAT</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body">
          <div>
            <div class="svc-scope-label">Scope</div>
            <p class="svc-desc">Faceless Assessments, CIT(A) appeals, ITAT appearances, and High Court support — backed by documented legal positions, judicial precedents, and well-structured submissions. We specialise in preparing strong factual and legal grounds at the first stage to minimise prolonged litigation.</p>
            <ul class="svc-list">
              <li>Faceless Assessment — response to notices u/s 143(2), 148, 131</li>
              <li>Scrutiny assessment submissions with documentation</li>
              <li>CIT(A) appeals — grounds of appeal and written submissions</li>
              <li>ITAT representation and briefing support</li>
              <li>Rectification applications u/s 154 — computational errors</li>
              <li>Stay of demand applications before assessing authority</li>
              <li>Penalty proceedings defence — Sec 270A, 271A, 271B</li>
              <li>TDS default notices — Sec 201 representations</li>
              <li>Compounding of offences applications — CBDT guidelines</li>
              <li>Response to AIS/TIS mismatch notices from CPC</li>
            </ul>
          </div>
          <div>
            <div class="std-box">
              <div class="std-head">Applicable Law</div>
              <div class="std-row"><span class="std-code">Sec 143(3)</span><span class="std-desc">Scrutiny assessment — faceless regime</span></div>
              <div class="std-row"><span class="std-code">Sec 148</span><span class="std-desc">Reopening / reassessment — Sec 148A show cause</span></div>
              <div class="std-row"><span class="std-code">Sec 250/253</span><span class="std-desc">CIT(A) and ITAT appellate proceedings</span></div>
              <div class="std-row"><span class="std-code">Sec 270A</span><span class="std-desc">Penalty for under-reporting and misreporting of income</span></div>
              <div class="std-row"><span class="std-code">Sec 271B</span><span class="std-desc">Penalty for failure to get accounts audited</span></div>
              <div class="std-row"><span class="std-code">Faceless</span><span class="std-desc">Faceless Assessment / Appeal Scheme — e-proceedings</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Written submissions with case laws and CBDT circulars</li>
                <li>Grounds of appeal (CIT(A) / ITAT)</li>
                <li>Penalty defence submissions</li>
                <li>Stay of demand application</li>
                <li>Assessment order review and impact analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- SERVICE 5: REGISTRATIONS & APPROVALS -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">📋</div>
            <div>
              <div class="svc-name">Tax Registrations &amp; Approvals</div>
              <div class="svc-tagline">PAN, TAN, 12AB, 80G, 10(23C), DTAA certifications, and more</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body">
          <div>
            <div class="svc-scope-label">Scope</div>
            <p class="svc-desc">Obtaining and maintaining statutory registrations, exemption approvals, and certifications required under the Income Tax Act. We manage the full application lifecycle — from documentation to approval and compliance post-registration.</p>
            <ul class="svc-list">
              <li>PAN and TAN application and corrections</li>
              <li>Trust / NGO registration — Sec 12AB (new re-registration regime)</li>
              <li>80G approval for donation receipts — Form 10AC/10BD</li>
              <li>80G donor certificates — Form 10BE</li>
              <li>Sec 10(23C) approval for educational / medical institutions</li>
              <li>35AC / 35(1)(ii) scientific research approvals</li>
              <li>Tax Residency Certificates (TRC) for DTAA benefits</li>
              <li>Lower deduction / nil deduction certificates — Sec 197</li>
              <li>Form 15CA / 15CB — foreign remittance certifications</li>
              <li>PAN compliance for non-residents u/s 195 / 206AA</li>
            </ul>
          </div>
          <div>
            <div class="std-box">
              <div class="std-head">Applicable Law</div>
              <div class="std-row"><span class="std-code">Sec 12AB</span><span class="std-desc">Trust registration — new regime, 5-year renewal</span></div>
              <div class="std-row"><span class="std-code">Sec 80G</span><span class="std-desc">Deduction for donations — provisional/final approval</span></div>
              <div class="std-row"><span class="std-code">Sec 10(23C)</span><span class="std-desc">Exemption for educational and charitable institutions</span></div>
              <div class="std-row"><span class="std-code">Sec 197</span><span class="std-desc">Lower TDS deduction certificate from AO</span></div>
              <div class="std-row"><span class="std-code">Sec 195</span><span class="std-desc">TDS on non-resident payments — Form 15CA/15CB</span></div>
              <div class="std-row"><span class="std-code">DTAA</span><span class="std-desc">Double Tax Avoidance Agreement — TRC and benefit claims</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>12AB / 80G registration certificates</li>
                <li>Form 10AC — provisional approval order</li>
                <li>Form 15CA / 15CB certificates</li>
                <li>Lower TDS certificate (Sec 197)</li>
                <li>TRC / PE analysis memo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- SERVICE 6: DUE DILIGENCE -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">🔎</div>
            <div>
              <div class="svc-name">Tax Due Diligence</div>
              <div class="svc-tagline">Transaction-level tax risk identification for M&A, investments, and restructuring</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body">
          <div>
            <div class="svc-scope-label">Scope</div>
            <p class="svc-desc">Pre-transaction tax due diligence identifying historical tax risks, open assessments, transfer pricing exposures, and contingent liabilities for mergers, acquisitions, investments, and corporate restructuring. Reports are structured to investor and lender standards.</p>
            <ul class="svc-list">
              <li>Direct tax due diligence — last 6 years tax position review</li>
              <li>Open assessments, appeals, and demand status review</li>
              <li>TDS compliance review — default and demand history</li>
              <li>Transfer pricing — ALP study and TP audit history</li>
              <li>MAT credit availability and utilisation analysis</li>
              <li>Carry forward losses — eligibility and continuity analysis</li>
              <li>Sec 56(2) — deemed income implications in transactions</li>
              <li>Related party transactions and tax risk quantification</li>
              <li>Cross-border structuring and PE risk assessment</li>
              <li>Post-acquisition tax integration advisory</li>
            </ul>
          </div>
          <div>
            <div class="std-box">
              <div class="std-head">Applicable Law &amp; Standards</div>
              <div class="std-row"><span class="std-code">Sec 72A</span><span class="std-desc">Carry forward of losses in amalgamation/demerger</span></div>
              <div class="std-row"><span class="std-code">Sec 56(2)</span><span class="std-desc">Deemed income — fair value and investment implications</span></div>
              <div class="std-row"><span class="std-code">Sec 79</span><span class="std-desc">Change in shareholding — loss set-off eligibility</span></div>
              <div class="std-row"><span class="std-code">Sec 92-92F</span><span class="std-desc">Transfer pricing provisions — international transactions</span></div>
              <div class="std-row"><span class="std-code">SA 500</span><span class="std-desc">Audit evidence standards — applied in due diligence work</span></div>
              <div class="std-row"><span class="std-code">ITA 2025</span><span class="std-desc">New Act mapping for post-AY2026-27 transaction structures</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Tax due diligence report (executive + detailed)</li>
                <li>Tax risk quantification matrix</li>
                <li>Open demand / litigation summary</li>
                <li>Transfer pricing exposure memo</li>
                <li>Representations and warranties advisory note</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div><!-- /services-accordion -->
  </div>
</section>

<!-- ══ APPROACH ══ -->
<section class="sec" id="approach">
  <div class="container">
    <div class="two-col">
      <div>
        <div class="sec-label">Process</div>
        <h2 class="sec-h">Our Approach</h2>
        <div class="sec-rule"></div>
        <div class="approach-steps">
          <div class="a-step">
            <div class="a-num-wrap"><div class="a-num">01</div></div>
            <div>
              <div class="a-title">Understanding Income Profile, Business Model &amp; Past Tax Positions</div>
              <div class="a-desc">We begin every engagement with a structured intake — reviewing the taxpayer's income structure, business model, past returns, assessment history, and pending matters. For new clients, a tax health check is conducted.</div>
              <div class="a-ref">ITA 1961 / ITA 2025 · AIS/TIS Review</div>
            </div>
          </div>
          <div class="a-step">
            <div class="a-num-wrap"><div class="a-num">02</div></div>
            <div>
              <div class="a-title">Planning Tax-Efficient Structures Within the Legal Framework</div>
              <div class="a-desc">Based on the client's profile, we design positions on income head classification, deductions, exemptions, regime selection, and entity structuring — all backed by CBDT circulars and binding judicial decisions.</div>
              <div class="a-ref">Sec 115BAA/BAC · CBDT Circulars · DTAA</div>
            </div>
          </div>
          <div class="a-step">
            <div class="a-num-wrap"><div class="a-num">03</div></div>
            <div>
              <div class="a-title">Ensuring Accurate Computation, Documentation &amp; Filing</div>
              <div class="a-desc">Tax computation is prepared with detailed workings — income head-wise, with deductions, TDS credit reconciliation, and advance tax computation. All positions are documented in structured working papers before filing.</div>
              <div class="a-ref">Sec 139 · AIS Reconciliation · Form 3CD</div>
            </div>
          </div>
          <div class="a-step">
            <div class="a-num-wrap"><div class="a-num">04</div></div>
            <div>
              <div class="a-title">Representing You in Assessments, Appeals &amp; Queries</div>
              <div class="a-desc">From Faceless Assessment responses to CIT(A) grounds of appeal and ITAT appearances, our team prepares legally sound, documented submissions — reducing adverse orders through early-stage strength.</div>
              <div class="a-ref">Sec 143(3) · Sec 250 · Sec 253 · Faceless Scheme</div>
            </div>
          </div>
          <div class="a-step">
            <div class="a-num-wrap"><div class="a-num">05</div></div>
            <div>
              <div class="a-title">Monitoring Law Changes to Proactively Refine Strategy</div>
              <div class="a-desc">Finance Acts, CBDT notifications, ITAT decisions, and the ITA 2025 transition are monitored continuously. Clients receive advisory notes on how changes affect their positions — before they file, not after.</div>
              <div class="a-ref">ITA 2025 · Finance Act · CBDT · ITAT Bench</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="sec-label">Sectors</div>
        <h2 class="sec-h">Industries We Serve</h2>
        <div class="sec-rule"></div>
        <div class="sectors-grid" style="grid-template-columns: 1fr 1fr; margin-top: 0;">
          <div class="sector-card">
            <div class="sector-icon">🏢</div>
            <div class="sector-name">Corporates &amp; LLPs</div>
            <div class="sector-detail">Corporate tax, MAT, transfer pricing, demerger and amalgamation</div>
          </div>
          <div class="sector-card">
            <div class="sector-icon">👔</div>
            <div class="sector-name">Professionals &amp; Consultants</div>
            <div class="sector-detail">Income head classification, Sec 44ADA, PGBP vs IOS optimisation</div>
          </div>
          <div class="sector-card">
            <div class="sector-icon">🌿</div>
            <div class="sector-name">NGOs, Trusts &amp; Societies</div>
            <div class="sector-detail">12AB, 80G, FCRA, application of income, Form 10B/10BB</div>
          </div>
          <div class="sector-card">
            <div class="sector-icon">💎</div>
            <div class="sector-name">High-Net-Worth Individuals</div>
            <div class="sector-detail">Capital gains, foreign assets, FEMA, succession and estate planning</div>
          </div>
          <div class="sector-card">
            <div class="sector-icon">🚀</div>
            <div class="sector-name">Startups &amp; Investors</div>
            <div class="sector-detail">Sec 56(2), DPIIT recognition, ESOPs, angel tax, Sec 79</div>
          </div>
          <div class="sector-card">
            <div class="sector-icon">🌏</div>
            <div class="sector-name">Non-Residents &amp; Expats</div>
            <div class="sector-detail">DTAA, Sec 195, RNOR status, PE exposure, Form 15CA/CB</div>
          </div>
          <div class="sector-card">
            <div class="sector-icon">🏦</div>
            <div class="sector-name">NBFCs &amp; Financial Entities</div>
            <div class="sector-detail">Ind AS 109/ECL, deferred tax, provisioning deductions, RBI compliance</div>
          </div>
          <div class="sector-card">
            <div class="sector-icon">🏗</div>
            <div class="sector-name">Real Estate &amp; Builders</div>
            <div class="sector-detail">Sec 43CA/50C, JDA taxation, RERA, capital gains vs business income</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ WHY SSA ══ -->
<section class="sec sec-mist">
  <div class="container">
    <div class="sec-label">Why SSA</div>
    <h2 class="sec-h">What Sets Our Direct Tax Practice Apart</h2>
    <div class="sec-rule"></div>
    <div class="why-grid">
      <div class="why-item">
        <div class="why-icon">🎯</div>
        <div class="why-title">The 6× Delivery Model</div>
        <div class="why-body">Every engagement follows our six-pillar model — Understand, Structure, Compute, Document, File, and Defend — ensuring nothing falls through the cracks across your entire tax lifecycle.</div>
      </div>
      <div class="why-item">
        <div class="why-icon">📘</div>
        <div class="why-title">ITA 2025 Ready</div>
        <div class="why-body">We have completed a clause-by-clause mapping of the new Income Tax Act 2025. All advisory, filing, and audit work from AY 2026-27 is aligned to the new Act's restructured provisions and numbering.</div>
      </div>
      <div class="why-item">
        <div class="why-icon">📋</div>
        <div class="why-title">Documentation-First Culture</div>
        <div class="why-body">Every tax position we take is documented — not just in the return, but in structured working papers. This reduces assessment risk, supports audit trails, and enables strong representation.</div>
      </div>
      <div class="why-item">
        <div class="why-icon">🔗</div>
        <div class="why-title">AIS / TIS Integration</div>
        <div class="why-body">We pre-reconcile every filing against AIS and TIS data — identifying mismatches before the department does. This proactive step has materially reduced scrutiny notices for our clients.</div>
      </div>
      <div class="why-item">
        <div class="why-icon">⚖️</div>
        <div class="why-title">Litigation-Strength Positions</div>
        <div class="why-body">We back every advisory with relevant Supreme Court, High Court, and ITAT decisions. Clients receive submissions that are strong enough to hold at the first stage — minimising appellate costs.</div>
      </div>
      <div class="why-item">
        <div class="why-icon">🔄</div>
        <div class="why-title">Continuous Law Monitoring</div>
        <div class="why-body">Finance Act changes, CBDT circulars, and ITAT benchmarks are tracked continuously. You receive advisory alerts before your filing deadline — not in your notice.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ ITA 2025 BLOG SECTION ══ -->
<section class="sec">
  <div class="container">
    <div class="sec-label">Knowledge Centre</div>
    <h2 class="sec-h">Insights on Income Tax Act 2025</h2>
    <div class="sec-rule"></div>
    <p class="sec-intro">The Income Tax Act 2025 represents the most comprehensive rewrite of India's direct tax law in six decades. Our team has been analysing its impact across all taxpayer categories.</p>
    <div class="blog-grid">

      <div class="blog-card">
        <div class="blog-card-top" style="background: var(--navy2);">
          <div class="blog-tag">ITA 2025 · New Legislation</div>
          <div class="blog-title">Income Tax Act 2025: What Changes, What Stays — A Clause-by-Clause Summary</div>
        </div>
        <div class="blog-card-body">
          <p class="blog-excerpt">The ITA 2025 retains the core tax structure but reorganises provisions under new chapter and section numbers. We map the 1961 Act equivalents for every key provision — from income heads to deductions and assessment procedures.</p>
          <div class="blog-meta">
            <span>March 2025 <span class="blog-new-badge">NEW</span></span>
            <a href="#" class="blog-read">Read Article →</a>
          </div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-card-top" style="background: #1A2E4A;">
          <div class="blog-tag">ITA 2025 · Corporates</div>
          <div class="blog-title">Corporate Tax Under ITA 2025: Restructured Provisions, Same Rates — What Boards Need to Know</div>
        </div>
        <div class="blog-card-body">
          <p class="blog-excerpt">While corporate tax rates remain unchanged, the ITA 2025 renumbers provisions under new chapters, changes how MAT credit, carry-forward losses, and deductions are cited. Finance and board teams need a reference map before AY 2026-27 filings.</p>
          <div class="blog-meta">
            <span>April 2025 <span class="blog-new-badge">NEW</span></span>
            <a href="#" class="blog-read">Read Article →</a>
          </div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-card-top" style="background: #1C3040;">
          <div class="blog-tag">ITA 2025 · Individuals</div>
          <div class="blog-title">New Tax Regime Under ITA 2025: Is Section 115BAC Still the Same?</div>
        </div>
        <div class="blog-card-body">
          <p class="blog-excerpt">The default new tax regime introduced in 2023 is carried forward under ITA 2025 with revised section references. We explain what changes for salaried employees, professionals, and HUFs — and how to decide between regimes for AY 2026-27.</p>
          <div class="blog-meta">
            <span>March 2025 <span class="blog-new-badge">NEW</span></span>
            <a href="#" class="blog-read">Read Article →</a>
          </div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-card-top" style="background: #172038;">
          <div class="blog-tag">ITA 2025 · NGOs &amp; Trusts</div>
          <div class="blog-title">ITA 2025 and Charitable Trusts: Will Your 12AB Registration Survive the Transition?</div>
        </div>
        <div class="blog-card-body">
          <p class="blog-excerpt">The ITA 2025 carries forward the Sec 12AB registration framework but under renumbered provisions. We analyse what trusts need to do, whether new registration applications are required, and how Form 10B/10BB compliance maps to the new Act.</p>
          <div class="blog-meta">
            <span>April 2025 <span class="blog-new-badge">NEW</span></span>
            <a href="#" class="blog-read">Read Article →</a>
          </div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-card-top" style="background: #1E2840;">
          <div class="blog-tag">Direct Tax · Budget 2025</div>
          <div class="blog-title">Budget 2025 Direct Tax Highlights: Rebate, Slabs, and TDS Changes Explained</div>
        </div>
        <div class="blog-card-body">
          <p class="blog-excerpt">Finance Act 2025 increased the income tax rebate u/s 87A to ₹12 lakh (new regime), revised TDS thresholds on interest and rent, and introduced new TDS provisions on buyback income. A complete summary with effective dates.</p>
          <div class="blog-meta">
            <span>February 2025</span>
            <a href="#" class="blog-read">Read Article →</a>
          </div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-card-top" style="background: #162035;">
          <div class="blog-tag">Tax Audit · Practice Update</div>
          <div class="blog-title">Tax Audit Limit 2026: ICAI Confirms 60 Per Member — What Firms Must Know</div>
        </div>
        <div class="blog-card-body">
          <p class="blog-excerpt">ICAI's July 2025 circular confirmed the tax audit ceiling at 60 per member per year, with the limit now non-distributable across partners. We explain the implications for CA firms, partner count restrictions, and how revised reports are counted.</p>
          <div class="blog-meta">
            <span>July 2025 <span class="blog-new-badge">NEW</span></span>
            <a href="#" class="blog-read">Read Article →</a>
          </div>
        </div>
      </div>

    </div>
    <div style="text-align:center; margin-top: 2rem;">
      <button class="btn-primary">View All Articles</button>
    </div>
  </div>
</section>

<!-- ══ FAQ ══ -->
<section class="sec sec-mist">
  <div class="container">
    <div class="sec-label">Support</div>
    <h2 class="sec-h">Frequently Asked Questions</h2>
    <div class="sec-rule"></div>
    <div class="faq-wrap">

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(0)">What is the Income Tax Act 2025 and how does it affect my current compliance? <span class="faq-toggle" id="ft0">+</span></button>
        <div class="faq-a" id="fa0">The Income Tax Act 2025 (ITA 2025), enacted in March 2025, replaces the Income Tax Act 1961 from Assessment Year 2026-27 (Financial Year 2025-26) onwards. It does not introduce major structural changes in tax rates or new levies — its primary purpose is simplification and restructuring: removing provisos, explanations, and complex cross-references in favour of plain-language drafting and logical chapter organisation. All existing provisions on income heads, deductions, exemptions, TDS, and assessments are carried forward with revised section numbers. For AY 2025-26 (FY 2024-25), the 1961 Act continues to apply. From AY 2026-27, all returns, audit reports, and legal submissions will reference ITA 2025 provisions.
        <br><br><span class="faq-ref">Law: Income Tax Act 2025 (enacted March 2025) · Effective: AY 2026-27</span></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(1)">When is a Tax Audit under Section 44AB mandatory? <span class="faq-toggle" id="ft1">+</span></button>
        <div class="faq-a" id="fa1">Tax Audit u/s 44AB of the Income Tax Act 1961 is mandatory in the following cases: (1) Business — turnover exceeds ₹1 crore (or ₹10 crore if 95%+ receipts and payments are digital); (2) Profession — gross receipts exceed ₹50 lakh; (3) Presumptive taxation — income declared lower than the prescribed minimum under Sec 44AD / 44ADA / 44AE; (4) Business loss declared and turnover exceeds ₹1 crore. The audit must be completed and the report filed on the income tax portal by 30 September (or extended deadline) each year. ICAI's Guidance Note on Tax Audit u/s 44AB (Revised 2023 Edition) governs how the audit is conducted and Form 3CD is reported.
        <br><br><span class="faq-ref">Law: Sec 44AB, ITA 1961 · ICAI: GN on Tax Audit u/s 44AB (2023)</span></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(2)">What is the difference between the old tax regime and the new tax regime under ITA 2025? <span class="faq-toggle" id="ft2">+</span></button>
        <div class="faq-a" id="fa2">Under ITA 2025 (carrying forward the Finance Act 2023 position), the new tax regime (under the provision equivalent to Sec 115BAC) is the default regime for individuals, HUFs, and other taxpayers from AY 2024-25 onwards. The new regime offers lower slab rates but does not allow most deductions and exemptions (HRA, LTA, Sec 80C, 80D, etc.). The old regime allows deductions but applies higher slab rates. For FY 2025-26, the new regime offers a rebate up to ₹12 lakh (enhanced by Finance Act 2025). Taxpayers with business income must file Form 10-IEA to opt back to the old regime. The choice is significant and should be made with a detailed computation — our team provides a regime comparison workbook as part of every filing engagement.
        <br><br><span class="faq-ref">Law: Sec 115BAC, ITA 1961 · Finance Act 2025 · Form 10-IEA</span></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(3)">How does the Faceless Assessment Scheme work and how should I respond to a notice? <span class="faq-toggle" id="ft3">+</span></button>
        <div class="faq-a" id="fa3">The Faceless Assessment Scheme (introduced in 2020) ensures all scrutiny assessments are conducted electronically, without personal interface between the assessee and the Assessing Officer. Notices u/s 143(2), 148, or 131 are issued through the e-filing portal and must be responded to via the portal within the given timeframe. The key to a successful faceless response is structured documentation — submitting all factual evidence, legal grounds, and supporting case laws in an organised, portal-ready format. We prepare detailed written submissions citing relevant CBDT circulars and judicial precedents. Failure to respond within the deadline can result in ex-parte assessment orders. Do not respond without legal review.
        <br><br><span class="faq-ref">Law: Sec 143(3), 148, 131 · Faceless Assessment Scheme 2020 · e-filing portal</span></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(4)">What documents should we keep ready before filing the income tax return? <span class="faq-toggle" id="ft4">+</span></button>
        <div class="faq-a" id="fa4">Before ITR filing, the following should be ready and reconciled: (1) AIS and TIS from the income tax portal — reconcile all listed transactions with your books; (2) Form 26AS — TDS credit, advance tax, and SFT transactions; (3) Audited financial statements (companies/LLPs) or books summary (others); (4) Tax audit report (Form 3CD) if applicable; (5) Investment proofs for deductions — Sec 80C, 80D, 80G, HRA, LTA; (6) Capital gains statements from brokers, mutual funds, and property transactions; (7) Foreign income / asset disclosures (Schedule FA, Schedule FSI); (8) Bank account details and IFSC for refunds; (9) For companies — MAT computation, deferred tax working, and Ind AS/AS to tax reconciliation. AIS pre-reconciliation before filing is now critical — mismatches trigger automatic notices from CPC.
        <br><br><span class="faq-ref">Law: Sec 139 · AIS / TIS / Form 26AS · ICAI ITR GN (FY 2025-26)</span></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(5)">What are the key compliance requirements for NGOs and charitable trusts under the ITA? <span class="faq-toggle" id="ft5">+</span></button>
        <div class="faq-a" id="fa5">Charitable trusts and NGOs must comply with a multi-layered framework: (1) Registration u/s 12AB — all trusts must be registered under the new regime; provisional registration is valid for 3 years and final registration for 5 years; (2) Exemption is available on income applied at least 85% for charitable purposes — shortfalls must be accumulated in Form 10 u/s 11(2); (3) Annual audit — Form 10B (for trusts with income above ₹5 crore, or foreign contribution) or Form 10BB for educational/medical institutions — filing now mandatory before the due date of return; (4) 80G approval — trusts issuing donation receipts must have Form 10AC approval and issue Form 10BE to donors annually; (5) FCRA 2010 compliance for foreign contributions — separate FCRA bank account, separate audit, and annual return; (6) Compliance with Sec 13 — no benefit to specified persons (founders, relatives, trustees). Non-compliance with any of these provisions can result in loss of exemption for the entire year.
        <br><br><span class="faq-ref">Law: Sec 11/12/12AB/13/80G, ITA 1961 · Form 10B/10BB · ICAI GN July 2024</span></div>
      </div>

    </div>
  </div>
</section>

<!-- ══ CTA BAND ══ -->
<section class="cta-band">
  <div>
    <h2>Make Every Tax Decision Strategic</h2>
    <p>Plan, file, and defend your tax position with an experienced Chartered Accountant team — ITA 2025 ready.</p>
  </div>
  <div class="cta-btns">
    <button cla

