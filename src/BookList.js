import React, { useState, useEffect } from 'react';
import { AddBook } from './AddBook';
import { API } from './global';


export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  
  // const[name,setName] = useState("")
  // const[poster,setPoster] = useState("")
  // const[rating,setRating] = useState("")
  // const[summary,setSummary] = useState("")
  // const[trailer,setTrailer] = useState("")
  console.log(`${API}`)
  const[booklist, setBooklist] = useState([])
  // useEffect(() => {
  //   fetch(`${API}/Book`,{
  //       method: 'GET',
  //   })
  //   .then((response) => response.json())
  //   .then((bkdata) => {
  //   setBookList(bkdata)})
  // },[])
  const getbooks = () => {
    fetch(`${API}/Book`,{
      method: 'GET',
  })
  .then((response) => response.json())
  .then((bkdata) => {
  setBooklist(bkdata)})
  }


useEffect(() => getbooks(), [])
  
  return (
    <div className="aligning">
      {/* <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} placeholder="enter the name"/>
      <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} placeholder="enter the Poster" />
      <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} placeholder="enter the Rating"/>
      <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} placeholder="enter the Summary"/>
      <TextField id="outlined-basic" label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} placeholder="enter the Trailer"/>    
      <Button variant="contained" onClick={() =>{
        const newBook = {
           name: name,
           poster: poster,
           rating: rating,
           summary: summary,  
           trailer: trailer,       
        }
        setBookList([...bookList,newBook])}}>Add Book</Button> */}
    <div className="BookList1">
      {booklist.map((bk, index) => <AddBook key12={index} book={bk} id={bk.id} getBook = {getbooks}/>)}
    </div>
   </div>
  );
}
