import React from 'react'
import { Link } from 'react-router-dom'
import { youtubeText } from '../data/youtube'

const Youtube = () => {
    return (
        <section id='youtube'>
            <h2>🍷 해루석 관련 유튜브 모음</h2>
            <div className="youtube__inner">
                {youtubeText.map((text, key) => (
                    <div key={key} className="youtube play__icon">
                        <div className="youtube__img">
                            <Link to={`/channel/${text.channelId}`}>
                                <img src={text.img} alt={text.title} />
                            </Link>
                        </div>
                        <div className="youtube__info">{text.title}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Youtube