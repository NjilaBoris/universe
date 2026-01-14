"use client";
import Copy from "@/components/Copy/Copy";
import "./Home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";

import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

import CardReveal from "@/components/CardReveal/CardReveal";
import Footer from "@/components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Home = () => {
  useGSAP(() => {
    function initHeroTimer() {
      const timeElement = document.querySelector(".hero-timer p");
      if (!timeElement) return;

      function updateTime() {
        const options = {
          timeZone: "America/Toronto",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        };

        const torontoTime = new Date().toLocaleString("en-US", options);
        const hour = parseInt(torontoTime.split(":")[0]);
        const sector = Math.floor(hour / 4) + 1;
        const sectorFormatted = String(sector).padStart(2, "0");

        timeElement.textContent = `Zone ${sectorFormatted} __ ${torontoTime}`;
      }

      updateTime();
      setInterval(updateTime, 60000);
    }
    function initIntroCopyAnimation() {
      const introCopyH3 = document.querySelector(".intro-copy h3");
      if (!introCopyH3) return;

      const split = SplitText.create(introCopyH3, {
        type: "words, chars",
        charsClass: "char",
      });

      ScrollTrigger.create({
        trigger: ".intro-copy",
        start: "top 75%",
        end: "bottom 30%",
        onUpdate: (self) => {
          const progress = self.progress;
          const totalChars = split.chars.length;
          const charsToColor = Math.floor(progress * totalChars);

          split.chars.forEach((char, index) => {
            if (index < charsToColor) {
              char.style.color = "var(--base-100)";
            } else {
              char.style.color = "var(--base-300)";
            }
          });
        },
      });
    }
    function initStickyWorkHeaderAnimation() {
      const workHeaderSection = document.querySelector(
        ".featured-missions-header"
      );
      const homeWorkSection = document.querySelector(".featured-missions");

      if (!workHeaderSection || !homeWorkSection) return;

      ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    initIntroCopyAnimation();
    initStickyWorkHeaderAnimation();
    initHeroTimer();
  });

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
      <ReactLenis root />
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

      <section className="intro">
        <div className="container">
          <div className="stats-container">
            <div className="stat">
              <div className="stat-copy">
                <div className="stats-copy-label">
                  <p>Worlds Observed</p>
                </div>
                <div className="stats-copy-count">
                  <h3>12</h3>
                </div>
              </div>
            </div>

            <div className="stat">
              <div className="stat-copy">
                <div className="stats-copy-label">
                  <p>Recovered Fragments</p>
                </div>
                <div className="stats-copy-count">
                  <h3>64</h3>
                </div>
              </div>
            </div>

            <div className="stat">
              <div className="stat-copy">
                <div className="stats-copy-label">
                  <p>Signal Events</p>
                </div>
                <div className="stats-copy-count">
                  <h3>23</h3>
                </div>
              </div>
            </div>

            <div className="stat">
              <div className="stat-copy">
                <div className="stats-copy-label">
                  <p>Active Units</p>
                </div>
                <div className="stats-copy-count">
                  <h3>09</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-header">
            <Copy animateOnScroll>
              <h1 data-animate-variant="slide" data-animate-on-scroll="true">
                We observe distant worlds
              </h1>
            </Copy>
          </div>

          <div className="intro-copy">
            <div className="intro-copy-wrapper">
              <Copy>
                <h3>
                  From remote colonies to deserted outposts, every location we
                  reach reveals signs of structures, motion and presence that do
                  not exist within our own skies. Some appear stable, others
                  collapse as soon as they are recorded.
                </h3>
              </Copy>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-missions-header">
        <Copy animateOnScroll>
          <h1>
            Highlighted <br />
            Missions
          </h1>
        </Copy>
      </section>
      <section className="featured-missions">
        <div className="featured-missions-list">
          <Link href="/expedition" className="featured-missions-item">
            <p>01 / 05</p>
            <h3>Solar Ridge</h3>
            <div className="featured-mission-item-img">
              <img src="/index/highlight_img_01.jpg" alt="" />
            </div>
            <p>[ Field Report ]</p>
          </Link>

          <Link href="/expedition" className="featured-missions-item">
            <p>02 / 05</p>
            <h3>Crystalline Basin</h3>
            <div className="featured-mission-item-img">
              <img src="/index/highlight_img_02.jpg" alt="" />
            </div>
            <p>[ Surface Record ]</p>
          </Link>

          <Link href="/expedition" className="featured-missions-item">
            <p>03 / 05</p>
            <h3>Luminar Signal</h3>
            <div className="featured-mission-item-img">
              <img src="/index/highlight_img_03.jpg" alt="" />
            </div>
            <p>[ Signal Study ]</p>
          </Link>

          <Link href="/expedition" className="featured-missions-item">
            <p>04 / 05</p>
            <h3>Valley Structures</h3>
            <div className="featured-mission-item-img">
              <img src="/index/highlight_img_04.jpg" alt="" />
            </div>
            <p>[ Structure Log ]</p>
          </Link>

          <Link href="/expedition" className="featured-missions-item">
            <p>05 / 05</p>
            <h3>Emerald Horizon</h3>
            <div className="featured-mission-item-img">
              <img src="/index/highlight_img_05.jpg" alt="" />
            </div>
            <p>[ Horizon Scan ]</p>
          </Link>
        </div>
      </section>
      <CardReveal />
      <Footer />
    </>
  );
};

export default Home;
