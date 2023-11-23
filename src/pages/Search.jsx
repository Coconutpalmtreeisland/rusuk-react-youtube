import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import Main from '../components/section/Main';
import VideoSearch from '../components/video/VideoSearch';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items])
                // console.log(data)
                setLoading(false);
            })
            .catch((error) => {
                // console.log("Error fetching data", error);
                setLoading(false);
            })
    }

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title="해루석 영상 검색"
            description="루석 관련 영상을 모두 볼 수 검색할 수 있는 페이지입니다."
        >
            <section id='searchPage'>
                <h2>💖<em>{searchId}</em> 검색 결과💖</h2>

                <div className={`video__inner ${searchPageClass}`}>
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    <button onClick={handleLoadMore}>더 보기</button>
                </div>

            </section>
        </Main>
    )
}

export default Search