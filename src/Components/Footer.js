import React from 'react'
import { Link, NavLink} from 'react-router-dom'; 
import './Styles/Footer.css';


const Footer = () => {
    return (
        <div className="ft">
         <footer className="page-footer font-medium">


        <div className="footer-copyright text-center py-3" style={{backgroundColor:"#c3e7fd", marginTop:"1em"}}>© Designed and Developed with &#9829; | <Link to="/" >Placements4u</Link>
        </div>

       
    </footer>
    </div>
    )
}

export default Footer
