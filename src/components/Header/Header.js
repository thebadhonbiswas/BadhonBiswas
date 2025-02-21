import RotatingText from '../RotatingText/RotatingText';
import SplitText from '../SplitText/SplitText';
import "./Header.css";
import React from 'react'

function Header() {
  return (
  <>
    <header className="header">
    <div className="herotxt">
    <h1>Hi,<br/>I'm
    <span className="h"> Badhon</span><br/>
    <RotatingText
    texts={['Developer', 'UI Designer', 'Editor', 'Creator']}
    staggerDuration={0.1} 
    rotationInterval={4000} />
    </h1>
    <SplitText 
    text="Innovating responsive web solutions."
    delay="70"
    textAlign="left"
    />

    </div>
    <div className="container">
    <div className="box1"></div>
    <div className="box2"></div>
    <div className="box3"></div>
    </div>
    </header>
  </>
  )
}

export default Header;