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
        <Services />
        <Startups />

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
