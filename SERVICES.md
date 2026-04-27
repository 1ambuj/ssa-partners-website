<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Non-Resident & International Services | SSA Chartered Accountants</title>
<meta name="description" content="End-to-end advisory for NRIs, foreign nationals, and overseas entities doing business in India — FEMA, DTAA, RBI compliance, and cross-border tax structuring by SSA Chartered Accountants.">
<style>
  /* ── RESET & BASE ── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
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
    --gold:   #B07D2C;
    --gold2:  #C99535;
    --gold3:  #EAB84A;
    --mist:   #F5F3EF;
    --border: #DDD8CF;
    --slate:  #5A6475;
    --ink:    #0D1B2A;
    --white:  #ffffff;
    --green:  #065F46;
    --amber:  #78350F;
    --blue:   #1E3A5F;
    --red:    #7F1D1D;
    --teal:   #0F4C5C;
  }

  /* ── TOPBAR ── */
  .topbar {
    background: var(--navy);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    height: 56px;
    position: sticky;
    top: 0;
    z-index: 200;
  }
  .topbar-brand {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .topbar-brand span {
    color: var(--gold3);
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    border-left: 1px solid rgba(255,255,255,0.2);
    padding-left: 12px;
  }
  .topbar-nav { display: flex; gap: 2rem; }
  .topbar-nav a {
    color: rgba(255,255,255,0.6);
    font-size: 13px;
    letter-spacing: 0.02em;
    transition: color 0.15s;
  }
  .topbar-nav a:hover { color: #fff; }
  .topbar-cta {
    background: var(--gold);
    color: #fff;
    border: none;
    padding: 8px 20px;
    font-size: 12.5px;
    font-weight: 500;
    border-radius: 3px;
    letter-spacing: 0.02em;
  }

  /* ── HERO ── */
  .hero {
    background: var(--navy2);
    color: #fff;
    padding: 5rem 2.5rem 0;
    position: relative;
    overflow: hidden;
  }
  .hero-globe {
    position: absolute;
    right: -60px; top: -60px;
    width: 520px; height: 520px;
    border-radius: 50%;
    border: 1px solid rgba(176,125,44,0.12);
    pointer-events: none;
  }
  .hero-globe::before {
    content: '';
    position: absolute;
    inset: 30px;
    border-radius: 50%;
    border: 1px solid rgba(176,125,44,0.08);
  }
  .hero-globe::after {
    content: '';
    position: absolute;
    inset: 80px;
    border-radius: 50%;
    border: 1px solid rgba(176,125,44,0.05);
  }
  .hero-lines {
    position: absolute;
    right: 0; top: 0; bottom: 0;
    width: 42%;
    background: repeating-linear-gradient(
      -60deg,
      transparent,
      transparent 44px,
      rgba(176,125,44,0.035) 44px,
      rgba(176,125,44,0.035) 45px
    );
    pointer-events: none;
  }
  .hero-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
  .breadcrumb {
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  .breadcrumb span { color: var(--gold2); }
  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gold2);
    margin-bottom: 1rem;
  }
  .hero-tag::before {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background: var(--gold2);
  }
  .hero h1 {
    font-size: clamp(2.1rem, 4.2vw, 3.1rem);
    font-weight: 300;
    line-height: 1.08;
    letter-spacing: -0.03em;
    max-width: 680px;
    margin-bottom: 1.25rem;
  }
  .hero h1 em { font-style: normal; color: var(--gold3); }
  .hero-sub {
    font-size: 15px;
    color: rgba(255,255,255,0.62);
    max-width: 560px;
    line-height: 1.8;
    margin-bottom: 2.25rem;
  }
  .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 3rem; }
  .btn-gold {
    background: var(--gold);
    color: #fff;
    border: none;
    padding: 13px 30px;
    font-size: 13.5px;
    font-weight: 500;
    border-radius: 3px;
    letter-spacing: 0.02em;
    transition: background 0.15s;
    cursor: pointer;
  }
  .btn-gold:hover { background: var(--gold2); }
  .btn-outline {
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.3);
    padding: 13px 30px;
    font-size: 13.5px;
    border-radius: 3px;
    transition: border-color 0.15s;
    cursor: pointer;
  }
  .btn-outline:hover { border-color: rgba(255,255,255,0.6); }

  /* ── HERO STAT BAND ── */
  .hero-stat-band {
    display: flex;
    gap: 0;
    margin-top: 3.5rem;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .hstat-item {
    flex: 1;
    padding: 1.75rem 1.5rem;
    border-right: 1px solid rgba(255,255,255,0.07);
  }
  .hstat-item:last-child { border-right: none; }
  .hstat-num {
    font-size: 1.8rem;
    font-weight: 300;
    color: var(--gold3);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 5px;
  }
  .hstat-label {
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .hstat-sub {
    font-size: 12px;
    color: rgba(255,255,255,0.3);
    margin-top: 3px;
  }

  /* ── COMPLIANCE BAR ── */
  .compliance-bar {
    background: #FFFBF0;
    border-top: 3px solid var(--gold);
    padding: 1.25rem 2.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  .cb-icon {
    flex-shrink: 0;
    width: 34px; height: 34px;
    background: var(--gold);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #fff;
    font-size: 15px;
    margin-top: 2px;
  }
  .cb-content { flex: 1; }
  .cb-head {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--amber);
    margin-bottom: 5px;
  }
  .cb-text { font-size: 13px; color: #5A4A2A; line-height: 1.65; }
  .pill-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
  .pill {
    font-size: 11px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 2px;
    letter-spacing: 0.02em;
  }
  .pill-blue   { background: #DBEAFE; color: var(--blue); }
  .pill-green  { background: #D1FAE5; color: var(--green); }
  .pill-amber  { background: #FEF3C7; color: var(--amber); }
  .pill-teal   { background: #CCFBF1; color: var(--teal); }
  .pill-red    { background: #FEE2E2; color: var(--red); }

  /* ── LAYOUT ── */
  .container { max-width: 1100px; margin: 0 auto; }
  .sec { padding: 3.5rem 2.5rem; }
  .sec-mist { background: var(--mist); }
  .sec-dark { background: var(--navy); color: #fff; }
  .sec-label {
    font-size: 10.5px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .sec-dark .sec-label { color: var(--gold2); }
  .sec-h {
    font-size: clamp(1.4rem, 2.5vw, 1.85rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    color: var(--ink);
  }
  .sec-dark .sec-h { color: #fff; }
  .sec-rule { width: 36px; height: 2px; background: var(--gold); margin: 0.65rem 0 1.5rem; }
  .sec-intro { font-size: 14px; color: var(--slate); line-height: 1.8; max-width: 700px; margin-bottom: 2rem; }
  .sec-dark .sec-intro { color: rgba(255,255,255,0.58); }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: start; }
  .three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; }

  /* ── REGULATORY LANDSCAPE CARDS ── */
  .reg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
  .reg-card {
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 1.5rem 1.25rem;
    background: #fff;
    position: relative;
    overflow: hidden;
  }
  .reg-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: var(--gold);
  }
  .reg-card-icon { font-size: 1.6rem; margin-bottom: 0.75rem; }
  .reg-card-law {
    font-size: 10.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 0.4rem;
  }
  .reg-card-title { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 0.5rem; line-height: 1.35; }
  .reg-card-body { font-size: 12.5px; color: var(--slate); line-height: 1.65; }

  /* ── CLIENT SEGMENTS ── */
  .segment-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
  .segment-card {
    background: var(--navy2);
    color: #fff;
    border-radius: 5px;
    padding: 1.5rem 1.5rem;
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
  }
  .seg-icon {
    flex-shrink: 0;
    width: 42px; height: 42px;
    background: rgba(176,125,44,0.15);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem;
    border: 1px solid rgba(176,125,44,0.2);
  }
  .seg-title { font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 5px; }
  .seg-body { font-size: 12.5px; color: rgba(255,255,255,0.55); line-height: 1.6; }

  /* ── OVERVIEW OVERVIEW PANEL ── */
  .overview-side { display: flex; flex-direction: column; gap: 1rem; }
  .ov-point {
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.15rem 1.25rem;
    background: #fff;
    position: relative;
    padding-left: 1.5rem;
  }
  .ov-point::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--gold);
    border-radius: 3px 0 0 3px;
  }
  .ov-point-num { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 4px; }
  .ov-point-title { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 4px; }
  .ov-point-body { font-size: 12.5px; color: var(--slate); line-height: 1.6; }

  /* ── SERVICE ACCORDION ── */
  .svc-accordion { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
  .svc-item { background: #fff; }
  .svc-header {
    width: 100%;
    background: none;
    border: none;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    cursor: pointer;
    transition: background 0.15s;
  }
  .svc-header:hover { background: var(--mist); }
  .svc-header-left { display: flex; align-items: center; gap: 1rem; }
  .svc-icon { font-size: 1.25rem; flex-shrink: 0; }
  .svc-name { font-size: 14.5px; font-weight: 600; color: var(--ink); }
  .svc-tagline { font-size: 12px; color: var(--slate); margin-top: 2px; }
  .svc-toggle { font-size: 1.2rem; color: var(--gold); font-weight: 300; flex-shrink: 0; }
  .svc-body {
    display: none;
    padding: 0 1.5rem 1.5rem;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .svc-body.open { display: grid; }
  .svc-scope-label { font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 0.5rem; }
  .svc-desc { font-size: 13.5px; color: var(--slate); line-height: 1.8; margin-bottom: 1.25rem; }
  .svc-list { display: flex; flex-direction: column; gap: 8px; }
  .svc-list li { font-size: 13px; color: var(--slate); display: flex; gap: 9px; align-items: flex-start; line-height: 1.55; }
  .svc-list li::before { content: '→'; color: var(--gold); font-size: 11px; margin-top: 3px; flex-shrink: 0; }

  /* ── STANDARDS BOX ── */
  .standards-box {
    background: var(--navy);
    border-radius: 5px;
    padding: 1.25rem;
    color: #fff;
  }
  .std-head { font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold2); font-weight: 600; margin-bottom: 1rem; }
  .std-row { display: flex; gap: 0.75rem; padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); align-items: flex-start; }
  .std-row:last-child { border-bottom: none; }
  .std-code { font-size: 11px; font-weight: 600; color: var(--gold3); flex-shrink: 0; min-width: 110px; font-family: 'Courier New', monospace; }
  .std-desc { font-size: 12px; color: rgba(255,255,255,0.55); line-height: 1.5; }
  .deliv-box { margin-top: 1rem; padding: 1rem 1.25rem; background: var(--mist); border-radius: 4px; border: 1px solid var(--border); }
  .deliv-head { font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--slate); font-weight: 600; margin-bottom: 0.65rem; }
  .deliv-list { display: flex; flex-direction: column; gap: 6px; }
  .deliv-list li { font-size: 12.5px; color: var(--slate); display: flex; gap: 8px; align-items: flex-start; }
  .deliv-list li::before { content: '✓'; color: var(--gold); font-size: 11px; margin-top: 2px; flex-shrink: 0; }

  /* ── 6× MODEL ── */
  .sixmodel-wrap {
    background: var(--navy);
    border-radius: 8px;
    padding: 2.5rem;
    margin-top: 0;
    color: #fff;
  }
  .sixmodel-title {
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold2);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .sixmodel-h { font-size: 1.3rem; font-weight: 300; letter-spacing: -0.02em; color: #fff; margin-bottom: 0.4rem; }
  .sixmodel-sub { font-size: 12.5px; color: rgba(255,255,255,0.5); line-height: 1.7; margin-bottom: 2rem; max-width: 600px; }
  .six-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden; }
  .six-item { background: rgba(255,255,255,0.03); padding: 1.25rem 1rem; transition: background 0.2s; }
  .six-item:hover { background: rgba(176,125,44,0.08); }
  .six-num { font-size: 1.4rem; font-weight: 300; color: var(--gold3); letter-spacing: -0.02em; margin-bottom: 0.3rem; line-height: 1; }
  .six-name { font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 0.35rem; }
  .six-desc { font-size: 12px; color: rgba(255,255,255,0.48); line-height: 1.6; }
  .six-law { font-size: 10.5px; color: var(--gold2); margin-top: 6px; font-family: 'Courier New', monospace; }

  /* ── APPROACH STEPS ── */
  .approach-list { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
  .a-step {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem 1.75rem;
    border-bottom: 1px solid var(--border);
    background: #fff;
    transition: background 0.15s;
  }
  .a-step:last-child { border-bottom: none; }
  .a-step:hover { background: var(--mist); }
  .a-num { font-size: 1.5rem; font-weight: 300; color: var(--gold3); letter-spacing: -0.02em; flex-shrink: 0; min-width: 40px; line-height: 1.2; }
  .a-title { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 0.4rem; }
  .a-desc { font-size: 13px; color: var(--slate); line-height: 1.7; }
  .a-ref { font-size: 11.5px; color: var(--gold); font-weight: 500; margin-top: 0.5rem; font-family: 'Courier New', monospace; }

  /* ── WHY SSA GRID ── */
  .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .why-item { padding: 1.5rem 1.25rem; border: 1px solid var(--border); border-radius: 5px; background: #fff; }
  .why-num { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: var(--gold); border-bottom: 1px solid var(--border); padding-bottom: 0.65rem; margin-bottom: 0.75rem; }
  .why-title { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 0.5rem; }
  .why-body { font-size: 12.5px; color: var(--slate); line-height: 1.7; }

  /* ── ALERT / NOTICE BOX ── */
  .notice-box {
    background: #EFF6FF;
    border-left: 3px solid #2563EB;
    padding: 1rem 1.25rem;
    border-radius: 0 4px 4px 0;
    margin-top: 1.25rem;
  }
  .notice-head { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--blue); margin-bottom: 4px; }
  .notice-body { font-size: 12.5px; color: #1E40AF; line-height: 1.65; }

  /* ── SECTORS ── */
  .sectors-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
  .sector-card { padding: 1.25rem; border: 1px solid var(--border); border-radius: 5px; background: #fff; transition: border-color 0.15s; }
  .sector-card:hover { border-color: var(--gold); }
  .sector-icon { font-size: 1.5rem; margin-bottom: 0.6rem; }
  .sector-name { font-size: 13.5px; font-weight: 600; color: var(--ink); margin-bottom: 0.35rem; }
  .sector-detail { font-size: 12px; color: var(--slate); line-height: 1.55; }

  /* ── BLOG CARDS ── */
  .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
  .blog-card {
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
    background: #fff;
    transition: box-shadow 0.2s;
  }
  .blog-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
  .blog-img {
    height: 160px;
    background: var(--navy2);
    position: relative;
    overflow: hidden;
    display: flex; align-items: center; justify-content: center;
  }
  .blog-img-inner { font-size: 3rem; opacity: 0.5; }
  .blog-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(12,27,51,0.7) 0%, rgba(176,125,44,0.3) 100%);
  }
  .blog-tag {
    position: absolute;
    top: 12px; left: 12px;
    background: var(--gold);
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 2px;
  }
  .blog-body { padding: 1.25rem; }
  .blog-date { font-size: 11px; color: var(--slate); letter-spacing: 0.05em; margin-bottom: 0.5rem; }
  .blog-title { font-size: 14px; font-weight: 600; color: var(--ink); line-height: 1.4; margin-bottom: 0.5rem; }
  .blog-excerpt { font-size: 12.5px; color: var(--slate); line-height: 1.65; margin-bottom: 1rem; }
  .blog-read { font-size: 12px; font-weight: 600; color: var(--gold); display: flex; align-items: center; gap: 5px; }
  .blog-read::after { content: '→'; }

  /* ── FAQ ── */
  .faq-wrap { max-width: 860px; }
  .faq-item { border: 1px solid var(--border); border-radius: 4px; margin-bottom: 8px; overflow: hidden; }
  .faq-q {
    width: 100%;
    background: #fff;
    border: none;
    padding: 1.15rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: var(--ink);
    text-align: left;
    cursor: pointer;
    transition: background 0.15s;
  }
  .faq-q:hover { background: var(--mist); }
  .faq-toggle { color: var(--gold); font-size: 1.2rem; font-weight: 400; flex-shrink: 0; margin-left: 1rem; }
  .faq-a {
    display: none;
    padding: 0 1.5rem 1.25rem;
    font-size: 13.5px;
    color: var(--slate);
    line-height: 1.8;
    background: #fff;
  }
  .faq-a.open { display: block; }
  .faq-law { font-size: 11px; color: var(--gold); font-weight: 500; margin-top: 0.65rem; font-family: 'Courier New', monospace; }

  /* ── CTA BAND ── */
  .cta-band {
    background: var(--navy);
    padding: 3rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .cta-band h2 { font-size: clamp(1.15rem, 2vw, 1.5rem); font-weight: 300; color: #fff; letter-spacing: -0.015em; margin-bottom: 0.4rem; }
  .cta-band p { font-size: 13.5px; color: rgba(255,255,255,0.5); max-width: 480px; }
  .cta-btns { display: flex; gap: 12px; flex-shrink: 0; }

  /* ── FOOTER ── */
  .footer {
    background: #080F1A;
    padding: 1.25rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 11.5px;
    color: rgba(255,255,255,0.3);
  }
  .footer span { color: rgba(255,255,255,0.55); }

  /* ── PROCESS VISUAL ── */
  .process-flow {
    display: flex;
    align-items: stretch;
    gap: 0;
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid var(--border);
  }
  .pf-step {
    flex: 1;
    padding: 1.25rem 1rem;
    background: #fff;
    border-right: 1px solid var(--border);
    position: relative;
    text-align: center;
  }
  .pf-step:last-child { border-right: none; }
  .pf-step::after {
    content: '›';
    position: absolute;
    right: -10px; top: 50%;
    transform: translateY(-50%);
    color: var(--gold);
    font-size: 1.2rem;
    z-index: 2;
  }
  .pf-step:last-child::after { display: none; }
  .pf-num { font-size: 10px; letter-spacing: 0.1em; color: var(--gold); font-weight: 600; text-transform: uppercase; margin-bottom: 5px; }
  .pf-title { font-size: 12.5px; font-weight: 600; color: var(--ink); line-height: 1.35; }

  /* ── HIGHLIGHT PANEL ── */
  .highlight-panel {
    background: linear-gradient(135deg, var(--navy2) 0%, #0F2040 100%);
    border-radius: 8px;
    padding: 2rem 2rem;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  .highlight-panel::before {
    content: '';
    position: absolute;
    right: -40px; bottom: -40px;
    width: 200px; height: 200px;
    border-radius: 50%;
    border: 1px solid rgba(176,125,44,0.12);
    pointer-events: none;
  }
  .hp-label { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold2); font-weight: 600; margin-bottom: 0.5rem; }
  .hp-title { font-size: 1.1rem; font-weight: 600; color: #fff; margin-bottom: 0.75rem; line-height: 1.3; }
  .hp-body { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 1.25rem; }
  .hp-items { display: flex; flex-direction: column; gap: 6px; }
  .hp-item { font-size: 12.5px; color: rgba(255,255,255,0.7); display: flex; gap: 8px; align-items: flex-start; }
  .hp-item::before { content: '—'; color: var(--gold2); flex-shrink: 0; }

  /* ── ICAI NOTE ── */
  .icai-note {
    border: 1px solid rgba(176,125,44,0.3);
    border-radius: 4px;
    padding: 0.9rem 1.1rem;
    background: rgba(176,125,44,0.04);
    font-size: 12px;
    color: var(--amber);
    line-height: 1.6;
    margin-top: 1rem;
  }
  .icai-note strong { font-weight: 700; }
</style>
</head>
<body>

<!-- ══ TOPBAR ══ -->
<nav class="topbar">
  <div class="topbar-brand">
    SSA Chartered Accountants
    <span>CA Firm · India</span>
  </div>
  <div class="topbar-nav">
    <a href="#">Services</a>
    <a href="#">About</a>
    <a href="#">Insights</a>
    <a href="#">Contact</a>
  </div>
  <button class="topbar-cta">Schedule a Call</button>
</nav>

<!-- ══ HERO ══ -->
<section class="hero">
  <div class="hero-lines"></div>
  <div class="hero-globe"></div>
  <div class="hero-inner">
    <div class="breadcrumb">Services <span>/ Non-Resident &amp; International</span></div>
    <div class="hero-tag">Cross-Border Advisory</div>
    <h1>Non-Resident &amp;<br><em>International Services</em></h1>
    <p class="hero-sub">A structured, documentation-driven practice for NRIs, foreign nationals, and overseas entities operating in India — covering FEMA, DTAA, inbound investments, RBI compliance, and tax representation.</p>
    <div class="hero-ctas">
      <button class="btn-gold">Schedule an NRI Advisory Call</button>
      <button class="btn-outline">Download Service Guide</button>
    </div>
  </div>

  <div class="hero-stat-band">
    <div class="hero-inner" style="display:flex; gap:0; width:100%; max-width:1100px;">
      <div class="hstat-item">
        <div class="hstat-num">4</div>
        <div class="hstat-label">Service Modules</div>
        <div class="hstat-sub">Business Setup · Tax · Remittance · Legal</div>
      </div>
      <div class="hstat-item">
        <div class="hstat-num">FEMA</div>
        <div class="hstat-label">FEMA 1999 Compliant</div>
        <div class="hstat-sub">All inbound &amp; outbound transactions structured per RBI Master Directions</div>
      </div>
      <div class="hstat-item">
        <div class="hstat-num">90+</div>
        <div class="hstat-label">DTAA Countries</div>
        <div class="hstat-sub">Treaty analysis across India's bilateral tax treaty network</div>
      </div>
      <div class="hstat-item">
        <div class="hstat-num">6×</div>
        <div class="hstat-label">Delivery Model</div>
        <div class="hstat-sub">Assess · Structure · Compute · Document · File · Defend</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ COMPLIANCE BAR ══ -->
<div class="compliance-bar">
  <div class="cb-icon">⚖</div>
  <div class="cb-content">
    <div class="cb-head">ICAI &amp; Regulatory Compliance Framework</div>
    <div class="cb-text">All NRI and cross-border engagements are conducted in compliance with applicable ICAI guidance, RBI Master Directions, and FEMA regulations. Certificates issued by SSA under FEMA/RBI requirements (including Form 15CA/CB, repatriation certificates, and FIRC-related documentation) are governed by ICAI's <em>Guidance Note on Certificates</em> and the <em>Technical Guide on Reporting under FEMA</em>.</div>
    <div class="pill-row">
      <span class="pill pill-blue">FEMA 1999</span>
      <span class="pill pill-green">DTAA · Sec 90/90A ITA</span>
      <span class="pill pill-amber">Form 15CA · Form 15CB</span>
      <span class="pill pill-teal">RBI Master Directions 2016</span>
      <span class="pill pill-blue">ICAI GN on Certificates</span>
      <span class="pill pill-amber">MCA · Company Law</span>
      <span class="pill pill-teal">SEBI FPI Regulations</span>
    </div>
  </div>
</div>

<!-- ══ OVERVIEW ══ -->
<section class="sec">
  <div class="container">
    <div class="two-col">
      <div>
        <div class="sec-label">Overview</div>
        <h2 class="sec-h">One Partner for Every India-Related Cross-Border Matter</h2>
        <div class="sec-rule"></div>
        <p class="sec-intro">India's cross-border regulatory framework is layered across multiple statutes — FEMA, the Income Tax Act, the Companies Act, and RBI Master Directions — that frequently intersect. A remittance decision is also a tax event. A property acquisition triggers FEMA reporting. An office setup carries PE risk.</p>
        <p style="font-size:14px; color:var(--slate); line-height:1.8; margin-bottom:1.25rem;">We help NRIs, foreign nationals, and overseas businesses navigate this intersection with clarity. Our practice is built on technical depth, structured documentation, and proactive regulatory tracking — so you are never caught off-guard by a compliance gap.</p>
        <p style="font-size:14px; color:var(--slate); line-height:1.8; margin-bottom:1.75rem;">Whether you are receiving rental income from inherited property, repatriating sale proceeds, setting up a wholly-owned subsidiary, or managing capital gains exposure on Indian assets — our six-step delivery model ensures every position is assessed, structured, documented, and defensible.</p>

        <div class="notice-box">
          <div class="notice-head">ITA 2025 — Impact on NRIs</div>
          <div class="notice-body">The Income Tax Act 2025 (effective AY 2026-27) restructures provisions governing NRI taxation, RNOR status, residency determination, and Sec 195 TDS obligations. All our NRI advisory and return filing work from AY 2026-27 is mapped to the new Act's structure. We advise clients proactively on impact assessments before filing deadlines.</div>
        </div>
      </div>

      <div class="overview-side">
        <div class="ov-point">
          <div class="ov-point-num">Point 01</div>
          <div class="ov-point-title">FEMA &amp; RBI Compliance — Non-Negotiable</div>
          <div class="ov-point-body">Every cross-border transaction — remittance, investment, loan, property sale — must be structured within FEMA 1999 and RBI Master Directions. We map the transaction, identify the applicable route, prepare the required documentation, and coordinate with authorised dealer banks.</div>
        </div>
        <div class="ov-point">
          <div class="ov-point-num">Point 02</div>
          <div class="ov-point-title">DTAA Benefits Must Be Claimed Proactively</div>
          <div class="ov-point-body">India's tax treaties with 90+ countries provide relief from double taxation — but treaty benefits require proactive claim, proper certification (TRC, Form 10F), and alignment with both domestic law and the treaty text. Unclaimed benefits are permanently lost.</div>
        </div>
        <div class="ov-point">
          <div class="ov-point-num">Point 03</div>
          <div class="ov-point-title">Documentation is the First Line of Defence</div>
          <div class="ov-point-body">RBI and income tax scrutiny of NRI transactions is increasing. Every repatriation, remittance, and property transaction must be backed by a clear, structured documentation trail — one that can withstand banking review, income tax scrutiny, and FEMA inquiry simultaneously.</div>
        </div>
        <div class="ov-point">
          <div class="ov-point-num">Point 04</div>
          <div class="ov-point-title">Residency Status Changes Everything</div>
          <div class="ov-point-body">NRI, RNOR, and resident status determines tax incidence, FEMA applicability, and banking permissions. The determination requires careful analysis of physical presence across multiple years — a single error can result in unexpected tax exposure on global income.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ REGULATORY LANDSCAPE ══ -->
<section class="sec sec-mist">
  <div class="container">
    <div class="sec-label">Regulatory Framework</div>
    <h2 class="sec-h">The Laws That Govern Your India Connection</h2>
    <div class="sec-rule"></div>
    <p class="sec-intro">Cross-border transactions in India sit at the intersection of four distinct regulatory frameworks. Each must be addressed simultaneously — not in isolation.</p>

    <div class="reg-grid">
      <div class="reg-card">
        <div class="reg-card-icon">🏛</div>
        <div class="reg-card-law">FEMA 1999 · RBI Master Directions</div>
        <div class="reg-card-title">Foreign Exchange Management</div>
        <div class="reg-card-body">Governs all inbound and outbound capital flows — remittances, investments, loans, property transactions, and repatriation. Non-compliance attracts compounding penalties under FEMA Sec 13. RBI Master Directions 2016 set the detailed operational framework for each transaction category.</div>
        <div class="icai-note"><strong>ICAI Reference:</strong> Technical Guide on Reporting under FEMA · ICAI GN on Form 15CB Certification</div>
      </div>

      <div class="reg-card">
        <div class="reg-card-icon">💹</div>
        <div class="reg-card-law">Income Tax Act 1961 / ITA 2025</div>
        <div class="reg-card-title">Non-Resident Taxation</div>
        <div class="reg-card-body">NRI tax liability is restricted to Indian-sourced income — but TDS deductions, capital gains computation, DTAA claims, and return filing obligations must all be managed correctly. Sec 195 TDS on payments to NRIs and the new ITA 2025 provisions for residency and RNOR status are particularly critical areas.</div>
        <div class="icai-note"><strong>ICAI Reference:</strong> Technical Guide on NRI Taxation · GN on Tax Audit u/s 44AB · ITA 2025 Transition Guidance</div>
      </div>

      <div class="reg-card">
        <div class="reg-card-icon">🏢</div>
        <div class="reg-card-law">Companies Act 2013 · SEBI Regulations</div>
        <div class="reg-card-title">Corporate &amp; Securities Law</div>
        <div class="reg-card-body">Foreign entities setting up in India must navigate Companies Act requirements for subsidiaries, branch offices, liaison offices, and project offices — each with distinct MCA registration, filing, and compliance obligations. SEBI FPI and FDI regulations also apply to portfolio investment and listed company holdings.</div>
        <div class="icai-note"><strong>ICAI Reference:</strong> GN on Audit of Companies with Foreign Subsidiaries · MCA Form Compliance</div>
      </div>

      <div class="reg-card">
        <div class="reg-card-icon">🤝</div>
        <div class="reg-card-law">Double Taxation Avoidance Agreements</div>
        <div class="reg-card-title">Tax Treaties — India's DTAA Network</div>
        <div class="reg-card-body">India has active DTAAs with 90+ countries. Treaty benefits — reduced withholding rates, source-country exemptions, PE definitions — require a Tax Residency Certificate (TRC), Form 10F filing, and a structured treaty analysis before any payment or return is processed. Treaty shopping is subject to PPT (Principal Purpose Test) under BEPS.</div>
        <div class="icai-note"><strong>ICAI Reference:</strong> Technical Guide on DTAA · MLI Impact on India's Tax Treaties (ICAI Publication)</div>
      </div>

      <div class="reg-card">
        <div class="reg-card-icon">🔄</div>
        <div class="reg-card-law">Transfer Pricing · Sec 92–92F</div>
        <div class="reg-card-title">Related-Party Cross-Border Pricing</div>
        <div class="reg-card-body">Transactions between an NRI-controlled Indian entity and overseas affiliates — management fees, royalties, interest, cost allocations — must be priced at arm's length and supported by a Transfer Pricing Study Report (Form 3CEB). The Accountant's Report must be issued by a Chartered Accountant as defined under ITA.</div>
        <div class="icai-note"><strong>ICAI Reference:</strong> GN on Transfer Pricing · SA for TP Certification · Form 3CEB Guidance</div>
      </div>

      <div class="reg-card">
        <div class="reg-card-icon">🏘</div>
        <div class="reg-card-law">NRO · NRE · FCNR(B) Banking</div>
        <div class="reg-card-title">NRI Banking &amp; Repatriation Routes</div>
        <div class="reg-card-body">The choice between NRO and NRE accounts determines repatriability of funds. Repatriation from NRO accounts (up to USD 1 million per year) requires Form 15CA/CB, an undertaking to the AD bank, and income tax compliance documentation. Structuring the account type correctly at inception avoids complex unwinding later.</div>
        <div class="icai-note"><strong>ICAI Reference:</strong> ICAI GN on Form 15CB · FEMA Notification No. 5(R)/2016 · RBI Circular</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ WHO WE SERVE ══ -->
<section class="sec">
  <div class="container">
    <div class="sec-label">Clients</div>
    <h2 class="sec-h">Who This Practice Serves</h2>
    <div class="sec-rule"></div>
    <p class="sec-intro">Our NRI and international practice is built around four client segments — each with distinct regulatory exposures, transaction patterns, and compliance timelines.</p>
    <div class="segment-grid">
      <div class="segment-card">
        <div class="seg-icon">🌏</div>
        <div>
          <div class="seg-title">NRIs &amp; Persons of Indian Origin (PIOs)</div>
          <div class="seg-body">Individuals holding Indian passports or of Indian origin, residing overseas — managing income from Indian property, investments, and savings. Key concerns include RNOR planning, capital gains on property sales, DTAA claims, and annual ITR filing obligations in India.</div>
        </div>
      </div>
      <div class="segment-card">
        <div class="seg-icon">🏦</div>
        <div>
          <div class="seg-title">Foreign Nationals &amp; Expatriates in India</div>
          <div class="seg-body">Professionals and employees on assignment in India — navigating salary split arrangements, RNOR status, Section 195 deductions, social security treaty applicability, and repatriation of accumulated savings at the end of their India tenure.</div>
        </div>
      </div>
      <div class="segment-card">
        <div class="seg-icon">🏢</div>
        <div>
          <div class="seg-title">Foreign Companies &amp; Multinationals Entering India</div>
          <div class="seg-body">Overseas entities establishing a presence in India — evaluating entry options (subsidiary, branch, liaison, project office), managing Permanent Establishment risk, structuring management fee and royalty arrangements, and meeting first-year MCA and FEMA compliance requirements.</div>
        </div>
      </div>
      <div class="segment-card">
        <div class="seg-icon">💼</div>
        <div>
          <div class="seg-title">NRI Entrepreneurs &amp; HNIs with India Assets</div>
          <div class="seg-body">High-net-worth individuals with inherited or acquired Indian property, stock portfolios, or business interests — requiring integrated advice on capital gains structuring, succession planning under Hindu law or FEMA, and ongoing NRO/NRE management for rental and investment income.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ SERVICE MODULES ══ -->
<section class="sec sec-mist">
  <div class="container">
    <div class="sec-label">Our Offerings</div>
    <h2 class="sec-h">Service Modules</h2>
    <div class="sec-rule"></div>
    <p class="sec-intro">Our NRI and international practice is structured across four specialised modules — each covering a distinct aspect of India's cross-border regulatory framework. They can be engaged independently or as an integrated mandate.</p>

    <div class="svc-accordion">

      <!-- MODULE 1 -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">🏢</div>
            <div>
              <div class="svc-name">Business Setup &amp; Entry Structuring</div>
              <div class="svc-tagline">Incorporation, RBI/FEMA approval, MCA compliance, and ongoing governance for foreign entities entering India</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body" id="sb1">
          <div>
            <div class="svc-scope-label">Scope &amp; Approach</div>
            <p class="svc-desc">Entry into India involves a multi-step regulatory process that spans FEMA, Companies Act, and RBI approval — all of which must be sequenced correctly. We begin with an entity evaluation aligned to your business model, then manage the incorporation and first-year compliance calendar end-to-end.</p>
            <ul class="svc-list">
              <li>Evaluation of entry vehicle — subsidiary, branch, liaison office, project office, LLP</li>
              <li>FEMA and FDI route analysis — automatic route vs government approval; sectoral caps</li>
              <li>Incorporation filings with MCA and RBI/Reserve Bank approval (where applicable)</li>
              <li>FCGPR (Foreign Currency — GPR) and FCTRS filings for equity issuance and transfers</li>
              <li>Director identification, company secretary, and registered office compliance</li>
              <li>Ongoing annual compliance calendar — MCA filings, FEMA annual returns (FLA), and AGM obligations</li>
              <li>PE risk review for liaison and project offices — scope of activities and documentation</li>
            </ul>
            <div class="icai-note" style="margin-top:1rem;"><strong>ICAI Compliance:</strong> Certificates for FEMA compliance issued in accordance with ICAI GN on Certificates and FEMA 1999. Company formation advice governed by ICAI ethics norms — no dual role conflict where SSA is also the statutory auditor.</div>
          </div>
          <div>
            <div class="standards-box">
              <div class="std-head">Regulatory Framework &amp; References</div>
              <div class="std-row"><span class="std-code">FEMA 1999</span><span class="std-desc">S.6 — capital account transactions; FDI automatic and government routes</span></div>
              <div class="std-row"><span class="std-code">RBI MD 2016</span><span class="std-desc">Master Direction on Foreign Investment in India — entry and ongoing compliance</span></div>
              <div class="std-row"><span class="std-code">CA 2013</span><span class="std-desc">Companies Act — incorporation, foreign branch / liaison office registration</span></div>
              <div class="std-row"><span class="std-code">DIPP Policy</span><span class="std-desc">Consolidated FDI Policy — sector-specific caps and approval requirements</span></div>
              <div class="std-row"><span class="std-code">Form FLA</span><span class="std-desc">RBI Annual Return on Foreign Liabilities and Assets — due by July 15 each year</span></div>
              <div class="std-row"><span class="std-code">FCGPR/FCTRS</span><span class="std-desc">RBI reporting for equity issuances and share transfers to/from non-residents</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Entry structure evaluation memo with FEMA and tax analysis</li>
                <li>MCA incorporation documents and certificate of incorporation</li>
                <li>RBI/FEMA filings — FCGPR, FCTRS, FLA</li>
                <li>First-year compliance calendar (MCA + RBI + IT)</li>
                <li>PE risk assessment note for liaison/project offices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- MODULE 2 -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">💹</div>
            <div>
              <div class="svc-name">International Taxation &amp; Return Filing</div>
              <div class="svc-tagline">DTAA analysis, capital gains structuring, ITR filing for NRIs, and Sec 195 TDS advisory</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body" id="sb2">
          <div>
            <div class="svc-scope-label">Scope &amp; Approach</div>
            <p class="svc-desc">NRI taxation requires a parallel reading of Indian domestic law and the applicable DTAA. We begin with a residency determination and income categorisation before computing tax liability — ensuring treaty benefits are claimed correctly, TDS positions are advising the deductor, and returns are filed with complete disclosure.</p>
            <ul class="svc-list">
              <li>Residency determination — NRI, RNOR, or Resident — under Sec 6 ITA and ITA 2025</li>
              <li>DTAA analysis — treaty entitlement, TRC verification, Form 10F filing</li>
              <li>Capital gains computation on Indian property, equity, and mutual funds with correct cost-basis and indexation</li>
              <li>Advisory on royalty, interest, FTS (Fee for Technical Services), and dividend income under DTAA</li>
              <li>Sec 195 TDS advisory — determining applicable rate, preparing Form 15CA/CB, coordinating with deductor</li>
              <li>ITR filing — ITR-2, ITR-3, or ITR-5 as applicable — with Schedule FA (foreign assets) and Schedule FSI</li>
              <li>Representation in case of notices from Income Tax Department, AIS/TIS reconciliation</li>
            </ul>
            <div class="icai-note" style="margin-top:1rem;"><strong>ICAI Compliance:</strong> Form 15CB is a certificate issued by a Chartered Accountant under ICAI's GN on Certificates. SSA ensures all 15CB certifications are based on verified documents, correct DTAA analysis, and proper examination of the underlying transaction — not routine issuance.</div>
          </div>
          <div>
            <div class="standards-box">
              <div class="std-head">Applicable Law &amp; Standards</div>
              <div class="std-row"><span class="std-code">Sec 6 ITA</span><span class="std-desc">Residency determination — NRI / RNOR tests; 182-day and 60-day rules</span></div>
              <div class="std-row"><span class="std-code">Sec 90/90A</span><span class="std-desc">DTAA — treaty entitlement, TRC, Form 10F, Principal Purpose Test</span></div>
              <div class="std-row"><span class="std-code">Sec 195</span><span class="std-desc">TDS on payments to non-residents — rate, obligation, Form 15CA/CB</span></div>
              <div class="std-row"><span class="std-code">Sec 112/112A</span><span class="std-desc">Capital gains on listed and unlisted assets — computation and DTAA override</span></div>
              <div class="std-row"><span class="std-code">ICAI GN 15CB</span><span class="std-desc">Guidance Note on Form 15CB Certification — scope and CA responsibility</span></div>
              <div class="std-row"><span class="std-code">ITA 2025</span><span class="std-desc">Revised residency provisions and RNOR conditions — applicable AY 2026-27</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Residency determination memo with year-wise presence analysis</li>
                <li>DTAA applicability report with treaty benefit computation</li>
                <li>Capital gains computation workbook with indexation and treaty analysis</li>
                <li>Form 15CA / Form 15CB certification package</li>
                <li>Filed ITR with Schedule FA, Schedule FSI, and working papers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- MODULE 3 -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">🔄</div>
            <div>
              <div class="svc-name">Remittance &amp; Repatriation Advisory</div>
              <div class="svc-tagline">Structuring, documentation, and bank coordination for remittances from NRO accounts and property sale proceeds</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body" id="sb3">
          <div>
            <div class="svc-scope-label">Scope &amp; Approach</div>
            <p class="svc-desc">Repatriation of funds from India requires a clear understanding of which funds are freely repatriable and which are subject to RBI limits, tax clearance, and Form 15CA/CB requirements. We structure the transaction, prepare the complete documentation package, and liaise with the AD bank through the remittance process.</p>
            <ul class="svc-list">
              <li>NRO to NRE transfer structuring — income vs capital receipts, USD 1 million per year limit</li>
              <li>Repatriation of property sale proceeds — FEMA compliance, 15CA/CB, income tax clearance</li>
              <li>Repatriation of inherited assets — Section 6(5) FEMA, succession documentation</li>
              <li>Remittance under LRS (Liberalised Remittance Scheme) for resident individuals — structuring and TCS management</li>
              <div></div>
              <li>NRO/NRE account structuring at account opening stage — avoiding future repatriation restrictions</li>
              <li>Coordination with authorised dealer (AD) banks on documentation requirements</li>
              <li>RBI compounding of FEMA violations — guidance and representation where prior non-compliance exists</li>
            </ul>
            <div class="icai-note" style="margin-top:1rem;"><strong>ICAI Compliance:</strong> All Form 15CB certifications issued by SSA are backed by a full examination of the underlying documents, source of funds, tax computations, and FEMA applicability — consistent with ICAI's GN on Form 15CB and the ICAI Guidance on Certificates (2019 Revised Edition).</div>
          </div>
          <div>
            <div class="standards-box">
              <div class="std-head">Regulatory &amp; Compliance References</div>
              <div class="std-row"><span class="std-code">FEMA Sch I</span><span class="std-desc">Schedule I — current account transactions; permissible remittances</span></div>
              <div class="std-row"><span class="std-code">RBI MD NRI</span><span class="std-desc">Master Direction — Remittance Facilities for NRIs / PIOs (2016)</span></div>
              <div class="std-row"><span class="std-code">Rule 37BB</span><span class="std-desc">IT Rules — Form 15CA/CB procedure; liability of remitter and CA</span></div>
              <div class="std-row"><span class="std-code">Sec 206C(1G)</span><span class="std-desc">TCS on LRS remittances above ₹7 lakh — rate and credit mechanism</span></div>
              <div class="std-row"><span class="std-code">FEMA Sec 13</span><span class="std-desc">Compounding provisions — penalties and regularisation for past defaults</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Repatriation structuring memo — source analysis, FEMA route, tax treatment</li>
                <li>Complete Form 15CA / 15CB package for bank submission</li>
                <li>Tax clearance documentation and undertaking to AD bank</li>
                <li>FEMA compounding application (where applicable)</li>
                <li>Remittance documentation file — audit-ready for future scrutiny</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- MODULE 4 -->
      <div class="svc-item">
        <button class="svc-header" onclick="toggleSvc(this)">
          <div class="svc-header-left">
            <div class="svc-icon">⚖</div>
            <div>
              <div class="svc-name">NRI Legal, Property &amp; Regulatory Advisory</div>
              <div class="svc-tagline">Property tax compliance, agreement review, inherited asset management, and representation before ITD, RBI, and MCA</div>
            </div>
          </div>
          <span class="svc-toggle">+</span>
        </button>
        <div class="svc-body" id="sb4">
          <div>
            <div class="svc-scope-label">Scope &amp; Approach</div>
            <p class="svc-desc">NRIs with Indian real estate, business interests, or inherited assets face a complex matrix of tax, FEMA, and succession law obligations that most general advisors handle in isolation. Our practice integrates the tax, FEMA, and documentation dimensions into a single advisory engagement — providing a complete view of your India obligations.</p>
            <ul class="svc-list">
              <li>Tax compliance on rental income from Indian property — ITR filing, advance tax, TDS reconciliation</li>
              <li>Capital gains planning on property sale — pre-sale structuring, Section 54/54F reinvestment, DTAA applicability</li>
              <li>FEMA permissions for acquisition and sale of Indian property by NRIs and PIOs</li>
              <li>Review and advisory on sale deeds, lease agreements, and joint development arrangements</li>
              <li>Inherited and gifted asset compliance — FEMA permissions, succession certificate assistance, tax computation</li>
              <li>Power of Attorney structuring for NRI property management</li>
              <li>Representation before Income Tax Department — notices, scrutiny assessment, appeal management</li>
              <li>Representation before RBI/Enforcement Directorate in FEMA matters</li>
            </ul>
          </div>
          <div>
            <div class="standards-box">
              <div class="std-head">Applicable Law &amp; Framework</div>
              <div class="std-row"><span class="std-code">FEMA N.5(R)</span><span class="std-desc">Acquisition and transfer of immovable property in India by NRIs/PIOs</span></div>
              <div class="std-row"><span class="std-code">Sec 54 / 54F</span><span class="std-desc">Capital gains exemption on reinvestment — eligibility for NRIs</span></div>
              <div class="std-row"><span class="std-code">Sec 194-IA</span><span class="std-desc">TDS by buyer on property purchase from NRI — rate and procedure</span></div>
              <div class="std-row"><span class="std-code">Sec 56(2)(x)</span><span class="std-desc">Deemed income on receipt of property at less than stamp duty value</span></div>
              <div class="std-row"><span class="std-code">FEMA Sec 31</span><span class="std-desc">Enforcement and compounding for immovable property violations</span></div>
              <div class="std-row"><span class="std-code">Hindu Succession</span><span class="std-desc">Succession Act 1956 / HSA — inheritance rights and FEMA interface</span></div>
            </div>
            <div class="deliv-box">
              <div class="deliv-head">Key Deliverables</div>
              <ul class="deliv-list">
                <li>Property tax compliance file — rental income ITR, advance tax, TDS</li>
                <li>Capital gains computation with Sec 54/54F exemption workings</li>
                <li>Pre-sale FEMA compliance checklist and AD bank documentation</li>
                <li>Agreement review note — tax and FEMA implications</li>
                <li>Representation brief for ITD/RBI proceedings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div><!-- /svc-accordion -->
  </div>
</section>

<!-- ══ 6× MODEL ══ -->
<section class="sec">
  <div class="container">
    <div class="two-col" style="align-items:center; gap:4rem;">
      <div>
        <div class="sec-label">SSA Service Framework</div>
        <h2 class="sec-h">The 6× Model — Applied to NRI &amp; Cross-Border Engagements</h2>
        <div class="sec-rule"></div>
        <p style="font-size:14px; color:var(--slate); line-height:1.8; margin-bottom:1.25rem;">Cross-border engagements are inherently multi-dimensional — a single transaction triggers obligations under FEMA, Income Tax, and sometimes MCA simultaneously. Our 6× delivery model ensures every dimension is assessed, every position is documented, and every filing is defensible.</p>
        <p style="font-size:14px; color:var(--slate); line-height:1.8; margin-bottom:1.5rem;">The model is not a workflow — it is a quality standard. Each step has a defined output, and no engagement moves forward without completing the prior step's deliverable.</p>
        <div class="process-flow">
          <div class="pf-step"><div class="pf-num">01</div><div class="pf-title">Assess</div></div>
          <div class="pf-step"><div class="pf-num">02</div><div class="pf-title">Structure</div></div>
          <div class="pf-step"><div class="pf-num">03</div><div class="pf-title">Compute</div></div>
          <div class="pf-step"><div class="pf-num">04</div><div class="pf-title">Document</div></div>
          <div class="pf-step"><div class="pf-num">05</div><div class="pf-title">File</div></div>
          <div class="pf-step"><div class="pf-num">06</div><div class="pf-title">Defend</div></div>
        </div>
      </div>

      <div class="sixmodel-wrap">
        <div class="sixmodel-title">SSA Delivery Framework · NRI Practice</div>
        <div class="sixmodel-h">Six Steps. No Exceptions.</div>
        <div class="sixmodel-sub">Every NRI and cross-border mandate follows these six steps in sequence — ensuring nothing is assumed, nothing is undocumented, and nothing is filed without review.</div>
        <div class="six-grid">
          <div class="six-item">
            <div class="six-num">01</div>
            <div class="six-name">Assess</div>
            <div class="six-desc">Residency status, income sources, prior FEMA exposures, and applicable DTAA — before any advice is given</div>
            <div class="six-law">Sec 6 · FEMA 1999 · DTAA</div>
          </div>
          <div class="six-item">
            <div class="six-num">02</div>
            <div class="six-name">Structure</div>
            <div class="six-desc">Optimal legal and tax structure for the transaction — FEMA route, treaty benefit claim, and account type</div>
            <div class="six-law">FDI Policy · DTAA · Sec 90</div>
          </div>
          <div class="six-item">
            <div class="six-num">03</div>
            <div class="six-name">Compute</div>
            <div class="six-desc">Tax liability with DTAA override, capital gains with correct cost basis, TDS at treaty or domestic rate</div>
            <div class="six-law">Sec 112 · Sec 195 · DTAA Art</div>
          </div>
          <div class="six-item">
            <div class="six-num">04</div>
            <div class="six-name">Document</div>
            <div class="six-desc">Working paper quality files — TRC, Form 10F, FEMA declarations, bank undertakings, and CA certificates</div>
            <div class="six-law">ICAI GN Certificates · Rule 37BB</div>
          </div>
          <div class="six-item">
            <div class="six-num">05</div>
            <div class="six-name">File &amp; Report</div>
            <div class="six-desc">15CA/CB submission, ITR filing with all schedules, FEMA returns, and MCA annual compliance — on time</div>
            <div class="six-law">Form 15CA/CB · FLA · FCGPR</div>
          </div>
          <div class="six-item">
            <div class="six-num">06</div>
            <div class="six-name">Defend</div>
            <div class="six-desc">Represent before ITD, RBI, and Enforcement Directorate — with pre-built documentation, not reactive reconstruction</div>
            <div class="six-law">FEMA Sec 13 · ITA Sec 148</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ APPROACH ══ -->
<section class="sec sec-mist">
  <div class="container">
    <div class="sec-label">Methodology</div>
    <h2 class="sec-h">How We Engage — From First Enquiry to Ongoing Compliance</h2>
    <div class="sec-rule"></div>
    <p class="sec-intro">NRI matters rarely arrive as clean, isolated questions. We follow a structured onboarding and engagement process that surfaces the full picture before advice is given.</p>

    <div class="approach-list">
      <div class="a-step">
        <div class="a-num">01</div>
        <div>
          <div class="a-title">Intake Assessment — Residency, History &amp; Exposure Mapping</div>
          <div class="a-desc">We begin every NRI engagement with a structured intake — mapping residency status across the past 10 years, identifying all India-sourced income streams, cataloguing FEMA-relevant transactions, and surfacing any prior compliance gaps. This is not a form-filling exercise; it is a forensic review of your India regulatory footprint. The output is a clear engagement scope memo.</div>
          <div class="a-ref">Output: Engagement scope memo · Residency determination · FEMA exposure map</div>
        </div>
      </div>
      <div class="a-step">
        <div class="a-num">02</div>
        <div>
          <div class="a-title">Transaction Structuring &amp; Treaty Analysis</div>
          <div class="a-desc">For each transaction — whether a property sale, remittance, investment, or business setup — we prepare a structuring note that addresses the FEMA route, applicable DTAA provisions, Indian tax treatment, and documentation requirements simultaneously. No transaction is processed without a written structuring note signed off by the engagement partner.</div>
          <div class="a-ref">Output: Transaction structuring note · DTAA analysis · FEMA compliance checklist</div>
        </div>
      </div>
      <div class="a-step">
        <div class="a-num">03</div>
        <div>
          <div class="a-title">Documentation Package Preparation</div>
          <div class="a-desc">Cross-border transactions require a layered documentation package — tax computations, FEMA declarations, bank undertakings, CA certificates, and regulatory filings. We prepare the complete package in a format that satisfies AD bank requirements, income tax scrutiny, and FEMA inquiry standards simultaneously. Documents are prepared to ICAI's Guidance Note on Certificates standard.</div>
          <div class="a-ref">Output: Form 15CA/CB · TRC/Form 10F · Bank documentation file · Working papers</div>
        </div>
      </div>
      <div class="a-step">
        <div class="a-num">04</div>
        <div>
          <div class="a-title">Filing — Tax Returns, RBI Reporting &amp; MCA Filings</div>
          <div class="a-desc">We manage the full filing calendar across Income Tax, RBI, and MCA — ensuring ITR deadlines (July 31 / October 31), FLA filings (July 15), FCGPR and FCTRS timelines, and all associated reporting are met without exception. Each return is filed with the complete disclosure — Schedule FA, Schedule FSI, and Form 67 for foreign tax credits — as required.</div>
          <div class="a-ref">Output: Filed ITR · RBI returns · MCA filings · Filing confirmation archive</div>
        </div>
      </div>
      <div class="a-step">
        <div class="a-num">05</div>
        <div>
          <div class="a-title">Proactive Monitoring — Regulatory Changes &amp; Client Alerts</div>
          <div class="a-desc">FEMA regulations, DTAA amendments, RBI circulars, and Income Tax Act changes affecting NRIs are tracked continuously. Clients receive structured impact alerts — not raw RBI or CBDT circulars — with a clear explanation of what changed, how it affects their position, and what action (if any) is required. This is built into every ongoing retainer engagement.</div>
          <div class="a-ref">Output: Quarterly NRI compliance bulletin · Ad hoc regulatory impact notes</div>
        </div>
      </div>
      <div class="a-step">
        <div class="a-num">06</div>
        <div>
          <div class="a-title">Representation &amp; Dispute Management</div>
          <div class="a-desc">NRI income tax scrutiny and FEMA show-cause notices are increasing. When a notice arrives, our documentation-first approach means we are ready — not reconstructing records under pressure. We prepare written submissions, appear before the Income Tax Department, and where required, handle FEMA compounding applications before the RBI or Enforcement Directorate.</div>
          <div class="a-ref">Output: Written reply / appeal brief · FEMA compounding application · Representation before AO/CIT(A)</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ WHY SSA ══ -->
<section class="sec">
  <div class="container">
    <div class="sec-label">Why SSA</div>
    <h2 class="sec-h">What Sets Our NRI Practice Apart</h2>
    <div class="sec-rule"></div>
    <div class="why-grid">
      <div class="why-item">
        <div class="why-num">FEMA + ITA</div>
        <div class="why-title">Integrated, Not Siloed</div>
        <div class="why-body">Most advisors handle FEMA or tax — not both. Our practice integrates FEMA compliance, income tax advisory, and corporate law into a single engagement team. You get one coordinated view, not three different advisors with three different answers.</div>
      </div>
      <div class="why-item">
        <div class="why-num">ICAI GN</div>
        <div class="why-title">Certificates You Can Stand Behind</div>
        <div class="why-body">Form 15CB certifications issued by SSA are based on genuine examination of all relevant documents, DTAA applicability, and FEMA compliance — consistent with ICAI's Guidance Note on Certificates. We do not issue certificates without completing the underlying examination.</div>
      </div>
      <div class="why-item">
        <div class="why-num">6×</div>
        <div class="why-title">Documentation-First Practice</div>
        <div class="why-body">Every position taken in an NRI engagement is documented at the time it is taken — not reconstructed later. When RBI or Income Tax scrutiny arrives, our clients are prepared. The 6× model ensures documentation quality is built into every step.</div>
      </div>
      <div class="why-item">
        <div class="why-num">ITA 25</div>
        <div class="why-title">ITA 2025 Ready</div>
        <div class="why-body">The Income Tax Act 2025 revises NRI residency provisions, RNOR conditions, and treaty benefit procedures effective AY 2026-27. Our team has completed a full mapping of the NRI-specific changes. All advisory from 2025 onwards is aligned to the new Act's structure.</div>
      </div>
      <div class="why-item">
        <div class="why-num">90+</div>
        <div class="why-title">Treaty Network Coverage</div>
        <div class="why-body">We maintain working knowledge of India's bilateral tax treaties with key NRI corridors — USA, UK, UAE, Canada, Australia, Singapore, Germany, and others. Treaty analysis is not generic; it is country-specific, updated for MLI modifications, and backed by written documentation.</div>
      </div>
      <div class="why-item">
        <div class="why-num">↔</div>
        <div class="why-title">Single Point of Contact in India</div>
        <div class="why-body">Managing Indian tax, banking, FEMA, and property matters from abroad requires a single, reliable contact in India who understands the full picture. Our NRI practice is structured to be that partner — responsive, proactive, and accountable.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ INSIGHTS / BLOG ══ -->
<section class="sec sec-mist">
  <div class="container">
    <div class="sec-label">Knowledge &amp; Insights</div>
    <h2 class="sec-h">Latest Articles for NRIs &amp; International Clients</h2>
    <div class="sec-rule"></div>
    <p class="sec-intro">Practical, compliance-focused articles on India's evolving cross-border tax and regulatory landscape — written for NRIs, foreign companies, and their advisors.</p>

    <div class="blog-grid">

      <div class="blog-card">
        <div class="blog-img">
          <div class="blog-img-inner">💹</div>
          <div class="blog-img-overlay"></div>
          <div class="blog-tag">NRI Taxation</div>
        </div>
        <div class="blog-body">
          <div class="blog-date">March 2025</div>
          <div class="blog-title">NRI Capital Gains on Indian Property: What Changed Under ITA 2025</div>
          <div class="blog-excerpt">The Income Tax Act 2025 restructures capital gains provisions affecting NRIs — from cost-of-acquisition rules to Section 54 reinvestment eligibility. We break down the material changes and their practical implications for property sales from AY 2026-27.</div>
          <div class="blog-read">Read Article</div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-img">
          <div class="blog-img-inner">🏢</div>
          <div class="blog-img-overlay"></div>
          <div class="blog-tag">India Entry</div>
        </div>
        <div class="blog-body">
          <div class="blog-date">February 2025</div>
          <div class="blog-title">Subsidiary vs Liaison Office vs Branch: Choosing the Right India Entry Vehicle</div>
          <div class="blog-excerpt">Each entity type carries distinct FEMA approval requirements, tax implications, PE risk profiles, and operational restrictions. This decision framework helps foreign companies evaluate the right structure before committing to registration — and the costly reversals that follow a wrong choice.</div>
          <div class="blog-read">Read Article</div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-img">
          <div class="blog-img-inner">🔄</div>
          <div class="blog-img-overlay"></div>
          <div class="blog-tag">FEMA · RBI</div>
        </div>
        <div class="blog-body">
          <div class="blog-date">January 2025</div>
          <div class="blog-title">Repatriating Property Sale Proceeds from India: A Step-by-Step FEMA Guide</div>
          <div class="blog-excerpt">The USD 1 million annual limit, the Form 15CA/CB requirement, the AD bank documentation package — repatriation of NRI property sale proceeds involves a precise sequence that many NRIs discover only when a bank rejects their request. Here is what needs to happen, in order.</div>
          <div class="blog-read">Read Article</div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-img">
          <div class="blog-img-inner">🤝</div>
          <div class="blog-img-overlay"></div>
          <div class="blog-tag">Transaction Advisory</div>
        </div>
        <div class="blog-body">
          <div class="blog-date">December 2024</div>
          <div class="blog-title">DTAA Benefits After MLI: Has Your Treaty Changed?</div>
          <div class="blog-excerpt">India's ratification of the OECD Multilateral Instrument (MLI) has modified the Principal Purpose Test applicability across several key DTAAs — including USA, UK, Singapore, and Mauritius. Treaty benefits that were available pre-MLI may now require additional substance documentation.</div>
          <div class="blog-read">Read Article</div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-img">
          <div class="blog-img-inner">🏘</div>
          <div class="blog-img-overlay"></div>
          <div class="blog-tag">NRI Property</div>
        </div>
        <div class="blog-body">
          <div class="blog-date">November 2024</div>
          <div class="blog-title">Rental Income from Indian Property: Complete Compliance Guide for NRIs</div>
          <div class="blog-excerpt">Rental income from India is taxable even if you have never filed an Indian return. TDS by the tenant, advance tax obligations, NRO account crediting, and ITR filing — this guide covers the complete compliance cycle for NRIs receiving rental income from Indian residential and commercial property.</div>
          <div class="blog-read">Read Article</div>
        </div>
      </div>

      <div class="blog-card">
        <div class="blog-img">
          <div class="blog-img-inner">⚠️</div>
          <div class="blog-img-overlay"></div>
          <div class="blog-tag">FEMA Compliance</div>
        </div>
        <div class="blog-body">
          <div class="blog-date">October 2024</div>
          <div class="blog-title">FEMA Compounding: How to Regularise Past NRI Non-Compliance Before It Escalates</div>
          <div class="blog-excerpt">Many NRIs hold Indian accounts, property, or investments acquired without the required FEMA filings or RBI approvals. The RBI's compounding mechanism allows regularisation — but only if approached proactively, with the right documentation and a correctly drafted compounding application.</div>
          <div class="blog-read">Read Article</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ FAQ ══ -->
<section class="sec">
  <div class="container">
    <div class="sec-label">Support</div>
    <h2 class="sec-h">Frequently Asked Questions</h2>
    <div class="sec-rule"></div>
    <div class="faq-wrap">

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(0)">Am I an NRI? How is NRI status determined under Indian tax law? <span class="faq-toggle" id="ft0">+</span></button>
        <div class="faq-a" id="fa0">Under Section 6 of the Income Tax Act, an individual is a Non-Resident (NRI) in a tax year if they are physically present in India for fewer than 182 days during that year, or if they do not meet the extended presence tests under the second limb of Sec 6(1). A separate category — RNOR (Resident but Not Ordinarily Resident) — applies if the person has been NRI for 9 of the past 10 years or has spent fewer than 729 days in India in the past 7 years. RNOR status provides partial NRI-like protection for foreign income. The ITA 2025 revises these conditions effective AY 2026-27 — clients should obtain an updated determination annually. Note that NRI status under FEMA is determined differently from NRI status under tax law, which can create conflicts that require specific structuring.<br><br><div class="faq-law">Law: Sec 6, ITA 1961 / ITA 2025 · FEMA 1999 Sec 2(w) — separate definitions apply</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(1)">What is Form 15CA and Form 15CB? Who is responsible for filing them? <span class="faq-toggle" id="ft1">+</span></button>
        <div class="faq-a" id="fa1">Form 15CA is an online declaration filed by a resident remitter before making a payment to a non-resident, confirming whether TDS has been deducted and whether the remittance is covered by a DTAA exemption. Form 15CB is a certificate issued by a Chartered Accountant confirming the nature of the remittance, applicable tax rate (treaty or domestic), and TDS deducted. The CA is legally responsible for the accuracy of Form 15CB and the underlying examination — it is not a routine issuance. ICAI's Guidance Note on Form 15CB sets out the examination procedure. Incorrect 15CB issuance can expose both the remitter and the CA to penalties. Certain remittances are exempt from 15CB (e.g., payments below ₹5 lakh that are not taxable in India), but the 15CA Part A/B/C categorisation must still be determined correctly.<br><br><div class="faq-law">Law: Rule 37BB, IT Rules 1962 · ICAI GN on Form 15CB (2016, Revised) · Sec 195, ITA 1961</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(2)">Can an NRI buy and sell property in India? What FEMA rules apply? <span class="faq-toggle" id="ft2">+</span></button>
        <div class="faq-a" id="fa2">NRIs and PIOs can freely purchase residential and commercial immovable property in India without RBI permission under FEMA Notification No. 5(R)/2016. However, agricultural land, plantation property, and farmhouses cannot be acquired without specific RBI permission. On sale, the sale proceeds (if invested from NRE/FCNR funds) may be repatriated, subject to the number of properties limit and FEMA repatriation conditions. Repatriation of proceeds from NRO-funded purchases is subject to the USD 1 million per year limit and requires Form 15CA/CB and tax clearance. Inherited property has additional FEMA conditions under Sec 6(5). Gifts of immovable property between non-residents and residents are permitted only in specific circumstances and require careful analysis.<br><br><div class="faq-law">Law: FEMA Notification No. 5(R)/2016 · RBI Master Direction — Foreign Investment in India · Sec 195, ITA</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(3)">How does a DTAA reduce tax on my Indian income? What documents are needed to claim treaty benefits? <span class="faq-toggle" id="ft3">+</span></button>
        <div class="faq-a" id="fa3">A DTAA allows an NRI to claim the more beneficial of Indian domestic tax rates or the reduced withholding rates specified in the treaty — for income types such as interest, dividends, royalties, capital gains, and Fee for Technical Services. To claim treaty benefits, the non-resident must obtain a Tax Residency Certificate (TRC) from their country of residence confirming tax residency there, and file Form 10F with the Indian Income Tax Department providing additional details. Since the OECD Multilateral Instrument (MLI) was adopted, many DTAAs now also require a Principal Purpose Test (PPT) analysis — treaty benefits may be denied if obtaining the benefit was the principal purpose of the arrangement. India's treaties with Mauritius, Singapore, UAE, Netherlands, and Luxembourg have been specifically modified by the MLI. A proper DTAA analysis must be updated annually and country-specifically.<br><br><div class="faq-law">Law: Sec 90/90A, ITA 1961 · MLI Synthesised Texts · CBDT Circular on TRC — Form 10F requirement</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(4)">Is it mandatory for NRIs to file an ITR in India? <span class="faq-toggle" id="ft4">+</span></button>
        <div class="faq-a" id="fa4">Yes, if an NRI has taxable income sourced from India above the basic exemption limit (currently ₹2.5 lakh under the old regime; ₹3 lakh under the new regime), they are required to file an ITR in India. This applies to rental income, capital gains, interest on NRO accounts (not NRE), dividends, and any business income with Indian source. Even if all taxes have been deducted at source (TDS), filing is mandatory if income exceeds the threshold — and in some cases even below that threshold to claim refunds of excess TDS. Schedule FA (foreign assets) and Schedule FSI (foreign source income) must also be disclosed by NRIs who become residents. Non-filing can attract interest, penalty, and in some cases prosecution under Sections 271F and 276CC of the ITA.<br><br><div class="faq-law">Law: Sec 139(1), ITA 1961 · Sec 271F · Schedule FA / FSI — ITR disclosure requirements</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(5)">What is the FLA return and who must file it? <span class="faq-toggle" id="ft5">+</span></button>
        <div class="faq-a" id="fa5">The Annual Return on Foreign Liabilities and Assets (FLA) must be filed with the Reserve Bank of India by July 15 each year by every Indian company or LLP that has received foreign investment (FDI) or has made overseas investments during the year, or has outstanding foreign liabilities or foreign assets. It captures the opening and closing balance of FDI received, FPI, and overseas direct investments. Failure to file attracts penalties under FEMA. The FLA is distinct from the FCGPR and FCTRS filings (which are transactional), and captures the annual stock position. Companies that have received FDI but subsequently transferred or redeemed all shares may still need to file for the transitional year.<br><br><div class="faq-law">Law: FEMA 1999 · RBI Master Direction — Foreign Investment Reporting; due July 15 each year</div></div>
      </div>

    </div>
  </div>
</section>

<!-- ══ CTA BAND ══ -->
<section class="cta-band">
  <div>
    <h2>Manage Your India Interests with Confidence</h2>
    <p>A single CA partner for your tax, FEMA, banking, and regulatory needs in India — structured, documented, and defensible at every step.</p>
  </div>
  <div class="cta-btns">
    <button class="btn-gold">Schedule a Call</button>
    <button class="btn-outline">Contact Our Team</button>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  <div>© 2025 <span>SSA Chartered Accountants</span>. All rights reserved.</div>
  <div>NRI practice governed by <span>ICAI Guidance Notes · FEMA 1999 · RBI Master Directions</span> · ICAI Firm Reg. No. [XXXXXX]</div>
</footer>

<script>
  /* ── Service accordion ── */
  function toggleSvc(btn) {
    var body = btn.nextElementSibling;
    var toggle = btn.querySelector('.svc-toggle');
    var isOpen = body.classList.toggle('open');
    toggle.textContent = isOpen ? '−' : '+';
    // close others
    document.querySelectorAll('.svc-body').forEach(function(b) {
      if (b !== body) {
        b.classList.remove('open');
        b.previousElementSibling.querySelector('.svc-toggle').textContent = '+';
      }
    });
  }

  /* ── FAQ accordion ── */
  function toggleFaq(i) {
    var ans    = document.getElementById('fa' + i);
    var toggle = document.getElementById('ft' + i);
    var isOpen = ans.classList.toggle('open');
    toggle.textContent = isOpen ? '−' : '+';
  }

  /* ── Open first service panel by default ── */
  document.addEventListener('DOMContentLoaded', function() {
    var firstHeader = document.querySelector('.svc-header');
    if (firstHeader) toggleSvc(firstHeader);
  });
</script>
</body>
</html>