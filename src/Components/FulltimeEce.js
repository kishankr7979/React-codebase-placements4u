import React from 'react'
import { FullTimeCore } from '../ComList/CoreEce';
import './Styles/intern.css';
import Services from './serviceCse';
import Startups from './startupCse';
import Eda from './EdaEce';

const Fulltimecse = () => {
    const st = {
        paddingLeft:"3em",
        paddingRight:"3em",
        marginTop:"3em"

    }
    
    return (
        <div>
            <Header />
                <ProductBased />
            <div className="stock-container" style={st}>
            {FullTimeCore.map((data, key) => {
                return(
                    <div key={key} style={{marginBottom:"3px"}}>
                    
                   <FullTime
                   id = {data.id}
                   Company={data.Company}
                   Careers={data.Careers}
                   Offcampus={data.Offcampus}
                   />
                    </div>
                );
            })};
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor:'skyblue'}}>
                            Service based
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" >
                        <div className="accordion-body"><Services /></div>
                    </div>
                </div>
                <br />
                <div className="accordion-item" >
                 <h2 className="accordion-header" id="flush-headingTwo" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{backgroundColor:'skyblue'}}>
                            Startups
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><Startups /></div>
                    </div>
                </div>
                <br />
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor:'skyblue'}}>
                            EDA's Companies
                        </button>
                        </h2>
                     <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><Eda /></div>
                    </div>
                </div>
        
        </div>

        </div>
    );
}
const Header = () => {
    return(
        <header className="header1">
            <h2>ECE/EEE</h2>
        </header>
    );
}
const ProductBased = () => {
    return (
        <header className="header">
            <h5 style={{textAlign:"left", marginLeft:"2em"}}>*Core Companies</h5>
        </header>
    );
};
const FullTime = ({id, Company, Careers, Offcampus}) => {
    if(!Company) return <div />;
    return(
        
        <table className="responstable">
    
        <tr>
        
            <td>{id}</td>
          <td>{Company}</td>
            
            <td>{Offcampus}</td>
            <td><a href={Careers} style={{color:"blue", textDecoration:"none"}} target="_blank">Apply!</a></td>

        </tr>
        </table>
               
    );

};


export default Fulltimecse

/*
<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
*/