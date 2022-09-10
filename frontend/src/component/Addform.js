import React, { useState } from 'react'

import './form.css';

const Addform = (props) => {


    const [table,setTable] = useState({
        name:"",
        email:"",
        phoneNumber:"",
        hobbies:""
    })
    
let value , name;
    const handleInput=(e)=>{
      
        name= e.target.name;
      value=  e.target.value;
        
      setTable({...table,[name]:value});

    }

    const submit = async(e)=>{
          e.preventDefault();

          const {name,email,phoneNumber, hobbies} = table;

          const res = await fetch("http://localhost:3000/",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
          
                name,
                email, 
                phoneNumber,
                hobbies
              })
             
          })

          setTable({
            name:"",
            email:"",
            phoneNumber:"",
            hobbies:""
          })
          props.setSubmitform(1);
          props.setAdd(0);
    }
  return (
    <div className='box-form' >

        <form className="form" method="POST">
            <label for="name" >Name  </label>
            <input  name="name" id="name" value={value} type="text"
            onChange={handleInput} />
            <br/>

            <label for="email" >Email  </label>
            <input  name="email" id="email" value={value} type="text"
            onChange={handleInput} />
            <br/>

            <label for="phone" >Phone Number  </label>
            <input  name="phoneNumber" id="phone"
            value={value}
             type="tel" 
             onChange={handleInput} />
            <br/>


            <label for="hobbies" >Hobbies  </label>
            <input  name="hobbies" id="hobbies" value={value} type="text"
            onChange={handleInput} required />
            <br/>


            <input type="submit" className="submit" value="ADD ROW" onClick={submit}/>
        </form>
      
    </div>
  )
}

export default Addform
