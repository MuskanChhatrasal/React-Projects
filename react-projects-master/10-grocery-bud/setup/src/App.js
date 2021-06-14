import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('')
  const [list,setList] = useState([])
  const [isEditing,setIsEditing] = useState(false)
  const [editID,setEditId] = useState(null)
  const [alert,setAlert] = useState({show: false, msg: '', type: ''})

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!name){
      //display alert
      showAlert(true,'please enter value','danger')
    }else if(name && isEditing){
      //deal with edit
    }else{
      showAlert(true,'item added to the list','success')
      const newItem = {id:new Date().getTime().toString(),title:name};
      setList([...list,newItem])
      setName('')
    }
  }
  const showAlert = (show=false,msg='',type='')=>{
    setAlert({show,msg,type})
  }
  const clearList = ()=>{
    showAlert(true,'empty list','danger');
    setList([]);
  }
  return (
  <section className='section-center'>
  <form className='grocery-form' onSubmit={handleSubmit}>
    {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
    <h3>grocery bud</h3>
    <div className='form-control'>
       <input type='text' className='grocery' placeholder='e.g eggs' value={name} onChange={(e) => setName(e.target.value)}/>
       <button type='submit' className='submit-btn'>
         {isEditing ? 'edit' : 'submit'}
       </button>
    </div>
  </form>
   {list.length > 0 && (
     <div className='grocery-container'>
      <List items={list}/>
      <button className='clear-btn' onClick={clearList}>clear items</button>
    </div>
   )}
  </section>
  )
}

export default App
