import React from 'react'
import { todayText } from '../data/today'

const Today = () => {
    return (
        <section id='todayPage'>
            {todayText.map((text, key) => (
                <div key={key} className="today__inner">
                    <div className="today__thumb"></div>
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
    )
}

export default Today