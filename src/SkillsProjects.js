import React from "react";
import { motion } from "framer-motion";

const sectionStyle = {
  padding: "4rem 1rem",
  textAlign: "center",
  minHeight: "100vh",
};

const titleStyle = {
  fontSize: "2.5rem",
  marginBottom: "2rem",
};

export const Skills = () => (
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

export const Projects = () => (
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
