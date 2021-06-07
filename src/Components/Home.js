import React from 'react'
import './Styles/Home.css';
import { Link, NavLink, BrowserRouter, Route, Router, Redirect} from 'react-router-dom'; 
import bna from '../Images/banner.png'
import Explore from './Explore';
const Home = () => {
    return (
        <div className="modal-body row">
       
        <div className="col-md-6">
        <div className="banner">
            <h1>Are you ready to <br />apply??</h1>
            <div className="btn">
            
            <NavLink to="/explore" style={{textDecoration:"none", color:"black"}}> <button type="button" class="btn btn-outline-primary">Explore</button></NavLink>
            
        </div>
        </div>
        </div>
        <div className="col-md-6">
        <div className="bn-img">
        <img src={bna} />
        </div>
        </div>
        </div>
    )
}

export default Home
