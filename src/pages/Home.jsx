import React, { useEffect, useState } from 'react'

import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Youtube from '../components/contents/Youtube'
import VideoSlider from '../components/video/VideoSlider'
import { fetchFromAPI } from '../utils/api'


const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = "UCCInk1cYisZCc3PG4rAfPmQ";
        const v2 = "UCg53CHACi2XF28mSa3PbSbA";
        const v3 = "UCBkyj16n2snkRg1BAzpovXQ";
        const v4 = "UCzh4yY8rl38knH33XpNqXbQ";
        const v5 = "UChCqDNXQddSr0ncjs_78duA";

        const fetchResults = async () => {
            try {
                const videosData = await fetchFromAPI(`search?type=video&channelId=${v1}&part=snippet&order=date`);
                setChannelVideo(videosData.items);
                // console.log(videosData.items);

                const videosData2 = await fetchFromAPI(`search?type=video&channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videosData2.items);

                const videosData3 = await fetchFromAPI(`search?type=video&channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videosData3.items);

                const videosData4 = await fetchFromAPI(`search?type=video&channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videosData4.items);

                const videosData5 = await fetchFromAPI(`search?type=video&channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videosData5.items);

            } catch (error) {
                console.log("Error ->", error);
            }
        }
        fetchResults();
    }, [])

    return (
        <Main
            title="해루석 영상 모아보기 채널"
            description="루석 관련 영상을 모두 볼 수 있는 채널입니다."
        >
            <Today />
            <Youtube />

            <VideoSlider videos={channelVideo} title='루석 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo2} title='루숙 다시보기 최신 영상' name='v2' />
            <VideoSlider videos={channelVideo3} title='우왁굳의 게임방송 최신 영상' name='v3' />
            <VideoSlider videos={channelVideo4} title='왁타버스 WAKTAVERSE 최신 영상' name='v4' />
            <VideoSlider videos={channelVideo5} title='왁타버스 ZERO 최신 영상' name='v5' />
        </Main>
    )
}

export default Home