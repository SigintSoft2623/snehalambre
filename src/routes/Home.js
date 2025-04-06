import React from "react";
import SnehalMain from "../assects/SnehalMain.jpeg";
import snehalBosch from "../assects/SnaehalBosch.jpeg";
import snehalActia from "../assects/Snehal3.jpeg";
import snehalThales from "../assects/SnehalT.jpg";
import snehalPNC from "../assects/PNC.JPG";
import snehalAccutron from "../assects/Accutron.jpg";

function Home() {
  return (
    <div className="home-container">
      {/* First Page - Fixed Background Text */}
      <div className="background-text">
        <span className="left-text">Snehal</span>
        <span className="right-text">Ambre</span>
      </div>

      {/* Centered Image on First Page */}
      <div className="center-image-container">
        <div className="image-box">
          <img src={SnehalMain} alt="SnehalMain" />
        </div>
      </div>
      <div className="centered-description">
        I am a freelancer Validation Program Manager and Artist, ensuring
        compliance and precision while also creating unique and innovative
        designs.
      </div>
      {/* Scrollable Content - Second Page */}
      <div className="scroll-section first">
        <div className="text-box">
          <h2>BOSCH</h2>
          <ul>
            <li>
              Coordinate Test and Validation team activities with the product
              development team.
            </li>
            <li>
              Negotiate testing requirements with the customer to ensure
              complete and accurate test coverage.
            </li>
            <li>
              Work directly with the Test Equipment Development group to deliver
              Design Verification and Process Validation test systems that meet
              all customer requirements.
            </li>
            <li>
              Develop and drive program schedules within the group’s resources
              and ensure on-time delivery of work products.
            </li>
            <li>
              Provide validation cost estimates with input from supporting
              groups and manage to those cost targets.
            </li>
            <li>
              Track validation costs and proactively manage efforts to minimize
              variances to the planned cost.
            </li>
            <li>
              Collaborate with other validation engineers to schedule internal
              and external testing resources while maintaining a high level of
              internal utilization.
            </li>
            <li>
              Create well-defined test instructions and detailed test reports
              for all assigned validations.
            </li>
            <li>Maintain open issues lists.</li>
          </ul>
        </div>
        <div className="image-box">
          <img src={snehalBosch} alt="snehalBosch" />
        </div>
      </div>

      {/* Third Section - Snehal Thales */}
      <div className="scroll-section">
        <div className="text-box">
          <h2>Actia Electronics</h2>
          <ul>
            <li>
              Work within the Engineering team to lead new projects to the
              production and customers product approval.
            </li>
            <li>
              Support launch of new product and supplier localization for
              various activities, resourcing new tooling from prototype
              development through mass production.
            </li>
            <li>
              Arrange and ensure training of the engineering, technicians and
              operators of new product occurs prior to production launch.
            </li>
            <li>
              Develop printed circuit board assembly and electronic components
              part specifications.
            </li>
            <li>
              New products cost management and tracking to reach project
              targets.
            </li>
          </ul>
        </div>
        <div className="image-box">
          <img src={snehalActia} alt="snehalActia" />
        </div>
      </div>
      <div className="scroll-section">
        <div className="text-box">
          <h2>Thales India Pvt. Ltd.</h2>
          <ul>
            <li>
              Executed projects understanding the business fundamentals and
              legal principles as the aerospace projects must abide by federal
              regulations and processes.
            </li>
            <li>
              Took part in contract /Price negotiation along with purchasing
              team. Secured supply chain.
            </li>
            <li>
              Chose appropriate supplier for work packages and got best
              technical solutions from them, prepare work breakdown structure
              (WBS) and Scope of Work (SOW) to determine various elements.
            </li>
            <li>
              Managed the procurement of all requirements for allocated
              Supplier(s) in full compliance to Thales processes and maintained
              an ethical approach to tasks and relationships in accordance with
              relevant Thales policies.
            </li>
            <li>
              Provided consultation, preparation for NPI process as well as
              production phase. Planned, scheduled the kick- offs, reviews with
              all the key stakeholders from technical perspective.
            </li>
            <li>
              Facilitated conference calls and face-to-face meetings with
              suppliers to gain more information and better understand the
              issues and drive continuous improvements.
            </li>

            <li>
              Played as an interface to –Purchase Manager, Quality Manager, and
              Business Units all across the world for electronics assembly
              manufacturing for three allocated suppliers.
            </li>
            <li>
              Ensured the correct application of the Thales Procurement
              standards, practices and led regular risks analysis with the
              supplier, including load versus capacity assessment, new products
              industrialization risks and plan the mitigation proposal, review
              supplier PPAP’s and 8D’s.
            </li>
          </ul>
        </div>
        <div className="image-box">
          <img src={snehalThales} alt="snehalThales" />
        </div>
      </div>
      <div className="scroll-section">
        <div className="text-box">
          <h2>PNC Inc. </h2>
          <ul>
            <li>
              Prepared work instructions (using NPI i.e. Factory Logix),
              Standard operating procedures & checklists for PCB assembling for
              operators in production.
            </li>
            <li>
               Identified, recommended & implemented process improvement plans
              for PCBAs.
            </li>
            <li>
              Offered competitive quotes analyzing the requirements of customer.
            </li>
            <li>
              Established new business by negotiating contracts and packages,
              maintain accurate record and review sales performance.
            </li>
            <li>
              NProactively helped to prevent problems in quality, scheduling,
              processes and material availability using Manex. Created leaner
              operations, manage complex global supply chains, and streamline
              the business processes to deliver products to market faster.
            </li>
          </ul>
        </div>
        <div className="image-box">
          <img src={snehalPNC} alt="snehalPNC" />
        </div>
      </div>
      <div className="scroll-section">
        <div className="text-box">
          <h2>Accutron Inc.</h2>
          <ul>
            <li>
              Prepared bill of material, order stencils, AOI programming,
              approve SPR, implement ECN throughout the system.
            </li>
            <li>Co-ordinate engineering change requests, led rework jobs.</li>
            <li>
              Arrange and ensure training of the engineering, technicians and
              operators of new product occurs prior to production launch.
            </li>
            <li>
              Prepared complete documentation for PCB assembling from Kitting
              till Shipping.
            </li>
            <li>
              Managed complex manufacturing environment, regulatory compliance
              and quality using EVO-ERP.
            </li>
            <li>
              Received and inspected materials ensuring conformance to the
              manufacturer’s specifications.
            </li>
          </ul>
        </div>
        <div className="image-box">
          <img src={snehalAccutron} alt="snehalAccutron" />
        </div>
      </div>
    </div>
  );
}

export default Home;
