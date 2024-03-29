import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { API } from './global';

export function AddNewBook() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
    <div className="aligning">
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} placeholder="enter the name" />
      <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} placeholder="enter the Poster" />
      <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} placeholder="enter the Rating" />
      <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} placeholder="enter the Summary" />
      <TextField id="outlined-basic" label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} placeholder="enter the Trailer" />
      <Button variant="contained" onClick={() => {
        const newBook = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer: trailer,
        };

        fetch(`${API}/Book`,{
          method: 'POST',
          body: JSON.stringify(newBook),
          headers: {
            "content-type": "application/json"
          },
        }).then((response) => response.json())
        .then(() => navigate("/Book"))
       
      }}>Add Book</Button>
    </div>
  );
}


