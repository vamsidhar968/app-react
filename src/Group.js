import React from 'react';

function Group(props) {
  return (
    <div>
      <article> hy guys I am {props.name}
        <br></br> look ath this below pic <br></br>
        <img src={props.pic} alt={props.name + "this ia a pic"} /> </article>
    </div>
  );
}
