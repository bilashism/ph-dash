"use client";
import { Button, Form, Input, message } from "antd";

type FormValues = {
  username: string;
  password: string;
};

export default function Login() {
  const onFinish = (values: FormValues) => {
    // Mock authentication
    if (values.username === "admin" && values.password === "password") {
      // Mock successful login
      message.success("Login successful");
    } else {
      // Mock unsuccessful login
      message.error("Invalid username or password");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}
