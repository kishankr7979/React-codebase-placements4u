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
            <h2>CSE/IT</h2>
        </header>
    );
};
const Intern = ({id, Company, Careers, Offcampus}) => {
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

export default intern
