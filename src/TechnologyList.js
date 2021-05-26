import React from 'react';
import './TechnologyList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function Technologylist(props){
    const technologies = props.technologies;
    const technologyList = technologies.map(technology =>
   {
       return <div className="list" key={technology.key}>
     <p>
         <input type="text" id={technology.key} value={technology.text} onChange={(e)=>{
             props.updateTechnology(technology.key, e.target.value)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteTechnology(technology.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    return <div>
        
    
    </div>;
  }

  export default Technologylist;