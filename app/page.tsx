 "use client";

import { useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Code2, Database,
  BrainCircuit, Terminal, ExternalLink, Menu, X, Sparkles, ChevronDown
} from "lucide-react";

const projects = [
  {
    title: "Python for AI Engineering",
    category: "Learning System",
    description: "A structured, hands-on learning system covering Python, data work, mathematics, ML foundations, engineering practices and interview preparation.",
    stack: ["Python", "NumPy", "Pandas", "Git"],
    href: "https://github.com/dhruviraval13110/python-for-ai-engineering",
  },
  {
    title: "AI Engineering Projects",
    category: "Project Portfolio",
    description: "A project-first repository designed to turn AI/ML concepts into reproducible engineering workflows, experiments and portfolio projects.",
    stack: ["Python", "ML", "Data", "Testing"],
    href: "https://github.com/dhruviraval13110/ai-engineering-projects",
  },
  {
    title: "Hand Gesture Interaction",
    category: "Computer Vision",
    description: "An interactive browser experiment using hand-gesture recognition to create visual interactions without relying on traditional mouse input.",
    stack: ["Python", "Computer Vision", "MediaPipe", "JavaScript"],
    href: "#",
  },
];

const skills = [
  { icon: Code2, title: "Python", items: ["Programming fundamentals", "OOP", "Functions & modules", "File handling", "Automation"] },
  { icon: Database, title: "Data", items: ["NumPy", "Pandas", "Data cleaning", "Exploratory analysis", "Visualization"] },
  { icon: BrainCircuit, title: "AI / ML", items: ["ML foundations", "Model evaluation", "Computer vision", "AI project workflows", "Learning in public"] },
  { icon: Terminal, title: "Engineering", items: ["Git & GitHub", "Testing", "CLI workflows", "Project structure", "Documentation"] },
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("home")}>
            <span className="brand-mark">DR</span>
            <span>Dhruvi<span className="accent">.</span></span>
          </button>
          <div className={`nav-links ${menu ? "open" : ""}`}>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("journey")}>Journey</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
          <div className="nav-actions">
            <a className="github-mini" href="https://github.com/dhruviraval13110" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR LEARNING & PROJECTS</div>
            <h1>Building my path from <span>Python</span> to AI.</h1>
            <p className="hero-lead">
              I&apos;m <strong>Dhruvi Raval</strong>, an AI/ML diploma student focused on learning by building.
              I turn concepts into code, projects, experiments and documented engineering work.
            </p>
            <div className="hero-buttons">
              <button className="primary" onClick={() => scrollTo("projects")}>Explore my work <ArrowUpRight size={18}/></button>
              <a className="secondary" href="https://github.com/dhruviraval13110" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            </div>
            <div className="hero-stats">
              <div><b>02</b><span>Year<br/>AIML Diploma</span></div>
              <div><b>03+</b><span>Core<br/>Data Skills</span></div>
              <div><b>∞</b><span>Things<br/>to Build</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="code-top"><span></span><span></span><span></span><small>dhruvi.py</small></div>
              <pre><code><span className="muted">01</span> <span className="kw">class</span> <span className="name">AIEngineer</span>:
{`\n`}<span className="muted">02</span>     <span className="kw">def</span> <span className="fn">__init__</span>(self):
{`\n`}<span className="muted">03</span>         self.name = <span className="str">&quot;Dhruvi&quot;</span>
{`\n`}<span className="muted">04</span>         self.focus = [
{`\n`}<span className="muted">05</span>             <span className="str">&quot;Python&quot;</span>,
{`\n`}<span className="muted">06</span>             <span className="str">&quot;Data&quot;</span>,
{`\n`}<span className="muted">07</span>             <span className="str">&quot;AI / ML&quot;</span>
{`\n`}<span className="muted">08</span>         ]
{`\n`}<span className="muted">09</span>
{`\n`}<span className="muted">10</span>     <span className="kw">def</span> <span className="fn">build</span>(self):
{`\n`}<span className="muted">11</span>         <span className="kw">return</span> <span className="str">&quot;learn → build → ship&quot;</span></code></pre>
              <div className="terminal-line"><span>●</span> learning_mode: <b>active</b></div>
            </div>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollTo("about")}><ChevronDown size={20}/><span>scroll to explore</span></button>
      </section>

      <section id="about" className="section about">
        <div className="section-label">01 — ABOUT</div>
        <div className="two-col">
          <div>
            <h2>Curious by default.<br/><em>Builder by choice.</em></h2>
          </div>
          <div className="about-copy">
            <p>I&apos;m currently pursuing a Diploma in Artificial Intelligence & Machine Learning at Gandhinagar University. My current foundation is in Python, NumPy and Pandas, and I&apos;m expanding that foundation toward machine learning and real-world AI engineering.</p>
            <p>I care about understanding <strong>why</strong> code works, not just making it run. That means clean repository structure, reproducible experiments, tests, documentation and projects that demonstrate what I&apos;ve actually learned.</p>
            <div className="principles">
              <span>01 / Learn deeply</span><span>02 / Build publicly</span><span>03 / Document clearly</span><span>04 / Keep improving</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section dark-section">
        <div className="section-label">02 — TOOLKIT</div>
        <div className="section-heading"><h2>What I&apos;m <span>working with.</span></h2><p>A growing technical toolkit built around practical AI/ML engineering.</p></div>
        <div className="skill-grid">
          {skills.map(({ icon: Icon, title, items }) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon"><Icon size={22}/></div>
              <h3>{title}</h3>
              <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-label">03 — SELECTED WORK</div>
        <div className="section-heading"><h2>Things I&apos;ve <span>built.</span></h2><p>Projects are where learning becomes evidence.</p></div>
        <div className="project-list">
          {projects.map((project, i) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{i + 1}</div>
              <div className="project-main">
                <div className="project-meta">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a href={project.href} target={project.href !== "#" ? "_blank" : undefined} rel="noreferrer" className="project-link"><ExternalLink size={20}/></a>
            </article>
          ))}
        </div>
        <div className="center"><a className="outline-btn" href="https://github.com/dhruviraval13110?tab=repositories" target="_blank" rel="noreferrer">View all repositories <ArrowUpRight size={17}/></a></div>
      </section>

      <section id="journey" className="section journey">
        <div className="section-label">04 — JOURNEY</div>
        <div className="two-col">
          <div><h2>From fundamentals<br/>to <em>AI engineering.</em></h2></div>
          <div className="timeline">
            <div className="timeline-item"><span>01</span><div><small>FOUNDATION</small><h3>Python & Programming</h3><p>Building strong fundamentals in syntax, logic, functions, OOP, data structures and practical coding.</p></div></div>
            <div className="timeline-item"><span>02</span><div><small>DATA</small><h3>NumPy & Pandas</h3><p>Learning how to load, clean, transform, inspect and reason about real datasets.</p></div></div>
            <div className="timeline-item"><span>03</span><div><small>NEXT</small><h3>Machine Learning</h3><p>Moving into supervised learning, evaluation, feature engineering and model-building workflows.</p></div></div>
            <div className="timeline-item"><span>04</span><div><small>LONG TERM</small><h3>AI Engineering</h3><p>Combining software engineering, ML, deployment and product thinking to build useful systems.</p></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-box">
          <div className="eyebrow"><Sparkles size={15}/> LET&apos;S CONNECT</div>
          <h2>Have an idea?<br/><span>Let&apos;s build.</span></h2>
          <p>I&apos;m always interested in learning opportunities, technical collaborations, projects and conversations around AI/ML.</p>
          <div className="contact-actions">
            <a className="primary" href="mailto:dhruvi@example.com"><Mail size={18}/> Email me</a>
            <a className="secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
            <a className="secondary" href="https://github.com/dhruviraval13110" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
          </div>
          <small className="replace-note">Replace <code>dhruvi@example.com</code> with your real contact email before publishing.</small>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Dhruvi Raval</span>
        <span>Built with Next.js · Designed for learning in public.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
