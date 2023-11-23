import React from 'react'
import { todayText } from '../data/today'

import Main from '../components/section/Main'
import { Link } from 'react-router-dom'

const Today = () => {
    return (
        <Main
            title="오늘의 추천 해루석"
            description="오늘의 추천 루석 관련 영상을 볼 수 있는 페이지입니다."
        >
            <section id='todayPage'>
                {todayText.map((text, key) => (
                    <div key={key} className="today__inner">
                        <div className="today__thumb play__icon">
                            <Link to={`/video/${text.videoId}`}>
                                <img src={text.img} alt={text.title} />
                            </Link>
                        </div>
                        <div className="today__text">
                            <span className='today'>오늘의 추천 영상</span>
                            <h3 className='title'>{text.title}</h3>
                            <p className='desc'>{text.desc}</p>
                            <div className="info">
                                <span className='author'>{text.author}</span>
                                <span className='data'>{text.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Today