import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="home-container">
      <Container>
        <div className="background-text">
          <span className="left-text">Snehal</span>
          <span className="right-text">Ambre</span>
        </div>
        <div className="singleCol text-center">
          <div className="social-media-icons-white">
            <a
              href="https://facebook.com/share/1FRLiStDSP"
              target="_blank"
              rel="snehal noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://instagram.com/ambreartworks"
              target="_blank"
              rel="snehal noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com/in/ambresnehals1"
              target="_blank"
              rel="snehal noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <p
            className="text-box"
            style={{
              width: "150%",
              maxWidth: "1200px",
              margin: "0 auto",
              marginBottom: "30px",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <h2>Education</h2>
            <ul>
            <li>
                <span style={{ float: "left" }}>
                  Master's in Engineering Management, Cumberland University, TN, USA
                </span>
                <span style={{ float: "right" }}>Aug 2026</span>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  PgDip. in Engineering Management, Arden University, Berlin,
                  GERMANY
                </span>
                <span style={{ float: "right" }}>Nov 2021</span>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  B.E in Electronics & Tele-communication Engineering, Bharati
                  Vidyapeeth, INDIA
                </span>
                <span style={{ float: "right" }}>July 2012</span>
              </li>
            </ul>
          </p>
          <p
            className="text-box"
            style={{
              width: "150%",
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <h2>Skills</h2>
            <ul>
              <li>
                <span style={{ float: "left" }}>
                  Lean Six Sigma, Gc-Power Place, Gc-Prevue, JQS (Bacon
                  Software), Checkpoint & CircuitCam (Aegis software),
                </span>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Microsoft Office, self-motivated, strong commitments to
                  quality on time, attention to details with accuracy.
                </span>
              </li>
            </ul>
          </p>
          <p
            className="text-box"
            style={{
              width: "150%",
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "30px",
            }}
          >
            <h2>Engineering Services</h2>
            <ul>
              <li>
                <span style={{ float: "left" }}>
                  Validation Planning & Strategy:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Develop tailored validation plans and timelines. Conduct risk
                  assessments and management. Regulatory Compliance Management.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Regulatory Compliance Management:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Ensure adherence to FDA, GMP, ISO, and other standards.
                  Prepare audit and inspection documentation.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Vendor & Stakeholder Coordination:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Manage vendor relationships and cross-functional teams.
                  Provide training on validation processes.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Project Management & Oversight:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Lead teams to meet deadlines and budget. Provide project
                  progress reports.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Risk Management & Mitigation:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  dentify and mitigate risks in validation projects. Develop
                  CAPA plans for issues and deviations.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Data Analysis & Documentation:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Analyze validation test data for accuracy. Prepare compliance
                  documentation and reports
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Validation Training & Workshops:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Offer tailored training on validation procedures. Conduct
                  workshops on compliance and trends.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Change Control & Lifecycle Management:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Oversee change control processes. Manage validation from
                  initiation to post-support.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Troubleshooting & Remediation:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Address validation issues and failures. Conduct root cause
                  analysis and corrective actions.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Validation of Software & Automation:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Validate computerized systems and software. Ensure compliance
                  with 21 CFR Part 11 and GxP.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Audit & Inspection Readiness:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Prepare for audits and regulatory inspections. Support
                  corrective actions post-audit.
                </div>
              </li>
            </ul>
          </p>
          <p
            className="text-box"
            style={{
              width: "150%",
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "30px",
            }}
          >
            <h2>Arts and Crafs Services</h2>
            <ul>
              <li>
                <span style={{ float: "left" }}>
                  Custom Landscape & Pet Portraits:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Personalized acrylic paintings of landscapes or pets,
                  capturing their beauty and essence.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  Private Art Consultations and Art Prints:
                </span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Personalized sessions to bring artistic visions to
                  life,High-quality prints of landscapes.
                </div>
              </li>
              <li>
                <span style={{ float: "left" }}>Commissioned Artwork:</span>
                <br />
                <div style={{ paddingLeft: "1em", textAlign: "left" }}>
                  Bespoke paintings tailored to clients’ themes, colors, and
                  sizes and Unique nature-inspired landscapes and pet portraits,
                  from realistic to abstract.
                </div>
              </li>
            </ul>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
