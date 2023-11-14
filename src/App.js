import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Today from './pages/Today';
import Youtube from './pages/Youtube';
import Channel from './pages/Channel';
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
          <Route path="/today" element={<Today />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelId" element={<Channel />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
