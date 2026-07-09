import { useState } from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
   const  [ menuOpen , setMenuOpem  ]  = useState(false)
   return (
    <nav className ="navbar">
      <Link to ="/" className ="navbar-logo">
          <span> SkillPath <span className ="grafient-text">AI</span></span>
      </Link>
      <div className={`navbar-link $(menuOpen ? 'active' : "}`}>
        <NavLink to  = "/" className={({isActive}) => isActive ? 'navbar-link active' :'nav-link'}>Home</NavLink>
        <NavLink to = "/about" className ={({isActive}) => isActive ? 'navbar-link active' : 'nav-link'}>About</NavLink>

        <Link to ="/login" className ="nav-btn-login" >Login</Link>
        <Link to ="/register" className ="nav-btn-register" >register</Link>
      </div>
      <button className ="navbar-humburger" onClink={() => setMenuOpem (!menuOpen)}>{menuOpen ? 'X' :'E'}
      </button>

    </nav>

   )
}


export default Navbar;