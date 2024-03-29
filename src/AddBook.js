import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { Buttoncount } from './Buttoncount';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from './global';
import EditIcon from '@mui/icons-material/Edit';


export function AddBook({book , id , getBook }) {
  console.log(book,id);
  // const BOOK_LIST = 
  //   {
  //     name: "Charlotte's web",
  //     poster:
  //       "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
  //     rating: 8.8,
  //     summary:
  //       "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  //   }

  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const[deletebook, setDeletebook] = useState({})
  const [booklist, setBooklist] = useState([])

  const style1 = {
    color: book.rating > 8 ? "green" : "red"
  };
  // const styles = {
  //   display: show ? "block" : "none"
  // }

//   const getbooks = () => {
//     fetch(`${API}/Book`,{
//       method: 'GET',
//   })
//   .then((response) => response.json())
//   .then((bkdata) => {
//   setBooklist(bkdata)})
//   }


// useEffect(() => getbooks(), [])

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


      <IconButton onClick={()=>
      
        fetch(`${API}/Book/${book.id}`,{
          method: 'DELETE',
        })
        .then((response) => getBook())
     
      }>
      <DeleteIcon/>
      </IconButton>

      <IconButton aria-label="Edit" onClick={()=>navigate("/Book/edit/" + id)}>
      <EditIcon/>
      </IconButton>

     

    </div>
  );
}
