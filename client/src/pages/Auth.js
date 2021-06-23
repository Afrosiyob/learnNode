import React from "react";
import { Row, Col } from "antd";
import Login from "../layouts/Login";
import Registration from "../layouts/Registration";

import "./Auth.scss";

const Auth = () => {
  return (
    <div className="auth-wrap-box">
      <Row gutter={16} justify="center" style={{ width: "100%" }}>
        <Col xs={24} sm={24} md={6} lg={6}>
          <Login />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}>
          <Registration />
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
