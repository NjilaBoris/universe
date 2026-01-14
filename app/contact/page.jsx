"use client";
import React from "react";
import "./contact.css";
import Link from "next/link";
import Copy from "@/components/Copy/Copy";
import Footer from "@/components/Footer/Footer";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  useGSAP(() => {
    function initFaqItemsAnimation() {
      const faqItems = document.querySelectorAll(".faq-item");
      if (!faqItems.length) return;

      const faqSection = document.querySelector(".faq-container");
      if (!faqSection) return;

      gsap.set(faqItems, {
        opacity: 0,
        y: 30,
      });

      gsap.to(faqItems, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.3,
        scrollTrigger: {
          trigger: faqSection,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }
    function initFaqToggleInteractions() {
      const faqQuestions = document.querySelectorAll(".faq-question");
      if (!faqQuestions.length) return;

      faqQuestions.forEach((question) => {
        const item = question.closest(".faq-item");
        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector(".faq-icon svg");
        let isOpen = false;

        question.addEventListener("click", () => {
          if (isOpen) {
            gsap.to(icon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });

            gsap.to(answer, {
              height: 0,
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            });

            isOpen = false;
          } else {
            gsap.to(icon, {
              rotation: 90,
              duration: 0.3,
              ease: "power2.out",
            });

            answer.style.height = "auto";
            const contentHeight = answer.scrollHeight;
            answer.style.height = "0";

            gsap.to(answer, {
              height: contentHeight,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });

            isOpen = true;
          }
        });
      });
    }
    initFaqItemsAnimation();
    initFaqToggleInteractions();
  });
  return (
    <>
      <ReactLenis root />
      <section className="hero contact-hero">
        <div className="hero-container">
          <div className="hero-img-container"></div>

          <div className="hero-content">
            <div className="container">
              <div className="hero-content-footer">
                <div className="hero-content-header">
                  <Copy>
                    <h1 data-animate-variant="slide" data-animate-delay="0.6">
                      Send a Signal
                    </h1>
                  </Copy>
                </div>

                <div className="hero-callout">
                  <Copy>
                    <p data-animate-variant="flicker" data-animate-delay="0.75">
                      Link Established / 03.221
                    </p>
                  </Copy>
                  <p data-animate-variant="flicker" data-animate-delay="0.9">
                    Awaiting Transmission
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <div className="container">
          <div className="contact-form-bg-wrapper">
            <div className="contact-form-bg"></div>
          </div>

          <div className="contact-form-row">
            <p data-animate-variant="flicker" data-animate-delay="0.75">
              Communication Form
            </p>
            <p data-animate-variant="flicker" data-animate-delay="0.75">
              Send a message to the station
            </p>
          </div>

          <div className="contact-form-row">
            <div className="contact-form-col">
              <div className="contact-form-header">
                <Copy>
                  <h3 data-animate-variant="slide" data-animate-delay="0.75">
                    Initiate a Transmission
                  </h3>
                </Copy>
                <Copy animateOnScroll>
                  <p className="bodyCopy">
                    Reach out to the observatory with any request or inquiry. We
                    respond to all incoming transmissions once a stable link has
                    been confirmed by the communication desk.
                  </p>
                </Copy>
              </div>

              <div className="contact-form-availability">
                <Copy>
                  <p>Channel Open for Messages</p>
                </Copy>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="form-item">
                <input type="text" placeholder="Identification" />
              </div>

              <div className="form-item">
                <input type="text" placeholder="Unit Address" />
              </div>

              <div className="form-item">
                <textarea
                  rows="6"
                  placeholder="Transmission Details"
                ></textarea>
              </div>

              <div className="form-item">
                <div className="btn">
                  <Link href="/contact" className="btn">
                    <span className="btn-line"></span>Send Transmission
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-container">
        <div className="container">
          <div className="faq-header">
            <h3 data-animate-variant="slide" data-animate-on-scroll="true">
              A compiled set of frequently received questions is recorded for
              your reference
            </h3>
          </div>

          <div className="faq-wrapper">
            <div className="faq-items">
              <div className="faq-item">
                <div className="faq-question">
                  <h3>How do I open a channel to the observatory?</h3>
                  <span className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                <div className="faq-answer">
                  <p className="bodyCopy">
                    Use the communication form to send your message. Once a
                    clear signal path is confirmed the station replies through
                    the same route.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>What type of missions are recorded in the archive?</h3>
                  <span className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                <div className="faq-answer">
                  <p className="bodyCopy">
                    The archive contains field surveys, structural studies,
                    signal scans and creative research missions carried out
                    across distant regions.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>Can outside units collaborate with Orbit Matter?</h3>
                  <span className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                <div className="faq-answer">
                  <p className="bodyCopy">
                    Yes. The observatory regularly supports joint missions and
                    shared research with visiting explorers and independent
                    creative units.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>Where can I view the collected discoveries?</h3>
                  <span className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                <div className="faq-answer">
                  <p className="bodyCopy">
                    Visit the Observatory for structured studies or navigate to
                    the Traces section for recovered visuals and field
                    recordings.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <h3>How long does message verification take?</h3>
                  <span className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                <div className="faq-answer">
                  <p className="bodyCopy">
                    Verification usually completes within one to two local
                    cycles. Requests that require deeper analysis may extend the
                    review period slightly.
                  </p>
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

export default Contact;
