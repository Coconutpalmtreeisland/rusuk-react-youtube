import React from 'react'
import { youtubeText } from '../../data/youtube'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const Youtube = () => {
    return (
        <section id='youtube'>
            <h2>🍷 해루석 관련 유튜브 모음</h2>
            <div className="youtube__inner nobottom">
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        400: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        },
                        1600: {
                            slidesPerView: 7,
                            spaceBetween: 20
                        }
                    }}
                >
                    {youtubeText.map((text, key) => (
                        <SwiperSlide key={key} className="youtube play__icon">
                            <div className="youtube__img">
                                <Link to={`/channel/${text.channelId}`}>
                                    <img src={text.img} alt={text.title} />
                                </Link>
                            </div>
                            <div className="youtube__info">{text.title}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Youtube