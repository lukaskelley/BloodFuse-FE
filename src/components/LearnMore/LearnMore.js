import React from "react";
import { Col, Row } from "antd";
import { LearnCard } from "./LearnCard/LearnCard";
import LearnMoreOne from "../../assets/LearnMoreOne.png";
import LearnMoreTwo from "../../assets/LearnMoreTwo.png";
import LearnMoreThree from "../../assets/LearnMoreThree.png";
import "./LearnMore.css";

export const LearnMore = () => {
  return (
    <section id="LearnMore">
      <h1>MORE WAYS YOU CAN MAKE A DIFFERENCE</h1>
      <Row gutter={[24, 24]} justify="center" className="row-LearnMore">
        <Col
          xs={24}
          sm={20}
          md={12}
          lg={8}
          className="LearnMore-title-container"
        >
          <LearnCard
            LearnMoreIMGPath={LearnMoreOne}
            LearnMoretitle="Become a Volunteer"
          />
        </Col>
        <Col xs={24} sm={20} md={12} lg={8} className="LearnMore-img-container">
          <LearnCard
            LearnMoreIMGPath={LearnMoreTwo}
            LearnMoretitle="Make a Financial Donation"
          />
        </Col>
        <Col xs={24} sm={20} md={12} lg={8} className="LearnMore-img-container">
          <LearnCard
            LearnMoreIMGPath={LearnMoreThree}
            LearnMoretitle="Host blood drive"
          />
        </Col>
      </Row>
    </section>
  );
};
