import React from "react";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <section className="service">
      <div className="sectionTitle">
        <h2>What we do</h2>
        <img className="underline" src="../../images/underline 3.png" alt="" />
      </div>
      <div className="serviceList">
        <div className="branding">
          <div className="title">
            <img src="../../images/branding.png" alt="" />
            <h3>Branding</h3>
          </div>
          <ul className="list">
            <li>Brand Strategy</li>
            <li>Social media</li>
            <li>Marketing Assets</li>
            <li>Presentations</li>
            <li>Build MVP Version</li>
            <li>Pitch Deck</li>
          </ul>
        </div>
        <div className="ui-ux">
          <div className="title">
            <img src="../../images/ux.png" alt="" />
            <h3>UI/UX Design</h3>
          </div>
          <ul className="list">
            <li>User Interface</li>
            <li>User Experience</li>
            <li>Design System</li>
            <li>Wireframe</li>
            <li>Prototype</li>
            <li>Website & Mobile App</li>
            <li>IOS + Android</li>
          </ul>
        </div>
        <div className="development">
          <div className="title">
            <img src="../../images/ux.png" alt="" />
            <h3>Development</h3>
          </div>
          <ul className="list">
            <li>Front End (HTML, CSS, React)</li>
            <li>Backend (Node.js, MongoDB)</li>
            <li>iOS (Swift)</li>
            <li>Android (Kotlin, Flutter)</li>
            <li>Blockchain Development (NFT)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
