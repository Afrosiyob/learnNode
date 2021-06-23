import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import axios from "axios";
import UserContext from "../services/context";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { setName } = useContext(UserContext);
  const history = useHistory();
  const onFinish = (values) => {
    axios
      .post("/api/auth/login", values)
      .then((res) => {
        setName(res.data.username);
        localStorage.setItem("token", `Bearer ${res.data.token}`);
        localStorage.setItem("user_id", res.data.userId);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
