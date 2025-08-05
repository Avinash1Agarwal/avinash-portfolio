// src/Certifications.js
import React from "react";
import { motion } from "framer-motion";

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

const certifications = [
  {
    title: "Computing using Python",
    issuer: "NPTEL",
    date: "Jan–Apr 2022",
    description: "Learned foundational and intermediate Python including data structures, loops, and file handling."
  },
  {
    title: "Leadership and Team Effectiveness",
    issuer: "NPTEL",
    date: "Jan–Apr 2022",
    description: "Covered team building, leadership frameworks, and conflict management through case studies."
  },
  {
    title: "Digital Marketing",
    issuer: "Udemy",
    date: "Feb 2020",
    description: "Learned SEO, Google Ads, content creation and campaign optimization with practical projects."
  },
  {
    title: "Marketing Analyst & Web Developer",
    issuer: "Teckat Services Pvt. Ltd.",
    date: "Dec 2020",
    description: "Internship experience involving live web development projects and digital marketing analytics."
  },
  {
    title: "Web Development using PHP & MySQL",
    issuer: "GIETU",
    date: "Jul 2019",
    description: "Built dynamic websites using PHP and MySQL in a hands-on university-led training program."
  },
  {
    title: "Programming with Python",
    issuer: "Internshala",
    date: "Dec 2018 – Mar 2019",
    description: "Introduced to Python programming covering loops, functions, and OOP fundamentals."
  }
];

const Certifications = () => (
  <AnimatedPage>
    <h2>Certifications</h2>
    <div style={{ maxWidth: "800px", margin: "2rem auto", textAlign: "left", color: "#ccc" }}>
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          style={{ marginBottom: "2rem", padding: "1rem", borderLeft: "4px solid #0af" }}
        >
          <h3 style={{ marginBottom: "0.2rem", color: "white" }}>{cert.title}</h3>
          <p style={{ margin: 0, fontStyle: "italic" }}>{cert.issuer} | {cert.date}</p>
          <p style={{ marginTop: "0.5rem" }}>{cert.description}</p>
        </motion.div>
      ))}
    </div>
  </AnimatedPage>
);

export default Certifications;

