import { Button } from '@mui/material';
import React, { useState } from 'react';

export function BasicForm() {
  const [username, setUsername] = useState("Vamsi")
  const [password, setPassword] = useState("itsjghegsh@123")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username+"," + password)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} ></input>
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
      {/* <Button onClick={() => console.log(username)}>submit</Button> */}
      <button type="submit">Submit</button>
      </form>
  );
}
