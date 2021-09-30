import React, { useEffect, useState } from "react";
import Login from './LoginWidget';

const TaskPage = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);
const [Title, setTitle ] = useState('');

useEffect(() => {
    fetchData();
    }, []);
const loggedInUser = parseInt(localStorage.getItem("user_name"));
if(!loggedInUser){ return(<div><h1 className="text-center">Please Login First</h1> <Login /></div>);}
function fetchData(){
let newData = JSON.parse(localStorage.getItem('user_tasks'));
console.log(newData);
setUsers(newData);
;}
function AddTask(){
let user = {
title : Title,
id : Math.floor(Math.random() * (100 - 6 + 1)) + 6,
completed : false
}
var user_temp = users;
user_temp.push(user);
localStorage.setItem('user_tasks',JSON.stringify(user_temp));
reload();
}
function reload(){
    window.location.reload(false);
}
function DeleteTask(id){
let newUsers = users.filter((user) => user.id !== id);
localStorage.setItem('user_tasks',JSON.stringify(newUsers));
setUsers(newUsers);
}
return (
<>
{loading ? (
<h1>Loading..</h1>
) : (
<div className = "col-12 center">
<table className="table table-bordered">
{users.map(user => (
<tr key={user.id}>
<th scope="row">{user.id}</th>
<td>{user.title}</td>
<td>{String(user.completed)}</td>
<td><button className = "custom-button-red "onClick = {() => DeleteTask(user.id)}>Delete</button></td>
</tr>
))}
</table>
<input type = 'text' placeholder='title' onChange = {(e)=> setTitle(e.target.value)}/>
<button className = "custom-button-blue" onClick = {AddTask}>Add Task</button>
</div>
)}
</>
);
};

export default TaskPage;
