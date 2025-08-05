import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Skills, Projects } from "./SkillsProjects";

<Route path="/skills" element={<Skills />} />
<Route path="/projects" element={<Projects />} />

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const transition = { duration: 0.5, ease: "easeInOut" };

const AnimatedPage = ({ children }) => (
  <motion.section
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={transition}
    style={{ padding: "4rem 1rem", minHeight: "100vh", textAlign: "center" }}
  >
    {children}
  </motion.section>
);

const Home = () => (
  <AnimatedPage>
    <img
      src="/profile.jpg"
      alt="Avinash Agarwal"
      style={{
        width: "150px",
        height: "150px",
        objectFit: "cover",
        borderRadius: "50%",
        border: "2px solid white",
        marginBottom: "1rem"
      }}
    />
    <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Avinash Agarwal</h1>
    <p style={{ fontWeight: "bold", color: "lightgray" }}>Product Implemetation Consultant @ HighRadius</p>
    <p style={{ maxWidth: "700px", margin: "1.5rem auto", lineHeight: 1.6, fontSize: "1rem", color: "#ccc" }}>
      As a Consultant at HighRadius, I help transform finance and accounting teams from traditional cost centers into strategic value drivers. Working with the world’s first autonomous finance platform, I deliver AI-powered solutions across the Order-to-Cash (O2C) cycle—spanning Collections, Electronic Invoicing & Payments, and AR optimization.
      <br /><br />
      By aligning cutting-edge SaaS with business outcomes, I enable organizations to unlock working capital, modernize operations, and drive measurable impact. Passionate about digital transformation, I thrive in fast-paced, client-facing environments—where business acumen meets problem-solving.
    </p>
  </AnimatedPage>
);


const Skills = () => (
  <motion.section
    style={sectionStyle}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 style={titleStyle}>Skills</h2>

    <div style={{ maxWidth: 800, margin: "auto", textAlign: "left", lineHeight: 2 }}>
      <h3>💻 Technical Skills</h3>
      <ul>
        <li><strong>Languages:</strong> SQL, Python, C, C++</li>
        <li><strong>Tools:</strong> Power BI, Excel, PowerPoint, SQLyog</li>
        <li><strong>Platforms:</strong> VS Code, JIRA, Salesforce</li>
        <li><strong>ERP Systems:</strong> SAP S4 HANA, Oracle, Workday</li>
      </ul>

      <h3>🤝 Professional Skills</h3>
      <ul>
        <li>Stakeholder Management</li>
        <li>Client Communication & Rapport Building</li>
        <li>Cross-functional Collaboration</li>
        <li>Solution Design & Deployment</li>
        <li>Data Analysis & Migration</li>
        <li>System Configuration & Integration</li>
        <li>Agile Project Execution</li>
      </ul>
    </div>
  </motion.section>
);


const Projects = () => (
  <motion.section
    style={sectionStyle}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 style={titleStyle}>Projects</h2>

    <div style={{ maxWidth: 800, margin: "auto", textAlign: "left", lineHeight: 1.8 }}>
      <div>
        <h3>🏢 HighRadius Receivables Cloud Implementation</h3>
        <p><strong>Role:</strong> Lead Consultant</p>
        <p>
          Spearheaded global end-to-end implementations of HighRadius Receivables Cloud,
          managing client workshops, UAT, and stakeholder training. Delivered scalable solutions
          that improved collection efficiency by up to 84%.
        </p>
      </div>

      <br />

      <div>
        <h3>🔁 ERP Data Integration & Analysis</h3>
        <p><strong>Role:</strong> Data Analyst & Migration Lead</p>
        <p>
          Led integration of ERP systems (SAP S4 HANA, Oracle, Workday) into HighRadius.
          Ensured smooth migration, validated data accuracy, and aligned back-end processes
          with automation logic.
        </p>
      </div>

      <br />

      <div>
        <h3>🩺 Health Monitoring System</h3>
        <p><strong>Role:</strong> Final Year Project Lead</p>
        <p>
          Built a real-time IoT health monitoring system to track temperature, pulse,
          and BP with emergency alerts and GPS tracking via BLYNK app.
        </p>
      </div>
    </div>
  </motion.section>
);
const Contact = () => (
  <AnimatedPage>
    <h2>Contact</h2>
    <p>LinkedIn: <a href="https://linkedin.com/in/avinash1agarwal" target="_blank" rel="noreferrer" style={{ color: "cyan" }}>Avinash Agarwal</a></p>
  </AnimatedPage>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <nav style={{ position: "fixed", top: 0, width: "100%", background: "#111", padding: "1rem", display: "flex", justifyContent: "center", gap: "2rem", zIndex: 10 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/skills" style={{ color: "white", textDecoration: "none" }}>Skills</Link>
        <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </nav>
      <div style={{ paddingTop: "5rem" }}>
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
