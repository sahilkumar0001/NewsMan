import React ,{useRef,useEffect} from 'react'
import '../App.css';
import {Link, useLocation} from 'react-router-dom'

import {  FaGithub, FaLinkedin} from 'react-icons/fa'
const Navbar = () => {
  const pathname = useLocation().pathname;
  let path;
  if (pathname==="/") {
    path="General"
  } else {
    path=`${pathname.charAt(1).toUpperCase()}${pathname.slice(2)}`
  }
  const navRef = useRef();
  useEffect(() => {
    navRef.current.click();
    console.log("hello");
  }, [])
  

  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" ref={navRef} >NewsMan</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {path}
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">General</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
          </ul>
        </li>
        
      </ul>
      <div className="footIcons">
      <a href="https://www.linkedin.com/in/sahilkumar-code/" target='_blank' rel='noreferrer' className='ln'><FaLinkedin/></a>
              <a href="https://github.com/sahilkumar0001" target='_blank'rel='noreferrer' className='gh' ><FaGithub/></a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;