import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing">
      <div className="sectionTitle">
        <h2>Pricing Package Choose Your Plan</h2>
        <img className="underline" src="../../images/underline 3.png" alt="" />
        <p>
          We believe that great design should not be out of reach, so our
          services are less than half the price of a full-time designer.
        </p>
      </div>

      <div className="btn-grp">
        <button className="active">Monthly</button>
        <button>Yearly</button>
      </div>

      <div className="packages">
        <div className="package">
          <div className="pkg-title">
            <h3>Merketing</h3>
            <p>$899/ mo</p>
          </div>

          <ul>
            <li>
              <i class="fas fa-check"></i>
              Dedicated Designer
            </li>
            <li>
              <i class="fas fa-check"></i>
              Unlimited requests
            </li>
            <li>
              <i class="fas fa-check"></i>
              Unlimited brand profiles
            </li>
            <li>
              <i class="fas fa-check"></i>
              Native source files
            </li>
            <li>
              <i class="fas fa-check"></i>
              Real-time collaboration
            </li>
            <li>
              <i class="fas fa-check"></i>
              Banner Ads
            </li>
            <li>
              <i class="fas fa-check"></i>
              Banner Ads
            </li>
            <li>
              <i class="fas fa-check"></i>
              Packaging & Label
            </li>
            <li>
              <i class="fas fa-check"></i>
              Logo & Brand Guide
            </li>
          </ul>

          <button>$899 / mo</button>
        </div>
        <div className="package special">
          <div className="pkg-title">
            <h3>UI/UX Design</h3>
            <p>$1000/ mo</p>
          </div>

          <ul>
            <li>
              <i class="fas fa-check"></i>
              Dedicated Designer
            </li>
            <li>
              <i class="fas fa-check"></i>
              Unlimited requests
            </li>
            <li>
              <i class="fas fa-check"></i>
              Unlimited brand profiles
            </li>
            <li>
              <i class="fas fa-check"></i>
              Native source files
            </li>
            <li>
              <i class="fas fa-check"></i>
              Real-time collaboration
            </li>
            <li>
              <i class="fas fa-check"></i>
              Banner Ads
            </li>
            <li>
              <i class="fas fa-check"></i>
              Banner Ads
            </li>
            <li>
              <i class="fas fa-check"></i>
              Packaging & Label
            </li>
            <li>
              <i class="fas fa-check"></i>
              Logo & Brand Guide
            </li>
          </ul>

          <button>$899 / mo</button>
        </div>
        <div className="package">
          <div className="pkg-title">
            <h3>Development</h3>
            <p>$1000/ mo</p>
          </div>

          <ul>
            <li>
              <i class="fas fa-check"></i>
              Dedicated Designer
            </li>
            <li>
              <i class="fas fa-check"></i>
              Unlimited requests
            </li>
            <li>
              <i class="fas fa-check"></i>
              Unlimited brand profiles
            </li>
            <li>
              <i class="fas fa-check"></i>
              Native source files
            </li>
            <li>
              <i class="fas fa-check"></i>
              Real-time collaboration
            </li>
            <li>
              <i class="fas fa-check"></i>
              Banner Ads
            </li>
            <li>
              <i class="fas fa-check"></i>
              Banner Ads
            </li>
            <li>
              <i class="fas fa-check"></i>
              Packaging & Label
            </li>
            <li>
              <i class="fas fa-check"></i>
              Logo & Brand Guide
            </li>
          </ul>

          <button>$899 / mo</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
