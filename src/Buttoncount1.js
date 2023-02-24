import React, { useState } from 'react';

function Buttoncount1() {

  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>my fav color is {color}</h1>
      <button onClick={() => setColor("blue")}>blue</button>

      <button onClick={() => setColor("red")}>red</button>

      <button onClick={() => setColor("green")}>green</button>

      <button onClick={() => setColor("violet")}>violet</button>
    </div>
  );
}
