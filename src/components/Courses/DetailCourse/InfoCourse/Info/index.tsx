import React from 'react';
import { Avatar, Badge, Button, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import AvatarUser from '../../../../../assets/img/AvatarUser.jpg';
import './style.scss';

interface InfoCourseProps {
    idCourse?: string;
}
export const InfoCourse = (props:InfoCourseProps) => {
    const onFinish = (e: any) => {
        console.log(e);
    }
    return (
        <div className="container-info">
            <div className="content">
                Ứng dụng thành thạo 150 hàm Excel, Pivot Table, kỹ thuật lọc, định dạng dữ liệu, vẽ biểu đồ chuyên nghiệp...vào công việc
                <br />
                Hình thành và phát triển tư duy tổ chức, xử lý dữ liệu khoa học
                <br />
                Rèn luyện kỹ năng báo cáo theo các công việc cụ thể để sử dụng Excel thành thạo, đáp ứng tiêu chuẩn về kỹ năng Excel của các doanh nghiệp, tập đoàn
                Tự xây dựng hệ thống báo cáo động, hệ thống quản trị chuyên nghiệp để đo lường hiệu quả công việc
                Có chuyên gia Excel bên cạnh 24/7 để hỏi khi cần
                <br />
                Được làm quen với công việc thực tế tại các tập đoàn, doanh nghiệp lớn
                <br />
                Cơ hội thăng tiến lên vị trí Quản lý, phát triển sự nghiệp nhanh chóng
                <br />
                Tiết kiệm chi phí và thời gian so với học offline, thời gian học linh hoạt
                Vượt qua các kỳ thi cấp chứng nhận năng lực
            </div>
            <h3 className="title-comment">Bình luận</h3>
            <div className="comment">
                <div className="content-comment">
                    <div className="item-comment">
                        <div className="img-user-comment">
                            <Badge>
                                <Avatar shape="circle" size="large" src={AvatarUser} />
                            </Badge>
                        </div>
                        <div className="summary-info">
                            <p className="name-user">Nguyễn Văn Cường</p>
                            <p className="time-comment">Một giờ trước</p>
                            <p className="content">Quá là hay ông zà ơi!!!!</p>
                        </div>
                    </div>
                    <div className="item-comment">
                        <div className="img-user-comment">
                            <Badge>
                                <Avatar shape="circle" size="large" src={AvatarUser} />
                            </Badge>
                        </div>
                        <div className="summary-info">
                            <p className="name-user">Nguyễn Văn Cường</p>
                            <p className="time-comment">Một giờ trước</p>
                            <p className="content">Quá là hay ông zà ơi!!!!</p>
                        </div>
                    </div>
                    <div className="item-comment">
                        <div className="img-user-comment">
                            <Badge>
                                <Avatar shape="circle" size="large" src={AvatarUser} />
                            </Badge>
                        </div>
                        <div className="summary-info">
                            <p className="name-user">Nguyễn Văn Cường</p>
                            <p className="time-comment">Một giờ trước</p>
                            <p className="content">Quá là hay ông zà ơi!!!!</p>
                        </div>
                    </div>
                    <div className="item-comment">
                        <div className="img-user-comment">
                            <Badge>
                                <Avatar shape="circle" size="large" src={AvatarUser} />
                            </Badge>
                        </div>
                        <div className="summary-info">
                            <p className="name-user">Nguyễn Văn Cường</p>
                            <p className="time-comment">Một giờ trước</p>
                            <p className="content">Quá là hay ông zà ơi!!!!</p>
                        </div>
                    </div>
                    <div className="item-comment">
                        <div className="img-user-comment">
                            <Badge>
                                <Avatar shape="circle" size="large" src={AvatarUser} />
                            </Badge>
                        </div>
                        <div className="summary-info">
                            <p className="name-user">Nguyễn Văn Cường</p>
                            <p className="time-comment">Một giờ trước</p>
                            <p className="content">Quá là hay ông zà ơi!!!!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="write-comment">
                <h3>Để lại bình luận</h3>
                <div className="form-comment">
                    <Form
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        className="my-form"
                    >
                        <Form.Item
                            name="comment"
                        >
                            <TextArea rows={4} placeholder="Write your comments here..." style={{ height: '100%', resize: 'none' }} className="cmts" name='commentuser' required />
                        </Form.Item>
                        <Button htmlType='submit'>Đăng</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
