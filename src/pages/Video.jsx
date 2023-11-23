import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

import { FaRegEye } from 'react-icons/fa'
import { FaRegThumbsUp } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

import Main from '../components/section/Main';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet, statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0])
            });

        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
            .then((data) => {
                console.log(data);
                setComments(data.items);
            });
    }, [videoId])

    return (
        <Main
            title="해루석 영상 보기"
            description="루석 관련 영상을 볼 수 있는 페이지입니다."
        >
            <section id='viedeoPage'>
                <h2>비디오</h2>
                {videoDetail && (
                    <div className="video__view">
                        <div className="video__play">
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width="100%"
                                height="100%"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)"
                                }}
                            />
                        </div>
                        <div className="video__info">
                            <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                            <div className="video__channel">
                                <div className="id">
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`} className='author'>
                                        {videoDetail.snippet.channelTitle}
                                    </Link>
                                </div>
                                <div className="count">
                                    <span className="view"><FaRegEye />{videoDetail.statistics.viewCount}</span>
                                    <span className="like"><FaRegThumbsUp />{videoDetail.statistics.likeCount}</span>
                                    <span className="comment"><BiCommentDetail />{videoDetail.statistics.commentCount}</span>
                                </div>
                            </div>
                            <div className="video__desc">
                                {videoDetail.snippet.description}
                            </div>
                            <div className='comments'>댓글
                                {comments.map((comment, key) => (
                                    <div className="comment__all" key={key}>
                                        <div className="comment__nickname">
                                            {comment.snippet.topLevelComment.snippet.authorDisplayName}
                                        </div>
                                        <div className="comment__cont">
                                            {comment.snippet.topLevelComment.snippet.textOriginal}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Video