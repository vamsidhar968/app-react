import React, { useState } from 'react';
import { Colorbox } from './Colorbox';

export function Changecolor() {
  const [colour, setColour] = useState("blue");
  // let colorList = ["red","green","yellow"]
  const [colorList, setColorList] = useState(["red", "green", "yellow"]);
  console.log(colorList);
  const styles = {
    height: "70px",
    width: "500px",
    fontSize: "50px",
    backgroundColor: colour
  };
  return (
    <div>
      <div className="align">
        <input onChange={(event) => setColour(event.target.value)}
          style={styles} type="text" value={colour} />
        {/* copy colorlist and adding new color to it
            i.e arr = ["red","green","yellow"]
                newarr = [...arr,"skyblue"]
            */}
        <button className='btnf' onClick={() => setColorList([...colorList, colour])}>Add Color</button>
      </div>
      {colorList.map((colorofarr, index) => <Colorbox key ={index} clrname={colorofarr} />)}
    </div>
  );
}
