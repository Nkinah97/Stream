// import { useState } from 'react'

import './App.css'
import LoginBtn from './components/Login/LoginBtn'
import Header from './components/Header/Header'
import SwipeImg from './components/SwipeImg/SwipeImg'
import About from './components/About/About'
import JoinUs from './components/JoinUs/JoinUs'
import Find from './components/Find/Find'
import Communication from './components/Communication/Communication'
import Dedicated from './components/Dedicated/Dedicated'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="container">
      <LoginBtn />
      <div className="mobileOnly">
        <div className="dedicatedRightMobile">
          <Dedicated showOnlyRight={true} />
        </div>
      </div>
      <Header />
      <SwipeImg />
      <About />
      <JoinUs />
      <Find />
      <Communication />
      <div className="desktopOnly">
        <Dedicated />
      </div>
      <Footer />
    </div>
  )
}

export default App
