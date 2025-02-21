import CountUp from '../CountUp/CountUp';
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
    <div className="box2">
    <img src="https://pub-e0de7afcc8184ea3870ae54d7fd21b62.r2.dev/1.jpg" alt="" width="50px" />
    <p>@badhonraj</p>
    <a href="https://www.instagram.com/badhonbiswas.raj">
    <button>Follow</button>
    </a>
    </div>
    <div className="box3">
    <h3>Followers</h3>
    <CountUp
    from={0}
    to={10000}
    separator=","
    direction="up"
    duration={0.7}
    className="count-up-text"
    />

    </div>
    </div>
    </header>
  </>
  )
}

export default Header;