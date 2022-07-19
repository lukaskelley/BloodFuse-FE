import React from "react";
import { Col, Row } from "antd";
import { AppButton } from "../Button/AppButton";
import HomeIMG from "../../assets/img-about.png";

import "./Home.css";

export const Home = () => {
  return (
    <section id="Home">
      <Row gutter={[24, 24]} justify="center" className="row-Home">
        <Col xs={24} sm={20} md={12} lg={12} className="Home-title-container">
          <p>
            Save a Life Today By Donating <br /> <span>Blood</span>
          </p>
          <div>
            <p>
              We are building the largest community where blood can be safely
              donated and accessed.
            </p>
          </div>
          <div className="donate-request-btn-container">
            <AppButton className="red-btn" children="Donate now" />
            <AppButton className="white-btn" children="Request Blood" />
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={12}>
          <div className="Homeimg">
            <div className=".Homeimg-ring"></div>
            <img className="img-Home" src={HomeIMG} alt="Home img" />
          </div>
        </Col>
      </Row>
    </section>
  );
};
