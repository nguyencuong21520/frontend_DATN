import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Content } from './InfoCourse/Content';
import { InfoCourse } from './InfoCourse/Info';
import { ContentInfoSource } from './RightInfoCourse/Content';
import { Info } from './RightInfoCourse/Info/Info';
import './style.scss';

export enum ContentDetailCourse {
    INFO = 'INFO',
    CONTENT = 'CONTENT',
    STUDIENT = 'STUDIENT'
}

const ListContent = [
    {
        key: ContentDetailCourse.INFO,
        content: 'Thông tin'
    },
    {
        key: ContentDetailCourse.CONTENT,
        content: 'Nội dung'
    },
    {
        key: ContentDetailCourse.STUDIENT,
        content: 'Học sinh'
    },
]

const DetailCourse = () => {
    const { id } = useParams();
    const [contentTab, setContentTab] = useState<ContentDetailCourse>(ContentDetailCourse.INFO);

    const ComponentConent: Record<ContentDetailCourse, React.ReactElement> = {
        [ContentDetailCourse.INFO]: <InfoCourse idCourse={id} />,
        [ContentDetailCourse.CONTENT]: <Content />,
        [ContentDetailCourse.STUDIENT]: <>Học sinh</>
    }

    return (
        <div className="container-detail-course">
            <div className="overview-course">
                <div className="title">
                    <h3 className="title-course">Khóa học</h3>
                    <h4 className="breadcrumb"><span style={{ color: '#767278' }}>Khóa học &gt; </span> Chi tiết</h4>
                </div>
                <div className="container-overview">
                    <div className="intro-overview">
                        <div className="video-intro">
                            <video className="video" controls width="100%">
                                <source src='https://www.w3schools.com/tags/movie.mp4' />
                            </video>
                        </div>
                        <div className="overview">
                            <h3>Excel cơ bản</h3>
                            <h4>Tác giả: Ths. Trần Đăng Khoa</h4>
                            <div className="intro">
                                <ul className="list-tabs">
                                    {ListContent.map((item) => {
                                        return (
                                            <li key={item.key} className={`${contentTab === item.key ? 'actived' : null}`} onClick={() => {
                                                setContentTab(item.key)
                                            }}>{item.content}</li>
                                        )
                                    })}
                                </ul>

                            </div>
                        </div>
                    </div>
                    {ComponentConent[contentTab]}
                </div>
            </div>
            <div className="right-info-course">
                {contentTab === ContentDetailCourse.INFO && <Info />}
                {contentTab === ContentDetailCourse.CONTENT && <ContentInfoSource />}
            </div>
        </div>
    )
}



export default DetailCourse