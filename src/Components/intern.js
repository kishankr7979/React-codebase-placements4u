import React from 'react'
import { internData } from '../ComList/internList';
import './Styles/intern.css';
const intern = () => {
    const st = {
        paddingLeft:"3em",
        paddingRight:"3em",
        marginTop:"3em"

    }
    return (
        <div>
        <HomePageHeader />
            <div className="stock-container" style={st}>
            {internData.map((data, key) => {
                return(
                    <div key={key} style={{marginBottom:"3px"}}>
                   <Intern
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
    );
};

const HomePageHeader = () => {
    return (
        <header className="header">
            <h2>CSE/IT/ECE</h2>
        </header>
    );
};
const Intern = ({id, Company, Careers, Offcampus}) => {
    if(!Company) return <div />;
    return(
        
        <table class="responstable">
    
         <tr>
        
            <td style={{textAlign:"left"}}>{id}</td>
          <td style={{textAlign:"left"}}>{Company}</td>
            
            <td style={{textAlign:"left"}}>{Offcampus}</td>
            <td><a href={Careers} style={{color:"blue", textDecoration:"none", textAlign:"right"}}>Apply!</a></td>

        </tr>
        </table>
               
    );

};

export default intern
