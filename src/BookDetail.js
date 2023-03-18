import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import { API } from './global';

export function BookDetail() {
  const navigate = useNavigate();
  const { bookid } = useParams();
  const [book,setBook] = useState({});
  // let bookdetail = bookList[bookid];
  useEffect(() => {
    fetch(`${API}/${bookid}`,{
      method: 'GET',
    })
    .then((response) => response.json())
    .then((bk) => {
    setBook(bk)})
  },[])
  return (
    <div>
      <iframe width="100%" height="500px"
        src={book.trailer}
        title={book.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>

      <div className="Bookspec">
        <h2 className="BookTitle">{book.name}</h2>
        <span className="BookRating">⭐{book.rating}</span>
      </div>
      <p className="BookSummary">{book.summary}</p>

      <Button variant="contained" onClick={()=>navigate(-1)}>
        <ArrowBackIosIcon/> Back
      </Button>
    </div>
  );
}
