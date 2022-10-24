import React, { useEffect, useReducer } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { Obj } from '../../global/interface';
import { ReactComponent as DropdownArrow } from '../../assets/svg/DropdownArrow.svg';
import { ReactComponent as Filters } from '../../assets/svg/Filters.svg';
import { ReactComponent as ShapeCube } from '../../assets/svg/ShapeCube.svg';
import { ReactComponent as TimeRange } from '../../assets/svg/TimeRange.svg';
import { Excel } from '../../assets/img';
import { Lock } from '../../assets/img';
import { UnLock } from '../../assets/img';
import './style.scss';


interface TypeDataCourses {
  id: number;
  name: string;
  img: React.ReactElement;
  summary: string;
  time: string;
  status: boolean
}
const initFieldsFilter = {
  sortBy: 'Popular',
  courses: 'Courses',
  category: 'Category'
}
const mockupDataCourses: Array<TypeDataCourses> = [
  {
    id: 1,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
  {
    id: 2,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: false
  },
  {
    id: 3,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
  {
    id: 4,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
  {
    id: 5,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: false
  },
  {
    id: 6,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
  {
    id: 7,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: false
  },
  {
    id: 8,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
  {
    id: 9,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
  {
    id: 10,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
  {
    id: 11,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
  {
    id: 12,
    name: 'Excel',
    img: <Excel />,
    summary: 'Excel cơ bản',
    time: '15 lessons (10h5m)',
    status: true
  },
]
const reducerFilter = (filter: Obj, action: { type: string, payload: string }) => {
  switch (action.type) {
    case 'SortBy':
      return {
        ...filter,
        sortBy: action.payload
      }
    case 'Courses':
      return {
        ...filter,
        courses: action.payload
      }
    case 'Category':
      return {
        ...filter,
        category: action.payload
      }
    default:
      return filter
  }
}
export const Cources = () => {
  const [filter, dispatch] = useReducer(reducerFilter, initFieldsFilter);
  useEffect(() => {
    document.title = 'Khóa học'
  }, [])
  const menuSortBy = (
    <Menu
      items={[
        {
          label: <span>Popular</span>,
          key: '1',
          onClick: (e) => {
            dispatch({
              type: 'SortBy',
              payload: (e.key === '1' ? 'Popular' : '')
            })
          }
        },
        {
          label: <span>Basic</span>,
          key: '2',
          onClick: (e) => {
            dispatch({
              type: 'SortBy',
              payload: (e.key === '2' ? 'Basic' : '')
            })
          }
        },
        {
          label: <span>Hard</span>,
          key: '3',
          onClick: (e) => {
            dispatch({
              type: 'SortBy',
              payload: (e.key === '3' ? 'Hard' : '')
            })
          }
        },

      ]}
    />
  );
  const menuCourses = (
    <Menu
      items={[
        {
          label: <span>Courses</span>,
          key: '1',
          onClick: (e) => {
            dispatch({
              type: 'Courses',
              payload: (e.key === '1' ? 'Courses' : '')
            })
          }
        },
        {
          label: <span>Scratch</span>,
          key: '2',
          onClick: (e) => {
            dispatch({
              type: 'Courses',
              payload: (e.key === '2' ? 'Scratch' : '')
            })
          }
        },
        {
          label: <span>Word</span>,
          key: '3',
          onClick: (e) => {
            dispatch({
              type: 'Courses',
              payload: (e.key === '3' ? 'Word' : '')
            })
          }
        },
        {
          label: <span>Excel</span>,
          key: '4',
          onClick: (e) => {
            dispatch({
              type: 'Courses',
              payload: (e.key === '4' ? 'Excel' : '')
            })
          }
        },

      ]}
    />
  );
  const menuCategory = (
    <Menu
      items={[
        {
          label: <span>All Category</span>,
          key: '1',
          onClick: (e) => {
            dispatch({
              type: 'Category',
              payload: (e.key === '1' ? 'All Category' : '')
            })
          }
        },
        {
          label: <span>For Word</span>,
          key: '2',
          onClick: (e) => {
            dispatch({
              type: 'Category',
              payload: (e.key === '2' ? 'For Word' : '')
            })
          }
        },
        {
          label: <span>For Sratch</span>,
          key: '3',
          onClick: (e) => {
            dispatch({
              type: 'Category',
              payload: (e.key === '3' ? 'For Sratch' : '')
            })
          }
        },
        {
          label: <span>For Excel</span>,
          key: '4',
          onClick: (e) => {
            dispatch({
              type: 'Courses',
              payload: (e.key === '4' ? 'For Excel' : '')
            })
          }
        },

      ]}
    />
  );
  return (
    <div className="container-courses">
      <div className="top-container">
        <div className="title">
          <h3>Khoá học</h3>
        </div>
        <div className="filter">
          <div className="fields">
            <div className="field sort-by">
              <strong>Sort by:</strong>
              <Dropdown overlay={menuSortBy} trigger={['click']}>
                <Space style={{ cursor: 'pointer' }} >
                  <span style={{ color: '#767278', fontWeight: 400 }}>
                    {filter.sortBy}
                  </span>
                  <DropdownArrow />
                </Space>
              </Dropdown>
            </div>
            <div className="field by-courses">
              <Dropdown overlay={menuCourses} trigger={['click']}>
                <Space style={{ cursor: 'pointer' }} >
                  <span style={{ color: '#767278', fontWeight: 400 }}>
                    {filter.courses}
                  </span>
                  <DropdownArrow />
                </Space>
              </Dropdown>
            </div>
            <div className="field category">
              <strong>Category:</strong>
              <Dropdown overlay={menuCategory} trigger={['click']}>
                <Space style={{ cursor: 'pointer' }} >
                  <span style={{ color: '#767278', fontWeight: 400 }}>
                    {filter.category}
                  </span>
                  <DropdownArrow />
                </Space>
              </Dropdown>
            </div>
          </div>
          <div className="accept-filter">
            <button className="btn"><Filters /> Filters</button>
            <button className="btn"><ShapeCube /></button>
          </div>
        </div>
      </div>
      <div className="main-courses">
        {mockupDataCourses.map((item, index) => {
          return (
            <div className={`item-course cell${index + 1}`}>
              <div className="img-title">
                <span className="span title">{item.name}</span>
                <img src={Excel} alt="subj" className="img-subj" />
              </div>
              <div className="summary">
                <span className="span name-subj">{item.summary}</span>
                <div className="footer">
                  <div className="time">
                    <TimeRange className="icon" />
                    <span className="time">{item.time}</span>
                  </div>
                  {item.status === true ? <img src={UnLock} alt="UnLock" /> : <img src={Lock} alt="Lock" />}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
