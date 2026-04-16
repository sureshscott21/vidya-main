import React, { useState } from "react";

import "./index.css";

// ─── DATA ───────────────────────────────────────────────
const CHAPTERS = [
  { name: "Cell: The Unit of Life", subject: "NCERT Biology XI", pct: 78, color: "#1e8449", bg: "#d5f5e3", icon: "🧬" },
  { name: "Thermodynamics", subject: "NCERT Physics XI", pct: 55, color: "#1a5276", bg: "#d6eaf8", icon: "⚛️" },
  { name: "Chemical Bonding", subject: "NCERT Chemistry XI", pct: 90, color: "#7d3c98", bg: "#e8daef", icon: "🧪" },
  { name: "Organic Chemistry", subject: "NCERT Chemistry XII", pct: 42, color: "#c0392b", bg: "#fadbd8", icon: "🔬" },
];

const SCHEDULE = [
  { time: "9 AM", name: "NEET Mock Test – Physics", detail: "90 min · Full Syllabus", color: "#1a5276" },
  { time: "12 PM", name: "NCERT Biology – Genetics", detail: "Chapter 5 & 6 Revision", color: "#1e8449" },
  { time: "3 PM", name: "JEET Practice Paper #7", detail: "Chemistry · 60 min", color: "#c0392b" },
  { time: "6 PM", name: "Doubt Clearing Session", detail: "Physics Mechanics", color: "#c9922a" },
];

const QUICK = [
  { icon: "📝", title: "Mock Tests", sub: "250+ tests available", color: "#d6eaf8" },
  { icon: "📊", title: "Analytics", sub: "Track your progress", color: "#d5f5e3" },
  { icon: "🗂️", title: "Flashcards", sub: "Smart revision", color: "#e8daef" },
  { icon: "🎯", title: "Study Planner", sub: "Custom schedule", color: "#fdebd0" },
];

export default function Home({ userName, onLogout }) {
  const [activeNav, setActiveNav] = useState("Home");
  const [modal, setModal] = useState(null);

  const navItems = ["Home", "VIDYA", "NEET", "JEET", "Tests", "Analytics"];

  const FEATURES = [
    {
      cls: "ncert",
      icon: "📖",
      tag: "CBSE Curriculum",
      title: "NCERT Books",
      desc: "Complete Class XI & XII textbooks with chapter-wise notes, key concepts, and exercises for Physics, Chemistry, Biology & Mathematics.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English"],
      meta: "29 books · 400+ chapters",
      action: "Explore Books",
      tagCls: "tag-blue",
      detail: {
        h: "NCERT Books Library",
        p: "Access the full collection of NCERT textbooks for Class 11 and 12. All subjects are available with highlighted important topics for competitive exams.",
        items: ["Class XI Physics – Units & Measurement to Waves", "Class XII Biology – Reproduction to Ecology", "Class XI Chemistry – Mole Concept to Organic", "Class XII Mathematics – Relations to Probability"]
      }
    },
    {
      cls: "neet",
      icon: "🏥",
      tag: "Medical Entrance",
      title: "NEET Syllabus",
      desc: "Structured topic-wise syllabus as per NTA guidelines. Includes weightage analysis, important chapters, and previous year question trends.",
      subjects: ["Physics", "Chemistry", "Botany", "Zoology"],
      meta: "97 chapters · 1800+ topics",
      action: "View Syllabus",
      tagCls: "tag-green",
      detail: {
        h: "NEET 2025 Syllabus",
        p: "Complete NTA-prescribed syllabus for NEET UG 2025. Topic-wise weightage from previous 10 years helps you prioritize effectively.",
        items: ["Physics: Mechanics 30% | Modern Physics 20%", "Chemistry: Organic 40% | Physical 35%", "Biology: Genetics & Evolution – High Weightage", "Ecology & Environment – Easy 5-mark section"]
      }
    },
    {
      cls: "jeet",
      icon: "⚗️",
      tag: "Engineering Entrance",
      title: "JEET Books",
      desc: "Curated reference books and study material recommended for JEE preparation — concept builders, problem sets, and formula sheets.",
      subjects: ["H.C. Verma", "R.D. Sharma", "O.P. Tandon", "Cengage"],
      meta: "60+ books · 2000+ problems",
      action: "Browse Material",
      tagCls: "tag-red",
      detail: {
        h: "JEET Reference Library",
        p: "Handpicked books by toppers and educators for JEE Main & Advanced preparation.",
        items: ["H.C. Verma Vol I & II – Physics Concepts", "O.P. Tandon – Physical & Organic Chemistry", "R.D. Sharma – Mathematics for JEE", "Previous Year Papers 2014-2024 – Solved"]
      }
    }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="nav-logo-icon">📚</div>
          EduPortal
        </div>
        <div className="nav-links">
          {navItems.map(n => (
            <button key={n} className={`nav-link ${activeNav === n ? "active" : ""}`} onClick={() => setActiveNav(n)}>{n}</button>
          ))}
        </div>
        <div className="nav-right">
          <div className="nav-search">🔍 Search topics…</div>
          <div className="avatar">{userName[0].toUpperCase()}</div>
          <button className="logout-btn" onClick={onLogout}>Sign Out</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-tag">✨ 2025–26 Session Active</div>
            <h1>Hello, <span>{userName}!</span><br />Ready to Study?</h1>
            <p>Your personalised dashboard is loaded. Continue where you left off or explore new chapters today.</p>
            <div className="hero-btns">
              <button className="hero-btn solid" onClick={() => setModal(FEATURES[0].detail)}>Continue Learning</button>
              <button className="hero-btn outline" onClick={() => setModal(FEATURES[1].detail)}>Take a Mock Test</button>
            </div>
          </div>
          <div className="hero-stats">
            {[["247", "Chapters Done"], ["89%", "Avg. Score"], ["18", "Day Streak"]].map(([n, l]) => (
              <div key={l} className="stat-card"><div className="num">{n}</div><div className="lbl">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <main className="main">
        {/* Feature Cards */}
        <div className="section-header">
          <h2 className="section-title">Study <span>Resources</span></h2>
          <button className="see-all">View All →</button>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <div key={f.cls} className={`feature-card ${f.cls} fade-up delay-${i + 1}`}>
              <div className="feature-card-header">
                <span className="feature-card-icon">{f.icon}</span>
                <div className={`feature-card-tag`}>{f.tag}</div>
                <div className="feature-card-title">{f.title}</div>
                <p className="feature-card-desc">{f.desc}</p>
              </div>
              <div className="feature-card-body">
                <div className="feature-card-subjects">
                  {f.subjects.map(s => <span key={s} className="subject-chip">{s}</span>)}
                </div>
                <div className="feature-card-footer">
                  <span className="card-meta">{f.meta}</span>
                  <button className="card-action" onClick={() => setModal(f.detail)}>{f.action}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access */}
        <div className="section-header">
          <h2 className="section-title">Quick <span>Access</span></h2>
        </div>

        <div className="quick-grid">
          {QUICK.map(q => (
            <div key={q.title} className="quick-card fade-up">
              <div className="quick-icon">{q.icon}</div>
              <div>
                <div className="quick-title">{q.title}</div>
                <div className="quick-sub">{q.sub}</div>
              </div>
              <div className="quick-arrow">›</div>
            </div>
          ))}
        </div>

        {/* Progress + Schedule */}
        <div className="section-header">
          <h2 className="section-title">Your <span>Progress</span></h2>
          <button className="see-all">Full Report →</button>
        </div>

        <div className="progress-section">
          <div className="progress-card">
            <h3>Chapter Progress</h3>
            {CHAPTERS.map(c => (
              <div key={c.name} className="chapter-item">
                <div className="chapter-icon" style={{ background: c.bg }}>{c.icon}</div>
                <div className="chapter-info">
                  <div className="chapter-name">{c.name}</div>
                  <div className="chapter-sub">{c.subject}</div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${c.pct}%`, background: c.color }} />
                    </div>
                    <div className="progress-pct" style={{ color: c.color }}>{c.pct}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="progress-card">
            <h3>Today's Schedule</h3>
            <div className="schedule-list">
              {SCHEDULE.map(s => (
                <div key={s.time} className="schedule-item">
                  <div className="schedule-dot" style={{ background: s.color }} />
                  <div style={{ flex: 1 }}>
                    <div className="schedule-time">{s.time}</div>
                    <div className="schedule-name">{s.name}</div>
                    <div className="schedule-detail">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ position: "relative" }} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)}>✕</button>
            <h3>{modal.h}</h3>
            <p>{modal.p}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {modal.items.map(item => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 14px", background: "var(--cream)", borderRadius: 10, fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>
                  <span>📌</span>{item}
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ marginTop: 24 }} onClick={() => setModal(null)}>Start Studying →</button>
          </div>
        </div>
      )}
    </div>
  );
}