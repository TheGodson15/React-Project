import React, { useEffect, useState } from "react";
import "./header.css";
import bell from "../../../assets/images/new.svg";
import { isExpired, decodeToken } from "react-jwt";
export default function Header() {

  return (
    <div>
      <header>
        <input
          type="text"
          className="header-input"
          placeholder="🔍   Search"
        ></input>
        <div className="user-details">
          <img className="notification" src={bell}></img>
          <p className="user-name">{}</p>
          
          <div className="dp">
            <img src={""} 
            style={{height:"45px", width:"45px"}}></img>
          </div>
        </div>
      </header>
    </div>
  );
}
