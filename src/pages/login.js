import React from 'react';
import { Form, Input, Button } from 'antd';
import Roules from '../util/rules';
import { login } from '../middleware/auth';
import { Layout } from '../component';

const Login = props => {

    // LOGIN SUCCESS
    const onFinish = values => {
        console.log('Success:', values);
        login(props, values);
    };

    // LOGIN FAILED
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className="app-login" isHeader={false}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
            >
                <Form.Item
                    name="username"
                    type="text"
                    rules={Roules.text}

                >
                    <Input placeholder="Username" autoComplete='off' />
                </Form.Item>
                <Form.Item
                    name="password"
                    type="password"
                    rules={Roules.password}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </Layout>

    );
};

export default Login;