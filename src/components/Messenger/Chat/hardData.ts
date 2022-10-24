interface Message {
    idUser: string;
    content: string;
    time: number | string;
}

export interface RoomMessenger {
    idRoom: string;
    messInRoom: Array<Message>
}

export const RoomChat: RoomMessenger = {
    idRoom: "001jjse2",
    messInRoom: [
        {
            idUser: '1',
            content: "Hello em!",
            time: 1,
        },
        {
            idUser: '2',
            content: "Xin chào bro, đây là tin nhắn đầu tiên tôi gửi!",
            time: 2,
        },
        {
            idUser: '2',
            content: "Xin chào bro, đây là tin nhắn đầu tiên tôi gửi!",
            time: 2.1,
        },
        {
            idUser: '1',
            content: "Tôi muốn học bài học này!",
            time: 3.5,
        },
        {
            idUser: '1',
            content: "Giá cả như thế nào!",
            time: 4,
        },
        {
            idUser: '2',
            content: "Hiện đang trong thời điểm khuyến mãi, giảm giá 50%!",
            time: 5,
        },
    ]
}