import React from 'react';
import { Buttoncount } from "./Buttoncount";


export function First({details}) {
  
  return (
    <div className="first-container">
      <h1>{details.name}</h1>
      <img className="profile-pic" src={details.pic} alt={"Be happy " + details.name} />
      <Buttoncount />
    </div>
  );
}
