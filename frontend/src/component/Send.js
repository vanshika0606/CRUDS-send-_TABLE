import React, { useState } from 'react'

import './form.css'

const Send = (props) => { 

// const [send, setSend] = useState([])
    
let send=[];


const[email, setEmail] = useState("")
const handleInput = (e)=>{
    let  value= e.target.value;
    setEmail(value)
}


const submit = async(e)=>{
    
    e.preventDefault();
    send.push(  props.send)
    
    
    const res = await fetch("http://localhost:3000/send" , {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
    },
    body: JSON.stringify({
      
     email ,

         send
    
      
    })
   
   });

   props.send.splice(0,props.send.length)
    console.log(props.send)
    send.splice(0, send.length)
     console.log(send)
        props.setSendbutton(false)
    }
    

    
  return (
    <div className='box-form'>
      
     
      <form className='send-form'>
        <label for="email">Enter email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleInput}/>
        <input type="submit" value="Send"  onClick={submit}  className='send-button'/>
      </form>
    </div>
  )
}

export default Send
