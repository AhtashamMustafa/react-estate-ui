import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen]=useState(false)
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/" className="login">
          Sign In
        </a>
        <a href="/" className="register">
          Sign Up
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={()=>setOpen((prev)=> !prev)}/>
        </div>
        <div className={open ? "menu active": "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contacts</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;