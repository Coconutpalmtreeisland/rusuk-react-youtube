import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Search = lazy(() => import('./pages/Search'));
const Video = lazy(() => import('./pages/Video'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="/video/:videoId" element={<Video />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
