/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { riddaUtils } from "@/utility";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    riddaUtils.animation();
    riddaUtils.fixedHeader();
    riddaUtils.scrollTop();
    document.querySelector("body").classList = "dark-version";
  }, []);
  return (
    <section
      className="hero-area-five bgp-bottom pt-220 rpt-145 pb-250 rpb-150 rel z-1"
      style={{
        backgroundImage: "url(assets/images/background/hero-five-bg.png)",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="container container-1290">
        <div
          className="hero-content-five text-white mb-135 rmb-80"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h1>
            Unlock Your
            <br />{" "}
            <span
              style={{
                color: "#ffc605",
              }}
            >
              {" "}
              Digital Potential
            </span>
          </h1>
          <div className="content mb-50">
            <span className="h1">Agency</span>
            <p>
              Our team of experts is dedicated to maximizing your online
              presence and driving results. Let&apos;s work together to elevate
              your digital strategy to new heights.
            </p>
            <Link
              href="project-list"
              className="theme-btn color-white hover-secondary"
              data-hover="Contact Us"
              style={{
                backgroundColor: "#ffc605",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#2f3f61";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffc605";
              }}
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="hero-five-clients text-white rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="client-logos">
                <img
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={50}
                  src="assets/images/hero/client-logo1.png"
                  alt="Client Logo"
                />
                <img
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={150}
                  src="assets/images/hero/client-logo2.png"
                  alt="Client Logo"
                />
                <img
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={250}
                  src="assets/images/hero/client-logo3.png"
                  alt="Client Logo"
                />
                <img
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={50}
                  src="assets/images/hero/client-logo1.png"
                  alt="Client Logo"
                />
                <img
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={150}
                  src="assets/images/hero/client-logo2.png"
                  alt="Client Logo"
                />
                <img
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-delay={250}
                  src="assets/images/hero/client-logo3.png"
                  alt="Client Logo"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="video-wrap rel"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img src="assets/images/video/hero-five.jpg" alt="Video" />
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=TfU0qjuZkJ4"
                className="mfp-iframe color-primary video-play"
              >
                <i className="fas fa-play" style={{ color: "#2f3f61" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
