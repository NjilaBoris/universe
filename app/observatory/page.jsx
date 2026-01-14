"use client";

import Footer from "@/components/Footer/Footer";
import React from "react";
import "./observatory.css";
import { ReactLenis } from "lenis/react";
import Copy from "@/components/Copy/Copy";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const page = () => {
  useGSAP(() => {
    function initRoutineSlider() {
      const sliderWrapper = document.querySelector(".routine-slider-wrapper");
      const progressBar = document.querySelector(".routine-progress");
      if (!sliderWrapper || !progressBar) return;

      const sliderContainer = sliderWrapper.parentElement;

      function calculateMaxTranslate() {
        const containerWidth = sliderContainer.offsetWidth;
        const wrapperWidth = sliderWrapper.offsetWidth;
        return -(wrapperWidth - containerWidth);
      }

      ScrollTrigger.create({
        trigger: ".routine",
        start: "top top",
        end: `+=${window.innerHeight * 5}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const maxTranslateX = calculateMaxTranslate();

          gsap.set(sliderWrapper, { x: progress * maxTranslateX });
          gsap.set(progressBar, { scaleX: progress });
        },
      });
    }
    initRoutineSlider();
  });
  return (
    <>
      <ReactLenis root />
      <section class="hero hero-observatory">
        <div class="hero-container">
          <div class="hero-img-container">
            <div class="hero-img">
              <img src="/observatory/hero.jpg" alt="" />
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
                <Copy>
                  <h1 data-animate-variant="slide" data-animate-delay="0.6">
                    The
                    <br />
                    Observatory
                  </h1>
                </Copy>
              </div>

              <div class="hero-content-footer">
                <div class="hero-footer-copy">
                  <Copy>
                    <p
                      class="bodyCopy"
                      data-animate-variant="slide"
                      data-animate-delay="0.75"
                    >
                      Situated at the edge of active research routes, the
                      Observatory serves as the central station for analysis and
                      long range study. Here we examine distant structures,
                      monitor surface shifts, and interpret signals gathered
                      from ongoing expeditions.
                    </p>
                  </Copy>
                </div>

                <div class="hero-callout">
                  <Copy>
                    <p data-animate-variant="flicker" data-animate-delay="0.85">
                      Observation Record / 02.076
                    </p>
                  </Copy>
                  <Copy>
                    <p data-animate-variant="flicker" data-animate-delay="1">
                      Signal Link Verified
                    </p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="routine">
        <div class="routine-container">
          <div class="routine-bg"></div>

          <div class="routine-copy">
            <div class="container">
              <div class="routine-header">
                <h3>Fieldwork Routine</h3>
                <h3>Mechanics</h3>
              </div>

              <div class="routine-progress-bar">
                <div class="routine-progress"></div>
              </div>

              <div class="routine-slider">
                <div class="routine-slider-wrapper">
                  <div class="routine-block">
                    <div class="routine-block-header">
                      <p>01</p>
                      <p>Convergence</p>
                    </div>
                    <div class="routine-icon">
                      <img src="/observatory/routine_icon_01.svg" alt="" />
                    </div>
                    <div class="routine-block-footer">
                      <h3>Convergence Relay</h3>
                      <p>R_4128</p>
                    </div>
                  </div>

                  <div class="routine-block">
                    <div class="routine-block-header">
                      <p>02</p>
                      <p>Stellar</p>
                    </div>
                    <div class="routine-icon">
                      <img src="/observatory/routine_icon_02.svg" alt="" />
                    </div>
                    <div class="routine-block-footer">
                      <h3>Stellar Pivot</h3>
                      <p>R_6632</p>
                    </div>
                  </div>

                  <div class="routine-block">
                    <div class="routine-block-header">
                      <p>03</p>
                      <p>Radiant</p>
                    </div>
                    <div class="routine-icon">
                      <img src="/observatory/routine_icon_03.svg" alt="" />
                    </div>
                    <div class="routine-block-footer">
                      <h3>Radiant Vector</h3>
                      <p>R_9821</p>
                    </div>
                  </div>

                  <div class="routine-block">
                    <div class="routine-block-header">
                      <p>04</p>
                      <p>Meridian</p>
                    </div>
                    <div class="routine-icon">
                      <img src="/observatory/routine_icon_04.svg" alt="" />
                    </div>
                    <div class="routine-block-footer">
                      <h3>Meridian Grid</h3>
                      <p>R_5407</p>
                    </div>
                  </div>

                  <div class="routine-block">
                    <div class="routine-block-header">
                      <p>05</p>
                      <p>Cycle</p>
                    </div>
                    <div class="routine-icon">
                      <img src="/observatory/routine_icon_05.svg" alt="" />
                    </div>
                    <div class="routine-block-footer">
                      <h3>Cycle Node</h3>
                      <p>R_2879</p>
                    </div>
                  </div>

                  <div class="routine-block">
                    <div class="routine-block-header">
                      <p>06</p>
                      <p>Orbital</p>
                    </div>
                    <div class="routine-icon">
                      <img src="/observatory/routine_icon_06.svg" alt="" />
                    </div>
                    <div class="routine-block-footer">
                      <h3>Orbital Array</h3>
                      <p>R_7315</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
