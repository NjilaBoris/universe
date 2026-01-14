import gsap from "gsap";
import Button from "../Button/Button";
import "./CardReveal.css";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
const CardReveal = () => {
  useGSAP(() => {
    function initCtaCopyAnimation() {
      const copyText = document.querySelector(".cta-copy .bodyCopy");
      if (!copyText) return;

      const split = SplitText.create(copyText, {
        type: "lines",
        linesClass: "line",
      });

      split.lines.forEach((line) => {
        const mask = document.createElement("div");
        mask.className = "line-mask";
        line.parentNode.insertBefore(mask, line);
        mask.appendChild(line);
      });

      gsap.set(split.lines, { yPercent: 100 });

      const scrollTriggerSettings = {
        trigger: ".cta",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      };

      gsap.to(split.lines, {
        yPercent: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: scrollTriggerSettings,
      });
    }
    function initCtaLogoAnimation() {
      const scrollTriggerSettings = {
        trigger: ".cta",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      };

      gsap.to(".cta-logo", {
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: scrollTriggerSettings,
      });
    }
    function initCtaButtonAnimation() {
      const btn = document.querySelector(".cta .btn a.btn");
      if (!btn) return;

      const scrollTriggerSettings = {
        trigger: ".cta",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      };

      gsap.set(btn, { y: 25, opacity: 0 });
      gsap.to(btn, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.3,
        scrollTrigger: scrollTriggerSettings,
      });
    }
    function initCtaCardsAnimation() {
      gsap.utils.toArray(".cta-row").forEach((row, index) => {
        const cardLeft = row.querySelector(".cta-card-left");
        const cardRight = row.querySelector(".cta-card-right");

        const leftXValues = [-800, -900, -400];
        const rightXValues = [800, 900, 400];
        const leftRotationValues = [-30, -20, -35];
        const rightRotationValues = [30, 20, 35];
        const yValues = [100, -150, -400];

        gsap.to(cardLeft, {
          x: leftXValues[index],
          scrollTrigger: {
            trigger: ".cta",
            start: "top center",
            end: "150% bottom",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              cardLeft.style.transform = `translateX(${
                progress * leftXValues[index]
              }px) translateY(${progress * yValues[index]}px) rotate(${
                progress * leftRotationValues[index]
              }deg)`;
              cardRight.style.transform = `translateX(${
                progress * rightXValues[index]
              }px) translateY(${progress * yValues[index]}px) rotate(${
                progress * rightRotationValues[index]
              }deg)`;
            },
          },
        });
      });
    }
    initCtaCopyAnimation();
    initCtaCardsAnimation();
    initCtaLogoAnimation();
    initCtaButtonAnimation();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <section className="cta">
        <div className="cta-content">
          <div className="cta-logo">
            <img src="/index/logo_cta.png" alt="" />
          </div>

          <div className="cta-copy">
            <p className="bodyCopy lg">
              Send a message to the observatory. Our field units review incoming
              transmissions and respond as soon as a secure link is established.
            </p>
          </div>

          <Button />
        </div>

        <div className="cta-row">
          <div className="cta-card cta-card-left">
            <div className="cta-card-frame">
              <div className="cta-card-img">
                <img src="/index/cta_img_01.jpg" alt="" />
              </div>
              <div className="cta-card-gradient"></div>
            </div>
          </div>

          <div className="cta-card cta-card-right">
            <div className="cta-card-frame">
              <div className="cta-card-img">
                <img src="/index/cta_img_02.jpg" alt="" />
              </div>
              <div className="cta-card-gradient"></div>
            </div>
          </div>
        </div>

        <div className="cta-row">
          <div className="cta-card cta-card-left">
            <div className="cta-card-frame">
              <div className="cta-card-img">
                <img src="/index/cta_img_03.jpg" alt="" />
              </div>
              <div className="cta-card-gradient"></div>
            </div>
          </div>

          <div className="cta-card cta-card-right">
            <div className="cta-card-frame">
              <div className="cta-card-img">
                <img src="/index/cta_img_04.jpg" alt="" />
              </div>
              <div className="cta-card-gradient"></div>
            </div>
          </div>
        </div>

        <div className="cta-row">
          <div className="cta-card cta-card-left">
            <div className="cta-card-frame">
              <div className="cta-card-img">
                <img src="/index/cta_img_05.jpg" alt="" />
              </div>
              <div className="cta-card-gradient"></div>
            </div>
          </div>

          <div className="cta-card cta-card-right">
            <div className="cta-card-frame">
              <div className="cta-card-img">
                <img src="/index/cta_img_06.jpg" alt="" />
              </div>
              <div className="cta-card-gradient"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardReveal;
