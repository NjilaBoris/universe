import React from "react";
import "./Footer.css";
import Copy from "../Copy/Copy";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-bg-container"></div>

        <div className="footer-content">
          <div className="footer-content-meta">
            <div className="footer-content-col">
              <Copy animateOnScroll>
                <h3>Send a signal if you want to connect</h3>
              </Copy>

              <div className="footer-form">
                <input type="text" placeholder="Unit Address" />

                <Button />
              </div>
            </div>

            <div className="footer-content-col">
              <Copy animateOnScroll>
                <p className="bodyCopy">
                  Orbit Matter is an independent observatory lab devoted to
                  quiet study and creative exploration. Every discovery is
                  recorded, decoded and shared with those who wander through our
                  outpost.
                </p>
              </Copy>

              <div className="footer-socials">
                <div className="footer-social">
                  <a href="/contact">[ Instagram ]</a>
                </div>
                <div className="footer-social">
                  <a href="/contact">[ YouTube Signals ]</a>
                </div>
                <div className="footer-social">
                  <a href="/contact">[ Twitter ]</a>
                </div>
                <div className="footer-social">
                  <a href="/contact">[ LinkedIn ]</a>
                </div>
                <div className="footer-social">
                  <a href="/contact">[ GitHub Repository ]</a>
                </div>
                <div className="footer-social">
                  <a href="/contact">[ Discord Hub ]</a>
                </div>
                <div className="footer-social">
                  <a href="/contact">[ Dribbble ]</a>
                </div>
                <div className="footer-social">
                  <a href="/contact">[ Behance Archive ]</a>
                </div>
                <div className="footer-social">
                  <a href="/contact">[ Homebase ]</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-content-meta">
            <div className="footer-content-col">
              <Copy animateOnScroll>
                <p>[ Constructed by nbdev ]</p>
              </Copy>
            </div>

            <div className="footer-content-col">
              <Copy animateOnScroll>
                <h1>Orbit Matter&copy;</h1>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
