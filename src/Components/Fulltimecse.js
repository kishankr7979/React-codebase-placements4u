import React from 'react'
import { FullTimeProduct } from '../ComList/fulltimeCse';
import './Styles/intern.css';
import Services from './serviceCse';
import Startups from './startupCse';

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
            {FullTimeProduct.map((data, key) => {
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
        
        </div>

        </div>
    );
}
const Header = () => {
    return(
        <header className="header1">
            <h2>CSE/IT</h2>
        </header>
    );
}
const ProductBased = () => {
    return (
        <header className="header">
            <h5 style={{textAlign:"left", marginLeft:"2em"}}>*Product Based Companies</h5>
        </header>
    );
};
const FullTime = ({id, Company, Careers, Offcampus}) => {
    if(!Company) return <div />;
    return(
        
        <table class="responstable">
    
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
