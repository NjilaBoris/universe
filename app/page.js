"use client";
import Copy from "@/components/Copy/Copy";
import "./Home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-img-container">
            <div className="hero-img">
              <img src="/index/hero.jpg" alt="" />
            </div>

            <div className="hero-img-overlay"></div>

            <div className="hero-img-gradient"></div>
          </div>

          <div className="hero-content">
            <div className="container ">
              <div className="hero-content-nav ">
                <div className="hero-timer">
                  <p>Zone 00 __ 00:00</p>
                </div>
              </div>

              <div className="hero-content-header">
                <Copy>
                  <h1 data-animate-variant="slide" data-animate-delay="0.6">
                    Interplanetary
                    <br />
                    Observatory
                  </h1>
                </Copy>
              </div>

              <div className="hero-content-footer ">
                <div className="hero-footer-copy ">
                  <Copy>
                    <p
                      className="bodyCopy"
                      data-animate-variant="slide"
                      data-animate-delay="0.75"
                    >
                      Operating beyond planetary boundaries, Orbit Matter
                      studies the structures, signals, and surface conditions of
                      distant environments. All findings are logged, analyzed,
                      and stored within our observational network.
                    </p>
                  </Copy>
                </div>

                <div className="hero-callout">
                  <Copy>
                    <p data-animate-variant="flicker" data-animate-delay="0.85">
                      Traced Entry / 00.239
                    </p>
                  </Copy>
                  <Copy>
                    <p data-animate-variant="flicker" data-animate-delay="1">
                      Feed Stabilized
                    </p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
