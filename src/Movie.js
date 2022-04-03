import React, { useState } from 'react';
import { Counter } from "./Counter.js";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {Card,  CardContent,  Icon, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import CardContent from '@mui/material/CardContent';  // allready import above
// import Card from '@mui/material/Card';  // allready import above





export function Movie({ Name, Rating, Summary, Poster }) {
  const [show, setShow] = useState(true);
  const styles = { color: Rating > 8 ? "green" : "red", fontWeight: "bold" };
  // const summaryStyles={display: show ? "block" : "none",};
  return (
    <Card className="movie-container">
    
      <img
        className="movie-poster"
        src={Poster}
        alt={Name} />
        <CardContent>
      <div className="movie-spece"><h3 className="movie-name">{Name}<IconButton 
      onClick={() => setShow(!show)} className="movie-show-button"
      aria-label="show">
     {show ? <ExpandLessIcon/>:<ExpandMoreIcon/>}
      </IconButton></h3>
        <p className="movie-rating" style={styles}>⭐{Rating}</p>
      </div>
      
     
      {/* Conditional rendeing */}
      {show ? <p className="movie-summary">{Summary}</p> : ""}

      {/* <p style={summaryStyles} className="movie-summary">{Summary}</p> */}
      <Counter />
      </CardContent>
      </Card>
   
  );
}
