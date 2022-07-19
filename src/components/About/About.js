import React from "react";
import { Col, Row } from "antd";
import { AppButton } from "../Button/AppButton";

import "./About.css";
import Ellipse from "../../assets/Ellipse.png";
import AboutPNG from "../../assets/aboutpng.png";

export const About = () => {
  return (
    <section id="About">
      <Row gutter={[24, 24]} justify="center" className="row-About">
        <Col xs={24} sm={20} md={12} lg={12} className="About-title-container">
          <h1>WHO WE ARE</h1>
          <h2>
            At BloodFuse, we know how important blood is for life and we believe
            every Individual should be given an opportunity to stay alive, which
            is why we.
          </h2>
          <p>
            <img src={Ellipse} alt="" /> Increase communication with our
            members.
          </p>
          <p>
            <img src={Ellipse} alt="" /> Examine critically to ensure alignment.
          </p>
          <p>
            <img src={Ellipse} alt="" /> Perform extra care from a
            multi-disciplinary team.
          </p>
          <p>
            <img src={Ellipse} alt="" /> Are community based organization.
          </p>
          <p>
            <img src={Ellipse} alt="" /> Are incorporating blockchain technology
            to our platform, for transparency, security of data and
            decentralization.
          </p>

          <div className="About-btn-container">
            <AppButton className="about-btn" children="Donate Now" />
            <AppButton className="about-request-btn" children="Request Blood" />
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={12} className="About-img-container">
          <div className="square-container"></div>
          <img src={AboutPNG} alt="about png" className="about-png" />
        </Col>
      </Row>
    </section>
  );
};
