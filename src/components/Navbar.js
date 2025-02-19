import './Navbar.css'
import logo from '../logo.svg';

function Nav() {

 const navsvg = 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
  <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
</svg>;


  return (
  <>
    <nav>
      <img src={logo} alt="navlogo" />
      <div className="menubar">{navsvg}</div>
     <div className="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  </>
  )
}

export default Nav;