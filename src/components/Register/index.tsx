import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { validatorEmail } from '../../utils/validator/email';
import { Toaster } from '../../utils/ToastMess';
import { ReactComponent as Sms } from '../../assets/svg/Sms.svg';
import './style.scss';

interface RegisterType {
    email: string;
    password: string;
    confirmpassword: string;
}
export const Register = () => {
    const [spin, setSpin] = useState<boolean>(false);
    useEffect(() => {
        document.title = 'Đăng ký'
    }, [])
    const onFinish = (e: RegisterType) => {
        setSpin(true);
        try {
            if (!validatorEmail(e.email)) throw new Error('Bạn cần nhập đúng định dạn email!')
            if (e.password.length < 6 || e.confirmpassword.length < 6) throw new Error('Mật khẩu cần lớn hơn 6 ký tự!')
            if (e.password !== e.confirmpassword) throw new Error('Mật khẩu không trùng!')
            //TODO: Call APIs
            setTimeout(() => {
                Toaster.Success('Bạn đã đăng ký thành công!')
                setSpin(false)
            }, 1000)
        } catch (err: string | any) {
            setTimeout(() => {
                Toaster.Error(err.message.toString())
                setSpin(false)
            }, 1000)
        }
    }
    return (
        <div className="container-register">
            <h1 style={{ color: '#0E1435', textAlign: 'center' }}>Đăng ký</h1>
            <h3 className="color-blur" style={{ textAlign: 'center', marginBottom: 30 }}>Quản lý tất cả lớp học của bạn</h3>
            <div className="form-register">
                <Form
                    name="basic"
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
                    <Form.Item
                        name="confirmpassword"
                        rules={[{ required: true, message: 'Bạn cần xác nhận nhận khẩu' }]}
                    >
                        <Input.Password placeholder='Xác nhận mật khẩu' className="color-blur inpt" />
                    </Form.Item>
                    <div className="footer-fnc">
                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 0 }}>
                            <Checkbox style={{ color: '#C8C9DA' }}>Đồng ý, nhận email cập nhật</Checkbox>
                            <Checkbox style={{ color: '#C8C9DA' }}>Tôi đồng ý với <a href="#" style={{ color: '#616496' }}>Điều khoản, quyền riêng tư</a></Checkbox>
                        </Form.Item>
                    </div>
                    {spin === false ? (<Button type="primary" htmlType="submit" className="btn-login" >
                        Tạo tài khoản
                    </Button>) : <div className="spin" style={{ textAlign: 'center' }}><Spin /></div>}
                </Form>
            </div>
            <div className="login">
                <span className="color-blur">Bạn chưa có tài khoản? </span>
                <Link to={'/account/login'} style={{ color: '#616496' }}>Đăng nhập</Link>
            </div>
        </div>
    )
}
