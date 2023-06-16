import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function CreateNotes() {

    const navigate=useNavigate()
    const [Title, setTitle] = useState('');
    const [Note, setNote] = useState('');

    const HandleSubmit=((e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/Notes/CreateNotes/',{
            title:Title,
            note:Note
        })
        .then(()=>{
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    })

  return (
    <div className='row'>
        <h1 className='text-dark bg-warning text-center mt-1'>ADD NEW NOTE</h1>
      <div className="col-sm-10 offset-1">
        <form className='form-class bg-info p-3 border border-2 border-dark' onSubmit={HandleSubmit}>
            <label>Title:</label>
            <input type="text" name="Title" value={Title} placeholder='Enter The Title' onChange={(e)=>setTitle(e.target.value)} className='form-control'/>  <br />
            
            <label>Note:</label>
            <textarea name="Note" cols="30" rows="10" value={Note} placeholder='Write Your Note...' onChange={(e)=>setNote(e.target.value)} className='form-control' />

            <input type="submit" value="ADD" className='btn btn-success mt-1 offset-0' />
        </form>
         <button className='btn btn-dark mt-1' onClick={()=>navigate(-1)}>Back</button>
      </div>
      
    </div>
  )
}
