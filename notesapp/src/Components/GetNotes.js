import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export default function GetNotes() {
  const [NotesData, setNotesData] = useState([]);


  function GetListNotes(){
    axios
      .get("http://127.0.0.1:8000/Notes/ListNotes/")
      .then((responce) => {
        setNotesData(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    GetListNotes()
  }, []);

  const HandleDelete=((id)=>{   
    axios.delete(`http://127.0.0.1:8000/Notes/DeleteNotes/${id}`)
 
    .then(()=>{
        GetListNotes()
    })
    .catch((error)=>{
        console.log(error)
    })
  })

  const SetLocalStorage=(id,title,note)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("title",title);
    localStorage.setItem("note",note)
  }

  return (
    <div className="row">
      <h1 className="text-dark alert-info text-center mt-1">
        LIST OF ALL NOTES
      </h1>
      <div className="col-sm-2">
      <Link to='/CreateNotes'><button className="btn btn-primary">ADD NOTE</button></Link>
      </div>
      <div className="col-sm-10">

      {NotesData.map((NotesList, index) => {
        const { id,title, note, date } = NotesList;
        return (
         
            <div className="jumbotron bg-warning p-2 mt-1 border border-dark border-2 shadow-lg rounded" key={index}>
              <h2 className="text-dark">{title}</h2>
              <hr />
              <p style={{ fontFamily: "calibri" }}>{note}</p> 
              <button className="btn btn-dark btn-sm" onClick={()=>{if(window.confirm('Are you sure to delete...?')) HandleDelete(id) }}>Delete</button>
              <Link to='/UpdateNotes'><button className="btn btn-danger ms-1 btn-sm" onClick={()=>SetLocalStorage(id,title,note)}>Edit</button></Link>
              <i className="offset-8">
                added on - <small>{date}</small>
              </i>
            </div>
          
        );
      })}
      </div>
    </div>
  );
}
