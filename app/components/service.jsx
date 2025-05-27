/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const services = [
  {
    title: "Website Development",
    description:
      "We design fast, functional, and conversion-driven websites tailored to specific goals",
  },
  {
    title: "Digital Marketing ",
    description:
      "We create targeted campaigns that drive real results and help your brand grow smarter online",
  },
  {
    title: "Search Engine Optimization",
    description:
      "We boost your website’s visibility with strategic keywords and content to increase traffic and long-term growth",
  },
  {
    title: "Participant Portal Development",
    description:
      "We create smart, secure portals that simplify referrals, track needs, and keep you connected in one place",
  },
  {
    title: "Business Process Setup",
    description:
      "We streamline your business with efficient workflows and digital tools for smooth operations ",
  },
  {
    title: "Analytics & Reporting ",
    description:
      "We turn data into actionable insights to help you make smarter, data-driven decisions",
  },
];

export default function Service() {
  useEffect(() => {
    document.querySelector("body").classList = "home-five dark-version";
  }, []);
  return (
    <>
      <section className="about-area-two rel z-1">
        <div className="container bordered-x py-100">
          <div className="row gap-100 justify-content-between align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-four-image-part rmb-55">
                <img
                  src="assets/images/about/about-two-white.png"
                  alt="About"
                />
                <div className="shape one">
                  <img src="assets/images/shapes/about-two1.jpg" alt="Shape" />
                </div>
                <div className="shape two">
                  <img src="assets/images/shapes/about-two2.jpg" alt="Shape" />
                </div>
                <div className="shape three">
                  <img src="assets/images/shapes/about-two3.jpg" alt="Shape" />
                </div>
                <div className="abs-headings">
                  <h6
                    className="shape four text-white"
                    style={{
                      backgroundColor: "#2f3f61",
                      color: "#fff",
                    }}
                  >
                    SEO Growth
                  </h6>
                  <h6
                    className="shape five"
                    style={{
                      backgroundColor: "#fff",
                      color: "#2f3f61",
                    }}
                  >
                    Game Changing Strategy
                  </h6>
                  <h6
                    className="shape six "
                    style={{
                      backgroundColor: "#ffc605",
                      color: "#fff",
                    }}
                  >
                    Digital Impact
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-content-four ps-xl-5 ms-xl-1">
                <div className="section-title mb-40">
                  <span className="subtitle mt-10 mb-15">About Agency</span>
                  <h2>Empowering Brands with Data-Driven Strategies</h2>
                </div>
                <p>
                  We provide a comprehensive and holistic solution to amplify
                  your brand’s visibility, engagement, and impact across digital
                  platforms. Through strategic marketing and data-driven
                  insights, we help you connect with your audience, strengthen
                  your online presence, and drive meaningful interactions.
                </p>
                <Link
                  href="about"
                  className="theme-btn color-white hover-secondary mt-25"
                  data-hover="Learn More Us"
                  style={{
                    backgroundColor: "#2f3f61",
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffc605";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#2f3f61";
                  }}
                >
                  <span>Learn More Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area rel z-1" id="services">
        <div className={`container bordered-x px-sm-0 pb-70`}>
          <div className="row justify-content-center pb-35">
            <div
              className="col-xl-7 col-lg-9 text-center"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-30">
                <span className="subtitle mb-15">Our Services</span>
                <h2>
                  Partner with StrategyByte to focus on what matters most.{" "}
                </h2>
              </div>
              <p>
                Our approach is designed to maximize the impact of your
                marketing efforts by delivering measurable ROI. We focus on
                strategic allocation of resources, ensuring every dollar spent
                contributes to meaningful growth and business success.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {services.map(({ title, description }, i) => (
              <div
                key={i}
                className="col-xl-4 col-md-6"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="service-two-item">
                  <h4>
                    <Link href="service-details">{title}</Link>
                  </h4>
                  <p>{description}</p>
                  <Link href="service-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/service-circle.png"
                      alt="Circle"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
