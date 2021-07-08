import React from 'react'
import logo from '../Images/banner.png';
import './Styles/About.css';
import pic from '../Images/my.jpeg';
import Uday from '../Images/uday.jpeg';
import { SocialIcon } from 'react-social-icons';
import { slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  slideInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInRight, 'bounce')
  }
}
const About = () => {
    return (
<div className="abt">
            <h1>What We Do ? </h1>
            <div className="sub">
                <p>We pledge to provide correct information regarding the Fresher/Student Recruitment.<br />
                At <span style={{color:"black", fontWeight:"bolder"}}>Placements4u</span>, We'll provide you the list of all possible companies which provides full-time/Intern offer across all domains.

                <br />
                <br />Every possible solution at a single platform</p>
            </div>
            <br />
            <br />
            <br />
            <div class="container">
  <div class="card__container">
    <div class="card">
      <div class="card__content">
        <h3 class="card__header">We are Trusted</h3>
        <p class="card__info">We will verify the Authenticity of the company then suggest you the same.</p>
        
      </div>
    </div>
    <div class="card">
      <div class="card__content">
        <h3 class="card__header">We are Professional</h3>
        <p class="card__info">Active linkedIn user having Adequate connection to the Industry.</p>
       
      </div>
    </div>
    <div class="card">
      <div class="card__content">
        <h3 class="card__header">Expert's Choice</h3>
        <p class="card__info">Choices given by the industry experts of respected domains.</p>
       
         </div>
    </div>
            </div>
        </div>
        <div>
        </div>
        <br />
        <br />
        <h3>The Developer's</h3>
      <div className="dev">
       
        <div className="a1">
        <div className="img" >
            <img src={pic} className="image" />
            <div className="overlay">
                <div className="text"><b>Kishan K.</b><br />
        Founder cum Engineer at Placements4u</div>
            </div>
            
        </div>
       
        
        <div className="social">
        <SocialIcon url="https://www.linkedin.com/in/kishan-k-12052a168/" network="linkedin" />
        <SocialIcon url="https://github.com/kishankr7979" network="github" style={{marginLeft:"4px"}}/>
        <SocialIcon url="https://twitter.com/Krkishan11" network="twitter" style={{marginLeft:"4px"}}/>
      </div>
      </div>
      <div className="a1">
        <div className="img" >
            <img src={Uday} className="image" style={{height:"350px", width:"250px"}}/>
            <div className="overlay">
                <div className="text"><b>Uday K.Singh</b><br />
        Engineer at Placements4u</div>
            </div>
        </div>
      <div>
        <SocialIcon url="https://www.linkedin.com/in/uday-singh-090762195/" network="linkedin" />
        <SocialIcon url="https://github.com/uday4312" network="github" style={{marginLeft:"4px"}}/>
        <SocialIcon url="#" network="twitter" style={{marginLeft:"4px"}}/>
      </div>
        </div>

      </div>
</div>

    );
}

export default About
