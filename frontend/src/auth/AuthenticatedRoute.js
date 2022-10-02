import {Navigate ,Outlet, Route} from 'react-router-dom'
import Cookies from 'js-cookie';



export default function AuthenticatedRoute (){
    
      const token = Cookies.get('token')
     
      console.log(token)
      
       
    return !token?<Navigate to="/"/> :<Outlet/>

}
