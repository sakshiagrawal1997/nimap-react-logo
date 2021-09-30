
import '../App.css';
import React, { useState } from "react";
import { useHistory } from 'react-router';
import Login from './LoginWidget';

function UserPage() {
    const loggedInUser = parseInt(localStorage.getItem("user_name"));
    
const [cPass, setCpass] = useState(true);
function reload(){
    window.location.reload(false);
}
const history = useHistory();
 function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_tasks");
    reload();

 }
 if(!loggedInUser){ return(<div><h1 className="text-center">Login</h1> <Login /></div>);}
return (
<div className="user">
<form style={{textAlign:"left"}}>
<div className="name">
<p>
<label htmlFor="username">Username: </label>
<span  style={{marginLeft:"10px"}}>{loggedInUser}</span>
</p>
</div>
{cPass ? (
<div className="passwordclass">
<p>
<label htmlFor="password">Password :  </label>
<span style={{marginLeft:"10px"}}>*********</span>
</p>
</div>
) : (
<div className="contain">
<label htmlFor="password">Password: </label>
<input style={{marginLeft:"10px"}} type="password" name="password" />
</div>
)}
</form>
<div className="buttons d-flex">
{cPass ? (
<div>
<button className="change_password-btn" type="change_password" onClick={() => setCpass(false)}>
Change Password
</button>
<button className="Logo-btn1" style={{marginLeft:"30px"}} type="Logout" onClick={Logout}>Logout</button>
</div>
) : (
<div>
<button className="save_password-btn" type="save_password" onClick={() => setCpass(true)}>
Save Password
</button>
<button className="Logo-btn2" style={{marginLeft:"30px"}} type="Logout" onClick={Logout}>Logout</button>
</div>
)}
</div>
</div>
);
}

export default UserPage;