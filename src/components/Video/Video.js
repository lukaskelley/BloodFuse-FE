import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";
import { AppButton } from "../Button/AppButton";
import "./Video.css";

import Slider1 from "../../assets/slider1.png";

const Item = styled.div`
  text-align: center;
  font-size: 2rem;
  line-height: 145px;
  border-radius: 10px;
`;

const sampleArray = [Slider1, Slider1, Slider1];
export const Video = () => {
  return (
    <section id="Video">
      <Row gutter={[24, 24]} justify="center" className="row-Video">
        <Col xs={24} sm={20} md={12} lg={3} className="Video-title-container" />
        <Col xs={24} sm={20} md={12} lg={20} className="Video-img-container">
          <h1 >GET TO KNOW OUR PATIENT MORE</h1>
          <Row>
            <Col lg={1}>
              <Controller prev carouselId={"jjunyjjuny"} />
            </Col>
            <Col lg={17}>
              <Carousel
                itemCountPerPanel={1}
                customMode
                carouselId={"jjunyjjuny"}
              >
                {sampleArray.map((el) => (
                  <Item>
                    <img src={el} alt="slider" className="slider-img" />
                  </Item>
                ))}
              </Carousel>
            </Col>
            <Col lg={1}>
              <Controller next carouselId={"jjunyjjuny"} />
            </Col>
          </Row>
          <h2 >Oluwole Seun</h2>
          <p >
            Meet 14 years old Seun from Lagos. She and others who are fighting
            Leukemia often need blood trans-fusions while going through chemo
            treatments.
          </p>
          <AppButton
            className='red-btn video-btn'
            children='Watch Seun’s story on our YouTube'
          />
        </Col>
        <Col xs={24} sm={20} md={12} lg={2} className="Video-title-container" />
      </Row>
    </section>
  );
};
