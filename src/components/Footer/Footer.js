import React from "react";
import { Col, Row } from "antd";
import { Input } from "antd";
import { GoTopButton } from "./GoTopButtton";
import {
  ArrowRightOutlined,
  MailOutlined,
  EnvironmentOutlined,
  MobileOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import "./Footer.css";

export const Footer = () => {
  return (
    <section id="Footer">
      <Row className="Footer-row">
        <Col xs={24} sm={20} md={12} lg={8}>
          <Row>
            <Col xs={24} sm={20} md={12} lg={3} />
            <Col xs={24} sm={20} md={12} lg={18} className="footer-btn_contain">
              <h1>Sign up to our newletter to stay up to date</h1>
              <p>With our latest news</p>
              <div className="email-box-container">
                <Input
                  addonAfter={<ArrowRightOutlined />}
                  placeholder="@example.gmail.com"
                  className="email-box"
                />
              </div>
            </Col>
            <Col xs={24} sm={20} md={12} lg={3} />
          </Row>
        </Col>
        <Col xs={24} sm={20} md={12} lg={5}>
          <div className="donate-blood-contain">
            <h1>Donate Blood</h1>
            <p>
              <a href="https://anatha.io/">Make an appointment</a>
            </p>
            <p>
              <a href="https://anatha.io/app">Why Donate?</a>
            </p>
            <p>
              <a href="https://anatha.io/blockchain-network">
                Where can I Donate?
              </a>
            </p>
            <p>
              <a href="https://anatha.io/project-anatha">Eligibity</a>
            </p>
            <p>
              <a href="https://anatha.io/about">Donate Financially</a>
            </p>
            <p>
              <a href="https://anatha.io/whycrypto">
                Frequently Asked Questions
              </a>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={4}>
          <div className="about-us-contain">
            <h1>About Us</h1>
            <p>
              <a href="https://discord.gg/KrNswyU">Our Objective</a>
            </p>
            <p>
              <a href="https://t.me/projectanatha">Our Partners</a>
            </p>
            <p>
              <a href="https://medium.com/anatha-io">Blog</a>
            </p>
            <p>
              <a href="https://medium.com/anatha-io">Accomplishment</a>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={6}>
          <div className="contact-contain">
            <h1>Contact Us</h1>
            <Row>
              <Col lg={2}>
                <MailOutlined
                  style={{
                    color: "white",
                    fontSize: "15px",
                    paddingTop: "5px",
                  }}
                />
              </Col>
              <Col lg={6} style={{ color: "white", lineHeight: "0.5rem" }}>
                <p>donate@bloodfuse.com</p>
                <p>support@bloodfuse.com</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: "10px" }}>
              <Col lg={2}>
                <EnvironmentOutlined
                  style={{
                    color: "white",
                    fontSize: "15px",
                    paddingTop: "5px",
                  }}
                />
              </Col>
              <Col lg={12} style={{ color: "white", lineHeight: "0.6rem" }}>
                <p>WittyHub, 28 Jakpa Rd</p>
                <p>Effurun, Warri, Delta, NG.</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: "10px" }}>
              <Col lg={2}>
                <MobileOutlined
                  style={{
                    color: "white",
                    fontSize: "15px",
                    paddingTop: "5px",
                  }}
                />
              </Col>
              <Col lg={16} style={{ color: "white", lineHeight: "0.6rem" }}>
                <p>Office: +234 (0) 807 591 2957</p>
                <p>Mobile: +234 (0) 809 551 0327</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: "30px" }}>
              <Col lg={3}>
                <InstagramOutlined
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingTop: "5px",
                  }}
                />
              </Col>
              <Col lg={3}>
                <TwitterOutlined
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingTop: "5px",
                  }}
                />
              </Col>
              <Col lg={3}>
                <FacebookOutlined
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingTop: "5px",
                  }}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <GoTopButton />
      <div className="Footer-row_whitepaper">
        <p>Copyright © 2022 - BloodFuse. All Rights Reserved.</p>
      </div>
    </section>
  );
};
