import React from 'react'
import "./form.css"
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Update = (props) => {

    

    let value , name;
    const handleInput=(e)=>{
      
        name= e.target.name;
      value=  e.target.value;
        
      props.setUpdateRow({...props.updateRow,[name]:value});


    }

    const update = async(e)=>{
        const {name, phoneNumber,email,
            hobbies} = props.updateRow;

        e.preventDefault();

        const res = await fetch("/updaterow/" + props.id, {
            method:"PUT",
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
        props.setUpdate(0);
        toast.success("Row updated successfully!")

    }



  return (
    <div className='box-form'>
      <form  className="formm" method="PUT">
            <label for="name" >Name  </label>
            <input  name="name" id="name" value={props.updateRow.name} type="text"
            onChange={handleInput} />
            <br/>

            <label for="email" >Email  </label>
            <input  name="email" id="email" value={props.updateRow.email} type="text"
            onChange={handleInput} />
            <br/>

            <label for="phone" >Phone Number  </label>
            <input  name="phoneNumber" id="phone"
            value={props.updateRow.phoneNumber}
             type="tel" 
             onChange={handleInput}/>
            <br/>


            <label for="hobbies" >Hobbies  </label>
            <input  name="hobbies" id="hobbies" value={props.updateRow.hobbies} type="text"
            onChange={handleInput} />
            <br/>


            <input type="submit" value="UPDATE ROW" className='update' onClick={update}/>
        </form>
      
    
    </div>
  )
}

export default Update
