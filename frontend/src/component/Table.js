import React, { useEffect, useState } from 'react';
import './table.css';


const Table = (props) => {

  let i=1;
    
    const [rows, setRows] = useState([]);

    const [del, setDel] = useState(0);

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
      <div className='add-send'>
        <button  className="add"  onClick={()=>{
            if(props.add===0){
                props.setAdd(1)
            }else{
                props.setAdd(0)
            }
           
            
        }}>ADD</button>
        <button className='send' onClick={()=>{
          props.setSendbutton(!props.sendbutton)
          console.log(props.sendbutton)
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
    { rows.map( r=>{
       return <tr key={r._id}>
       <td>{i++}</td>
       <td>{r.name}</td>
       <td>{r.email}</td>
       <td>{r.hobbies}</td>
       <td>{r.phoneNumber}</td>
       <td><input type="checkbox"
        className='checkbox'
        
         
         onClick={ ()=>{
         
        props.setSend(oldArray => [...oldArray,
            { name:r.name,
          email:r.email,
          phoneNumber:r.phoneNumber,
          hobbies:r.hobbies
         }]);

        

       
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
