import { IoIosBowtie } from 'react-icons/io'
import { FcLike } from 'react-icons/fc'
// import { FcOpenedFolder } from 'react-icons/fc'
import { FcStart } from 'react-icons/fc'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

export const menuText = [
    {
        title: "해루석 모아보기 홈",
        icon: <IoIosBowtie />,
        src: '/'
    },
    {
        title: "오늘의 추천 영상",
        icon: <FcLike />,
        src: '/today'
    },
    // {
    //     title: "해루석 모음",
    //     icon: <FcOpenedFolder />,
    //     src: '/file'
    // },
    {
        title: "관련 유튜브",
        icon: <FcStart />,
        src: '/youtube'
    }
]

export const keywordText = [
    {
        title: "루석",
        src: "/search/루석"
    },
    {
        title: "루숙 다시보기",
        src: "/search/루숙 다시보기"
    },
    {
        title: "왁타버스 WAKTAVERSE",
        src: "/search/왁타버스 WAKTAVERSE"
    },
    {
        title: "왁타버스 ZERO",
        src: "/search/왁타버스 ZERO"
    },
    {
        title: "우왁굳의 게임방송",
        src: "/search/우왁굳의 게임방송"
    },
    {
        title: "우왁굳의 돚거",
        src: "/search/우왁굳의 돚거"
    },
    {
        title: "비밀소녀",
        src: "/search/비밀소녀"
    },
    {
        title: "히키킹",
        src: "/search/히키킹"
    },
    {
        title: "권민",
        src: "/search/권민"
    },
    {
        title: "뢴트게늄",
        src: "/search/뢴트게늄"
    },
    {
        title: "비즈니스킴",
        src: "/search/비즈니스킴"
    },
    {
        title: "곽춘식",
        src: "/search/곽춘식"
    },
    {
        title: "김치만두번영택사스가",
        src: "/search/김치만두번영택사스가"
    },
    {
        title: "단답벌레",
        src: "/search/단답벌레"
    },
    {
        title: "왁파고",
        src: "/search/왁파고"
    },
    {
        title: "도파민 박사",
        src: "/search/도파민 박사"
    },
    {
        title: "풍신",
        src: "/search/풍신"
    },


]

export const snsText = [
    {
        title: "Github",
        src: "https://github.com/Coconutpalmtreeisland",
        icon: <AiFillGithub />
    }, {
        title: "Youtube",
        src: "https://www.youtube.com/@dear_stranger",
        icon: <AiFillYoutube />
    }, {
        title: "Instagram",
        src: "https://www.instagram.com/hyemin_246/",
        icon: <BsInstagram />
    }
]