import React from "react";
import "../Login.css";
import Login from "../Login";
import { LoginNavbar, Sidebar } from "../loginComponents";


const Profile = () => {
  return (
    <div className="grid grid-cols-5 gap-1">
      <div className="col-start-1 col-end-2">
        <Login/>
      </div>
      <div className="col-start-2 col-end-6">
        <h1>User Profile</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo, saepe ullam assumenda, doloremque rerum accusamus sapiente eaque quas autem natus adipisci deleniti odit eos suscipit error, ipsam officia fugit?</p>
      </div> 
    </div>
  )
}

export default Profile;