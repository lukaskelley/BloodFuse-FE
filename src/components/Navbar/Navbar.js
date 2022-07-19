import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Col, Row, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css';
import './Navbar.css'
import LogoIMG from '../../assets/logo.png'

const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Donate Blood
          </a>
        ),
        key: '0',
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
           Request Blood
          </a>
        ),
        key: '1',
      },
    ]}
  />
);
const menu2 = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            How to Donate
          </a>
        ),
        key: '0',
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Eligibility Requirement
          </a>
        ),
        key: '1',
      },
    ]}
  />
);

const Navbar = () => {
  return(
    <nav>
       <Row gutter={[24, 24]} justify="center" className='dropdown-container'>
        <Col xs={24} sm={20} md={12} lg={5}>
          <img src={LogoIMG} alt='main logo' className='img-logo'/>
        </Col>
        <Col xs={24} sm={20} md={12} lg={14} className='menu-container'>
          <Dropdown overlay={menu}>
          <a href='sdf'>
            <Space>
              Make an appointment
              <DownOutlined />
            </Space>
          </a>
          </Dropdown>
          <Dropdown overlay={menu2}>
            <a href='sfsdf'>
              <Space>
              Who can donate blood
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
            <a href='sdfsdf'>
              <Space>
                About us
              </Space>
            </a>
        </Col>
        <Col xs={24} sm={20} md={12} lg={4} className='btn-container'>
          <Button className='btn-signup'>Sign up</Button>
          <Button className='btn-login'>Log in</Button>
        </Col>

      </Row>
     </nav>
  );
};

export default Navbar;