import React from 'react'
import './Styles/Home.css';
import { Link, NavLink, BrowserRouter, Route, Router, Redirect} from 'react-router-dom'; 
import bna from '../Images/banner.png'
import Explore from './Explore';
const Home = () => {
    const st = {
        color:"teal",
        marginTop:"2em",
        textShadow: "1px 1px 1px grey"
    }
    return (
        <div className="modal-body row">
       
        <div className="col-md-6">
        <div className="banner">
            <h1>Are you ready to <br />apply??</h1>
            <p style={st}>List of all possible Firms/Comapnies which hires freshers for Full-time/intern roles through offcampus/Oncampus at a single platform</p>
            <div className="btn">
            
            <NavLink to="/explore" style={{textDecoration:"none", color:"black"}}> <div className="wrap">
            <button class="button">Explore</button>
            </div></NavLink>
            
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
