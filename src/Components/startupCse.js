import React from 'react'
import { StartupCse } from '../ComList/startupCse';
import './Styles/intern.css';

const startupCse = () => {
    const st = {
        paddingLeft:"3em",
        paddingRight:"3em",
        marginTop:"3em"

    }
    return (
        <div>
            <Startups />
            <div className="stock-container" style={st}>
            {StartupCse.map((data, key) => {
                return(
                    <div key={key} style={{marginBottom:"3px"}}>
                   <Startup
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
const Startups = () => {
    return (
        <header className="header">
            <h5 style={{textAlign:"left", marginLeft:"2em"}}>*Startups Companies</h5>
        </header>
    );
};
const Startup = ({id, Company, Careers, Offcampus}) => {
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

export default startupCse;
