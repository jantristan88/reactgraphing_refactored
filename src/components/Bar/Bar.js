import React, { Component } from "react";
import "./Bar.css";


const Bar = props => {
          const party = props.Party;
          const number = props.Number;
          const height = Math.round(number/5000000*100);

          const heightStyle = height + "%"; 

            return (<p className="bar" style={{height: heightStyle}}>{number}</p>)
        
};

export default Bar;



