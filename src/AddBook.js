import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { Buttoncount } from './Buttoncount';

export function AddBook({ book , id }) {
  // const BOOK_LIST = 
  //   {
  //     name: "Charlotte's web",
  //     poster:
  //       "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
  //     rating: 8.8,
  //     summary:
  //       "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  //   }

 
  const [show, setShow] = useState(true);

  const style1 = {
    color: book.rating > 8 ? "green" : "red"
  };
  // const styles = {
  //   display: show ? "block" : "none"
  // }
  return (
    <div className="Bookcontent">
      <img className="BookImage" src={book.poster} alt={book.name} />
      <div className="Bookspec">
        <h2 className="BookTitle">{book.name} - {id}</h2>
        <span style={style1} className="BookRating">⭐{book.rating}</span>
      </div>
      <IconButton aria-label="Info" onClick={()=>navigate("/Book/" + id)}>
      <InfoIcon/>
      </IconButton>

      <IconButton aria-label="Toggle" onClick={() => setShow(!show)}>
      {show ? < ExpandLessIcon/> : < ExpandMoreIcon/> }
      </IconButton>

      {show ? <p className="BookSummary">{book.summary}</p> : ""}
      {/* <p style={styles} className="BookSummary">{book.summary}</p> */}  
      <Buttoncount/>
    </div>
  );
}
