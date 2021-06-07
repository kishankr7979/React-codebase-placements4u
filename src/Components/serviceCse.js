import React from 'react'
import { FullTimeProduct } from '../ComList/fulltimeCse';
import './Styles/intern.css';

const serviceCse = () => {
    const st = {
        paddingLeft:"3em",
        paddingRight:"3em",
        marginTop:"3em"

    }
    return (
        <div>
            <ServiceBased />
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
        </div>
    )
}
const ServiceBased = () => {
    return (
        <header className="header">
            <h5 style={{textAlign:"left", marginLeft:"2em"}}>*Services Based Companies</h5>
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
            <td><a href="https://www.google.com/careers" style={{color:"blue", textDecoration:"none"}}>{Careers}</a></td>
            <td>{Offcampus}</td>

        </tr>
        </table>
               
    );

};

export default serviceCse;
