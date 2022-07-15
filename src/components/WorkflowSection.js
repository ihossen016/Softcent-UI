import React from "react";
import "./WorkflowSection.css";

const WorkflowSection = () => {
  return (
    <section className="workflow">
      <div className="sectionTitle">
        <h2>Workflow</h2>
        <img className="underline" src="../../images/underline 3.png" alt="" />
      </div>

      <div className="flow">
        <div className="acc">
          <ol>
            <li>Defining Goal</li>
            <li>Product Design</li>
            <li>Development</li>
            <li>Testing</li>
            <li>Product Release</li>
            <li>Maintenance Support</li>
          </ol>
        </div>
        <div className="img">
          <img
            src="../../images/ux-indonesia-qC2n6RQU4Vw-unsplash 1.png"
            width="60%"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
