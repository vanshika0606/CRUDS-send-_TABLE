
import { useEffect, useState } from 'react';
import './App.css';
import Table from './component/Table'
import Addform from './component/Addform.js'
import Acc from './Accomodation/Acc.js'
import Update from './component/Update';
import Send from './component/Send.js'
import { ToastContainer, toast } from 'react-toastify';
import Register from './component/Register';
import {Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import AuthenticatedRoute  from "./auth/AuthenticatedRoute.js";
import Otp from './component/Otp';

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
      <Routes>
      
      <Route exact path="/" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/allrows" element={<AuthenticatedRoute/>} >
<Route exact path="/allrows" element={
       <Table add={add} setAdd={setAdd}  submitform = {submitform} setUpdateRow={setUpdateRow} setId={setId} setUpdate={setUpdate} update={update} send={send} setSend={setSend} sendbutton={sendbutton} setSendbutton={setSendbutton} /> }
       />
       </Route>
      

      {/* <AuthenticatedRoute path="/allrows"  element={<Table add={add} setAdd={setAdd}  submitform = {submitform} setUpdateRow={setUpdateRow} setId={setId} setUpdate={setUpdate} update={update} send={send} setSend={setSend} sendbutton={sendbutton} setSendbutton={setSendbutton} /> }
       /> */}
       {/* <AuthenticatedRoute path="/email-verification" component={Otp}/> */}
      {/* <Route exact path="/email-verification" element={<Otp/>} /> */}

       <Route exact path="/email-verification" element={<AuthenticatedRoute/>} >
       <Route exact path="/email-verification" element={<Otp/>} />
       </Route>

    


    
     
     
    

     </Routes>
     {add===1?<Addform setAdd={setAdd} setSubmitform={setSubmitform}/>:''}

     { update===1 ? <Update id={id} updateRow={updateRow} setUpdateRow={setUpdateRow} setUpdate={setUpdate} /> : ''}
    <ToastContainer theme='colored'/>

    {sendbutton===true ? <Send setSendbutton={setSendbutton} setSend={setSend} send={send} /> : ''} 
    
    </div>
  );
}

export default App;
