import React from 'react';
import { First } from './First';
import {obj} from './App';

export function NamePic() {
  let persondetails = obj
  return (
    <div>
      {persondetails.map((value, index) => <First key={index} details={value} />)}

    </div>
  );
}
