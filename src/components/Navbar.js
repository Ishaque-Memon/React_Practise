import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  
//   const[btnText, setbtnText] = useState('')
  
// let Mode = () =>{
  
// if(props.mode === 'light')
// {
//   setbtnText('Dark Mode')
// }else{
//   setbtnText('Light Mode')
// }

// }

  


  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.navComponent1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.navComponent2}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  <div className= {`form-check form-switch text-${props.mode === 'light'?'dark' : 'light'} mx-2`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
  </div>
  </div>
  
  </nav>
   



  </>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
  navComponent1: PropTypes.string,
  // Mode: PropTypes.bool
  
}

//Using of defaultProps. How they actually works! 
Navbar.defaultProps = {
  navComponent2: 'About us'
}

