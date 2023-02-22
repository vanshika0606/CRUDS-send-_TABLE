import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom'
import './table.css';
import 'react-toastify/dist/ReactToastify.css';


const Table = (props) => {

   const navigate = useNavigate()
    
    const [rows, setRows] = useState([]);

    const [del, setDel] = useState(0);
    
    const [c, setC] = useState([])


    let a='';

    const logout = async()=>{
     let succ,msg;
    await  fetch("http://localhost:3000/logout").then((res)=>{
      return res.json();
}).then(async(data)=>{
  succ=data.success;
  msg= data.message;
})
if(succ===true){
  toast.success(msg)
  navigate("/login")
}else{
  toast.error(msg)
}
           
     
        
        
    }
    
    const fetchData = async()=>{
          fetch("http://localhost:3000/allrows").then((res)=>{
                return res.json();
          }).then(async(data)=>{
            setRows(data.table)
            
          })
    }

    useEffect(()=>{
        fetchData()
       
      
    },[props.submitform,del,props.update])

    
  return (
    <div className='table-box'>
      <div className='already-registered logout'>
          
          <button onClick={logout}>Logout</button>
         
        </div>
      <div className='add-send'>
        <button  className="add"  onClick={()=>{
            if(props.add===0){
                props.setAdd(1)
            }else{
                props.setAdd(0)
            }
           
            // navigate("/addrows")
            
        }}>ADD</button>
        <button className='send' onClick={()=>{
          props.setSendbutton(!props.sendbutton)
            
          c.forEach(r=>{
              if(r.checked==true){
                   a+=`\u2022  name : ${rows[r.id-1].name} , email : ${rows[r.id-1].email} , hobbies : ${rows[r.id-1].hobbies} , phone no. : ${rows[r.id-1].phoneNumber}\n`
                   
              }
              
              
             
              
          })
         
          
          props.send.push(a)
          console.log(props.send)
          
        }}>SEND</button>
        </div>
        
      <table className='table'>
  <thead>
    
    <tr>
      <th >ID</th>
      <th >NAME</th>
      <th >EMAIL</th>
      <th >HOBBIES</th>
      <th >PHONE NUMBER</th>
      <th >SELECT</th>
      <th >UPDATE / DELETE</th>
    </tr>

  </thead>

  <tbody>
    { rows.map( (r,ind)=>{
       return <tr key={r._id}>
       <td>{ind+1}</td>
       <td>{r.name}</td>
       <td>{r.email}</td>
       <td>{r.hobbies}</td>
       <td>{r.phoneNumber}</td>
       <td><input type="checkbox"
        className='checkbox'
        
         
         onClick={ (e)=>{
        
         
           
           
             let m=-1;
           c.forEach(a=>{
            if(a.id===ind+1){
              m=ind;
            }
           })
          
           if(m==-1){
            c.push({checked:e.target.checked, id:ind+1})
           }else{
            c[ind].checked=e.target.checked
           }
        
          // console.log(c)
        
        

        
           
       }
      }
        /></td>
       <td>
       <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>{
        props.setUpdateRow({
            name:r.name,
            email:r.email,
            phoneNumber:r.phoneNumber,
            hobbies:r.hobbies
        })
        props.setId(r._id);

        props.setUpdate(1);

       }}></i>
       
       <i className="fa fa-trash" aria-hidden="true"
       onClick={()=>{
        
        fetch('http://localhost:3000/deleterow/' +r._id, {
      method: 'DELETE',
    })

    setDel(!del)
    toast.success("Row deleted successfully!")

       }}
       ></i>

       </td>
     </tr>

    })
    
}
   
  </tbody>
    
 
</table>

    </div>
  )
}

export default Table
