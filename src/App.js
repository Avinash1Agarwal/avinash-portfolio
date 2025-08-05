import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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


const Skills = () => {
  const skills = ["SQL", "Python", "Power BI", "JIRA", "Salesforce", "ERP"];
  return (
    <AnimatedPage>
      <h2>Skills</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, i) => (
          <motion.li key={i} whileHover={{ scale: 1.1 }} style={{ margin: "0.5rem 0" }}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </AnimatedPage>
  );
};

const Projects = () => (
  <AnimatedPage>
    <h2>Projects</h2>
    <p>HighRadius Receivables Cloud Implementation</p>
    <p>ERP Data Analysis & Migration</p>
    <p>Health Monitoring System</p>
  </AnimatedPage>
);

const Contact = () => (
  <AnimatedPage>
    <h2>Contact</h2>
    <p>Email: <a href="mailto:avinash12261999@gmail.com" style={{ color: "cyan" }}>avinash12261999@gmail.com</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/avinash1agarwal" target="_blank" rel="noreferrer" style={{ color: "cyan" }}>@avinash1agarwal</a></p>
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
