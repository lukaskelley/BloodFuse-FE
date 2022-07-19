import React from "react";
import { Col, Row } from "antd";
import { CommuBox } from "../Community/CommuBox/CommuBox";
import Commupngone from "../../assets/commu1.png";
import CommupngTwo from "../../assets/commu2.png";
import CommupngThree from "../../assets/commu3.png";

import "./Community.css";

export const Community = () => {
  return (
    <section id="Community">
      <Row gutter={[24, 24]} justify="center" className="row-Community">
        <Col
          xs={24}
          sm={20}
          md={12}
          lg={8}
          className="Community-title-container"
        ></Col>
        <Col xs={24} sm={20} md={12} lg={8}>
          <div className="community-top-title">
            <h1>EVERY TWO SECONDS</h1>
            <p>
              Someone in your community needs blood. This number counter shows
              how many people have needed blood since you arrived here.
            </p>
            <h2>00 - 499</h2>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={8}></Col>
      </Row>
      <Row gutter={[24, 24]} justify="center" className="row-Community">
        <Col
          xs={24}
          sm={20}
          md={12}
          lg={3}
          className="Community-title-container"
        />
        <Col
          xs={24}
          sm={20}
          md={12}
          lg={6}
          className="Community-title-container"
        >
          <CommuBox
            commuimgpath={Commupngone}
            children="Donate"
            commutoptoptile="Donate Now"
            commucontent="Schedule your appointment now."
          />
        </Col>
        <Col xs={24} sm={20} md={12} lg={6}>
          <CommuBox
            commuimgpath={CommupngTwo}
            children="Review Eligibility"
            commutoptoptile="Can I Donate Blood?"
            commucontent="Find out your eligibility."
          />
        </Col>
        <Col xs={24} sm={20} md={12} lg={6}>
          <CommuBox
            commuimgpath={CommupngThree}
            children="Find Center"
            commutoptoptile="Where To Donate"
            commucontent="Find a location convenient to you."
          />
        </Col>
        <Col
          xs={24}
          sm={20}
          md={12}
          lg={3}
          className="Community-title-container"
        />
      </Row>
    </section>
  );
};
