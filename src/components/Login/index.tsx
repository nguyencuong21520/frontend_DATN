import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { ReactComponent as Sms } from '../../assets/svg/Sms.svg';
import './style.scss';

interface LoginType {
    email: string;
    password: string;
}
export const Login = () => {
    const [spin, setSpin] = useState<boolean>(false);
    useEffect(() => {
        document.title = 'Đăng nhập'
    }, [])
    const onFinish = (e: LoginType) => {
        console.log(e);
        setSpin(true);
        setTimeout(() => {
            setSpin(false)
        }, 1000)
    }
    return (
        <div className="container-login">
            <h1 style={{ color: '#0E1435', textAlign: 'center' }}>Chào mừng trở lại</h1>
            <h3 className="color-blur" style={{ textAlign: 'center', marginBottom: 30 }}>Chào mừng trở lại TLU Classroom</h3>
            <div className="form-login">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    className="my-form"
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Email không được trống' }]}
                    >
                        <Input type='email' placeholder='Email' className="color-blur inpt" suffix={<Sms />} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Mật khẩu không được trống' }]}
                    >
                        <Input.Password placeholder='Mật khẩu' className="color-blur inpt" />
                    </Form.Item>
                    <div className="footer-fnc">
                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 0 }}>
                            <Checkbox style={{ color: '#C8C9DA' }}>Ghi nhớ</Checkbox>
                        </Form.Item>
                        <Link to={'/account/forgot-password'} style={{ color: '#616496' }}>Lấy lại mật khẩu</Link>
                    </div>
                    {!spin ? (<Button type="primary" htmlType="submit" className="btn-login" >
                        Đăng nhập
                    </Button>) : (<div style={{ textAlign: 'center' }}><Spin /></div>)}

                </Form>
            </div>
            <div className="register">
                <span className="color-blur">Bạn chưa có tài khoản? </span>
                <Link to={'/account/register'} style={{ color: '#616496' }} replace>Đăng ký</Link>
            </div>
        </div>
    )
}
