import React from 'react';
import { Link, NavLink} from 'react-router-dom'; 
import logo2 from '../Images/logo.png';
const Nav = () => {
    const style2 = {
        axHeight: "150px",
        maxWidth: "150px",
        width: "200px",
        height: "80px"
    }
    const style3 = {
        color:"black"
    }
    return (
        <div className="Nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent" >
      <div class="container-fluid">
        <NavLink class="navbar-brand" to="/"><img src={logo2} style={style2}/></NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginRight:"4px"}}>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link active color" aria-current="page" to="/" style={style3}>Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="/about" style={style3}>About</Link>
            </li>
           
            <li class="nav-item dropdown" style={style3}>
              <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={style3}>
                IT
              </NavLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/internshipCse">Internships</Link></li>
                <li><Link class="dropdown-item" to='/fulltimeCse'>Full-time</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown" style={style3}>
              <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={style3}>
                Circuital
              </NavLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/internshipsEce">Internships</Link></li>
                <li><Link class="dropdown-item" to="/fulltimeEce">Full-time</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="/latest-openings" style={style3}>Latest Openings</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://placements4u-login.herokuapp.com/" style={style3} target="_blank">Login</a>
            </li>
    
          </ul>
        </div>
      </div>
    </nav>
    
    </div>
    );
}

export default Nav
