import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar, Badge, Form, Input } from 'antd';
import { State } from '../../../redux-saga/reducer/reducer';
import AvatarUser from '../../../assets/img/AvatarUser.jpg';
import { ReactComponent as More } from '../../../assets/svg/More.svg';
import { ReactComponent as AttachFile } from '../../../assets/svg/AttachFile.svg';
import { ReactComponent as Smile } from '../../../assets/svg/Smile.svg';
import { ReactComponent as Send } from '../../../assets/svg/Send.svg';
import { RoomChat } from './hardData';
import './style.scss';
interface ChatProps {

}
interface ChatState {

}
class Chat extends Component<ChatProps, ChatState> {
    private data = RoomChat;
    constructor(props: ChatProps) {
        super(props);
    }
    private onFinish = (e: any) => {
        console.log(e);
    }


    render() {
        return (
            <div className="container-chat">
                <div className="top-chat">
                    <div className="current-user">
                        <div className="avatar">
                            <Badge>
                                <Avatar shape="circle" size="large" src={AvatarUser} />
                            </Badge>
                        </div>
                        <div className="name-status">
                            <span className="name-user">Trần Đăng Khoa</span>
                            <span className="status">Online</span>
                        </div>
                    </div>
                    <div className="more">
                        <More className="more" />
                    </div>
                </div>
                <div className="send-message">
                    <div className="content">
                        {this.data.messInRoom.map((item, idx) => {
                            return (
                                <div className={`mess-of-user ${item.idUser === '1' ? 'left' : 'right'}`} key={item.time}>
                                    <div className="img-user">
                                        {
                                            idx < (this.data.messInRoom.length - 1) ? ((
                                                item.idUser !== this.data.messInRoom[idx + 1].idUser ? (<Badge>
                                                    <Avatar shape="circle" size="large" src={AvatarUser} />
                                                </Badge>) : ((<Badge>
                                                    <Avatar shape="circle" size="large" style={{ backgroundColor: 'transparent' }} />
                                                </Badge>))
                                            )) : (<Badge>
                                                <Avatar shape="circle" size="large" src={AvatarUser} />
                                            </Badge>)

                                        }
                                    </div>
                                    <div className="message">
                                        {
                                            item.content
                                        }
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className={`mess-of-user left`}>
                            <div className="img-user">
                                <Badge>
                                    <Avatar shape="circle" size="large" src={AvatarUser} />
                                </Badge>
                            </div>
                            <div className="message">
                                đây là đoạn chát aha hahhahahahahhahah ahahhahaha hhahahahhahahah
                            </div>
                        </div>
                        <div className={`mess-of-user right`}>
                            <div className="img-user">
                                <Badge>
                                    <Avatar shape="circle" size="large" src={AvatarUser} />
                                </Badge>
                            </div>
                            <div className="message">
                                đây là đoạn chát aha hahhahahahahhahah ahahhahaha hhahahahhahahah
                            </div>
                        </div> */}
                    </div>
                    <div className="type-message">
                        <div className="attachment"><AttachFile /></div>
                        <div className="type-message-user">
                            <Form
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                autoComplete="off"
                                className="my-form"
                            >
                                <Form.Item
                                    name="message"
                                >
                                    <input type="text" className="message-user" placeholder="Type a message..." />
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="emoji-sent">
                            <Smile />
                            <Send />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)