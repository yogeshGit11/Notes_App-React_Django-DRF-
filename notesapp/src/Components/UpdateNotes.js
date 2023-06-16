import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function UpdateNotes() {

    const navigate=useNavigate()
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setTitle(localStorage.getItem("title"));
        setNote(localStorage.getItem("note"))
    }, []);

    const HandleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://127.0.0.1:8000/Notes/UpdateNotes/${id}`,{
            id,
            title,
            note
        })
        .then(()=>{
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className='row'>
        <h1 className='text-dark bg-warning text-center mt-1'>EDIT NOTE</h1>
      <div className="col-sm-10 offset-1">
        <form className='form-class alert-dark p-3 border border-2 border-dark' onSubmit={HandleSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={title} placeholder='Enter The Title' onChange={(e)=>setTitle(e.target.value)} className='form-control'/>  <br />
            
            <label>Note:</label>
            <textarea name="note" cols="30" rows="10" value={note} placeholder='Write Your Note...' onChange={(e)=>setNote(e.target.value)} className='form-control' />

            <input type="submit" value="UPDATE" className='btn btn-danger mt-1 offset-0' />
        </form>
        <button className='btn btn-dark mt-1' onClick={()=>navigate(-1)}>Back</button>
      </div>
    </div>
  )
}
