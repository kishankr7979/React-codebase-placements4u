import React from 'react'
import { LatestOpenings } from '../ComList/latestlist';
const Latest = () => {
        const st = {
            paddingLeft:"3em",
            paddingRight:"3em",
            marginTop:"3em"
    
        }
        return (
            <div>
                <Latestop />
                <div className="stock-container" style={st}>
                {LatestOpenings.map((data, key) => {
                    return(
                        <div key={key} style={{marginBottom:"3px"}}>
                       <FullTime
                       id = {data.id}
                       Company={data.Company}
                       Careers={data.Careers}
                       />
                        </div>
                    );
                })};
            </div>
            <Button1 />
            </div>
        );
    
}
const Latestop = () => {
    return (
        <header className="header">
            <h2 style={{textAlign:"center", marginLeft:"2em"}}>Latest Openings</h2>
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
            <td><a href={Careers} style={{color:"blue", textDecoration:"none"}} target="_blank">Apply!</a></td>

        </tr>
        </table>
               
    );

};
const Button1 = () => {
    const s1 = {
        height:"2.5em",
        width:"5em"
         }
    return (
        <div>
            <span style={{color:"black", fontWeight:"bold"}}>Please <a href="https://placements4u-login.herokuapp.com/" target="_blank"><button style={s1}>Login</button></a> to see all Openings</span>
        </div>
    );
}

export default Latest;
