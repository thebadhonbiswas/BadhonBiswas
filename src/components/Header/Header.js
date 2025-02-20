import Stack from '../Stack/Stack';
import "./Header.css";
import React from 'react'

function Header() {
  return (
  <>
    <header className="header">
    <div className="herotxt">
    <h1>Hi,<br/>I'm
    <span className="h"> Badhon</span><br/>
    Developer</h1>
    </div>
    <div className="container">
    <div className="box1">1</div>
    <div className="box2"></div>
    <div className="box3">3</div>
    </div>
    </header>
  </>
  )
}

export default Header;