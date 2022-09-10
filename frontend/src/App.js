
import { useEffect, useState } from 'react';
import './App.css';
import Table from './component/Table'
import Addform from './component/Addform.js'
import Acc from './Accomodation/Acc.js'
import Update from './component/Update';
import Send from './component/Send.js'

function App() {

  const[add, setAdd] = useState(0);

  const [id, setId] = useState("")

  const[send, setSend] = useState([]);

  const[sendbutton , setSendbutton] = useState(0);

  const[submitform , setSubmitform] = useState(0);

  const[updateRow, setUpdateRow] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    hobbies:""
  })

  const[update, setUpdate] = useState(0);


 

  return (
   
    <div className="App">
      <Table add={add} setAdd={setAdd}  submitform = {submitform} setUpdateRow={setUpdateRow} setId={setId} setUpdate={setUpdate} update={update} send={send} setSend={setSend} sendbutton={sendbutton} setSendbutton={setSendbutton} /> 


      {add===1?<Addform setAdd={setAdd} setSubmitform={setSubmitform}/>:''}

     { update===1 ? <Update id={id} updateRow={updateRow} setUpdateRow={setUpdateRow} setUpdate={setUpdate} /> : ''}


    
     {sendbutton===true ? <Send setSendbutton={setSendbutton} setSend={setSend} send={send}/> : ''}
    
      {/* {<Addform/> } */}
    





    </div>
  );
}

export default App;
