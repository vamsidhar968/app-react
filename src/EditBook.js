import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useParams, useNavigate } from "react-router-dom";
import { API } from './global';



export function EditBook() {

  const [book, setBook] = useState(null); 
  const { bookid } = useParams();

  useEffect(() => {
    fetch(`${API}/Book/${bookid}`,{
      method: 'GET',
    })
    .then((response) => response.json())
    .then((bk) => {
    setBook(bk)})
  },[])
  return (
    <div>
     {book ? <EditBookSave book={book} /> : "loading..." }

    </div> 
  );
}


function EditBookSave({book}) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);
  const [trailer, setTrailer] = useState(book.trailer);
  const navigate = useNavigate();


  return  (
    <div className="aligning">
      <TextField id="outlined-basic" label="Name" variant="outlined"  value= {name} onChange={(event) => setName(event.target.value)} placeholder="enter the name" />
      <TextField id="outlined-basic" label="Poster" variant="outlined" value= {poster} onChange={(event) => setPoster(event.target.value)} placeholder="enter the Poster" />
      <TextField id="outlined-basic" label="Rating" variant="outlined" value= {rating} onChange={(event) => setRating(event.target.value)} placeholder="enter the Rating" />
      <TextField id="outlined-basic" label="Summary" variant="outlined" value= {summary} onChange={(event) => setSummary(event.target.value)} placeholder="enter the Summary" />
      <TextField id="outlined-basic" label="Trailer" variant="outlined" value= {trailer} onChange={(event) => setTrailer(event.target.value)} placeholder="enter the Trailer" />
      <Button variant="contained" onClick={() => {
        const updateBook = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer: trailer,
        };

        fetch(`${API}/Book/${book.id}`, {
          method: "PUT",
          body: JSON.stringify(updateBook),
          headers: {
            "content-type": "application/json"
          },
        }).then((response) => response.json())
          .then(() => navigate("/Book"));

      }}>Save</Button>
    </div>
  );
}
