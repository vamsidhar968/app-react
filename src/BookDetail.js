import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';

export function BookDetail({ bookList }) {
  const navigate = useNavigate();
  const { bookid } = useParams();
  let bookdetail = bookList[bookid];
  return (
    <div>
      <iframe width="100%" height="500px"
        src={bookdetail.trailer}
        title={bookdetail.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>

      <div className="Bookspec">
        <h2 className="BookTitle">{bookdetail.name}</h2>
        <span className="BookRating">⭐{bookdetail.rating}</span>
      </div>
      <p className="BookSummary">{bookdetail.summary}</p>

      <Button variant="contained" onClick={()=>navigate(-1)}>
        <ArrowBackIosIcon/> Back
      </Button>
    </div>
  );
}
