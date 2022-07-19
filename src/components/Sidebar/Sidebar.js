import React from "react";
import navbarItems from "../NavbarItems";
import { Col, Row } from 'antd';
import "./Sidebar.css";
import Anathalogo from "../../assets/Anatha-logo.png"

import { CloseOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";

const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ["sidebar-container"];
  if (isopen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }

  return (
    
    <div
      className={opacityClasses.join(" ")}
      isopen={isopen.toString()}
      onClick={toggle}
    >
        <Row>
        <Col xs={24} sm={20} md={12} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="menu-items">
            <a href="/service"><img src={Anathalogo} alt="Anathalogo" className='img_anathalogo' /></a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={1}>
          <div className="icons">
            <div className="mobile-menu-icon">
             <CloseOutlined className="close-icon" onClick={toggle} />
            </div>
           </div>
        </Col>
        </Row>

      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {navbarItems.map((item, index) => (
            <Link to={item.link} key={index} className="sidebar-links">
              {item.title}
            </Link>
          ))}
        </div>
        <div className='social_site-link'>
            <p><a href="https://anatha.io/japanese"><img  alt="????????" src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1ef-1f1f5.svg" data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1ef-1f1f5.svg"/></a></p>
            <p><a href="https://anatha.io/korean"><img alt="????????" src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f0-1f1f7.svg" data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f0-1f1f7.svg"/></a></p>
            <p><a href="https://anatha.io/turkish"><img alt="????????" src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f9-1f1f7.svg" data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f9-1f1f7.svg"/></a></p>
            <p><a href="https://anatha.io/chinese"><img alt="????????" src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1e8-1f1f3.svg" data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1e8-1f1f3.svg"/></a></p>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
