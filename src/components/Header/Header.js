import Particles from '../Particles/Particles';
import CountUp from '../CountUp/CountUp';
import RotatingText from '../RotatingText/RotatingText';
import SplitText from '../SplitText/SplitText';
import "./Header.css";
import React from 'react'


function Header() {
  return (
  <>
    <header className="header">
  <Particles
    particleColors={['#0000ff', '#0000ff']}
    particleCount={230}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={160}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
  />
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
    delay="100"
    textAlign="left"
    />

    </div>
    <div className="container">
    <div className="box1"
    style={{backgroundImage: "url('/6.jpg')"}}
    ></div>
    <div className="box2">
    <img src="/1.jpg" alt="" width="50px" />
    <p>@badhonraj</p>
    <a href="https://www.instagram.com/badhonbiswas.raj">
    <button>Follow</button>
    </a>
    </div>
    <div className="box3">
    <p>Followers</p>
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