import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import { BsPersonHearts } from 'react-icons/bs'
import { BiSolidVideos } from 'react-icons/bi'
import { FaRegEye } from 'react-icons/fa'

import VideoSearch from '../components/video/VideoSearch';
import Main from '../components/section/Main';

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?type=video&part=snippet&id=${channelId}`);
                // console.log(data);
                setChannelDetail(data.items[0]);

                const videoData = await fetchFromAPI(`search?type=video&channelId=${channelId}&part=snippet&order=date`)
                // console.log(videoData);
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
            } catch (error) {
                console.log("Error ->", error);
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [channelId])

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title="해루석 관련 채널"
            description="루석 관련 채널 페이지입니다."
        >
            <section id='channelPage' className={channelPageClass}>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div className="channel__header" style={{
                            backgroundImage: channelDetail && channelDetail.brandingSettings && channelDetail.brandingSettings.image && channelDetail.brandingSettings.image.bannerExternalUrl
                                ? `url(${channelDetail.brandingSettings.image.bannerExternalUrl})`
                                : 'black'
                        }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className="channel__info">
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span><BsPersonHearts />{channelDetail.statistics.subscriberCount}</span>
                                <span><BiSolidVideos />{channelDetail.statistics.videoCount}</span>
                                <span><FaRegEye />{channelDetail.statistics.viewCount}</span>
                            </div>
                        </div>
                        <div className='channel__video video__inner'>
                            <VideoSearch videos={channelVideo} showInfo={false} />
                        </div>
                        <div className="channel__more">
                            {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Channel