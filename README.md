# 해루석 영상을 모아보기 위한 유튜브 사이트 만들기
유튜브 API를 이용해서 해루석의 노래, 시참, 나레이션, 상황극, 생방송 등 해루석 활동 관련 사이트를 만들었습니다. 해루석 영상이 유튜브에 이곳저곳 흩어져있어서 편하게 보기 위해 만들었습니다.

## 플러그인 설치
- react-router-dom, axios, react-icons, react-player, sass, react-helmet-async, swiper 설치(*한 번에 적을 수 있음): `npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper`

<details>
    <summary>react-icons</summary>

    사이트 타이틀 옆 svg 로고를 사용하기 위해 설치
</details>

## App.js
<details>
    <summary>App.js 설정</summary>

    import React from 'react'
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Home from './pages/Home'
    import Header from './components/section/Header';
    import Main from './components/section/Main';
    import Footer from './components/section/Footer';

    const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <Main>
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
        </Main>
        <Footer />
        </BrowserRouter>
    )
    }

    export default App
</details>
