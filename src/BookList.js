import React, { useState } from 'react';
import { AddBook } from './AddBook';
import { INITIAL_BOOK_LIST } from './App';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const[bookList, setBookList] = useState(INITIAL_BOOK_LIST)
  const[name,setName] = useState("")
  const[poster,setPoster] = useState("")
  const[rating,setRating] = useState("")
  const[summary,setSummary] = useState("")
  return (
    <div className="aligning">
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} placeholder="enter the name"/>
      <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} placeholder="enter the Poster" />
      <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} placeholder="enter the Rating"/>
      <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} placeholder="enter the Summary"/>   
      <Button variant="contained" onClick={() =>{
        const newBook = {
           name: name,
           poster: poster,
           rating: rating,
           summary: summary,         
        }
        setBookList([...bookList,newBook])}}>Add Book</Button>
    <div className="BookList">
      {bookList.map((bookdetails, index) => <AddBook key={index} book={bookdetails} id={index}/>)}
    </div>
    </div>
  );
}