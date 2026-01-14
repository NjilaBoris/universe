import React from "react";
import { ReactLenis } from "lenis/react";
import "./expedition.css";
import CardReveal from "@/components/CardReveal/CardReveal";
import Footer from "@/components/Footer/Footer";
const page = () => {
  return (
    <>
      <ReactLenis root />
      <section class="hero">
        <div class="hero-container">
          <div class="hero-img-container">
            <div class="hero-img">
              <img src="/expedition/hero.jpg" alt="" />
            </div>

            <div class="hero-img-overlay"></div>

            <div class="hero-img-gradient"></div>
          </div>

          <div class="hero-content">
            <div class="container">
              <div class="hero-content-nav">
                <div class="hero-timer">
                  <p>Zone 00 __ 00:00</p>
                </div>
              </div>

              <div class="hero-content-header">
                <h1 data-animate-variant="slide" data-animate-delay="0.6">
                  Expedition
                  <br />
                  Logs
                </h1>
              </div>

              <div class="hero-content-footer">
                <div class="hero-footer-copy">
                  <p
                    class="bodyCopy"
                    data-animate-variant="slide"
                    data-animate-delay="0.75"
                  >
                    These missions capture the most significant encounters
                    recorded by the observatory. Each entry reveals structural
                    traces, unstable landscapes and unexplained signals gathered
                    across remote regions. All records are continuously reviewed
                    and preserved inside the archive.
                  </p>
                </div>

                <div class="hero-callout">
                  <p data-animate-variant="flicker" data-animate-delay="0.85">
                    Archive Index / 04.187
                  </p>
                  <p data-animate-variant="flicker" data-animate-delay="1">
                    Data Stream Active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardReveal />
      <Footer />
    </>
  );
};

export default page;
