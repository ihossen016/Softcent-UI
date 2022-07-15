import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="cta">
        <h2>Looking for a Software Partner?</h2>
        <button>Start A Project</button>
      </div>

      <div className="footer-content">
        <div className="f1">
          <img src="./images/logo-v2 1.png" alt="logo" />
          <p>
            Get a fully stacked design team that will give you accessible
            design, exhaustive research, and an outstanding experience.
          </p>
          <h5>Email: info@softcent.eu</h5>
          <h5>Phone: +(372) 57836500</h5>

          <i class="fab fa-facebook"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </div>
        <div className="f2 list">
          <p>Company</p>
          <ul>
            <li>About us</li>
            <li>Our portfolio</li>
            <li>Our Product</li>
            <li>Our Team</li>
            <li>Our Pricing</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="f3 list">
          <p>Our Service</p>
          <ul>
            <li>Marketing</li>
            <li>UI/UX Design</li>
            <li>Graphic Design (Branding)</li>
            <li>Development</li>
            <li>New Products</li>
          </ul>
        </div>
        <div className="f4 list">
          <p>Supports</p>
          <ul>
            <li>FAQs</li>
            <li>Support Policy</li>
            <li>Privacy Policy</li>
            <li>Trams of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022, Softcent EU, A European IT company</p>
      </div>
    </section>
  );
};

export default Footer;
