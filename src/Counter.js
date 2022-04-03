import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'; 
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


function Counter() {
        
    const [like, setLike]= useState(0);
    const [dislike, setdislike]= useState(0);
    const incrementLike =()=>{setLike(like +1)};
    return(
    <div className="counter-container">
        <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
      <IconButton className="likes-dislikes" 
      onClick={incrementLike}
      aria-lable="like"
      color="primary"
      >👍<Badge badgeContent={like} color="primary">
  
</Badge></IconButton>


      <IconButton 
      className="likes-dislikes"
      onClick={()=>{setdislike(dislike +1);}}
      aria-lable="dislike"
      color="error" 
       >
       👎<Badge badgeContent={dislike} color="error">
  
  </Badge></IconButton>
  
    </div>
    );
  }


 
  export {Counter }

// default import and export
// export default Counter;